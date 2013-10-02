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

需要使用的相機，一張照片或從設備的圖像庫檢索一張照片。 圖像作為 base64 編碼傳遞成功回檔到 `String` ，或作為影像檔的 URI。 該方法本身返回 `CameraPopoverHandle` 可以用於重新置放檔選擇彈出的物件。

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## 說明

`camera.getPicture`函數將打開該設備的預設攝像頭應用程式，使使用者能夠對齊圖片。 預設情況下，會發生此行為時 `Camera.sourceType` 等於 `Camera.PictureSourceType.CAMERA` 。 一旦使用者快照照片、 攝像頭應用程式關閉，並恢復該應用程式。

如果 `Camera.sourceType` 是 `Camera.PictureSourceType.PHOTOLIBRARY` 或 `Camera.PictureSourceType.SAVEDPHOTOALBUM` ，然後允許使用者選擇一個現有圖像對話方塊的顯示。 `camera.getPicture`函數返回 `CameraPopoverHandle` 物件，可用於設備方向更改時重新置放圖像選擇對話方塊，例如。

傳回值發送到 `cameraSuccess` 回呼函數，根據指定的以下格式之一 `cameraOptions` ：

*   A `String` 包含的 base64 編碼的照片圖像。

*   A `String` 表示在本機存放區 （預設值） 上的影像檔位置。

你可以做任何你想與編碼的圖像或 URI，例如：

*   呈現在圖像 `<img>` 標記，如下面的示例所示

*   保存本地的資料 （ `LocalStorage` ， [Lawnchair][1]，等等.)

*   將資料發佈到遠端伺服器

 [1]: http://brianleroux.github.com/lawnchair/

**注：**在較新的設備上的照片解析度是相當不錯的。 從設備的庫選擇了照片不到較低的品質，壓縮螢幕使即使 `quality` 指定參數。 為了避免常見的記憶體問題，設置 `Camera.destinationType` 到 `FILE_URI` 而不是`DATA_URL`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## Android 的怪癖

Android 使用意向啟動捕獲圖像，在設備上的相機活動和與低記憶體手機，科爾多瓦活動可能被殺。 在此方案中，可能不會顯示圖像還原科爾多瓦活動時。

## iOS 的怪癖

包括 JavaScript `alert()` 中任一回檔的函數可能會導致問題。 換行內的警報 `setTimeout()` ，允許 iOS 圖像選取器或彈出要完全關閉之前警報將顯示：

    setTimeout(function() {/ / 做你的事!}，0) ；
    

## Windows Phone 7 的怪癖

調用本機攝像頭應用程式，同時通過 Zune 連接您的設備不工作，並觸發錯誤回檔。

## Tizen 怪癖

Tizen 僅支援 `destinationType` 的 `Camera.DestinationType.FILE_URI` 和 `sourceType` 的`Camera.PictureSourceType.PHOTOLIBRARY`.

## 快速的示例

拍一張照片，並檢索它為 base64 編碼的圖像：

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
    

拍一張照片和檢索圖像的檔位置：

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## 完整的示例

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