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

要自定义相机设置的可选参数。

    {质量： 75，destinationType： Camera.DestinationType.DATA_URL，sourceType： Camera.PictureSourceType.CAMERA，allowEdit： 为 true，encodingType： Camera.EncodingType.JPEG，targetWidth： 100，targetHeight： 100，popoverOptions： CameraPopoverOptions，saveToPhotoAlbum： 虚假} ；
    

## 选项

*   **质量**： 保存的图像，表示为一系列的 0-100，在 100 哪里通常全分辨率而不会丢失文件的压缩质量。 *（人数）*（请注意相机的分辨率有关的信息是不可用）。

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL： 0，/ / 返回图像作为 base64 编码字符串 FILE_URI： 1，/ / 返回图像文件的 URI NATIVE_URI： 2 / / 返回图像本机 URI (例如，资产库： / / 在 iOS 或内容上： / / 在 Android 上)} ；
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0，相机： 1，SAVEDPHOTOALBUM: 2} ；
        

*   **allowEdit**： 允许简单编辑的选择面前的形象。*（布尔）*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0，/ / 返回 JPEG 编码的 PNG 图像： 1 / / 返回 PNG 编码的图像} ；
        

*   **targetWidth**： 以像素为单位的尺度图像的宽度。必须与**targetHeight**一起使用。纵横比保持不变。*（人数）*

*   **targetHeight**： 以像素为单位的尺度图像的高度。必须与**targetWidth**一起使用。纵横比保持不变。*（人数）*

*   **媒体类型**： 设置要从选择媒体的类型。 时才起作用 `PictureSourceType` 是 `PHOTOLIBRARY` 或 `SAVEDPHOTOALBUM` 。 定义在 `nagivator.camera.MediaType` *（人数）* 
    
        Camera.MediaType = {图片: 0，/ / 允许只仍然图片的选择。 默认情况。 将返回指定通过 DestinationType 视频格式： 1，/ / 允许选择的视频，将始终返回 FILE_URI ALLMEDIA: 2 / / 允许从所有媒体类型的选择
        
    
    };

*   **correctOrientation**： 旋转图像，期间捕获设备的方向的正确。*（布尔）*

*   **saveToPhotoAlbum**： 将图像保存到相册在设备上捕获后。*（布尔）*

*   **popoverOptions**： 仅限 iOS 在 iPad 中指定弹出位置的选项。在中定义`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {回: 0，/ / 使用前面后面摄像头： 1 / / 使用前置摄像头} ；
        

## Android 的怪癖

*   忽略 `allowEdit` 参数。

*   `Camera.PictureSourceType.PHOTOLIBRARY`和 `Camera.PictureSourceType.SAVEDPHOTOALBUM` 都显示相同的相册。

## 黑莓手机的怪癖

*   忽略 `quality` 参数。

*   忽略 `sourceType` 参数。

*   忽略 `allowEdit` 参数。

*   应用程序必须具有关键注射权限后，用户会对齐照片关闭摄像头本机应用程序。

*   使用大图像的大小可能会导致无法编码图像以后模型设备 （例如，火炬 9800) 上的该功能的高分辨率摄像机。

*   `Camera.MediaType`不受支持。

*   忽略 `correctOrientation` 参数。

*   忽略 `cameraDirection` 参数。

## iOS 的怪癖

*   设置 `quality` 低于 50，避免在某些设备上的内存不足错误。

*   当使用 `destinationType.FILE_URI` ，照片保存在应用程序的临时目录中。 你可能会删除此目录使用的内容 `navigator.fileMgr` Api 如果存储空间是关注的问题。

## Tizen 怪癖

*   不支持的选项

*   始终返回一个文件的 URI

## Windows Phone 7 和 8 怪癖

*   忽略 `allowEdit` 参数。

*   忽略 `correctOrientation` 参数。

*   忽略 `cameraDirection` 参数。