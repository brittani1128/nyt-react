// Require mongoose
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create schema for Article model
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    url: {
        type: String,
        required: true
    },
    summary: {
        type: String,

    },
    saved: {
        type: Boolean,
        default: false
    }
});

// Create Article model
var Article = mongoose.model("Article", ArticleSchema);


// Export the model
module.exports = Article;