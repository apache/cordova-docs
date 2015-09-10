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

# 閃屏

> <a href="../inappbrowser/inappbrowser.html">顯示</a>和隱藏應用程式的初始螢幕。

## 方法

*   <a href="splashscreen.show.html">splashscreen.show</a>
*   <a href="splashscreen.hide.html">splashscreen.hide</a>

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了<a href="../device/device.html">設備</a>級 Api。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   （在 iOS`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。

有關如何<a href="../media/capture/ConfigurationData.html">配置</a>這些圖像的資訊，請參閱圖示和閃屏。