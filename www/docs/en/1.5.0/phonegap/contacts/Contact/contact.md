---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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
- __displayName:__ The <a href="../../storage/parameters/name.html">name</a> of this Contact, suitable for display to end-users. _(DOMString)_
- __<a href="../../storage/parameters/name.html">name</a>:__ An object containing all components of a persons <a href="../../storage/parameters/name.html">name</a>. _(<a href="../ContactName/contactname.html">ContactName</a>)_
- __nick<a href="../../storage/parameters/name.html">name</a>:__ A casual <a href="../../storage/parameters/name.html">name</a> to address the contact by. _(DOMString)_
- __phoneNumbers:__ An array of all the contact's phone numbers. _(<a href="../ContactField/contactfield.html">ContactField</a>[])_
- __emails:__ An array of all the contact's email addresses. _(<a href="../ContactField/contactfield.html">ContactField</a>[])_
- __addresses:__ An array of all the contact's addresses. _(<a href="../ContactAddress/contactaddress.html">ContactAddress</a>es[])_
- __ims:__ An array of all the contact's IM addresses. _(<a href="../ContactField/contactfield.html">ContactField</a>[])_
- __organizations:__ An array of all the contact's organizations. _(<a href="../ContactOrganization/contactorganization.html">ContactOrganization</a>[])_
- __birthday:__ The birthday of the contact. _(Date)_
- __note:__ A note about the contact. _(DOMString)_
- __photos:__ An array of the contact's photos. _(<a href="../ContactField/contactfield.html">ContactField</a>[])_
- __categories:__  An array of all the contacts user defined categories. _(<a href="../ContactField/contactfield.html">ContactField</a>[])_
- __urls:__  An array of web pages associated to the contact. _(<a href="../ContactField/contactfield.html">ContactField</a>[])_

Methods
-------

- __clone__: Returns a new Contact object that is a deep copy of the calling object, with the id property set to `null`. 
- __remove__: Removes the contact from the device contacts database.  An error callback is called with a `<a href="../ContactError/<a href="../parameters/contactError.html">contactError</a>.html">ContactError</a>` object if the removal is unsuccessful.
- __save__: Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same __id__ already exists.


Details
-------

The `Contact` object represents a user contact.  <a href="../contacts.html">Contacts</a> can be created, saved to, or removed from the device contacts database.  <a href="../contacts.html">Contacts</a> can also be retrieved (individually or in bulk) from the database by invoking the `<a href="../contacts.find.html">contacts.find</a>` method.

_Note: Not all of the above contact fields are supported on every device platform.  Please check each platform's Quirks section for information about which fields are supported._

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Save Quick <a href="../../storage/storage.opendatabase.html">Example</a>
------------------

	function onSuccess(contact) {
		alert("Save Success");
	};

	function onError(<a href="../parameters/contactError.html">contactError</a>) {
		alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
	};

	// create a new contact object
    var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();
	contact.displayName = "Plumber";
	contact.nick<a href="../../storage/parameters/name.html">name</a> = "Plumber"; 		//specify both to support all devices
	
	// populate some fields
	var <a href="../../storage/parameters/name.html">name</a> = new <a href="../ContactName/contactname.html">ContactName</a>();
	<a href="../../storage/parameters/name.html">name</a>.givenName = "Jane";
	<a href="../../storage/parameters/name.html">name</a>.familyName = "Doe";
	contact.<a href="../../storage/parameters/name.html">name</a> = <a href="../../storage/parameters/name.html">name</a>;
	
	// save to device
	contact.save(onSuccess,onError);

Clone Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------------

	// clone the contact object
	var clone = contact.clone();
	clone.<a href="../../storage/parameters/name.html">name</a>.givenName = "John";
	console.log("Original contact <a href="../../storage/parameters/name.html">name</a> = " + contact.<a href="../../storage/parameters/name.html">name</a>.givenName);
	console.log("Cloned contact <a href="../../storage/parameters/name.html">name</a> = " + clone.<a href="../../storage/parameters/name.html">name</a>.givenName); 

Remove Quick <a href="../../storage/storage.opendatabase.html">Example</a>
--------------------

    function onSuccess() {
        alert("Removal Success");
    };

    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };

	// remove the contact from the device
	contact.remove(onSuccess,onError);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // PhoneGap is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
		    // create
		    var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();
			contact.displayName = "Plumber";
			contact.nick<a href="../../storage/parameters/name.html">name</a> = "Plumber"; 		//specify both to support all devices
			var <a href="../../storage/parameters/name.html">name</a> = new <a href="../ContactName/contactname.html">ContactName</a>();
			<a href="../../storage/parameters/name.html">name</a>.givenName = "Jane";
			<a href="../../storage/parameters/name.html">name</a>.familyName = "Doe";
			contact.<a href="../../storage/parameters/name.html">name</a> = <a href="../../storage/parameters/name.html">name</a>;

			// save
			contact.save(onSaveSuccess,onSaveError);
			
			// clone
			var clone = contact.clone();
			clone.<a href="../../storage/parameters/name.html">name</a>.givenName = "John";
			console.log("Original contact <a href="../../storage/parameters/name.html">name</a> = " + contact.<a href="../../storage/parameters/name.html">name</a>.givenName);
			console.log("Cloned contact <a href="../../storage/parameters/name.html">name</a> = " + clone.<a href="../../storage/parameters/name.html">name</a>.givenName); 
			
			// remove
			contact.remove(onRemoveSuccess,onRemoveError);
        }
        
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
			alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(<a href="../parameters/contactError.html">contactError</a>) {
			alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
        
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
			alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(<a href="../parameters/contactError.html">contactError</a>) {
			alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }

        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find <a href="../contacts.html">Contacts</a></p>
      </body>
    </html>

Android 2.X Quirks
------------------

- __categories:__  This property is not support by Android 2.X devices, and will always be returned as `null`.

Android 1.X Quirks
------------------

- __<a href="../../storage/parameters/name.html">name</a>:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __nick<a href="../../storage/parameters/name.html">name</a>:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __birthday:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __photos:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __categories:__  This property is not support by Android 1.X devices, and will always be returned as `null`.
- __urls:__  This property is not support by Android 1.X devices, and will always be returned as `null`.


BlackBerry WebWorks (OS 5.0 and higher) Quirks
---------------------------------------------

- __id:__ Supported.  Assigned by device when contact is saved.
- __displayName:__ Supported.  Stored in BlackBerry __user1__ field.
- __nick<a href="../../storage/parameters/name.html">name</a>:__ This property is not supported, and will always be returned as `null`. 
- __phoneNumbers:__ Partially supported.  Phone numbers will be stored in BlackBerry fields __homePhone1__ and __homePhone2__ if _type_ is 'home', __workPhone1__ and __workPhone2__ if _type_ is 'work', __mobilePhone__ if _type_ is 'mobile', __faxPhone__ if _type_ is 'fax', __pagerPhone__ if _type_ is 'pager', and __otherPhone__ if _type_ is none of the above.
- __emails:__ Partially supported.  The first three email addresses will be stored in the BlackBerry __email1__, __email2__, and __email3__ fields, respectively.
- __addresses:__ Partially supported.  The first and second addresses will be stored in the BlackBerry __homeAddress__ and __workAddress__ fields, respectively.
- __ims:__ This property is not supported, and will always be returned as `null`. 
- __organizations:__ Partially supported.  The __<a href="../../storage/parameters/name.html">name</a>__ and __title__ of the first organization are stored in the BlackBerry __company__ and __title__ fields, respectively.
- __photos:__ - Partially supported.  A single thumbnail-<a href="../../storage/parameters/size.html">size</a>d photo is supported.  To set a contact's photo, pass in a either a Base64 encoded image, or a URL pointing to the image.  The image will be scaled down before saving to the BlackBerry contacts database.   The contact photo is returned as a Base64 encoded image.
- __categories:__  Partially supported.  Only 'Business' and 'Personal' categories are supported. 
- __urls:__  Partially supported. The first url is stored in BlackBerry __webpage__ field.

iOS Quirks
----------
- __displayName:__ This property is not supported by iOS and will be returned as `null` unless there is no <a href="../ContactName/contactname.html">ContactName</a> specified.  If there is no <a href="../ContactName/contactname.html">ContactName</a>, then composite <a href="../../storage/parameters/name.html">name</a>, __nick<a href="../../storage/parameters/name.html">name</a>__ or "" is returned for __displayName__, respectively. 
- __birthday:__ For input, this property must be provided as a JavaScript Date object. It is returned as a JavaScript Date object.
- __photos:__ Returned Photo is stored in the application's temporary directory and a <a href="../../file/fileobj/fileobj.html">File</a> URL to photo is returned.  Contents of temporary folder is deleted when application exits. 
- __categories:__  This property is not currently supported and will always be returned as `null`.
