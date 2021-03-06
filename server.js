// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cheerio = require("cheerio");
// const mongojs = require("mongojs");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express()


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


// Add routes, both API and view
app.use(routes) //connects to index.js in routes folder


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");


// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

