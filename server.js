//Server code based on hot resturant activity

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//send all the files in public folder and make them available to my other files
app.use(express.static("app/public"))
// requiring the routing js files, link them to server.js 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT,  () =>  {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});