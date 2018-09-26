import axios from "axios";

export default {
  // Main get route
  getArticles: function() {
        return axios.get("/api/articles");
  },

  // Scrape Articles
  scrapeArticles: function() {
    return axios.get("/api/scrape");
  }
}

 


  // Saved articles
//   getSaved: function() {
//     return axios.get("/api/saved");
//   },
//   // Remove an article from saved
//   unsave: function(id) {
//     return axios.delete("/api/saved/" + id);
//   },
//   // Save an article
//   save: function(articleData) {
//     console.log(articleData);
//     return axios.post("/api/saved", articleData);
//   }
// };