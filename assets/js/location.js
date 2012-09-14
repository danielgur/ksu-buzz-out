// Author: Daniel Gur(danielgur2105@gmail.com)
// This file will contain the functions that will be used to calculate the
// distance between the devices location and restaurants/bars locations

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}

// TODO(daniel): add the functionality
function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + " & Longitude: " + position.coords.longitude);
}
