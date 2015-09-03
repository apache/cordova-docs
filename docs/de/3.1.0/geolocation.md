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


# Geolocation

> Das `geolocation` Objekt bietet Zugriff auf Positionsdaten auf der Grundlage des Geräts GPS-Sensor oder abgeleitet von Netzwerk-Signale.

`Geolocation`enthält Informationen über das Gerät Speicherort, z. B. breiten- und Längengrad. Gemeinsame Quellen von Standortinformationen sind Global Positioning System (GPS) und Lage von Netzwerk-Signale wie IP-Adresse, RFID, WLAN und Bluetooth MAC-Adressen und GSM/CDMA Zelle IDs abgeleitet. Es gibt keine Garantie, dass die API des Geräts tatsächliche Position zurückgibt.

Diese API basiert auf der [W3C Geolocation API-Spezifikation][1], und nur auf Geräten, die nicht bereits eine Implementierung bieten führt.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Wichtige Datenschutzhinweis:** Erhebung und Nutzung von Geolocation-Daten wirft wichtige Privatsphäre. Wie die app benutzt Geolocation-Daten, Ihre app-Datenschutzrichtlinien zu diskutieren, ob es mit allen anderen Parteien und das Niveau der Genauigkeit der Daten (z. B. grob, fein, Postleitzahl, etc..) freigegeben ist. Geolocation-Daten gilt allgemein als empfindlich, weil es, eine Person Aufenthaltsort erkennen lässt und, wenn gespeichert, die Geschichte von seinen Reisen. Daher neben Ihrer app-Privacy Policy sollten stark Sie eine just-in-Time Ankündigung vor Ihrer Anwendung, die Zugriff auf Geolocation-Daten (wenn das Betriebssystem des Geräts bereits tun nicht). Diese Benachrichtigung sollte der gleichen Informationen, die vorstehend, sowie die Zustimmung des Benutzers (z.B. durch Präsentation Entscheidungen für das **OK** und **Nein danke**). Weitere Informationen finden Sie in der Datenschutz-Guide.

## Methoden

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Argumente

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Objekte (schreibgeschützt)

*   Stellung
*   PositionError
*   Koordinaten

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   iOS (in`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# geolocation.getCurrentPosition

Gibt das Gerät die aktuelle Position als ein `Position` Objekt.

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);
    

## Parameter

*   **GeolocationSuccess**: der Rückruf, der die aktuelle Position übergeben wird.

*   **GeolocationError**: *(Optional)* der Rückruf, der ausgeführt wird, wenn ein Fehler auftritt.

*   **GeolocationOptions**: *(Optional)* die Geolocation-Optionen.

## Beschreibung

`geolocation.getCurrentPosition`ist eine asynchrone Funktion. Es gibt das Gerät aktuelle Position auf der `geolocationSuccess` Rückruf mit einem `Position` Objekt als Parameter. Wenn ein Fehler vorliegt der `geolocationError` Rückruf wird übergeben ein `PositionError` Objekt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
        }
    
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# geolocation.watchPosition

Uhren für Änderungen an der aktuellen Position des Geräts.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## Parameter

*   **GeolocationSuccess**: der Rückruf, der die aktuelle Position übergeben wird.

*   **GeolocationError**: (Optional) der Rückruf, der ausgeführt wird, wenn ein Fehler auftritt.

*   **GeolocationOptions**: (Optional) die Geolocation-Optionen.

## Gibt

*   **String**: gibt eine Uhr-Id, die das Uhr Stellung Intervall verweist zurück. Die Uhr-Id sollte verwendet werden, mit `geolocation.clearWatch` , gerade für Änderungen zu stoppen.

## Beschreibung

`geolocation.watchPosition`ist eine asynchrone Funktion. Es gibt das Gerät aktuelle Position zurück, wenn eine Änderung erkannt wird. Wenn das Gerät einen neuen Speicherort und ruft die `geolocationSuccess` Rückruf führt mit einem `Position` Objekt als Parameter. Wenn ein Fehler vorliegt der `geolocationError` Rückruf führt mit einem `PositionError` Objekt als Parameter.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>


# geolocation.clearWatch

Stoppen, gerade für Änderungen an dem Gerät Speicherort verweist die `watchID` Parameter.

    navigator.geolocation.clearWatch(watchID);
    

## Parameter

*   **WatchID**: die Id der `watchPosition` Intervall löschen. (String)

## Beschreibung

Die `geolocation.clearWatch` stoppt Veränderungen an dem Gerät Ort beobachten, durch Deaktivieren der `geolocation.watchPosition` verwiesen wird, von`watchID`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    / / Optionen: Achten Sie auf Änderungen in Position, und verwenden Sie die / / genaue position Erwerbsart verfügbar.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>


# Koordinaten

Eine Reihe von Eigenschaften, die die geographischen Koordinaten von einer Position zu beschreiben.

## Eigenschaften

*   **Breitengrad**: Latitude in Dezimalgrad. *(Anzahl)*

*   **Länge**: Länge in Dezimalgrad. *(Anzahl)*

*   **Höhe**: Höhe der Position in Meter über dem Ellipsoid. *(Anzahl)*

*   **Genauigkeit**: Genauigkeit der breiten- und Längengrad Koordinaten in Metern. *(Anzahl)*

*   **AltitudeAccuracy**: Genauigkeit der Koordinate Höhe in Metern. *(Anzahl)*

*   **Rubrik**: Fahrtrichtung, angegeben in Grad relativ zu den Norden im Uhrzeigersinn gezählt. *(Anzahl)*

*   **Geschwindigkeit**: aktuelle Geschwindigkeit über Grund des Geräts, in Metern pro Sekunde angegeben. *(Anzahl)*

## Beschreibung

Die `Coordinates` Objekt ist angefügt das `Position` -Objekt, das Callback-Funktionen in Anforderungen für die aktuelle Position zur Verfügung steht.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback
    //
    var onError = function() {
        alert('onError!');
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
                            'Longitude: '            + position.coords.longitude        + '<br/>' +
                            'Altitude: '             + position.coords.altitude         + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy         + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
                            'Heading: '              + position.coords.heading          + '<br/>' +
                            'Speed: '                + position.coords.speed            + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    

## Android Macken

**AltitudeAccuracy**: von Android-Geräten, Rückgabe nicht unterstützt`null`.


# Position

Enthält `Position` Koordinaten und Timestamp, erstellt von der Geolocation API.

## Eigenschaften

*   **CoOrds**: eine Reihe von geographischen Koordinaten. *(Koordinaten)*

*   **Timestamp**: Zeitstempel der Erstellung für `coords` . *(Datum)*

## Beschreibung

Das `Position` Objekt erstellt und bevölkert von Cordova und an den Benutzer durch eine Callback-Funktion zurückgegeben.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                                'Longitude: '         + position.coords.longitude        + '<br />' +
                                'Altitude: '          + position.coords.altitude         + '<br />' +
                                'Accuracy: '          + position.coords.accuracy         + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: '           + position.coords.heading          + '<br />' +
                                'Speed: '             + position.coords.speed            + '<br />' +
                                'Timestamp: '         + position.timestamp               + '<br />';
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# Positionsfehler

A `PositionError` -Objekt übergeben, um die `geolocationError` Rückruf, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

*   **Nachricht**: Fehlermeldung, die die Informationen über den aufgetretenen Fehler beschreibt.

## Konstanten

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Beschreibung

Das `PositionError` -Objekt übergeben, um die `geolocationError` Callback-Funktion tritt ein Fehler mit Geolocation.

### `PositionError.PERMISSION_DENIED`

Zurückgegeben, wenn der Benutzer die Anwendung zum Abrufen von Positionsinformationen nicht zulässt. Dies ist abhängig von der Plattform.

### `PositionError.POSITION_UNAVAILABLE`

Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position abzurufen ist. Im Allgemeinen bedeutet dies, das Gerät hat keine Netzwerkkonnektivität und/oder kann kein Satelliten-Update erhalten.

### `PositionError.TIMEOUT`

Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position innerhalb der angegebenen abzurufen ist die `geolocationOptions` ' `timeout` Eigenschaft. Bei Verwendung mit `geolocation.watchPosition` , dieser Fehler konnte übergeben werden, um die `geolocationError` Rückruf jedes `timeout` Millisekunden.


# geolocationSuccess

Des Benutzers-Callback-Funktion, die ausgeführt wird, sobald eine Geolocation-Position verfügbar ist (beim Aufruf aus `geolocation.getCurrentPosition` ), oder wenn sich die Position ändert, (beim Aufruf aus`geolocation.watchPosition`).

    function(position) {
        // Do something
    }
    

## Parameter

*   **Lage**: die Geolocation-Position, die durch das Gerät zurückgegeben. *(Position)*

## Beispiel

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }


# geolocationError

Des Benutzers Callback-Funktion, die ausgeführt wird, wenn ein Fehler für Geolocation-Funktionen auftritt.

    function(error) {
        // Handle the error
    }
    

## Parameter

*   **Fehler**: der Fehler, die durch das Gerät zurückgegeben. *(PositionError)*


# geolocationOptions

Optionalen Parametern, um das Abrufen von der geolocation`Position`.

    {MaximumAge: 3000, Timeout: 5000, EnableHighAccuracy: true};
    

## Optionen

*   **EnableHighAccuracy**: stellt einen Hinweis, dass die Anwendung die bestmöglichen Ergebnisse benötigt. Standardmäßig versucht das Gerät abzurufen ein `Position` mit netzwerkbasierte Methoden. Wenn diese Eigenschaft auf `true` erzählt den Rahmenbedingungen genauere Methoden, z. B. Satellitenortung verwenden. *(Boolean)*

*   **Timeout**: die maximale Länge der Zeit (in Millisekunden), die zulässig ist, übergeben Sie den Aufruf von `geolocation.getCurrentPosition` oder `geolocation.watchPosition` bis zu den entsprechenden `geolocationSuccess` Rückruf führt. Wenn die `geolocationSuccess` Rückruf wird nicht aufgerufen, in dieser Zeit die `geolocationError` Rückruf wird übergeben ein `PositionError.TIMEOUT` Fehlercode. (Beachten Sie, dass in Verbindung mit `geolocation.watchPosition` , die `geolocationError` Rückruf könnte auf ein Intervall aufgerufen werden alle `timeout` Millisekunden!) *(Anzahl)*

*   **MaximumAge**: eine zwischengespeicherte Position, deren Alter nicht größer als die angegebene Zeit in Millisekunden ist, zu akzeptieren. *(Anzahl)*

## Android Macken

Android 2.x-Emulatoren geben ein Geolocation-Ergebnis nicht zurück, es sei denn, die `enableHighAccuracy` Option auf festgelegt ist`true`.
