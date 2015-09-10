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

<a href="../Contact/contact.html">Contact</a>Organization
===================

`<a href="../Contact/contact.html">Contact</a>` オブジェクトの組織プロパティーを表します。

プロパティー
----------
- __pref:__ `<a href="../Contact/contact.html">Contact</a>Organization` がユーザーの推奨値を含むかどうかを表します。含む場合、 `true` がセットされます _(boolean)_
- __type:__ フィールドのタイプを表します (例: 'home') _(DOMString)_
- __name:__ 組織名を表します _(DOMString)_
- __department:__ 部署名を表します _(DOMString)_
- __title:__ 役職名を表します _(DOMString)_

詳細
-------

`<a href="../Contact/contact.html">Contact</a>Organization` オブジェクトは連絡先の組織情報を表します。 `<a href="../Contact/contact.html">Contact</a>` オブジェクトは複数の `<a href="../Contact/contact.html">Contact</a>Organization` オブジェクトを配列に保持します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2

<a href="../../storage/storage.opendatabase.html">使用例</a>
-------------

    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            for (var j=0; j<contacts[i].organizations.length; j++) {
                alert("推奨値: " + contacts[i].organizations[j].pref + "\n" +
                        "タイプ: " + contacts[i].organizations[j].type + "\n" +
                        "組織名: " + contacts[i].organizations[j].name + "\n" +
                        "部署名: " + contacts[i].organizations[j].department + "\n" +
                        "役職名: " + contacts[i].organizations[j].title);
            }
        }
    };

    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('エラーが発生しました。');
    };

    var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
    options.filter="";
    filter = ["displayName","organizations"];
    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);

詳細な<a href="../../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> の<a href="../../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.8.1.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../../device/device.html">Device</a>Ready() {
            var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                for (var j=0; j<contacts[i].organizations.length; j++) {
                    alert("推奨値: " + contacts[i].organizations[j].pref + "\n" +
                            "タイプ: " + contacts[i].organizations[j].type + "\n" +
                            "組織名: " + contacts[i].organizations[j].name + "\n" +
                            "部署名: " + contacts[i].organizations[j].department + "\n" +
                            "役職名: " + contacts[i].organizations[j].title);
                }
            }
        };

        // onError: 連絡先の取得に失敗した場合
        //
        function onError(<a href="../parameters/contactError.html">contactError</a>) {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">使用例</a></h1>
        <p>連絡先の検索</p>
      </body>
    </html>


Android 2.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 2.X ではサポートされておらず、常に `false` を返します。

Android 1.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 1.X ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __title:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。

BlackBerry WebWorks (OS 5.0 and higher) に関する注意点
--------------------------------------------
- __pref:__ このプロパティーは BlackBerry ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは BlackBerry ではサポートされておらず、常に `null` を返します。
- __name:__ 部分的にサポートされています。一つ目の組織名が BlackBerry の __company__ フィールドに保存されます。
- __department:__ このプロパティーはサポートされておらず、常に `null` を返します。
- __title:__ 部分的にサポートされています。一つ目の役職名が BlackBerry の __jobTitle__ フィールドに保存されます。

iOS に関する注意点
-----------
- __pref:__ このプロパティーは iOS ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは iOS ではサポートされておらず、常に `null` を返します。
- __name:__ 部分的にサポートされています。一つ目の組織名が iOS の __kABPersonOrganizationProperty__ フィールドに保存されます。
- __department__: 部分的にサポートされています。一つ目の部署名が iOS の __kABPersonDepartmentProperty__ フィールドに保存されます。
- __title__: 部分的にサポートされています。一つ目の役職名が iOS の __kABPersonJobTitleProperty__ フィールドに保存されます。

Bada 2.0 に関する注意点
---------------
- <a href="../Contact/contact.html">Contact</a>Organization はサポートされていません。
