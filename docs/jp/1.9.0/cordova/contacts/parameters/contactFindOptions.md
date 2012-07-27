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

contactFindOptions
==================

`contacts.find` メソッドを使用する際のオプションのパラメーターです。連絡先の検索時にフィルターをかける場合に使用します。

    {
        filter: "",
        multiple: true,
    };

オプション
-------

- __filter:__ 絞り込み検索用の文字列を指定します _(DOMString)_ (デフォルト: "")
- __multiple:__ 検索時に複数の連絡先を返すかどうかを指定します _(Boolean)_ (デフォルト: false)

