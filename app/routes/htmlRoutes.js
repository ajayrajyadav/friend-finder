var path = require("path")

module.exports = function(app){
    app.get("/survey", function (request, response){
        response.sendFile(path.join(__dirname, "/../public/survey.html"))
    });

    // app.get("/tables", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/tables.html"));
    //   });

    app.use(function (request, response){
        response.sendFile(path.join(__dirname, "/../public/home.html"))
    });
}