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

# 捕获

> 提供对设备的音频、 图像和视频捕获功能的访问。

**重要的隐私注：**收集和使用的图像、 视频或音频设备的摄像头或麦克风从提出了重要的隐私问题。 您的应用程序的隐私策略应该讨论应用程序如何使用这种传感器和记录的数据是否与任何其他方共享。 另外，如果摄像机或麦克风的应用程序的使用在用户界面中不是明显的你应该在您的应用程序访问的相机或麦克风 （如果设备操作系统不会这样做已经） 之前提供只是在时间的通知。 该通知应提供相同的信息上文指出的并获取该用户的权限 （例如，通过为**确定**并**不感谢**提出的选择）。 请注意有些应用程序市场可能需要您的应用程序提供只是时间的通知，并从访问摄像机或麦克风之前用户获得的权限。 有关详细信息，请参阅隐私指南。

## 对象

*   捕获
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   配置
*   媒体
*   MediaFileData

## 方法

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## 范围

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## 属性

*   **supportedAudioModes**： 音频录音设备所支持的格式。(ConfigurationData[])

*   **supportedImageModes**： 录制图像大小和格式的设备支持。(ConfigurationData[])

*   **supportedVideoModes**： 录制的视频分辨率和设备支持的格式。(ConfigurationData[])

## 方法

*   `capture.captureAudio`： 启动设备的音频录音应用程序来记录音频剪辑。

*   `capture.captureImage`： 启动设备的摄像头应用程序采取的照片。

*   `capture.captureVideo`： 启动设备的视频录像机应用程序要录制的视频。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git
        $ cordova plugin rm org.apache.cordova.core.media-capture
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/plugins.xml) < 功能名称 ="捕获">< 参数名称 ="android 包"value="org.apache.cordova.Capture"/ >< / 功能 > (在 app/AndroidManifest.xml) < 使用权限 android:name="android.permission.RECORD_AUDIO"/ >< 使用权限 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="捕获">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.capture.MediaCapture"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.system"所需 ="true"版本 ="1.0.0.0"/ >< 功能 id="blackberry.io.file"所需 ="true"版本 ="1.0.0.0"/ >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="捕获">< 参数名称 ="ios 包"值 ="CDVCapture"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名称 ="ID_CAP_MEDIALIB"/ >< 能力名称 ="ID_CAP_MICROPHONE"/ >< 功能名称 ="ID_HW_FRONTCAMERA"/ >< 功能名称 ="ID_CAP_ISV_CAMERA"/ >< 能力名称 ="ID_CAP_CAMERA"/ >< / 功能 >
        

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。