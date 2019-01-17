// document.ready(){
// Chosen CSS
// var config = {
//     ".chosen-select": {},
//     ".chosen-select-deselect": {
//         allow_single_deselect: true
//     },
//     ".chosen-select-no-single": {
//         disable_search_threshold: 10
//     },
//     ".chosen-select-no-results": {
//         no_results_text: "Oops, nothing found!"
//     },
//     ".chosen-select-width": {
//         width: "95%"
//     }
// };

// for (var selector in config) {
//     $(selector).chosen(config[selector]);
// }
console.log("logic on load")
// Capture the form inputs
$("#submit").on("click", function (event) {
    console.log("logic js working")
    event.preventDefault();

    // Form validation checks to make sure that the user has input a name and photo value
    // function validateForm() {
    //     console.log("isworking")
    //     //sets up boolean statement assuming name is not blank
    //     var isValid = true;
    //     $(".form-control").each(function () {
    //         //checks to see if there is value enetered for name
    //         if ($(this).val() === "") {
    //             //sets boolean to false if blank
    //             isValid = false;
    //         }
    //     });

    //     $(".chosen-select").each(function () {
    //         //checks to see if there is value enetered for phoyo
    //         if ($(this).val() === "") {
    //             //sets boolean to false if blank
    //             isValid = false;
    //         }
    //     });
    //     //returns isValid as either true or flase based on if there is a value for name and photo
    //     return isValid;
    // }
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
        $.post("/api/friends", userData, function (data) {
            console.log("post to api console log")

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            // $("#match-name").text(data.name);
            // $("#match-img").attr("src", data.photo);

            // Show the modal with the best match
            // $("#results-modal").modal("toggle");

        });
    } else {
    //alert appears if either name or photo fields are left blank
        alert("Please fill out all fields before submitting!");
    }
});
// };