device.version
--------------
Returns the device's OS version as a string.

The 'device' object is assigned to the 'window' object, so is implicitly in global scope. It is the only PhoneGap / device API object to be available in such a way.

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
var deviceVersion = device.version;
// Returns different strings based on the device OS's version. Examples include...
// A typical BlackBerry Bold 9000 would return '4.6.0.282' (referring to BlackBerry OS 4.6)
// An Android phone running Froyo would return '2.2', an Android running Eclair would return '2.1' or '2.0.1' or '2.0', 1.6 would return 'Cupcake', etc.
{% endhighlight %}