Coordinates
-----------
Encapsulates all aspects of a set of location Coordinates.

### Constructor ###
    var coordsObject = new Coordinates(latitude, longitude, altitude, accuracy, heading, speed);

### Properties ###
* __Coordinates.latitude__: a number representing the latitude.
* __Coordinates.longitude__: a number representing the longitude.
* __Coordinates.altitude__: a number representing the altitude.
* __Coordinates.accuracy__: a number representing the accuracy component, as returned by the device. This value can be device-specific.
* __Coordinates.heading__: a number representing the compass heading component.
* __Coordinates.speed__: a number representing the speed component.

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
    // Generate a new Coordinates object.
    var coords = new Coordinates(1,2,3,4,5,6);
    // Create a timestamp.
    var tstamp = new Date().getTime();
    // Generate a new Position object.
    var p = new Position(coords, tstamp);
    // Now we can access coordinates of the Position...
    alert(p.coords == coords); // alerts true
    // You can also get the latitude, longitude, accuracy, heading, speed and altitude...
    alert(p.coords.latitude);
    alert(p.coords.longitude);
    alert(p.coords.altitude);
    alert(p.coords.heading);
    alert(p.coords.accuracy);
    alert(p.coords.speed);