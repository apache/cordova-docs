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

# 媒体

> `Media`对象提供录制和播放设备上的音频文件的能力。

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**注：**当前的实现并不遵循 W3C 规范的媒体捕获，并仅用于提供方便。 将来的实现将坚持以最新的 W3C 规范和可能弃用当前 Api。

## 参数

*   **src**： 包含音频内容的 URI。*() DOMString*

*   **mediaSuccess**： （可选） 后执行的回调 `Media` 对象已完成当前戏剧、 记录或停止行动。*（函数）*

*   **mediaError**： （可选） 如果错误发生时执行的回调。*（函数）*

*   **mediaStatus**： （可选） 执行以指示状态的更改的回调。*（函数）*

## 常量

以下常量作为唯一的参数到据报告 `mediaStatus` 回调：

*   `Media.MEDIA_NONE`= 0 ；
*   `Media.MEDIA_STARTING`= 1 ；
*   `Media.MEDIA_RUNNING`= 2 ；
*   `Media.MEDIA_PAUSED`= 3 ；
*   `Media.MEDIA_STOPPED`= 4 ；

## 方法

*   `media.getCurrentPosition`： 返回一个音频文件内的当前位置。

*   `media.getDuration`： 返回一个音频文件的持续时间。

*   `media.play`： 启动或继续播放音频文件。

*   `media.pause`： 暂停播放的音频文件。

*   `media.release`： 释放底层操作系统的音频资源。

*   `media.seekTo`： 在音频文件内移动的位置。

*   `media.setVolume`： 设置音频播放的音量。

*   `media.startRecord`： 开始录制的音频文件。

*   `media.stopRecord`： 停止录制的音频文件。

*   `media.stop`： 停止播放音频文件。

## 附加只读参数

*   **位置**： 内音频播放，以秒为单位的位置。
    
    *   不会自动更新期间播放 ；调用 `getCurrentPosition` 来更新。

*   **持续时间**: 媒体的持续时间以秒为单位。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git
        

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/config.xml) < 功能名称 ="媒体">< 参数名称 ="android 包"value="org.apache.cordova.AudioHandler"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用权限 android:name="android.permission.RECORD_AUDIO"/ >< 使用权限 android:name="android.permission.MODIFY_AUDIO_SETTINGS"/ >< 使用权限 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="捕获">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.media.MediaCapture"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="媒体">< 参数名称 ="ios 包"值 ="CDVSound"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名称 ="ID_CAP_MEDIALIB"/ >< 能力名称 ="ID_CAP_MICROPHONE"/ >< 功能名称 ="ID_HW_FRONTCAMERA"/ >< 功能名称 ="ID_CAP_ISV_CAMERA"/ >< 能力名称 ="ID_CAP_CAMERA"/ >< / 功能 >
        
    
    引用：[为 Windows Phone 应用程序清单][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。

### Windows Phone 怪癖

*   只有一个媒体文件，可以播放一次。

*   没有严格限制对您的应用程序与其他媒体的交互方式。 请参见[Microsoft 文档的详细信息][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx