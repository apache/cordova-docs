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

# localStorage

Fornisce accesso al W3C [interfaccia Web Storage][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Metodi

*   **chiave**: restituisce il nome della chiave nella posizione specificata.

*   **getItem**: restituisce l'elemento identificato dalla chiave specificata.

*   **setItem**: assegna il valore di un elemento con chiave.

*   **removeItem**: rimuove l'elemento identificato dalla chiave specificata.

*   **chiaro**: rimuove tutte le coppie chiave/valore.

## Dettagli

Il `window.localStorage` interfaccia implementa [interfaccia Web Storage sul W3C][2]. Un'app può utilizzarlo per salvare i dati persistenti utilizzando coppie chiave-valore. Il `window.sessionStorage` interfaccia funziona allo stesso modo in ogni aspetto, tranne che tutti i dati sono cancellati ogni volta che l'app si chiude. Ogni database fornisce uno spazio dei nomi separato.

 [2]: http://dev.w3.org/html5/webstorage/

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen
*   Windows Phone 7 e 8

## Esempio rapido chiave

    var keyName = window.localStorage.key(0);
    

## Esempio rapido elemento set

    window.localStorage.setItem("key", "value");
    

## Ottenere rapido esempio di Item

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Rimuovere l'elemento rapido esempio

        window.localStorage.removeItem("key");
    

## Chiaro esempio rapido

        window.localStorage.clear();
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 capricci

Notazione del punto è *non* disponibile su Windows Phone 7. Assicurarsi di utilizzare `setItem` o `getItem` , piuttosto che accedere a tasti direttamente dall'oggetto di archiviazione, come`window.localStorage.someKey`.