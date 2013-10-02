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

# device.version

Возвращает версию операционной системы.

    var string = device.version;
    

## Поддерживаемые платформы

*   Android 2.1 +
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Краткий пример

    / / Android: Froyo ОС будет возвращать «2.2» / / Eclair OS будет возвращение «2.1», «2.0.1» или «2.0» / / версия также может возвращать обновить уровень «2.1-update1» / / / / BlackBerry: факел 9800, используя OS 6.0 будет вернуть «6.0.0.600» / / / / iPhone: iOS 3.2 возвращает «3.2» / / / / Windows Phone 7: Возвращает номер текущей версии ОС, ex. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>