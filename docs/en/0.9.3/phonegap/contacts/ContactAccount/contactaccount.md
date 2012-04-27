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

ContactAccount
==============

Contains user account properties of a `Contact` object.

Properties
----------

- __domain:__ The top-most authoritative domain for this account. _(DOMString)_
- __username:__ An alphanumeric user name. _(DOMString)_
- __userid:__ A user ID number, usually chosen automatically, and usually numeric but sometimes alphanumeric. _(DOMString)_

Details
-------

The `ContactAccount` object stores user account properties of a contact.  A `Contact` object stores one or more accounts in a `ContactAddress[]` array.

Supported Platforms
-------------------

- None

Quick Example
-------------

    function onSuccess(contacts) {			
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].accounts.length; j++) {
				console.log("User Name = " + contacts[i].accounts[j].username;
			}
		}
	};

    function onError() {
        alert('onError!');
    };

    // find all contacts
    var options = new ContactFindOptions();
	options.filter=""; 
	var filter = ["displayName","accounts"];
    navigator.service.contacts.find(filter, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-0.9.3.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
		    // find all contacts
		    var options = new ContactFindOptions();
			options.filter=""; 
			var filter = ["displayName","accounts"];
		    navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].accounts.length; j++) {
					console.log("User Name = " + contacts[i].accounts[j].username;
				}
			}
        }
    
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
