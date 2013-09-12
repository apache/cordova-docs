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

要自訂相機設置的可選參數。

    {品質： 75，destinationType： Camera.DestinationType.DATA_URL，sourceType： Camera.PictureSourceType.CAMERA，allowEdit： 為 true，encodingType： Camera.EncodingType.JPEG，targetWidth： 100，targetHeight： 100，popoverOptions： CameraPopoverOptions，saveToPhotoAlbum： 虛假} ；
    

## 選項

*   **品質**： 保存的圖像，表示為一系列的 0-100，在 100 哪裡通常全解析度而不會丟失檔的壓縮品質。 *（人數）*（請注意相機的解析度有關的資訊是不可用）。

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL： 0，/ / 返回圖像作為 base64 編碼字串 FILE_URI： 1，/ / 返回影像檔的 URI NATIVE_URI： 2 / / 返回圖像本機 URI (例如，資產庫： / / 在 iOS 或內容上： / / 在 Android 上)} ；
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0，相機： 1，SAVEDPHOTOALBUM: 2} ；
        

*   **allowEdit**： 允許簡單編輯的選擇面前的形象。*（布林）*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0，/ / 返回 JPEG 編碼的 PNG 圖像： 1 / / 返回 PNG 編碼的圖像} ；
        

*   **targetWidth**： 以圖元為單位的尺度圖像的寬度。必須與**targetHeight**一起使用。縱橫比保持不變。*（人數）*

*   **targetHeight**： 以圖元為單位的尺度圖像的高度。必須與**targetWidth**一起使用。縱橫比保持不變。*（人數）*

*   **媒體類型**： 設置要從選擇媒體的類型。 時才起作用 `PictureSourceType` 是 `PHOTOLIBRARY` 或 `SAVEDPHOTOALBUM` 。 定義在 `nagivator.camera.MediaType` *（人數）* 
    
        Camera.MediaType = {圖片: 0，/ / 允許只仍然圖片的選擇。 預設情況。 將返回指定通過 DestinationType 視頻格式： 1，/ / 允許選擇的視頻，將始終返回 FILE_URI ALLMEDIA: 2 / / 允許從所有媒體類型的選擇
        
    
    };

*   **correctOrientation**： 旋轉圖像，期間擷取裝置的方向的正確。*（布林）*

*   **saveToPhotoAlbum**： 將圖像保存到相冊在設備上捕獲後。*（布林）*

*   **popoverOptions**： 僅限 iOS 在 iPad 中指定彈出位置的選項。在中定義`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {回: 0，/ / 使用前面後面攝像頭： 1 / / 使用前置攝像頭} ；
        

## Android 的怪癖

*   任何 `cameraDirection` 值回朝的照片中的結果。

*   忽略 `allowEdit` 參數。

*   `Camera.PictureSourceType.PHOTOLIBRARY`和 `Camera.PictureSourceType.SAVEDPHOTOALBUM` 都顯示相同的相冊。

## 黑莓手機的怪癖

*   忽略 `quality` 參數。

*   忽略 `sourceType` 參數。

*   忽略 `allowEdit` 參數。

*   應用程式必須具有關鍵注射許可權後，使用者會對齊照片關閉攝像頭本機應用程式。

*   使用大圖像的大小可能會導致無法編碼圖像以後模型設備 （例如，火炬 9800) 上的該功能的高解析度攝像機。

*   `Camera.MediaType`不受支援。

*   忽略 `correctOrientation` 參數。

*   忽略 `cameraDirection` 參數。

## iOS 的怪癖

*   設置 `quality` 低於 50，避免在某些設備上的記憶體不足錯誤。

*   當使用 `destinationType.FILE_URI` ，照片保存在應用程式的臨時目錄中。 你可能會刪除此目錄使用的內容 `navigator.fileMgr` Api 如果存儲空間是關注的問題。

## Tizen 怪癖

*   不支援的選項

*   始終返回一個檔的 URI

## Windows Phone 7 和 8 怪癖

*   忽略 `allowEdit` 參數。

*   忽略 `correctOrientation` 參數。

*   忽略 `cameraDirection` 參數。