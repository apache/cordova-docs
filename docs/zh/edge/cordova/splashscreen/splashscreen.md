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

# 闪屏

> 显示和隐藏应用程序的初始屏幕。

## 方法

*   splashscreen.show
*   splashscreen.hide

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名称 ="闪屏">< 参数名称 ="android 包"value="org.apache.cordova.SplashScreen"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="闪屏">< 参数名称 ="ios 包"值 ="CDVSplashScreen"/ >< / 功能 >
        

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。

## 安装程序

### Android 系统

1.  将初始屏幕图像复制到 Android 项目 `res/drawable` 目录。为每个图像的大小应为：

*   xlarge (xhdpi)： 至少 960 × 720
*   大 (下)： 至少 640 × 480
*   中期 (mdpi)： 至少 470 × 320
*   小 (ldpi)： 至少 426 × 320
    
    您应该为您的初始屏幕使用[9-修补程序图像][1]。

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  在 `onCreate` 的扩展的类的方法 `DroidGap` ，添加以下两行：
    
        super.setIntegerProperty ("闪屏"，R.drawable.splash） ；super.loadUrl(Config.getStartUrl() 10000） ；
        
    
    第一行设置要作为闪屏显示的图像。 如果你命名您的图像什么除了 `splash.png` ，您需要修改这条线。 第二行是正常 `super.loadUrl` 线，但它有第二个参数指定超时值的初始屏幕。 在此示例中，初始屏幕显示 10 秒钟。 遣散闪屏，一旦接收到 app `deviceready` 事件，调用 `navigator.splashscreen.hide()` 方法。

### iOS

将您的初始屏幕图像复制到 iOS 项目 `Resources/splash` 目录。 仅添加您想要支持的比如 iPad 或者 iPhone 的设备图像。 每个图像的大小应为：

*   Default-568h@2x~iphone.png (640 × 1136 像素为单位）
*   Default-Landscape@2x~ipad.png (2048 x 1496 像素为单位）
*   默认-Landscape~ipad.png （1024 x 748 像素）
*   Default-Portrait@2x~ipad.png (1536 x 2008 像素为单位）
*   默认-Portrait~ipad.png (768 x 1004 像素为单位）
*   Default@2x~iphone.png (640 × 960 像素)
*   Default~iphone.png (320 × 480 像素)