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

需要使用的相机，一张照片或从设备的图像库检索一张照片。 图像作为 base64 编码传递成功回调到 `String` ，或作为图像文件的 URI。 该方法本身返回 `CameraPopoverHandle` 可以用于重新定位文件选择弹出的对象。

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## 说明

`camera.getPicture`函数将打开该设备的默认摄像头应用程序，使用户能够对齐图片。 默认情况下，会发生此行为时 `Camera.sourceType` 等于 `Camera.PictureSourceType.CAMERA` 。 一旦用户快照照片、 摄像头应用程序关闭，并恢复该应用程序。

如果 `Camera.sourceType` 是 `Camera.PictureSourceType.PHOTOLIBRARY` 或 `Camera.PictureSourceType.SAVEDPHOTOALBUM` ，然后允许用户选择一个现有图像对话框的显示。 `camera.getPicture`函数返回 `CameraPopoverHandle` 对象，可用于设备方向更改时重新定位图像选择对话框，例如。

返回值发送到 `cameraSuccess` 回调函数，根据指定的以下格式之一 `cameraOptions` ：

*   A `String` 包含的 base64 编码的照片图像。

*   A `String` 表示在本地存储 （默认值） 上的图像文件位置。

你可以做任何你想与编码的图像或 URI，例如：

*   呈现在图像 `<img>` 标记，如下面的示例所示

*   保存本地的数据 （ `LocalStorage` ， [Lawnchair][1]，等等.)

*   将数据发布到远程服务器

 [1]: http://brianleroux.github.com/lawnchair/

**注：**在较新的设备上的照片分辨率是相当不错的。 从设备的库选择了照片不到较低的质量，压缩屏幕使即使 `quality` 指定参数。 为了避免常见的内存问题，设置 `Camera.destinationType` 到 `FILE_URI` 而不是`DATA_URL`.

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## Android 的怪癖

Android 使用意向启动捕获图像，在设备上的相机活动和与低内存手机，科尔多瓦活动可能被杀。 在此方案中，可能不会显示图像还原科尔多瓦活动时。

## iOS 的怪癖

包括 JavaScript `alert()` 中任一回调的函数可能会导致问题。 换行内的警报 `setTimeout()` ，允许 iOS 图像选取器或弹出要完全关闭之前警报将显示：

    setTimeout(function() {/ / 做你的事!}，0) ；
    

## Windows Phone 7 的怪癖

调用本机摄像头应用程序，同时通过 Zune 连接您的设备不工作，并触发错误回调。

## Tizen 怪癖

Tizen 仅支持 `destinationType` 的 `Camera.DestinationType.FILE_URI` 和 `sourceType` 的`Camera.PictureSourceType.PHOTOLIBRARY`.

## 快速的示例

拍一张照片，并检索它为 base64 编码的图像：

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
    

拍一张照片和检索图像的文件位置：

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