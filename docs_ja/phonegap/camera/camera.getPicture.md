camera.getPicture
=================

デバイスのカメラで写真を撮る、またはデバイスのアルバム内にある写真を検索します。

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

概要
-----------

`camera.getPicture` 関数はデバイスが標準で備えるカメラアプリを実行します。
( `Camera.sourceType = Camera.PictureSourceType.CAMERA` に設定する必要がありますが、デフォルトの設定となります。) 写真の撮影が完了するとカメラアプリは終了し、アプリケーションに戻ります。

 `Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY` もしくは `Camera.PictureSourceType.SAVEDPHOTOALBUM` が指定された場合、写真選択ダイアログが表示されます。

返り値は `cameraSuccess` 関数に送信されます。値は `cameraOptions` の設定に従い、以下のいずれかのフォーマットで送られます。

- Base64形式でエンコードされたフォトイメージを表す文字列 (デフォルト)
- ローカルストレージ内に記録されたファイルの場所を表す文字列

エンコードされたイメージやURIをもとに、以下のような処理の記述が可能です。。

- <img>タグで画像を表示 _(下記の例を参考にしてください)_
- データをローカルに保存 ( `LocalStorage` や [Lawnchair](http://brianleroux.github.com/lawnchair/) を使用します)
- データをリモートサーバーに送信

注意： iPhone 4 や Black Berry Touch 9800 などの最新デバイスで撮影したイメージの画質は良好です。ただし、そのような画像データをBase64でエンコードすると、メモリーの問題が発生します。よって、 FILE_URL を Camera.DestinationType として使用することが推奨されます。

サポートされているプラットフォーム
-------------------

- Android
- Blackberry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

撮影した写真をBase64形式のイメージとして取得します。

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('エラーが発生しました: ' + message);
    }

撮影した写真を、イメージファイルとして取得します。

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

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>写真を撮ってみよう</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // 写真ソース
        var destinationType; // 戻り値のフォーマット
        
        // PhoneGapがデバイスと接続するまで待機
        //
        function onLoad() {
            document.addEventListener("deviceready",onDeviceReady,false);
        }
    
        // PhoneGapの準備完了
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        // 写真の撮影に成功した場合（その1）
        //
        function onPhotoDataSuccess(imageData) {
          // 下記のコメントを外すことでBase64形式のデータをログに出力
          // console.log(imageData);
      
          // 画像ハンドルを取得
          //
          var smallImage = document.getElementById('smallImage');
      
          // 画像要素を表示
          //
          smallImage.style.display = 'block';
      
          // 取得した写真を表示
          // 画像のリサイズにインラインCSSを使用
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }

        // 写真の撮影に成功した場合（その2）
        //
        function onPhotoURISuccess(imageURI) {
          // 下記のコメントを外すことでファイルURIをログに出力
          // console.log(imageURI);
      
          // 画像ハンドルを取得
          //
          var largeImage = document.getElementById('largeImage');
      
          // 画像要素を表示
          //
          largeImage.style.display = 'block';
      
          // 取得した写真を表示
          // 画像のリサイズにインラインCSSを使用
          //
          largeImage.src = imageURI;
        }

        // ボタンがクリックされた場合の処理
        //
        function capturePhoto() {
          // 撮影した写真をBase64形式の文字列として取得する場合
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
        }

        // ボタンがクリックされた場合の処理
        //
        function capturePhotoEdit() {
          // 撮影した写真を編集したあと、Base64形式の文字列として取得する場合
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
        }
    
        // ボタンがクリックされた場合の処理
        //
        function getPhoto(source) {
          // 撮影した写真をファイルURIとして取得する場合
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }

        // エラー発生時の処理
        // 
        function onFail(mesage) {
          alert('エラーが発生しました: ' + message);
        }

        </script>
      </head>
      <body onload="onLoad()">
        <button onclick="capturePhoto();">写真を撮影</button> <br>
        <button onclick="capturePhotoEdit();">写真を撮影して編集</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">フォトライブラリから取得</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">フォトアルバムから取得</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>