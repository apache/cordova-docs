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

# <a href="../Contact/contact.html">Contact</a>Organization

Contains a `<a href="../Contact/contact.html">Contact</a>` object's organization properties.

## Properties

- __pref__: Set to `true` if this `<a href="../Contact/contact.html">Contact</a>Organization` contains the user's preferred value. _(boolean)_

- __type__: A string that indicates what type of field this is, _home_ for example. _(DOMString)

- __name__: The name of the organization. _(DOMString)_

- __department__: The department the contract works for. _(DOMString)_

- __title__: The contact's title at the organization. _(DOMString)_

## Details

The `<a href="../Contact/contact.html">Contact</a>Organization` object stores a contact's organization
properties.  A `<a href="../Contact/contact.html">Contact</a>` object stores one or more
`<a href="../Contact/contact.html">Contact</a>Organization` objects in an array.

## Supported Platforms

- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../../splashscreen/<a href="../../splashscreen/splashscreen.show.html">splashscreen.show</a>.html">Example</a>

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };

    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };

    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
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
            filter = ["displayName","organizations"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
        }

        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
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

- __pref__: Not supported by Android 2.X devices, returning `false`.

## BlackBerry WebWorks 5.0+ Quirks

- __pref__: Not supported by BlackBerry devices, returning `false`.

- __type__: Not supported by BlackBerry devices, returning `null`.

- __name__: Partially supported.  The first organization name is stored in the BlackBerry __company__ field.

- __department__: Not supported, returning `null`.

- __title__: Partially supported.  The first organization title is stored in the BlackBerry __jobTitle__ field.

## iOS Quirks

- __pref__: Not supported on iOS devices, returning `false`.

- __type__: Not supported on iOS devices, returning `null`.

- __name__: Partially supported.  The first organization name is stored in the iOS __kABPersonOrganizationProperty__ field.

- __department__: Partially supported.  The first department name is stored in the iOS __kABPersonDepartmentProperty__ field.

- __title__: Partially supported.  The first title is stored in the iOS __kABPersonJobTitleProperty__ field.

