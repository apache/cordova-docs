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

# camera.getPicture

カメラを使用して写真を取るか、デバイスの画像ギャラリーから写真を取得します。 イメージは base64 エンコードとして成功時のコールバックに渡される `String` 、またはイメージ ファイルの URI。 メソッド自体を返します、 `CameraPopoverHandle` オブジェクト ファイル選択ポップ オーバーの位置を変更するために使用することができます。

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## 説明

`camera.getPicture`関数はデバイスのデフォルトのカメラ アプリケーションの写真をスナップするユーザーことができますを開きます。 既定では、この現象が発生したときに `Camera.sourceType` に等しい `Camera.PictureSourceType.CAMERA` 。 ユーザーは写真をスナップ、カメラ アプリケーションを閉じるし、アプリケーションが復元されます。

場合 `Camera.sourceType` は、 `Camera.PictureSourceType.PHOTOLIBRARY` または `Camera.PictureSourceType.SAVEDPHOTOALBUM` 、その後、ダイアログが表示されますユーザーを既存のイメージを選択することができます。 `camera.getPicture`関数を返す、 `CameraPopoverHandle` オブジェクトは、たとえば、イメージの選択ダイアログには、デバイスの向きが変更されたときの位置を変更するために使用することができます。

戻り値に送信されます、 `cameraSuccess` の指定によって、次の形式のいずれかのコールバック関数 `cameraOptions` :

*   A `String` 写真の base64 でエンコードされたイメージを含んでいます。

*   A `String` (既定値) のローカル記憶域上のイメージ ファイルの場所を表します。

自由に変更、エンコードされたイメージ、または URI などを行うことができます。

*   イメージをレンダリングする `<img>` 以下の例のように、タグ

*   ローカル データの保存 ( `LocalStorage` 、 [Lawnchair][1]など)。

*   リモート サーバーにデータを投稿します。

 [1]: http://brianleroux.github.com/lawnchair/

**注：**新しい装置で写真の解像度はかなり良いです。 デバイスのギャラリーから選択した写真が下方の品質に縮小しない場合でも、 `quality` パラメーターを指定します。 一般的なメモリの問題を回避する設定 `Camera.destinationType` を `FILE_URI` よりもむしろ`DATA_URL`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## Android の癖

アンドロイド、イメージをキャプチャするデバイス上でカメラのアクティビティを開始する意図を使用し、メモリの少ない携帯電話、コルドバ活動が殺されるかもしれない。 このシナリオでは、コルドバの活動が復元されるとき、画像が表示されません。

## iOS の癖

JavaScript を含む `alert()` 関数コールバックのいずれかの問題を引き起こすことができます。 内でアラートのラップ、 `setTimeout()` iOS イメージ ピッカーまたはが完全に終了するまで、警告が表示されますポップ オーバーを許可します。

    setTimeout(function() {//ここにあなたのことを行います ！}, 0);
    

## Windows Phone 7 の癖

Zune を介してお使いのデバイスが接続されているネイティブのカメラ アプリケーションの起動動作しませんし、エラー コールバックをトリガーします。

## Tizen の癖

Tizen のみをサポートしている、 `destinationType` の `Camera.DestinationType.FILE_URI` と `sourceType` の`Camera.PictureSourceType.PHOTOLIBRARY`.

## 簡単な例

写真を撮るし、base64 エンコード イメージとして取得します。

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
    

写真を撮るし、イメージのファイルの場所を取得します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64-encoded image data
          // console.log(imageData);
    
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
    
          // Unhide image elements
          //
          smallImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI
          // console.log(imageURI);
    
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
    
          // Unhide image elements
          //
          largeImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }
    
        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }
    
        // Called if something bad happens.
        //
        function onFail(message) {
          alert('Failed because: ' + message);
        }
    
        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>