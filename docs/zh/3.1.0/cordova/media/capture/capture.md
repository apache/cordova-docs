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

# 捕獲

> 提供對設備的音訊、 圖像和視頻捕獲功能的訪問。

**重要的隱私注：**收集和使用的圖像、 視頻或音訊裝置的攝像頭或麥克風從提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論應用程式如何使用這種感應器和記錄的資料是否與任何其他方共用。 另外，如果攝像機或麥克風的應用程式的使用在使用者介面中不是明顯的你應該在您的應用程式訪問的相機或麥克風 （如果設備作業系統不會這樣做已經） 之前提供只是在時間的通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 請注意有些應用程式市場可能需要您的應用程式提供只是時間的通知，並從訪問攝像機或麥克風之前使用者獲得的許可權。 有關詳細資訊，請參閱隱私指南。

## 物件

*   捕獲
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   配置
*   媒體
*   MediaFileData

## 方法

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## 範圍

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## 屬性

*   **supportedAudioModes**： 音訊錄音設備所支援的格式。(ConfigurationData[])

*   **supportedImageModes**： 錄製圖像大小和格式的設備支援。(ConfigurationData[])

*   **supportedVideoModes**： 錄製的視頻解析度和設備支援的格式。(ConfigurationData[])

## 方法

*   `capture.captureAudio`： 啟動設備的音訊錄音應用程式來記錄音訊剪輯。

*   `capture.captureImage`： 啟動設備的攝像頭應用程式採取的照片。

*   `capture.captureVideo`： 啟動設備的視頻錄影機應用程式要錄製的視頻。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/plugins.xml) < 功能名稱 ="捕獲">< 參數名稱 ="android 包"value="org.apache.cordova.Capture"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用許可權 android:name="android.permission.RECORD_AUDIO"/ >< 使用許可權 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/ >
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml) < 功能名稱 ="捕獲">< 參數名稱 ="黑莓手機-包"value="org.apache.cordova.capture.MediaCapture"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.system"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.io.file"所需 ="true"版本 ="1.0.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="捕獲">< 參數名稱 ="ios 包"值 ="CDVCapture"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。