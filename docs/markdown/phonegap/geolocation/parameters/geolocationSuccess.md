geolocationSuccess
==================

onSuccess callback function that provides the geolocation position.

    function(position) {
        // Do something
    }

Parameters
----------

- __position:__ The GPS location returned by the device. (`Position`)

Example
-------

    function geolocationSuccess(position) {
        alert('Latitude: '  + position.coords.latitude      + '\n' +
              'Longitude: ' + position.coords.longitude     + '\n' +
              'Altitude: '  + position.coords.altitude      + '\n' +
              'Accuracy: '  + position.coords.accuracy      + '\n' +
              'Heading: '   + position.coords.heading       + '\n' +
              'Speed: '     + position.coords.speed         + '\n' +
              'Timestamp: ' + new Date(position.timestamp)  + '\n');
    }