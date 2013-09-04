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

# 閃屏

> 顯示和隱藏應用程式的初始螢幕。

## 方法

*   splashscreen.show
*   splashscreen.hide

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="閃屏">< 參數名稱 ="android 包"value="org.apache.cordova.SplashScreen"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="閃屏">< 參數名稱 ="ios 包"值 ="CDVSplashScreen"/ >< / 功能 >
        

一些平臺可能支援此功能，而無需任何特殊的配置。有關概述，請參見平臺支援。

## 安裝程式

### Android 系統

1.  將初始螢幕圖像複製到 Android 專案 `res/drawable` 目錄。為每個圖像的大小應為：

*   xlarge (xhDPI)： 至少 960 × 720
*   大 (下)： 至少 640 × 480
*   中期 (mDPI)： 至少 470 × 320
*   小 (lDPI)： 至少 426 × 320
    
    您應該為您的初始螢幕使用[9-修補程式圖像][1]。

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  在 `onCreate` 的擴展的類的方法 `DroidGap` ，添加以下兩行：
    
        super.setIntegerProperty ("閃屏"，R.drawable.splash） ；super.loadUrl(Config.getStartUrl() 10000） ；
        
    
    第一行設置要作為閃屏顯示的圖像。 如果你命名您的圖像什麼除了 `splash.png` ，您需要修改這條線。 第二行是正常 `super.loadUrl` 線，但它有第二個參數指定超時值的初始螢幕。 在此示例中，初始螢幕顯示 10 秒鐘。 遣散閃屏，一旦接收到 app `deviceready` 事件，調用 `navigator.splashscreen.hide()` 方法。

### iOS

將您的初始螢幕圖像複製到 iOS 專案 `Resources/splash` 目錄。 僅添加您想要支援的比如 iPad 或者 iPhone 的設備圖像。 每個圖像的大小應為：

*   Default-568h@2x~iphone.png (640 × 1136 圖元為單位）
*   Default-Landscape@2x~ipad.png (2048 x 1496 圖元為單位）
*   預設-Landscape~ipad.png （1024 x 748 圖元）
*   Default-Portrait@2x~ipad.png (1536 x 2008 圖元為單位）
*   預設-Portrait~ipad.png (768 x 1004 圖元為單位）
*   Default@2x~iphone.png (640 × 960 圖元)
*   Default~iphone.png (320 × 480 圖元)