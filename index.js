var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

var cats = require('./cats.js')(app);

app.get("/", function(req, res){
    res.send("Hello World");
    //res.json({hello : "hi"});
});

var server = app.listen(3000, function() {
    console.log("Server running on http://localhost:3000/")
});