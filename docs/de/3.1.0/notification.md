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


# Benachrichtigung

> Visueller, akustischer und taktiler Gerätebenachrichtigungen.

## Methoden

*   `Notification.Alert`
*   `Notification.Confirm`
*   `Notification.prompt`
*   `Notification.Beep`
*   `Notification.Vibrate`

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   iOS (in`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


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


# Notification.Beep

Das Gerät spielt einen Signalton sound.

    navigator.notification.beep(times);
    

*   **Zeiten**: die Anzahl der Wiederholungen des Signaltons. *(Anzahl)*

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8

## Kleines Beispiel

    // Beep twice!
    navigator.notification.beep(2);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Android Macken

*   Android spielt die Standardeinstellung **Benachrichtigung Klingelton** unter **Einstellungen/Sound & Display** -Panel angegeben.

## Windows Phone 7 und 8 Macken

*   Stützt sich auf eine generische Piepton-Datei aus Cordova-Distribution.

## Tizen Macken

*   Tizen implementiert Signaltöne durch Abspielen einer Audiodatei über die Medien API.

*   Die Beep-Datei muss kurz sein, befinden muss einem `sounds` Unterverzeichnis des Stammverzeichnisses der Anwendung, und muss den Namen`beep.wav`.


# Notification.Vibrate

Vibriert das Gerät für den angegebenen Zeitraum.

    navigator.notification.vibrate(milliseconds)
    

*   **Zeit**: Millisekunden Vibrieren des Geräts, wobei 1000 Millisekunden entspricht 1 Sekunde. *(Anzahl)*

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8

## Kleines Beispiel

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

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
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS Macken

*   **Zeit**: ignoriert die angegebene Zeit und für eine voreingestellte Zeit vibriert.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 Macken

Vibrieren Sie Funktion, die im Besitz von Navigatorobjekt

        navigator.vibrate(1000);  // vibrate for 1 second
