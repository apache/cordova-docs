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

デバイスのカメラで写真を撮る、またはデバイスのアルバム内にある写真を検索します。 Base64 形式でエンコードされたフォトイメージを表す文字列、またはイメージファイルの URI が返されます。

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

概要
-----------

`camera.getPicture` 関数はユーザーが写真を撮れるように、デバイスが標準で備えるカメラアプリを起動します (もしデフォルト設定である `Camera.sourceType = Camera.PictureSourceType.CAMERA` の場合) 。写真の撮影が完了するとカメラアプリは終了し、アプリケーションに戻ります。

もし `Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY` もしくは `Camera.PictureSourceType.SAVEDPHOTOALBUM` が指定された場合、写真選択ダイアログが表示され、アルバムから写真を選択できるようになります。

返り値は `cameraSuccess` 関数に送信されます。値は `cameraOptions` の設定に従い、以下のいずれかのフォーマットで送られます:

- Base64 形式でエンコードされたフォトイメージを表す文字列 (デフォルト)
- ローカルストレージ内に記録されたファイルの場所を表す文字列

エンコードされたイメージや URI をもとに、以下のような処理の記述が可能です:

- `<img>` タグで画像を表示 _(下記の使用例を参考にしてください)_
- データをローカルに保存 (`LocalStorage` や [Lawnchair](http://brianleroux.github.com/lawnchair/) など)
- データをリモートサーバーに送信

__注意:__ 最新のデバイスで撮影したイメージの画質は良好で、フォトアルバムから取得する画像はたとえ quality パラメーターで画質を指定したとしても、縮小されません。 ___そのような画像を Base64 でエンコードすると、メモリーの問題が発生します。よって、 FILE_URI を 'Camera.destinationType' として使用することが推奨されます。___

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上) 
- iOS
- Windows Phone 7 (Mango)
- Bada 1.2
- Tizen

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

'destinationType: Camera.DestinationType.FILE_URI' と 'sourceType: Camera.PictureSourceType.PHOTOLIBRARY' のみサポートされています。

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

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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
