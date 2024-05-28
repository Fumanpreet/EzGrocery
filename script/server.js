const { dir } = require("console");
const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

app.set('view engine', 'ejs');

// Serve static files from the 'static' directory (CSS, Bootstrap, etc.)
app.use(express.static(path.join(__dirname, '..', 'HTML', 'static')));

// Serve CSS files from the 'CSS' directory
app.use("/CSS", express.static(path.join(__dirname, '..', 'CSS')));

// Serve images from the 'IMG' directory
app.use("/IMG", express.static(path.join(__dirname, '..', 'IMG')));

// Serve JavaScript files from the 'script' directory
app.use("/script", express.static(path.join(__dirname, '..', 'script')));
app.use(express.static(path.join(__dirname,'EzGrocery')));
// Define route for the home page
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'HTML', 'home.html'));
  

});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
