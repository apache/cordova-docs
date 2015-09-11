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

contacts.create
===============

Returns a new <a href="Contact/contact.html">Contact</a> object.

    var contact = navigator.contacts.create(properties);

Description
-----------

contacts.create is a synchronous function that returns a new `<a href="Contact/contact.html">Contact</a>` object.

This method does not persist the <a href="Contact/contact.html">Contact</a> object to the device contacts database.  To persist the <a href="Contact/contact.html">Contact</a> object to the device, invoke the `<a href="Contact/contact.html">Contact</a>.save` method.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Bada 1.2 & 2.0

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    var my<a href="Contact/contact.html">Contact</a> = navigator.contacts.create({"displayName": "Test User"});

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="Contact/contact.html">Contact</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
			var my<a href="Contact/contact.html">Contact</a> = navigator.contacts.create({"displayName": "Test User"});
			my<a href="Contact/contact.html">Contact</a>.note = "This contact has a note.";
			console.log("The contact, " + my<a href="Contact/contact.html">Contact</a>.displayName + ", note: " + my<a href="Contact/contact.html">Contact</a>.note);
        }
    

        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>Create <a href="Contact/contact.html">Contact</a></p>
      </body>
    </html>
