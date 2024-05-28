const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Change to 3000 to match the port in app.listen()

app.set('view engine', 'ejs'); // Assuming you're using EJS as the view engine

// Define the directory where your static files are located (CSS, Bootstrap, etc.)
app.use(express.static(path.join(__dirname, '..', 'HTML', 'static')));

app.use("/CSS", express.static(path.join(__dirname,'..', "CSS")));
app.use("/IMG", express.static(path.join(__dirname,'..', "images.png")));

// Serve images from the 'images' directory
app.use("/IMG", express.static(path.join(__dirname,'..', "IMG")));
// Define the directory where your HTML files (views) are located
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'HTML', 'home.html'));
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
