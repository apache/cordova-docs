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

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
