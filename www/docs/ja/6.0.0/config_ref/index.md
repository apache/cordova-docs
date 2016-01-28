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

title: Config.xml ファイル
---

# Config.xml ファイル

グローバル構成ファイルを使って、アプリの動作の多くの側面を制御できる `config.xml` 。 このプラットフォームに依存しない XML ファイルは、W3C の[Web アプリのパッケージ化 (ウィジェット)][1]仕様に基づくとコルドバ API のコア機能、プラグイン、およびプラットフォームに固有の設定を指定する拡張に配置されます。

 [1]: http://www.w3.org/TR/widgets/

コルドバ CLI (コマンド ライン インターフェイスで説明します) で作成されたプロジェクトのトップレベル ディレクトリにこのファイルを検出することができます。

        app/config.xml
    

バージョン 3.3.1-0.2.0 の前に、ファイルに存在したことに注意してください `app/www/config.xml` 、ここでそれを持っているがまだサポートされているとします。

プロジェクトをビルドする CLI を使用して、このファイルのバージョン受動的にコピーされます様々 な `platforms/` サブディレクトリ、たとえば。

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

このセクションとクロス プラットフォームのグローバル構成オプションを詳細します。プラットフォーム固有のオプションの次のセクションを参照してください。

*   [iOS 構成](../guide/platforms/ios/config.html)
*   [Android の構成](../guide/platforms/android/config.html)
*   [ブラックベリー 10 構成](../guide/platforms/blackberry10/config.html)

以下に詳述様々 な構成のオプションに加え、アプリケーションのコア セット各ターゲット ・ プラットフォーム用の画像も構成できます。詳細については、アイコンとスプラッシュ画面を参照してください。

## コア構成要素

この例では、既定の `config.xml` は CLI によって生成される `create` コマンドは、コマンド ライン インターフェイスで記述されています。

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

次の構成要素は最上位レベルに表示されます `config.xml` ファイル、およびすべてのサポートされているコルドバ プラットフォームがサポートされています。

*   `<widget>`要素の `id` 属性をアプリの逆ドメイン識別子を提供します、 `version` その完全なバージョン番号のメジャー/マイナー/パッチ表記で表されます。
    
    ウィジェット タグも、すなわち ios 人造人間と CFBundleVersion の versionCode の代替バージョンを指定する属性を持つことができます。詳細については、以下の追加のバージョン管理を参照してください。

*   `<name>`要素をデバイスのホーム画面とアプリ ストア インターフェイス内が表示されますアプリケーションの正式な名前を指定します。

*   `<description>`と `<author>` 要素メタデータおよび app の店のリスト内に表示される連絡先の情報を指定します。

*   省略可能な `<content>` 要素を最上位の web 資産ディレクトリで、アプリの開始ページを定義します。 既定値は `index.html` 、トップレベルのプロジェクトで表示される習慣 `www` ディレクトリ。

*   `<access>`要素は外部ドメインのアプリケーション通信を許可するとのセットを定義します。 上記の既定値の任意のサーバーにアクセスすることができます。 詳細についてはドメイン ホワイト リスト ガイドを参照してください。

*   `<preference>`タグのペアとして様々 なオプションを設定します `name` / `value` の属性。 各設定項目 `name` 小文字は区別されません。 多くの設定は、このページの上部に記載されている特定のプラットフォームに固有です。 次のセクションでは、1 つ以上のプラットフォームに適用される設定を詳細します。

### その他のバージョン管理

Android と iOS の両方、iOS のため、2 番目のバージョン文字列 (または番号) [versionCode][2]の app ストアで目に見える 1 つに加えて Android と[CFBundleVersion を][3]サポートします。 下記の versionCode と CFBundleVersion を明示的に設定する例です。

 [2]: http://developer.android.com/tools/publishing/versioning.html
 [3]: http://stackoverflow.com/questions/4933093/cfbundleversion-in-the-info-plist-upload-error

        <widget id="io.cordova.hellocordova"
          version="0.0.1"
          android-versionCode="7"
          ios-CFBundleVersion="3.3.3">
    

代替バージョンを指定しない場合は、次の既定値が使用されます。

        // assuming version = MAJOR.MINOR.PATCH-whatever
        versionCode = PATCH + MINOR * 100 + MAJOR * 10000
        CFBundleVersion = "MAJOR.MINOR.PATCH"
    

## グローバル設定

次のグローバル設定がすべてのプラットフォームに適用されます。

*   `Fullscreen`画面の上部のステータス バーを非表示にすることができます。既定値は `false` です。例:
    
        <preference name="Fullscreen" value="true" />
        

## マルチプラット フォーム環境の設定

次の設定を 1 つ以上のプラットフォームができないそれらのすべてが適用されます。

*   `DisallowOverscroll`(ブール値、既定値は `false` ): に設定されている `true` ユーザーは過去の先頭または末尾のコンテンツのスクロール時に任意のフィードバックを表示するインターフェイスをしたくないかどうか。
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    人造人間と iOS に適用されます。 IOS の overscroll ジェスチャー原因コンテンツは元の位置に戻って跳ねます。 Android 上で彼らはコンテンツの上部または下部のエッジに沿ってより微妙な光る効果を生成します。

*   `BackgroundColor`: アプリケーションの背景色を設定します。 次の 3 バイトは、アルファ チャネルを表す最初のバイトと 4 バイトの 16 進値と標準の RGB 値をサポートしています。 この例では、青を指定します。
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    アンドロイドおよびブラックベリーに適用されます。たとえば、*すべて*のプラットフォームそれ以外の場合利用可能な CSS をオーバーライドします。`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(ブール値、既定値は `false` ): に設定されている `true` 貢献、キーボード上に表示される追加のツールバーを非表示にするユーザーを別の 1 つのフォーム入力から移動します。
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    ブラックベリーに適用されます。

*   `orientation`(文字列、既定値を `既定値`): 方向をロックし、インターフェイスから回転の向きの変更に応答しないようにすることができます。 可能な値は、`default`、`landscape` または `portrait` です。 例:
    
        <preference name="Orientation" value="landscape" />
        
    
    また、`< プラットフォーム >` 要素内で `< 優先順位 >` 要素を配置する場合は任意のプラットフォーム固有の方向の値を指定できます。
    
        <platform name="android">
            <preference name="Orientation" value="sensorLandscape" />
        </platform>
        
    
    アンドロイド, iOS の, WP8、アマゾン火 OS や Firefox の OS に適用されます。
    
    **注**: `既定` 値は、コルドバはその既定の動作にフォールバックするプラットフォームをできるようにプラットフォームのマニフェスト/構成ファイルから向き設定エントリを削除します。
    
    IOS 用, ランドス ケープ モード & 両方の肖像画を指定するを使用しますプラットフォーム特定の値`すべて`。
    
        <platform name="ios">
            <preference name="Orientation" value="all" />
        </platform>
        
## *機能*要素

CLI を使用してアプリケーションを構築する場合は、デバイス Api を有効にする`プラグイン`コマンドを使用します。 これは`< feature >`要素は、ワークフローに適用されないのでトップレベルの`config.xml`ファイルを変更されません。 直接で、SDK とソースとしてプラットフォーム固有の`config.xml`ファイルを使用して作業する場合は、デバイス レベルの Api と外部プラグインを有効にする`< 機能 >`タグを使用します。 彼らはしばしばプラットフォーム固有の`config.xml`ファイルにカスタム値で表示されます。 たとえば、ここでは Android プロジェクトのデバイス API を指定する方法です。

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

ここでは、iOS のプロジェクトのための要素の表示方法です。

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

各機能を指定する方法の詳細については、API リファレンスを参照してください。プラグインについてはプラグイン開発ガイドを参照してください。

## *プラットフォーム*要素

CLI を使用して、アプリケーションを構築するとき、好みや特定のプラットフォームに固有の他の要素を指定する必要が時々 です。 `< atform >`要素を使用すると、単一のプラットフォーム固有`config.xml`ファイルでのみ表示される構成を指定します。 たとえば、ここでは唯一 android はフルスクリーン設定を使用する必要がありますを指定する方法です。

        <platform name="android">
            <preference name="Fullscreen" value="true" />
        </platform>
    

## *hook*の要素

特定のアクションが発生したときにコルドバで呼び出されるカスタム スクリプトを表します (たとえば、プラグインを追加またはプラットフォーム準備ロジックが呼び出されます)。 これは、コルドバの既定の機能を拡張する必要が便利です。 詳細についてはフックのガイドを参照してください。

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />