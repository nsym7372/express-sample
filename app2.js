var http = require("http");
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var Message = require("./schema/Message");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/chatapp", function(err){
    if(err){
        console.error(err);
    }else{
        console.log("successfully connected to MongoDB");
    }
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res, next){
    return res.render("index", {title:"Hello World!"});
});

app.get("/update", function(req, res, next){
    return res.render("update");
});

app.post("/update", function(req, res, next){

    var newMessage = new Message({
        username: req.body.username,
        Message: req.body.message
    });

    newMessage.save((err) => {
        if(err){
            throw err;
        }
        return res.redirect("/");
    });
});

var server = http.createServer(app);
server.listen(3000);