const router = require("express").Router();
// const articlesController = require("../../controllers/articlesController");
// const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const Article = require("../../models/Article.js");


// Database configuration with mongoose
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise;
const db = mongoose.connection;
mongoose.connect(MONGODB_URI);


// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Matches with "/api/articles"
router.get("/", function(req,res){
    Article.find({}, function (error, data) {
        if (error) {
          console.log(error);
          res.status(500).send(error);
        }
        else {
    
          console.log(data)
          //sends data response in json to index.handlebars file
          res.json(data);
        }
      });
})

module.exports = router;