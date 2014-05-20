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

# コマンドライン インターフェイス

This guide shows you how to create applications and deploy them to
various native mobile platforms using the `cordova` command-line
interface (CLI). This tool allows you to create new projects, build
them on different platforms, and run on real devices or within emulators. The CLI
is the main tool to use for the cross-platform workflow (See the Overview for a description
of the various workflows.)  However, you can also use the CLI to initialize project code, after
which you use various platforms' SDKs and shell tools for continued development.



## CLI を使用する前に

コマンドライン ツールを実行する前に、対象とする各モバイルプラットフォーム用の SDK をインストールする必要があります ( 詳細に関しては、「プラットフォームに関する解説」をご確認ください )。


To add support or rebuild a project for any platform, you need to run
the command-line interface from the same machine that supports the
platform's SDK. The CLI supports the following combinations:


サポートツールの追加またはプロジェクトの再ビルドをプラットフォーム上で行う場合、プラットフォームの SDK をサポートしている端末から、コマンドライン インターフェイスを実行する必要があります。

* iOS             (Mac)
* Amazon Fire OS  (Mac, Linux, Windows)
* Android         (Mac, Linux)
* BlackBerry 10   (Mac, Linux, Windows)
* Windows Phone 7 (Windows)
* Windows Phone 8 (Windows)
* Windows 8       (Windows)
* Firefox OS      (Mac, Linux, Windows)

Mac では、 _ターミナル_ アプリケーションからコマンドラインを使用できます。PC では、 _アクセサリ_ の _コマンド プロンプト_ から使用できます。

The more likely it is that you run the CLI from different machines,
the more it makes sense to maintain a remote source code repository,
whose assets you pull down to local working directories.

異なる端末から CLI を実行すると、


`cordova` コマンドライン ツールをインストールする場合、以下の手順を行ってください。

1. [Node.js](http://nodejs.org/) をダウンロードして、インストールします。インストレーション後、 `node` または `npm` コマンドライン上で実行することができます。

1. Install the `cordova` utility. In Unix, prefixing the additional
   `sudo` command may be necessary to install development utilities in
   otherwise restricted directories:




`cordova` ユーティリティをインストールします。Unix では、 `sudo` コマンドを最初に入力して開発ユーティリティのインストール

        $ sudo npm install -g cordova

   The installation log may produce errors for any uninstalled
   platform SDKs.  Following installation, you should be able to run
   `cordova` on the command line.


アンインストールした SDK をインストールのログを取る


   ** 注意 **: 上記のように、 `-g` フラグを使用して、cordova をグローバルに使用できるよう、npm に命令します。
   また、インストールを行った npm モジュールをグローバルに呼び出すため、ユーザーの PATH 環境変数に npm ディレクトリーを追加する必要があります。Windows では、 C:\Users\username\AppData\Roaming\npm` で npm を通常見つけることができます。Unix では、 `/usr/local/share/npm` となります。




## アプリの作成

ソースコードの保存先ディレクトリーへ行き、以下のようなコマンドを実行します。

        $ cordova create hello com.example.hello HelloWorld

コマンド実行から完了までに時間がかかるときもありますので、しばらくそのまま待ちます。コマンド実行時に ` -d` オプションを追加すると、
進行状況の情報を表示します。

第一引数「 _hello_ 」を使用して、プロジェクト用に使用するディレクトリーを指定します。ディレクトリーが存在しない場合、Cordova 側で作成してくれます。
`www` サブディレクトリー に、 `css` 、 `js` 、 `img` 下のさまざまなリソースと共に、アプリのホームページを格納します( ファイル名などは、ウェブ開発で通常使用する命名規則に従います )。
`config.xml` ファイルは、アプリの起動と配布に必要な各種メタデータを記述します。

第二引数「 `com.example.hello` 」を使用して、逆引きドメイン形式の識別子 ( reverse domain-style identifier ) をプロジェクトに設定します。この引数は、任意です。省略した場合には、引数にも順序があるため、第三引数も省略する必要があります。
この値は、 `config.xml` ファイル内で後から変更することができます。ただし、Java パッケージ名のように、 `config.xml` の範囲外で、この値を使用しているコードがある場合には、注意が必要です。
デフォルトでは、この値は `io.cordova.hellocordova` となりますが、適当な名前を付けることを推奨します。

第三引数「 `HelloWorld` 」を使用して、アプリの表示タイトルを設定します。この引数は、任意です。
この値は、 `config.xml` ファイル内で後から変更することができます。ただし、Java クラス名のように、 `config.xml` の範囲外で、この値を使用しているコードがある場合には、注意が必要です。
デフォルトでは、この値は `HelloCordova` となりますが、適当な名前を付けることを推奨します。

## プラットフォームの追加

この節で示す、すべてのコマンドは、プロジェクトのディレクトリー内、または、有効範囲のサブディレクトリー内で実行する必要があります。

        $ cd hello

プロジェクトを作成する前に、対象とするプラットフォームを指定する必要があります。ここで示すコマンドを実行できるかどうかは、端末が各 SDK をサポートしているかどうかに依ります。
以下で示すコマンドのいずれかを Mac で実行してください。

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos

以下で示すコマンドのいずれかを Windows で実行してください。 _wp_ は、Windows Phone オペレーティングシステムの省略形です。

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos

以下で示すコマンドを実行して、現在のプラットフォーム群の確認を行います。

        $ cordova platforms ls

(注意 ： `platform` と `platforms` コマンドは、同じものです。）

プラットフォームを削除する場合には、以下で示すコマンドを実行してください。

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android

プラットフォームの追加・削除を行うコマンドを実行すると、プロジェクトの _platforms_ ディレクトリー ( 各プラットファームのサブディレクトリー ) に影響を与えます。
各プラットフォームのサブディレクトリー内に、_www_ ソースディレクトリー ( 例 ： `platforms/ios/www` 、 `platforms/android/assets/www` ) が再作成されます。
CLI では、ソースの _www_ フォルダーからファイル群のコピーを定期的に行うため、これらのファイルに対してのみ修正を行います。 _platforms_ サブディレクトリー下に格納しているファイルは修正しません。
バージョン管理ソフトウェアを使用している場合には、このソースの _www_ フォルダーと _merges_ フォルダーをソフトに追加してください ( _merges_ フォルダーの詳細に関しては、下記の「各プラットフォームのカスタマイズ」をご確認ください)。



**WARNING**: When using the CLI to build your application, you are strongly discouraged
from editing any files in the `/platforms/` folder unless you know what you are doing
or are specifically told otherwise in documentation. This is because the files in the 
`/platforms/` directory will be overwritten on prepare or plugin reinstallation.

**警告**: アプリのビルドに CLI を使用するとき、システムの動作を熟知しているか、または、ドキュメントに記載されている場合以外で、 `/platforms/` フォルダー下のファイルを修正することは推奨しません。prepare または plugin を使用した再インストール処理のときに、`/platforms/` ディレクトリーは上書きされます。




If you wish at this point, you can use an SDK such as Eclipse or Xcode
to open the project you created. You will need to open the derivative set of assets
from the `/platforms/` directory to develop with an SDK. 
This is because
the SDK specific metadata files are stored within the appropriate `/platform/` subdirectory.
(See the Platform Guides for information on how to develop applications within each IDE.)
Use this approach if you simply want to initialize a project using the CLI and 
then switch to an SDK for native work.


ここまでの時点で、プロジェクトを開く場合、Eclipse または Xcode のような SDK を使用することができます。
SDK を使用して開発を行う場合、 `/platforms/` ディレクトリーから派生した各リソース　　を開く必要があります。



全開発サイクルでクロスプラットフォームでの作業手順 ( CLI ) を検討している場合は、このまま読み続けてください。

## アプリのビルド

By default, the `cordova create` script generates a skeletal web-based
application whose home page is the project's `www/index.html` file.
Edit this application however you want, but any initialization should
be specified as part of the `deviceready` event handler, referenced by
default from `www/js/index.js`.


デフォルトでは、スクリプト「 `cordova create` 」を使用して、プロジェクト下の `www/index.html` のファイルをホームページとする、アプリ ( WEB 展開を行うアプリの骨組み ) を生成します。


プロジェクトのビルドを行うときには、以下のコマンドを実行してください。

        $ cordova build

これにより、プロジェクトの `platforms` サブディレクトリー内に、コードを生成することができます。
各ビルドで、異なるプラットフォームを使用したい場合には、指定することもできます。


        $ cordova build ios

`cordova build` コマンドは、以下のコマンドの省略形です。以下の例では、対象プラットフォームを 1 つに絞っています。

        $ cordova prepare ios
        $ cordova compile ios

上記のように、 `prepare` コマンドを実行すると、 `platforms/ios` 内にプラットフォーム別のコードを生成し、Apple の Xcode SDK を代替的に使用して、コードの修正とコンパイルを行うことができます。また、他のプラットフォームの SDK を使用して同様のことを行えます。

## アプリのテスト ( エミュレーターまたはデバイスを使用 )

携帯端末用のプラットフォームの多くの SDK には、デバイスのイメージを用いたエミュレーターが実装されています。
エミュレーターを使用して、ホーム画面からアプリを起動することもできます。また、プラットフォーム実装の機能の動作を確認することもできます。
以下に示すコマンドを実行して、アプリの再ビルド、および、プラットフォームのエミュレーター上での表示を行います。

        $ cordova emulate android

Some mobile platforms emulate a particular device by default, such as
the iPhone for iOS projects. For other platforms, you may need to
first associate a device with an emulator.






Note: Emulator support is currently not available for Amazon Fire OS

(See the Platform Guides for details.)
For example, you may first run the `android` command to launch the
Android SDK, then run a particular device image, which launches it
according to its default behavior:

![](img/guide/cli/android_emulate_init.png)

Following up with the `cordova emulate` command refreshes the emulator
image to display the latest application, which is now available for
launch from the home screen:

![](img/guide/cli/android_emulate_install.png)

Alternately, you can plug the handset into your computer and test the
app directly:

        $ cordova run android

Before running this command, you need to set up the device for
testing, following procedures that vary for each platform. In
Android and Amazon Fire OS devices, you would have to enable a __USB debugging__ option on
the device, and perhaps add a USB driver depending on your development
environmnent.
See Platform Guides for details on each platform's requirements.

## Add Plugin Features

When you build and view a new project, the default application that
appears doesn't do very much. You can modify the app in many ways to
take advantage of standard web technologies, but for the app to
communicate closely with various device-level features, you need to
add plugins that provide access to core Cordova APIs.

A _plugin_ is a bit of add-on code that provides an interface to
native components. You can design your own plugin interface, for
example when designing a hybrid app that mixes a Cordova WebView with
native components. (See Embedding WebViews and Plugin Development
Guide for details.)  More commonly, you would add a plugin to enable
one of Cordova's basic device-level features
detailed in the API Reference. A list of these plugins, including
additional plugins provided by the community, can be found at
[plugins.cordova.io](http://plugins.cordova.io/). You can use
the CLI to search for plugins from this registry. For example,
searching for `bar` and `code` produces a single result that matches
both terms as case-insensitive substrings:

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes

Searching for only the `bar` term yields and additional result:

        org.apache.cordova.statusbar - Cordova StatusBar Plugin

The `cordova plugin add` command requires you to specify the
repository for the plugin code.  Please note that when you follow the 
Web Project Dev workflow and use the CLI, the CLI will take care of adding
the plugin code to the appropriate place for each platform. (If you are following the
Native Project Dev Workflow, you will have to add plugins using Plugman (guide link here),
multiple times for each platform.)

CLI を使用して、アプリへ機能を追加する方法の例を以下に示します。

* 基本的なデバイス情報 ( Device API ):

        $ cordova plugin add org.apache.cordova.device

* ネットワーク接続とバッテリー関連のイベント:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status

* 加速度センサー、コンパス、位置情報:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation

* カメラ、メディア再生、メディアキャプチャー:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media

* デバイスまたはネットワーク上のファイルへのアクセス (File API):

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer

* ダイアログボックスまたは振動を利用した通知:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration

* 連絡先:

        $ cordova plugin add org.apache.cordova.contacts

* 国際対応:

        $ cordova plugin add org.apache.cordova.globalization

* スプラッシュスクリーン:

        $ cordova plugin add org.apache.cordova.splashscreen

* 新規のブラウザーウィンドウ (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser

* デバッグ コンソール:

        $ cordova plugin add org.apache.cordova.console

Use `plugin ls` (or `plugin list`, or `plugin` by itself) to view
currently installed plugins. Each displays by its identifier:

`plugin ls` (  ) を使用して、

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]

プラグインを削除する場合、list コマンドで表示された識別子と同じものを使用します。リリースバージョンからデバッグ コンソールのサポートを削除する例を以下に示します。

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same

また、各コマンドの引数を複数に設定して、プラグインの一括削除・追加を行うこともできます。

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device

## 上級者向けのプラグイン オプション

プラグインを追加するとき、プラグインの取得場所を指定できるオプションが複数あります。上記の例では、良く知られている `registry.cordova.io` レジストリーを使用しています。また、プラグインは、 `id` を使用して指定しています。


        $ cordova plugin add org.apache.cordova.console

The `id` may also include the plugin's version number, appended after
an `@` character. The `latest` version is an alias for the most recent
version. For example:




        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1

If the plugin is not registered at `registry.cordova.io` but is located in
another git repository, you can specify an alternate URL:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git

The git example above fetches the plugin from the end of the master
branch, but an alternate git-ref such as a tag or branch can be
appended after a `#` character:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0

If the plugin (and its `plugin.xml` file) is in a subdirectory within
the git repo, you can specify it with a `:` character. Note that the
`#` character is still needed:

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir

You can also combine both the git-ref and the subdirectory:

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir

Alternately, specify a local path to the plugin directory that
contains the `plugin.xml` file:

        $ cordova plugin add ../my_plugin_dir

## Using _merges_ to Customize Each Platform

While Cordova allows you to easily deploy an app for many different
platforms, sometimes you need to add customizations.  In that case,
you don't want to modify the source files in various `www` directories
within the top-level `platforms` directory, because they're regularly
replaced with the top-level `www` directory's cross-platform source.

Instead, the top-level `merges` directory offers a place to specify
assets to deploy on specific platforms. Each platform-specific
subdirectory within `merges` mirrors the directory structure of the
`www` source tree, allowing you to override or add files as needed.
For example, here is how you might uses `merges` to boost the default
font size for Android and Amazon Fire OS devices:

* Edit the `www/index.html` file, adding a link to an additional CSS
  file, `overrides.css` in this case:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />

* Optionally create an empty `www/css/overrides.css` file, which would
  apply for all non-Android builds, preventing a missing-file error.

* Create a `css` subdirectory within `merges/android`, then add a
  corresponding `overrides.css` file. Specify CSS that overrides the
  12-point default font size specified within `www/css/index.css`, for
  example:

        body { font-size:14px; }

When you rebuild the project, the Android version features the custom
font size, while others remain unchanged.

You can also use `merges` to add files not present in the original
`www` directory. For example, an app can incorporate a _back button_
graphic into the iOS interface, stored in
`merges/ios/img/back_button.png`, while the Android version can
instead capture `backbutton` events from the corresponding hardware
button.

## Help Commands

Cordova features a couple of global commands, which may help you if
you get stuck or experience a problem.  The `help` command displays
all available Cordova commands and their syntax:

    $ cordova help
    $ cordova        # same

The `info` command produces a listing of potentially useful details,
such as currently installed platforms and plugins, SDK versions for
each platform, and versions of the CLI and `node.js`:

    $ cordova info

It both presents the information to screen and captures the output in
a local `info.txt` file.

__NOTE__: Currently, only details on iOS and Android platforms are
available.

## Updating Cordova and Your Project

After installing the `cordova` utility, you can always update it to
the latest version by running the following command:

        $ sudo npm update -g cordova

Use this syntax to install a specific version:

        $ sudo npm install -g cordova@3.1.0-0.2.0

Run `cordova -v` to see which version is currently running.  Run the `npm
info` command for a longer listing that includes the current version
along with other available version numbers:

        $ npm info cordova

Cordova 3.0 is the first version to support the command-line interface
described in this section. If you are updating from a version prior to
3.0, you need to create a new project as described above, then copy
the older application's assets into the top-level `www` directory.
Where applicable, further details about upgrading to 3.0 are available
in the Platform Guides.  Once you upgrade to the `cordova`
command-line interface and use `npm update` to stay current, the more
time-consuming procedures described there are no longer relevant.

Cordova 3.0+ may still require various changes to
project-level directory structures and other dependencies. After you
run the `npm` command above to update Cordova itself, you may need to
ensure your project's resources conform to the latest version's
requirements. Run a command such as the following for each platform
you're building:

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.

