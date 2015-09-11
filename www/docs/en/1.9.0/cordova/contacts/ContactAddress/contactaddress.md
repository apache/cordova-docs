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

<a href="../Contact/contact.html">Contact</a>Address
==============

Contains address properties for a `<a href="../Contact/contact.html">Contact</a>` object.

Properties
----------
- __pref:__ Set to `true` if this `<a href="../Contact/contact.html">Contact</a>Address` contains the user's preferred value. _(boolean)_
- __type:__ A string that tells you what type of field this is (example: 'home'). _(DOMString)
- __formatted:__ The full address formatted for display. _(DOMString)_
- __streetAddress:__ The full street address. _(DOMString)_
- __locality:__ The city or locality. _(DOMString)_
- __region:__ The state or region. _(DOMString)_
- __postalCode:__ The zip code or postal code. _(DOMString)_
- __country:__ The country name. _(DOMString)_

Details
-------

The `<a href="../Contact/contact.html">Contact</a>Address` object stores the properties of a single address of a contact.  A `<a href="../Contact/contact.html">Contact</a>` object can have one or more addresses in a  `<a href="../Contact/contact.html">Contact</a>Address[]` array. 

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2 & 2.0

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
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

    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

    // find all contacts
    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
	options.filter=""; 
	var filter = ["displayName","addresses"];
    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> <a href="../../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
		    // find all contacts
		    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
			options.filter=""; 
			var filter = ["displayName","addresses"];
		    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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

Android 2.X Quirks
------------------

- __pref:__ This property is not supported by Android 2.X devices and will always return `false`.

Android 1.X Quirks
------------------

- __pref:__ This property is not supported by Android 1.X devices and will always return `false`.
- __type:__ This property is not supported by Android 1.X devices and will always return `null`.
- __streetAddress:__ This property is not support by Android 1.X devices, and will always return `null`.
- __locality:__ This property is not support by Android 1.X devices, and will always return `null`.
- __region:__ This property is not support by Android 1.X devices, and will always return `null`.
- __postalCode:__ This property is not support by Android 1.X devices, and will always return `null`.
- __country:__ This property is not support by Android 1.X devices, and will always return `null`.

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
