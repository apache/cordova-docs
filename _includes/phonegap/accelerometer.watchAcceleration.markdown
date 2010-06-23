accelerometer.watchAcceleration
-----------
Specifies a function to be called when acceleration events occur.

### Returns ###
null

### Example ###
{% highlight javascript %}
    navigator.accelerometer.watchAcceleration( function(accel) {console.log(accel.x+","+accel.y+","+accel.z)} );
{% endhighlight %}