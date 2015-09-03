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


# カメラ

> `camera`オブジェクトは、デバイスのデフォルト カメラ アプリケーションへのアクセスを提供します。

**重要なプライバシーの注意：**デバイスのカメラからの画像の収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシーは、カメラを使う方法と他の当事者との記録された画像の共有かどうかを議論すべき。 さらに、カメラのアプリの使用がない場合明らかに、ユーザー インターフェイスで、(デバイス オペレーティング システム既にそうしない） 場合、カメラへのアクセス、アプリの前に、ジャスト イン タイム通知を提供する必要があります。 その通知は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 詳細については、プライバシーに関するガイドを参照してください。

## メソッド

*   camera.getPicture
*   camera.cleanup

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   iOS （`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    参照: [Tizen Web アプリケーションのアプリケーション マニフェスト][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


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


# cameraSuccess

画像データを提供する onSuccess コールバック関数。

    function(imageData) {
        // Do something with the image
    }
    

## パラメーター

*   **imagedata を扱う**: Base64 エンコード イメージのデータ、*または*画像ファイルによって URI の `cameraOptions` 効果。*(文字列)*

## 例

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

エラー メッセージを提供する onError コールバック関数。

    function(message) {
        // Show a helpful message
    }
    

## パラメーター

*   **メッセージ**: メッセージは、デバイスのネイティブ コードによって提供されます。*(文字列)*


# cameraOptions

カメラの設定をカスタマイズするオプションのパラメーター。

    {品質： 75、destinationType: Camera.DestinationType.DATA_URL、sourceType: Camera.PictureSourceType.CAMERA、allowEdit: true の場合、encodingType: Camera.EncodingType.JPEG、targetWidth: 100、targetHeight: 100、popoverOptions： CameraPopoverOptions、saveToPhotoAlbum: false};
    

## オプション

*   **品質**： 0-100、100 がファイルの圧縮から損失なしで通常のフル解像度の範囲で表される、保存されたイメージの品質。 *(数)*（カメラの解像度についての情報が利用できないことに注意してください)。

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0、/base64 エンコード文字列 FILE_URI としてイメージを返す/: 1、//画像ファイル URI NATIVE_URI を返す： 2//戻り画像ネイティブ URI (例えば、資産ライブラリ://iOS またはコンテンツに：//アンドロイド)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {フォト ライブラリ: 0, カメラ: 1、SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: 単純な選択の前に画像の編集を許可します。*(ブール値)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0//戻る JPEG PNG イメージをエンコード: 1/返す PNG イメージをエンコードされた/};
        

*   **targetWidth**: スケール イメージにピクセル単位の幅。**TargetHeight**を使用する必要があります。縦横比は変わりません。*(数)*

*   **targetHeight**: スケール イメージにピクセル単位の高さ。**TargetWidth**を使用する必要があります。縦横比は変わりません。*(数)*

*   **mediaType**： から選択するメディアの種類を設定します。 場合にのみ働きます `PictureSourceType` は `PHOTOLIBRARY` または `SAVEDPHOTOALBUM` 。 定義されている `nagivator.camera.MediaType` *（番号）* 
    
        Camera.MediaType = {画像： 0//静止画のみを選択できます。 既定値です。 DestinationType ビデオを介して指定された形式が返されます: 1、/のみ、常に戻る FILE_URI ALLMEDIA のビデオの選択を許可する/: 2//すべてのメディア タイプからの選択を許可
        
    
    };

*   **correctOrientation**: キャプチャ中に、デバイスの向きを修正する画像を回転させます。*(ブール値)*

*   **saveToPhotoAlbum**: キャプチャ後、デバイス上のフォト アルバムに画像を保存します。*(ブール値)*

*   **popoverOptions**: iPad のポップ オーバーの場所を指定する iOS のみのオプションです。定義されています。`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {戻る: 0、//後ろ向きカメラ前部を使用: 1/フロントに面したカメラを使用して/};
        

## Android の癖

*   任意 `cameraDirection` 背面写真で結果の値します。

*   無視、 `allowEdit` パラメーター。

*   `Camera.PictureSourceType.PHOTOLIBRARY``Camera.PictureSourceType.SAVEDPHOTOALBUM`両方のアルバムが表示されます同じ写真。

## ブラックベリーの癖

*   無視、 `quality` パラメーター。

*   無視、 `sourceType` パラメーター。

*   無視、 `allowEdit` パラメーター。

*   アプリケーションが、ユーザーは写真をスナップした後、ネイティブのカメラ アプリケーションを閉じるするには、キーの挿入権限が必要です。

*   大きい画像サイズを使用すると、その機能の高解像度カメラ後でモデルのデバイス （例えば、トーチ 9800） で画像をエンコードすることができない可能性があります。

*   `Camera.MediaType`サポートされていません。

*   無視、 `correctOrientation` パラメーター。

*   無視、 `cameraDirection` パラメーター。

## iOS の癖

*   設定 `quality` 一部のデバイスでメモリ不足エラーを避けるために 50 の下。

*   使用する場合 `destinationType.FILE_URI` 、写真、アプリケーションの一時ディレクトリに保存されます。 使用して、このディレクトリの内容を削除可能性があります、 `navigator.fileMgr` Api のストレージ スペースが必要な場合。

## Tizen の癖

*   サポートされていないオプション

*   常にファイルの URI を返す

## Windows Phone 7 と 8 癖

*   無視、 `allowEdit` パラメーター。

*   無視、 `correctOrientation` パラメーター。

*   無視、 `cameraDirection` パラメーター。


# CameraPopoverOptions

iOS だけ指定パラメーターをポップ オーバーのアンカー要素の場所および矢印方向計算されたライブラリまたはアルバムから画像を選択するとき。

    {x: 0, y: 32、幅： 320、高さ： 480、arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: ピクセルの x 座標画面要素にポップ オーバーのアンカーになります。*(数)*

*   **y**: y ピクセル座標の画面要素にポップ オーバーのアンカーになります。*(数)*

*   **幅**: ポップ オーバーのアンカーになる上の画面要素のピクセル単位の幅。*(数)*

*   **高さ**: ポップ オーバーのアンカーになる上の画面要素のピクセル単位の高さ。*(数)*

*   **arrowDir**: 方向のポップ オーバーで矢印をポイントする必要があります。定義されている `Camera.PopoverArrowDirection` *（番号）* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1、/iOS UIPopoverArrowDirection 定数 ARROW_DOWN と一致する/: 2、ARROW_LEFT： 4、ARROW_RIGHT： 8、ARROW_ANY: 15};
        

矢印の方向と、画面の向きを調整するポップ オーバーのサイズを変更可能性がありますに注意してください。 アンカー要素の位置を指定するときの方向の変化を考慮することを確認します。

## 簡単な例

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }


# CameraPopoverHandle

によって作成されたポップオーバーパン ダイアログへのハンドル`camera.getPicture`.

## メソッド

*   **setPosition**: ポップ オーバーの位置を設定します。

## サポートされているプラットフォーム

*   iOS

## setPosition

ポップ オーバーの位置を設定します。

**パラメーター:**

*   `cameraPopoverOptions`:、 `CameraPopoverOptions` の新しい位置を指定します。

## 簡単な例

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## 完全な例

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }
