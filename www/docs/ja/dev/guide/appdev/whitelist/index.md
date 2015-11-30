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

ホワイト リスト登録のドメインのアクセスを制御するセキュリティ モデルは、アプリケーションが制御なしの外部ドメインに。 コルドバは、外部サイトへのアクセスを定義する構成可能なセキュリティ ポリシーを提供します。 既定では、新しいアプリ任意のサイトへのアクセスを許可するように構成されています。 生産へアプリケーションを移動する前に、ホワイト リストを策定し、特定のネットワーク ドメインおよびサブドメインにアクセスできるようにする必要があります。

Android と iOS の （現在の 4.0 リリース) は、コルドバのセキュリティ ポリシーはプラグイン インター フェース経由で拡張可能です。 良いセキュリティとコルドバの以前のバージョンよりも構成を提供するので、アプリ[コルドバ プラグイン ホワイト リスト][1]を使用してください。 それはホワイト リスト プラグインを実装することが可能ですが、アプリは非常に特定のセキュリティ ポリシーの必要性を持っていない限りは推奨されません。 使用法と構成[コルドバ プラグイン ホワイト リスト][1]の詳細を参照してください。

 [1]: https://github.com/apache/cordova-plugin-whitelist

他のプラットフォーム用コルドバは特定のドメインへのネットワーク アクセスを有効にするアプリの`config.xml`ファイル内で`<access>`要素に依存している[W3C のウィジェットのアクセス][2]仕様に準拠しています。 コマンド ライン インターフェイスで記述された CLI ワークフローに依存するプロジェクトのためこのファイルにあるプロジェクトの最上位ディレクトリ それ以外の場合、プラットフォーム固有の開発パス場所は以下のセクションに表示されます。 （各プラットフォーム上のさまざまなプラットフォームのガイドの詳細を参照）。

 [2]: http://www.w3.org/TR/widgets-access/

次の例では、 `<access>`ホワイト リストの構文。

*   [Google.com][3]へのアクセス:
    
        <access origin="http://google.com" />
        

*   安全な[google.com][4]へのアクセス ( `https://` )。
    
        <access origin="https://google.com" />
        

*   サブドメイン[maps.google.com][5]へのアクセス:
    
        <access origin="http://maps.google.com" />
        

*   すべてのサブドメインに[google.com][3]、たとえば[接続][6]と[docs.google.com][7]へのアクセス:
    
        <access origin="http://*.google.com" />
        

*   たとえば、 [google.com][3]および[developer.mozilla.org][8]の*すべて*のドメインへのアクセス:
    
        <access origin="*" />
        
    
    これは、新しく作成した CLI プロジェクトの既定値です。

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

Https プロトコルを使用してなどまたは国固有のドメインを別の url にいくつかのウェブサイトが自動的にリダイレクトをホームページからことを留意してください。 たとえば http://www.google.com https://www.google.com で SSL/TLS を使用するリダイレクトされ、さらに https://www.google.co.uk などの地理にリダイレクト可能性があります。 このようなシナリオは、初期の要件では、変更または追加のホワイト リストのエントリーを必要があります。 ホワイト リストを構築するいると、これをご検討ください。

メモ、ホワイト リストにメイン コルドバ webview にのみ適用されます InAppBrowser webview またはシステム web ブラウザーで開くリンクには適用されません。

## アマゾン火 OS ホワイト

プラットフォーム固有のホワイト リスト登録ルールの `res/xml/config.xml` で発見します。.

## Android のホワイト リスト

上記のように、[コルドバ プラグイン ホワイト リスト][1]の詳細を参照してください。 コルドバ アンドロイド 4.0.0 の前に、このドキュメントの古いバージョンを参照してください。

## iOS ホワイト

上記のように、[コルドバ プラグイン ホワイト リスト][1]の詳細を参照してください。 コルドバ ios 4.0.0 の前に、このドキュメントの古いバージョンを参照してください。

## ブラックベリー 10 ホワイト

`Www/config.xml`でホワイト リスト登録ルールの発見します。.

ブラックベリー 10年使用ワイルドカードの次の 2 つの方法で他のプラットフォームによって異なります。

*   `XMLHttpRequest`によってアクセスできるコンテンツを明示的に宣言する必要があります。 設定`origin="*"`この場合動作しません。 また、すべての web セキュリティできない可能性がありますブラックベリーの構成で説明されている`WebSecurity`設定を使用しています。
    
        <preference name="websecurity" value="disable" />
        

*   設定`*.domain`に代わるものとして追加`サブドメイン`属性を`true`に設定します。 それはデフォルトで`false`に設定する必要があります。 たとえば、次のアクセス許可を`google.com`、 `maps.google.com`と`docs.google.com`：
    
        <access origin="http://google.com" subdomains="true" />
        
    
    `Google.com`へ次のナロウズ アクセス:
    
        <access origin="http://google.com" subdomains="false" />
        
    
    ローカル`file://`プロトコルを含むすべてのドメインへのアクセスを指定します。
    
        <access origin="*" subdomains="true" />
        

（サポートの詳細については、マニュアル参照してくださいブラックベリーの[アクセス要素][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

Firefox の OS でない概念はホワイト リストの特定のドメインです。 代わりに[SystemXHR][10]と呼ばれる特別なアクセス許可です。 このアクセス許可を`config.xml`に追加する必要があります。

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

`XMLHttpRequest`オブジェクトは 2 つのパラメーター `mozAnon`と`mozSystem`でインスタンス化する必要があります。

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

他のプラットフォーム用の違いはありませんので、このソリューションは透過的です。

## Windows Phone のホワイト リスト

Windows Phone 8 のホワイト リスト登録の規則は、アプリケーションの`config.xml`ファイルで発見されます。

## Tizen ホワイト

ホワイト リスト登録の規則は、アプリケーションの`config.xml`ファイルで発見されます。 プラットフォームは、黒イチゴ ・ プラットホームと同じ`サブドメイン`属性に依存します。 （サポートの詳細については、マニュアル参照してください Tizen の[access の要素][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm