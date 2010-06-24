navigator.geolocation.watchPosition(successCallback, errorCallback, options)
-----------
Has the device retrieve the current GPS position as a Position object. This is an asynchronous call that invokes native source code on the platform. You can specify how frequently to retrieve the Position by setting the options object up properly.

Returns an ID that you can hang onto and later use to clear the watch, using the navigator.geolocation.clearWatch function.

### Function Signature ###
    navigator.geolocation.clearWatch(watchID);

### Parameters ###
* __successCallback:__ reference to a function which accepts a Position object as paremeter, and handles successfully retrieving the device's position.
* __errorCallback:__ reference to a function, and handles not being able to retrieve the device's position.
* __options:__ optional object passed with properties specifying parameters surrounding the retrieval of location. In particular, a 'frequency' property should be specified as a number in milliseconds, which will tell the framework how often to retrieve the position. This is a valid options object:
    // Passing this as the options parameter will retrieve a location every 10 seconds.
    {frequency:10000}

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
    // Let's create an options object, which will force the watch to retrieve a position every 30 seconds.
    var opts = {frequency:30000};
    // Make the PhoneGap GPS call:
    var myWatchId = navigator.geolocation.watchPosition(win, fail, opts);