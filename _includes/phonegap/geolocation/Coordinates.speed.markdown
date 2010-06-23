Coordinates.speed
-----------
Returns the speed of the GPS.

### Returns ###
Number

### Example ###
{% highlight javascript %}
	var coords = new Coordinates(1,2,3,4,5,6,7);
	coords = navigator.geolocation.getCurrentPosition();
	console.log(coords.latitude);
	console.log(coords.longitude);
	console.log(coords.accuracy);
	console.log(coords.altitude);
	console.log(coords.heading);
	console.log(coords.speed);
{% endhighlight %}