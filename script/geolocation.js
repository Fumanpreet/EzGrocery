document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("access_current_location").addEventListener("click",function(){
        // Check for geolocation support
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(store_info_fetch);
        console.log("got the location");
        document.getElementById("close_location").click();
    } else {
        // If geolocation is not supported, show snackbar
        // alert("geolocation not supported");
        var snackbar = document.getElementById("location_snackbar");
        snackbar.className = "show";
        setTimeout(function() {
            snackbar.className = snackbar.className.replace("show", "");
        }, 3000);
    }

    })
    // Add event listener to login button
    document.getElementById("login_button").addEventListener("click", function() {
        validation();
    });
});

function geolocation(){
    debugger;
    var postal_code = document.getElementById("validationCustom04").value;
    var country = document.getElementById("validationCustom01").value;
    var city = document.getElementById("validationCustom02").value;
    var region_code;
    console.log(country);
    if (country === "Canada")
        region_code = "CA";
    else 
        region_code = "US";
    const location = {
        address: {
            regionCode : region_code,
            locality: city,
            administrativeArea: region_code,
            postalCode: postal_code,
            addressLines: "",
        }
        
    }
    // first verify the postal code  / address using google api .  
    json_data = JSON.stringify(location);
    // Imports the Addressvalidation library
    // reference --> https://cloud.google.com/nodejs/docs/reference/addressvalidation/latest
    // const {AddressValidationClient} = require('@googlemaps/addressvalidation').v1;

    // // Instantiates a client
    // const addressvalidationClient = new AddressValidationClient();

    // async function callValidateAddress() {
    // // Construct request
    // const request = {
    //     address: {
    //     regionCode: 'US',
    //     addressLines: ['1600 Amphitheatre Pkwy', 'Mountain View CA 94040'],
    //     },
    // };

    // // Run request
    // const response = await addressvalidationClient.validateAddress(request);
    // console.log(response);
    // }

    // callValidateAddress();

    
    // sending a post request
    const API_KEY = "AIzaSyBdvDbgrbixL_L3pzJQwJCn-51tbpktqdA";
    let p = fetch("https://addressvalidation.googleapis.com/v1:validateAddress",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json_data
    }).then(response => response.json())
    .then(data => {
        // Handle the response data here
        console.log(data);
        console.log("response");
    })
    .catch(error => {
        var x = document.getElementById("invalid_location_code");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        console.log('inValid Address validation response:', data);
    });
    let response = p.json;
    console.log(response);

}

    
function handleLocationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for geolocation.");
            // Show a message to the user or handle the denial gracefully
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            // Handle the situation when location information is unavailable
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            // Handle timeout errors
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            // Handle other unknown errors
            break;
    }
}

function store_info_fetch(position) {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}