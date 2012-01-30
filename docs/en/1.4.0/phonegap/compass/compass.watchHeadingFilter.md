compass.watchHeadingFilter
==========================

Get the compass heading in degrees when it changes by at least a certain number of degrees.

    var watchID = navigator.compass.watchHeadingFilter(compassSuccess, compassError, compassOptions);
                                                           
Description
-----------

The compass is a sensor that detects the direction or heading that the device is pointed.  It measures the heading in degrees from 0 to 359.99.

The `compass.watchHeadingFilter` gets the device's current heading when it changes by a specified number of degrees. Each time the heading changes by the specified number of degrees or more, the `headingSuccess` callback function is called. Specify the degrees of change via the `filter` parameter in the `compassOptions` object.

The returned watch ID references references the compass watch interval. The watch ID can be used with `compass.clearWatchFilter` to stop watching the compass via a degree filter.  Only one watchHeadingFilter can be in effect at one time.  If a watchHeadingFilter is in effect, calling getCurrentHeading or watchHeading will use the existing filter value for specifying heading changes. On iOS this method is more efficient than compass.watchFilter() based on the iOS mechanism for monitoring compass heading changes.

Supported Platforms
-------------------

- iPhone


Quick Example
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };

    function onError(compassError) {
            alert('Compass error: ' + compassError.code);
    };

    var options = { filter: 10 };  // Get notified on compass heading changes or 10 degrees or more
    
    var watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);

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
            
            // Get notified on compass heading changes or 10 degrees or more
            var options = { filter: 10 };
            
            watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);
        }
        
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatchFilter(watchID);
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
        <button onclick="startWatch();">Start Watching via Filter</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    
