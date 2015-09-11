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

<a href="Contact/contact.html">Contact</a>s
========

> The `contacts` object provides access to the device contacts database.

__Important privacy note:__ Collection and use of contact data raises
important privacy issues.  Your app's privacy policy should discuss
how the app uses contact data and whether it is shared with any other
parties.  <a href="Contact/contact.html">Contact</a> information is considered sensitive because it
reveals the people with whom a person communicates.  Therefore, in
addition to your app's privacy policy, you should strongly consider
providing a just-in-time notice prior to your app accessing or using
contact data (if the device operating system doesn't do so
already). That notice should provide the same information noted above,
as well as obtaining the user's permission (e.g., by presenting
choices for __OK__ and __No Thanks__).  Note that some app
marketplaces may require your app to provide just-in-time notice and
obtain permission from the user prior to accessing contact data.  A
clear and easy-to-understand user experience surrounding the use of
contact data will help avoid user confusion and perceived misuse of
contact data.  For more information, please see the <a href="../../guide/appdev/privacy/index.html">Privacy Guide</a>.

Methods
-------

- <a href="contacts.create.html">contacts.create</a>
- <a href="contacts.find.html">contacts.find</a>

Arguments
---------

- <a href="parameters/contactFields.html">contactFields</a>
- <a href="parameters/contactSuccess.html">contactSuccess</a>
- <a href="parameters/contactError.html">contactError</a>
- <a href="parameters/contactFindOptions.html">contactFindOptions</a>

Objects
-------

- <a href="Contact/contact.html">Contact</a>
- <a href="Contact/contact.html">Contact</a>Name
- <a href="Contact/contact.html">Contact</a>Field
- <a href="Contact/contact.html">Contact</a>Address
- <a href="Contact/contact.html">Contact</a>Organization
- <a href="Contact/contact.html">Contact</a>FindOptions
- <a href="Contact/contact.html">Contact</a>Error

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
        $ cordova plugin rm org.apache.cordova.core.contacts

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in app/res/xml/config.xml)
        <feature name="<a href="Contact/contact.html">Contact</a>s">
            <param name="android-package" value="org.apache.cordova.<a href="Contact/contact.html">Contact</a>Manager" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="<a href="Contact/contact.html">Contact</a>">
            <param name="blackberry-package" value="org.apache.cordova.pim.<a href="Contact/contact.html">Contact</a>" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.<a href="Contact/contact.html">Contact</a>" required="true" version="1.0.0.0" />

* iOS (in `config.xml`)

        <feature name="<a href="Contact/contact.html">Contact</a>s">
            <param name="ios-package" value="CDV<a href="Contact/contact.html">Contact</a>s" />
        </feature>

* Windows Phone

        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>

  Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.
