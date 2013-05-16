---
license: Licensed to the Apache Software Foundation (ASF) under one
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

Contacts
========

> The `contacts` object provides access to the device contacts database.

Methods
-------

- contacts.create
- contacts.find

Arguments
---------

- contactFields
- contactSuccess
- contactError
- contactFindOptions

Objects
-------

- Contact
- ContactName
- ContactField
- ContactAddress
- ContactOrganization
- ContactFindOptions
- ContactError

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Contacts" value="org.apache.cordova.ContactManager" />

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

    <plugin name="Contact" value="org.apache.cordova.pim.Contact" />

#### www/config.xml

    <feature id="blackberry.find"        required="true" version="1.0.0.0" />
    <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
    <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />

### iOS

#### config.xml

    <plugin name="Contacts" value="CDVContacts" />

### webOS

    No permissions are required.

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_CONTACTS" />
    </Capabilities>

Reference: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)
