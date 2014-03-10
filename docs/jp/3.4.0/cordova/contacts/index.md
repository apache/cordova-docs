<!---
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
-->

# org.apache.cordova.contacts

Provides access to the device contacts database.

__WARNING__: Collection and use of contact data raises
important privacy issues.  Your app's privacy policy should discuss
how the app uses contact data and whether it is shared with any other
parties.  Contact information is considered sensitive because it
reveals the people with whom a person communicates.  Therefore, in
addition to the app's privacy policy, you should strongly consider
providing a just-in-time notice before the app accesses or uses
contact data, if the device operating system doesn't do so
already. That notice should provide the same information noted above,
as well as obtaining the user's permission (e.g., by presenting
choices for __OK__ and __No Thanks__).  Note that some app
marketplaces may require the app to provide a just-in-time notice and
obtain the user's permission before accessing contact data.  A
clear and easy-to-understand user experience surrounding the use of
contact data helps avoid user confusion and perceived misuse of
contact data.  For more information, please see the Privacy Guide.

## Installation

    cordova plugin add org.apache.cordova.contacts

### Firefox OS Quirks

Create __www/manifest.webapp__ as described in 
[Manifest Docs](https://developer.mozilla.org/en-US/Apps/Developing/Manifest).
Add relevant permisions.
There is also a need to change the webapp type to "privileged"  - [Manifest Docs](https://developer.mozilla.org/en-US/Apps/Developing/Manifest#type).
__WARNING__: All privileged apps enforce [Content Security Policy](https://developer.mozilla.org/en-US/Apps/CSP) which forbids inline script. Initialize your application in another way.

	"type": "privileged",
	"permissions": {
		"contacts": {
			"access": "readwrite",
			"description": "Describe why there is a need for such permission"
		}
	}

## navigator.contacts

### Methods

- navigator.contacts.create
- navigator.contacts.find

### Objects

- Contact
- ContactName
- ContactField
- ContactAddress
- ContactOrganization
- ContactFindOptions
- ContactError

## navigator.contacts.create

The `navigator.contacts.create` method is synchronous, and returns a new `Contact` object.

This method does not retain the Contact object in the device contacts
database, for which you need to invoke the `Contact.save` method.

### Supported Platforms

- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 and 8

### Example

    var myContact = navigator.contacts.create({"displayName": "Test User"});

## navigator.contacts.find

The `navigator.contacts.find` method executes asynchronously, querying the
device contacts database and returning an array of `Contact` objects.
The resulting objects are passed to the `contactSuccess` callback
function specified by the __contactSuccess__ parameter.

The __contactFields__ parameter specifies the fields to be used as a
search qualifier, and only those results are passed to the
__contactSuccess__ callback function.  A zero-length __contactFields__
parameter is invalid and results in
`ContactError.INVALID_ARGUMENT_ERROR`. A __contactFields__ value of
`"*"` returns all contact fields.

The __contactFindOptions.filter__ string can be used as a search
filter when querying the contacts database.  If provided, a
case-insensitive, partial value match is applied to each field
specified in the __contactFields__ parameter.  If there's a match for
_any_ of the specified fields, the contact is returned.

### Parameters

- __contactFields__: Contact fields to use as a search qualifier. The resulting `Contact` object only features values for these fields. _(DOMString[])_ [Required]

- __contactSuccess__: Success callback function invoked with the array of Contact objects returned from the database. [Required]

- __contactError__: Error callback function, invoked when an error occurs. [Optional]

- __contactFindOptions__: Search options to filter navigator.contacts. [Optional] Keys include:

    - __filter__: The search string used to find navigator.contacts. _(DOMString)_ (Default: `""`)

    - __multiple__: Determines if the find operation returns multiple navigator.contacts. _(Boolean)_ (Default: `false`)

### Supported Platforms

- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 and 8
- Windows 8

### Example

    function onSuccess(contacts) {
        alert('Found ' + navigator.contacts.length + ' navigator.contacts.');
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


## Contact

The `Contact` object represents a user's contact.  Contacts can be
created, stored, or removed from the device contacts database.
Contacts can also be retrieved (individually or in bulk) from the
database by invoking the `navigator.contacts.find` method.

__NOTE__: Not all of the contact fields listed above are supported on
every device platform.  Please check each platform's _Quirks_ section
for details.


### Properties

- __id__: A globally unique identifier. _(DOMString)_

- __displayName__: The name of this Contact, suitable for display to end users. _(DOMString)_

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

### Methods

- __clone__: Returns a new `Contact` object that is a deep copy of the calling object, with the `id` property set to `null`.

- __remove__: Removes the contact from the device contacts database, otherwise executes an error callback with a `ContactError` object.

- __save__: Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same __id__ already exists.

### Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 and 8
- Windows 8

### Save Example

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

### Clone Example

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);

### Remove Example

    function onSuccess() {
        alert("Removal Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

        // remove the contact from the device
        contact.remove(onSuccess,onError);


### Android 2.X Quirks

- __categories__:  Not supported on Android 2.X devices, returning `null`.

### BlackBerry 10 Quirks

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

### FirefoxOS Quirks

- __categories__: Partially supported. Fields __pref__ and __type__ are returning `null`

- __ims__: Not supported

- __photos__: Not supported


### iOS Quirks

- __displayName__: Not supported on iOS, returning `null` unless there is no `ContactName` specified, in which case it returns the composite name, __nickname__ or `""`, respectively.

- __birthday__: Must be input as a JavaScript `Date` object, the same way it is returned.

- __photos__: Returns a File URL to the image, which is stored in the application's temporary directory.  Contents of the temporary directory are removed when the application exits.

- __categories__:  This property is currently not supported, returning `null`.

### Windows Phone 7 and 8 Quirks

- __displayName__: When creating a contact, the value provided for the display name parameter differs from the display name retrieved when finding the contact.

- __urls__: When creating a contact, users can input and save more than one web address, but only one is available when searching the contact.

- __phoneNumbers__: The _pref_ option is not supported. The _type_ is not supported in a _find_ operation. Only one `phoneNumber` is allowed for each _type_.

- __emails__: The _pref_ option is not supported. Home and personal references same email entry. Only one entry is allowed for each _type_.

- __addresses__: Supports only work, and home/personal _type_. The home and personal _type_ reference the same address entry. Only one entry is allowed for each _type_.

- __organizations__: Only one is allowed, and does not support the _pref_, _type_, and _department_ attributes.

- __note__: Not supported, returning `null`.

- __ims__: Not supported, returning `null`.

- __birthdays__: Not supported, returning `null`.

- __categories__: Not supported, returning `null`.


## ContactAddress

The `ContactAddress` object stores the properties of a single address
of a contact.  A `Contact` object may include more than one address in
a `ContactAddress[]` array.


### Properties

- __pref__: Set to `true` if this `ContactAddress` contains the user's preferred value. _(boolean)_

- __type__: A string indicating what type of field this is, _home_ for example. _(DOMString)_

- __formatted__: The full address formatted for display. _(DOMString)_

- __streetAddress__: The full street address. _(DOMString)_

- __locality__: The city or locality. _(DOMString)_

- __region__: The state or region. _(DOMString)_

- __postalCode__: The zip code or postal code. _(DOMString)_

- __country__: The country name. _(DOMString)_

### Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 and 8
- Windows 8

### Example

    // display the address information for all contacts

    function onSuccess(contacts) {
        for (var i = 0; i < navigator.contacts.length; i++) {
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

    function onError(contactError) {
        alert('onError!');
    };

    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);

### Android 2.X Quirks

- __pref__: Not supported, returning `false` on Android 2.X devices.

### BlackBerry 10 Quirks

- __pref__: Not supported on BlackBerry devices, returning `false`.

- __type__: Partially supported.  Only one each of _Work_ and _Home_ type addresses can be stored per contact.

- __formatted__: Partially supported.  Returns a concatenation of all BlackBerry address fields.

- __streetAddress__: Supported.  Returns a concatenation of BlackBerry __address1__ and __address2__ address fields.

- __locality__: Supported.  Stored in BlackBerry __city__ address field.

- __region__: Supported.  Stored in BlackBerry __stateProvince__ address field.

- __postalCode__: Supported.  Stored in BlackBerry __zipPostal__ address field.

- __country__: Supported.

### FirefoxOS Quirks

- __formatted__: Currently not supported

### iOS Quirks

- __pref__: Not supported on iOS devices, returning `false`.

- __formatted__: Currently not supported.


## ContactError

The `ContactError` object is returned to the user through the
`contactError` callback function when an error occurs.

### Properties

- __code__: One of the predefined error codes listed below.

### Constants

- `ContactError.UNKNOWN_ERROR`
- `ContactError.INVALID_ARGUMENT_ERROR`
- `ContactError.TIMEOUT_ERROR`
- `ContactError.PENDING_OPERATION_ERROR`
- `ContactError.IO_ERROR`
- `ContactError.NOT_SUPPORTED_ERROR`
- `ContactError.PERMISSION_DENIED_ERROR`


## ContactField

The `ContactField` object is a reusable component that represents
contact fields generically.  Each `ContactField` object contains a
`value`, `type`, and `pref` property.  A `Contact` object stores
several properties in `ContactField[]` arrays, such as phone numbers
and email addresses.

In most instances, there are no pre-determined values for a
`ContactField` object's __type__ attribute.  For example, a phone
number can specify __type__ values of _home_, _work_, _mobile_,
_iPhone_, or any other value that is supported by a particular device
platform's contact database.  However, for the `Contact` __photos__
field, the __type__ field indicates the format of the returned image:
__url__ when the __value__ attribute contains a URL to the photo
image, or _base64_ when the __value__ contains a base64-encoded image
string.

### Properties

- __type__: A string that indicates what type of field this is, _home_ for example. _(DOMString)_

- __value__: The value of the field, such as a phone number or email address. _(DOMString)_

- __pref__: Set to `true` if this `ContactField` contains the user's preferred value. _(boolean)_

### Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 and 8
- Windows 8

### Example

        // create a new contact
        var contact = navigator.contacts.create();

        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;

        // save the contact
        contact.save();

### Android Quirks

- __pref__: Not supported, returning `false`.

### BlackBerry 10 Quirks

- __type__: Partially supported.  Used for phone numbers.

- __value__: Supported.

- __pref__: Not supported, returning `false`.

### iOS Quirks

- __pref__: Not supported, returning `false`.


## ContactName

Contains different kinds of information about a `Contact` object's name.

### Properties

- __formatted__: The complete name of the contact. _(DOMString)_

- __familyName__: The contact's family name. _(DOMString)_

- __givenName__: The contact's given name. _(DOMString)_

- __middleName__: The contact's middle name. _(DOMString)_

- __honorificPrefix__: The contact's prefix (example _Mr._ or _Dr._) _(DOMString)_

- __honorificSuffix__: The contact's suffix (example _Esq._). _(DOMString)_

### Supported Platforms

- Amazon Fire OS
- Android 2.X
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 and 8
- Windows 8

### Example

    function onSuccess(contacts) {
        for (var i = 0; i < navigator.contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);

### Android Quirks

- __formatted__: Partially supported, and read-only.  Returns a concatenation of `honorificPrefix`, `givenName`, `middleName`, `familyName`, and `honorificSuffix`.

### BlackBerry 10 Quirks

- __formatted__: Partially supported.  Returns a concatenation of BlackBerry __firstName__ and __lastName__ fields.

- __familyName__: Supported.  Stored in BlackBerry __lastName__ field.

- __givenName__: Supported.  Stored in BlackBerry __firstName__ field.

- __middleName__: Not supported, returning `null`.

- __honorificPrefix__: Not supported, returning `null`.

- __honorificSuffix__: Not supported, returning `null`.

### FirefoxOS Quirks

- __formatted__: Partially supported, and read-only.  Returns a concatenation of `honorificPrefix`, `givenName`, `middleName`, `familyName`, and `honorificSuffix`.

### iOS Quirks

- __formatted__: Partially supported.  Returns iOS Composite Name, but is read-only.


## ContactOrganization

The `ContactOrganization` object stores a contact's organization
properties.  A `Contact` object stores one or more
`ContactOrganization` objects in an array.

### Properties

- __pref__: Set to `true` if this `ContactOrganization` contains the user's preferred value. _(boolean)_

- __type__: A string that indicates what type of field this is, _home_ for example. _(DOMString)

- __name__: The name of the organization. _(DOMString)_

- __department__: The department the contract works for. _(DOMString)_

- __title__: The contact's title at the organization. _(DOMString)_


### Supported Platforms

- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 and 8
- Windows 8

### Example

    function onSuccess(contacts) {
        for (var i = 0; i < navigator.contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);

### Android 2.X Quirks

- __pref__: Not supported by Android 2.X devices, returning `false`.

### BlackBerry 10 Quirks

- __pref__: Not supported by BlackBerry devices, returning `false`.

- __type__: Not supported by BlackBerry devices, returning `null`.

- __name__: Partially supported.  The first organization name is stored in the BlackBerry __company__ field.

- __department__: Not supported, returning `null`.

- __title__: Partially supported.  The first organization title is stored in the BlackBerry __jobTitle__ field.

### Firefox OS Quirks

- __pref__: Not supported

- __type__: Not supported

- __department__: Not supported

- Fields __name__ and __title__ stored in __org__ and __jobTitle__.

### iOS Quirks

- __pref__: Not supported on iOS devices, returning `false`.

- __type__: Not supported on iOS devices, returning `null`.

- __name__: Partially supported.  The first organization name is stored in the iOS __kABPersonOrganizationProperty__ field.

- __department__: Partially supported.  The first department name is stored in the iOS __kABPersonDepartmentProperty__ field.

- __title__: Partially supported.  The first title is stored in the iOS __kABPersonJobTitleProperty__ field.
