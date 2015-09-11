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

# 事件

> 科爾多瓦生命週期事件。

## 事件種類

*   <a href="events.deviceready.html">deviceready</a>
*   <a href="events.pause.html">暫停</a>
*   <a href="events.resume.html">簡歷</a>
*   <a href="events.online.html">線上</a>
*   <a href="events.offline.html">離線</a>
*   <a href="events.backbutton.html">backbutton</a>
*   <a href="events.batterycritical.html">batterycritical</a>
*   <a href="events.batterylow.html">batterylow</a>
*   <a href="events.batterystatus.html">batterystatus</a>
*   <a href="events.menubutton.html">menubutton</a>
*   <a href="events.searchbutton.html">searchbutton</a>
*   <a href="events.startcallbutton.html">startcallbutton</a>
*   <a href="events.endcallbutton.html">endcallbutton</a>
*   <a href="events.volumedownbutton.html">volumedownbutton</a>
*   <a href="events.volumeupbutton.html">volumeupbutton</a>

## 訪問功能

版本為 3.0，科爾多瓦實現電池狀態和其他<a href="../device/device.html">設備</a>級 Api 作為*外掛程式*。 預設情況下啟用對所有其他不相關的電池狀態的事件的訪問。 使用 CLI 的 `plugin` 命令，描述在<a href="../../guide/cli/index.html">命令列介面</a>，可以啟用或禁用電池事件：

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   （在 iOS`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   （在 Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    引用： [Tizen Web 應用程式的應用程式清單][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。