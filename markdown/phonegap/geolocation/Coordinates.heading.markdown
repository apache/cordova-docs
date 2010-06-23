Coordinates.heading
-----------
Returns the compass heading of the GPS coordinates encapsulated in the Coordinates object.

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
var coords = new Coordinates(1,2,3,4,5,6);
alert(coords.heading);
// Returns 5.
{% endhighlight %}