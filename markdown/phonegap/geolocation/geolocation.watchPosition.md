geolocation.watchPosition
=========================

Continually gets the device's current GPS `Position`.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      geolocationError,
                                                      [geolocationOptions]);

Details
-------

Gets the device's current GPS `Position` at a regular interval. Each time the `Position` is retrieved, the `geolocationSuccess` callback function is executed.

`geolocation.watchPosition` returns a watch ID that references the watch position interval. The watch ID can be used with `geolocation.clearWatch` to stop watching the geolocation.

`geolocation.watchPosition` is an asynchronous function. When the device's native code has retrieved the device's GPS location, the `geolocationSuccess` callback is invoked with a `Position` object as the parameter.

Supported Platforms
-------------------

- iPhone

Quick Example
-------------

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '  + position.coords.latitude      + '\n' +
              'Longitude: ' + position.coords.longitude     + '\n' +
              'Altitude: '  + position.coords.altitude      + '\n' +
              'Accuracy: '  + position.coords.accuracy      + '\n' +
              'Heading: '   + position.coords.heading       + '\n' +
              'Speed: '     + position.coords.speed         + '\n' +
              'Timestamp: ' + new Date(position.timestamp)  + '\n');
    };

    // onError Callback
    //
    var onError = function() {
        alert('Fail whale!');
    };
    
    // Options: retrieve the location every 3 seconds
    //
    var options = { frequency: 3000 };

    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
            // Update every 3 seconds
            var options = { frequency: 3000 };
        
            var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
        
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
        // onError Geolocation
        //
        function onError() {
            alert('Fail whale!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>

iPhone Quirks
-------------

The iPhone PhoneGap has a slightly different implementation of Position and Coordinates.