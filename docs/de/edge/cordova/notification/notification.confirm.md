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

# Notification.Confirm

Zeigt das Dialogfeld anpassbare Bestätigung.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **Nachricht**: Dialogfeld Nachricht. *(String)*

*   **ConfirmCallback**: Callback aufgerufen wird, mit Index gedrückt (1, 2 oder 3) oder wenn das Dialogfeld geschlossen wird, ohne einen Tastendruck (0). *(Funktion)*

*   **Titel**: Dialog "Titel". *(String)* (Optional, Standard ist`Confirm`)

*   **ButtonLabels**: Array von Zeichenfolgen, die Schaltflächenbezeichnungen angeben. *(Array)* (Optional, Standard ist [ `OK,Cancel` ])

## Beschreibung

Die `notification.confirm` -Methode zeigt ein native Dialogfeld, das mehr als des Browsers anpassbar ist `confirm` Funktion.

## confirmCallback

Die `confirmCallback` wird ausgeführt, wenn der Benutzer eine der Schaltflächen im Dialogfeld zur Bestätigung drückt.

Der Rückruf dauert das Argument `buttonIndex` *(Anzahl)*, die der Index der Schaltfläche gedrückt ist. Beachten Sie, dass der Index 1-basierte Indizierung verwendet, sodass der Wert ist `1` , `2` , `3` , etc..

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

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
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 und 8 Macken

*   Es gibt keine eingebaute Browser-Funktion für `window.confirm` , aber Sie können es binden, indem Sie zuweisen:
    
        window.confirm = navigator.notification.confirm;
        

*   Aufrufe von `alert` und `confirm` sind nicht blockierend, so dass das Ergebnis nur asynchron zur Verfügung steht.