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

title: プラグイン仕様
---

# プラグイン仕様

`plugin.xml`ファイル内の XML ドキュメントは、 `plugins` 名前空間: `http://apache.org/cordova/ns/plugins/1.0` 。 トップが含まれています `plugin` のプラグインを定義する要素とプラグインの構造を定義する子要素。

サンプル プラグイン要素:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *プラグイン*要素

`plugin`要素は、プラグイン マニフェストのトップレベルの要素です。これは次の属性の特徴：

*   `xmlns`(必須): プラグイン名前空間 `http://apache.org/cordova/ns/plugins/1.0` 。 ドキュメントに追加するタグなどの他の名前空間から XML が含まれる場合、 `AndroidManifest.xml` ファイル、それらの名前空間はトップレベルの要素にも含めなければなりません。

*   `id`(必須): 逆ドメイン スタイルのようなプラグインの識別子`com.alunny.foo`

*   `version`(必須): 次のメジャー マイナー パッチ スタイルの正規表現に一致するプラグインのバージョン番号。
    
        ^\d+[.]\d+[.]\d+$
        

## *エンジン*と*エンジン*の要素

子要素は、 `<engines>` 要素のこのプラグインをサポートしている Apache コルドバ ベースのフレームワークのバージョンを指定します。例:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

同様に、 `<plugin>` 要素の `version` 属性、指定されたバージョン文字列は正規表現に適合する主要マイナー パッチ文字列と一致する必要があります。

        ^\d+[.]\d+[.]\d+$
    

エンジン要素ファジーマッチの繰り返しを避けるために、基になるプラットフォームが更新されたときにメンテナンスを減らすためにも指定できます。 ツールの最小値をサポートする必要があります `>` 、 `>=` 、 `<` 、 `<=` 、例えば。

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

`<engine>`タグはまたすべての主要なプラットフォーム上に存在するコルドバのデフォルト サポートをしています。 指定する、 `cordova` エンジン タグは任意のプラットフォーム上のコルドバのすべてのバージョンがエンジンのバージョン属性を満たす必要がありますを意味します。 キャッチ オールをオーバーライドするために、特定のプラットフォームとバージョンをリストすることも可能性があります `cordova` エンジン。

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

したエンジンの既定の一覧をここでは、 `<engine>` タグのサポート。

*   `cordova`
*   `cordova-plugman`
*   `cordova-amazon-fireos`
*   `cordova-android`
*   `cordova-ios`
*   `cordova-blackberry10`
*   `cordova-wp8`
*   `cordova-windows8`
*   `android-sdk` // returns the highest Android api level installed
*   `apple-xcode` // returns the xcode version 
*   `apple-ios` // returns the highest iOS version installed
*   `apple-osx` // returns the OSX version
*   `blackberry-ndk` // returns the native blackberry SDK version

カスタム Apache コルドバ ベース フレームワークはエンジン タグの下に表示する必要がありますを指定しましょう。

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

カスタム Apache コルドバ ベース フレームワーク エンジン要素に次の属性が含まれている必要があります： `name` 、 `version` 、 `scriptSrc` と`platform`.

*   `name`(必須): カスタム フレームワークの人間が判読できる名前。

*   `version`(必須): バージョンをインストールするために、フレームワークが必要です。

*   `scriptSrc`(必須): カスタム フレームワークのバージョンが plugman を指示するスクリプト ファイル。 理想的には、このファイルは、プラグイン ディレクトリの最上位レベルのディレクトリ内にする必要があります。

*   `platform`(必須): あなたのフレームワークをサポートするプラットフォーム。 ワイルドカードを使用することができる `*` のようなパイプ文字と複数を指定すべてのプラットフォームでサポートされていることに、 `android|ios|blackberry10` またはのようなちょうど 1 つのプラットフォーム`android`.

plugman は、そのターゲット プロジェクトがエンジンの制約を満たしていない任意のプラグインのためのゼロ以外のコードを中止します。

いいえの場合 `<engine>` タグを指定すると、plugman は盲目的に指定したコルドバ プロジェクト ディレクトリにインストールしようとしました。

## *名前*要素

テキスト コンテンツを持つプラグインの名前が含まれているプラグインを人間が判読できる名前。たとえば。

    <name>Foo</name>
    

この要素はない （まだ） ローカライズを処理します。

## *説明*要素

プラグインを人間が判読できる説明。要素のテキスト コンテンツには、プラグインの説明が含まれます。例:

    <description>Foo plugin description</description>
    

この要素はない （まだ） ローカライズを処理します。

## *著者*要素

プラグインの作成者の名前。要素のテキスト コンテンツには、プラグインの作者の名前が含まれます。例:

    <author>Foo plugin description</author>
    

## *キーワード*要素

プラグインのキーワード。要素のテキスト コンテンツには、プラグインを記述するコンマで区切られたキーワードが含まれます。例:

    <keywords>foo,bar</keywords>
    

## *ライセンス*要素

プラグインのライセンス。要素のテキスト コンテンツには、プラグインのライセンスが含まれます。例:

    <license>Apache 2.0 License</license>
    

## *資産*要素

1 つまたは複数の要素に Cordova アプリをコピーするディレクトリまたはファイル一覧 `www` ディレクトリ。例:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

すべて `<asset>` タグを両方必要とする `src` と `target` の属性。 Web だけのプラグインが含まれている主 `<asset>` の要素。 どんな `<asset>` 要素内にネストされた `<platform>` 要素プラットフォーム固有の web 資産を指定して、以下のとおりです。 属性は次のとおりです。

*   `src`(必須): ファイルまたはディレクトリが含まれているプラグイン パッケージ相対的に、 `plugin.xml` ドキュメント。 指定したファイルが存在しない場合 `src` 場所、plugman 停止しインストール プロセスを取り消し、競合に関する通知を発行および 0 以外のコードで終了します。

*   `target` (required):
    
    ファイルまたはディレクトリの場所 Cordova アプリで相対的に、 `www` ディレクトリ。 資産は、たとえば、サブディレクトリを対象とすることができます。
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    作成、 `js/experimental` ディレクトリ内で、 `www` ディレクトリ、場合を除き、既に存在する、その後、コピー、 `new-foo.js` ファイルおよびそれの名前を変更 `foo.js` 。 ターゲットの場所で、ファイルが既に存在する場合 plugman 停止インストール プロセスを取り消し、競合に関する通知を発行し、0 以外のコードで終了します。

## *js モジュール*要素

ほとんどのプラグインには、1 つまたは複数の JavaScript ファイルが含まれます。 各 `<js-module>` タグ、JavaScript ファイルなどに対応し、なくなりますプラグインのユーザーを追加する、 `<script>` の各ファイルのタグ。 一方 `<asset>` タグは、単にプラグインのサブディレクトリからファイルをコピー `www` 、 `<js-module>` タグは、はるかに洗練されました。 彼らはこのようになります：

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

上記の例ではプラグインをインストールするとき `socket.js` にコピー `www/plugins/my.plugin.id/socket.js` にエントリとして追加されます `www/cordova_plugins.js` 。 読み込み時にコード `cordova.js` XHR を使用して各ファイルの読み取りを注入、 `<script>` タグを HTML に。 それを壊したくまたは以下に示すように適切なマージ マッピングを追加します。

持つファイルをラップ*しない* `cordova.define` 、それが自動的に追加されます。 モジュールで、閉鎖に包まれて `module` 、 `exports` と `require` スコープでは、AMD モジュールのために正常です。

詳細は `<js-module>` タグ。

*   `src`基準にプラグイン ディレクトリ内のファイルを参照して、 `plugin.xml` ファイル。

*   `name`モジュール名の最後の部分を提供します。 それは一般的にどのようにし、使用する場合にのみ問題 `cordova.require` 、プラグイン、JavaScript コードでの他の部分をインポートします。 モジュール名、 `<js-module>` は、あなたのプラグインの `id` の値が続く `name` 。 上記の例のために、 `id` の `chrome.socket` 、モジュール名が、`chrome.socket.Socket`.

*   3 つのタグ内で許可される `<js-module>` :
    
    *   `<clobbers target="some.value"/>`示す、 `module.exports` が挿入、 `window` オブジェクトと `window.some.value` 。 多く持つことができます `<clobbers>` あなたのよう。 任意のオブジェクトでは利用できません `window` が作成されます。
    
    *   `<merges target="some.value"/>`モジュールで既存の値にマージすることを示します `window.some.value` 。 任意のキーが既に存在する場合、モジュールのバージョンは、オリジナルを上書きします。 多く持つことができます `<merges>` あなたのよう。 任意のオブジェクトでは利用できません `window` が作成されます。
    
    *   `<runs/>`手段をコードで指定する必要があります `cordova.require` にインストールされていない、 `window` オブジェクト。 イベント ハンドラーのアタッチ、モジュールを初期化するとき、これは役に立つまたはそれ以外の場合。 のみ最大 1 つを持つことができます `<runs/>` タグ。 含む注意してください、 `<runs/>` 、 `<clobbers/>` または `<merges/>` は以来、彼らも冗長で `cordova.require` モジュール。
    
    *   空 `<js-module>` まだ読み込み、他モジュール経由でアクセスできます。`cordova.require`.

場合 `src` plugman 停止インストールを逆に、問題の通知を発行し、0 以外のコードで終了します、既存のファイルに解決されません。

ネスト `<js-module>` 内の要素 `<platform>` プラットフォーム固有 JavaScript モジュール バインディングを宣言します。

## *依存関係*要素

`<dependency>`タグを使用すると、現在のプラグインが依存している他のプラグインを指定できます。 中に将来のバージョンにアクセスするそれらのプラグイン ・ リポジトリーから、短期的にプラグインが直接参照 Url として `<dependency>` タグ。 次のようにフォーマットされています。

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: プラグインの ID を提供します。 それはグローバルにユニークで、逆ドメイン スタイルで表現をする必要があります。 これらの制限のどちらもが現在適用されている間、彼らは将来的にあります。

*   `url`: プラグインの URL。これはどの plugman のクローンを作成しようとすると、git リポジトリを参照ください。

*   `commit`: これは理解の git 参照 `git checkout` : 分岐またはタグ名 (例えば、 `master` 、 `0.3.1` )、またはコミット ハッシュ (例えば、`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Git リポジトリのサブディレクトリとして対象となるプラグイン依存関係が存在することを指定します。 いくつか関連のプラグインを含むリポジトリをことができますので、これは便利、それぞれは個別に指定されました。

将来的には、バージョンの制約が導入され、プラグイン ・ リポジトリーは明示的な Url の代わりに名前でフェッチをサポートするために存在します。

### 相対的な依存パス

設定した場合、 `url` の `<dependency>` タグを `"."` を提供し、 `subdir` 、従属プラグインをインストールする同じローカルからまたは親プラグインとしてリモート git リポジトリを指定する、 `<dependency>` タグ。

注意してください、 `subdir` 常に親のプラグインではないの git リポジトリの*ルート*からの相対パスを指定します。 これは、それを直接ローカルのパスで、プラグインをインストールする場合でも当てはまります。 Plugman は、git リポジトリのルートを検索し、そこから他のプラグインを検索します。

## *プラットフォーム*要素

`<platform>`タグが関連付けられているネイティブ コードまたはその構成ファイルへの変更を必要とするプラットフォームを識別します。 この仕様を使用してツールはサポートされているプラットフォームを識別およびコルドバのプロジェクトにコードをインストールできます。

プラグインなし `<platform>` タグは JavaScript だけ、したがって、すべてのプラットフォームでインストール可能と見なされます。

サンプル プラットフォーム タグ:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

必要な `name` 属性を識別します、プラットフォーム サポートされて、そのプラットフォームを要素の子に関連付けます。

プラットフォーム名は小文字でなければなりません。選択として任意のプラットフォーム名はとおりです。

*   アマゾン fireos
*   アンドロイド
*   blackberry10
*   ios
*   wp8
*   windows8

## *ソース ファイル*要素

`<source-file>`要素をプロジェクトにインストールする必要があります実行可能なソース コードを識別します。例:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

次の属性をサポートしています。

*   `src`(必須): 相対的なファイルの場所 `plugin.xml` 。 場合は、 `src` ファイルが見つからないため、plugman 停止インストールを反転し問題について通知を発行し、0 以外のコードで終了します。

*   `target-dir`: ディレクトリをコルドバ プロジェクトのルートを基準にしてファイルをコピーする必要があります。 実際には、これはどこでファイル Java ベースのプラットフォームの最も重要な `com.alunny.foo` パッケージは内に配置する必要があります、 `com/alunny/foo` ディレクトリ。 ソース ディレクトリが重要ではないプラットフォームでこの属性を省略する必要があります。
    
    資産と同様場合、 `target` の `source-file` 既存ファイルを上書きする、plugman 停止インストールを反転し問題について通知を発行し、0 以外のコードで終了します。

*   `framework`(iOS のみ): 場合に設定 `true` 、またフレームワークとして指定したファイルをプロジェクトに追加します。

*   `compiler-flags`(iOS のみ): 場合は、特定のソース ファイルの指定したコンパイラ フラグを割り当てます。

## *設定ファイル*要素

ドキュメントに変更を行う場所、および何を変更する必要があります変更する XML ベースの構成ファイルを示します。

この要素を変更するためにテストされている 2 つのファイルの種類は `xml` と `plist` ファイル。

`config-file`要素はのみ、XML ドキュメントのツリーに新しい子を追加することができます。子供たちは、ターゲット ドキュメントに挿入される XML リテラルです。

XML の例：

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

たとえば、 `plist` ：

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

次の属性をサポートしています。

*   `target`:
    
    変更するファイルとコルドバ プロジェクトのルートからの相対パスです。
    
    ターゲットは、ワイルドカードを含めることができます ( `*` ) 要素。この場合、再帰的に plugman プロジェクトのディレクトリ構造を検索し、最初に一致を使用します。
    
    IOS では、プロジェクトのルート ディレクトリを基準にして構成ファイルの場所が不明のターゲットを指定すること `config.xml` を解決します。`cordova-ios-project/MyAppName/config.xml`.
    
    指定したファイルが存在しない場合、ツールは構成の変更は無視され、インストールが続行されます。

*   `parent`構成ファイルに追加する要素の親を参照する XPath セレクター: に。 絶対セレクターを使用する場合は、ワイルドカードを使用できます ( `*` ) などのルート要素を指定するのには`/*/plugins`.
    
    `plist`ファイル、 `parent` 指定した XML を挿入する親キーの下で決定します。
    
    セレクターが指定されたドキュメントの子を解決しない、ツールが停止し逆インストール プロセスは、警告し、0 以外のコードで終了します。

*   `after`: XML スニペットを追加する後受け入れられた兄弟の優先順位一覧。 [Http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement][1]のような XML 要素の厳密な順序を必要とするファイルの変更を指定するために役立ちます

 [1]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement

Windows プラットフォーム (いずれも省略可能) 2 つの追加属性をサポートしているメタ名前`package.appxmanifest`に影響を与える場合：

`device-target`属性を示す、のみが含まれている指定されたターゲット デバイスの種類を作成する場合。 サポートされる値は`win`、`phone`、または`all`.

`versions`属性は、特定のバージョンの Windows 用のアプリ マニフェストは指定されたバージョン文字列と一致するバージョンのため変更する必要があることを示します。 値は任意の有効なノードのセマンティック バージョン範囲の文字列にすることができます。

これらの Windows の特定の属性を使用しての例:

    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="<8.1.0">
        <Capability Name="picturesLibrary" />
        <DeviceCapability Name="webcam" />
    </config-file>
    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
        <DeviceCapability Name="webcam" />
    </config-file>
    

上記の例では pre 8.1 プラットフォームを設定します (Windows 8 具体的）`ウェブカメラ`デバイス機能と、 `picturesLibrary`の一般的な機能が必要と`ウェブカメラ`デバイス機能を Windows Phone を構築する Windows 8.1 プロジェクトにのみ適用されます。 Windows デスクトップ 8.1 システムは変更されません。

## *プラグイン plist*要素

これは*古い*コルドバ ios 2.2.0 へとの下にのみ適用されます。コルドバの新しいバージョンの`< ファイル >`タグを使用します。

例:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

キーと iOS コルドバ プロジェクトで正しい`AppInfo.plist`ファイルに追加する値を指定します。たとえば。

    <plugins-plist key="Foo" string="CDVFoo" />
    

## *リソース ファイル*と*ヘッダー ファイル*の要素

ソース ファイルのようなが iOS などのプラットフォームのために特別にソース ファイル、ヘッダー、およびリソース間区別します。iOS の例:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Android の例:

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
    

## *lib ファイル*要素

ブラックベリー 10 などのプラットフォームのために特別にしかし、ソース、リソース、およびヘッダー ファイルのようなユーザー生成ライブラリを使用します。 例:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

サポートされている属性:

*   `src`(必須): 相対的なファイルの場所 `plugin.xml` 。 場合 `src` が見つからない plugman 停止しインストール、その問題について警告を問題を反転し、0 以外のコードで終了します。

*   `arch`: 対象のアーキテクチャ、 `.so` ファイルが作成されて、どちらか `device` または`simulator`.

Windows プラットフォーム用 `<lib-file>` 要素は、`< SDKReference >` 生成された Windows プロジェクト ファイルに含めることができます。

サポートされている属性:

*   `src`(必須): を含むように SDK の名前 (の値として使用されますが、 `Include` 属性の生成された `<SDKReference>` 要素)。

*   `arch`: 示す、 `<SDKReference>` 指定されたアーキテクチャを構築するときにだけ含まれるべき。 サポートされている値は、 `x86` 、 `x64` または`ARM`.

*   `device-target`: 示す、 `<SDKReference>` 指定されたターゲット デバイスの種類の構築時にのみ含まれるべき。 サポートされている値は、 `win` (または `windows` )、 `phone` または`all`.

*   `versions`: 示す、 `<SDKReference>` 指定されたバージョン文字列と一致するバージョンを構築するときにだけ含まれるべき。 値は、任意の有効なノード セマンティック バージョン範囲の文字列を指定できます。

例:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *フレームワーク*要素

プラグインが依存フレームワーク (通常 OS/プラットフォームの一部) を識別します。

省略可能な`custom`属性がフレームワークはプラグイン ファイルの一部として含まれているかどうかを示すブール値 (こうだはシステム フレームワークではない)。

### iOS のための*framework*

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    

省略可能な`weak`属性はフレームワークが弱リンクする必要があるかどうかを示すブール値です。デフォルトは`false`.

### 人造人間のための*framework*

(Cordova-android@4.0.0) 現在のアンドロイド、Maven 依存関係を含めるか、バンドルされているライブラリ プロジェクトを含める*framework*タグが使用されます。

例:

    <!-- Depend on latest version of GCM from play services -->
    <framework src="com.google.android.gms:play-services-gcm:+" />
    <!-- Depend on v21 of appcompat-v7 support library -->
    <framework src="com.android.support:appcompat-v7:21+" />
    <!-- Depend on library project included in plugin -->
    <framework src="relative/path/FeedbackLib" custom="true" />
    

*framework*は、メイン プロジェクトの .gradle ファイルに含まれるサブ カスタム .gradle ファイルを持っている使用もできます。

    <framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
    

Pre-android@4.0.0 (ANT ベースのプロジェクト): のため

追加するフレームワークの種類を示す文字列`type`はオプションの属性です。 現在は`projectReference`がサポートされていると Windows 用のみ。 使用して`custom='true'`と`type='projectReference'` 、コンパイルに追加されます + コルドバ プロジェクトの手順をリンクするプロジェクトへの参照を追加します。 これは本質的に参照するコルドバ アプリケーションである依存関係として構築されている明示的に 'custom' フレームワーク複数のアーキテクチャが対象にする唯一の方法は現在です。

オプションの`parent`は、追加参照するサブプロジェクトを含むディレクトリへの相対パスを設定します。 既定値は`.`、すなわちアプリケーション プロジェクト。 この例でようなサブ プロジェクト間の参照を追加することができます。

    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

### Windows のための*framework*

Windows プラットフォームは、絞り込むときにフレームワークが含まれてする必要があります (すべて省略可能) の 3 つの追加属性をサポートします。

    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

`arch`の属性は、指定されたアーキテクチャを構築するときに、フレームワークを含めるだけあることを示します。 サポートされる値は `x 86`、`x64` または `ARM`.

`device-target`属性は、指定されたターゲット デバイス タイプを作成するときに、フレームワークを含めるだけあることを示します。 サポートされる値は `win` (または `windows`) `phone` または `all`.

`versions`属性は、指定されたバージョン文字列と一致するバージョンを構築するときに、フレームワークを含めるだけあることを示します。 値は、任意の有効なノード セマンティック バージョン範囲の文字列を指定できます。

これらの Windows 固有の属性の使用例:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *情報*要素

ユーザーに提供される追加情報。これは、簡単に自動化することはできませんまたは plugman の範囲を超えている追加の手順を必要とする場合に便利です。 例:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## *hook*要素

特定のアクションが発生したときにコルドバで呼び出されるカスタム スクリプトを表します (たとえば、プラグインを追加またはプラットフォーム準備ロジックが呼び出されます)。 これは、コルドバの既定の機能を拡張する必要が便利です。 詳細についてはフックのガイドを参照してください。

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    

## 変数

特定の場合、プラグインは、構成の変更をターゲット アプリケーションに依存させる必要があります。 たとえば、Android 上 C2DM を登録するパッケージ id が`com.alunny.message`アプリが許可を要求するよう。

    <uses-permission android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

`Plugin.xml`ファイルから挿入されたコンテンツが事前に知られていないこのようなの場合、ドル記号の大文字、数字、またはアンダー スコアの後に変数を指定できます。 上記の例では、 `plugin.xml`ファイルはこのタグを含めます。

    <uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

検索されない場合は、plugman によって指定された値または空の文字列で変数の参照を置き換えます。 変数参照の値を (この場合、`与えます。`ファイル) から検出されたまたはツールのユーザーが指定した可能性があります。正確なプロセスは特定のツールに依存しています。

plugman は、プラグインの必要な変数を指定するユーザーを要求できます。たとえば、c2m-更新と Google マップの API キーは、コマンドライン引数として指定できます。

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

変数を必須にするには、 `<platform>`タグは`<preference>`タグを含める必要があります。たとえば。

    <preference name="API_KEY" />
    

plugman は、これらの必要な設定が渡されたことを確認します。 されていない場合は、方法で変数を渡すし、0 以外のコードで終了ユーザーに警告する必要がありますそれ。

下記のとおり、特定の変数名を予約する必要があります。

## $PACKAGE_NAME

逆ドメイン スタイル`CFBundleIdentifier` iOS または`与えます。`ファイルの`マニフェストの`トップレベルの要素の`パッケージ`属性に対応するパッケージの一意の識別子。