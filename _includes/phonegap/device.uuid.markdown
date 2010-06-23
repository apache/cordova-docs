device.uuid
-----------
Returns a unique ID associated to the device. The way this ID is generated is different based on device platform and/or model.

The 'device' object is assigned to the 'window' object, so is implicitly in global scope. It is the only PhoneGap / device API object to be available in such a way.

### Returns ###
String

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
    var deviceID = device.uuid;
	// Returns a platform/model specific string, examples include...
	// BlackBerry returns the PIN number of the device, a nine-digit unique integer.
	// Android returns a random 64-bit integer that is generated on the particular device's first boot.
{% endhighlight %}