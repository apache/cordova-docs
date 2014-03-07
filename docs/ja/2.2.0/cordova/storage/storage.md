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

Storage
==========

> デバイスのストレージにアクセスする機能を提供します。

この API は [W3C Web SQL Database 仕様書](http://dev.w3.org/html5/webdatabase/) と [W3C Web Storage API 仕様書](http://dev.w3.org/html5/webstorage/) をベースとしています。いくつかのデバイスではすでにこの機能の実装を提供しています。これらについては、 Cordova の実装ではなくビルトインのサポートが実行されます。ストレージのサポートがされてないデバイスについては、 Cordova の実装によって W3C の仕様に沿った機能が提供されます。

メソッド
-------

- openDatabase

引数
---------

- database_name
- database_version
- database_displayname
- database_size

オブジェクト
-------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Storage" value="org.apache.cordova.Storage" />

### Bada

    パーミッションの設定は必要ありません。

### BlackBerry WebWorks

#### www/config.xml

    <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />

### iOS

    パーミッションの設定は必要ありません。

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

    パーミッションの設定は必要ありません。

### Tizen

    パーミッションの設定は必要ありません。
