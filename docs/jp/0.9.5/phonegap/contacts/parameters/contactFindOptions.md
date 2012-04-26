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

 `contacts.find` メソッドで使用されるオプションのパラメータを表します。連絡先の検索時にフィルターをかける場合に使用します。

    { 
		filter: "",
		multiple: true,
		updatedSince: ""
	};

オプション
-------

- __filter:__ 絞込検索用の文字列を指定します _(DOMString)_ (Default: "")
- __multiple:__ 検索時に複数の連絡先情報を返すかどうかを指定します _(Boolean)_ (デフォルト: true)
- __updatedSince:__ 指定した日付以降に更新された連絡先のみを返します _(Date)_ (デフォルト: "")

Android に関する注意点
----------
- __updatedSince:__ このプロパティは現在Androidではサポートされていません。

BlackBerry WebWorks に関する注意点
---------------------------------------------
- __updatedSince:__ このプロパティは現在BlackBerry WebWorksではサポートされていません。 