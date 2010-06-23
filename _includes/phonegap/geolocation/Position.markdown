Position(coords, timestamp)
-----------
Creates a new [Position](#Position) object, which encapsulates not only the location via a [Coordinates](#Coordinates) object but also associates a timestamp to the object, representing when the [Position](#Position) was created.

### Properties ###
* [coords](#Position.coords): a [Coordinates](#Coordinates) object.
* [timestamp](#Position.timestamp): a number representing when the [Position](#Position) object was created.

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
// We can also access the timestamp.
alert(p.timestamp == tstamp); // alerts true
{% endhighlight %}