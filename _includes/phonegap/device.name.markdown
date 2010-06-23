device.name
-----------
Returns the device's model name. The name is defined by the manufacturer, so it is different for each device.
The 'device' object is assigned to the 'window' object, so is implicitly in global scope. It is the only PhoneGap / device API object to be available in such a way.

### Returns ###
String

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
    var deviceName = device.name;
	// Returns the model number of the device, pretty device-specific:
	// BlackBerry: Bold returns 9000, later Pearl would return 8900.
	// Android: Nexus One returns 'Passion' (Original code name HTC had for that device).
	// iPhone: Whatever the owner of the iPhone 'named' it when they plugged it into iTunes, i.e. "Joe's iPhone"
{% endhighlight %}