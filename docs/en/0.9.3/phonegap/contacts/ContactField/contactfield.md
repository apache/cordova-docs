ContactField
============

Supports generic fields in a `Contact` object.  Some properties that are stored as `ContactField` objects include email addresses, phone numbers, and urls.

Properties
----------

- __type:__ A string that tells you what type of field this is (example: 'home'). _(DOMString)_
- __value:__ The value of the field (such as a phone number or email address). _(DOMString)_
- __primary:__ Set to `true` if this `ContactField` contains the user's preferred value. _(boolean)_

Details
-------

The `ContactField` object is a reusable component that is used to support contact fields in a generic fashion.  Each `ContactField` object contains a value property, a type property, and a primary property.  A `Contact` object stores several properties in `ContactField[]` arrays, such as phone numbers and email addresses.

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 5.0 and higher)

Quick Example
-------------

	// create a new contact
	var contact = navigator.service.contacts.create();
	
	// store contact phone numbers in ContactField[]
	var phoneNumbers = [3];
	phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
	phoneNumbers[1] = new ContactField('mobile', '917-555'-5432', true); // primary number
	phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
	contact.phoneNumbers = phoneNumbers;
	
	// save the contact
	contact.save();

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
			// create a new contact
			var contact = navigator.service.contacts.create();

			// store contact phone numbers in ContactField[]
			var phoneNumbers = [3];
			phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
			phoneNumbers[1] = new ContactField('mobile', '917-555'-5432', true); // primary number
			phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
			contact.phoneNumbers = phoneNumbers;

			// save the contact
			contact.save();

			// search contacts, returning display name and phone numbers
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","phoneNumbers"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
					alert("Type: " + contacts[i].phoneNumbers[j].type + "\n" + 
							"Value: "  + contacts[i].phoneNumbers[j].value + "\n" + 
							"Primary: "  + contacts[i].phoneNumbers[j].primary);
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

- __primary:__ This property is not support by Android devices, and will always return `false`.

BlackBerry Widget (OS 5.0 and higher) Quirks
--------------------------------------------

- __type:__ Partially supported.  Used for phone numbers.
- __value:__ Supported.
- __primary:__ This property is not supported, and will always return `false`.


