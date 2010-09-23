accelerometer.getCurrentAcceleration
====================================

Get the current acceleration along the x, y, and z axis.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

Description
-----------

The accelerometer is a motion sensor that detects the change (delta) in movement relative to the current position. The accelerometer can detect 3D movement along the x, y, and z axis.

The acceleration is returned using the `accelerometerSuccess` callback function.

Supported Platforms
-------------------

- Android
- iPhone

Quick Example
-------------

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n';
    };

    function onError() {
        alert('onError!');
    };

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Acceleration Example</title>

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
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
    
iPhone Quirks
-------------

- iPhone doesn't have the concept of getting the current acceleration at any given point.
- You must watch the acceleration and capture the data at given time intervals.
- Thus, the `getCurrentAcceleration` function will give you the last value reported from a phoneGap `watchAccelerometer` call.
