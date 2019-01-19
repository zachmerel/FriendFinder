//Routing code based on hot resturant activity and star wars activity

// Linking the friends.js file and the object inside of it
var friendsData = require("../data/friends");

//exporting api routes to server.js
module.exports = (app) => {
    //this gets the friends object when user looks at the JSON object
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });
    // Create new friend- takes in JSON input
    app.post("/api/friends", (req, res) => {
        var newfriend = req.body;
        // Using a RegEx Pattern to remove spaces from newCharacter
        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

        for (var i = 0; i < newfriend.scores.length; i++) { newfriend.scores[i] = parseInt(newfriend.scores[i]); };
        var newFriendSum = (newfriend.scores).reduce((a, b) => a + b);
        let userSums = [];
        for (var i = 0; i < friendsData.length; i++) {
            var currentFriendSum = (friendsData[i].scores).reduce((a, b) => a + b);
            userSums.push(currentFriendSum);
        };
        let absValues = [];
        for (var i = 0; i < userSums.length; i++) {
           
            let abs = Math.abs(userSums[i] - newFriendSum);
            absValues.push(abs);
        }
        let min = Math.min(...absValues)

        let smallestNumIndex = absValues.indexOf(min);
        
        
        friendsData.push(newfriend);
        res.json(friendsData[smallestNumIndex]);
    });
};