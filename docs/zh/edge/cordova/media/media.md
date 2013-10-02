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

# 媒體

> `Media`物件提供錄製和播放設備上的音訊檔的能力。

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**注：**當前的實現並不遵循 W3C 規範的媒體捕獲，並僅用於提供方便。 將來的實現將堅持以最新的 W3C 規範和可能棄用當前 Api。

## 參數

*   **src**： 包含音訊內容的 URI。*() DOMString*

*   **mediaSuccess**： （可選） 後執行的回檔 `Media` 物件已完成當前戲劇、 記錄或停止行動。*（函數）*

*   **mediaError**： （可選） 如果錯誤發生時執行的回檔。*（函數）*

*   **mediaStatus**： （可選） 執行以指示狀態的更改的回檔。*（函數）*

## 常量

以下常量作為唯一的參數到據報告 `mediaStatus` 回檔：

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED`= 3 ；
*   `Media.MEDIA_STOPPED`= 4 ；

## 方法

*   `media.getCurrentPosition`： 返回一個音訊檔內的當前位置。

*   `media.getDuration`： 返回一個音訊檔的持續時間。

*   `media.play`： 啟動或繼續播放音訊檔。

*   `media.pause`： 暫停播放的音訊檔。

*   `media.release`： 釋放底層作業系統的音訊資源。

*   `media.seekTo`： 在音訊檔內移動的位置。

*   `media.setVolume`： 設置音訊播放的音量。

*   `media.startRecord`： 開始錄製的音訊檔。

*   `media.stopRecord`： 停止錄製的音訊檔。

*   `media.stop`： 停止播放音訊檔。

## 附加唯讀參數

*   **位置**： 內音訊播放，以秒為單位的位置。
    
    *   不會自動更新期間播放 ；調用 `getCurrentPosition` 來更新。

*   **持續時間**: 媒體的持續時間以秒為單位。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ 科爾多瓦外掛程式添加 org.apache.cordova.media $ 科爾多瓦外掛程式 ls ['org.apache.cordova.media'] $ 科爾多瓦外掛程式 rm org.apache.cordova.media
     

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   （在 iOS`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。

### Windows Phone 怪癖

*   只有一個媒體檔案，可以播放一次。

*   沒有嚴格限制對您的應用程式與其他媒體的對話模式。 請參見[Microsoft 文檔的詳細資訊][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx