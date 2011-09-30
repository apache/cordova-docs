contacts.create
===============

Returns a new Contact object.

    var contact = navigator.service.contacts.create(properties);

Description
-----------

contacts.create is a synchronous function that returns a new `Contact` object.

This method does not persist the Contact object to the device contacts database.  To persist the Contact object to the device, invoke the `Contact.save` method.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick Example
-------------

    var myContact = navigator.service.contacts.create({"displayName": "Test User"});

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
			var myContact = navigator.service.contacts.create({"displayName": "Test User"});
			myContact.gender = "male";
			console.log("The contact, " + myContact.displayName + ", is of the " + myContact.gender + " gender");
        }
    

        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>
