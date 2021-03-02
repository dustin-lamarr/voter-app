const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/database");
const routes = require("./routes");
const { User } = require("./app/models");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./config/passport")(User);

mongoose.connect(config.database)

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
