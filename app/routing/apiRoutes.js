//Routing code based on hot resturant activity and star wars activity

// Linking the friends.js file and the object inside of it
var friendsData = require("../data/friends");

//exporting api routes to server.js
module.exports = function (app) {
    //this gets the friends object when user looks at the JSON object
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    // Create new friend- takes in JSON input
    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;
        // Using a RegEx Pattern to remove spaces from newCharacter
        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriend);

        friendsData.push(newfriend);

        res.json(newfriend);
    });
};