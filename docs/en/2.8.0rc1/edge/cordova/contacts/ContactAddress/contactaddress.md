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

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
- __pref:__ This property is not supported on Blackberry devices and will always return `false`.
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
