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

# org.apache.cordova.dialogs

このプラグインを使用して、ネイティブのダイアログ関連の UI 要素にアクセスします。

## インストール

    cordova plugin add org.apache.cordova.dialogs

### Firefox OS 特有の動作

[Manifest Docs](https://developer.mozilla.org/en-US/Apps/Developing/Manifest) に記載の内容に従い、 __www/manifest.webapp__ を作成してください。

また、権限を追加してください。 

    "permissions": {
        "desktop-notification": {
			"description": "Describe why you need to enable notifications"
		}
	}

__www/index.html__ を編集して、以下の記述を `head` 部分に追加してください。

	<link rel="stylesheet" type="text/css" href="css/notification.css" />

## メソッド

- `navigator.notification.alert`
- `navigator.notification.confirm`
- `navigator.notification.prompt`
- `navigator.notification.beep`

## navigator.notification.alert

カスタマイズしたアラートまたはダイアログボックスを表示します。通常、ネイティブのダイアログボックスを Cordova アプリでは使用しますが、いくつかのプラットフォームにおいては、ブラウザーの`アラート` ( alert ) 機能を使用します。ブラウザーの標準アラート機能では、カスタマイズが困難な場合もあります。

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message__: ダイアログのメッセージ _(String)_

- __alertCallback__: アラートダイアログを消した後に呼ぶコールバック _(Function)_

- __title__: ダイアログのタイトル ( 任意、デフォルトでは `Alert` ) _(String)_ 

- __buttonName__: ボタンの表示名 ( 任意、デフォルトでは `OK` ) _(String)_ 


### 例

    function alertDismissed() {
        // 処理
    }

    navigator.notification.alert(
        'You are the winner!',  // メッセージ
        alertDismissed,         // コールバック
        'Game Over',            // タイトル
        'Done'                  // ボタンの表示名
    );

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### Windows Phone 7 と 8 特有の動作

- ビルドインされたブラウザーアラートはありませんが、以下に示すように、グローバルスコープにおいて、`alert()` を呼び出すよう、1 つのアラートをバインド ( bind ) することができます。

        window.alert = navigator.notification.alert;

- `alert` と `confirm` は、どちらもノンブロッキング コール ( non-blocking call ) です。どちらの処理結果も、非同期的にのみ、取得できます。

### Firefox OS 特有の動作

同期的 ( 原文 「native-blocking」 ) に実行される `window.alert()` 、および、非同期的 ( 原文 「non-blocking」 ) に実行される `avigator.notification.alert()` の両方を使用できます。

## navigator.notification.confirm

設定をカスタマイズできる、確認用ダイアログボックスを表示します。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message__: ダイアログのメッセージ _(String)_

- __confirmCallback__: 押されたボタン番号のインデックス ( index、例 ： 1、2、3 など ) を使用して呼び出すコールバック、または、ボタンを押さず ( 0 ) にダイアログを消したときに呼び出すコールバック _(Function)_

- __title__: ダイアログのタイトル ( 任意、デフォルトでは `Confirm` ) _(String)_ 

- __buttonLabels__: ボタンのラベル名を入れた文字列の配列 ( 任意、デフォルトでは [`OK,Cancel`] ) _(Array)_ 

### confirmCallback

確認用ダイアログボックスに表示した複数ボタンのうちの 1 つを押したときに、 `confirmCallback` を実行します。

このコールバックは、引数として、`buttonIndex` ( 押されたボタンのインデックス ) _(Number)_ を取ります。インデックスは、1 から始まり ( 1 オリジンインデッス方式 )、値は、`1` 、 `2` 、 `3` 、・・・　となります。

### 例

    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    navigator.notification.confirm(
        'You are the winner!', // メッセージ
         onConfirm,            // 押されたボタンのインデックスを使用して呼び出すコールバック
        'Game Over',           // タイトル
        ['Restart','Exit']     // ボタンのラベル名
    );

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### Windows Phone 7 と 8 特有の動作

- `window.confirm` に使用できる、ビルドインされたブラウザー機能はありませんが、以下に示すように、バインド ( bind ) することができます。

        window.confirm = navigator.notification.confirm;

- `alert` と `confirm` は、どちらもノンブロッキング コール ( non-blocking call ) です。どちらの処理結果も、非同期的にのみ、取得できます。

### Firefox OS 特有の動作

同期的 ( 原文 「native-blocking」 ) に実行される `window.confirm()` 、および、非同期的 ( 原文 「non-blocking」 ) に実行される `navigator.notification.confirm()` の両方を使用できます。

## navigator.notification.prompt

ブラウザー標準の `prompt` 機能よりも自由にカスタマイズできる、ネイティブのダイアログボックスを表示します。

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])

- __message__: ダイアログのメッセージ _(String)_

- __promptCallback__: ボタンを押したときに呼び出すコールバック _(Function)_

- __title__: ダイアログのタイトル ( 任意、デフォルトでは `Prompt`) _(String)_ 

- __buttonLabels__: ボタンのラベル名を入れた文字列の配列 ( 任意、デフォルトでは `["OK","Cancel"]`) _(Array)_ 

- __defaultText__: テキストボックスへのデフォルトの入力値 ( 任意、デフォルトでは、空の文字列 ) _(String)_ 


### promptCallback

入力用 ( prompt ) ダイアログボックスに表示した複数ボタンのうちの 1 つを押したときに、 `promptCallback` を実行します。
以下のプロパティを格納した `results` オブジェクトをこのコールバックに渡します。

- __buttonIndex__: 押されたボタンのインデックス _(Number)_。インデックスは、1 から始まり ( 1 オリジンインデッス方式 )、値は、`1` 、 `2` 、 `3` 、・・・　となります。

- __input1__: 入力用 ( prompt ) ダイアログボックスに入力されたテキスト _(String)_

### 例

    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

    navigator.notification.prompt(
        'Please enter your name',  // メッセージ
        onPrompt,                  // 呼び出すコールバック
        'Registration',            // タイトル
        ['Ok','Exit'],             // ボタンのラベル名
        'Jane Doe'                 // デフォルトのテキスト
    );

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- Firefox OS
- iOS

### Android 特有の動作

- Android では、最大 3 個のボタンをサポートします。それ以上のボタンは無視します。

- Android 3.0 以降において、Holo テーマを使用するデバイスでは、ボタンの表示順序を逆順にしています。

### Firefox OS 特有の動作

同期的 ( 原文 「native-blocking」 ) に実行される `window.prompt()` 、および、非同期的 ( 原文 「non-blocking」 ) に実行される `navigator.notification.prompt()` の両方を使用できます。

## navigator.notification.beep

ビープ ( beep ) 音を、デバイスが鳴らします。

    navigator.notification.beep(times);

- __times__: ビープ音のリピート回数 _(Number)_

### 例

    // ビープ音を 2 回鳴らす
    navigator.notification.beep(2);

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### Amazon Fire OS 特有の動作

- Amazon Fire OS では、デフォルトの __Notification Sound__ を鳴らします ( __Settings/Display & Sound__ パネルで設定 )。

### Android 特有の動作

- Android では、デフォルトの __Notification ringtone__ を鳴らします ( __Settings/Sound & Display__ パネルで設定 )。

### Windows Phone 7 と 8 特有の動作

- Cordova が提供するビープ音のファイルを使用します。

### Tizen 特有の動作

- Tizen では、media API を使用して、オーディオファイルの再生を行い、ビープ音を鳴らします。

- ファイルの置き場所は、アプリの root ディレクトリの `sounds` サブディレクトリとなります。また、ファイル名は `beep.wav` にする必要があります。また、ビープ音は短くする必要があります。