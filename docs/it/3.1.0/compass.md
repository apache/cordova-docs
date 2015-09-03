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


# Bussola

> Ottiene la direzione che il dispositivo sta puntando.

## Metodi

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (obsoleto)
*   compass.clearWatchFilter (obsoleto)

## Argomenti

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   iOS (in`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


# compass.getCurrentHeading

Ottenere la corrente della bussola.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## Descrizione

La bussola è un sensore che rileva la direzione o la voce che il dispositivo è puntato, in genere dalla parte superiore del dispositivo. Esso misura la rotta in gradi da 0 a 359.99, dove 0 è a nord.

Le informazioni della bussola viene restituite tramite una `CompassHeading` oggetto utilizzando il `compassSuccess` funzione di callback.

## Piattaforme supportate

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 e 8 (se disponibili nell'hardware)
*   Windows 8

## Esempio rapido

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>


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


# compass.clearWatch

Smettere di guardare la bussola a cui fa riferimento il parametro ID orologio.

    navigator.compass.clearWatch(watchID);
    

*   **watchID**: l'ID restituito da`compass.watchHeading`.

## Piattaforme supportate

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 e 8 (se disponibili nell'hardware)
*   Windows 8

## Esempio rapido

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

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


# compass.watchHeadingFilter

Dal 1.6 non è più supportato, vedere `compass.watchHeading` per funzionalità equivalenti.


# compass.clearWatchFilter

Dal 1.6 non è più supportato. Vedere`compass.clearWatch`.


# compassSuccess

funzione di callback onSuccess che fornisce le informazioni della bussola tramite un `compassHeading` oggetto.

    function(heading) {
        // Do something
    }
    

## Parametri

*   **rubrica**: le informazioni di intestazione. *(compassHeading)*

## Esempio

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

funzione di callback onError per funzioni di bussola.

## Esempio

    function(CompassError) {
        // Handle the error
    }


# compassOptions

Parametro facoltativo per personalizzare il recupero della bussola.

## Opzioni

*   **frequenza**: la frequenza di recuperare la bussola in millisecondi. *(Numero)* (Default: 100)

*   **filtro**: il cambiamento in gradi necessari per avviare un callback di successo watchHeading. *(Numero)*

Stranezze Android

---

*   `filter`non è supportato.

## Tizen stranezze

*   `filter`non è supportato.

## Windows Phone 7 e 8 stranezze

*   `filter`non è supportato.


# compassHeading

A `CompassHeading` oggetto viene restituito alla `compassSuccess` funzione di callback.

## Proprietà

*   **magneticHeading**: la rotta in gradi da 0-359.99 in un unico momento. *(Numero)*

*   **trueHeading**: la voce rispetto al Polo Nord geografico in gradi 0-359.99 in un unico momento. Un valore negativo indica che non è possibile determinare la vera voce. *(Numero)*

*   **headingAccuracy**: lo scostamento in gradi tra il titolo segnalato e la vera voce. *(Numero)*

*   **timestamp**: il tempo in cui questa voce è stata determinata. *(millisecondi)*

## Descrizione

Il `CompassHeading` viene restituito l'oggetto per il `compassSuccess` funzione di callback.

## Stranezze Android

*   `trueHeading`non è supportato, ma riporta lo stesso valore`magneticHeading`

*   `headingAccuracy`è sempre 0 perché non non c'è alcuna differenza tra la `magneticHeading` e`trueHeading`.

## iOS stranezze

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Per i dispositivi iOS 4 e sopra, fattori di voce nell'orientamento corrente del dispositivo, non in riferimento alla sua posizione assoluta, per le applicazioni che supporta tale orientamento.


# CompassError

A `CompassError` oggetto viene restituito alla `compassError` funzione di callback quando si verifica un errore.

## Proprietà

*   **codice**: uno dei codici di errore predefiniti elencati di seguito.

## Costanti

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## Descrizione

Quando si verifica un errore, il `CompassError` oggetto viene passato come parametro a un `compassError` funzione di callback.
