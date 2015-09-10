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

# Notification.Beep

Das <a href="../device/device.html">Gerät</a> spielt einen Signalton sound.

    navigator.notification.beep(times);
    

*   **Zeiten**: die Anzahl der Wiederholungen des Signaltons. *(Anzahl)*

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8

## Kleines Beispiel

    // Beep twice!
    navigator.notification.beep(2);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
    

## Android Macken

*   Android spielt die Standardeinstellung **<a href="notification.html">Benachrichtigung</a> Klingelton** unter **Einstellungen/Sound & Display** -Panel angegeben.

## Windows Phone 7 und 8 Macken

*   Stützt sich auf eine generische Piepton-<a href="../file/fileobj/fileobj.html">Datei</a> aus Cordova-Distribution.

## Tizen Macken

*   Tizen implementiert Signaltöne durch Abspielen einer Audiodatei über die <a href="../media/media.html">Medien</a> API.

*   Die Beep-<a href="../file/fileobj/fileobj.html">Datei</a> muss kurz sein, befinden muss einem `sounds` Unterverzeichnis des Stammverzeichnisses der Anwendung, und muss den Namen`beep.wav`.