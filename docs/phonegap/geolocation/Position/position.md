Position
========

Contains `Position` coordinates that are created by the geolocation API.

Properties
----------

- __coords:__ A set of geographic coordinates. _(Coordinates)_
- __timestamp:__ Creation timestamp for `coords` in milliseconds. _(DOMTimeStamp)_

Description
-----------

The `Position` object is created and populated by PhoneGap, and returned to the user through a callback function.

Supported Platforms
-------------------

- Android
- BlackBerry
- iPhone

Quick Example
-------------

    // onSuccess Callback
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
        
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + new Date(position.timestamp)          + '<br />';
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

iPhone Quirks
-------------

- __timestamp:__ Uses seconds instead of milliseconds.

A workaround is to manually convert the timestamp to milliseconds (x 1000):

        var onSuccess = function(position) {
            alert('Latitude: '  + position.coords.latitude             + '\n' +
                  'Longitude: ' + position.coords.longitude            + '\n' +
                  'Timestamp: ' + new Date(position.timestamp * 1000)  + '\n');
        };