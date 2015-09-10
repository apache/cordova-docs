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

# <a href="../Contact/contact.html">Contact</a>Name

Contains different kinds of information about a `<a href="../Contact/contact.html">Contact</a>` object's name.

## Properties

- __formatted__: The complete name of the contact. _(DOMString)_

- __familyName__: The contact's family name. _(DOMString)_

- __givenName__: The contact's given name. _(DOMString)_

- __middleName__: The contact's middle name. _(DOMString)_

- __honorificPrefix__: The contact's prefix (example _Mr._ or _Dr._) _(DOMString)_

- __honorificSuffix__: The contact's suffix (example _Esq._). _(DOMString)_

## Details

The `<a href="../Contact/contact.html">Contact</a>Name` object stores a contact's name properties.

## Supported Platforms

- Amazon Fire OS
- Android 2.X
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };

    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);

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
            var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
        }

        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
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

- __formatted__: Partially supported, and read-only.  Returns a concatenation of `honorificPrefix`, `givenName`, `middleName`, `familyName`, and `honorificSuffix`.

## BlackBerry WebWorks 5.0+ Quirks

- __formatted__: Partially supported.  Returns a concatenation of BlackBerry __firstName__ and __lastName__ fields.

- __familyName__: Supported.  Stored in BlackBerry __lastName__ field.

- __givenName__: Supported.  Stored in BlackBerry __firstName__ field.

- __middleName__: Not supported, returning `null`.

- __honorificPrefix__: Not supported, returning `null`.

- __honorificSuffix__: Not supported, returning `null`.

## iOS Quirks

- __formatted__: Partially supported.  Returns iOS Composite Name, but is read-only.

