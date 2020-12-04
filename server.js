var path = require('path');
var express = require('express');
let expressHandlebars = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
// let postData = require("./balance.json");

app.engine("handlebars",expressHandlebars({defaultLayout: null}));
app.set("view engine", "handlebars");

app.use(express.static('Alphapublic'));

//castch all, render 404 page
app.get('/', function (req, res) {
  res.status(200).render("homePage");
});

app.get('/rules', function (req, res) {
  res.status(200).render("HowToPlay");
});

app.get('/blackjack', function (req, res) {
  res.status(200).render("blackJack");
});

app.get('*', function (req, res) {
  res.status(404).render("404");
});

//lsiting on port 3000
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
