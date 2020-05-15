var http = require("http");
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));


app.get("/", function(req, res){
    return res.render("index", {title: "Hello World"});
    // return res.send("Hello world");
});

app.get("/form", function(req, res){
    return res.render("form");
})

app.post("/form", function(req, res){
    return res.render("result", {username: req.body.username, message: req.body.message})
});

app.use(morgan("combined"));
var server = http.createServer(app);

server.listen(3000);