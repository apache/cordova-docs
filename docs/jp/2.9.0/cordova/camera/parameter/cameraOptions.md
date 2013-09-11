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

cameraOptions
=============

カメラの設定をカスタマイズするのためのオプションパラメーターです。

    { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false };

オプション
-------

- __quality:__ イメージの画質を指定します。 範囲は0から100までであり、100を指定すると非圧縮時の解像度となります。_(Number)_ (カメラ解像度に関する情報を利用することはできません)

- __destinationType:__ 返り値のフォーマットを指定します。フォーマットは `navigator.camera.DestinationType` で定義されています。 _(Number)_

        Camera.DestinationType = {
            DATA_URL : 0,      // 画像を Base64 形式で取得
            FILE_URI : 1,      // 画像をファイル URI として取得
            NATIVE_URI : 2     // 画像のネイティブURIとして取得 (例えば、iOSなら assets-library:// 、Androidなら content://)
        };

- __sourceType:__ 取得ソースを指定します。ソースは nagivator.camera.PictureSourceType で定義されています。 _(Number)_

        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit:__ イメージ選択の前に、簡単な編集を許可します。 _(Boolean)_

- __encodingType:__ 画像ファイルのエンコード形式を選択します。形式は navigator.camera.EncodingType で定義されています。 _(Number)_

        Camera.EncodingType = {
            JPEG : 0,          // 画像を JPEG 形式で取得
            PNG : 1            // 画像を PNG 形式で取得
        };

- __targetWidth:__ 画像をスケールするための幅をピクセルで指定します。 targetHeight と同時に使用してください。アスペクト比は保持されます。 _(Number)_
- __targetHeight:__ 画像をスケールするための高さをピクセルで指定します。 targetWidth と同時に使用してください。アスペクト比は保持されます。 _(Number)_

- __mediaType:__ 画像の取得元を指定します。 PictureSourceType に PHOTOLIBRARY もしくは SAVEPHOTOALBUM が指定されている場合にのみ有効です。取得元は nagivator.camera.MediaType で定義されています。 _(Number)_

        Camera.MediaType = {
            PICTURE: 0,        // 取得元は静止画像のみとします。デフォルトです。返り値のフォーマットは DestinationType によって指定されたものになります。
            VIDEO: 1,          // 取得元はビデオのみとします。戻り値のフォーマットは常にファイル URI となります。
            ALLMEDIA : 2       // 全てのメディアタイプからの取得を許可します。
        };

- __correctOrientation:__ 写真が撮影されたときと同じ向きになるよう写真を回転させます。 _(Boolean)_
- __saveToPhotoAlbum:__ 写真が撮影された後、デバイスのフォトアルバムに画像を保存します。 _(Boolean)_
- __popoverOptions:__ iPad でのポップオーバーの位置を指定します。iOS のみのオプションです。 `CameraPopoverOptions` で定義されます。
- __cameraDirection__: 使用するカメラを選択します(フロントかバックのカメラ)。 `navigator.camera.Direction` で定義されます。 _(Number)_

        Camera.Direction = {
            BACK : 0,      // バックのカメラを使用します
            FRONT : 1      // フロントのカメラを使用します
        };


Android に関する注意点
--------------

- `allowEdit` は無視されます。
- `Camera.PictureSourceType.PHOTOLIBRARY` と `Camera.PictureSourceType.SAVEDPHOTOALBUM` は同じフォトアルバムを表示します。

BlackBerry に関する注意点
-----------------

- `quality` パラメーターは無視されます。
- `sourceType` パラメーターは無視されます。
- `allowEdit` は無視されます。
- 撮影後にカメラアプリを閉じるためには、アプリケーションにキー入力許可の権限が付与されている必要があります。
- 大きなサイズで撮影を行った場合、高画質カメラを搭載したデバイスでエンコードすることができない場合があります。 (Torch 9800 など)
- Camera.MediaType はサポートされていません。
- `correctOrientation` パラメーターは無視されます。

iOS に関する注意点
--------------

- メモリエラーを防ぐには、 `quality` パラメーターを50以下に設定してください。
- `destinationType.FILE_URI` が使用された場合、撮影された写真や編集された写真はアプリケーションの temporary ディレクトリに保存されます。もしストレージの空きが少ない場合、このディレクトリは `navigator.fileMgr` API を使って消去できます。

Tizen に関する注意点
--------------
- オプションはサポートされていません。
- 常に FILE URI を返します。

Windows Phone 7 と 8 に関する注意点
--------------

- `allowEdit` パラメーターは無視されます。
- `correctOrientation` パラメーターは無視されます。
- `cameraDirection ` パラメーターは無視されます。
