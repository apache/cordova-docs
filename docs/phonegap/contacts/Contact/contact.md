Contact
=======

Contains `Contact` properties that are returned from the devices contacts database.

Properties
----------

- __id:__ A globally unique identifier. _(DOMString)_
- __displayname:__ The name of this Contact, suitable for display to end-users. _(DOMString)_
- __name:__ An object containing all components of a persons name. _(ContactName)_
- __nickname:__ A casual name to address the contact by. _(DOMString)_
- __phoneNumbers:__ An array of all the contact's phone numbers. _(ContactField[])_
- __emails:__ An array of all the contact's email addresses. _(ContactField[])_
- __addresses:__ An array of all the contact's addresses. _(ContactAddresses[])_
- __ims:__ An array of all the contact's IM addresses. _(ContactField[])_
- __organizations:__ An array of all the contact's organizations. _(ContactOrganization[])_
- __published:__ The date the contact was first added to the database. _(DOMString)_
- __updated:__ The last date the contact was updated. _(DOMString)_
- __birthday:__ The birthday of the contact. _(DOMString)_
- __anniversary:__ The wedding anniversary of the contact. _(DOMString)_
- __gender:__ The gender of the contact. _(DOMString)_
- __note:__ A note about the contact. _(DOMString)_
- __preferredUsername:__ The preferred usename of the contact. _(DOMString)_
- __photos:__ An array of all the contact's photos. _(ContactField[])_
- __tags:__  An array of all the contacts user defined tags. _(ContactField[])_
- __relationships:__  An array of all the contact's relationships. _(ContactField[])_
- __urls:__  An array of web pages associated to the contact. _(ContactField[])_
- __accounts:__ An array of accounts associated to the contact. _(ContactAccount[])_
- __utcOffset:__ The offset from UTC of the contacts time zone. _(DOMString)_
- __connected:__ Only true if the contact and the user have a bi-directional relationship. _(DOMString)_

Details
-------

The `Contact` object array is created and populated by PhoneGap, and returned to the user through a callback function.

Supported Platforms
-------------------

- Android

Quick Example
-------------

    function onSuccess(contacts) {
        alert(contacts.length);
    };

    function onError() {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName"];
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
				console.log("Display Name = " + contacts[i].displayName;
			}
        }
    
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

- __published:__ This attribute is not support by Android 2.X devices, it will always return null
- __updated:__ This attribute is not support by Android 2.X devices, it will always return null
- __gender:__ This attribute is not support by Android 2.X devices, it will always return null
- __preferredUsername:__ This attribute is not support by Android 2.X devices, it will always return null
- __photos:__ This attribute is not support by Android 2.X devices, it will always return null
- __tags:__  This attribute is not support by Android 2.X devices, it will always return null
- __accounts:__ This attribute is not support by Android 1.X devices, it will always return null
- __utcOffset:__ This attribute is not support by Android 2.X devices, it will always return null
- __connected:__ This attribute is not support by Android 2.X devices, it will always return null

Android 1.X Quirks
------------------

- __name:__ This attribute is not support by Android 1.X devices, it will always return null
- __nickname:__ This attribute is not support by Android 1.X devices, it will always return null
- __published:__ This attribute is not support by Android 1.X devices, it will always return null
- __updated:__ This attribute is not support by Android 1.X devices, it will always return null
- __birthday:__ This attribute is not support by Android 1.X devices, it will always return null
- __anniversary:__ This attribute is not support by Android 1.X devices, it will always return null
- __gender:__ This attribute is not support by Android 1.X devices, it will always return null
- __preferredUsername:__ This attribute is not support by Android 1.X devices, it will always return null
- __photos:__ This attribute is not support by Android 1.X devices, it will always return null
- __tags:__  This attribute is not support by Android 1.X devices, it will always return null
- __relationships:__  This attribute is not support by Android 1.X devices, it will always return null
- __urls:__  This attribute is not support by Android 1.X devices, it will always return null
- __accounts:__ This attribute is not support by Android 1.X devices, it will always return null
- __utcOffset:__ This attribute is not support by Android 1.X devices, it will always return null
- __connected:__ This attribute is not support by Android 1.X devices, it will always return null
