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

contacts.create
===============

Returns a new Contact object.

    var contact = navigator.service.contacts.create(properties);

Description
-----------

contacts.create is a synchronous function that returns a new `Contact` object.

This method does not persist the Contact object to the device contacts database.  To persist the Contact object to the device, invoke the `Contact.save` method.

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 5.0 and higher)

Quick Example
-------------

    var myContact = navigator.service.contacts.create({"displayName": "Test User"});

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
			var myContact = navigator.service.contacts.create({"displayName": "Test User"});
			myContact.gender = "male";
			console.log("The contact, " + myContact.displayName + ", is of the " + myContact.gender + " gender");
        }
    

        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>
