compass.getCurrentHeading
=========================

Get the current compass heading.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

Description
-----------

The compass is a sensor that detects the direction or heading that the device is pointed.  It measures the heading in degrees from 0 to 359.99.

The compass heading information is returned via a CompassHeading object using the `compassSuccess` callback function.

Supported Platforms
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) if available in hardware

Quick Example
-------------

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('CompassError: ' error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>
    
