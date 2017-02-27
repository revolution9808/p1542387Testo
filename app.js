//app.js
//BASE SETUP
//

//call the packages we need
var express = require('express');
var cors = require('cors');
var app = express();

var bodyParser = require('body-parser');
var firebase = require('firebase');
var moment = require('moment');
var https = require('https');
var request = request('request');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.VCAP_APP_PORT || 3000;

//ROUTES FOR OUR API
//
var router = express.Router();
// middleware to use for all requests
router.use(function(req, res, next)
{ // do logging
 console.log('Something has happened.');
 next(); // make sure we go to the next routes and don't stop here
});

app.route('/API/MathManager/addTwoNumbers')
    .post(function(req, res) {
      var number1 = req.body.number1;
      var number2 = req.body.number2;
      res.json({ result: (number1 + number2  ) });
    });
app.route('/API/MathManager/divideTwoNumbers') .post(function(req, res)
{
  var number1 = req.body.number1;
  var number2 = req.body.number2;
  res.json({ result: (number1 / number2) });
});
app.route('/API/MathManager/multiplyTwoNumbers')
    .post(function(req, res) {
        var number1 = req.body.number1;
        var number2 = req.body.number2;
        res.json({ result: (number1 * number2) });
    });
app.route('/API/MathManager/calculateDifferencesBetweenTwoNumbers') .post(function(req, res) {
  var number1 = req.body.number1;
  var number2 = req.body.number2;
  res.json({ result: Math.abs(number1 - number2) });
});

router.get('api/', function(req, res) {
  res.json({ result: 'Route: \'/\' Math Manager Version 1' });
});

//START THE SERVER
//
app.listen(port);
console.log('Magic happens on port' + port);