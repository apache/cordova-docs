contacts.create
===============

Returns a new Contact object.

    var contact = navigator.contacts.create(properties);

Description
-----------

contacts.create is a synchronous function that returns a new `Contact` object.

This method does not persist the Contact object to the device contacts database.  To persist the Contact object to the device, invoke the `Contact.save` method.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2

Quick Example
-------------

    var myContact = navigator.contacts.create({"displayName": "Test User"});

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
			var myContact = navigator.contacts.create({"displayName": "Test User"});
			myContact.note = "This contact has a note.";
			console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>
