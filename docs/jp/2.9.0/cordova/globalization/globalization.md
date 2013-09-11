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

Globalization
======

> `globalization` オブジェクトはユーザーのロケールとタイムゾーンの情報を取得し、固有の操作を実行します。

オブジェクト
-------

- GlobalizationError

メソッド
-------

- globalization.getPreferredLanguage
- globalization.getLocaleName
- globalization.dateToString
- globalization.stringToDate
- globalization.getDatePattern
- globalization.getDateNames
- globalization.isDayLightSavingsTime
- globalization.getFirstDayOfWeek
- globalization.numberToString
- globalization.stringToNumber
- globalization.getNumberPattern
- globalization.getCurrencyPattern

スコープ
--------------

この `globalization` オブジェクトは `navigator` オブジェクトのプロパティであり、グローバルスコープを持っています。

    // グローバル globalization オブジェクト
    var globalization = navigator.globalization;

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Globalization" value="org.apache.cordova.Globalization" />
