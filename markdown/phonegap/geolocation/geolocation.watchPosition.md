geolocation.watchPosition
=========================

Gets the device's current GPS `Position` at a regular interval. Each time the `Position` is retrieved, the `onSuccess` callback function is executed.

Returns a watch ID that references the watch position interval. The watch ID can be used with `geolocation.clearWatch` to stop watching the geolocation.

Syntax
------

    var watchId = navigator.geolocation.watchPosition(onSuccess, onError, [options]);

- __onSuccess:__ Called each time the GPS position is successfully retrieved. _(Function)_
    - __Syntax:__
        - `function(devicePosition) {}`
    - __Parameter:__
        - __devicePosition:__ Contains the position coordinates of the device. _(Position)_
- __onError:__ Called when PhoneGap is unable to retrieve the device's position. _(Function)_
    - __Syntax:__
        - `function() {}`
- __options:__ _(Object)_ (Optional)
    - __Syntax:__
        - `var options = { frequency: 10000 };`
    - __Values:__
        - __frequency:__ How often to retrieve the position in milliseconds. _(Number)_ (Default: 10000)

Details
-------

`geolocation.watchPositon` is an asynchronous function. When the device's native code has retrieved the device's GPS location, the `onSuccess` callback is invoked with a `Position` object as the parameter.

Supported Platforms
-------------------

- Android
- BlackBerry
- iPhone
- webOS

Example
-------

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Your latitude is '      + position.coords.latitude +
              'and your longitude is ' + position.coords.longitude);
    };
    
    // onError Callback
    var onError = function() {
        alert('Fail whale!');
    };
    
    // Options: retrieve the location every 3 seconds
    //
    var options = { frequency: 3000 };
    
    // Start watching the geolocation
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

Example: Full Application
-------------------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Geolocation Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var watchID = null;
    
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is loaded and ready
        //
        function onDeviceReady() {
            // Create geolocation options: update location every 3 seconds
            //
            var options = { frequency: 3000 };
        
            // Start watching the geolocation
            //
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // Geolocation onSuccess Callback
        //
        function onSuccess(position) {
            addElement('Latitude: '       + position.coords.latitude + 
                       '<br/>Longitude: ' + position.coords.longitude);
        }
    
        // Geolocation onError Callback
        //
        function onError() {
            alert('Fail whale!');
        }
    
        // Add the `message` to the list
        //
        function addElement(message) {
            var li = document.createElement('li');
            li.innerHTML = message;
        
            var locationList = document.getElementById('locationList');
            locationList.appendChild(li);
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h2>geolocation.watchPosition</h2>
        <ul id="locationList"></ul>
      </body>
    </html>