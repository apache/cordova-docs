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

# Notification.prompt

Zeigt eine anpassbare Eingabedialogfeld.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **Nachricht**: Dialogfeld Nachricht. *(String)*

*   **PromptCallback**: Callback aufgerufen wird, wenn eine Taste gedrückt wird. *(Funktion)*

*   **Titel**: Dialog Title *(String)* (Optional, Standard ist`Prompt`)

*   **ButtonLabels**: Array von Zeichenfolgen angeben Schaltfläche Etiketten *(Array)* (Optional, Standard ist`["OK","Cancel"]`)

*   **DefaultText**: Standard-Textbox Eingabewert ( `String` ) (Optional, Standard: leere Zeichenfolge)

## Beschreibung

Die `notification.prompt` -Methode zeigt ein native Dialogfeld, das mehr als des Browsers anpassbar ist `prompt` Funktion.

## promptCallback

Die `promptCallback` wird ausgeführt, wenn der Benutzer eine der Schaltflächen im Eingabedialogfeld drückt. Die `results` an den Rückruf übergebene Objekt enthält die folgenden Eigenschaften:

*   **ButtonIndex**: der Index der Schaltfläche gedrückt. *(Anzahl)* Beachten Sie, dass der Index 1-basierte Indizierung, verwendet, sodass der Wert ist `1` , `2` , `3` , etc..

*   **Eingang1**: in Eingabedialogfeld eingegebenen Text. *(String)*

## Unterstützte Plattformen

*   Android
*   iOS

## Kleines Beispiel

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Android Macken

*   Android unterstützt maximal drei Schaltflächen und mehr als das ignoriert.

*   Auf Android 3.0 und höher, werden die Schaltflächen in umgekehrter Reihenfolge für Geräte angezeigt, die das Holo-Design verwenden.