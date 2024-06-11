// reference 
// https://www.youtube.com/watch?v=inEhzp3nD0M&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=48
// instead of ciphers we will be using oneway hash functions. 


// const pg = require('pg');
//     // creating client connection to the database. 
// const { Client } = pg
const bcrypt = require("bcryptjs");
function ValidateEmail(input) {

    var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (input.match(validRegex)) { 
    
      return true;
  
    } else {
      return false;
  
    }
  
  }

  function validatePassword([password]) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    return password.match(regex);  
  }

function validation(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("inputPassword5").value;

    // check for input validation whether email id is correct or not. 
    // will be using regex 
    debugger;
    const email_confirm = ValidateEmail(email);
      if (email_confirm){
        /// go for password check 
        if (validatePassword(password)){
            var x = document.getElementById("snackbar");

            // Add the "show" class to DIV
            x.className = "show";
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            // changing the className from show to "" . to change the visibility in the css. 
            // now we have to call password encryption method and have to store it in database. 
            // authentification ..... 
            // client_verified(email,password);
            return; 
        }
        else{
            alert("invalid password");
        }
      }
      else {
            alert("invalid email");
      }
}

async function authentification(email,password){
  // get the password encryption 
  const hash = password_encryption(password);

  // check whether the email is i the database or not... 
  
}
async function client_verified(email_id,passw){
    // facing error here. 
    // const client = new Client()
    // await client.connect() // making the connection. 
    debugger;
    var password_hash = password_encryption(email_id,passw) // function testing 
    const res = await client.query("CREATE TABLE IF NOT EXISTS login (email varchar(255), hash varchar(255)) "); // will be using email  as an identifier
    // trying to prevent sql injection attack.
    debugger;
    const verify = await client.query('SELECT * from login where email =@0 AND hash = @1',[email,password_hash]);
    console.log(res.rows[0].message) // Hello world!
    await client.end()
}

// running client queries 

// password hash --> 
// we will be using salt + pepper to increase t he security. 
function password_encryption(password){
    
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, async (err, salt) => {  // making it asynchronous. 
      if (err) {
          // Handle error
          console.error("Error hashing password:", err);
          return;
      }
      else {
          // Salt generation successful, proceed to hash the password
          secure_hash = await bcrypt.hash(password,salt);
      }
      console.log(secure_hash);  // working password hash .
      return secure_hash;
      });// bcrypt manages storing salt at its own
}


module.exports = {
  validation,
  ValidateEmail,
  validatePassword,
  password_encryption
};