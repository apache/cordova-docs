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


# Wydarzenia

> Cordova cyklu imprez.

## Typy zdarzeń

*   deviceready
*   pause
*   resume
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Zdarzenia są dodawane przez [cordova-plugin-battery-status][1]

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/README.md

*   batterycritical
*   batterylow
*   batterystatus

## Zdarzenia są dodawane przez [cordova-plugin-network-information][2]

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/README.md

*   online
*   offline


# deviceready

Zdarzenie fires po całkowitym załadowaniu Cordova.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Szczegóły

To wydarzenie jest niezbędna do dowolnej aplikacji. Sygnalizuje on, że urządzenie Cordova w API załadowany i są gotowe do dostępu.

Cordova składa się z dwóch baz kod: macierzystego i JavaScript. Podczas gdy ładuje kodu macierzystego, wyświetla ładowanie niestandardowych obrazów. Jednak JavaScript tylko ładuje po DOM ładunki. Oznacza to, że aplikacja sieci web potencjalnie może wywołać funkcję Cordova JavaScript przed odpowiedniego kodu macierzystego staje się dostępna.

`deviceready`Zdarzenie fires po pełni załadowaniu Cordova. Raz pożary zdarzenia, można bezpiecznie wykonywać połączenia API, Cordova. Aplikacje zazwyczaj dołączyć słuchacza z `document.addEventListener` po załadowaniu dokumentu HTML DOM.

`deviceready`Zdarzenie zachowuje się nieco inaczej od innych. Żadnych zdarzeń zarejestrowanych po `deviceready` pożary zdarzenia ma jego funkcja wywołania zwrotnego o nazwie natychmiast.

## Obsługiwane platformy

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 8
*   Windows 8

## Szybki przykład

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Pełny przykład

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
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
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# pause

Zdarzenie fires, gdy aplikacja jest w tle.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Szczegóły

`pause`Zdarzenie fires po platformie rodzimych stawia aplikacji w tle, zazwyczaj, gdy użytkownik przechodzi do innej aplikacji.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

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


# resume

Zdarzenie fires, gdy aplikacja jest źródło tła.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Szczegóły

`resume`Zdarzenie fires po platformie rodzimych wyciąga wniosek od tła.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

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

Wszelkie interaktywne funkcje wywoływane z `pause` obsługi zdarzeń wykonać później podczas wznawiania działania aplikacji, jak sygnalizowane przez `resume` zdarzenie. Należą do nich alerty, `console.log()` i wszelkie rozmowy z wtyczki lub Cordova API, które przechodzą przez Objective-C.

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


# backbutton

Zdarzenie fires, gdy użytkownik naciśnie przycisk Wstecz.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Szczegóły

Aby zastąpić domyślne zachowanie przycisku wstecz, zarejestrować detektor zdarzeń dla `backbutton` zdarzenia, zazwyczaj przez wywołanie `document.addEventListener` po otrzymaniu `deviceready` zdarzenie. Nie jest konieczne do wywołania innej metody, aby zastąpić zachowanie przycisku wstecz.

## Obsługiwane platformy

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Windows Phone 8

## Szybki przykład

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Pełny przykład

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

Zdarzenie fires, gdy użytkownik naciśnie przycisk menu.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Szczegóły

Zastosowanie programu obsługi zdarzeń zastępuje domyślne zachowanie przycisku menu.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

## Obsługiwane platformy

*   Amazon Fire OS
*   Android
*   BlackBerry 10

## Szybki przykład

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Pełny przykład

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

Zdarzenie fires, gdy użytkownik naciśnie przycisk Szukaj na Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Szczegóły

Jeśli potrzebujesz zastąpić domyślne zachowanie przycisku Szukaj na Android możesz zarejestrować detektor zdarzeń dla zdarzenia "searchbutton".

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

## Obsługiwane platformy

*   Android

## Szybki przykład

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Pełny przykład

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

Zdarzenie fires, gdy użytkownik naciśnie przycisk wywołanie start.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Szczegóły

Jeśli potrzebujesz zastąpić domyślne zachowanie wywołanie rozpoczęcia można zarejestrować detektor zdarzeń dla `startcallbutton` zdarzenie.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

## Obsługiwane platformy

*   BlackBerry 10

## Szybki przykład

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Pełny przykład

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

Wydarzenie to odpala kiedy użytkownik naciśnie przycisk rozmowy end.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Szczegóły

Zdarzenie zastępuje domyślne zachowanie wywołanie koniec.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

## Obsługiwane platformy

*   BlackBerry 10

## Szybki przykład

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Pełny przykład

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

Zdarzenie fires, gdy użytkownik naciśnie klawisz ciszej "przycisk.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## Szczegóły

Jeśli chcesz zastąpić ciszej domyślne zachowanie można zarejestrować detektor zdarzeń dla `volumedownbutton` zdarzenie.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

## Obsługiwane platformy

*   BlackBerry 10
*   Android

## Szybki przykład

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Pełny przykład

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

Zdarzenie fires, gdy użytkownik naciśnie klawisz głośności przycisk.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Szczegóły

Jeśli chcesz zastąpić domyślne głośności zachowanie można zarejestrować detektor zdarzeń dla `volumeupbutton` zdarzenie.

Aplikacje zwykle należy użyć `document.addEventListener` Aby dołączyć słuchacza raz `deviceready` pożary zdarzenia.

## Obsługiwane platformy

*   BlackBerry 10
*   Android

## Szybki przykład

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Pełny przykład

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
