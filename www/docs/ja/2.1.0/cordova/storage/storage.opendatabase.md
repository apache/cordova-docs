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

openDatabase
===============

Database オブジェクトを新規作成します。

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);

概要
-----------

window.openDatabase メソッドは新しい Database オブジェクトを返します。

このメソッドは SQLite のデータベースを新規作成し、 Database オブジェクトを返します。 Database オブジェクトは、データを操作するために使います。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone
- webOS
- Tizen

使用例
-------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>データベースを開く</p>
      </body>
    </html>
