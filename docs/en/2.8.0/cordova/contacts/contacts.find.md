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

contacts.find
=============

Queries the device contacts database and returns one or more `Contact` objects, each containing the fields specified.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);

Description
-----------

contacts.find is an asynchronous function that queries the device contacts database and returns an array of `Contact` objects.  The resulting objects are passed to the `contactSuccess` callback function specified by the __contactSuccess__ parameter.  

Users must specify the contact fields to be used as a search qualifier in the __contactFields__ parameter.  Only the fields specified in the __contactFields__ parameter will be returned as properties of the `Contact` objects that are passed to the __contactSuccess__ callback function.  A zero-length __contactFields__ parameter is invalid and will result in a `ContactError.INVALID_ARGUMENT_ERROR` . A __contactFields__ value of ["*"] will return all contact fields. 

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

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
    

