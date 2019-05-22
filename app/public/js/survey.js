
$(document).ready(function () {
    buildhtml();

    function buildhtml(){
        $("body").append($("<div>").addClass("container"));
        $(".container").append($("<div>").addClass("card-panel yellow darken-1 col s12 center-align").attr("id","mainCard"));







        $("#mainCard").append($("<h4>").addClass("strong").attr("id","surveyQuestions").html("Survey Questions"));
        $("#mainCard").append($("<div>").addClass("card-panel left-align white").attr("id","question-card-panel"));
        // $("#question-card-panel").append($("<h5>").addClass("strong").attr("id","aboutYou").text("<strong>About You</strong>"));
        $("#question-card-panel").append($("<h5>").addClass("strong").attr("id","aboutYou"));

        $("#aboutYou").append($("<strong>").text("About You"));
        $("#question-card-panel").append($("<br>"));

        $("#question-card-panel").append($("<div>").addClass("row").attr("id", "contact-first-row"));
        $("#contact-first-row").append($("<form>").addClass("col s12").attr("id", "the-form"));
        $("#the-form").append($("<div>").addClass("row").attr("id", "name-row"));
        $("#name-row").append($("<div>").addClass("input-field col s12").attr("id","first-name-panel"));
        $("#first-name-panel").append($("<input>").addClass("validate").attr({"id":"firstName", mid: "last_name", type:"text"}));
        $("#first-name-panel").append($("<label>").attr("for","firstName").html("First Name"));
        // $("#name-row").append($("<div>").addClass("input-field col s6").attr("id","last-name-panel"));
        // $("#last-name-panel").append($("<input>").addClass("validate").attr({"id":"lastName", mid: "last_name", type:"text"}));
        // $("#last-name-panel").append($("<label>").addClass("").attr("for","lastName").html("Last Name"));
        // $("#the-form").append($("<div>").addClass("row").attr("id","email-row"));
        // $("#email-row").append($("<div>").addClass("input-field col s12").attr("id","email-panel"));
        // $("#email-panel").append($("<input>").addClass("validate").attr({id:"email", placeholder: "ironman@starkindustry.com", type: "email"}));
        // $("#email-panel").append($("<label>").attr("for","email").html("Email"));

        $("#the-form").append($("<div>").addClass("row").attr("id","photo-row"));
        $("#photo-row").append($("<div>").addClass("input-field col s12").attr("id","photo-panel"));
        $("#photo-panel").append($("<input>").addClass("validate").attr({mid:"photo", type: "text", id: "photo"}));
        $("#photo-panel").append($("<label>").attr("for","photo").html("Link to Photo Image (required)"));
        // $("#the-form").append($("<div>").addClass("row").attr("id","message-row"));
        // $("#message-row").append($("<div>").addClass("input-field col s12").attr("id","message-panel"));
        // $("#message-panel").append($("<textarea>").addClass("materialize-textarea").attr("id","message"));
        // $("#message-panel").append($("<label>").addClass("").attr("for", "message").html("Your Message"));
        $("#the-form").append($("<div>").addClass("row").attr("id","btn-row"));
        $("#btn-row").append($("<div>").addClass("row").attr("id","btn-panel"));
        $("#btn-panel").append($("<button>").addClass("btn waves-effect waves-light").attr({type: "submit", name:"action", id: "submit-btn"}).html("Submit"));



        // $("#question-card-panel").append($("<input>").addClass("validate").attr({"id":"firstName", required: "true", type:"text"}));
        // $("#question-card-panel").append($("<label>").attr("for","firstName").html("First Name"));

        // // $("#question-card-panel").append($("<input>").addClass("validate").attr({"id":"name", type: "text", required: "true"}));
        // // $("#question-card-panel").append($("<label>").addClass("active").attr({"id":"nameLabel","for": "name", html: "Name", required: "true"}));
        // $("#question-card-panel").append($("<input>").addClass("validate").attr({"id":"photo", type: "text", required: "true"}));
        // $("#question-card-panel").append($("<label>").addClass("active").attr({"id":"photoLabel",for:"photo", html: "Link to Photo Image (required)"}));
        // $("#question-card-panel").append($("<div>").addClass("container").attr("id","questions-container"));
        buildQuestions(1, "I see myself as extroverted, enthusiastic.");

    }

    function buildQuestions(questionNumber, questionString){
        var questionIDName = "question-"+questionNumber
        $("#the-form").append($("<div>").addClass("row").attr("id",questionIDName));
        $("#"+questionIDName).append($("<div>").addClass("input-field col s12").attr("id",questionIDName+"-panel"));
        $("#"+questionIDName+"-panel").append($("<select>").addClass("").attr("id","select"+questionNumber));
        $("#select"+questionNumber).append($("<select>").attr("id","select-"+questionNumber));
        



        $("#"+questionIDName+"-panel").append($("<textarea>").addClass("materialize-textarea").attr("id","message-"+questionNumber));
        $("#message-"+questionNumber).append($("<label>").addClass("").attr("for", "message").html("Your Message"));



//         <div class="input-field col s12">
//     <select>
//       <option value="" disabled selected>Choose your option</option>
//       <option value="1">Option 1</option>
//       <option value="2">Option 2</option>
//       <option value="3">Option 3</option>
//     </select>
//     <label>Materialize Select</label>
//   </div>



    }
});