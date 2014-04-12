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

# org.apache.cordova.camera

このプラグインを使用して、写真撮影および画像の選択 （ システムの画像ライブラリ内 ) を行うことができます。

    cordova plugin add org.apache.cordova.camera

## navigator.camera.getPicture

デバイス内臓カメラでの写真撮影、または、デバイスの画像ギャラリー内の画像検索を行います。取得した画像は、Base64 形式の文字列として、または、画像ファイルの URI を、Success コールバック関数に引き渡します。このメソッド自体は `CameraPopoverHandle` オブジェクトを返します。このオブジェクトを使用して、ファイル選択用のポップオーバー ( popover ) の位置を変更できます。

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

### 解説

The `camera.getPicture` 関数を使用して、デバイス搭載のカメラアプリを起動して、写真撮影を行います。デフォルトでは、 `Camera.sourceType` と `Camera.PictureSourceType.CAMERA` が等しいときに、この処理を実行します。 

写真の撮影後は、カメラアプリを終了して、対象のアプリケーションに戻ります。
`Camera.sourceType` が `Camera.PictureSourceType.PHOTOLIBRARY` の場合、または、 `Camera.PictureSourceType.SAVEDPHOTOALBUM` の場合、写真選択用のダイアログが表示され、既存の写真を選択できます。 `camera.getPicture` 関数は `CameraPopoverHandle` オブジェクトを返します。このオブジェクトを使用して、画像選択用のダイアログの位置を変更できます。例えば、端末の向きを変えた場合に使用します。

返り値は `cameraSuccess` 関数に渡されます。値 ( 文字列 ) は `cameraOptions` の設定に基づき、以下のいずれかのフォーマットで送られます。

- Base64 形式でエンコードされた写真画像を表す `文字列`

- ローカルストレージ内の画像ファイルの場所を表す `文字列` ( デフォルト )

エンコードされた画像または URI を使用して、さまざまな処理を行うことができます。以下に例を示します。

- `<img>` タグで画像を表示。使用例を次のセクションで示します。

- ローカルにデータを保存 ( `LocalStorage` 、 [Lawnchair](http://brianleroux.github.com/lawnchair/) など )

- リモートサーバーにデータを送信

__注意:__ 最新のデバイスで撮影した写真は高い解像度になります。デバイスのギャラリーから取得する画像は `quality` パラメーターで画質を指定しても、縮小されません。メモリー問題を回避するために、 `Camera.destinationType` を、`DATA_URL` ではなく、`FILE_URI` に設定してください。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

### Amazon Fire OS 特有の動作

写真を撮影するために、Amazon Fire OS はインテント群 ( intent ) を使用して、デバイスのカメラ アクティビティを起動します。メモリーが少ないデバイスでは、Cordova アクティビティが停止することがあります。この場合、Cordova アクティビティがリストアされても、画像が表示されない可能性があります。


### Android 特有の動作

*Android 4.4 特有*: Android 4.4 では、新しい [ ストレージ アクセス フレームワーク](https://developer.android.com/guide/topics/providers/document-provider.html) を導入しました。このフレームワークを使用して、各ドキュメント ストレージ プロバイダー が保有するドキュメントの検索と表示が簡単に行えるようになりました。Cordova では、 `destinationType` を `FILE_URI` に設定して、"Recent" 、 "Drive" 、 "Images" 、 "External Storage" のいずれかをユーザが選択したとき、 `getPicture()` メソッドが写真を適当に返さないため、このストレージ アクセス フレームワークを完全には実装していません。ただし、"Gallery" アプリを最初に使用した場合、写真の選択を適当に行うことができます。
この問題に対する一時的な回避策として [StackOverflow 問題解決策](http://stackoverflow.com/questions/19834842/android-gallery-on-kitkat-returns-different-uri-for-intent-action-get-content/20177611) をご確認ください。また、この問題の途中経過に関しては [CB-5398](https://issues.apache.org/jira/browse/CB-5398) をご確認ください。 

写真を撮影するために、Android はインテント群 ( intent ) を使用して、デバイスのカメラ アクティビティを起動します。メモリーが少ないデバイスでは、Cordova アクティビティが停止することがあります。この場合、Cordova アクティビティがリストアされても、画像が表示されない可能性があります。

### Firefox OS 特有の動作

カメラ用プラグインは、現在、[Web Activities](https://hacks.mozilla.org/2013/01/introducing-web-activities/) を使用しています。 

### iOS 特有の動作

コールバック関数のいづれかに JavaScript の `alert()` を記述すると、問題が生じることがあります。この場合、alert を `setTimeout()` 内に記述します。これにより、alert が表示される前に、iOS の image picker または ポップオーバー ( popover ) を完全に閉じることができます。

    setTimeout(function() {
        // ここに処理を記述
    }, 0);

### Windows Phone 7 特有の動作

Zune 経由でデバイスが接続している間は、ネーティブのカメラアプリを起動することはできず、代わりに、エラーを返すコールバックが呼ばれます。

### Tizen 特有の動作

Tizen では、 `Camera.DestinationType.FILE_URI` の `destinationType` と `Camera.PictureSourceType.PHOTOLIBRARY` の `sourceType` のみサポートします。 

### 例

写真を撮影し、 Base64 形式の画像として取得します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

写真を撮影し、画像ファイルの位置を取得します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

## CameraOptions

カメラの設定をカスタマイズするオプションのパラメーターです。

    { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false };

### オプション

- __quality__: 保存した画像の画質を指定します。 範囲は 0 から 100 まであり、100 を指定すると非圧縮時の解像度となります ( カメラ解像度に関する情報は利用できません )。 _(Number)_ 

- __destinationType__: 返り値のフォーマットを指定します。フォーマットは `navigator.camera.DestinationType` で定義します。 _(Number)_

        Camera.DestinationType = {
            DATA_URL : 0,      // 画像を Base64 形式の文字列で返す
            FILE_URI : 1,      // 画像ファイルの URI を返す
            NATIVE_URI : 2     // 画像のネイティブ URI を返す ( 例 ： iOS であれば assets-library:// 、Android であれば content:// )
        };

- __sourceType__: 写真の取得先のソースを設定します。ソースは `navigator.camera.PictureSourceType` で定義します。 _(Number)_

        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit__: 画像選択の前に、簡単な編集を許可します。 _(Boolean)_

- __encodingType__: 返される画像ファイルのエンコード形式を選択します。形式は `navigator.camera.EncodingType` で定義します。_(Number)_

        Camera.EncodingType = {
            JPEG : 0,               // JPEG 形式の画像を返す
            PNG : 1                 // PNG 形式の画像を返す
        };

- __targetWidth__: 画像を拡大・縮小するための幅をピクセルで指定します。 __targetHeight__ と共に使用しなければなりません。  アスペクト比は一定に保持されます。 _(Number)_

- __targetHeight__: 画像を拡大・縮小するための縦の長さをピクセルで指定します。 __targetWidth__ と共に使用しなければなりません。アスペクト比は一定に保持されます。 _(Number)_

- __mediaType__: 画像の取得元のメディアの種類を指定します。 `PictureSourceType` に `PHOTOLIBRARY` または `SAVEDPHOTOALBUM` が指定されている場合のみ有効です。メディアの種類は `nagivator.camera.MediaType` で定義します。 _(Number)_

        Camera.MediaType = {
            PICTURE: 0,    // 静止画像のみ。デフォルトはこちらの設定です。返り値のフォーマットは DestinationType で指定したものになります。
            VIDEO: 1,      // ビデオのみ。返り値は常に FILE_URI となります。
            ALLMEDIA : 2   // 全種類のメディアが対象。
};

- __correctOrientation__: 写真を撮影したときのデバイスの向きになるよう、写真を回転させます。 _(Boolean)_

- __saveToPhotoAlbum__: 写真を撮影した後、デバイスのフォトアルバムに画像を保存します。 _(Boolean)_

- __popoverOptions__: iOS 専用のオプションです。iPad でのポップオーバー ( popover ) の位置を指定します。 `CameraPopoverOptions` で定義します。

- __cameraDirection__: 使用するカメラを選択します ( 前面か背面のカメラ )。 `navigator.camera.Direction` で定義します。 _(Number)_

        Camera.Direction = {
            BACK : 0,      // 背面のカメラを使用
            FRONT : 1      // 前面のカメラを使用
        };

### Amazon Fire OS 特有の動作

- `cameraDirection` を指定しても、背面のカメラで写真を撮ります。

- `allowEdit` パラメータを無視します。

- `Camera.PictureSourceType.PHOTOLIBRARY` と `Camera.PictureSourceType.SAVEDPHOTOALBUM` は、共に、同じフォトアルバムを表示します。

### Android 特有の動作

- `cameraDirection` を指定しても、背面のカメラで写真を撮ります。

- `allowEdit` パラメータを無視します。

- `Camera.PictureSourceType.PHOTOLIBRARY` と `Camera.PictureSourceType.SAVEDPHOTOALBUM` は、共に、同じフォトアルバムを表示します。

### BlackBerry 10 特有の動作

- `quality` パラメータを無視します。

- `sourceType` パラメータを無視します。

- `allowEdit` パラメータを無視します。

- `Camera.MediaType` をサポートしません。

- `correctOrientation` パラメータを無視します。

- `cameraDirection` パラメータを無視します。

### Firefox OS 特有の動作

- `quality` パラメータを無視します。

- `Camera.DestinationType` を無視します。設定値が `1` と同様の動作をします ( 画像ファイルの URI )。

- `allowEdit` パラメータを無視します。

- `PictureSourceType` パラメータを無視します ( ダイアログ ウィンドウ上でユーザが種類を選択 )。

- `encodingType` パラメータを無視します。

- `targetWidth` と `targetHeight` を無視します。

- `Camera.MediaType` をサポートしません。

- `correctOrientation` パラメータを無視します。

- `cameraDirection` パラメータを無視します。

### iOS 特有の動作

- 一部のデバイスで発生するメモリーエラーを防ぐため、 `quality` を 50 以下に設定してください。

- `destinationType.FILE_URI` を使用した場合、アプリケーションの temporary ディレクトリに写真を保存します。ストレージの空きが少ない場合、 `navigator.fileMgr` API を使用して、ディレクトリ内のコンテンツを消去できます。

### Tizen 特有の動作

- オプション群をサポートしません。

- FILE URI を常に返します。

### Windows Phone 7 と 8 特有の動作

- `allowEdit` パラメータを無視します。

- `correctOrientation` パラメータを無視します。

- `cameraDirection` パラメータを無視します。

- `cameraOptions` の `mediaType` プロパティを無視します。これは、Windows Phone SDK では、PHOTOLIBRARY からビデオを選択する方法を提供していないためです。

## CameraError

エラーメッセージを表示する、onError 時のコールバック関数です。

    function(message) {
        // エラーメッセージを表示
    }

### パラメータ

- __message__: デバイスのネイティブコードが提供するメッセージ _(String)_


## cameraSuccess

onSuccess callback function that provides the image data.

画像データを返す、onSuccess 時のコールバック関数です。

    function(imageData) {
        // Do something with the image
    }

### パラメータ

- __imageData__: Base64 形式でエンコードした画像データ、_または_、画像を指す file URI。どちらになるかは、`cameraOptions` に基づきます。 _(String)_

### 例

    // 画像の表示
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


## CameraPopoverHandle

`navigator.camera.getPicture` で生成したポップオーバー ( popover ) ダイアログへのハンドルです。

### メソッド

- __setPosition__: ポップオーバー ( popover ) の位置を設定します。

### サポート対象のプラットフォーム

- iOS

### setPosition

ポップオーバー ( popover ) の位置を設定します。

__パラメーター__:

- `cameraPopoverOptions`: `CameraPopoverOptions` で、新しい位置を指定します。

### 例

     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
           popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
         });

     // デバイスの向きが変わったら、ポップオーバーの位置を再設定します。
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }


## CameraPopoverOptions

iOS 専用のパラメーターです。iPad のライブラリまたはアルバムから画像を選択するときのポップオーバー ( popover ) の固定位置と矢印の方向を指定します。

    { x : 0,
      y :  32,
      width : 320,
      height : 480,
      arrowDir : Camera.PopoverArrowDirection.ARROW_ANY
    };

### CameraPopoverOptions

- __x__: 画面上に表示するポップオーバー ( popover ) の x 座標をピクセルで表します。 _(Number)_

- __y__: 画面上に表示するポップオーバー ( popover ) の y 座標をピクセルで表します。 _(Number)_

- __width__: 画面上に表示するポップオーバー ( popover ) の幅をピクセルで表します。 _(Number)_

- __height__: 画面上に表示するポップオーバー ( popover ) の縦の長さをピクセルで表します。 _(Number)_

- __arrowDir__: ポップオーバー ( popover ) の矢印の向きを表します。 `Camera.PopoverArrowDirection` で定義します。 _(Number)_

            Camera.PopoverArrowDirection = {
                ARROW_UP : 1,        // iOS の UIPopoverArrowDirection 定数と同様
                ARROW_DOWN : 2,
                ARROW_LEFT : 4,
                ARROW_RIGHT : 8,
                ARROW_ANY : 15
            };

注意 ： ポップオーバーのサイズは矢印の方向や画面の向きによって調節され、変化することがあります。位置を固定するとき、画面の向きの変化を考慮に入れてください。

## navigator.camera.cleanup

一時的なストレージに保存されている処理前の写真を削除します。

    navigator.camera.cleanup( cameraSuccess, cameraError );

### 解説

`camera.getPicture` を呼び出した後に取得し、一時的なストレージに保存されている処理前の画像ファイルを削除します。`Camera.sourceType` の値と `Camera.PictureSourceType.CAMERA` が等しく、また、 `Camera.destinationType` が `Camera.DestinationType.FILE_URI` と等しい場合のみ有効です。

### サポート対象のプラットフォーム

- iOS

### 例

    navigator.camera.cleanup(onSuccess, onFail);

    function onSuccess() {
        console.log("Camera cleanup success.")
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

