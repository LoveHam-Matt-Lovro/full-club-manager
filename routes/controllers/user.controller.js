const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User.model.js");
// const checkIfSamePerson = require("../../utils/checkIfSamePerson");



exports.getLoginForm = (req, res, next) => {
    console.log("get Login Form")
}


exports.getRegisterForm = (req, res, next) => {
    console.log("get Registration Form")
}


exports.getProfilePage = (req, res, next) => {
    console.log("get profile page")
}


exports.getProfilePage = (req, res, next) => {
    console.log("get profile page")
}


exports.getAllUsers = (req, res, next) => {
    console.log("get all users")
    User.find()
        .then((allUsers) => res.json(allUsers))
        .catch((err) => res.json(err));
}