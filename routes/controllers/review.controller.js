const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../../models/Review.model.js")
// const checkIfSamePerson = require("../../utils/checkIfSamePerson");

// needs to be reviews for a specific game, so we might need to populate games?
exports.listReviews=(req,res,next) => {
    console.log("list of all reviews for that game")
    Review.find()
    .then((allReviews) => res.json(allReviews))
    .catch((err) => res.json(err));

    
}


exports.getCreateForm=(req,res,next) => {
    console.log("get create Form")

    
}


exports.postCreateForm=(req,res,next) => {
    console.log("post create Form")
}



exports.postCreateForm=(req,res,next) => {
    console.log("postCreateForm")
}



exports.getEditForm=(req,res,next) => {
    console.log("getEditForm")
}


exports.postEditForm=(req,res,next) => {
    console.log("postEditForm")
}

exports.deleteReview=(req,res,next) => {
    console.log("deleteReview")
}