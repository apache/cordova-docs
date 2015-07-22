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

# contacts.create

Returns a new [Contact](Contact/contact.html) object.

    var contact = navigator.contacts.create(properties);

## Description

The `contacts.create` method is synchronous, and returns a new `[Contact](Contact/contact.html)` object.

This method does not retain the [Contact](Contact/contact.html) object in the device contacts
database, for which you need to invoke the `[Contact](Contact/contact.html).save` method.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8

## Quick Example

    var myContact = navigator.contacts.create({"displayName": "Test User"});

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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
