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


Contacts
========

> The `contacts` object provides access to the device contacts database.

Methods
-------

- contacts.create
- contacts.find

Arguments
---------

- contactFields
- contactSuccess
- contactError
- contactFindOptions

Objects
-------

- Contact
- ContactName
- ContactField
- ContactAddress
- ContactOrganization
- ContactFindOptions
- ContactError

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Contacts" value="org.apache.cordova.ContactManager" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.GET_ACCOUNTS" />
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.WRITE_CONTACTS" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>ADDRESSBOOK</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Contact" value="org.apache.cordova.pim.Contact" />

#### www/config.xml

    <feature id="blackberry.find"        required="true" version="1.0.0.0" />
    <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />

### iOS

#### config.xml

    <plugin name="Contacts" value="CDVContacts" />

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_CONTACTS" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)



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
- Windows Phone 7 and 8
- Bada 1.2 & 2.0

Quick Example
-------------

    var myContact = navigator.contacts.create({"displayName": "Test User"});

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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



contacts.find
=============

Queries the device contacts database and returns one or more `Contact` objects, each containing the fields specified.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);

Description
-----------

contacts.find is an asynchronous function that queries the device contacts database and returns an array of `Contact` objects.  The resulting objects are passed to the `contactSuccess` callback function specified by the __contactSuccess__ parameter.  

Users must specify the contact fields to be used as a search qualifier in the __contactFields__ parameter.  Only the fields specified in the __contactFields__ parameter will be returned as properties of the `Contact` objects that are passed to the __contactSuccess__ callback function.  A zero-length __contactFields__ parameter will result in an array of `Contact` objects with only the `id` property populated. A __contactFields__ value of ["*"] will return all contact fields. 

The __contactFindOptions.filter__ string can be used as a search filter when querying the contacts database.  If provided, a case-insensitive, partial value match is applied to each field specified in the __contactFields__ parameter.  If a match is found in a comparison with _any_ of the specified fields, the contact is returned.

Parameters
----------

- __contactFields:__ Contact fields to be used as search qualifier. Only these fields will have values in the resulting `Contact` objects. _(DOMString[])_ [Required]
- __contactSuccess:__ Success callback function that is invoked with the contacts returned from the contacts database. [Required]
- __contactError:__ Error callback function. Invoked when error occurs. [Optional]
- __contactFindOptions:__ Search options to filter contacts. [Optional]

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 1.2 & 2.0
- Windows 8

Quick Example
-------------

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };

    function onError(contactError) {
        alert('onError!');
    };

    // find all contacts with 'Bob' in any name field
    var options = new ContactFindOptions();
	options.filter="Bob";
	options.multiple=true; 
	var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
		    // find all contacts with 'Bob' in any name field
		    var options = new ContactFindOptions();
			options.filter="Bob"; 
			var fields = ["displayName", "name"];
		    navigator.contacts.find(fields, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				console.log("Display Name = " + contacts[i].displayName);
			}
        }
    
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
    




Contact
=======

Contains properties that describe a contact, such as a user's personal or business contact.

Properties
----------

- __id:__ A globally unique identifier. _(DOMString)_
- __displayName:__ The name of this Contact, suitable for display to end-users. _(DOMString)_
- __name:__ An object containing all components of a persons name. _(ContactName)_
- __nickname:__ A casual name to address the contact by. _(DOMString)_
- __phoneNumbers:__ An array of all the contact's phone numbers. _(ContactField[])_
- __emails:__ An array of all the contact's email addresses. _(ContactField[])_
- __addresses:__ An array of all the contact's addresses. _(ContactAddress[])_
- __ims:__ An array of all the contact's IM addresses. _(ContactField[])_
- __organizations:__ An array of all the contact's organizations. _(ContactOrganization[])_
- __birthday:__ The birthday of the contact. _(Date)_
- __note:__ A note about the contact. _(DOMString)_
- __photos:__ An array of the contact's photos. _(ContactField[])_
- __categories:__  An array of all the contacts user defined categories. _(ContactField[])_
- __urls:__  An array of web pages associated to the contact. _(ContactField[])_

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
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 1.2 & 2.0
- Windows 8

Save Quick Example
------------------

	function onSuccess(contact) {
		alert("Save Success");
	};

	function onError(contactError) {
		alert("Error = " + contactError.code);
	};

	// create a new contact object
    var contact = navigator.contacts.create();
	contact.displayName = "Plumber";
	contact.nickname = "Plumber"; 		//specify both to support all devices
	
	// populate some fields
	var name = new ContactName();
	name.givenName = "Jane";
	name.familyName = "Doe";
	contact.name = name;
	
	// save to device
	contact.save(onSuccess,onError);

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

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
		    // create
		    var contact = navigator.contacts.create();
			contact.displayName = "Plumber";
			contact.nickname = "Plumber"; 		//specify both to support all devices
			var name = new ContactName();
			name.givenName = "Jane";
			name.familyName = "Doe";
			contact.name = name;

			// save
			contact.save(onSaveSuccess,onSaveError);
			
			// clone
			var clone = contact.clone();
			clone.name.givenName = "John";
			console.log("Original contact name = " + contact.name.givenName);
			console.log("Cloned contact name = " + clone.name.givenName); 
			
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
        function onSaveError(contactError) {
			alert("Error = " + contactError.code);
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
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>

Android 2.X Quirks
------------------

- __categories:__  This property is not support by Android 2.X devices, and will always be returned as `null`.


BlackBerry WebWorks (OS 5.0 and higher) Quirks
---------------------------------------------

- __id:__ Supported.  Assigned by device when contact is saved.
- __displayName:__ Supported.  Stored in BlackBerry __user1__ field.
- __nickname:__ This property is not supported, and will always be returned as `null`. 
- __phoneNumbers:__ Partially supported.  Phone numbers will be stored in BlackBerry fields __homePhone1__ and __homePhone2__ if _type_ is 'home', __workPhone1__ and __workPhone2__ if _type_ is 'work', __mobilePhone__ if _type_ is 'mobile', __faxPhone__ if _type_ is 'fax', __pagerPhone__ if _type_ is 'pager', and __otherPhone__ if _type_ is none of the above.
- __emails:__ Partially supported.  The first three email addresses will be stored in the BlackBerry __email1__, __email2__, and __email3__ fields, respectively.
- __addresses:__ Partially supported.  The first and second addresses will be stored in the BlackBerry __homeAddress__ and __workAddress__ fields, respectively.
- __ims:__ This property is not supported, and will always be returned as `null`. 
- __organizations:__ Partially supported.  The __name__ and __title__ of the first organization are stored in the BlackBerry __company__ and __title__ fields, respectively.
- __photos:__ - Partially supported.  A single thumbnail-sized photo is supported.  To set a contact's photo, pass in a either a Base64 encoded image, or a URL pointing to the image.  The image will be scaled down before saving to the BlackBerry contacts database.   The contact photo is returned as a Base64 encoded image.
- __categories:__  Partially supported.  Only 'Business' and 'Personal' categories are supported. 
- __urls:__  Partially supported. The first url is stored in BlackBerry __webpage__ field.

iOS Quirks
----------
- __displayName:__ This property is not supported by iOS and will be returned as `null` unless there is no ContactName specified.  If there is no ContactName, then composite name, __nickname__ or "" is returned for __displayName__, respectively. 
- __birthday:__ For input, this property must be provided as a JavaScript Date object. It is returned as a JavaScript Date object.
- __photos:__ Returned Photo is stored in the application's temporary directory and a File URL to photo is returned.  Contents of temporary folder is deleted when application exits. 
- __categories:__  This property is not currently supported and will always be returned as `null`.

Windows Phone 7 and 8 Quirks
-----------

- __displayName:__ When creating a contact, the value provided for the display name parameter differs from the display name retrieved when finding the contact. 
- __urls:__ When creating a contact, user inputs multiple web addresses in the url field and saves the contact. While pulling the information during the contact search url field do not show up multiple web addresses
- __phoneNumbers:__ _pref_ is not supported, _type_ is not supported in a _find_ operation, only supports one phoneNumber of each _type_
- __emails:__ _pref_ is not supported, home and personal points to same email entry, supports only one entry for each _type_
- __addresses:__ supports only _type_ of work, home/personal, _type_ home and personal points to same address entry, supports only one entry for each _type_
- __organizations:__ Multiple _organizations_ are not supported, does not support the attributes: _pref_, _type_, _department_
- __note:__ This property is not supported, and will always be returned as `null`. 
- __ims:__ This property is not supported, and will always be returned as `null`. 
- __birthdays:__ This property is not supported, and will always be returned as `null`. 
- __categories:__ This property is not supported, and will always be returned as `null`. 


Bada Quirks
-----------

- __displayName:__ This property is not supported
- __birthday:__ This property is not supported
- __photos:__ This property should be a list with one URL to a photo
- __categories:__ This property is not supported
- __ims:__ This property is not supported



ContactAddress
==============

Contains address properties for a `Contact` object.

Properties
----------
- __pref:__ Set to `true` if this `ContactAddress` contains the user's preferred value. _(boolean)_
- __type:__ A string that tells you what type of field this is (example: 'home'). _(DOMString)
- __formatted:__ The full address formatted for display. _(DOMString)_
- __streetAddress:__ The full street address. _(DOMString)_
- __locality:__ The city or locality. _(DOMString)_
- __region:__ The state or region. _(DOMString)_
- __postalCode:__ The zip code or postal code. _(DOMString)_
- __country:__ The country name. _(DOMString)_

Details
-------

The `ContactAddress` object stores the properties of a single address of a contact.  A `Contact` object can have one or more addresses in a  `ContactAddress[]` array. 

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2 & 2.0
- Windows Phone 7 and 8
- Windows 8

Quick Example
-------------

	// display the address information for all contacts
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].addresses.length; j++) {
				alert("Pref: " + contacts[i].addresses[j].pref + "\n" +
						"Type: " + contacts[i].addresses[j].type + "\n" +
						"Formatted: " + contacts[i].addresses[j].formatted + "\n" + 
						"Street Address: "  + contacts[i].addresses[j].streetAddress + "\n" + 
						"Locality: "  + contacts[i].addresses[j].locality + "\n" + 
						"Region: "  + contacts[i].addresses[j].region + "\n" + 
						"Postal Code: "  + contacts[i].addresses[j].postalCode + "\n" + 
						"Country: "  + contacts[i].addresses[j].country);
			}
		}
    };

    function onError(contactError) {
        alert('onError!');
    };

    // find all contacts
    var options = new ContactFindOptions();
	options.filter=""; 
	var filter = ["displayName","addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
		    // find all contacts
		    var options = new ContactFindOptions();
			options.filter=""; 
			var filter = ["displayName","addresses"];
		    navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			// display the address information for all contacts
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].addresses.length; j++) {
					alert("Pref: " + contacts[i].addresses[j].pref + "\n" +
							"Type: " + contacts[i].addresses[j].type + "\n" +
							"Formatted: " + contacts[i].addresses[j].formatted + "\n" + 
							"Street Address: "  + contacts[i].addresses[j].streetAddress + "\n" + 
							"Locality: "  + contacts[i].addresses[j].locality + "\n" + 
							"Region: "  + contacts[i].addresses[j].region + "\n" + 
							"Postal Code: "  + contacts[i].addresses[j].postalCode + "\n" + 
							"Country: "  + contacts[i].addresses[j].country);
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

BlackBerry WebWorks (OS 5.0 and higher) Quirks
--------------------------------------------
- __pref:__ This property is not supported on BlackBerry devices and will always return `false`.
- __type:__ Partially supported.  Only one each of "Work" and "Home" type addresses can be stored per contact. 
- __formatted:__ Partially supported.  Will return concatenation of all BlackBerry address fields.
- __streetAddress:__ Supported.  Will return concatenation of BlackBerry __address1__ and __address2__ address fields. 
- __locality:__ Supported.  Stored in BlackBerry __city__ address field.
- __region:__ Supported.  Stored in BlackBerry __stateProvince__ address field.
- __postalCode:__ Supported.  Stored in BlackBerry __zipPostal__ address field.
- __country:__ Supported.

iOS Quirks
----------
- __pref:__ This property is not supported on iOS devices and will always return `false`.
- __formatted:__ Not currently supported.

Bada Quirks
-----------
- __formatted:__ This property is not supported
- __type:__ Has to be one of the following: WORK, HOME



ContactField
============

Supports generic fields in a `Contact` object.  Some properties that are stored as `ContactField` objects include email addresses, phone numbers, and urls.

Properties
----------

- __type:__ A string that tells you what type of field this is (example: 'home'). _(DOMString)_
- __value:__ The value of the field (such as a phone number or email address). _(DOMString)_
- __pref:__ Set to `true` if this `ContactField` contains the user's preferred value. _(boolean)_

Details
-------

The `ContactField` object is a reusable component that is used to support contact fields in a generic fashion.  Each `ContactField` object contains a value property, a type property, and a pref property.  A `Contact` object stores several properties in `ContactField[]` arrays, such as phone numbers and email addresses.

In most instances, there are no pre-determined values for the __type__ attribute of a `ContactField` object.  For example, a phone number can have __type__ values of 'home', 'work', 'mobile', 'iPhone', or any other value that is supported by the contact database on a particular device platform.  However, in the case of the `Contact` __photos__ field, Cordova makes use of the __type__ field to indicate the format of the returned image.  Cordova will return __type: 'url'__ when the __value__ attribute contains a URL to the photo image, or __type: 'base64'__ when the returned __value__ attribute contains a Base64 encoded image string.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2 & 2.0
- Windows Phone 7 and 8
- Windows 8

Quick Example
-------------

	// create a new contact
	var contact = navigator.contacts.create();
	
	// store contact phone numbers in ContactField[]
	var phoneNumbers = [];
	phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
	phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
	phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
	contact.phoneNumbers = phoneNumbers;
	
	// save the contact
	contact.save();

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
			// create a new contact
			var contact = navigator.contacts.create();

			// store contact phone numbers in ContactField[]
			var phoneNumbers = [];
			phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
			phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
			phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
			contact.phoneNumbers = phoneNumbers;

			// save the contact
			contact.save();

			// search contacts, returning display name and phone numbers
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","phoneNumbers"];
			navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				// display phone numbers
				for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
					alert("Type: " + contacts[i].phoneNumbers[j].type + "\n" + 
							"Value: "  + contacts[i].phoneNumbers[j].value + "\n" + 
							"Preferred: "  + contacts[i].phoneNumbers[j].pref);
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

Android Quirks
--------------

- __pref:__ This property is not support by Android devices, and will always return `false`.

BlackBerry WebWorks (OS 5.0 and higher) Quirks
--------------------------------------------

- __type:__ Partially supported.  Used for phone numbers.
- __value:__ Supported.
- __pref:__ This property is not supported, and will always return `false`.

iOS Quirks
-----------
- __pref:__ This property is not supported on iOS devices and will always return `false`.

Bada Quirks
-----------
- __type:__ Property has to be one of the following for Email or Address fields: "WORK", "HOME". Property has to be one of the following for Phone fields: "WORK", "HOME", "VOICE", "FAX", "MSG", "CELL", "PAGER","BBS", "MODEM", "CAR", "ISDN","VIDEO", "PCS"



ContactFindOptions
==================

Contains properties that can be used to filter the results of a `contacts.find` operation.

Properties
----------

- __filter:__ The search string used to find contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find operation should return multiple contacts. _(Boolean)_ (Default: false)


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2 & 2.0
- Windows Phone 7 and 8
- Windows 8

Quick Example
-------------

	// success callback
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert(contacts[i].displayName);
		}
    };

	// error callback
    function onError(contactError) {
        alert('onError!');
    };

	// specify contact search criteria
    var options = new ContactFindOptions();
	options.filter="";			// empty search string returns all contacts
	options.multiple=true;		// return multiple results
	filter = ["displayName"];	// return contact.displayName field
	
	// find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
			// specify contact search criteria
		    var options = new ContactFindOptions();
			options.filter="";			// empty search string returns all contacts
			options.multiple=true;		// return multiple results
			filter = ["displayName"];	// return contact.displayName field

			// find contacts
		    navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert(contacts[i].displayName);
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

Bada Quirks
-----------
__filter:__ Property can only apply to the following: "firstName", "lastName", "nickname", "phoneNumber", "email", "address"



ContactName
===========

Contains name properties of a `Contact` object.

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

The `ContactName` object stores name properties of a contact.

Supported Platforms
-------------------

- Android 2.X
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2 & 2.0
- Windows Phone 7 and 8
- Windows 8

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

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","name"];
    navigator.contacts.find(filter, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","name"];
			navigator.contacts.find(filter, onSuccess, onError, options);
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
						"Prefix: "  + contacts[i].name.honorificPrefix);
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

Android Quirks
------------
- __formatted:__ Partially supported.  Will return the concatenation of honorificPrefix, givenName, middleName, familyName and honorificSuffix but will not store.

BlackBerry WebWorks (OS 5.0 and higher) Quirks
---------------------------------------------

- __formatted:__ Partially supported.  Will return concatenation of BlackBerry __firstName__ and __lastName__ fields.
- __familyName:__ Supported.  Stored in BlackBerry __lastName__ field.
- __givenName:__ Supported.  Stored in BlackBerry __firstName__ field.
- __middleName:__ This property is not supported, and will always return `null`.
- __honorificPrefix:__ This property is not supported, and will always return `null`.
- __honorificSuffix:__ This property is not supported, and will always return `null`.

iOS Quirks
------------
- __formatted:__ Partially supported.  Will return iOS Composite Name but will not store.

Bada Quirks
-----------
- __formatted:__ Property not supported
- __middleName:__ Property not supported
_ __honorificPrefix:__ Property not supported
- __honorificSuffix:__ Property not supported



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
- Bada 1.2
- Windows Phone 7 and 8
- Windows 8

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

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
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

BlackBerry WebWorks (OS 5.0 and higher) Quirks
--------------------------------------------
- __pref:__ This property is not supported by BlackBerry devices and will always return `false`.
- __type:__ This property is not supported by BlackBerry devices and will always return `null`.
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

Bada 2.0 Quirks
---------------
- ContactOrganization not supported



ContactError
========

A `ContactError` object is returned to the `contactError` callback when an error occurs.

Properties
----------

- __code:__ One of the predefined error codes listed below.

Constants
---------

- `ContactError.UNKNOWN_ERROR`
- `ContactError.INVALID_ARGUMENT_ERROR`
- `ContactError.TIMEOUT_ERROR`
- `ContactError.PENDING_OPERATION_ERROR`
- `ContactError.IO_ERROR`
- `ContactError.NOT_SUPPORTED_ERROR`
- `ContactError.PERMISSION_DENIED_ERROR`

Description
-----------

The `ContactError` object is returned to the user through the `contactError` callback function when an error occurs.




contactSuccess
==============

Success callback function that provides the `Contact` array resulting from a `contacts.find` operation.

    function(contacts) {
        // Do something
    }

Parameters
----------

- __contacts:__ The contact array resulting from a find operation. (`Contact`)

Example
-------

    function contactSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			console.log("Display Name = " + contacts[i].displayName;
    }


contactError
============

Error callback function for contact functions.

    function(error) {
        // Handle the error
    }


contactFields
=============

Required parameter of the `contacts.find` method.  Use this parameter to specify which fields should be included in the `Contact` objects resulting from a find operation.

    ["name", "phoneNumbers", "emails"]



contactFindOptions
==================

Optional parameter of the `contacts.find` method.  Use this parameter to filter the contacts returned from the contacts database.

    { 
		filter: "",
		multiple: true,
	};

Options
-------

- __filter:__ The search string used to filter contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find operation should return multiple contacts. _(Boolean)_ (Default: false)


