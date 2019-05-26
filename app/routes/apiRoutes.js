var friendsList = require("../data/friends")
var questionList = require("../data/questions")

module.exports = function(app){
    app.get("/api/friends", function(request, response){
        console.log(friendsList);
        
        response.json(friendsList);
    });

    app.get("/api/questions", function(request, response){
        console.log(questionList);
        response.json(questionList);
    });

    app.post("/api/friends", function(request, response){
        //lets grab new friends score so we can compare it to the ones we already have
        let newFriendScores =  request.body.scores;
        let bestMatch = 0;
        let scoresArray = [];

        for (let i = 0; i < friendsList.length; i++) {
            var scoreDifference = 0;
            for (let j = 0; j < newFriendScores.length; j++) {
                scoreDifference += (Math.abs(parseInt(friendsList[i].scores[j] - parseInt(newFriendScores[j]))));
            }
            scoresArray.push(scoreDifference);
        }

        for (let i = 0; i < scoresArray.length; i++) {
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }

        var matchedFriend = friendsList[bestMatch]
        response.json(matchedFriend);

        friendsList.push(request.body);
        
    });
}