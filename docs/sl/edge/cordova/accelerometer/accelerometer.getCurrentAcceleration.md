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

# accelerometer.getCurrentAcceleration

Pridobi trenuten pospešek vzdolž osi *x*, *y* in *z*.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    

## Opis

Merilnik pospeška je senzor gibanja, ki zaznava spremembe (*delta*) v gibanju glede na trenutno orientacijo naprave, v treh dimenzijah vzdolž osi *x*, *y* in *z*.

Te vrednosti pospeška se vračajo povratnemu klicu `accelerometerSuccess`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Preprost primer

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## Celovit primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
    

## Posebnosti iOS

*   iOS ne pozna koncepta pridobivanja trenutnega pospeška na katerikoli točki.

*   V danih časovnih intervalih morate spremljati pospešek in zajemati podatke.

*   Tako funkcija `getCurrentAcceleration` vrne zadnjo sporočeno vrednost klica `watchAccelerometer`.