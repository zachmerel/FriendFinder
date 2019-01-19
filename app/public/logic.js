// Linking the friends.js file and the object inside of it
// const friendsData = require("../data/friends");

console.log("logic on load")
// Capture the form inputs
$("#submit").on("click",  (event) => {
    console.log("logic js working")
    event.preventDefault();

    const validateForm = () =>{
        let isValid = true;
        //if name,photo or any of the questions are left unanswered form is not valid 
        if($(".form-control").val() === "" || $(".chosen-select").val() === "" ) {
             isValid = false;
        }
        else{
             isValid = true
        }
        return isValid;
    };

    // If validateForm function returns true...
    if (validateForm()) {
        console.log("add to api")
        // Create an object for the user"s data
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData,  (data) =>  {
            console.log("userData",userData)

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);

            // Show the modal with the best match
            $("#results-modal").modal("toggle");

        });
    } else {
    //alert appears if either name or photo fields are left blank
        alert("Please fill out all fields before submitting!");
    }

    // const compare = () =>{
    //     let absScore = [];
    //     let userScoreTotal = (userData.scores).reduce((a, b) => a + b, 0);
    //     let scoreDifferenceArray = [];
    //     for (let i = 0; i < friendsData.length; i++){
    //         let sum =(i.friendsData.scores).reduce((a, b) => a + b, 0);
    //         };
    //         absScore.push(sum);
    //     }
    //     for (let i = 0; i < absScore.length; i++){
    //         let scoreDifference = Math.abs(i - userScoreTotal );
    //         scoreDifferenceArray.push(scoreDifference);
    //         //find the smallest difference in scoredifferencearray .
    //     }
});
