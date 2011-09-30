compass.clearWatchFilter
========================

Stop watching the compass referenced by the watch ID parameter.

    navigator.compass.clearWatchFilter(watchID);

- __watchID__: The ID returned by `compass.watchHeadingFilter`.

Supported Platforms
-------------------

- iPhone

Quick Example
-------------

    var watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatchFilter(watchID);
    
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
