const signup_client = require("./password_verification");

function sign_in(){
    var email = document.getElementById("email").textContent;
    var password = document.getElementById("password").textContent;
    var confirm_password = document.getElementById("confirm_password").textContent;

    if (password === confirm_password){
        // password is same for both.. 
        // validate password and email 
        if (signup_client.ValidateEmail(email) && signup_client.validatePassword(password)){
            // register the client in the database. 
            var password_hash= signup_client.password_encryption(password); // getting the hash of the password and putting in database. 
        }

    }
}