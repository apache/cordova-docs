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

# geolocation.watchPosition

Orologi per le modifiche alla posizione corrente del dispositivo.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## Parametri

*   **geolocationSuccess**: il callback passato alla posizione corrente.

*   **geolocationError**: (facoltativo) il callback che viene eseguito se si verifica un errore.

*   **geolocationOptions**: opzioni (opzionale) la geolocalizzazione.

## Restituisce

*   **Stringa**: restituisce un id di orologio che fa riferimento l'intervallo di posizione orologio. L'id dell'orologio deve essere usato con `geolocation.clearWatch` a smettere di guardare per cambiamenti di posizione.

## Descrizione

`geolocation.watchPosition`è una funzione asincrona. Restituisce la posizione corrente del dispositivo quando viene rilevata una modifica della posizione. Quando il dispositivo recupera una nuova posizione, la `geolocationSuccess` callback viene eseguita con un `Position` oggetto come parametro. Se c'è un errore, il `geolocationError` callback viene eseguita con un `PositionError` oggetto come parametro.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>