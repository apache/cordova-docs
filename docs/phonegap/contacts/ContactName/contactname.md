ContactName
===========

Contains `ContactName` properties that are returned from the devices contacts database.

Properties
----------

- __formatted:__ The complete name of the contact. _(DOMString)_
- __familyName:__ The contacts family name. _(DOMString)_
- __givenName:__ The contacts given name. _(DOMString)_
- __middleName:__ The contacts middle name. _(DOMString)_
- __honorificPrefix:__ The contacts prefix (example Mr. or Dr.) _(DOMString)_
- __honorificSuffix:__ The contacts suffix (example Esq.). _(DOMString)_

Details
-------

The `ContactName` object is created and populated by PhoneGap, added to a Contact object, and returned to the user through a callback function.

Supported Platforms
-------------------

- Android 2.X

Quick Example
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert("Formatted: " + contacts[i].name.formatted + "\n" + 
					"Family Name: "  + contacts[i].name.familyName + "\n" + 
					"Given Name: "  + contacts[i].name.givenName + "\n" + 
					"Middle Name: "  + contacts[i].name.middleName + "\n" + 
					"Suffix: "  + contacts[i].name.honorificSuffix + "\n" + 
					"Prefix: "  + contacts[i].name.honorificSuffix);
		}
    };

    function onError() {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","name"];
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
			filter = ["displayName"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert("Formatted: " + contacts[i].name.formatted + "\n" + 
						"Family Name: "  + contacts[i].name.familyName + "\n" + 
						"Given Name: "  + contacts[i].name.givenName + "\n" + 
						"Middle Name: "  + contacts[i].name.middleName + "\n" + 
						"Suffix: "  + contacts[i].name.honorificSuffix + "\n" + 
						"Prefix: "  + contacts[i].name.honorificSuffix);
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
