geolocation.clearWatch
----------------------

Stops watching the geolocation position that's referenced by the watch ID parameter. The watch ID is returned by `geolocation.watchPosition`.

### Syntax ###

    navigator.geolocation.clearWatch(watchID);

- __watchID:__ The ID of the `watchPosition` interval to clear. _(Number)_

### Supported Platforms ###

- iPhone

### Example ###

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Your latitude is '      + position.coords.latitude +
              'and your longitude is ' + position.coords.longitude);
    };
    
    // onError Callback
    //
    var onError = function() {
        alert('Fail whale!');
    };
    
    // Options: retrieve the location every 3 seconds
    //
    var options = { frequency: 3000 };
    
    // Start watching the geolocation
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    
    // Stop the watching the geolocation
    //
    navigator.geolocation.clearWatch(watchID);

### Example: Full Application ###

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Geolocation Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var watchID = null;
    
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is loaded and ready
        //
        function onDeviceReady() {
            // Create geolocation options: update location every 3 seconds
            //
            var options = { frequency: 3000 };
            
            // Start watching the geolocation
            //
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
            
            // Wait 6 seconds and then stop geolocation
            //
            setTimeout(clearWatch, 6000);
        }
    
        // Geolocation onSuccess Callback
        //
        function onSuccess(position) {
            addElement('Latitude: '       + position.coords.latitude + 
                       '<br/>Longitude: ' + position.coords.longitude);
        }
    
        // Geolocation onError Callback
        //
        function onError() {
            alert('Fail whale!');
        }
    
        // Stop Watching Geolocation
        //
        function clearWatch() {
            if (watchID) {
                navigator.geolocation.clearWatch(watchID);
                
                addElement('Stopped watching geolocation');
                watchID = null;
            }
        }
    
        // Add the `message` to the list
        //
        function addElement(message) {
            var li = document.createElement('li');
            li.innerHTML = message;
            
            var locationList = document.getElementById('locationList');
            locationList.appendChild(li);
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h2>geolocation.watchPosition</h2>
        <ul id="locationList"></ul>
      </body>
    </html>