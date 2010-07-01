Coordinates
-----------

A set of properties that describe the geographic coordinates of a position.

### Properties ###
* __latitude__: Latitude in decimal degrees. _(Number)_
* __longitude__: Longitude in decimal degrees. _(Number)_
* __altitude__: Height of the position in meters above the ellipsoid. _(Number)_
* __accuracy__: Accuracy level of the latitude and longitude coordinates in meters. _(Object)_
    - This value can be device-specific.
* __heading__: Direction of travel, specified in degrees counting clockwise relative to the true north. _(Number)_
* __speed__: Current ground speed of the device, specified in meters per second. _(Number)_

### Details ###

The `Coordinates` object is created and populated by PhoneGap, and attached to the `Position` object. The `Position` object is then returned to the user through a callback function.

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
              'Speed: '                + position.coords.speed                + '\n');
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
        
            div.innerHTML = 'Latitude: '             + position.coords.latitude  + '<br/>' +
                            'Longitude: '            + position.coords.longitude + '<br/>' +
                            'Altitude: '             + position.coords.altitude  + '<br/>' +
                            'Accuracy (Horzintal): ' + position.coords.accuracy.horizontal  + '<br/>' +
                            'Accuracy (Vertical): '  + position.coords.accuracy.horizontal  + '<br/>' +
                            'Heading: '              + position.coords.heading   + '<br/>' +
                            'Speed: '                + position.coords.speed     + '<br/>';
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