contacts.create
===============

Returns a new Contact object.

    navigator.service.contacts.create(attributes);

Description
-----------

contacts.create is a synchronous function that returns a Contact object.  The returned Contact object is not stored in the devices database.  In order to save the Contact object on the device call the save method on the Contact object.

Supported Platforms
-------------------

- Android

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
