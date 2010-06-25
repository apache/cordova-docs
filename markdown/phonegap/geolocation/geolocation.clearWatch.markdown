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
    // Call watchPosition and assign the return value, the watch ID, to our watch variable above.
    myWatch = navigator.geolocation.watchPosition(function(p) {
            // Success callback.
            alert('successfully retrieved location!');
        }, function() {
            // Error callback.
            alert('oh no, error!');
        },
        {frequency,10000}); // This object tells the device to retrieve a position every 10 seconds (specified in millseconds).
        // This means one of our two callbacks above should be fired every 10 seconds.
    // ... more code ...
    // When we want to stop the position watch interval, we simply call:
    navigator.geolocation.clearWatch(myWatch);