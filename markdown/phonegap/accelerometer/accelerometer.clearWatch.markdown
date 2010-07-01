accelerometer.clearWatch
-----------
Clears the watch function on the accelerometer previously set using the `watchAcceleration` function (this return value from `navigator.accelerometer.watchAcceleration`)

### Function Signature ###
    navigator.accelerometer.clearWatch(watchID);

### Parameters ###
* __watchID__: The ID of the accelerometer watch interval you want to clear.

### Supported Platforms ###
iPhone, Android, webOS

### Example ###
    // Create a variable that will store the position watch ID.
    var myWatch = null;
    // Call watchPosition and assign the return value, the watch ID, to our watch variable above.
    myWatch = navigator.accelerometer.watchPosition(function(p) {
            // Success callback.
            alert('successfully retrieved acceleration data!');
        }, function() {
            // Error callback.
            alert('oh no, error!');
        },
        {frequency,10000}); // This object tells the device to retrieve a position every 10 seconds (specified in millseconds).
        // This means one of our two callbacks above should be fired every 10 seconds.
    
    // ... more code ...
    
    // We might have a button to stop watching the accelerometer - we could say:
    document.getElementById('stopAccelerationButton).addEventListener(
        'click',
        function () {
            navigator.accelerometer.clearWatch(myWatch);
        },
        false // using event bubbling, rather than capturing
    )
    