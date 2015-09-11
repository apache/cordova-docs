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

open<a href="database/database.html">Database</a>
===============

<a href="database/database.html">Database</a> オブジェクトを新規作成します。

    var dbShell = window.open<a href="database/database.html">Database</a>(<a href="parameters/name.html">database_name</a>, <a href="parameters/version.html">database_version</a>, <a href="parameters/display_name.html">database_displayname</a>, <a href="parameters/size.html">database_size</a>);

概要
-----------

window.open<a href="database/database.html">Database</a> メソッドは新しい <a href="database/database.html">Database</a> オブジェクトを返します。

このメソッドは SQLite のデータベースを新規作成し、 <a href="database/database.html">Database</a> オブジェクトを返します。 <a href="database/database.html">Database</a> オブジェクトは、データを操作するために使います。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone
- webOS

使用例
-------------

    var db = window.open<a href="database/database.html">Database</a>("test", "1.0", "Test DB", 1000000);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="storage.html">Storage</a> の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            var db = window.open<a href="database/database.html">Database</a>("test", "1.0", "Test DB", 1000000);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>データベースを開く</p>
      </body>
    </html>
