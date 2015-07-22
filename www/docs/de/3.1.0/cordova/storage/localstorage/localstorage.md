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

Ermöglicht den Zugriff auf die W3C [Web-Speicherschnittstelle][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Methoden

*   **Schlüssel**: gibt den Namen des Schlüssels an der angegebenen Position zurück.

*   **GetItem**: gibt das Element mit dem angegebenen Schlüssel identifiziert.

*   **SetItem**: weist eine freigestellte Element Wert.

*   **RemoveItem**: entfernt das Element mit dem angegebenen Schlüssel identifiziert.

*   **Löschen**: entfernt alle Schlüssel/Wert-Paare.

## Informationen

Die `window.localStorage` -Schnittstelle implementiert die W3C [Web-Speicherschnittstelle][2]. Eine app kann damit um persistente Daten mithilfe von Schlüssel-Wert-Paaren zu speichern. Die `window.sessionStorage` Schnittstelle funktioniert genauso in jeder Hinsicht, es sei denn, dass alle Daten jedes Mal die app schließt deaktiviert ist. Jede Datenbank bietet einen separaten Namespace.

 [2]: http://dev.w3.org/html5/webstorage/

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 6.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8

## Schnelle Schlüsselbeispiel

    var keyName = window.localStorage.key(0);
    

## Set Item Beispiel

    window.localStorage.setItem("key", "value");
    

## Element kurzes Beispiel zu erhalten

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Kleines Beispiel Element entfernen

        window.localStorage.removeItem("key");
    

## Kleines Beispiel zu löschen

        window.localStorage.clear();
    

## Vollständiges Beispiel

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
    

## Windows Phone 7 Macken

Punktnotation ist *nicht* für Windows Phone 7 verfügbar. Verwenden Sie `setItem` oder `getItem` , anstatt auf Tasten direkt aus dem Speicherobjekt, wie z.B.`window.localStorage.someKey`.