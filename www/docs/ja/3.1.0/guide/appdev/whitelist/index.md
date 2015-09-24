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

title: ホワイト リスト ガイド
---

# ホワイト リスト ガイド

## 概要

リソースのホワイト リストを制御するセキュリティ モデルなど、外部ネットワーク リソースにアクセスが `http://google.com` 。 Apache コルドバの既定のセキュリティ ポリシーは、インターネット上の任意のサイト上の任意のリソースにアクセスできます。 運用環境にアプリケーションを移動する前にそのホワイト リストを確認し、特定のネットワーク ドメインおよびサブドメインへのアクセスを宣言する必要があります。

## 仕様

ドメイン ホワイト[W3C ウィジェット アクセス][1]仕様の土台となります。 ウィジェット アクセス仕様で、 `<access>` 要素を使用する特定のネットワーク リソースへのアクセスを宣言します。 Apache コルドバは個々 のネットワーク リソース (Url) のホワイト リスト登録を許可するようにこの概念を拡張します。 将来的には、Apache コルドバはプラットフォームのホワイト リストの実装を抽象化します。 しかし、今のところ各プラットフォーム独自のリソースまたはドメイン ホワイト リストを実装します。 プラットフォームの実装の違いは、このドキュメントに記載されています。

 [1]: http://www.w3.org/TR/widgets-access/

ホワイト リストのエントリーの一般的な形式の Google クロム パッケージ アプリ「[パターン一致][2]」仕様に従います。 リソースは、URL がアスタリスクによって指定されます (*) を示す任意の値が「行く」ここでいくつかの場所で「ワイルドカード」として文字を使用可能性があります。 具体的な例を紹介します。

 [2]: http://developer.chrome.com/apps/match_patterns.html

## 構文

[Google.com][3]ですべてのリソースへのアクセス:

 [3]: http://google.com

    http://google.com/*
    

安全な[google.com][4]ですべてのリソースへのアクセス ( `https://` )。

 [4]: https://google.com

    https://google.com/*
    

特定のサブドメイン[maps.google.com][5]へのアクセス:

 [5]: http://maps.google.com

    http://maps.google.com/*
    

[Google.com][3] (例えば、[接続][6]および[docs.google.com][7]) 上のすべてのサブドメインへのアクセス:

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

[Www.google.com][8] 「/モバイル」のパスの下にすべてのリソースへのアクセス:

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

任意のプロトコル (例えば、HTTP、HTTPS、FTP など) で[google.com][3]へのアクセス:

    *://google.com/*
    

（例えば、 [google.com][3]と[developer.mozilla.org][9]） のインターネット上のすべての資源へのアクセス:

 [9]: http://developer.mozilla.org

    *
    

## アンドロイド

### 詳細

ホワイト リスト登録の規則は、 `res/xml/config.xml` 要素で宣言されていると`<access origin="..." />`.

Android は完全にホワイト リスト構文をサポートします。

### 構文

[Google.com][3]へのアクセス:

    <access origin="http://google.com/*" />
    

## ブラックベリー 10

### 詳細

ホワイト リスト登録の規則は、 `www/config.xml` 要素で宣言されていると`<access origin="..." />`.

ブラックベリー 10 2 つの方法で他のプラットフォームとは異なるワイルドカードを処理します。

1） XMLHttpRequest によってアクセスされるコンテンツは、明示的に宣言されなければなりません。起源 ="*"このユースケースは尊敬できません。また、web のすべてのセキュリティが好みを使用して無効になります。

サブドメイン 2) ="true"の代わりに使用される可能性があります"* .domain"

### 構文

[Google.com][3]へのアクセス:

    <access origin="http://google.com" subdomains="false" />
    

[Maps.google.com][5]へのアクセス:

    <access origin="http://maps.google.com" subdomains="false" />
    

[Google.com][3]でのすべてのサブドメインへのアクセス:

    <access origin="http://google.com" subdomains="true" />
    

含むすべてのドメインへのアクセスを `file://` プロトコル。

    <access origin="*" subdomains="true" />
    

すべての web セキュリティを無効にします。

    <preference name="websecurity" value="disable" />
    

## iOS

### 詳細

ホワイト リスト登録の規則は、 `AppName/config.xml` 要素で宣言されていると`<access origin="..." />`.

iOS は完全にホワイト リスト構文をサポートします。

### 3.1.0 で変更されました。

前のバージョン 3.1.0、コルドバ iOS 他コルドバのプラットフォームでサポートされているドメイン whilelisting スキームをいくつかの非標準の拡張含まれています。 3.1.0、現在 iOS のホワイト リストは今このドキュメントの上部に記載されているリソースのホワイト リストの構文に準拠します。 変更する必要があります前 3.1.0 からアップグレードする場合にこれらの拡張機能を使用していた、 `config.xml` として前にホワイト リスト登録リソースの同じセットを続行するためにファイル。

具体的には、これらのパターンを更新する必要があります。

*   " `apache.org` "(プロトコル): これは以前と一致 `http` 、 `https` 、 `ftp` 、および `ftps` プロトコル。 変更" `*://apache.org/*` "に、すべてのプロトコルを含めたり、各プロトコルをサポートする必要がある行が含まれます。

*   " `http://apache.*` "(ワイルドカード ドメインの終わりに): これは以前すべて上位-レベルの-ドメイン、すべての可能な 2 文字の Tld を含むと一致 (有用ではないドメインのようにしかし。 co.uk)。 行することが実際に制御、ホワイト リストに登録する必要がある各 TLD を含めます。

*   " `h*t*://ap*he.o*g` "(行方不明のランダムな文字のワイルドカード文字): これらはサポートされていません; ドメインごとに行を含めるし、したプロトコルへの変更は、実際にホワイト リストする必要があります。

### 構文

[Google.com][3]へのアクセス:

    <access origin="http://google.com/*" />
    

## Windows Phone （7 ＆ 8）

ホワイト リスト登録の規則は、 `config.xml` 要素で宣言されていると`<access origin="..." />`.

### 構文

[Google.com][3]へのアクセス:

    <access origin="http://google.com" />
    

## Tizen

### 詳細

アプリケーションのルート ディレクトリの `config.xml` ファイルを使用してドメイン ホワイト リスト登録のルールを指定します、 `<access origin="..." />` の要素。 完全なリファレンス[Tizen 外部ネットワーク リソースへのアクセスのドキュメント][10]を参照してください。.

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### 構文

[Google.com][3]へのアクセス:

    <access origin="http://google.com" subdomains="false" />
    

安全な[google.com][4]へのアクセス ( `https://` )。

    <access origin="https://google.com" subdomains="false" />
    

[Google.com][3]でのすべてのサブドメインへのアクセス:

    <access origin="http://google.com" subdomains="true" />
    

含むすべてのドメインへのアクセスを `file://` プロトコル。

    <access origin="*" subdomains="true" />