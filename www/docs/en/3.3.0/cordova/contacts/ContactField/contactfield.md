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

# <a href="../Contact/contact.html">Contact</a>Field

Supports generic fields in a `<a href="../Contact/contact.html">Contact</a>` object.  Some properties stored
as `<a href="../Contact/contact.html">Contact</a>Field` objects include email addresses, phone numbers, and
URLs.

## Properties

- __type__: A string that indicates what type of field this is, _home_ for example. _(DOMString)_

- __value__: The value of the field, such as a phone number or email address. _(DOMString)_

- __pref__: Set to `true` if this `<a href="../Contact/contact.html">Contact</a>Field` contains the user's preferred value. _(boolean)_

## Details

The `<a href="../Contact/contact.html">Contact</a>Field` object is a reusable component that represents
contact fields generically.  Each `<a href="../Contact/contact.html">Contact</a>Field` object contains a
`value`, `type`, and `pref` property.  A `<a href="../Contact/contact.html">Contact</a>` object stores
several properties in `<a href="../Contact/contact.html">Contact</a>Field[]` arrays, such as phone numbers
and email addresses.

In most instances, there are no pre-determined values for a
`<a href="../Contact/contact.html">Contact</a>Field` object's __type__ attribute.  For example, a phone
number can specify __type__ values of _home_, _work_, _mobile_,
_iPhone_, or any other value that is supported by a particular device
platform's contact database.  However, for the `<a href="../Contact/contact.html">Contact</a>` __photos__
field, the __type__ field indicates the format of the returned image:
__url__ when the __value__ attribute contains a URL to the photo
image, or _base64_ when the __value__ contains a base64-encoded image
string.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

        // create a new contact
        var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();

        // store contact phone numbers in <a href="../Contact/contact.html">Contact</a>Field[]
        var phoneNumbers = [];
        phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
        phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;

        // save the contact
        contact.save();

## Full <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //

        function on<a href="../../device/device.html">Device</a>Ready() {
            // create a new contact
            var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();

            // store contact phone numbers in <a href="../Contact/contact.html">Contact</a>Field[]
            var phoneNumbers = [];
            phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
            phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;

            // save the contact
            contact.save();

            // search contacts, returning display name and phone numbers
            var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
        }

        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
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
        <h1><a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a></h1>
        <p>Find <a href="../Contact/contact.html">Contact</a>s</p>
      </body>
    </html>

## Android Quirks

- __pref__: Not supported, returning `false`.

## BlackBerry 10 Quirks

- __type__: Partially supported.  Used for phone numbers.

- __value__: Supported.

- __pref__: Not supported, returning `false`.

## iOS Quirks

- __pref__: Not supported, returning `false`.

