cameraOptions
=============

カメラの設定オプションのためのパラメータを表します。

    { quality : 75, 
      destinationType : Camera.DestinationType.DATA_URL, 
      sourceType : Camera.PictureSourceType.CAMERA, 
      allowEdit : true };

オプションの内容
-------

- __quality:__ イメージの画質を指定します。範囲:0から100 (`Number`)

- __destinationType:__ navigator.camera.DestinationTypeで定義された返り値のフォーマットを指定します (`Number`)
        
            Camera.DestinationType = {
                DATA_URL : 0,                // 画像をBase64形式で取得
                FILE_URI : 1                 // ファイルURIとして取得
            };

- __sourceType:__ navigator.camera.PictureSourceType で定義された取得ソースを指定します (`Number`)
     
        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,    // フォトライブラリ
            CAMERA : 1,          // カメラ
            SAVEDPHOTOALBUM : 2  // フォトアルバム
        };

- __allowEdit:__ イメージの簡単な編集を許可します (`Boolean`)
    
Androidに関する注意点
--------------

- `allowEdit` パラメータは無視されます
- Camera.PictureSourceType.PHOTOLIBRARY と Camera.PictureSourceType.SAVEDPHOTOALBUM は同じフォトアルバムを表示します。

BlackBerryに関する注意点
-----------------

- `quality` パラメータは無視されます
- `sourceType` パラメータは無視されます
- `allowEdit` パラメータは無視されます
- 撮影アプリを閉じるためには、アプリケーションにキー入力許可の権限が付与されている必要があります。
- 大きなサイズで撮影を行った場合、高画質カメラを搭載したデバイスでエンコードすることができない場合があります (例: Torch 9800)。

Palmに関する注意点
-----------

- `quality` パラメータは無視されます
- `sourceType` パラメータは無視されます
- `allowEdit` パラメータは無視されます

iPhoneに関する注意点
--------------

- メモリエラーを防ぐには、`quality` パラメータを50以下に設定してください。
- `destinationType.FILE_URI` が使用された場合、撮られた写真や編集された写真はアプリケーションの Documents/tmp ディレクトリに保存されます。
- アプリケーションの Documents/tmp ディレクトリはアプリ終了とともに消去されます。もしストレージの空きが少ない場合、このディレクトリは navigator.fileMgr API をつかって消去できます。

           navigator.fileMgr.deleteDirectory("tmp", onSuccess, onFail);
           