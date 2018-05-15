# Creating MongoDB API with Express.JS

> ## What we'll be creating?
> We'll be creating a JSON-based API for a fictional dealership website  .
> We won't be focus on front-end at all, instead all of our work will be back-end based.

> ## Technologies
> * Node
>   * Async/Await
> * Express.JS
> * MongoDB
>   * Mongoose

> ## API Endpoints
> | Type | Url | Param | Result
> | - | - | - | - |
> | GET | /users |  | - lists all users
> | POST | /users | firstName,<br>lastName,<br>email | - creates a new user
> | GET | /users/:id |  | - lists particular user
> | PUT | /users/:id | firstName,<br>lastName,<br>email | - update particular user( by replacing)
> | PATCH | /users/:id | firstName,<br>lastName,<br>email | - update particular user( by patching fields)
> | DELETE | /users/:id |  | - delete particular user
> | GET | /users/:id/cars |  | - lists all cars sold by particular user
> | POST | /users/:id/cars | make,<br>model,<br>year | - creates a new car for particular user
> | GET | /cars |  | - lists all cars
> | POST | /cars | seller,<br>make ,<br>model ,<br>year | - creates a new car
> | GET | /cars/:id |  | - lists particular car
> | PUT | /cars/:id | make,<br>model,<br>year | - update particular car( by replacing)
> | PATCH | /cars/:id | make,<br>model,<br>year | - update particular car( by patching fields)
> | DELETE | /cars/:id |  | - delete particular user's car
