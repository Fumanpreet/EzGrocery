const bodyParser = require("body-parser");
const { dir } = require("console");
const express = require("express");
const path = require("path");
const authentication = require("./password_verification");
var fs = require('fs');

var router = express.Router();
const app = express();
const port = 3001;

// app.use(bodyParser.urlencoded({extended: True}));
// var indexRouter = require('password_verification.js');
// var geolocation_router = require("geolocation.js");
app.set('view engine', 'pug');

// Serve static files from the 'static' directory (CSS, Bootstrap, etc.)
app.use(express.static(path.join(__dirname, '..', 'HTML', 'static')));

// Serve CSS files from the 'CSS' directory
app.use("/CSS", express.static(path.join(__dirname, '..', 'CSS')));

// Serve images from the 'IMG' directory
app.use("/IMG", express.static(path.join(__dirname, '..', 'IMG')));

// Serve JavaScript files from the 'script' directory
app.use("/scripts", express.static(path.join(__dirname, '..','script')));

app.use(express.static(path.join(__dirname,'EzGrocery')));
// Define route for the home page
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'HTML', 'home.html'));

});

app.get("/signup",(req,res)=>{
  res.sendFile(path.join(__dirname,'..', 'HTML', 'signup.html'));
})
app.post("/login",(req,res)=> {
  
});
// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


// app.use('/home', indexRouter);
// app.use('/home', geolocation_router);
// setting template engine for pug

