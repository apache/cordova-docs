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

title: pause
---

# pause

Zdarzenie fires, gdy aplikacja jest w tle.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Szczegóły

`pause`Zdarzenie fires po platformie rodzimych stawia aplikacji w tle, zazwyczaj, gdy użytkownik przechodzi do innej aplikacji.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `[deviceready](events.deviceready.html)` pożary zdarzenia.

## Obsługiwane platformy

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Szybki przykład

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Pełny przykład

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
    

## Dziwactwa iOS

W `pause` obsługi, wszelkie wywołania interfejsu API Cordova lub macierzystego wtyczek, które przechodzą przez Objective-C nie działają, a także jakichkolwiek połączeń interaktywnych, takich jak alarmy lub `console.log()` . One są przetwarzane tylko podczas wznawiania działania aplikacji, na następnym uruchomieniu pętli.

IOS specyficzne `resign` zdarzeń jest dostępna jako alternatywa dla `pause` i wykrywa, kiedy użytkownik włączyć przycisk **blokada** zablokować urządzenie z app uruchomiony na pierwszym planie. Jeśli aplikacji (i urządzenia) jest włączona na wielozadaniowość, to jest powiązany z kolejnym `pause` wydarzenie, ale tylko pod iOS 5. W efekcie wszystkie zablokowane aplikacje w iOS 5, że wielozadaniowych włączone są wypychane do tła. Dla aplikacji będą nadal działać, gdy zablokowane pod iOS 5, wyłączenie aplikacji wielozadaniowych przez ustawienie [UIApplicationExitsOnSuspend][1] `YES` . Aby uruchomić zablokowane na iOS 4, to ustawienie nie ma znaczenia.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html