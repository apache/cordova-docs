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
---


Camera
======

> `camera` オブジェクトは、デバイスのカメラアプリへの制御を提供します。

メソッド
-------

- camera.getPicture



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

注意: iPhone 4 や Black Berry Touch 9800 などの最新デバイスで撮影したイメージの画質は良好で、フォトアルバムから取得する画像はたとえ quality パラメーターで画質を指定したとしても、縮小されません。 _そのような画像を Base64 でエンコードすると、メモリーの問題が発生します。_ よって、 FILE_URI を 'Camera.destinationType' として使用することが推奨されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上) 
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2


Windows Phone 7 に関する注意点
----------------------

Zune とデバイスが接続している間は、ネイティブカメラアプリケーションは起動せずに、エラーコールバックが呼び出されます。


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

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
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



cameraSuccess
=============

撮影が成功したときに呼び出されるコールバック関数です。

    function(imageData) {
        // 任意のコード
    }

パラメーター
----------

- __imageData:__ Base64 エンコーディングされた画像データ、またはイメージファイルの URI (`cameraOptions`による) (`String`)

使用例
-------

    // 画像を表示
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }



cameraError
===========

エラーが発生した場合に呼び出されるコールバック関数です。

    function(message) {
        // エラーメッセージを表示
    }

パラメーター
----------

- __message:__ デバイスのネイティブコードによって与えられたメッセージ (`String`)



cameraOptions
=============

カメラの設定をカスタマイズするのためのオプションパラメーターです。

    { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100 };

オプション
-------

- __quality:__ イメージの画質を指定します。 範囲: 0から100 (`Number`)

- __destinationType:__ 返り値のフォーマットを指定します。フォーマットは navigator.camera.DestinationType で定義されています。 (`Number`)

        Camera.DestinationType = {
            DATA_URL : 0,           // 画像を Base64 形式で取得
            FILE_URI : 1            // 画像をファイル URI として取得
        };

- __sourceType:__ 取得ソースを指定します。ソースは nagivator.camera.PictureSourceType で定義されています。 (`Number`)

        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit:__ イメージ選択の前に、簡単な編集を許可します。 (`Boolean`)

- __encodingType:__ 画像ファイルのエンコード形式を選択します。形式は navigator.camera.EncodingType で定義されています。 (`Number`)

        Camera.EncodingType = {
            JPEG : 0,               // 画像を JPEG 形式で取得
            PNG : 1                 // 画像を PNG 形式で取得
        };

- __targetWidth:__ 画像をスケールするための幅をピクセルで指定します。 targetHeight と同時に使用してください。アスペクト比は保持されます。 (`Number`)
- __targetHeight:__ 画像をスケールするための高さをピクセルで指定します。 targetWidth と同時に使用してください。アスペクト比は保持されます。 (`Number`)

- __mediaType:__ 画像の取得元を指定します。 PictureSourceType に PHOTOLIBRARY もしくは SAVEPHOTOALBUM が指定されている場合にのみ有効です。取得元は nagivator.camera.MediaType で定義されています。 (`Number`)

        Camera.MediaType = {
            PICTURE: 0,             // 取得元は静止画像のみとします。デフォルトです。返り値のフォーマットは DestinationType によって指定されたものになります。
            VIDEO: 1,               // 取得元はビデオのみとします。戻り値のフォーマットは常にファイル URI となります。
            ALLMEDIA : 2            // 全てのメディアタイプからの取得を許可します。
        };

- __correctOrientation:__ 写真が撮影されたときと同じ向きになるよう写真を回転させます。 (`Boolean`)
- __saveToPhotoAlbum:__ 写真が撮影された後、デバイスのフォトアルバムに画像を保存します。 (`Boolean`)

Android に関する注意点
--------------

- `allowEdit` は無視されます。
- Camera.PictureSourceType.PHOTOLIBRARY と Camera.PictureSourceType.SAVEDPHOTOALBUM は同じフォトアルバムを表示します。
- Camera.EncodingType はサポートされていません。
- `correctOrientation` パラメーターは無視されます。
- `saveToPhotoAlbum` パラメーターは無視されます。

BlackBerry に関する注意点
-----------------

- `quality` パラメーターは無視されます。
- `sourceType` パラメーターは無視されます。
- `allowEdit` は無視されます。
- 撮影後にカメラアプリを閉じるためには、アプリケーションにキー入力許可の権限が付与されている必要があります。
- 大きなサイズで撮影を行った場合、高画質カメラを搭載したデバイスでエンコードすることができない場合があります。 (Torch 9800 など)
- Camera.MediaType はサポートされていません。
- `correctOrientation` パラメーターは無視されます。
- `saveToPhotoAlbum` パラメーターは無視されます。

Palm に関する注意点
-----------

- `quality` パラメーターは無視されます。
- `sourceType` パラメーターは無視されます。
- `allowEdit` は無視されます。
- Camera.MediaType はサポートされていません。
- `correctOrientation` パラメーターは無視されます。
- `saveToPhotoAlbum` パラメーターは無視されます。

iOS に関する注意点
--------------

- メモリエラーを防ぐには、 `quality` パラメーターを50以下に設定してください。
- `destinationType.FILE_URI` が使用された場合、撮影された写真や編集された写真はアプリケーションの temporary ディレクトリに保存されます。
- アプリケーションの temporary ディレクトリの中身はアプリケーション終了とともに消去されます。もしストレージの空きが少ない場合、このディレクトリは navigator.fileMgr API を使って消去できます。

Windows Phone 7 に関する注意点
--------------

- `allowEdit` は無視されます。
- `correctOrientation` パラメーターは無視されます。
- `saveToPhotoAlbum` パラメーターは無視されます。

Bada 1.2 に関する注意点
--------------
- オプションはサポートされていません。
- 常に FILE URI を返します。

