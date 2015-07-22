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

# ホワイト リスト ガイド

ホワイト リスト登録のドメインは、アクセスを制御するセキュリティ モデルをアプリケーション コントロールを持たない外部のドメインにします。 コルドバの既定のセキュリティ ポリシーは、任意のサイトにアクセスをできます。 生産へアプリケーションを移動する前に、ホワイト リストを策定し、特定のネットワーク ドメインおよびサブドメインにアクセスできるようにする必要があります。

コルドバに依存している[W3C のウィジェットのアクセス][1]仕様に準拠して、 `<access>` 、アプリ内での要素 `config.xml` 特定のドメインへのネットワーク アクセスを有効にするファイル。 コマンド ライン インターフェイスで記述された CLI ワークフローに依存するプロジェクトのためこのファイルにあるプロジェクトの最上位ディレクトリ それ以外の場合、プラットフォーム固有の開発パス場所は以下のセクションに表示されます。 （各プラットフォーム上のさまざまなプラットフォームのガイドの詳細を参照）。

 [1]: http://www.w3.org/TR/widgets-access/

ホワイト リストの構文を次の例に示します。

*   [Google.com][2]へのアクセス:
    
        <access origin="http://google.com" />
        

*   安全な[google.com][3]へのアクセス ( `https://` )。
    
        <access origin="https://google.com" />
        

*   サブドメイン[maps.google.com][4]へのアクセス:
    
        <access origin="http://maps.google.com" />
        

*   すべてのサブドメインに[google.com][2]、たとえば[接続][5]と[docs.google.com][6]へのアクセス:
    
        <access origin="http://*.google.com" />
        

*   たとえば、 [google.com][2]および[developer.mozilla.org][7]の*すべて*のドメインへのアクセス:
    
        <access origin="*" />
        
    
    これは、新しく作成した CLI プロジェクトの既定値です。

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

## アマゾン火 OS ホワイト

プラットフォーム固有のホワイト リストの規則はあります。`res/xml/config.xml`.

## Android のホワイト リスト

プラットフォーム固有のホワイト リストの規則はあります。`res/xml/config.xml`.

**注**: Android 2.3 とドメイン ホワイト リストのみで動作する前に `href` のハイパーリンク、画像、スクリプトなどのリソースも参照されていません。 アプリケーションに挿入されてからスクリプトを避けるために措置を取る。

ホワイト リストに登録して非経由でドメインへの移動 `href` ハイパーリンクにより、アプリケーション内ではなく、既定のブラウザーを開いてページ。(この比較下記の iOS の動作です。)

## iOS ホワイト

プラットフォームのホワイト リスト登録ルールの発見の名前のアプリケーション ディレクトリに `config.xml` ファイル。

起源のようなプロトコルを使わずに指定 `www.apache.org` よりもむしろ `http://www.apache.org` 、すべてのデフォルト、 `http` 、 `https` 、 `ftp` と `ftps` スキーム。

IOS プラットフォーム上のワイルドカードは、 [W3C のウィジェット アクセス][1]仕様よりも柔軟性です。 たとえば、次のアクセスすべてのサブドメインおよびトップレベル ドメインなど、 `.com` と `.net` ：

        <access origin="*.google.*" />
    

ホワイト リストに登録して非経由でドメインへの移動、上述した Android のプラットフォームとは異なり `href` iOS 上のハイパーリンクが、まったく開いてページを防ぎます。

## ブラックベリー 10 ホワイト

ホワイト リスト登録ルールを発見します。`www/config.xml`.

ブラックベリー 10年使用ワイルドカードの次の 2 つの方法で他のプラットフォームによって異なります。

*   によってアクセスできるコンテンツ `XMLHttpRequest` を明示的に宣言する必要があります。 設定 `origin="*"` この場合動作しません。 代わりに、すべての web セキュリティできない可能性がありますを使用して、 `WebSecurity` 好みのブラックベリーの構成で説明：
    
        <preference name="websecurity" value="disable" />
        

*   設定に代わるものとして `*.domain` 、セット、 `subdomains` 属性を `true` 。 設定する必要があります `false` デフォルトで。 たとえば、次のようにアクセスをできます `google.com` 、 `maps.google.com` 、および `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    次の限定にアクセスする `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    ローカルを含むすべてのドメインへのアクセスを指定する `file://` プロトコル。
    
    <access origin="*" subdomains="true" />

（サポートの詳細については、ブラックベリーのマニュアル参照してください[アクセス要素][8].)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 3.1.0 の iOS の変化

前のバージョン 3.1.0、コルドバ iOS 他コルドバのプラットフォームでサポートされているドメイン whilelisting スキームをいくつかの非標準の拡張含まれています。 3.1.0、現在 iOS のホワイト リストは今このドキュメントの上部に記載されているリソースのホワイト リストの構文に準拠します。 変更する必要があります前 3.1.0 からアップグレードする場合にこれらの拡張機能を使用していた、 `config.xml` として前にホワイト リスト登録リソースの同じセットを続行するためにファイル。

具体的には、これらのパターンを更新する必要があります。

*   `apache.org`(プロトコル): これは以前と一致 `http` 、 `https` 、 `ftp` 、および `ftps` プロトコル。 変更" `*://apache.org/*` "に、すべてのプロトコルを含めたり、各プロトコルをサポートする必要がある行が含まれます。

*   `http://apache.*`(ワイルドカード ドメインの終わりに): これは以前すべて上位-レベルの-ドメイン、すべての可能な 2 文字の Tld を含むと一致 (しかしように有用ではないドメイン。 co.uk)。 行することが実際に制御、ホワイト リストに登録する必要がある各 TLD を含めます。

*   `h*t*://ap*he.o*g`(行方不明のランダムな文字のワイルドカード文字): これらはサポートされていません。各ドメインをホワイト リストに実際に必要なプロトコルの行を含めるに変更します。

## Windows Phone のホワイト リスト

アプリの Windows Phone 7 と 8 のホワイト リスト登録ルールの発見 `config.xml` ファイル。

## Tizen ホワイト

アプリのでホワイト リスト登録ルールの発見 `config.xml` ファイル。 プラットフォーム依存して同じ `subdomains` 、黒イチゴ ・ プラットホームとしての属性。 （サポートの詳細については、Tizen のマニュアル参照してください[アクセス要素][9].)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm