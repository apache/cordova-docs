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

ドメインホワイトリストガイド
=====================

概要
--------

Apache Cordova のドメインホワイトリストは、 `http://google.com` などの外部ドメインへのアクセスを制御するセキュリティモデルです。デフォルトのセキュリティポリシーは全てのネットワークアクセスをブロックします。アプリケーション開発者は、特定のネットワークのドメインやサブドメインへのアクセスを宣言して許可できます。

仕様
-------------

ドメインホワイトリストは [W3C Widget Access][1] の仕様に基づいています。 Widget Access 仕様の中で、 `<access>` 要素はネットワークドメインへのアクセス許可を指定するために使われています。将来、 Apache Cordova はホワイトリスト実装のプラットフォームの W3C Widget Access 仕様書。しかしながら、現在は各プラットフォームは各々のドメインホワイトリストを実装する必要があります。

シンタックス
------

[google.com][2] へのアクセス:

    http://google.com

[google.com][3] へのセキュアアクセス (`https://`):

    https://google.com

[maps.google.com][4] サブドメインへのアクセス:

    http://maps.google.com

[google.com][2] のすべてのサブドメインへのアクセス (例: [mail.google.com][5] 及び [docs.google.com][6]):

    http://*.google.com

すべてのドメインへのアクセス (例: [google.com][2] 及び [developer.mozilla.org][7]):

    *

Android
-------

### 詳細

ホワイトリストのルールは `res/xml/config.xml` で見つけることができ、 `<access origin="..." />` 要素によって宣言できます。

Android はホワイトリストのシンタックスをフルサポートしています。

### シンタックス

[google.com][2] へのアクセス:

    <access origin="http://google.com" />

Bada
----

ドメインホワイトリストは Bada ではサポートされていません。デフォルトとして、全てのドメインにアクセス可能です。

BlackBerry
----------

### 詳細

ホワイトリストのルールは `www/config.xml` で見つけることができ、 `<access uri="..." />` 要素によって宣言できます。

詳細については、 [BlackBerry WebWorks Access Element documentation][8] を参照してください。

### シンタックス

[google.com][2] へのアクセス:

    <access uri="http://google.com" subdomains="false" />

[maps.google.com][4] へのアクセス:

    <access uri="http://maps.google.com" subdomains="false" />

[google.com][2] のすべてのサブドメインへのアクセス:

    <access uri="http://google.com" subdomains="true" />

`file://` プロトコルを含むすべてのドメインへのアクセス:

    <access uri="*" subdomains="true" />

iOS
---

### 詳細

1. `Cordova.plist` を開きます
    - Xcode 内では `AppName/Supporting Files/Cordova.plist` で見つけられます
    - ディレクトリ内では `AppName/Cordova.plist` で見つけられます
2. `ExternalHosts` キー配下に新しい文字列を追加します
    - XML の直接編集を避けるため、 Xcode を使用することを勧めます


### シンタックス

[google.com][2] のアクセス及び [google.com][3] へのセキュアアクセス (`https://`):

    google.com

[maps.google.com][4] サブドメインへのアクセス:

    maps.google.com

[google.com][2] のすべてのサブドメインへのアクセス (例: [mail.google.com][5] 及び [docs.google.com][6]):

    *.google.com

すべてのドメインへのアクセス (例: [google.com][2] 及び [developer.mozilla.org][7]):

    *

iOS のワイルドカード (`*`) は [W3C Widget Access][1] の仕様より柔軟です。

すべてのサブドメインへ及び TLD (`.com`, `.net` など) へのアクセス:

    *.google.*

Symbian
-------


ドメインホワイトリストは Symbian ではサポートされていません。デフォルトとして、全てのドメインにアクセス可能です。

webOS
-----

ドメインホワイトリストは webOS ではサポートされていません。デフォルトとして、全てのドメインにアクセス可能です。

Windows Phone
-------------

ドメインホワイトリストは Windows Phone ではサポートされていません。デフォルトとして、全てのドメインにアクセス可能です。

Tizen
----------

### 詳細

ドメインホワイトリストのルールはアプリケーションのルートディレクトリにある `config.xml` で見つけることができます。
これらは、 `<access origin="..." />` 要素によって宣言されています。
詳細については、 [Tizen Accessing External Network Resources documentation][9] を参照してください。


### シンタックス

[google.com][2] のアクセス:

    <access origin="http://google.com" subdomains="false" />

[google.com][3] へのセキュアアクセス (`https://`):

    <access origin="https://google.com" subdomains="false" />

[google.com][2] のすべてのサブドメインへのアクセス:

    <access origin="http://google.com" subdomains="true" />

`file://` プロトコルを含むすべてのドメインへのアクセス:

    <access origin="*" subdomains="true" />

[1]: http://www.w3.org/TR/widgets-access/
[2]: http://google.com
[3]: https://google.com
[4]: http://maps.google.com
[5]: http://mail.google.com
[6]: http://docs.google.com
[7]: http://developer.mozilla.org
[8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html
[9]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources
