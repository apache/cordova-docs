ContactOrganization
===================

Contains organization properties of a `Contact` object.

Properties
----------
- __pref:__ Set to `true` if this `ContactOrganization` contains the user's preferred value. _(boolean)_
- __type:__ A string that tells you what type of field this is (example: 'home'). _(DOMString)
- __name:__ The name of the organization. _(DOMString)_
- __department:__ The department the contract works for. _(DOMString)_
- __title:__ The contacts title at the organization. _(DOMString)_

Details
-------

The `ContactOrganization` object stores a contact's organization properties.  A `Contact` object stores one or more `ContactOrganization` objects in an array. 

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick Example
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].organizations.length; j++) {
				alert("Pref: " + contacts[i].organizations[j].pref + "\n" +
						"Type: " + contacts[i].organizations[j].type + "\n" +
						"Name: " + contacts[i].organizations[j].name + "\n" + 
						"Department: "  + contacts[i].organizations[j].department + "\n" + 
						"Title: "  + contacts[i].organizations[j].title);
			}
		}
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
        //
        function onDeviceReady() {
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","organizations"];
			navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].organizations.length; j++) {
					alert("Pref: " + contacts[i].organizations[j].pref + "\n" +
							"Type: " + contacts[i].organizations[j].type + "\n" +
							"Name: " + contacts[i].organizations[j].name + "\n" + 
							"Department: "  + contacts[i].organizations[j].department + "\n" + 
							"Title: "  + contacts[i].organizations[j].title);
				}
			}
		};
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
	

Android 2.X Quirks
------------------

- __pref:__ This property is not supported by Android 2.X devices and will always return `false`.

Android 1.X Quirks
------------------

- __pref:__ This property is not supported by Android 1.X devices and will always return `false`.
- __type:__ This property is not supported by Android 1.X devices and will always return `null`.
- __title:__ This property is not supported by Android 1.X devices, and will always be returned as `null`. 

BlackBerry WebWorks (OS 5.0 and higher) Quirks
--------------------------------------------
- __pref:__ This property is not supported by Blackberry devices and will always return `false`.
- __type:__ This property is not supported by Blackberry devices and will always return `null`.
- __name:__ Partially supported.  The first organization name will be stored in the BlackBerry __company__ field.
- __department:__ This property is not supported, and will always be returned as `null`.
- __title:__ Partially supported.  The first organization title will be stored in the BlackBerry __jobTitle__ field.

iOS Quirks
-----------
- __pref:__ This property is not supported on iOS devices and will always return `false`.
- __type:__ This property is not supported on iOS devices and will always return `null`.
- __name:__ Partially supported.  The first organization name will be stored in the iOS __kABPersonOrganizationProperty__ field.
- __department__: Partially supported.  The first department name will be stored in the iOS __kABPersonDepartmentProperty__ field.
- __title__: Partially supported.  The first title will be stored in the iOS __kABPersonJobTitleProperty__ field.


