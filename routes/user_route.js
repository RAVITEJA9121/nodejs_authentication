const express = require("express");
const userLoginHandler = require("../contoller/login_handler");
const userSignUpHandler = require("../contoller/signup_handler");
const userLogOutHandler = require("../contoller/logout_handler");
user_router = express.Router();


user_router.route("/login")
    .post(userLoginHandler);


user_router.route("/signup")
    .post(userSignUpHandler);

user_router.route("/logout")
    .post(userLogOutHandler);

module.exports = user_router;