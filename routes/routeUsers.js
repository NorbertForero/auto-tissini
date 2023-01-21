const express = require("express");
const UserController = require("../controllers/controllerUsers");

const api = express.Router();

//Gets
api.get("", UserController.getServer);
api.get("/user/:mobilephone", UserController.getUser);
api.get("/users", UserController.getUsers);

//Deletes
api.delete("/user/:id", UserController.deleteUser);
api.delete("/userCel/:mobilephone", UserController.deleteUserMobilephone);

module.exports = api;