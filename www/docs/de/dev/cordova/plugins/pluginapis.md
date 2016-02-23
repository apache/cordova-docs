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

title: Plugin APIs
---

# Plugin APIs

Cordova mit einen minimalen Satz von APIs und Projekte hinzufügen, was zusätzliche APIs, die sie durch Plugins erfordern.

Sie können alle vorhandenen Plugins (einschließlich Drittanbieter Plugins) auf [npm][1] durchsuchen.

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

Der traditionelle Kern Cordova Plugins sind wie folgt:

*   [Batteriestatus][2]

    > Überwachen Sie den Status des Geräts Batterie.

*   [Kamera][3]

    > Ein Foto mit der Gerätekamera zu erfassen.

*   [Konsole][4]

    > Fügen Sie zusätzlich die Möglichkeit, zu console.log().

*   [Kontakte][5]

    > Arbeiten Sie mit der Geräte-Kontaktdatenbank.

*   [Gerät][6]

    > Gerät bestimmte Informationen zu sammeln.

*   [Bewegung Gerät (Beschleunigungssensor)][7]

    > Tippen Sie in das Gerät Weg-und/oder Geschwindigkeitsgeber.

*   [Orientierung des Geräts (Kompass)][8]

    > Erhalten Sie die Richtung, die das Gerät verweist.

*   [Dialoge][9]

    > Visuelle Gerätebenachrichtigungen.

*   [Dateisystem][10]

    > Haken Sie in native Dateisystem durch JavaScript.

*   [File-Transfer][11]

    > Haken Sie in native Dateisystem durch JavaScript.

*   [Geolocation][12]

    > Machen Sie Ihre Anwendung Lage bewusst.

*   [Globalisierung][13]

    > Aktivieren Sie die Darstellung von Objekten, die spezifisch für ein Gebietsschema.

*   [InAppBrowser][14]

    > URLs in einer anderen in-app Browserinstanz zu starten.

*   [Medien][15]

    > Aufzeichnen und Wiedergeben von audio-Dateien.

*   [Medien erfassen][16]

    > Media-Dateien mithilfe des Geräts Media Capture-Anwendungen zu erfassen.

*   [Netzwerkinformationen (Verbindung)][17]

    > Der Netzwerkstatus und Mobilfunknetz Informationen schnell zu überprüfen.

*   [SplashScreen][18]

    > Ein- und Ausblenden der Splash-Screen Anwendungen.

*   [Vibration][19]

    > Eine API, das Gerät zu vibrieren.

*   [StatusBar][20]

    > Eine API zum Anzeigen, ausblenden und Konfigurieren der Status Bar Hintergrund.

*   [Whitelist][21]

    > Ein Plugin zur Whitelist Netzwerkanforderungen. Müssen installieren, um alle Netzwerkanforderungen in Ihren Anwendungen haben.

*   [Ältere Whitelist][22]

    > Ein Plugin, um den alten Stil der weißen Liste zu verwenden, bevor es war herausgerissen und in die Whitelist-Plugin geändert.

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

Nicht-englische Übersetzungen über diese Plugin-Docs können gefunden werden, indem Sie das Plugin Github Repos und suchen in den Ordner "Docs"
