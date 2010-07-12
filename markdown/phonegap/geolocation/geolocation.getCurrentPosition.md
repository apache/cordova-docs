geolocation.getCurrentPosition
==============================

Returns the device's current GPS position as a `Position` object.

Syntax
------

    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);

Details
-------

`geolocation.getCurrentPositon` is an asynchronous function that returns the current position through a callback function.

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

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

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
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
        
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                'Altitude: '  + position.coords.altitude      + '<br />' +
                                'Accuracy: '  + position.coords.accuracy      + '<br />' +
                                'Heading: '   + position.coords.heading       + '<br />' +
                                'Speed: '     + position.coords.speed         + '<br />' +
                                'Timestamp: ' + new Date(position.timestamp)  + '<br />';
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

The iPhone PhoneGap has a slightly different implementation of Position and Coordinates. Each object's documentation explains the differences.