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

# contacts.find

Queries the device contacts database and returns one or more `<a href="Contact/contact.html">Contact</a>`
objects, each containing the fields specified.

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);

## Description

The `contacts.find` method executes asynchronously, querying the
device contacts database and returning an array of `<a href="Contact/contact.html">Contact</a>` objects.
The resulting objects are passed to the `<a href="parameters/contactSuccess.html">contactSuccess</a>` callback
function specified by the __<a href="parameters/contactSuccess.html">contactSuccess</a>__ parameter.

The __<a href="parameters/contactFields.html">contactFields</a>__ parameter specifies the fields to be used as a
search qualifier, and only those results are passed to the
__<a href="parameters/contactSuccess.html">contactSuccess</a>__ callback function.  A zero-length __<a href="parameters/contactFields.html">contactFields</a>__
parameter is invalid and results in
`<a href="Contact/contact.html">Contact</a>Error.INVALID_ARGUMENT_ERROR`. A __<a href="parameters/contactFields.html">contactFields</a>__ value of
`"*"` returns all contact fields.

The __<a href="parameters/contactFindOptions.html">contactFindOptions</a>.filter__ string can be used as a search
filter when querying the contacts database.  If provided, a
case-insensitive, partial value match is applied to each field
specified in the __<a href="parameters/contactFields.html">contactFields</a>__ parameter.  If there's a match for
_any_ of the specified fields, the contact is returned.

## Parameters

- __<a href="parameters/contactFields.html">contactFields</a>__: <a href="Contact/contact.html">Contact</a> fields to use as a search qualifier. The resulting `<a href="Contact/contact.html">Contact</a>` object only features values for these fields. _(DOMString[])_ [Required]

- __<a href="parameters/contactSuccess.html">contactSuccess</a>__: Success callback function invoked with the contacts returned from the database. [Required]

- __<a href="parameters/contactError.html">contactError</a>__: Error callback function, invoked when an error occurs. [Optional]

- __<a href="parameters/contactFindOptions.html">contactFindOptions</a>__: Search options to filter contacts. [Optional]

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../storage/storage.opendatabase.html">Example</a>

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };

    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

    // find all contacts with 'Bob' in any name field
    var options      = new <a href="Contact/contact.html">Contact</a>FindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

## Full <a href="../storage/storage.opendatabase.html">Example</a>

    <!DOCTYPE html>
    <html>
        <head>
            <title><a href="Contact/contact.html">Contact</a> <a href="../storage/storage.opendatabase.html">Example</a></title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">

                // Wait for device API libraries to load
                document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

                // device APIs are available

                function on<a href="../device/device.html">Device</a>Ready() {
                    // find all contacts with 'Bob' in any name field
                    var options = new <a href="Contact/contact.html">Contact</a>FindOptions();
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

                function onError(<a href="parameters/contactError.html">contactError</a>) {
                    alert('onError!');
                }
            </script>
        </head>

        <body>
            <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
            <p>Find <a href="Contact/contact.html">Contact</a>s</p>
        </body>
    </html>
