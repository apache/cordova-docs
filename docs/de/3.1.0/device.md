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


# Gerät

> Das `device` -Objekt beschreibt des Geräts Hard- und Software.

## Eigenschaften

*   device.model
*   Device.Cordova
*   Device.Platform
*   Device.UUID
*   Device.Version
*   device.name

## Geltungsbereich von Variablen

Da `device` zugewiesen ist das `window` -Objekt, es ist implizit im globalen Gültigkeitsbereich.

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

*   Tizen (in`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Bezug: [Anwendungsmanifest für Tizen Webanwendung][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

Modellname des Geräts zu erhalten.

    var string = device.name;
    

## Beschreibung

`device.name`Gibt den Namen der Modell- oder des Geräts zurück. Dieser Wert wird vom Gerätehersteller festgelegt und kann zwischen den Versionen des gleichen Produkts unterschiedlich sein.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

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
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Android Macken

*   Ruft den [Produktname][1] anstelle des [Modellnamens][2], das ist oft der Codename für die Produktion. Beispielsweise das Nexus One gibt `Passion` , und Motorola Droid gibt`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Windows Phone 7 und 8 Macken

*   Gibt das vom Hersteller angegebenen Gerätemodell zurück. Beispielsweise gibt der Samsung-Fokus`SGH-i917`.

## Tizen Macken

*   Gibt z. B. das Gerätemodell von dem Kreditor zugeordnet,`TIZEN`


# device.cordova

Rufen Sie die Version von Cordova, die auf dem Gerät ausgeführt.

    var string = device.cordova;
    

## Beschreibung

`device.cordova`Gibt die Version von Cordova, die auf dem Gerät ausgeführt.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    var name = device.cordova;
    

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
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


# device.platform

Name des Betriebssystems des Geräts zu erhalten.

    var string = device.platform;
    

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

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
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## BlackBerry Macken

Geräte möglicherweise die Gerätenummer für die Version von Plattform anstelle des Namens Plattform zurück. Beispielsweise gibt der Storm2 9550 einen Wert wie`2.13.0.95`.

## Windows Phone 7 Macken

Windows Phone 7 Geräte melden die Plattform als`WinCE`.

## Windows Phone 8 Macken

Windows Phone 8 Geräte melden die Plattform als`Win32NT`.


# device.uuid

Des Geräts Universally Unique Identifier ([UUID][1] zu erhalten).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## Beschreibung

Die Details wie eine UUID generiert wird werden vom Gerätehersteller und beziehen sich auf die Plattform oder das Modell des Geräts.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    / / Android: wird eine zufällige 64-Bit-Ganzzahl (als Zeichenfolge, wieder!) / / die ganze Zahl wird beim ersten Start des Geräts erzeugt / / / / BlackBerry: gibt die PIN-Nummer des Gerätes / / Dies ist eine neunstellige eindeutige Ganzzahl (als String, obwohl!) / / / / iPhone: (paraphrasiert aus der Dokumentation zur UIDevice-Klasse) / / liefert eine Reihe von Hash-Werte, die aus mehreren Hardware erstellt identifiziert.
    / / Es ist gewährleistet, dass für jedes Gerät eindeutig sein und kann nicht gebunden werden / / an den Benutzer weitergeleitet.
    / / Windows Phone 7: gibt einen Hash des Gerät + aktueller Benutzer, / / wenn der Benutzer nicht definiert ist, eine Guid generiert und wird weiter bestehen, bis die app deinstalliert wird / / Tizen: gibt das Gerät IMEI (International Mobile Equipment Identity oder IMEI ist eine Zahl / / einzigartig für jedes GSM- und UMTS-Handy.
    var deviceID = device.uuid;
    

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
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS Quirk

Die `uuid` auf iOS ist nicht eindeutig auf ein Gerät, aber für jede Anwendung, für jede Installation variiert. Es ändert sich, wenn Sie löschen und neu die app installieren, und möglicherweise auch beim iOS zu aktualisieren, oder aktualisieren Sie auch Ihre app pro Version (scheinbaren in iOS 5.1). Die `uuid` ist kein zuverlässiger Wert.

## Windows Phone 7 und 8 Macken

Die `uuid` für Windows Phone 7 die Berechtigung erfordert `ID_CAP_IDENTITY_DEVICE` . Microsoft wird diese Eigenschaft wahrscheinlich bald abzuschaffen. Wenn die Funktion nicht verfügbar ist, generiert die Anwendung eine persistente Guid, die für die Dauer der Installation der Anwendung auf dem Gerät verwaltet wird.


# device.version

Version des Betriebssystems zu erhalten.

    var string = device.version;
    

## Unterstützte Plattformen

*   Android 2.1 +
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    / / Android: Froyo OS würde "2.2" zurück / / Eclair OS zurückkehren würde, "2.1", "2.0.1" oder "2.0" / / Version kann auch zurückgeben update Level "2.1-update1" / / / / BlackBerry: Torch 9800 mit OS 6.0 würde zurückgeben "6.0.0.600" / / / / iPhone: iOS 3.2 gibt "3.2" / / / / Windows Phone 7: liefert aktuelle OS-Versionsnummer, ex. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

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
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
