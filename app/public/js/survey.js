$(document).ready(function () {
    buildhtml();
    // $('select').formSelect();
    

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

        buildQuestions(questionFormContainer, 2, "some New survey question");

   
    }

    function buildQuestions(questionForm, questionNumber, questionString){

        questionForm.append($("<h4>").html("Question "+questionNumber));
        questionForm.append($("<div>").addClass("input-field col s12").attr("id","survey-row"+questionNumber));


        $("#survey-row"+questionNumber).append($("<select>").attr("id","question-"+questionNumber));
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
        
});