Coordinates
===========

A set of properties that describe the geographic coordinates of a position.

Properties
----------

* __latitude__: Latitude in decimal degrees. _(Number)_
* __longitude__: Longitude in decimal degrees. _(Number)_
* __altitude__: Height of the position in meters above the ellipsoid. _(Number)_
* __accuracy__: Accuracy level of the latitude and longitude coordinates in meters. _(Number)_
* __altitudeAccuracy__: Accuracy level of the altitude coordinate in meters. _(Number)_
* __heading__: Direction of travel, specified in degrees counting clockwise relative to the true north. _(Number)_
* __speed__: Current ground speed of the device, specified in meters per second. _(Number)_

Description
-----------

The `Coordinates` object is created and populated by PhoneGap, and attached to the `Position` object. The `Position` object is then returned to the user through a callback function.

Supported Platforms
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )

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

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Set an event to wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is loaded and Ready
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
        
            div.innerHTML = 'Latitude: '             + position.coords.latitude  + '<br/>' +
                            'Longitude: '            + position.coords.longitude + '<br/>' +
                            'Altitude: '             + position.coords.altitude  + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy  + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy  + '<br/>' +
                            'Heading: '              + position.coords.heading   + '<br/>' +
                            'Speed: '                + position.coords.speed     + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    
Android Quirks
-------------

__altitudeAccuracy:__ This property is not support by Android devices, it will always return null.
