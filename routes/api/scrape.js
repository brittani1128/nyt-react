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


// // Matches with "/api/scrape"
router.get("/", function(req,res){

  // Scrape NYT
  request("https://www.nytimes.com/", function (error, response, html) {
    const $ = cheerio.load(html);
    // console.log(response)
    // res.json(response)

    $("article.css-180b3ld").each(function (i, element) {

      let newArticle = {};

      
      newArticle.url = $(element).find("a").attr("href")
      newArticle.title = $(element).find("h2").text()
      newArticle.summary = $(element).find("p").text()

    // Create new Article model with scraped article info
    const newEntry = new Article(newArticle);

      // Save new Article in db
      // MOVE INTO CONTROLLER FILE ============
      newEntry.save(function (err, saved) {
        if (err) {
          console.log(err);
        } else {
          console.log(saved)
        }
      });
//============================
    });

    // Redirect back to home page when finished
    res.redirect("/results");
    // res.send("articles scraped!")
  });
})



module.exports = router;