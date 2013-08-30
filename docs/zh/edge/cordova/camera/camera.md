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

# 相机

> `camera`对象提供对该设备的默认摄像头应用程序的访问。

**重要的隐私注：**图像从一个设备照相机的收集和使用提出了重要的隐私问题。 您的应用程序的隐私策略应该讨论应用程序如何使用相机和是否与任何其他方共享录制的影像。 此外，如果相机的应用程序的使用在用户界面中不是明显的应在您的应用程序访问相机 （如果设备操作系统不会这样做已经） 之前提供只是在时间的通知。 该通知应提供相同的信息上文指出的并获取该用户的权限 （例如，通过为**确定**并**不感谢**提出的选择）。 有关详细信息，请参阅隐私指南。

## 方法

*   camera.getPicture
*   camera.cleanup

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
        $ cordova plugin rm org.apache.cordova.core.camera
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   Android 系统
    
        (in app/res/xml/config.xml) < 功能名称 ="相机">< 参数名称 ="android 包"value="org.apache.cordova.CameraLauncher"/ >< / 功能 > (在 app/AndroidManifest) < 使用权限 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/ >
        

*   黑莓手机 WebWorks
    
        (in www/plugins.xml) < 功能名称 ="相机">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.camera.Camera"/ >< / 功能 > (在 www/config.xml) < 功能 id="blackberry.media.camera"/ >< rim： 权限 >< rim： 许可证 > use_camera < / rim： 许可证 >< / rim： 权限 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="相机">< 参数名称 ="ios 包"值 ="CDVCamera"/ >< / 功能 >
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        < 功能 >< 功能名称 ="ID_CAP_ISV_CAMERA"/ >< 功能名称 ="ID_HW_FRONTCAMERA"/ >< / 功能 >
        
    
    引用：[为 Windows Phone 应用程序清单][1]

*   （在 Tizen`config.xml`)
    
        < 功能名称 = 所需的"http://tizen.org/api/application"="true"/ >< 功能名称 ="http://tizen.org/api/application.launch"所需 ="true"/ >
        
    
    引用： [Tizen Web 应用程序的应用程序清单][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。