ContactOrganization
===================

Contains `ContactOrganization` properties that are returned from the devices contacts database.

Properties
----------

- __name:__ The name of the organization. _(DOMString)_
- __department:__ The department the contract works for. _(DOMString)_
- __title:__ The contacts title at the organization. _(DOMString)_
- __startDate:__ The date the contact started working with the organization. _(DOMString)_
- __endDate:__ The date the contact finished working with the organization. _(DOMString)_
- __location:__ The address of the location. _(DOMString)_
- __description:__ A description of the role the contact has in the organization. _(DOMString)_

Details
-------

The `ContactOrganization` object is created and populated by PhoneGap, added to an array of ContactOrganization objects, and returned to the user through a callback function.

Supported Platforms
-------------------

- Android

Quick Example
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].organizations.length; j++) {
				alert("Name: " + contacts[i].organizations[j].name + "\n" + 
						"Department: "  + contacts[i].organizations[j].department + "\n" + 
						"Title: "  + contacts[i].organizations[j].title + "\n" + 
						"Start Date: "  + contacts[i].organizations[j].startDate + "\n" + 
						"End Date: "  + contacts[i].organizations[j].endDate + "\n" + 
						"Location: "  + contacts[i].organizations[j].location + "\n" + 
						"Description: "  + contacts[i].organizations[j].description);
			}
		}
    };

    function onError() {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","organizations"];
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
			filter = ["displayName","organizations"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].organizations.length; j++) {
					alert("Name: " + contacts[i].organizations[j].name + "\n" + 
							"Department: "  + contacts[i].organizations[j].department + "\n" + 
							"Title: "  + contacts[i].organizations[j].title + "\n" + 
							"Start Date: "  + contacts[i].organizations[j].startDate + "\n" + 
							"End Date: "  + contacts[i].organizations[j].endDate + "\n" + 
							"Location: "  + contacts[i].organizations[j].location + "\n" + 
							"Description: "  + contacts[i].organizations[j].description);
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

Android 2.X Quirks
------------------

- __startDate:__ This attribute is not support by Android 1.X devices, it will always return null
- __endDate:__ This attribute is not support by Android 1.X devices, it will always return null
	
Android 1.X Quirks
------------------

- __title:__ This attribute is not support by Android 1.X devices, it will always return null
- __startDate:__ This attribute is not support by Android 1.X devices, it will always return null
- __endDate:__ This attribute is not support by Android 1.X devices, it will always return null
- __location:__ This attribute is not support by Android 1.X devices, it will always return null
- __description:__ This attribute is not support by Android 1.X devices, it will always return null
