notification.vibrate(length)
---------------------
Causes the device to vibrate for the specified amount of time. See below warning regarding the "length" parameter.

### Warning ###
The "length" parameter seems to be implemented differently at this time across platforms. Android accepts the specification in milliseconds. BlackBerry accepts length in seconds. iPhone vibrates for a constant amount of time.

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
	navigator.notification.vibrate(2);
	// Vibrates for two seconds on a BlackBerry, two milliseconds on an Android...
{% endhighlight %}