
$(document).ready(function () {
    buildhtml();

    function buildhtml(){
        $("body").append($("<div>").addClass("container"));
        $(".container").append($("<div>").addClass("card-panel yellow darken-1 col s12 center-align").attr("id","mainCard"));
        $("#mainCard").append($("<h4>").addClass("strong").attr("id","surveyQuestions").html("Survey Questions"));
        $("#surveyQuestions").append($("<div>").addClass("card-panel left-align white").attr("id","question-card-panel"));
        $("#question-card-panel").append($("<h5>").addClass("strong").attr("id","aboutYou").html("About You"));
        $("#question-card-panel").append($("<br>"));
        $("#question-card-panel").append($("<label>").addClass("active").attr({"id":"nameLabel","for": "name", html: "Name", required: "true"}));
        $("#nameLabel").append($("<>").addClass("").attr("id",""));
        

    }
});