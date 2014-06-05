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

# Notification.Alert

Zeigt eine benutzerdefinierte Warnung oder Dialogfeld Feld.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **Nachricht**: Dialogfeld Nachricht. *(String)*

*   **AlertCallback**: Callback aufgerufen wird, wenn Warnungs-Dialogfeld geschlossen wird. *(Funktion)*

*   **Titel**: Dialog "Titel". *(String)* (Optional, Standard ist`Alert`)

*   **ButtonName**: Name der Schaltfläche. *(String)* (Optional, Standard ist`OK`)

## Beschreibung

Die meisten Implementierungen von Cordova ein native Dialogfeld für dieses Feature verwenden, aber einige Plattformen des Browsers `alert` Funktion, die in der Regel weniger anpassbar ist.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7 und 8 Macken

*   Es gibt keine eingebaute Datenbanksuchroutine-Warnung, aber Sie können binden, wie folgt zu nennen `alert()` im globalen Gültigkeitsbereich:
    
        window.alert = navigator.notification.alert;
        

*   Beide `alert` und `confirm` sind nicht blockierende Aufrufe, die Ergebnisse davon nur asynchron sind.