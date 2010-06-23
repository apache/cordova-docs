accelerometer.getCurrentAcceleration
-----------
Returns the current acceleration values in X,Y,Z axis in an Acceleration object.

### Returns ###
Acceleration Object

### Example ###
{% highlight javascript %}
	var x = 1;
	var y = 2;
	var z = 3;
	var a = new Acceleration(x, y, z);
	
	a = navigator.accelerometer.getCurrentAcceleration();
    console.log("X,Y,Z = "+a.x+","+a.y+","+a.z);
{% endhighlight %}