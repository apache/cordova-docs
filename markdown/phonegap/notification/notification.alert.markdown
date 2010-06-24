notification.alert(title, message, buttonName)
------------------
Shows an alert box. Usually leverages the platform browser's JavaScript "alert" function, but on some platforms a more robust alert dialog is shown.

The iPhone is the only platform that supports custom dialog titles and button names at this time.

On the Android, this will show a non-blocking dialog with title 'Alert', OK and Cancel buttons, and the contents of your message in the dialog contents. It being non-blocking can be counter-intuitive - the most recent alert will show on top!

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
{% highlight javascript %}
navigator.notification.alert('title', 'message', 'ButtonName');
{% endhighlight %}