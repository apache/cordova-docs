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

# contactSuccess

成功コールバック関数を提供する、 `Contact` 結果の配列は `<a href="../contacts.find.html">contacts.find</a>` 操作。

    function(contacts) {
        // Do something
    }
    

## パラメーター

*   **<a href="contactFields.html">連絡先</a>**: <a href="contactFields.html">連絡先</a>の配列検索操作からの結果します。*（<a href="../Contact/contact.html">お問い合わせ</a>）*

## 例

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }