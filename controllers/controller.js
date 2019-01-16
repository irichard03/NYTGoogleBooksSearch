const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");
 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
mongoose.connect(MONGODB_URI);

//routes
//api/books get books
router.get("/api/books", (req,res) =>{
    db.books.find({}).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        res.json(error);
    });
});

//api/books post to mongo
router.post("/api/books", (req,res) =>{
    db.books.create(req.body).then((data)=>{
        
    }).catch((error)=>{
        res.json(error);
    });
});

//todo api/books/:id (delete) from mongo

module.exports = router;