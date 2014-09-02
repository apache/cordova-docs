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

# ホワイトリストに関するガイド

セキュリティ対策の一環として、アプリの制御範囲外に位置する外部ドメインへのアクセスを制御するため、ドメインを使用したホワイトリストの作成を行います。Cordova の通常のセキュリティポリシーでは、どのサイトにでもアクセス可能となっています。アプリを製品として出荷する前に、ホワイトリストの策定と特定のネットワークドメイン・サブドメインへのアクセス許可の設定を行う必要があります。

Cordova は、 [W3C Widget Access][1] の規格に準拠しています。この規格では、アプリの `config.xml` ファイル内で `<access>` 要素を使用して、特定のドメインにネットワークアクセスできるよう規定しています。 『 コマンドライン インターフェイス 』 に記載の CLI 作業手順 ( 「 Web プロジェクト開発 」 作業手順 ) に従い、プロジェクトを作成する場合、このファイルは、プロジェクトの最上位 ( top-level ) のディレクトリに置かれています。これ以外の場合、プラットフォーム毎の開発工程 ( 「 ネイティブ プラットフォーム開発 」 作業手順 ) に従うのであれば、ファイルの位置は、下記をご確認ください ( 詳細に関しては、各 『 プラットフォームに関する解説 』 をご確認ください )。

以下にホワイトリストの記法を示します。

* [google.com][2] へのアクセス 

        <access origin="http://google.com" />

* 安全が確認されている [google.com][3] (`https://`) へのアクセス

        <access origin="https://google.com" />

* サブドメインである [maps.google.com][4] へのアクセス 

        <access origin="http://maps.google.com" />

* [google.com][2] 下のすべてのサブドメインへのアクセス。ここでは、例として [mail.google.com][5] と [docs.google.com][6] を想定します。 

        <access origin="http://*.google.com" />

* _すべて_ のドメインへのアクセス。ここでは、例として、 [google.com][2] と
  [developer.mozilla.org][7] を想定します。 

        <access origin="*" />

  こちらは、CLI を使用して、プロジェクトを新規作成した場合のデフォルト値です。

## Amazon Fire OS におけるホワイトリストの作成

このプラットフォームのホワイトリストの登録は、 `res/xml/config.xml` で行います。

## Android におけるホワイトリストの作成

このプラットフォームのホワイトリスト登録は、 `res/xml/config.xml` で行います。

__注意__ : Android 2.3 以前では、ドメインを使用したホワイトリスト化は、 `href` のハイパーリンクのみが対象で、画像とスクリプトのような参照対象のリソースは対象外でした。
スクリプトがアプリに注入 ( inject ) されることを避けるために、必要な処理を行ってください。

`href` のハイパーリンク経由で、ホワイトリストに未登録のドメインにナビした場合、アプリ内ではなく、標準ブラウザー内でページを開きます ( この点を下記の iOS の挙動と比較してみてください )。

## iOS におけるホワイトリストの作成

このプラットフォームのホワイトリストの登録は、アプリのディレクトリの `config.xml` ファイルで行います。

`http://www.apache.org` ではなく、 `www.apache.org` のように、プロトコルを書き加えず、生成元 ( Origin ) だけを指定した場合、デフォルトでは、 `http` 、 `https` 、 `ftp` 、 `ftps` スキームをすべて適用します。

iOS プラットフォームにおけるワイルドカードの取り扱いは、 [W3CWidget Access][1] 規格より柔軟です。たとえば、以下の記述を使用すると、 `.com` と `.net` のすべてのサブドメインとトップレベルのドメインにアクセスできます。

        <access origin="*.google.*" />

上記の Android プラットフォームとは異なり、 `href` のハイパーリンク経由で、ホワイトリストに未登録のドメインへナビゲートした場合、iOS では、ページが開きません。

## BlackBerry 10 におけるホワイトリストの作成

ホワイトリストの登録は、 `www/config.xml` で行います。

BlackBerry 10 では、以下の 2 つの点で、ワイルドカードの取り扱いが他のプラットフォームとは異なります。

* `XMLHttpRequest` を使用してアクセスを行うコンテンツを、明示的に宣言しなければいけません。この場合、 `origin="*"` は使用できません。『 BlackBerry 10 の設定 』 に記載されているように、代替的に、 `WebSecurity` の preference を使用して、Web セキュリティを無効にすることもできます。
 
        <preference name="websecurity" value="disable" />

* `*.domain` と設定する代わりに、 `subdomains` 属性 ( `true` に設定 ) を追加することもできます。デフォルトでは、 `false` に設定します。たとえば、以下の設定では、 `google.com` 、 `maps.google.com` 、 `docs.google.com` にアクセス可能です。

        <access origin="http://google.com" subdomains="true" />

  以下の設定では、 `google.com` のみにアクセスを絞り込みます。

        <access origin="http://google.com" subdomains="false" />

  以下の設定では、ローカル ( `file://` プロトコル ) を含む、すべてのドメインにアクセス可能です。

    <access origin="*" subdomains="true" />

( サポートに関する詳細は、BlackBerry のドキュメントの [access element][8] をご確認ください。)

## 3.1.0 における変更点 ( iOS が対象 )

3.1.0 より前のバージョンにおいて、Cordova-iOS では、ホワイトリストのドメインに、他の Cordova-OtherPlatform ( 他のプラットフォーム ) がサポートを行っていた、標準ではない、いくつかの拡張子を使用していました。3.1.0 では、iOS ホワイトリストは、この節の最初に記述しているように、ネットワークリソースへのアクセスを行うときに適用するホワイトリストの記法に準拠しています。3.1.0 より前からアップグレードを行い、そして、前述のような拡張子を使用していた場合、以前と同じリソースが使用できるよう、`config.xml` ファイル内のホワイトリストを変更する必要があります。

特に、以下で示す記述は更新が必要です。

- `apache.org` ( プロトコルなし ) : この記法を使用すると、以前では、 `http` 、 `https` 、 `ftp` 、 `ftps` プロトコルを適用していました。更新後は、 "`*://apache.org/*`" に変更して、すべてのプロトコルが対象であると明示的に定義します。または、サポートするプロトコルを個別に書きます。

- `http://apache.*` ( ドメインの最後にワイルドカード ) : この記法を使用すると、以前では、2 つの文字の可能な限り ( .co.uk のような組み合わせのドメインは除く ) の組み合わせを含む、すべてのトップレベルドメイン ( top-level-domain / TLD ) を適用していました。更新後は、実際に制御を行う各 TLD を使用して、ホワイトリスト化します。

- `h*t*://ap*he.o*g` ( ワイルドカードを虫食い状態に挿入 ) : こちらのサポートは行いません。更新後は、実際の各ドメインとプロトコルを使用して、ホワイトリスト化します。

## Windows Phone におけるホワイトリストの作成

Windows Phone 7 と 8 のホワイトリストの登録は、アプリの `config.xml` ファイルで行います。

## Tizen におけるホワイトリストの作成

ホワイトリストの登録は、アプリの `config.xml` ファイルで行います。BlackBerry と同じく、このプラットフォームでは、 `subdomains` 属性を使用します。

( サポートに関する詳細は、Tizen のドキュメントの [access element][9] をご確認ください。)

[1]: http://www.w3.org/TR/widgets-access/
[2]: http://google.com
[3]: https://google.com
[4]: http://maps.google.com
[5]: http://mail.google.com
[6]: http://docs.google.com
[7]: http://developer.mozilla.org
[8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html
[9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm

