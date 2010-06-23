device.available
----------------
Returns true if the PhoneGap API is initialized and available for use.

### Returns ###
Boolean

### Example ###
{% highlight javascript %}
<html>
  <head>
    // available will be false
    // because the device has not yet loaded PhoneGap
    var available = window.device.available;

    function onLoad() {
        document.addEventListener("deviceready",onDeviceReady,false);
    }

    function onDeviceReady() {
        // Available will be true
    	available = window.device.available;
    }
  </head>
  <body onload="onLoad()">
  </body>
</html>
{% endhighlight %}