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

# compass.watchHeading

A intervalli regolari, ottenere la bussola in gradi.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## Descrizione

La bussola è un sensore che rileva la direzione o la voce che il dispositivo è appuntito. Esso misura la rotta in gradi da 0 a 359.99.

Il `compass.watchHeading` ottiene il titolo attuale del dispositivo a intervalli regolari. Ogni volta che viene recuperato il titolo, il `headingSuccess` viene eseguita la funzione di callback. Specificare l'intervallo in millisecondi tramite il `frequency` parametro nel `compassOptions` oggetto.

L'orologio restituito ID fa riferimento l'intervallo orologio bussola. L'orologio ID può essere usato con `compass.clearWatch` a smettere di guardare la bussola.

## Piattaforme supportate

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 e 8 (se disponibili nell'hardware)
*   Windows 8

## Esempio rapido

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS stranezze

In iOS `compass.watchHeading` può anche ottenere la voce corrente del dispositivo quando cambia da un numero di gradi specificato. Ogni volta che i cambiamenti di direzione del numero specificato di gradi o più, il `headingSuccess` viene eseguita la funzione di callback. Specificare i gradi di variazione tramite il `filter` parametro nel `compassOptions` oggetto. Cancellare l'orologio come al solito passando l'ID orologio restituito da `compass.clearWatch` . Questa funzionalità sostituisce il precedentemente separati, solo iOS `watchHeadingFilter` e `clearWatchFilter` funzioni, che sono stati rimossi nella versione 1.6.

Solo un `watchHeading` può essere in effetti una volta in iOS. Se un `watchHeading` utilizza un filtro, chiamata `getCurrentHeading` o `watchHeading` utilizza il valore esistente di filtro per specificare le modifiche intestazione. Guardando i cambiamenti di direzione con un filtro è più efficiente con intervalli di tempo.