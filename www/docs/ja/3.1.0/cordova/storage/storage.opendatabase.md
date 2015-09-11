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

# openDatabase

新しいを返します `Database` オブジェクト。

    var dbShell = <a href="../inappbrowser/window.open.html">window.open</a>Database(<a href="parameters/name.html">database_name</a>, <a href="parameters/version.html">database_version</a>, <a href="parameters/display_name.html">database_displayname</a>, <a href="parameters/size.html">database_size</a>);
    

## 説明

メソッドは、新しい SQL Lite <a href="database/database.html">データベース</a>が作成されますを返します、 `Database` 、データの操作が可能なオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen

## 簡単な例

    var db = <a href="../inappbrowser/window.open.html">window.open</a>Database("test", "1.0", "Test DB", 1000000);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = <a href="../inappbrowser/window.open.html">window.open</a>Database("test", "1.0", "Test DB", 1000000);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open Database</p>
      </body>
    </html>