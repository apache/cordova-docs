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

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="<a href="Contact/contact.html">Contact</a>s" value="org.apache.cordova.<a href="Contact/contact.html">Contact</a>Manager" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.GET_ACCOUNTS" />
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.WRITE_CONTACTS" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>ADDRESSBOOK</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="<a href="Contact/contact.html">Contact</a>" value="org.apache.cordova.pim.<a href="Contact/contact.html">Contact</a>" />

#### www/config.xml

    <feature id="blackberry.find"        required="true" version="1.0.0.0" />
    <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.<a href="Contact/contact.html">Contact</a>" required="true" version="1.0.0.0" />

### iOS

#### App/Supporting <a href="../file/fileobj/fileobj.html">File</a>s/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key><a href="Contact/contact.html">Contact</a>s</key>
        <string>CDV<a href="Contact/contact.html">Contact</a>s</string>
    </dict>

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_CONTACTS" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)
