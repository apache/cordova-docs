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

> `contacts` オブジェクトを通じて、デバイスの連絡先データベースにアクセスできます。

**プライバシーに関する重要な注意点:** 連絡先データを扱う場合、プライバシーに関する重要な問題があります。 アプリケーションの [プライバシー・ポリシー](guide_getting-started_index.md.html) では、連絡先データをどのように使用するのか、そして他のアプリケーションとデータを共有するのか否か、を説明するべきです。連絡情報は慎重に扱うべき情報です。なぜならば、ある個人が連絡を取り合っている相手を特定出来るからです。 それゆえに、アプリケーションのプライバシー・ポリシーに加えて、連絡先データへアクセスする際には、その都度通知するように強く心がけるべきでしょう (もしデバイスのOSが常に通知を行っていない場合)。この通知では、上記と同様の情報を提供し、ユーザーの許可を得るようにするべきです (例えば、"OK"と"NO"などの選択肢を表示するなど)。いくつかのアプリケーション・マーケットでは、連絡先データへアクセスする際には、アプリケーションはユーザーへ通知を行い、許可を得るようにしなければなりません。連絡先データ使用に関するユーザー体験を明確に理解することで、ユーザーの混乱を回避し、連絡先データの誤用を防ぐことにつながります。詳細は Privacy Guide を参照してください。

メソッド
-------

- contacts.create
- contacts.find

引数
---------

- contactFields
- contactSuccess
- contactError
- contactFindOptions

オブジェクト
-------

- Contact
- ContactName
- ContactField
- ContactAddress
- ContactOrganization
- ContactFindOptions
- ContactError

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Contacts" value="org.apache.cordova.ContactManager" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.GET_ACCOUNTS" />
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.WRITE_CONTACTS" />

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

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_CONTACTS" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)
