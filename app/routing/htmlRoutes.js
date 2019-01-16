//Routing code based on hot resturant activity

const path = require("path");

//exporting html routes to server.js
module.exports = function (app) {
    // Basic route that sends the user to the home or survey page.
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/survery", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
};