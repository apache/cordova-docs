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

camera.getPicture
=================

デバイスのカメラで写真を撮る、またはデバイスのギャラリー内にある写真を検索します。 Base64 形式でエンコードされたフォトイメージを表す文字列、またはイメージファイルの URI が返されます。このメソッド自体は `CameraPopoverHandle` オブジェクトを返します。このオブジェクトを介して、ファイル選択popoverの位置を変更できます。

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

概要
-----------

`camera.getPicture` 関数はユーザーが写真を撮れるように、デバイスが標準で備えるカメラアプリを起動します。この処理はデフォルト、もしくは`Camera.sourceType = Camera.PictureSourceType.CAMERA` の場合に行われます。写真の撮影が完了するとカメラアプリは終了し、アプリケーションに戻ります。

もし `Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY` もしくは `Camera.PictureSourceType.SAVEDPHOTOALBUM` が指定された場合、写真選択ダイアログが表示され、既存の写真を選択できるようになります。`camera.getPicture`関数は`CameraPopoverHandle`オブジェクトを返します。このオブジェクトを介して、画像選択ダイアログの位置を変更できます。例えば、端末の向きを変えた場合などに使用します。

返り値は `cameraSuccess` 関数に送信されます。値は `cameraOptions` の設定に従い、以下のいずれかのフォーマットで送られます:

- Base64 形式でエンコードされたフォトイメージを表す文字列
- ローカルストレージ内に記録されたファイルの場所を表す文字列 (デフォルト)

エンコードされたイメージや URI をもとに、以下のような処理の記述が可能です:

- `<img>` タグで画像を表示 _(下記の使用例を参考にしてください)_
- データをローカルに保存 (`LocalStorage` や [Lawnchair](http://brianleroux.github.com/lawnchair/) など)
- データをリモートサーバーに送信

__注意:__ 最新のデバイスで撮影した写真は高い解像度を持っています。デバイスのギャラリーから取得する画像はたとえ `quality` パラメーターで画質を指定したとしても、縮小されません。メモリーの問題を回避するために、 `Camera.destinationType` を `DATA_URL` ではなく、 `FILE_URI` に設定して下さい。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上) 
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

Androidに関する注意点
----------

デバイス上で写真を撮影するために、Androidはインテントを使用してカメラ・アクティビティを起動します。低メモリーのデバイスでは、Cordovaアクティビティが停止するかもしれません。この場合、Cordovaアクティビティがリストアされても、画像が表示されない可能性があります。

iOS に関する注意点
----------

JavaScript の alert() をコールバック関数に含めると、問題が生じる可能性があります。 alert を setTimeout() でラップすることで、 alert が表示される前に iOS の image picker または popover が完全に閉じるようにします:

    setTimeout(function() {
        // 任意のコード
    }, 0);


Windows Phone 7 に関する注意点
----------------------

Zune とデバイスが接続している間は、ネイティブカメラアプリケーションは起動せずに、エラーコールバックが呼び出されます。

Tizen に関する注意点
----------------------

Tizenは `destinationType` では `Camera.DestinationType.FILE_URI`、 `sourceType` では `Camera.PictureSourceType.PHOTOLIBRARY` のみをサポートしています。

使用例
-------------

写真を撮影し、 Base64 形式のイメージとして取得します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
     });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('エラーが発生しました: ' + message);
    }

撮影した写真の URI を取得します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('エラーが発生しました: ' + message);
    }


詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>写真を撮ってみよう</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // 写真ソース
        var destinationType; // 戻り値のフォーマット

        // Cordova がデバイスと接続するまで待機
        //
        document.addEventListener("deviceready",onDeviceReady,false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        // 写真の撮影に成功した場合 (URI 形式)
        //
        function onPhotoDataSuccess(imageData) {
          // 下記のコメントを外すことで Base64 形式のデータをログに出力
          // console.log(imageData);

          // 画像ハンドルを取得
          //
          var smallImage = document.getElementById('smallImage');

          // 画像要素を表示
          //
          smallImage.style.display = 'block';

          // 取得した写真を表示
          // 画像のリサイズにインライン CSS を使用
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }

        // 写真の撮影に成功した場合 (URI  形式)
        //
        function onPhotoURISuccess(imageURI) {
          // 下記のコメントを外すことでファイル URI をログに出力
          // console.log(imageURI);

          // 画像ハンドルを取得
          //
          var largeImage = document.getElementById('largeImage');

          // 画像要素を表示
          //
          largeImage.style.display = 'block';

          // 取得した写真を表示
          // 画像のリサイズにインライン CSS を使
          //
          largeImage.src = imageURI;
        }

        // ボタンがクリックされた場合の処理
        //
        function capturePhoto() {
          // 編集が許可された写真を撮影し、 Base64 形式のイメージとして取得する場合
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }

        // ボタンがクリックされた場合の処理
        //
        function capturePhotoEdit() {
          // 編集が許可された写真を撮影し、 Base64 形式のイメージとして取得する場合
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }

        // ボタンがクリックされた場合の処理
        //
        function getPhoto(source) {
          // 写真をファイル URI として取得する場合
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }

        // エラー発生時の処理
        //
        function onFail(message) {
          alert('エラーが発生しました: ' + message);
        }

        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">写真を撮影</button> <br>
        <button onclick="capturePhotoEdit();">写真を撮影して編集</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">フォトライブラリから取得</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">フォトアルバムから取得</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>
