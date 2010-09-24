ContactField
============

Contains `ContactField` properties that are returned from the devices contacts database.  Some elements that are contact fields include email, phone numbers and urls.

Properties
----------

- __type:__ A string that tells you what type of field this is (example home). _(DOMString)_
- __value:__ The value of the field (example a phone number or email address). _(DOMString)_
- __primary:__ Set to true if this is the preferred value of this ContactField. _(boolean)_

Details
-------

The `ContactField` object is created and populated by PhoneGap, added to an array of ContactField objects for various items like phone number and email addresses, and returned to the user through a callback function.

Supported Platforms
-------------------

- Android

Quick Example
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].emails.length; j++) {
				alert("Type: " + contacts[i].emails[j].type + "\n" + 
						"Value: "  + contacts[i].emails[j].value + "\n" + 
						"Primary: "  + contacts[i].emails[j].primary);
			}
		}
    };

    function onError() {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","emails"];
    navigator.service.contacts.find(filter, onSuccess, onError, options);

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
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","emails"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].emails.length; j++) {
					alert("Type: " + contacts[i].emails[j].type + "\n" + 
							"Value: "  + contacts[i].emails[j].value + "\n" + 
							"Primary: "  + contacts[i].emails[j].primary);
				}
			}
		};
    
        // onError: Failed to get the contacts
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>

Android Quirks
--------------

- __primary:__ This attribute is not support by Android devices, it will always return false

