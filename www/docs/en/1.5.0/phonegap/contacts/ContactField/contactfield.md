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

<a href="../Contact/contact.html">Contact</a>Field
============

Supports generic fields in a `<a href="../Contact/contact.html">Contact</a>` object.  Some properties that are stored as `<a href="../Contact/contact.html">Contact</a>Field` objects include email addresses, phone numbers, and urls.

Properties
----------

- __type:__ A string that tells you what type of field this is (example: 'home'). _(DOMString)_
- __value:__ The value of the field (such as a phone number or email address). _(DOMString)_
- __pref:__ Set to `true` if this `<a href="../Contact/contact.html">Contact</a>Field` contains the user's preferred value. _(boolean)_

Details
-------

The `<a href="../Contact/contact.html">Contact</a>Field` object is a reusable component that is used to support contact fields in a generic fashion.  Each `<a href="../Contact/contact.html">Contact</a>Field` object contains a value property, a type property, and a pref property.  A `<a href="../Contact/contact.html">Contact</a>` object stores several properties in `<a href="../Contact/contact.html">Contact</a>Field[]` arrays, such as phone numbers and email addresses.

In most instances, there are no pre-determined values for the __type__ attribute of a `<a href="../Contact/contact.html">Contact</a>Field` object.  For example, a phone number can have __type__ values of 'home', 'work', 'mobile', 'iPhone', or any other value that is supported by the contact database on a particular device platform.  However, in the case of the `<a href="../Contact/contact.html">Contact</a>` __photos__ field, PhoneGap makes use of the __type__ field to indicate the format of the returned image.  PhoneGap will return __type: 'url'__ when the __value__ attribute contains a URL to the photo image, or __type: 'base64'__ when the returned __value__ attribute contains a Base64 encoded image string.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

	// create a new contact
	var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();
	
	// store contact phone numbers in <a href="../Contact/contact.html">Contact</a>Field[]
	var phoneNumbers = [];
	phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
	phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // preferred number
	phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
	contact.phoneNumbers = phoneNumbers;
	
	// save the contact
	contact.save();

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // PhoneGap is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
			// create a new contact
			var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();

			// store contact phone numbers in <a href="../Contact/contact.html">Contact</a>Field[]
			var phoneNumbers = [];
			phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
			phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // preferred number
			phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
			contact.phoneNumbers = phoneNumbers;

			// save the contact
			contact.save();

			// search contacts, returning display <a href="../../storage/parameters/name.html">name</a> and phone numbers
			var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
			options.filter="";
			filter = ["displayName","phoneNumbers"];
			navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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
        function onError(<a href="../parameters/contactError.html">contactError</a>) {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find <a href="../Contact/contact.html">Contact</a>s</p>
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
