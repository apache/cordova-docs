Acceleration
============

Contains `Accelerometer` data captured at a specific point in time.

Properties
----------

- __x:__ Amount of motion on the x-axis. Range [0, 1] _(Number)_
- __y:__ Amount of motion on the y-axis. Range [0, 1] _(Number)_
- __z:__ Amount of motion on the z-axis. Range [0, 1] _(Number)_
- __timestamp:__ Creation timestamp in milliseconds. _(DOMTimeStamp)_

Details
-------

This object is created and populated by PhoneGap, and returned from `Accelerometer` methods.

Supported Platforms
-------------------

- iPhone

Quick Example
-------------

    navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency:50 });

    function onSuccess(acceleration) {
        // acceleration.x;
        // acceleration.y;
        // acceleration.z
        // new Date(acceleration.timestamp);
    }

    function onError() {
        alert('Fail whale!');
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Accelerometer Example</title>
        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Set an event to wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is loaded and Ready
        //
        function onDeviceReady() {
            navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency:50 });
        }

        // Display `Acceleration` values
        //
        function onSuccess(acceleration) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'x: '    + acceleration.x + '<br/>' +
                            'y: '    + acceleration.y + '<br/>' +
                            'z: '    + acceleration.z + '<br/>' +
                            'Time: ' + new Date(acceleration.timestamp);
        }

        // Alert if there is a problem
        //
        function onError() {
            alert('Fail whale!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <div id="myDiv"></div>
      </body>
    </html>