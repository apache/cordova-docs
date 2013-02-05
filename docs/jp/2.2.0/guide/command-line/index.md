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

# コマンドライン使用ガイド

クロスプラットフォームアプリケーションの開発を簡単にするために、
Cordova はコマンドラインツールを提供しています。
ビルド、クリーン、エミュレーターの起動などが一つのコマンドで可能です。
このドキュメントは、入門ガイドの代替でもあります。
入門ガイドがデフォルト IDE で開発を始めることをサポートするのに対し、
コマンドライン使用ガイドではコマンドラインツールを使用して
shell ベースで Cordova プロジェクトを作成し、
開発することを目的としています。

## サポートされているプラットフォーム

* [iOS](#Command-Line%20Usage_ios)
* [Android](#Command-Line%20Usage_android)
* [BlackBerry](#Command-Line%20Usage_blackberry)

## iOS

iOS コマンドラインツールはシェルスクリプトで作られており、
XCode のコマンドラインツール (`xcode-select` や `xcodebuild` など) に依存しています。

### プロジェクトの作成

以下のパラメーターとともに `create` コマンドを実行します:

* 新しい Cordova iOS プロジェクトへのパス
* リバースドメインスタイルのパッケージ名
* プロジェクト名

<!-- -->

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

### プロジェクトのビルド

    $ /path/to/my_new_cordova_project/cordova/debug

### エミュレーターの起動

    $ /path/to/my_new_cordova_project/cordova/emulate

### ログ

    $ /path/to/my_new_cordova_project/cordova/log


## Android

Android のコマンドラインツールはシェルスクリプト作られています。
PATH に、 Android SDK の `tools` 及び `platform-tools` フォルダーが
必ずある必要があります。

### プロジェクトの作成

以下のパラメーターとともに `create` コマンドを実行します:

* 新しい Cordova Android プロジェクトへのパス
* リバースドメインスタイルのパッケージ名
* Main Activity 名

<!-- -->

    $ /path/to/cordova-android/bin/create /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

**Windows** では

    $ /path/to/cordova-android/bin/create.bat /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

### プロジェクトのビルド

    $ /path/to/my_new_cordova_project/cordova/debug

**Windows** では

    $ /path/to/my_new_cordova_project/cordova/debug.bat

### エミュレーターの起動

    $ /path/to/my_new_cordova_project/cordova/emulate

**Windows** では

    $ /path/to/my_new_cordova_project/cordova/emulate.bat

少なくとも一つの Android Virtual Device が作成済みであることを確認して下さい。もしない場合は、 `android` コマンドを使用して作成してください。
もし複数の AVD がある場合には、コマンド実行後に AVD を選択してください。

### ログ

    $ /path/to/my_new_cordova_project/cordova/log

**Windows** では

    $ /path/to/my_new_cordova_project/cordova/log.bat

### クリーン

    $ /path/to/my_new_cordova_project/cordova/clean

**Windows** では

    $ /path/to/my_new_cordova_project/cordova/clean.bat

### クリーン、ビルド、デプロイ、起動

    $ /path/to/my_new_cordova_project/cordova/BOOM

**Windows** では

    $ /path/to/my_new_cordova_project/cordova/BOOM.bat

エミュレーターが起動中またはデバイスが接続されていることを確認してください。


## BlackBerry

BlackBerry のコマンドラインツールはシェルスクリプト作られています。

### プロジェクトの作成

以下のパラメーターとともに `create` コマンドを実行します:

* 新しい Cordova BlackBerry プロジェクトへのパス
* アプリケーション名

<!-- -->

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_cordova_project CordovaProjectName

**Windows** では

    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_cordova_project CordovaProjectName

### プロジェクトのビルド

BlackBerry のプロジェクトでは、 Cordova プロジェクトフォルダーのルートにある
`project.properties` ファイルをカスタマイズすることを確認してください。
これは、 BlackBerry の signing key のパスワード、
BlackBerry WebWorks SDK の位置、 BlackBerry シミュレーター実行ファイルの
位置といった情報を与えるために必要です。

    $ /path/to/my_new_cordova_project/cordova/debug

**Windows** では

    $ /path/to/my_new_cordova_project/cordova/debug.bat

### エミュレーターの起動

BlackBerry のプロジェクトでは、 Cordova プロジェクトフォルダーのルートにある
`project.properties` ファイルをカスタマイズすることを確認してください。
これは、 BlackBerry の signing key のパスワード、
BlackBerry WebWorks SDK の位置、 BlackBerry シミュレーター実行ファイルの
位置といった情報を与えるために必要です。

    $ /path/to/my_new_cordova_project/cordova/emulate

**Windows** では

    $ /path/to/my_new_cordova_project/cordova/emulate.bat

### ログ

残念ながら、デバイスから直接ログをストリーミングすることは現在サポート
されていません。しかし、 BlackBerry は ビルトインの Web Inspector を
BlackBerry OS 7.0 以上の Playbook と BlackBerry スマートフォンデバイスで
提供しています。また、デバイス上のアプリケーションログ
(`console.log` でのログも含む) へは、
ホーム画面で ALT キーを長押しし、 "lglg" と打ち込むことにより
アクセスします。
