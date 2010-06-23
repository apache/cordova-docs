Position.coords
-----------
Returns the [Coordinates](#Coordinates) object associated with the [Position](#Position) object. This is the object that most likely will interest you if you are working with the [Position](#Position) object 

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
	// Generate a new Coordinates object.
    var coords = new Coordinates(1,2,3,4,5,6);
	// Generate a new Position object.
	var p = new Position(coords, new Date().getTime());
	alert(p.coords == coords);
	// Alerts true.
{% endhighlight %}