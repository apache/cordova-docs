* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# ホワイト リスト ガイド

ホワイト リスト登録のドメインのアクセスを制御するセキュリティ モデルは、アプリケーションが制御なしの外部ドメインに。 コルドバの既定のセキュリティ ポリシーは、任意のサイトにアクセスをできます。 生産へアプリケーションを移動する前に、ホワイト リストを策定し、特定のネットワーク ドメインおよびサブドメインにアクセスできるようにする必要があります。

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

Https プロトコルを使用してなどまたは国固有のドメインを別の url にいくつかのウェブサイトが自動的にリダイレクトをホームページからことを留意してください。 たとえば http://www.google.com https://www.google.com で SSL/TLS を使用するリダイレクトされ、さらに https://www.google.co.uk などの地理にリダイレクト可能性があります。 このようなシナリオは、初期の要件では、変更または追加のホワイト リストのエントリーを必要があります。 ホワイト リストを構築するいると、これをご検討ください。

メモ、ホワイト リストにメイン コルドバ webview にのみ適用されます InAppBrowser webview またはシステム web ブラウザーで開くリンクには適用されません。

## アマゾン火 OS ホワイト

プラットフォーム固有のホワイト リスト登録ルールの `res/xml/config.xml` で発見します。.

## Android のホワイト リスト

プラットフォーム固有のホワイト リスト登録ルールの `res/xml/config.xml` で発見します。.

**注**: `href` ハイパーリンクについてのみ動作アンドロイド 2.3 とドメイン ホワイト リスト登録の前に画像やスクリプトなどのリソース参照されていません。 アプリケーションに挿入されてからスクリプトを避けるために措置を取る。

**注**: ように外部 Url を防ぐために `mailto:` コルドバ 3.6.0、現在コルドバ webview で開かれているから指定 `起源 ="*"` 場中 http および https プロトコルのルールが追加されます。 追加のカスタム プロトコルへのアクセスが必要な場合必要がありますもしてに追加明示的にホワイト リストに。 また「外部アプリケーション ホワイト リスト」URL を外部アプリケーションの起動の詳細について下記参照してください。

**注**: いくつかネットワーク要求通過しないコルドバ ホワイト リスト。 < ビデオ > これが含まれていますと < オーディオ > 資源、WebSocket 接続 (Android 4.4 +)、および多分他非 http 要求。 アンドロイド 4.4 +、それらのリソースへのアクセスを制限する HTML ドキュメントで、[CSP][8] ヘッダーを含めることができます。 Android の古いバージョンはそれらを制限できないことがあります。

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### 外部アプリケーションのホワイト リスト

コルドバ 3.6.0 を制限するため、Url は、外部アプリケーションを起動する許可されている 2 番目ホワイトを紹介します。 コルドバ、http 以外のすべての Url の以前のバージョンのよう `mailto:`、`geo:`、`sms:` と `intent`、暗黙的に <a> タグのターゲットをことを許されました。 アプリケーション情報をリークする可能性があるのため、XSS の脆弱性により、攻撃者に任意のリンクの構築これらの Url でなければなりません同様、ホワイト リストに登録コルドバ 3.6.0 を開始します。

外部アプリケーションを起動する URL パターンをできるように、`起動外部` 属性セットを使用して `config.xml` ファイルの < アクセス > タグを使用します。

例:

*   リンクを許可 SMS メッセージを送信します。
    
        <access origin="sms:*" launch-external="yes" />
        

*   リンクを許可マップを開きます。
    
        <access origin="geo:*" launch-external="yes" />
        

*   リンクを許可 example.com を外部のブラウザーで開くには。
    
        <access origin="http://example.com/*" launch-external="yes" />
        

*   すべてのホワイト リストに登録して非ウェブサイトを外部のブラウザーで開くように： （これはホワイト リストに登録して非 Url の以前の動作と同じ)
    
        <access origin="http://*" launch-external="yes" />
        <access origin="https://*" launch-external="yes" />
        

*   アクセスを許可する (推奨しません) コルドバ 3.5.0 ポリシーに戻すすべての Url:
    
        <access origin="*" launch-external="yes" />
        

Interal ホワイト リストは、まず、テストからアプリケーション内の URL に移動するときや URL がない場合があるホワイト リストに登録、外部のホワイト リストはテストしました。 つまり、いずれかの `http:` または `https:` 両方のホワイト リストに一致する Url 外部ブラウザーを起動するのではなく、コルドバ アプリケーション内に開かれます。

## iOS ホワイト

プラットフォームのホワイト リスト登録の規則は、名前付きアプリケーション ディレクトリの `config.xml` ファイルで発見されます。

起源は、`http://www.apache.org` ではなく、`www.apache.org` などのプロトコルなしすべての `http`、`https`、`ftp`、および `ftps` のスキームに既定で指定されました。

IOS プラットフォーム上のワイルドカードは、[W3C のウィジェット アクセス][1] 仕様よりも柔軟性です。 たとえば、次のアクセスすべてのサブドメイン、`.com` や `.net` といったトップレベル ドメイン。

        <access origin="*.google.*" />
    

`Href` 経由でホワイト リストに登録して非ドメインへの移動、上述した Android のプラットフォームとは異なり iOS 上のハイパーリンクを防ぎますページすべてで開きます。

## ブラックベリー 10 ホワイト

`www/config.xml` でホワイト リスト登録ルールの発見します。.

ブラックベリー 10年使用ワイルドカードの次の 2 つの方法で他のプラットフォームによって異なります。

*   によってアクセスできるコンテンツ `XMLHttpRequest` 明示的に宣言する必要があります。 設定 `origin="*"` この場合動作しません。 また、すべての web セキュリティできない可能性がありますを使用して、 `WebSecurity` 好みのブラックベリーの構成で説明：
    
        <preference name="websecurity" value="disable" />
        

*   設定に代わるものとして `*.domain` 、セット、 `subdomains` 属性を `true` 。 設定する必要があります `false` デフォルトで。 たとえば、次のようにアクセスをできます `google.com` 、 `maps.google.com` 、および `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    次の限定にアクセスする `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    ローカルを含むすべてのドメインへのアクセスを指定する `file://` プロトコル。
    
    <access origin="*" subdomains="true" />

（サポートの詳細については、マニュアル参照してくださいブラックベリーの [アクセス要素][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox の OS

Firefox の OS でない概念はホワイト リストの特定のドメインです。 代わりに [SystemXHR][10] と呼ばれる特別なアクセス許可です。 このアクセス許可を `config.xml` に追加する必要があります。

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

`XMLHttpRequest` オブジェクトは 2 つのパラメーター `mozAnon` と `mozSystem` でインスタンス化する必要があります。

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

他のプラットフォーム用の違いはありませんので、このソリューションは透過的です。

## 3.1.0 の iOS の変化

前のバージョン 3.1.0、コルドバ iOS 他コルドバのプラットフォームでサポートされているドメイン whilelisting スキームをいくつかの非標準の拡張含まれています。 3.1.0、現在 iOS のホワイト リストは今このドキュメントの上部に記載されているリソースのホワイト リストの構文に準拠します。 Pre 3.1.0 からアップグレードする、これらの拡張機能を使用していた場合は、同じリソースのセットとして前にホワイト リスト登録を続行するために、`config.xml` ファイルを変更する必要があります。

具体的には、これらのパターンを更新する必要があります。

*   " `apache.org` "(プロトコル): これは以前と一致 `http` 、 `https` 、 `ftp` 、および `ftps` プロトコル。 変更" `*://apache.org/*` "に、すべてのプロトコルを含めたり、各プロトコルをサポートする必要がある行が含まれます。

*   " `http://apache.*` "(ワイルドカード ドメインの終わりに): これは以前すべて上位-レベルの-ドメイン、すべての可能な 2 文字の Tld を含むと一致 (有用ではないドメインのようにしかし。 co.uk)。 行することが実際に制御、ホワイト リストに登録する必要がある各 TLD を含めます。

*   " `h*t*://ap*he.o*g` "(行方不明のランダムな文字のワイルドカード文字): これらはサポートされていません; ドメインごとに行を含めるし、したプロトコルへの変更は、実際にホワイト リストする必要があります。

## Windows Phone のホワイト リスト

Windows Phone 8 のホワイト リスト登録の規則は、アプリケーションの `config.xml` ファイルで発見されます。

## Tizen ホワイト

ホワイト リスト登録の規則は、アプリケーションの `config.xml` ファイルで発見されます。 プラットフォームは、黒イチゴ ・ プラットホームと同じ `サブドメイン` 属性に依存します。 （サポートの詳細については、マニュアル参照してください Tizen の [access の要素][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm