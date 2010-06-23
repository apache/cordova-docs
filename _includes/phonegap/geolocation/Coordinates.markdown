Coordinates(latitude, longitude, altitude, accuracy, heading, speed)
-----------
Encapsulates all components of a location coordinate, including [latitude](#Coordinates.latitude), [longitude](#Coordinates.longitude), [altitude](#Coordinates.altitude), [accuracy](#Coordinates.accuracy), [heading](#Coordinates.heading) and [speed](#Coordinates.speed).

### Properties ###
* [latitude](#Coordinates.latitude): a number representing the latitude component of the [Coordinates](#Coordinates).
* [longitude](#Coordinates.longitude): a number representing the longitude component of the [Coordinates](#Coordinates).
* [altitude](#Coordinates.altitude): a number representing the altitude component of the [Coordinates](#Coordinates).
* [accuracy](#Coordinates.accuracy): a number representing the accuracy component of the [Coordinates](#Coordinates), as returned by the device. This value can be device-specific.
* [heading](#Coordinates.heading): a number representing the compass heading component of the [Coordinates](#Coordinates).
* [speed](#Coordinates.speed): a number representing the speed component of the [Coordinates](#Coordinates).

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
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
{% endhighlight %}