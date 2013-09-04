---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# ドメイン ホワイト リスト ガイド

## 概要

ドメイン ホワイト リストを制御するセキュリティ モデルなど、外部ドメインにアクセスが `http://google.com` 。 Apache コルドバの既定のセキュリティ ポリシーは、任意のサイトにアクセスをできます。 運用環境にアプリケーションを移動する前にそのホワイト リストを確認し、特定のネットワーク ドメインおよびサブドメインへのアクセスを宣言する必要があります。

## 仕様

ドメイン ホワイト[W3C ウィジェット アクセス][1]仕様の土台となります。 ウィジェット アクセス仕様で、 `<access>` 要素を使用する特定のネットワーク ドメインにアクセスを宣言します。 将来的には、Apache コルドバは W3C のウィジェットのアクセス仕様にプラットフォームのホワイト リストの実装を抽象化します。 ただし、今のところ各プラットフォーム独自ドメイン ホワイト リストを実装する必要があります。

 [1]: http://www.w3.org/TR/widgets-access/

## 構文

[Google.com][2]へのアクセス:

 [2]: http://google.com

    http://google.com
    

安全な[google.com][3]へのアクセス ( `https://` )。

 [3]: https://google.com

    https://google.com
    

サブドメイン[maps.google.com][4]へのアクセス:

 [4]: http://maps.google.com

    http://maps.google.com
    

[Google.com][2] (例えば、[接続][5]および[docs.google.com][6]) 上のすべてのサブドメインへのアクセス:

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

（例えば、 [google.com][2]と[developer.mozilla.org][7]） のすべてのドメインへのアクセス:

 [7]: http://developer.mozilla.org

    *
    

## アンドロイド

### 詳細

ホワイト リスト登録の規則は、 `res/xml/config.xml` 要素で宣言されていると`<access origin="..." />`.

Android は完全にホワイト リスト構文をサポートします。

### 構文

[Google.com][2]へのアクセス:

    < アクセス始点 ="http://google.com"/>
    

## ブラックベリー

### 詳細

ホワイト リスト登録の規則は、 `www/config.xml` 要素で宣言されていると`<access uri="..." />`.

完全なリファレンス[はブラックベリー WebWorks アクセス要素のドキュメント][8]を参照してください。.

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### 構文

[Google.com][2]へのアクセス:

    < uri にアクセス サブドメイン"http://google.com"= ="false"/>
    

[Maps.google.com][4]へのアクセス:

    < uri にアクセス サブドメイン"http://maps.google.com"= ="false"/>
    

[Google.com][2]でのすべてのサブドメインへのアクセス:

    < uri にアクセス サブドメイン"http://google.com"= ="true"/>
    

含むすべてのドメインへのアクセスを `file://` プロトコル。

    < uri にアクセス ="*"サブドメイン ="true"/>
    

## iOS

### 詳細

ホワイト リスト登録の規則は、 `AppName/config.xml` 要素で宣言されていると`<access origin="..." />`.

iOS は完全にホワイト リスト構文をサポートします。

**注:**起源のようなプロトコルを使わずに指定 `www.apache.org` よりもむしろ `http://www.apache.org` 、すべてのデフォルト、 `http` 、 `https` 、 `ftp` と `ftps` スキーム。

### 構文

IOS にワイルドカードを使用 ( `*` ) [W3C ウィジェット アクセス][1]仕様よりも柔軟性します。

すべてのサブドメイン、Tld へのアクセス ( `.com` 、 `.net` 、等)。

    ※ google.*
    

## Windows Phone （7 ＆ 8）

ホワイト リスト登録の規則は、 `config.xml` 要素で宣言されていると`<access origin="..." />`.

Android は完全にホワイト リスト構文をサポートします。

### 構文

[Google.com][2]へのアクセス:

    < アクセス始点 ="http://google.com"/>
    

## Tizen

### 詳細

アプリケーションのルート ディレクトリの `config.xml` ファイルを使用してドメイン ホワイト リスト登録のルールを指定します、 `<access origin="..." />` の要素。 完全なリファレンス [Tizen 外部ネットワーク リソースへのアクセス マニュアル」を参照してください。 [10]。

### 構文

[Google.com][2]へのアクセス:

    < アクセス始点がサブドメイン"http://google.com"= ="false"/>
    

安全な[google.com][3]へのアクセス ( `https://` )。

    < アクセス始点がサブドメイン"https://google.com"= ="false"/>
    

[Google.com][2]でのすべてのサブドメインへのアクセス:

    < アクセス始点がサブドメイン"http://google.com"= ="true"/>
    

含むすべてのドメインへのアクセスを `file://` プロトコル。

    < アクセス始点 ="*"サブドメイン ="true"/>