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