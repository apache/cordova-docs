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

title: resume
---

# resume

Zdarzenie fires, gdy aplikacja jest źródło tła.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Szczegóły

`resume`Zdarzenie fires po platformie rodzimych wyciąga wniosek od tła.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `[deviceready](events.deviceready.html)` pożary zdarzenia.

## Obsługiwane platformy

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Szybki przykład

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Pełny przykład

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
    

## Dziwactwa iOS

Wszelkie interaktywne funkcje wywoływane z `[pause](events.pause.html)` obsługi zdarzeń wykonać później podczas wznawiania działania aplikacji, jak sygnalizowane przez `resume` zdarzenie. Należą do nich alerty, `console.log()` i wszelkie rozmowy z wtyczki lub Cordova API, które przechodzą przez Objective-C.

*   **aktywnych** zdarzeń
    
    IOS specyficzne `active` zdarzenie jest dostępna jako alternatywa dla `resume` i wykrywa użytkowników wyłączyć przycisk **blokada** , aby odblokować urządzenie z app uruchomiony na pierwszym planie. Jeśli aplikacji (i urządzenia) jest włączona na wielozadaniowość, to jest powiązany z kolejnym `resume` wydarzenie, ale tylko pod iOS 5. W efekcie wszystkie zablokowane aplikacje w iOS 5, że wielozadaniowych włączone są wypychane do tła. Dla aplikacji będą nadal działać, gdy zablokowane pod iOS 5, wyłączenie aplikacji wielozadaniowych przez ustawienie [UIApplicationExitsOnSuspend][1] `YES` . Aby uruchomić zablokowane na iOS 4, to ustawienie nie ma znaczenia.

*   **wznowić** imprezy
    
    Po wywołaniu z `resume` obsługi zdarzeń, funkcje interaktywne, takie jak `alert()` muszą być zapakowane w `setTimeout()` rozmowy z timeout wartość zero, albo aplikacja zawiesza się. Na przykład:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html