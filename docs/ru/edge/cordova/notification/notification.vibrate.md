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

# notification.vibrate

Вибрирует устройство для указанного количества времени.

    navigator.notification.vibrate(milliseconds)
    

*   **время**: миллисекунд для того чтобы вибрировать устройство, где 1000 миллисекунд равен 1 секунду. *(Число)*

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8

## Быстрый пример

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS причуды

*   **время**: игнорирует указанное время и вибрирует для предварительно установленного времени.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 совместимости

вибрирует функция, принадлежащий объекту навигатор

        navigator.vibrate(1000);  // vibrate for 1 second