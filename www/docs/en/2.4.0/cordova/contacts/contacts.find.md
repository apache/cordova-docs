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

contacts.find
=============

Queries the device contacts database and returns one or more `<a href="Contact/contact.html">Contact</a>` objects, each containing the fields specified.

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);

Description
-----------

contacts.find is an asynchronous function that queries the device contacts database and returns an array of `<a href="Contact/contact.html">Contact</a>` objects.  The resulting objects are passed to the `<a href="parameters/contactSuccess.html">contactSuccess</a>` callback function specified by the __<a href="parameters/contactSuccess.html">contactSuccess</a>__ parameter.  

Users must specify the contact fields to be used as a search qualifier in the __<a href="parameters/contactFields.html">contactFields</a>__ parameter.  Only the fields specified in the __<a href="parameters/contactFields.html">contactFields</a>__ parameter will be returned as properties of the `<a href="Contact/contact.html">Contact</a>` objects that are passed to the __<a href="parameters/contactSuccess.html">contactSuccess</a>__ callback function.  A zero-length __<a href="parameters/contactFields.html">contactFields</a>__ parameter will result in an array of `<a href="Contact/contact.html">Contact</a>` objects with only the `id` property populated. A __<a href="parameters/contactFields.html">contactFields</a>__ value of ["*"] will return all contact fields. 

The __<a href="parameters/contactFindOptions.html">contactFindOptions</a>.filter__ string can be used as a search filter when querying the contacts database.  If provided, a case-insensitive, partial value match is applied to each field specified in the __<a href="parameters/contactFields.html">contactFields</a>__ parameter.  If a match is found in a comparison with _any_ of the specified fields, the contact is returned.

Parameters
----------

- __<a href="parameters/contactFields.html">contactFields</a>:__ <a href="Contact/contact.html">Contact</a> fields to be used as search qualifier. Only these fields will have values in the resulting `<a href="Contact/contact.html">Contact</a>` objects. _(DOMString[])_ [Required]
- __<a href="parameters/contactSuccess.html">contactSuccess</a>:__ Success callback function that is invoked with the contacts returned from the contacts database. [Required]
- __<a href="parameters/contactError.html">contactError</a>:__ Error callback function. Invoked when error occurs. [Optional]
- __<a href="parameters/contactFindOptions.html">contactFindOptions</a>:__ Search options to filter contacts. [Optional]

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 1.2 & 2.0
- Windows 8

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };

    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

    // find all contacts with 'Bob' in any name field
    var options = new <a href="Contact/contact.html">Contact</a>FindOptions();
	options.filter="Bob";
	options.multiple=true; 
	var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="Contact/contact.html">Contact</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.4.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
		    // find all contacts with 'Bob' in any name field
		    var options = new <a href="Contact/contact.html">Contact</a>FindOptions();
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
        function onError(<a href="parameters/contactError.html">contactError</a>) {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find <a href="Contact/contact.html">Contact</a>s</p>
      </body>
    </html>
    

