// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// Grab information that gets posted to server from an HTML form. Use urlencoded.

/*
If you are using Express version below 4.16
*/
// app.use(bodyParser.apply.urlencoded({ extended: true }));

/* If you are using Express above v4.16 
you don't need to add an additional body-parser 
package to your application
*/
app.use(express.urlencoded());

// Route 1: Home Page
app.get("/", function (req, res) {
  // res.send("<h1>Hello, world!</h1>");
  // __dirname give the file path of the current file no matter where it's hosted
  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

// Route for BMI Calculator
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);

  var bmi = weight / height ** 2;

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
