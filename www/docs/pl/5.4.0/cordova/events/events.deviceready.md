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

title: deviceready
---

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