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


# Veranstaltungen

> Cordova Lebenszyklusereignisse.

## Ereignistypen

*   deviceready
*   pause
*   resume
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Veranstaltungen von [Cordova-Plugin-Batterie-Status][1] hinzugefügt

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/README.md

*   batterycritical
*   batterylow
*   batterystatus

## Veranstaltungen von [Cordova-Plugin-Netzwerk-Informationen][2] hinzugefügt

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/README.md

*   online
*   offline


# deviceready

Das Ereignis wird ausgelöst, wenn Cordova vollständig geladen ist.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Details

Dieses Ereignis ist wesentlich für jede Anwendung. Es signalisiert, dass Cordovas Gerät APIs geladen haben und bereit sind, zugreifen.

Cordova besteht aus zwei Codebasen: native und JavaScript. Während der native Code lädt, zeigt eine benutzerdefinierte Lade-Bild. JavaScript lädt jedoch nur wenn das DOM geladen. Dies bedeutet, dass die Web-app möglicherweise eine Cordova JavaScript-Funktion nennen darf, bevor der entsprechende systemeigene Code verfügbar ist.

Das `deviceready` -Ereignis wird ausgelöst, sobald Cordova vollständig geladen hat. Einmal können das Ereignis ausgelöst, Sie sicher Cordova-APIs aufrufen. Anwendungen in der Regel fügen Sie einen Ereignis-Listener mit `document.addEventListener` sobald das HTML-Dokument DOM geladen hat.

Das `deviceready` Ereignis verhält sich etwas anders als von anderen. Ein Ereignishandler registriert nach der `deviceready` -Ereignis ausgelöst hat die Callback-Funktion aufgerufen, sofort.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 8
*   Windows 8

## Kurzes Beispiel

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# pause

Das Ereignis wird ausgelöst, wenn eine Anwendung in den Hintergrund gelegt wird.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Details

Das `pause` -Ereignis wird ausgelöst, wenn die einheitlichen Plattform die Anwendung in den Hintergrund, in der Regel, setzt wenn der Benutzer zu einer anderen Anwendung wechselt.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Kurzes Beispiel

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Macken

In der `pause` Handler, keine Anrufe an die Cordova-API oder native Plugins, die Objective-C durchlaufen funktionieren nicht, zusammen mit interaktiven Aufrufe, z. B. Warnungen oder `console.log()` . Sie werden nur verarbeitet, wenn die app auf der nächsten laufen Schleife fortgesetzt wird.

Die iOS-spezifische `resign` Ereignis ist verfügbar als Alternative zu `pause` , und erkennt, wenn Benutzer die **Lock** -Taste um das Gerät mit der app im Vordergrund ausgeführt zu sperren können. Wenn die app (und Gerät) für Multitasking aktiviert ist, ist dies gepaart mit einer anschließenden `pause` Ereignis, aber nur unter iOS 5. In der Tat werden alle gesperrten apps in iOS 5, die Multitasking aktiviert haben in den Hintergrund gedrängt. Für Anwendungen, die ausgeführt werden, wenn unter iOS 5 gesperrt, deaktivieren die app Multitasking, indem [UIApplicationExitsOnSuspend][1] auf `YES` . Um beim gesperrt auf iOS 4 auszuführen, spielt diese Einstellung keine Rolle.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# resume

Das Ereignis wird ausgelöst, wenn eine Anwendung aus dem Hintergrund abgerufen wird.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Details

Das `resume` -Ereignis wird ausgelöst, wenn die native Plattform die Anwendung aus dem Hintergrund zieht.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 8
*   Windows 8

## Kurzes Beispiel

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Macken

Alle interaktiven Funktionen Intensivlehrgang ein `pause` -Ereignishandler ausgeführt später, wenn die app wieder aufgenommen wird, wie durch signalisiert die `resume` Ereignis. Dazu gehören Warnungen, `console.log()` , und keine Anrufe von Plugins oder Cordova API, das Durchlaufen von Objective-C.

*   **aktiv** -Ereignis
    
    Die iOS-spezifische `active` Ereignis ist verfügbar als Alternative zu `resume` , und erkennt, wenn Benutzer die **Lock** -Taste mit der app im Vordergrund ausgeführt entsperren deaktivieren. Wenn die app (und Gerät) für Multitasking aktiviert ist, ist dies gepaart mit einer anschließenden `resume` Ereignis, aber nur unter iOS 5. In der Tat werden alle gesperrten apps in iOS 5, die Multitasking aktiviert haben in den Hintergrund gedrängt. Für Anwendungen, die ausgeführt werden, wenn unter iOS 5 gesperrt, deaktivieren die app Multitasking, indem [UIApplicationExitsOnSuspend][1] auf `YES` . Um beim gesperrt auf iOS 4 auszuführen, spielt diese Einstellung keine Rolle.

*   **Lebenslauf** -Ereignis
    
    Beim Aufruf aus einer `resume` -Ereignishandler, interaktive Funktionen wie z. B. `alert()` in eingeschlossen werden müssen ein `setTimeout()` Aufruf mit einem Timeoutwert von 0 (null), oder auch der app hängt. Zum Beispiel:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# backbutton

Das Ereignis wird ausgelöst, wenn der Benutzer den "zurück"-Button drückt.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Details

Um das zurück-Button Standardverhalten überschreiben, registriert einen Ereignis-Listener für das `backbutton` Ereignis in der Regel durch den Aufruf `document.addEventListener` sobald Sie erhalten die `deviceready` Ereignis. Es ist nicht mehr notwendig, jede andere Methode zum Überschreiben der zurück-Button aufrufen.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Windows Phone 8

## Kurzes Beispiel

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

Das Ereignis wird ausgelöst, wenn der Benutzer die Menü-Taste drückt.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Details

Anwenden eines Event-handlers überschreibt das Standardverhalten der Menü-Taste.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Amazon Fire OS
*   Android
*   BlackBerry 10

## Kurzes Beispiel

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Vollständiges Beispiel

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

Das Ereignis wird ausgelöst, wenn der Benutzer die Schaltfläche Suchen auf Android drückt.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Details

Wenn Sie das Standardverhalten für die Schaltfläche von Suche auf Android überschreiben möchten können Sie einen Ereignis-Listener für das Ereignis 'Searchbutton' registrieren.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   Android

## Kurzes Beispiel

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Vollständiges Beispiel

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

Das Ereignis wird ausgelöst, wenn der Benutzer die Startschaltfläche drückt.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Details

Wenn Sie das Start-Aufruf Standardverhalten überschreiben möchten registrieren Sie einen Ereignis-Listener für das `startcallbutton` Ereignis.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   BlackBerry 10

## Kurzes Beispiel

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Vollständiges Beispiel

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

Dieses Ereignis wird ausgelöst, wenn der Benutzer die End-Call-Taste drückt.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Details

Das Ereignis überschreibt das Standardverhalten des End-Aufruf.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   BlackBerry 10

## Kurzes Beispiel

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Vollständiges Beispiel

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

Das Ereignis wird ausgelöst, wenn der Benutzer die Lautstärke-Taste drückt.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## Details

Wenn Sie die Standard-Lautstärke reduzieren Verhalten überschreiben müssen erfassen Sie einen Ereignis-Listener für das `volumedownbutton` Ereignis.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   BlackBerry 10
*   Android

## Kurzes Beispiel

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Vollständiges Beispiel

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

Das Ereignis wird ausgelöst, wenn der Benutzer die Lauter Taste drückt.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Details

Wenn Sie die Standard-Lautstärke erhöhen Verhalten überschreiben müssen registrieren Sie einen Ereignis-Listener für das `volumeupbutton` Ereignis.

Anwendungen sollten in der Regel verwenden `document.addEventListener` einmal einen Ereignis-Listener hinzufügen das `deviceready` -Ereignis ausgelöst.

## Unterstützte Plattformen

*   BlackBerry 10
*   Android

## Kurzes Beispiel

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Vollständiges Beispiel

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
