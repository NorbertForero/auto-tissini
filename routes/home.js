const express = require("express");
const Home = require("../controllers/home");

const api = express.Router();

//Gets
api.get("", Home.getServer);

module.exports = api;