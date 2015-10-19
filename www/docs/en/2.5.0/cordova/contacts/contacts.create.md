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

title: contacts.create
---

contacts.create
===============

Returns a new [Contact](Contact/contact.html) object.

    var contact = navigator.contacts.create(properties);

Description
-----------

contacts.create is a synchronous function that returns a new `[Contact](Contact/contact.html)` object.

This method does not persist the [Contact](Contact/contact.html) object to the device contacts database.  To persist the [Contact](Contact/contact.html) object to the device, invoke the `[Contact](Contact/contact.html).save` method.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Bada 1.2 & 2.0

Quick [Example](../storage/storage.opendatabase.html)
-------------

    var myContact = navigator.contacts.create({"displayName": "Test User"});

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
			var myContact = navigator.contacts.create({"displayName": "Test User"});
			myContact.note = "This contact has a note.";
			console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>
