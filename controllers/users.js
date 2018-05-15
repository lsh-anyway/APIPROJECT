const User = require("../models/user");
const Car = require("../models/car");

// const Joi = require("joi");
// const idSchema = Joi.object().keys({
//   userId: Joi.string()
//     .regex(/^[0-9a-fA-F]{24}$/)
//     .required()
// });

module.exports = {
  // Use Callback
  // index: (req, res, next) => {
  //   User.find({}, (err, users) => {
  //     if (err) {
  //       next(err);
  //     }
  //     res.status(200).json(users);
  //   });
  // },

  // // Use Promises
  // index: (req, res, next) => {
  //   User.find({})
  //     .then(users => {
  //       res.status(200).json(users);
  //     })
  //     .catch(err => {
  //       next(err);
  //     });
  // },

  // Use Async/Await
  // index: async (req, res, next) => {
  //   try {
  //     const users = await User.find({});
  //     res.status(200).json(users);
  //   } catch (err) {
  //     next(err);
  //   }
  // },
  //
  // Use Async/Await and Express-promise-router
  // Validation DONE
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },

  // Use Callback
  // newUser: (req, res, next) => {
  //   const newUser = new User(req.body);
  //   newUser.save((err, user) => {
  //     if (err) {
  //       next(err);
  //     }
  //     res.status(201).json(user);
  //   });
  // },

  // Use Async/Await
  // newUser: (req, res, next) => {
  //   const newUser = new User(req.body);
  //   newUser
  //     .save()
  //     .then(user => {
  //       res.status(201yar).json(user);
  //     })
  //     .catch(err => {
  //       next(err);
  //     });
  // },

  // Use Async/Await
  // newUser: async (req, res, next) => {
  //   const newUser = new User(req.body);
  //   try {
  //     const user = await newUser.save();
  //     res.status(201).json(user);
  //   } catch (err) {
  //     next(err);
  //   }
  // },

  // Use Async/Await and Express-promise-router
  // Validation DONE
  newUser: async (req, res, next) => {
    const newUser = new User(req.value.body);
    // const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  },

  // Validation DONE
  getUser: async (req, res, next) => {
    // Joi.validate(req.params, idSchema)
    // New way
    const { userId } = req.value.params;
    // Old way
    // const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },

  // Validation DONE
  replaceUser: async (req, res, next) => {
    // enforce that req.body must contain all the fields
    const { userId } = req.value.params;
    const newUser = req.value.body;

    const result = User.findByIdAndUpdate(userId, newUser);
    console.log(result);
    res.status(200).json({ success: true });
  },

  // Validation DONE
  updateUser: async (req, res, next) => {
    // req.body may contain any number of fields
    const { userId } = req.value.params;
    const newUser = req.value.body;

    const result = User.findByIdAndUpdate(userId, newUser);
    console.log(result);
    res.status(200).json({ success: true });
  },

  // Validation DONE
  getUserCars: async (req, res, next) => {
    const { userId } = req.value.params;
    const user = await User.findById(userId).populate("cars");
    res.status(200).json(user.cars);
  },

  // Validation DONE
  newUserCar: async (req, res, next) => {
    const { userId } = req.value.params;
    // Create a new car
    const newCar = new Car(req.value.body);
    // Get user
    const user = await User.findById(userId);
    // Assign user as a car's seller
    newCar.seller = user;
    // Save the car
    await newCar.save();
    // Add car to the user's selling array 'cars'
    user.cars.push(newCar);
    // Save the user
    await user.save();
    res.status(201).json(newCar);
  }
};

/*
    we can interact mongoose in 3 different way:
    1) Callback
    2) Promises
    3) Async/Await
 */
