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

<a href="../Contact/contact.html">Contact</a>Name
===========

Contains name properties of a `<a href="../Contact/contact.html">Contact</a>` object.

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

The `<a href="../Contact/contact.html">Contact</a>Name` object stores name properties of a contact.

Supported Platforms
-------------------

- Android 2.X
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2 & 2.0

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
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

    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
	options.filter="";
	filter = ["displayName","name"];
    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
			var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
			options.filter="";
			filter = ["displayName","name"];
			navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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
