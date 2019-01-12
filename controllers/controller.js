const express = require("express");
const router = express.Router();
const axios = require("axios");

const db = require("../models");
const mongoose = require("mongoose");
 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
mongoose.connect(MONGODB_URI);

//routes

//api/books get books

//api/books post to mongo

//api/books/:id (delete) from mongo

//* load page