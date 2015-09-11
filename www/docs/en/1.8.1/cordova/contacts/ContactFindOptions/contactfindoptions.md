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

<a href="../Contact/contact.html">Contact</a>FindOptions
==================

Contains properties that can be used to filter the results of a `<a href="../contacts.find.html">contacts.find</a>` operation.

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

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

	// success callback
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert(contacts[i].displayName);
		}
    };

	// error callback
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

	// specify contact search criteria
    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
	options.filter="";			// empty search string returns all contacts
	options.multiple=true;		// return multiple results
	filter = ["displayName"];	// return contact.displayName field
	
	// find contacts
    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.1.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
			// specify contact search criteria
		    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
			options.filter="";			// empty search string returns all contacts
			options.multiple=true;		// return multiple results
			filter = ["displayName"];	// return contact.displayName field

			// find contacts
		    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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

Bada Quirks
-----------
__filter:__ Property can only apply to the following: "firstName", "lastName", "nickname", "phoneNumber", "email", "address"
