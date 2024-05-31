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

    // Add event listener to location button
//     document.getElementById("select_location").addEventListener("click", function() {
//         // showing up a window for user location.. 
//         console.log("inside function");
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 store_info_fetch,
//                 handleLocationError,
//                 { enableHighAccuracy: true } // Optional: Enable high accuracy mode
//             );
//         } else {
//             console.log("Geolocation is not supported by this browser.");
//         }
//     });
});

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