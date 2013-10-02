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

# 地理定位

> `geolocation`物件提供對基於設備的 GPS 感應器或推斷網路信號的位置資料的訪問。

`Geolocation`提供有關該設備的位置，例如緯度和經度資訊。 常見的位置資訊來源包括全球定位系統 (GPS) 和網路信號，如 IP 位址、 RFID、 WiFi 和藍牙 MAC 位址和 GSM/CDMA 儲存格 Id 從推斷出的位置。 沒有任何保證，API 返回設備的實際位置。

此 API 基於[W3C 地理定位 API 規範][1]，並只執行已經不提供實現的設備上。

 [1]: http://dev.w3.org/geo/api/spec-source.html

**重要的隱私注：**地理定位資料的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論這款應用程式如何使用地理定位資料，資料是否共用它的任何其他締約方和的資料 （例如，粗、 細，ZIP 代碼級別，等等） 的精度水準。 地理定位資料被普遍認為敏感的因為它能揭示一個人的下落，如果存儲中，他或她的旅行史。 因此，除了您的應用程式的隱私權原則，您應強烈考慮提供在您的應用程式訪問地理定位資料 （如果設備作業系統不會這樣做已經） 之前的時間只是通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 有關詳細資訊，請參閱隱私指南。

## 方法

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## 參數

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## 物件 （唯讀）

*   Position
*   PositionError
*   Coordinates

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   （在 iOS`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。