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

# <a href="../Contact/contact.html">Contact</a>Address

Contains address properties for a `<a href="../Contact/contact.html">Contact</a>` object.

## Properties

- __pref__: Set to `true` if this `<a href="../Contact/contact.html">Contact</a>Address` contains the user's preferred value. _(boolean)_

- __type__: A string indicating what type of field this is, _home_ for example. _(DOMString)_

- __formatted__: The full address formatted for display. _(DOMString)_

- __streetAddress__: The full street address. _(DOMString)_

- __locality__: The city or locality. _(DOMString)_

- __region__: The state or region. _(DOMString)_

- __postalCode__: The zip code or postal code. _(DOMString)_

- __country__: The country name. _(DOMString)_

## Details

The `<a href="../Contact/contact.html">Contact</a>Address` object stores the properties of a single address
of a contact.  A `<a href="../Contact/contact.html">Contact</a>` object may include more than one address in
a `<a href="../Contact/contact.html">Contact</a>Address[]` array.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    // display the address information for all contacts

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };

    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

    // find all contacts
    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
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
            // find all contacts
            var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
        }

        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
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

## Android 2.X Quirks

- __pref__: Not supported, returning `false` on Android 2.X devices.

## BlackBerry WebWorks 5.0+ Quirks

- __pref__: Not supported on BlackBerry devices, returning `false`.

- __type__: Partially supported.  Only one each of _Work_ and _Home_ type addresses can be stored per contact.

- __formatted__: Partially supported.  Returns a concatenation of all BlackBerry address fields.

- __streetAddress__: Supported.  Returns a concatenation of BlackBerry __address1__ and __address2__ address fields.

- __locality__: Supported.  Stored in BlackBerry __city__ address field.

- __region__: Supported.  Stored in BlackBerry __stateProvince__ address field.

- __postalCode__: Supported.  Stored in BlackBerry __zipPostal__ address field.

- __country__: Supported.

## iOS Quirks

- __pref__: Not supported on iOS devices, returning `false`.

- __formatted__: Currently not supported.

