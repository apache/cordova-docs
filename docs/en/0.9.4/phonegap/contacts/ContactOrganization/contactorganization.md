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

ContactOrganization
===================

Contains organization properties of a `Contact` object.

Properties
----------

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

Quick Example
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].organizations.length; j++) {
				alert("Name: " + contacts[i].organizations[j].name + "\n" + 
						"Department: "  + contacts[i].organizations[j].department + "\n" + 
						"Title: "  + contacts[i].organizations[j].title);
			}
		}
    };

    function onError() {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","organizations"];
    navigator.service.contacts.find(filter, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-0.9.4.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","organizations"];
			navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].organizations.length; j++) {
					alert("Name: " + contacts[i].organizations[j].name + "\n" + 
							"Department: "  + contacts[i].organizations[j].department + "\n" + 
							"Title: "  + contacts[i].organizations[j].title);
				}
			}
		};
    
        // onError: Failed to get the contacts
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
	
Android 1.X Quirks
------------------

- __title:__ This property is not support by Android 1.X devices, and will always be returned as `null`. 

BlackBerry WebWorks (OS 5.0 and higher) Quirks
--------------------------------------------

- __name:__ Partially supported.  The first organization name will be stored in the BlackBerry __company__ field.
- __department:__ This property is not supported, and will always be returned as `null`.
- __title:__ Partially supported.  The first organization title will be stored in the BlackBerry __jobTitle__ field.

iOS Quirks
-----------
- __name:__ Partially supported.  The first organization name will be stored in the iOS __kABPersonOrganizationProperty__ field.
- __department__: Partially supported.  The first department name will be stored in the iOS __kABPersonDepartmentProperty__ field.
- __title__: Partially supported.  The first title will be stored in the iOS __kABPersonJobTitleProperty__ field.


