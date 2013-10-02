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

# InAppBrowser

> Die `InAppBrowser` ist eine Web-Browser-Ansicht, die anzeigt, wann der Aufruf `window.open()` , oder als als bildeten einen Link öffnen`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**Hinweis:** Das InAppBrowser-Fenster verhält sich wie einen standard-Webbrowser und Cordova APIs kann nicht zugegriffen werden kann.

## Beschreibung

Aus einem Aufruf zurückgegebenen Objekts`window.open`.

## Methoden

*   addEventListener
*   removeEventListener
*   Schließen
*   Karte
*   executeScript
*   insertCSS

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   iOS (in`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7 und 8 (in`config.xml`)
    
        <feature name="InAppBrowser" />
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.

# addEventListener

> Fügt einen Listener für eine Veranstaltung aus der`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster *(InAppBrowser)*

*   **EventName**: das Ereignis zu warten *(String)*
    
    *   **Loadstart**: Ereignis wird ausgelöst, wenn die `InAppBrowser` beginnt, eine URL zu laden.
    *   **Loadstop**: Ereignis wird ausgelöst, wenn der `InAppBrowser` beendet ist, eine URL laden.
    *   **LoadError**: Ereignis wird ausgelöst, wenn der `InAppBrowser` ein Fehler auftritt, wenn Sie eine URL zu laden.
    *   **Ausfahrt**: Ereignis wird ausgelöst, wenn das `InAppBrowser` -Fenster wird geschlossen.

*   **Rückruf**: die Funktion, die ausgeführt wird, wenn das Ereignis ausgelöst wird. Die Funktion übergeben wird ein `InAppBrowserEvent` -Objekt als Parameter.

## Unterstützte Plattformen

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 und 8

## Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# removeEventListener

> Entfernt einen Listener für eine Veranstaltung aus der`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster. *(InAppBrowser)*

*   **EventName**: das Ereignis zu warten. *(String)*
    
    *   **Loadstart**: Ereignis wird ausgelöst, wenn die `InAppBrowser` beginnt, eine URL zu laden.
    *   **Loadstop**: Ereignis wird ausgelöst, wenn der `InAppBrowser` beendet ist, eine URL laden.
    *   **LoadError**: Ereignis wird ausgelöst, wenn die `InAppBrowser` trifft einen Fehler beim Laden einer URLs.
    *   **Ausfahrt**: Ereignis wird ausgelöst, wenn das `InAppBrowser` -Fenster wird geschlossen.

*   **Rückruf**: die Funktion ausgeführt, wenn das Ereignis ausgelöst wird. Die Funktion übergeben wird ein `InAppBrowserEvent` Objekt.

## Unterstützte Plattformen

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 und 8

## Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# Schließen

> Schließt die `InAppBrowser` Fenster.

    ref.close();
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster *(InAppBrowser)*

## Unterstützte Plattformen

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 und 8

## Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# Karte

> Zeigt ein InAppBrowser-Fenster, das geöffnet wurde, versteckt. Aufrufen, dies hat keine Auswirkungen, wenn die InAppBrowser schon sichtbar war.

    ref.show();
    

*   **Ref:** Verweis auf die (InAppBrowser) Fenster`InAppBrowser`)

## Unterstützte Plattformen

*   Android
*   BlackBerry
*   iOS

## Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> Fügt JavaScript-Code in das `InAppBrowser` Fenster

    ref.executeScript(details, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster. *(InAppBrowser)*

*   **InjectDetails**: Informationen über das Skript ausgeführt, angeben, entweder ein `file` oder `code` Schlüssel. *(Objekt)*
    
    *   **Datei**: URL des Skripts zu injizieren.
    *   **Code**: Text des Skripts zu injizieren.

*   **Rückruf**: die Funktion, die ausgeführt wird, nachdem der JavaScript-Code injiziert wird.
    
    *   Wenn das eingefügte Skript vom Typ ist `code` , der Rückruf führt mit einen einzelnen Parameter, der der Rückgabewert des Skripts ist, umwickelt ein `Array` . Bei Multi-Line-Skripten ist der Rückgabewert von der letzten Anweisung oder den letzten Ausdruck ausgewertet.

## Unterstützte Plattformen

*   Android
*   BlackBerry
*   iOS

## Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> Injiziert CSS in der `InAppBrowser` Fenster.

    ref.insertCSS(details, callback);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster *(InAppBrowser)*

*   **InjectDetails**: Informationen über das Skript ausgeführt, angeben, entweder ein `file` oder `code` Schlüssel. *(Objekt)*
    
    *   **Datei**: URL des Stylesheets zu injizieren.
    *   **Code**: Text des Stylesheets zu injizieren.

*   **Rückruf**: die Funktion, die ausgeführt wird, nachdem die CSS injiziert wird.

## Unterstützte Plattformen

*   Android
*   BlackBerry
*   iOS

## Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

Das Objekt, das an die Callback-Funktion von übergeben wird eine `addEventListener` aufrufen, auf ein `InAppBrowser` Objekt.

## Eigenschaften

*   **Typ**: Eventname, entweder `loadstart` , `loadstop` , `loaderror` , oder `exit` . *(String)*

*   **URL**: die URL, die geladen wurde. *(String)*

*   **Code**: der Fehler-Code, nur im Fall von `loaderror` . *(Anzahl)*

*   **Nachricht**: die Fehlermeldung angezeigt, nur im Fall von `loaderror` . *(String)*