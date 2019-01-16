//Routing code based on hot resturant activity

const path = require("path");

//exporting html routes to server.js
module.exports = function (app) {
    // Basic route that sends the user to the home or survey page.
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};