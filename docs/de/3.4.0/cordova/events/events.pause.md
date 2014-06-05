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

# Anhalten

Das Ereignis wird ausgelöst, wenn eine Anwendung in den Hintergrund gelegt wird.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Informationen

Das `pause` -Ereignis wird ausgelöst, wenn die einheitlichen Plattform die Anwendung in den Hintergrund, in der Regel, setzt wenn der Benutzer zu einer anderen Anwendung wechselt.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
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
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Macken

In der `pause` Handler, keine Anrufe an die Cordova-API oder native Plugins, die Objective-C durchlaufen funktionieren nicht, zusammen mit interaktiven Aufrufe, z. B. Warnungen oder `console.log()` . Sie werden nur verarbeitet, wenn die app auf der nächsten laufen Schleife fortgesetzt wird.

Die iOS-spezifische `resign` Ereignis ist verfügbar als Alternative zu `pause` , und erkennt, wenn Benutzer die **Lock** -Taste um das Gerät mit der app im Vordergrund ausgeführt zu sperren können. Wenn die app (und Gerät) für Multitasking aktiviert ist, ist dies gepaart mit einer anschließenden `pause` Ereignis, aber nur unter iOS 5. In der Tat werden alle gesperrten apps in iOS 5, die Multitasking aktiviert haben in den Hintergrund gedrängt. Für Anwendungen, die ausgeführt werden, wenn unter iOS 5 gesperrt, deaktivieren die app Multitasking, indem [UIApplicationExitsOnSuspend][1] auf `YES` . Um beim gesperrt auf iOS 4 auszuführen, spielt diese Einstellung keine Rolle.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html