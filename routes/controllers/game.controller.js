const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const checkIfSamePerson = require("../../utils/checkIfSamePerson");



exports.getCreateForm=(req,res,next) => {
    console.log("get create Form")
}


exports.postCreateForm=(req,res,next) => {
    console.log("post create Form")
}



exports.postCreateForm=(req,res,next) => {
    console.log("postCreateForm")
}


exports.gameDetails=(req,res,next) => {
    console.log("gameDetails")
}

exports.getEditForm=(req,res,next) => {
    console.log("getEditForm")
}


exports.postEditForm=(req,res,next) => {
    console.log("postEditForm")
}

exports.deleteGame=(req,res,next) => {
    console.log("deleteGame")
}