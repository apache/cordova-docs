<!---
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
-->

# org.apache.cordova.splashscreen

このプラグインを使用して、アプリの起動中にスプラッシュスクリーンの表示・非表示を行います。

## インストール

    cordova plugin add org.apache.cordova.splashscreen


## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Windows 8


## メソッド

- splashscreen.show
- splashscreen.hide

### Android 特有の動作

config.xml に、以下の preference を追加してください。

`<preference name="splashscreen" value="foo" />`

foo とは、スプラッシュスクリーンのファイル名です。 9 patch 形式のファイルを推奨します。適当なフォルダー下の res/xml ディレクトリに、スプラッシュスクリーンのファイルを追加してください。

Android に関しては、プロジェクトのメインのファイル ( 原文 「main java file」 )
 を編集する必要があります。 super.loadUrl に関して、時間の遅延を指定する第 2 引数を追加する必要があります。

`super.loadUrl(Config.getStartUrl(), 10000);`

## splashscreen.hide

スプラッシュスクリーンを非表示にします。

    navigator.splashscreen.hide();


### BlackBerry 10 特有の動作

`config.xml` ファイル内の `AutoHideSplashScreen` を、 `false` に設定します。

### iOS 特有の動作

`config.xml` ファイル内の `AutoHideSplashScreen` を、 `false` に設定する必要があります。スプラッシュスクリーンの非表示処理を 2 秒間遅らせたい場合には、 `deviceready` イベントハンドラー内に以下のようにタイマーを追加します。

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);

## splashscreen.show

スプラッシュスクリーンを表示します。

    navigator.splashscreen.show();

アプリを起動する前、および、 `deviceready` イベントが発火する前に、 `navigator.splashscreen.show()` を呼び出すことはできません。ただし、スプラッシュスクリーンとは、アプリを起動する前に表示するスクリーンです。よって、先に述べた処理では、スプラッシュスクリーンの表示が遅れてしまうことになります。 `config.xml` に、いくつかの設定をすることで、アプリの起動後、直ち ( アプリが完全に立ち上がる前、および、 `deviceready` イベントを受け取る前 ) に、スプラッシュスクリーンを自動的に表示します。この設定の詳細に関しては、 [アイコンとスプラッシュスクリーン](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html) をご確認ください。これにより、`navigator.splashscreen.show()` をわざわざ呼び出して、アプリ起動時にスプラッシュスクリーンを表示する必要はなくなります。
