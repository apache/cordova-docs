Position.timestamp
-----------
Returns a number, the value of the date associated with the generation of this [Position](#Position). The underlying structure of this property is the same as
{% highlight javascript %}
    new Date().getTime();
{% endhighlight %}

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
	// Generate a new timestamp for the Position object.
	var timestamp = new Date().getTime();
	// Generate a new Position object.
	var p = new Position(0, timestamp);
	alert(p.timestamp == timestamp);
	// Alerts true.
{% endhighlight %}