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

contacts.create
===============

新しい Contact オブジェクトを作成します。

    var contact = navigator.contacts.create(properties);

概要
-----------

contacts.create 関数は、新しい `Contact` オブジェクトを同期的に作成します。

この関数で作成した Contact オブジェクトは、デバイスの連絡先データベースには残りません。 Contact オブジェクトをデバイスに保存するには、 `Contact.save` 関数を使用します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    var myContact = navigator.contacts.create({"displayName": "Test User"});

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "この連絡先のメモ";
            console.log("連絡先, " + myContact.displayName + ", メモ: " + myContact.note);
        }


        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>連絡先を作成します</p>
      </body>
    </html>
