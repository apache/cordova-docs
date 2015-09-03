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


# 相機

> `camera`物件提供對該設備的預設攝像頭應用程式的訪問。

**重要的隱私注：**圖像從一個設備觀景窗的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論應用程式如何使用相機和是否與任何其他方共用錄製的影像。 此外，如果相機的應用程式的使用在使用者介面中不是明顯的應在您的應用程式訪問相機 （如果設備作業系統不會這樣做已經） 之前提供只是在時間的通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 有關詳細資訊，請參閱隱私指南。

## 方法

*   camera.getPicture
*   camera.cleanup

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   （在 iOS`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

*   （在 Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    引用： [Tizen Web 應用程式的應用程式清單][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


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


# cameraSuccess

onSuccess 提供的圖像資料的回呼函數。

    function(imageData) {
        // Do something with the image
    }
    

## 參數

*   **把圖像資料**： Base64 編碼的圖像資料，*或*影像檔的 URI，取決於 `cameraOptions` 生效。*（字串）*

## 示例

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

onError 回呼函數的函數提供了一條錯誤訊息。

    function(message) {
        // Show a helpful message
    }
    

## 參數

*   **消息**： 消息提供的設備的本機代碼。*（字串）*


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


# CameraPopoverOptions

iOS 僅指定彈出的錨元素的位置和箭頭方向，從 iPad 的庫或專輯選擇圖像時的參數。

    {x: 0，y： 32，寬度： 320，高度： 480，arrowDir： Camera.PopoverArrowDirection.ARROW_ANY} ；
    

## CameraPopoverOptions

*   **x**： 圖元的 x 座標上的錨定彈出螢幕元素。*（人數）*

*   **y**： 到其錨定彈出螢幕元素的 y 圖元座標。*（人數）*

*   **寬度**： 寬度以圖元為單位），到其錨定彈出螢幕元素。*（人數）*

*   **高度**： 高度以圖元為單位），到其錨定彈出螢幕元素。*（人數）*

*   **arrowDir**： 上彈出的箭頭應指向的方向。定義在 `Camera.PopoverArrowDirection` *（人數）* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1，/ / 匹配 iOS UIPopoverArrowDirection 常量 ARROW_DOWN： 2，ARROW_LEFT： 4，ARROW_RIGHT： 8，ARROW_ANY： 15} ；
        

請注意彈出的大小可能會更改箭頭的方向和螢幕的方向調整。 請確保帳戶方向更改時指定的錨點的元素位置。

## 快速的示例

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

由創建的彈出對話方塊的控制碼`camera.getPicture`.

## 方法

*   **setPosition**: 設置彈出的位置。

## 支援的平臺

*   iOS

## setPosition

設置彈出的位置。

**參數：**

*   `cameraPopoverOptions`： `CameraPopoverOptions` ，指定新的位置

## 快速的示例

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## 完整的示例

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
