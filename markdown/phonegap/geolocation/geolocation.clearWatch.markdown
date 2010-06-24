navigator.geolocation.clearWatch
-----------
Clears out the position watch interval specified by the provided watchID parameter. This ID is provided as a return value by navigator.geolocation.watchPosition.

### Function Signature ###
    navigator.geolocation.clearWatch(watchID);

### Parameters ###
* __watchID__: The ID of the position watch interval you want to clear.

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
    // Create a variable that will store the position watch ID.
    var myWatch = null;
    // Create a function that will initiate a position watch and save the watch ID.
    function startWatch(frequency) {
        // Start a position watch, save the returned ID to our variable above.
        myWatch = navigator.geolocation.watchPosition(function(p) { 
            alert('got a position!');
        }, function() {
            alert('error occured!');
        }, {'frequency':frequency});
    }
    // Create a function that will clear position watches for us.
    function stopWatch(id) {
        navigator.geolocation.clearWatch(id);
    }
    // Now we can start the watch by calling:
    startWatch(10000); // starts a watch with a 10 second interval.
    // ... and we can stop the watch by calling:
    stopWatch(myWatch);