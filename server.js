var path = require('path');
var express = require('express');
let expressHandlebars = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var userData = require("./balance.json");
var fs = require('fs');

app.engine("handlebars", expressHandlebars({ defaultLayout: null }));
app.set("view engine", "handlebars");

app.use(express.static('AlphaPublic'));
app.use(express.json());

//castch all, render 404 page
app.get('/', function (req, res) {
  res.status(200).render("homePage",
    {
      logoURL: "/webdev/output-onlinepngtools.png",
      rulesURL: "/rules",
      something: true,
      balance: userData['balance']
    });
});

app.get('/rules', function (req, res) {
  res.status(200).render("HowToPlay",
    {
      logoURL: "/HowToPlay/output-onlinepngtools.png",
      rulesURL: "/rules",
      something: false
    });

});

app.get('/blackjack', function (req, res) {
  res.status(200).render("blackJack",
    {
      logoURL: "/black-jack/output-onlinepngtools.png",
      rulesURL: "/rules",
      something: true,
      balance: userData['balance']
    });
});

app.post('/blackjack/updateBalance', (req, res) => {
  console.log(' == updated balance on the simulated db');
  userData.balance = req.body.balance;
  fs.writeFile(__dirname + '/balance.json', JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      res.status(400).send('Failed to write balance to file');
    }
  });
  console.log(' == balance: ' + userData.balance);
  res.status(200).send('Balance updated successfully');
});

app.get('*', function (req, res) {
  res.status(404).render("404", {
    logoURL: "/404/output-onlinepngtools.png",
    rulesURL: "/rules",
    something: false
  });
});

//lsiting on port 3000
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
