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

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
