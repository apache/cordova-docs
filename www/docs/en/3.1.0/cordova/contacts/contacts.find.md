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

title: contacts.find
---

# contacts.find

Queries the device contacts database and returns one or more `[Contact](Contact/contact.html)`
objects, each containing the fields specified.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);

## Description

The `contacts.find` method executes asynchronously, querying the
device contacts database and returning an array of `[Contact](Contact/contact.html)` objects.
The resulting objects are passed to the `[contactSuccess](parameters/contactSuccess.html)` callback
function specified by the __contactSuccess__ parameter.

The __contactFields__ parameter specifies the fields to be used as a
search qualifier, and only those results are passed to the
__contactSuccess__ callback function.  A zero-length __contactFields__
parameter is invalid and results in
`[ContactError](ContactError/contactError.html).INVALID_ARGUMENT_ERROR`. A __contactFields__ value of
`"*"` returns all contact fields.

The __contactFindOptions.filter__ string can be used as a search
filter when querying the contacts database.  If provided, a
case-insensitive, partial value match is applied to each field
specified in the __contactFields__ parameter.  If there's a match for
_any_ of the specified fields, the contact is returned.

## Parameters

- __contactFields__: [Contact](Contact/contact.html) fields to use as a search qualifier. The resulting `[Contact](Contact/contact.html)` object only features values for these fields. _(DOMString[])_ [Required]

- __contactSuccess__: Success callback function invoked with the contacts returned from the database. [Required]

- __contactError__: Error callback function, invoked when an error occurs. [Optional]

- __contactFindOptions__: Search options to filter contacts. [Optional]

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick Example

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };

    function onError(contactError) {
        alert('onError!');
    };

    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

## Full Example

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">

                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);

                // device APIs are available

                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }

                // onSuccess: Get a snapshot of the current contacts

                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }

                // onError: Failed to get the contacts

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
