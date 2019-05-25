var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: application/VRDisplayEvent.api+json}))

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("listening on PORT: "+ PORT);
});