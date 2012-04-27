---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

Contact
=======

Contains properties that describe a contact, such as a user's personal or business contact.

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
- __preferredUsername:__ The preferred username of the contact. _(DOMString)_
- __photos:__ An array of all the contact's photos. _(ContactField[])_
- __tags:__  An array of all the contacts user defined tags. _(ContactField[])_
- __relationships:__  An array of all the contact's relationships. _(ContactField[])_
- __urls:__  An array of web pages associated to the contact. _(ContactField[])_
- __accounts:__ An array of accounts associated to the contact. _(ContactAccount[])_
- __utcOffset:__ The offset from UTC of the contacts time zone. _(DOMString)_
- __connected:__ Only true if the contact and the user have a bi-directional relationship. _(DOMString)_

Methods
-------

- __clone__: Returns a new Contact object that is a deep copy of the calling object, with the id property set to `null`. 
- __remove__: Removes the contact from the device contacts database.  An error callback is called with a `ContactError` object if the removal is unsuccessful.
- __save__: Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same __id__ already exists.


Details
-------

The `Contact` object represents a user contact.  Contacts can be created, saved to, or removed from the device contacts database.  Contacts can also be retrieved (individually or in bulk) from the database by invoking the `contacts.find` method.

_Note: Not all of the above contact fields are supported on every device platform.  Please check each platform's Quirks section for information about which fields are supported._

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 5.0 and higher)

Save Quick Example
------------------

	// create a new contact object
    var contact = navigator.service.contacts.create();
	contact.displayName = "Plumber";
	
	// populate some fields
	var name = new ContactName();
	name.givenName = "Jane";
	name.familyName = "Doe";
	contact.name = name;
	
	// save to device
	contact.save();

Clone Quick Example
-------------------

	// clone the contact object
	var clone = contact.clone();
	clone.name.givenName = "John";
	console.log("Original contact name = " + contact.name.givenName);
	console.log("Cloned contact name = " + clone.name.givenName); 

Remove Quick Example
--------------------

    function onSuccess() {
        alert("Removal Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

	// remove the contact from the device
	contact.remove(onSuccess,onError);

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-0.9.2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
		    // create
		    var contact = navigator.service.contacts.create();
			contact.displayName = "Plumber";
			var name = new ContactName();
			name.givenName = "Jane";
			name.familyName = "Doe";
			contact.name = name;

			// save
			contact.save();
			
			// clone
			var clone = contact.clone();
			clone.name.givenName = "John";
			console.log("Original contact name = " + contact.name.givenName);
			console.log("Cloned contact name = " + clone.name.givenName); 
			
			// remove
			contact.remove(onRemoveSuccess,onRemoveError);
        }
        
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
			alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
			alert("Error = " + contactError.code);
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

- __save__ function not yet supported.
- __published:__ This property is not support by Android 2.X devices, and will always be returned as `null`.
- __updated:__ This property is not support by Android 2.X devices, and will always be returned as `null`.
- __gender:__ This property is not support by Android 2.X devices, and will always be returned as `null`.
- __preferredUsername:__ This property is not support by Android 2.X devices, and will always be returned as `null`.
- __photos:__ This property is not support by Android 2.X devices, and will always be returned as `null`.
- __tags:__  This property is not support by Android 2.X devices, and will always be returned as `null`.
- __accounts:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __utcOffset:__ This property is not support by Android 2.X devices, and will always be returned as `null`.
- __connected:__ This property is not support by Android 2.X devices, and will always be returned as `null`.

Android 1.X Quirks
------------------

- __save__ function not yet supported.
- __name:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __nickname:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __published:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __updated:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __birthday:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __anniversary:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __gender:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __preferredUsername:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __photos:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __tags:__  This property is not support by Android 1.X devices, and will always be returned as `null`.
- __relationships:__  This property is not support by Android 1.X devices, and will always be returned as `null`.
- __urls:__  This property is not support by Android 1.X devices, and will always be returned as `null`.
- __accounts:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __utcOffset:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __connected:__ This property is not support by Android 1.X devices, and will always be returned as `null`.

BlackBerry Widgets (OS 5.0 and higher) Quirks
---------------------------------------------

- __id:__ Supported.  Assigned by device when contact is saved.
- __displayname:__ Supported.  Stored in BlackBerry __title__ field.
- __name:__ Supported.
- __nickname:__ This property is not supported, and will always be returned as `null`. 
- __phoneNumbers:__ Partially supported.  Phone numbers will be stored in BlackBerry fields __homePhone1__ and __homePhone2__ if _type_ is 'home', __workPhone1__ and __workPhone2__ if _type_ is 'work', __mobilePhone__ if _type_ is 'mobile', __faxPhone__ if _type_ is 'fax', __pagerPhone__ if _type_ is 'pager', and __otherPhone__ if _type_ is none of the above.
- __emails:__ Partially supported.  The first three email addresses will be stored in the BlackBerry __email1__, __email2__, and __email3__ fields, respectively.
- __addresses:__ Partially supported.  The first and second addresses will be stored in the BlackBerry __homeAddress__ and __workAddress__ fields, respectively.
- __ims:__ This property is not supported, and will always be returned as `null`. 
- __organizations:__ Partially supported.  The __name__ and __title__ of the first organization are stored in the BlackBerry __company__ and __title__ fields, respectively.
- __published:__ This property is not supported, and will always be returned as `null`. 
- __updated:__ This property is not supported, and will always be returned as `null`. 
- __birthday:__ Supported.
- __anniversary:__ Supported.
- __gender:__ This property is not supported, and will always be returned as `null`. 
- __note:__ Supported.
- __preferredUsername:__ This property is not supported, and will always be returned as `null`. 
- __photos:__ This property is not supported, and will always be returned as `null`. 
- __tags:__  This property is not supported, and will always be returned as `null`. 
- __relationships:__  This property is not supported, and will always be returned as `null`. 
- __urls:__  Partially supported. The first url is stored in BlackBerry __webpage__ field.
- __accounts:__ This property is not supported, and will always be returned as `null`.
- __utcOffset:__ This property is not supported, and will always be returned as `null`.
- __connected:__ This property is not supported, and will always be returned as `null`. 
