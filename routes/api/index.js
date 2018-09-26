const router = require("express").Router();
const articleRoutes = require("./articles");
const scrapeRoutes = require("./scrape");

// Article routes
router.use("/articles", articleRoutes);

// Scrape Routes
router.use("/scrape", scrapeRoutes);

module.exports = router;