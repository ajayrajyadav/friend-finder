
$(document).ready(function () {
    
    var questionList = [
        {
            qNumber: 1,
            qString: "I enjoy getting to know new people."
        },
        {
            qNumber: 2,
            qString: "I am dependable and self-disciplined."
        },
        {
            qNumber: 3,
            qString: "I can get upset easily."
        },
        {
            qNumber: 4,
            qString: "It is often difficult for you to relate to other people’s feelings."
        },
        {
            qNumber: 5,
            qString: "Generally speaking, you are a creative person."
        },
        {
            qNumber: 6,
            qString: "You rarely get carried away by fantasies and ideas."
        },
        {
            qNumber: 7,
            qString: "You feel more energetic after spending time with a group of people."
        },
        {
            qNumber: 8,
            qString: "I like animals."
        },
        {
            qNumber: 9,
            qString: "I want a drinking buddy."
        },
        {
            qNumber: 10,
            qString: "I prefer indoor activity over outdoor activity."
        },
    ]

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
        var questionFormContainer = $("#survey-contianer");

        for (let i = 0; i < questionList.length; i++) {
            buildQuestions($("#survey-contianer"), questionList[i].qNumber, questionList[i].qString);
        }

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

    }

    $(document).on("click", "#submit-btn", function () {
        if(validateForm()){
            var newFriend = {
                name: $("name").val().trim(),
                provilePic: $("photo").val().trim(),
                scores: [
                    $('#question-1').val(),
                    $('#question-2').val(),
                    $('#question-3').val(),
                    $('#question-4').val(),
                    $('#question-5').val(),
                    $('#question-6').val(),
                    $('#question-7').val(),
                    $('#question-8').val(),
                    $('#question-9').val(),
                    $('#question-10').val(),
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

        $(".browswer-default").each(function(){
            alert($("this").value())
            // console.log($("this").value());
            
            if($("this").value()===""){
                isValid = false;
            }
        })
        return isValid;
    }

        
});