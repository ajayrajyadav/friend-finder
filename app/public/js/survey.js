$(document).ready(function () {
    

    buildhtml();
    
    

    function buildhtml(){
        $("body").append($("<div>").addClass("container").attr("id", "first-container"));
        $("#first-container").append($("<div>").addClass("card-panel cyan darken-1 col s12 center-align").attr("id","main-container"));
        $("#main-container").append($("<h4>").attr("id","title").html("Survey Questions"));
        $("#main-container").append($("<div>").addClass("card-panel left-align white").attr("id","about-you"));
        $("#about-you").append($("<h5>").html("About You"));
        $("#about-you").append($("<div>").addClass("row").attr("id","first-row"));
        $("#first-row").append($("<form>").addClass("col s12").attr("id","the-form"));
        $("#the-form").append($("<div>").addClass("row").attr("id","name-row"));
        $("#name-row").append($("<div>").addClass("input-field col s6").attr("id","name-panel"));
        $("#name-panel").append($("<input>").addClass("validate").attr({"id": "name", validate: "true", required: "true", type: "text"}));
        $("#name-panel").append($("<label>").attr("for","name").html("Your Name"));

        $("#name-row").append($("<div>").addClass("row").attr("id","photo-row"));
        $("#photo-row").append($("<div>").addClass("input-field col s6").attr("id","photo-panel"));
        $("#photo-panel").append($("<input>").addClass("validate").attr({"id": "photo", validate: "true", required: "true", type: "text", placeholder: "http://"}));
        $("#photo-panel").append($("<label>").attr("for","name").html("Link to Photo Image (Required)"));


        $("#the-form").append($("<div>").addClass("row").attr("id","survey-contianer"));
        $("#survey-contianer").append($("<h4>").html("Question 1"));
        $("#survey-contianer").append($("<div>").addClass("input-field col s12").attr("id","survey-row"));

        $("#survey-row").append($("<select>").attr("id","question-1"));
        $("#question-1").append($("<option>").attr({"value": "", disabled: "true", selected: "true"}).html("choose your option"));
        $("#question-1").append($("<option>").attr("value", "1").html("Strongly Agree"));
        $("#question-1").append($("<option>").attr("value", "2").html("Somewhat Agree"));
        $("#question-1").append($("<option>").attr("value", "3").html("Neutral"));
        $("#question-1").append($("<option>").attr("value", "4").html("Somewhat Disagree"));
        $("#question-1").append($("<option>").attr("value", "5").html("Strongly Disagree"));
        $("#survey-row").append($("<label>").html("I see myself as extroverted, enthusiastic."));
        $('select').formSelect();

        var questionFormContainer = $("#survey-contianer");
        //for loop will go here...
        buildQuestions(questionFormContainer, 2, "some New survey question");

        $("#the-form").append($("<div>").addClass("row").attr("id","btn-row"));
        $("#btn-row").append($("<div>").addClass("row").attr("id","btn-panel"));
        $("#btn-panel").append($("<button>").addClass("btn waves-effect waves-light, center-align").attr({type: "submit", name:"action", id: "submit-btn"}).html("Submit"));
    

   
    }

    function buildQuestions(questionForm, questionNumber, questionString){

        questionForm.append($("<h4>").html("Question "+questionNumber));
        questionForm.append($("<div>").addClass("input-field col s12").attr("id","survey-row"+questionNumber));


        $("#survey-row"+questionNumber).append($("<select>").addClass("browswer-default").attr("id","question-"+questionNumber));
        $("#question-"+questionNumber).append($("<option>").attr({"value": "", disabled: "true", selected: "true"}).html("choose your option"));
        $("#question-"+questionNumber).append($("<option>").attr("value", "1").html("Strongly Agree"));
        $("#question-"+questionNumber).append($("<option>").attr("value", "2").html("Somewhat Agree"));
        $("#question-"+questionNumber).append($("<option>").attr("value", "3").html("Neutral"));
        $("#question-"+questionNumber).append($("<option>").attr("value", "4").html("Somewhat Disagree"));
        $("#question-"+questionNumber).append($("<option>").attr("value", "5").html("Strongly Disagree"));
        $("#survey-row"+questionNumber).append($("<label>").html(questionString));
        $('select').formSelect();

        // $("#survey-row"+questionNumber).append($("<select>").attr("id","question-"+questionNumber));
        // $("#question-"+questionNumber).append($("<option>").attr({"value": "1", text: "Option 1"}));
        // $("#question-"+questionNumber).append($("<option>").attr({"value": "2", text: "Option 2"}));
        // $("#question-"+questionNumber).append($("<option>").attr("value", "3").html("option 3"));
        // $("#survey-row"+questionNumber).append($("<label>").html(questionString));
        // $('select').formSelect();
    }

    $(document).on("click", "#submit-btn", function () {
        if(validateForm()){
            var newFriend = {
                name: $("name").val().trim(),
                provilePic: $("photo").val().trim()
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
                ]
            }
            var currentURL = window.location.origin;
            $.post(currentURL + "/api/friends", newFriend, function(data) {
                //Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $("#matchName").text(data.name);
                $("#matchPic").attr("src", data.profilePic);
            });
            $('.modal').modal();
        }else{
            //add modal ***** to Do ****
            console.log("please fill out all the fields before submitting survey")
        }
    });

    function validateForm(){
        var isValid = true;
        $(".validate").each(function(){
            if($(this).val()=== ""){
                isValid = false;
            }
        });

        $(".browser-default").each(function(){
            if($("this").val()===""){
                isValid = false;
            }
        })
        return isValid;
    }

        
});