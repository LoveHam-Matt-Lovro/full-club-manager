const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User.model.js");
// const checkIfSamePerson = require("../../utils/checkIfSamePerson");



exports.editUser = (req, res, next) => {
    console.log("edit user")
    const { userId } = req.params;

    // find the user by id and update it
    User.findByIdAndUpdate(userId, req.body, { new: true })
        .then((updatedUser) => res.json(updatedUser))
        .catch((err) => res.json(err));
}


exports.getUser = (req, res, next) => {
    console.log("get user")
    const { userId } = req.params;

    User.findById(userId)
        .then((user) => {


            res.status(200).json(user)
        })
        .catch((err) => res.json(err));


}












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