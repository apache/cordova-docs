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