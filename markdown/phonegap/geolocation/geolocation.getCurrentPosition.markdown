navigator.geolocation.getCurrentPosition
-----------
Has the device retrieve the current GPS position as a Position object. This is an asynchronous call that invokes native source code on the platform.

### Function Signature ###
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

### Parameters ###
* __successCallback:__ reference to a function which accepts a Position object as parameter, and handles successfully retrieving the device's position.
* __errorCallback:__ reference to a function, and handles not being able to retrieve the device's position.
* __options:__ optional object passed in specifying parameters regarding the location retrieval. Not used by this function, but see navigator.geolocation.watchPosition for an example of its usage.

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
    // Create references to functions that will act as our success and error callbacks, respectively.
    // Important to note that the function accepts a parameter! This is a Position object!
    var win = function(p) {
        alert('Here is your position, latitude: ' + p.coords.latitude + ', longitude: ' + p.coords.longitude);
    };
    var fail = function() {
        alert('Fail whale!');
    };
    // Make the PhoneGap GPS call:
    navigator.geolocation.getCurrentPosition(win, fail);
    // You can also define the callback functions in-line:
    navigator.geolocation.getCurrentPosition(function(p) {
        // Set the content of DOM elements with IDs 'myLatitude' and 'myLongitude,'
        // respectively, to Position values.
        document.getElementById('myLatitude').innerHTML = p.coords.latitude;
        document.getElementById('myLongitude').innerHTML = p.coords.longitude;
    }, function() {
        alert('Failure oh no!');
    });