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

# accelerometer.watchAcceleration

V rednih časovnih intervalih, pridobi pospešek vzdolž osi *x*, *y* in *z*.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
    

## Opis

Merilnik pospeška je senzor gibanja, ki zaznava spremebe (delta) v gibanju glede na trenutni položaj. Merilnik pospeška lahko zazna 3D gibanje vzdolž osi *x*, *y* in *z*.

Metoda `accelerometer.watchAcceleration` v rednih intervalih pridobva trenutni pospešek naprave kot `Acceleration` in vsakič izvede povratni klic `accelerometerSuccess`. Določite interval v milisekundah preko parametra `frekuency` objekta `acceleratorOptions`.

Vrnjen ID je referenca za interval spremljanja merilnika pospeška in se lahko uporabi za klic `accelerometer.clearWatch`, ki ustavi spremljanje merilnika.

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
    
    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    

## Celovit primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the acceleration
        //
        function startWatch() {
    
            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                                'Acceleration Y: ' + acceleration.y         + '<br />' +
                                'Acceleration Z: ' + acceleration.z         + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
      </body>
    </html>
    

## Posebnosti iOS

API kliče fukcijo povratnega klica success v zahtevanih intervalih, toda omejuje zahteve posredovane napravi med 40ms in 1000ms. Na primer, če zahtevate interval na 3 sekunde, (3000ms), API zahteva podatke iz naprave vsako 1 sekundo, ampak povratni klic sucess se izvede le vsake 3 sekunde.