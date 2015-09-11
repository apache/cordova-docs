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

# 通知

> 可視、 可聽，和觸覺<a href="../device/device.html">設備</a>通知。

## 方法

*   `<a href="notification.alert.html">notification.alert</a>`
*   `<a href="notification.confirm.html">notification.confirm</a>`
*   `<a href="notification.prompt.html">notification.prompt</a>`
*   `<a href="notification.beep.html">notification.beep</a>`
*   `<a href="notification.vibrate.html">notification.vibrate</a>`

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了<a href="../device/device.html">設備</a>級 Api。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   （在 iOS`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。