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

# splashscreen.hide

Zavrne brizg zaslon.

    navigator.splashscreen.hide();
    

## Opis

Ta metoda je zavrnilo aplikacije brizg zaslon.

## Podprte platforme

*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    navigator.splashscreen.hide();
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
    

## iOS ovinka

V `config.xml` datoteke `AutoHideSplashScreen` nastavitev mora biti `false` . Za zamudo skriva brizg zaslon za dve sekundi, dodati timer, kot sledi v v `deviceready` rutina:

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);