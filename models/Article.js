// Require mongoose
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Create schema for Article model
const ArticleSchema = new Schema({
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
const Article = mongoose.model("Article", ArticleSchema);


// Export the model
module.exports = Article;