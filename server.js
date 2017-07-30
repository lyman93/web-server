var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {

  requireAuthentication: function(req, res, next){

    console.log("private route hit!");
    next();

  },

  logger: function(req, res, next){

    console.log("Request: "+ new Date().toString() + " " + req.method + " "+ req.originalUrl);
    next();

  }

};

app.use(middleware.logger);
app.use(middleware.requireAuthentication);

app.get("/about", middleware.requireAuthentication, function(req, res){

  res.send("About Us");

});

app.use(express.static(__dirname + "/public"));

//specifies which port for the computer to listen on
app.listen(PORT, function(){

  console.log("port: " + PORT)

});
