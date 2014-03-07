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

# Lebenslauf

Das Ereignis wird ausgelöst, wenn eine Anwendung aus dem Hintergrund abgerufen wird.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Informationen

Das `resume` -Ereignis wird ausgelöst, wenn die native Plattform die Anwendung aus dem Hintergrund zieht.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Macken

Alle interaktiven Funktionen Intensivlehrgang ein `pause` -Ereignishandler ausgeführt später, wenn die app wieder aufgenommen wird, wie durch signalisiert die `resume` Ereignis. Dazu gehören Warnungen, `console.log()` , und keine Anrufe von Plugins oder Cordova API, das Durchlaufen von Objective-C.

*   **aktiv** -Ereignis
    
    Die iOS-spezifische `active` Ereignis ist verfügbar als Alternative zu `resume` , und erkennt, wenn Benutzer die **Lock** -Taste mit der app im Vordergrund ausgeführt entsperren deaktivieren. Wenn die app (und Gerät) für Multitasking aktiviert ist, ist dies gepaart mit einer anschließenden `resume` Ereignis, aber nur unter iOS 5. In der Tat werden alle gesperrten apps in iOS 5, die Multitasking aktiviert haben in den Hintergrund gedrängt. Für Anwendungen, die ausgeführt werden, wenn unter iOS 5 gesperrt, deaktivieren die app Multitasking, indem [UIApplicationExitsOnSuspend][1] auf `YES` . Um beim gesperrt auf iOS 4 auszuführen, spielt diese Einstellung keine Rolle.

*   **Lebenslauf** -Ereignis
    
    Beim Aufruf aus einer `resume` -Ereignishandler, interaktive Funktionen wie z. B. `alert()` in eingeschlossen werden müssen ein `setTimeout()` Aufruf mit einem Timeoutwert von 0 (null), oder auch der app hängt. Zum Beispiel:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html