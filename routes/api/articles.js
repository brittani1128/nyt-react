const router = require("express").Router();
// const articlesController = require("../../controllers/articlesController");
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var Article = require("../../models/Article.js");


// Database configuration with mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise;
var db = mongoose.connection;
mongoose.connect(MONGODB_URI);


// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});


// // Matches with "/api/articles" -- when route w get request hit, finds all articles from db
router.get("/", function(req,res){

      // scrape NPR science section
  request("https://www.nytimes.com/", function (error, response, html) {
    var $ = cheerio.load(html);
    // console.log(response)
    // res.json(response)

    $("article.css-180b3ld").each(function (i, element) {

      var newArticle = {};

      
      newArticle.url = $(element).find("a").attr("href")
      newArticle.title = $(element).find("h2").text()
      newArticle.summary = $(element).find("p").text()

    // Create new Article model with scraped article info
      var newEntry = new Article(newArticle);

      // Save new Article in db
      newEntry.save(function (err, saved) {
        if (err) {
          console.log(err);
        } else {
          console.log(saved)
        }
      });

    });

    // Redirect back to home page when finished
    // res.redirect("/");
    res.send("articles scraped!")
  });
})
//   .get(articlesController.findAll)

// //   .post(articlesController.create);

// // // Matches with "/api/books/:id"
// // router
// //   .route("/:id")
// //   .get(booksController.findById)
// //   .put(booksController.update)
// //   .delete(booksController.remove);

module.exports = router;