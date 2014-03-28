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
    

ここでは、エンジンの既定の一覧を '<engine>'タグをサポートしています： * 'コルドバ' *' コルドバ-plugman' * 'コルドバ-アマゾン-fireos' *' コルドバ人造人間 '*' コルドバ ios' * 'コルドバ-blackberry10' *' コルドバ wp7' * 'コルドバ wp8' *' コルドバ-windows8'  
* 'android sdk'//インストール レベル最高の Android の api を返します *' アップル xcode'//xcode バージョンを返します。 * 'アップル ios'//インストールされて最高の iOS のバージョンを返します。 *' アップルの osx'//OSX のバージョンを返します。 * ' ブラックベリー ndk'//ネイティブなブラックベリー SDK のバージョンを返します。

カスタム Apache コルドバ ベース フレームワークはエンジン タグの下に表示する必要がありますを指定しましょう。

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

カスタム Apache コルドバ ベース フレームワーク エンジン要素に次の属性が含まれている必要があります： `name` 、 `version` 、 `scriptSrc` と`platform`.

*   `name`(必須): カスタム フレームワークの人間が判読できる名前。

*   `version`（必須）： バージョンをインストールするために、フレームワークがあります。

*   `scriptSrc`(必須): カスタム フレームワークのバージョンは plugman に指示するスクリプト ファイルです。理想的には、このファイルは、プラグイン ディレクトリの最上位レベル ディレクトリ内する必要があります。

*   `platform`(必須): あなたのフレームワークをサポートするプラットフォーム。 ワイルドカードを使用することがあります `*` すべてのプラットフォームのサポートされていることのようなパイプ文字で複数指定 `android|ios|blackberry10` またはちょうどのような単一のプラットフォーム`android`.

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

*   `src`(必須): ファイルまたはディレクトリが含まれているプラグイン パッケージを基準に、 `plugin.xml` ドキュメント。 指定されたファイルが存在しない場合 `src` 、plugman 停止し、場所と、インストール プロセスを逆に、競合について通知を発行 0 以外のコードで終了します。

*   `target`(必須)。
    
    ファイルまたはディレクトリ場所 Cordova アプリでは、相対的に、 `www` ディレクトリ。資産などのサブディレクトリを対象とすることができます。
    
    <asset src="www/new-foo.js" target="js/experimental/foo.js" />
    
    作成、 `js/experimental` ディレクトリ内で、 `www` ディレクトリ、しない限り、既に存在、しコピーする、 `new-foo.js` ファイルし、名前が変更されます `foo.js` 。 ターゲットの場所にファイルが既に存在する場合 plugman 停止しインストール プロセスを逆に、競合について通知を発行し、ゼロ以外のコードで終了します。

## *js モジュール*要素

ほとんどのプラグインには、1 つまたは複数の JavaScript ファイルが含まれます。 各 `<js-module>` タグ、JavaScript ファイルなどに対応し、なくなりますプラグインのユーザーを追加する、 `<script>` の各ファイルのタグ。 一方 `<asset>` タグは、単にプラグインのサブディレクトリからファイルをコピー `www` 、 `<js-module>` タグは、はるかに洗練されました。 彼らはこのようになります：

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

上記の例ではプラグインをインストールするとき `socket.js` にコピー `www/plugins/my.plugin.id/socket.js` にエントリとして追加されます `www/cordova_plugins.js` 。 読み込み時にコード `cordova.js` XHR を使用して各ファイルの読み取りを注入、 `<script>` タグを HTML に。 それを壊したくまたは以下に示すように適切なマージ マッピングを追加します。

持つファイルをラップ*しない* `cordova.define` 、それが自動的に追加されます。 モジュールで、閉鎖に包まれて `module` 、 `exports` と `require` スコープでは、AMD モジュールのために正常です。

詳細は `<js-module>` タグ。

*   `src`を基準としてプラグイン ディレクトリ内のファイルを参照して、 `plugin.xml` ファイル。

*   `name`モジュール名の最後の部分を提供します。 それは一般的にあなたが好きをすることができ、使用する場合にのみ問題 `cordova.require` の JavaScript コードであなたのプラグインの他の部分をインポートします。 モジュール名は `<js-module>` は、プラグインの `id` の値が続く `name` 。 上記の例のために、 `id` の `chrome.socket` 、モジュール名が`chrome.socket.Socket`.

*   3 つのタグ内で許可される `<js-module>` :
    
    *   `<clobbers target="some.value"/>`示す、 `module.exports` が挿入されます、 `window` オブジェクトとして `window.some.value` 。 多くとして持つことができます `<clobbers>` あなたのよう。 任意のオブジェクトでは使用できません `window` が作成されます。
    
    *   `<merges target="some.value"/>`モジュールで既存の値とマージされることを示します `window.some.value` 。 任意のキーが既に存在する場合、モジュールのバージョン、元より優先されます。 多くとして持つことができます `<merges>` あなたのよう。 任意のオブジェクトでは使用できません `window` が作成されます。
    
    *   `<runs/>`あなたのコードで指定する必要があることを意味します `cordova.require` にインストールされていないが、 `window` オブジェクト。 イベント ハンドラーをアタッチするモジュールを初期化する場合に便利ですまたはそれ以外の場合。 あなただけ 1 つまで持つことができます `<runs/>` タグ。 メモを含む、 `<runs/>` と `<clobbers/>` または `<merges/>` は冗長ですのでまた `cordova.require` あなたのモジュール。
    
    *   空の `<js-module>` がまだロードでき他のモジュール経由でアクセスされます。`cordova.require`.

場合 `src` plugman 停止インストールを逆に、問題の通知を発行し、0 以外のコードで終了します、既存のファイルに解決されません。

ネスト `<js-module>` 内の要素 `<platform>` プラットフォーム固有 JavaScript モジュール バインディングを宣言します。

## *依存関係*要素

`<dependency>`タグを使用すると、現在のプラグインが依存している他のプラグインを指定できます。 中に将来のバージョンにアクセスするそれらのプラグイン ・ リポジトリーから、短期的にプラグインが直接参照 Url として `<dependency>` タグ。 次のようにフォーマットされています。

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`： プラグインの ID を提供します。 グローバルにユニークで逆ドメイン スタイルで表現をする必要があります。 どちらもこれらの制限は、現在適用されている間彼らは将来的にあるかもしれないです。

*   `url`： プラグインの URL。これはクローンを作成しようとする plugman、git リポジトリを参照ください。

*   `commit`: これは git の参照を理解して `git checkout` ： 分岐またはタグ名 (例えば、 `master` 、 `0.3.1` )、またはコミットのハッシュ (例えば、`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: 対象となるプラグインの依存関係が git リポジトリのサブディレクトリとして存在することを指定します。 いくつかの関連プラグインを格納するリポジトリができるため、これは便利です、それぞれ個別に指定します。

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
*   wp7
*   wp8

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

*   `src`(必須): 相対的なファイルの場所 `plugin.xml` 。 場合は、 `src` ファイルが見つからない、plugman 停止逆に、インストールの問題に関する通知を発行し、0 以外のコードで終了します。

*   `target-dir`: をファイルがコピー、コルドバ プロジェクトのルートからの相対ディレクトリです。 実習では、これでファイルの場所に Java ベースのプラットフォームのために最も重要なは、 `com.alunny.foo` パッケージ内に配置する必要があります、 `com/alunny/foo` ディレクトリ。 ソース ディレクトリが重要でないプラットフォームでは、この属性を省略してください。
    
    同様に、資産場合、 `target` の `source-file` は既存のファイルを上書き、plugman 停止逆に、インストールの問題に関する通知を発行し、0 以外のコードで終了します。

*   `framework`(iOS の場合のみ): 場合に設定されている `true` 、またフレームワークとして、プロジェクト指定ファイルに追加されます。

*   `compiler-flags`(iOS の場合のみ): 場合設定、特定のソース ファイルの指定したコンパイラ フラグを割り当てます。

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
    
    変更されるファイルとコルドバ プロジェクトのルートからの相対パス。
    
    ターゲットは、ワイルドカードを含めることができます ( `*` ) 要素。この場合、plugman を再帰的にプロジェクトのディレクトリ構造を検索し、最初の一致を使用します。
    
    IOS、上のプロジェクト ディレクトリのルートを基準にして構成ファイルの場所は知られていない、だからのターゲットを指定する `config.xml` を解決します`cordova-ios-project/MyAppName/config.xml`.
    
    指定したファイルが存在しない場合、ツール、構成の変更は無視され、インストールが続行されます。

*   `parent`構成ファイルに追加する要素の親を参照する: XPath セレクター。 絶対的なセレクターを使用する場合はワイルドカードを使用できます ( `*` ) 例えば、ルート要素を指定するには`/*/plugins`.
    
    `plist`、ファイル、 `parent` どのような親キーの下で指定した XML を挿入するを決定します。
    
    セレクターで指定したドキュメントの子を解決しない場合、ツールが停止した逆インストール プロセスにより警告が発行し、0 以外のコードで終了します。

## *プラグイン plist*要素

これは*古い*コルドバ ios 2.2.0 へとの下にのみ適用されます。使用、 `<config-file>` コルドバの新しいバージョンのタグ。

例:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

キーと、適切に追加する値を指定します `AppInfo.plist` iOS コルドバ プロジェクト内のファイル。たとえば。

    < プラグイン plist キー文字列"Foo"= ="CDVFoo"/>
    

## *リソース ファイル*と*ヘッダー ファイル*の要素

ソース ファイルのようなが iOS などのプラットフォームのために特別にソース ファイル、ヘッダー、およびリソース間区別します。iOS の例:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Android の例:

    < リソース ファイル src="FooPluginStrings.xml"target="res/values/FooPluginStrings.xml"/>
    

## *lib ファイル*要素

ブラックベリー 10 などのプラットフォームのために特別にしかし、ソース、リソース、およびヘッダー ファイルのようなユーザー生成ライブラリを使用します。例:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

サポートされている属性:

*   `src`(必須): 相対的なファイルの場所 `plugin.xml` 。 場合 `src` が見つからない plugman 停止、インストール、問題、問題について警告を反転し、0 以外のコードで終了します。

*   `arch`: 対象アーキテクチャ、 `.so` ファイルが作成されたら、どちらか `device` または`simulator`.

## *フレームワーク*要素

プラグインが依存フレームワーク (通常 OS/プラットフォームの一部) を識別します。

例:

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    

`src`属性を plugman 与えられたプラットフォームの正しいファッションでのコルドバ プロジェクトに追加しようとしています。 フレームワークを識別します。

省略可能な `weak` 属性は、フレームワークが弱いリンクする必要があるかどうかを示すブール値。既定値は`false`.

## *情報*要素

追加の情報をユーザーに提供します。これは、余分な手順を簡単に自動化することはできませんまたは plugman の範囲を超えていることが必要な場合に役立ちます。例:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to your `local.properties`
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## 変数

特定の場合、プラグインは構成の変更、ターゲット アプリケーションに依存する必要があります。 たとえば、C2DM Android アプリ パッケージ id が上に登録する `com.alunny.message` など、アクセス許可が必要になります。

    <uses-permission
    android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

このような場合、コンテンツの挿入、 `plugin.xml` ファイルが前もって知られていない、変数はドル記号の後に大文字、数字、またはアンダー スコアの一連によって示されることができます。 上記の例については、 `plugin.xml` ファイルには、このタグが含まれます。

    <uses-permission
    android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman が存在しない、指定された値または空の文字列に変数の参照を置き換えます。 参照変数の値を検出可能性があります (からこの場合は、 `AndroidManifest.xml` ファイル） またはツール; のユーザーによって指定された正確なプロセスは、特定のツールに依存。

plugman は、プラグインの必要な変数を指定するユーザーを要求できます。たとえば、c2m-更新と Google Maps API キーは、コマンドライン引数として指定できます。

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

変数を必須に、 `<platform>` タグが含まれてする必要があります、 `<preference>` タグ。たとえば。

    <preference name="API_KEY" />
    

plugman はこれらの必要な設定が渡されたことを確認します。それ以外の場合はそれに変数を渡すし、0 以外のコードで終了する方法をユーザーに警告する必要があります。

以下に示す特定の変数名を予約する必要があります。

## $PACKAGE_NAME

逆ドメイン スタイルに対応するパッケージの一意の識別子、 `CFBundleIdentifier` iOS 上または、 `package` 、最上位の属性 `manifest` 内の要素、 `AndroidManifest.xml` ファイル。