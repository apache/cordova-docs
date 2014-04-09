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

# Storage

> Cordova が提供するストレージ オプションの概要

Cordova アプリで使用できる、ストレージ API 群をご紹介します。詳細とサンプルに関しては、 [html5rocks](http://www.html5rocks.com/en/features/storage) をご確認ください。

## LocalStorage

_Web ストレージ_ もしくは _simple ストレージ_ として、または、_session ストレージ_ と対をなすものとして、知られています。この API では、キーと値の組み合わせを使用した、同期的なストレージ処理を行います。また、WebView の実行時にも使用できます。詳細に関しては、 [the W3C spec](http://www.w3.org/TR/webstorage/) をご確認ください。


__Windows Phone 7 特有の動作__: ドット表記法は、_使用できません。_ `setItem` または `getItem` を使用してください。 `window.localStorage.someKey` に記載の方法 ( Storage オブジェクトからキーに対して、直接にアクセス ) は推奨しません。

## WebSQL

WebView 内で、この API を使用できます。

[Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) では、SQL クエリーを使用して、データベースのテーブルへ問い合わせ等を行う各種機能を提案しています。

以下のプラットフォームは、WebSQL をサポートします。

- Android
- BlackBerry 10
- iOS
- Tizen

## IndexedDB

WebView 内で、この API を使用できます。

[Indexed DB](http://www.w3.org/TR/IndexedDB/) では、LocalStorage と比較すると、より多彩な機能を提供します ( WebSQL と比較すると少ない機能提供となります )。

以下のプラットフォームは、IndexedDB をサポートします。

- Windows Phone 8
- BlackBerry 10

## Plugin-Based Options

上記のストレージ API に加えて、 [File API](https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md) も利用できます。この API を使用して、ローカルファイルシステムに、データのキャッシュを行います。また、 [Cordova plugins](http://plugins.cordova.io/) でも同様のストレージオプションを提供しています。
