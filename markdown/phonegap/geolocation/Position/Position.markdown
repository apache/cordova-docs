Position
--------

Contains `Position` coordinates that are created by the geolocation API.

### Properties ###

- __coords:__ A set of geographic coordinates. _(Coordinates)_
- __timestamp:__ Creation timestamp for `coords` in milliseconds. _(DOMTimeStamp)_

### Details ###

The `Position` object is created and populated by PhoneGap, and returned to the user through a callback function.

### Supported Platforms ###

- iPhone

### Quick Example ###

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    function onSuccess(position) {
        alert('Latitude: '             + position.coords.latitude             + '\n' +
              'Longitude: '            + position.coords.longitude            + '\n' +
              'Altitude: '             + position.coords.altitude             + '\n' +
              'Accuracy (Horzintal): ' + position.coords.accuracy.horizontal  + '\n' +
              'Accuracy (Vertical): '  + position.coords.accuracy.horizontal  + '\n' +
              'Heading: '              + position.coords.heading              + '\n' +
              'Speed: '                + position.coords.speed                + '\n' +
              'Timestamp: '            + new Date(position.timestamp * 1000)  + '\n');
    }

    function onError() {
        alert('Fail whale!');
    }

### Full Example ###

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Geolocation Position Example</title>
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
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
        
            div.innerHTML = 'Latitude: '             + position.coords.latitude             + '<br/>' +
                            'Longitude: '            + position.coords.longitude            + '<br/>' +
                            'Altitude: '             + position.coords.altitude             + '<br/>' +
                            'Accuracy (Horzintal): ' + position.coords.accuracy.horizontal  + '<br/>' +
                            'Accuracy (Vertical): '  + position.coords.accuracy.horizontal  + '<br/>' +
                            'Heading: '              + position.coords.heading              + '<br/>' +
                            'Speed: '                + position.coords.speed                + '<br/>' +
                            'TimeStamp: '            + new Date(position.timestamp * 1000)  + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
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