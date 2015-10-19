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

title: Contact
---

Contact
=======

Contains properties that describe a contact, such as a user's personal or business contact.

Properties
----------

- __id__: A globally unique identifier. _(DOMString)_

- __displayName__: The name of this Contact, suitable for display to end-users. _(DOMString)_

- __name__: An object containing all components of a persons name. _(ContactName)_

- __nickname__: A casual name by which to address the contact. _(DOMString)_

- __phoneNumbers__: An array of all the contact's phone numbers. _(ContactField[])_

- __emails__: An array of all the contact's email addresses. _(ContactField[])_

- __addresses__: An array of all the contact's addresses. _(ContactAddress[])_

- __ims__: An array of all the contact's IM addresses. _(ContactField[])_

- __organizations__: An array of all the contact's organizations. _(ContactOrganization[])_

- __birthday__: The birthday of the contact. _(Date)_

- __note__: A note about the contact. _(DOMString)_

- __photos__: An array of the contact's photos. _(ContactField[])_

- __categories__:  An array of all the user-defined categories associated with the contact. _(ContactField[])_

- __urls__:  An array of web pages associated with the contact. _(ContactField[])_

Methods
-------

- __clone__: Returns a new `Contact` object that is a deep copy of the calling object, with the `id` property set to `null`.

- __remove__: Removes the contact from the device contacts database, otherwise executes an error callback with a `[ContactError](../ContactError/contactError.html)` object.

- __save__: Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same __id__ already exists.

Details
-------

The `Contact` object represents a user's contact.  [Contacts](../contacts.html) can be
created, stored, or removed from the device contacts database.
[Contacts](../contacts.html) can also be retrieved (individually or in bulk) from the
database by invoking the `[contacts.find](../contacts.find.html)` method.

__NOTE:__ Not all of the contact fields listed above are supported on
every device platform.  Please check each platform's _Quirks_ section
for details.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Windows 8

Save Quick [Example](../../storage/storage.opendatabase.html)
------------------

    function onSuccess(contact) {
        alert("Save Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices

    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;

    // save to device
    contact.save(onSuccess,onError);

Clone Quick [Example](../../storage/storage.opendatabase.html)
-------------------

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);

Remove Quick [Example](../../storage/storage.opendatabase.html)
--------------------

    function onSuccess() {
        alert("Removal Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

        // remove the contact from the device
        contact.remove(onSuccess,onError);

Full [Example](../../storage/storage.opendatabase.html)
------------

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
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;

            // save
            contact.save(onSaveSuccess,onSaveError);

            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);

            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }

        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }

        // onSaveError: Failed to get the contacts
        //
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }

        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }

        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>

Android 2.X Quirks
------------------

- __categories__:  Not supported on Android 2.X devices, returning `null`.

BlackBerry WebWorks (OS 5.0 and higher) Quirks
---------------------------------------------

- __id__: Supported.  Assigned by the device when saving the contact.

- __displayName__: Supported.  Stored in BlackBerry __user1__ field.

- __nickname__: Not supported, returning `null`.

- __phoneNumbers__: Partially supported.  Phone numbers are stored in BlackBerry fields __homePhone1__ and __homePhone2__ if _type_ is 'home', __workPhone1__ and __workPhone2__ if _type_ is 'work', __mobilePhone__ if _type_ is 'mobile', __faxPhone__ if _type_ is 'fax', __pagerPhone__ if _type_ is 'pager', and __otherPhone__ if _type_ is none of the above.

- __emails__: Partially supported.  The first three email addresses are stored in the BlackBerry __email1__, __email2__, and __email3__ fields, respectively.

- __addresses__: Partially supported.  The first and second addresses are stored in the BlackBerry __homeAddress__ and __workAddress__ fields, respectively.

- __ims__: Not supported, returning `null`.

- __organizations__: Partially supported.  The __name__ and __title__ of the first organization are stored in the BlackBerry __company__ and __title__ fields, respectively.

- __photos__: Partially supported.  A single thumbnail-sized photo is supported.  To set a contact's photo, pass in a either a base64-encoded image, or a URL pointing to the image.  The image is scaled down before saving to the BlackBerry contacts database.   The contact photo is returned as a base64-encoded image.

- __categories__:  Partially supported.  Only _Business_ and _Personal_ categories are supported.

- __urls__:  Partially supported. The first URL is stored in BlackBerry __webpage__ field.

iOS Quirks
----------

- __displayName__: Not supported on iOS, returning `null` unless there is no `[ContactName](../ContactName/contactname.html)` specified, in which case it returns the composite name, __nickname__ or `""`, respectively.

- __birthday__: Must be input as a JavaScript `Date` object, the same way it is returned.

- __photos__: Returns a [File](../../file/fileobj/fileobj.html) URL to the image, which is stored in the application's temporary directory.  Contents of the temporary directory are removed when the application exits.

- __categories__:  This property is currently not supported, returning `null`.

Windows Phone 7 and 8 Quirks
-----------

- __displayName__: When creating a contact, the value provided for the display name parameter differs from the display name retrieved when finding the contact.

- __urls__: When creating a contact, users can input and save more than one web address, but only one is available is available when searching the contact.

- __phoneNumbers__: The _pref_ option is not supported. The _type_ is not supported in a _find_ operation. Only one `phoneNumber` is allowed for each _type_.

- __emails__: The _pref_ option is not supported. Home and personal references same email entry. Only one entry is allowed for each _type_.

- __addresses__: Supports only work, and home/personal _type_. The home and personal _type_ reference the same address entry. Only one entry is allowed for each _type_.

- __organizations__: Only one is allowed, and does not support the _pref_, _type_, and _department_ attributes.

- __note__: Not supported, returning `null`.

- __ims__: Not supported, returning `null`.

- __birthdays__: Not supported, returning `null`.

- __categories__: Not supported, returning `null`.

