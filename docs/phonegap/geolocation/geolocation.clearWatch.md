geolocation.clearWatch
======================

Stop watching the `Position` referenced by the watch ID parameter.

    navigator.geolocation.clearWatch(watchID);

- __watchID:__ The ID of the `watchPosition` interval to clear. (Number)

Supported Platforms
-------------------

- Untested

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
        alert('onError!');
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
            alert('onError!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>