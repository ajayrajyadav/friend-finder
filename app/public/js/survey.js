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

        $("#the-form").append($("<div>").addClass("row").attr("id","photo-row"));
        $("#photo-row").append($("<div>").addClass("input-field col s6").attr("id","photo-panel"));
        $("#photo-panel").append($("<input>").addClass("validate").attr({"id": "photo", validate: "true", required: "true", type: "text", placeholder: "http://"}));
        $("#photo-panel").append($("<label>").attr("for","name").html("Link to Photo Image (Required)"));


 
        



        // <div class='card-panel yellow darken-1 col s12 center-align'>
        // <h4><strong>Survey Questions</strong></h4>
        // <div class='card-panel left-align white'>
        //     <h5><strong>About You</strong></h5>
        //     <br>
        //     <input id="name" type="text" class="validate" required>
        //     <label class='active' for="name">Name (required)</label>
        //     <input id="photo" type="text" class="validate" required>
        //     <label class='active' for="name">Link to Photo Image (required)</label>
        //     <h5><strong>Question 1</strong></h5>
        //     <p>I see myself as extroverted, enthusiastic.</p>
   
    }
        
});