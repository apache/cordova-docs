compass.watchHeading
====================

At a regular interval, get the compass heading in degrees.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
                                                           
Description
-----------

The compass is a sensor that detects the direction or heading that the device is pointed.  It measures the heading in degrees from 0 to 359.99.

The `compass.watchHeading` gets the device's current heading at a regular interval. Each time the heading is retrieved, the `headingSuccess` callback function is executed. Specify the interval in milliseconds via the `frequency` parameter in the `compassOptions` object.

The returned watch ID references references the compass watch interval. The watch ID can be used with `compass.clearWatch` to stop watching the compass.

Supported Platforms
-------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) if available in hardware


Quick Example
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };

    function onError(compassError) {
            alert('Compass error: ' + compassError.code);
    };

    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchHeading`
        var watchID = null;
        
        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
        //
        function onDeviceReady() {
            startWatch();
        }

        // Start watching the compass
        //
        function startWatch() {
            
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
            
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
        
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }

        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    
