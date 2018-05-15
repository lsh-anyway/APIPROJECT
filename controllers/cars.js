const User = require("../models/user");
const Car = require("../models/car");

module.exports = {
  index: async (req, res, next) => {
    // Get all the cars!
    const cars = await Car.find({});
    res.status(200).json(cars);
  },

  newCar: async (req, res, next) => {
    // 1. Find the actual seller
    const seller = User.findById(req.value.body.seller);

    // 2. Create a new car
    const newCar = req.value.body;
    delete newCar.seller;

    const car = new Car(newCar);
    car.seller = seller;

    await car.save();

    // 3. Add newly created car to the actual seller
    seller.cars.push(car);
    await seller.save();

    // const newCar = new Car(req.value.body);
    // const car = await newCar.save();
    // res.status(201).json(car);
  },

  getCar: async (req, res, next) => {
    const { carId } = req.value.params;
    const car = await Car.findById(carId);
    res.status(200).json(car);
  },

  replaceCar: async (req, res, next) => {
    const { carId } = req.value.params;
    const newCar = req.value.body;

    const result = User.findByIdAndUpdate(carId, newCar);
    console.log(result);
    res.status(200).json({ success: true });
  },

  updateCar: async (req, res, next) => {
    const { carId } = req.value.params;
    const newCar = req.value.body;

    const result = Car.findByIdAndUpdate(carId, newCar);
    console.log(result);
    res.status(201).json({ success: true });
  },

  deleteCar: async (req, res, next) => {
    const { carId } = req.value.params;

    // Get a car
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ error: "car don't exist" });
    }
    const sellerId = car.seller;
    // Get a seller
    const seller = await User.findById(sellerId);

    // Remove the car
    await car.remove();
    // Remove car from the seller's selling list
    await seller.cars.pull(car);
    await seller.save();

    res.status(200).json({ success: true });
  }
};
