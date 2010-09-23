geolocation.watchPosition
=========================

Watches for changes to the device's current position.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

Parameters
----------

- __geolocationSuccess__: The callback that is called with the current position.
- __geolocationError__: (Optional) The callback that is called if there was an error.
- __geolocationOptions__: (Optional) The geolocation options.

Returns
-------

- __String__: returns a watch id that references the watch position interval. The watch id can be used with `geolocation.clearWatch` to stop watching for changes in position.

Description
-----------

Function `geolocation.watchPosition` is an asynchronous function. It returns the device's current position when a change in position has been detected.  When the device has retrieved a new location, the `geolocationSuccess` callback is invoked with a `Position` object as the parameter.  If there is an error, the `geolocationError` callback is invoked with a `PositionError` object.

Supported Platforms
-------------------

- Android
- BlackBerry
- iPhone

Quick Example
-------------

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + new Date(position.timestamp)      + '\n');
    };

    // onError Callback
    //
    var onError = function(error) {
        alert('onError!');
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
            alert('onError!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>
