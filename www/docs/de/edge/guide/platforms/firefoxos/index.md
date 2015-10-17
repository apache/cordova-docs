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

title: Firefox-OS-Plattform-Guide
---

# Firefox-OS-Plattform-Guide

Dieses Handbuch beschreibt das Einrichten der Entwicklungsumgebung erstellen Cordova apps für Firefox-OS-Geräte, dann testen und veröffentlichen diese apps.

## Anforderungen und Unterstützung

Firefox-OS apps sind im Grunde nur Web-Anwendungen mit dem Zusatz einer manifest.webapp-Datei, die Metadaten über die app definiert und ermöglicht es auf Firefox-OS-Geräten installiert werden. Jede Plattform, unterstützt von Cordova, kann verwendet werden.Erfahren Sie mehr über das Erstellen von Web-Anwendungen, rufen Sie das [App-Center][1] auf [MDN][2].

 [1]: https://developer.mozilla.org/en-US/Apps
 [2]: https://developer.mozilla.org/en-US/

## Installation und Einrichtung der Umgebung

Zuerst installieren [Node.js][3]und dann installieren Sie das Cordova-Paket wie folgt:

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

Als Nächstes erstellen Sie eine Beispielanwendung Cordova und navigieren Sie anschließend in das neu erstellte Verzeichnis:

    $ cordova create test-app
    $ cd test-app
    

Fügen Sie Firefox-OS als unterstützte Plattform zur app mit folgendem:

    $ cordova platform add firefoxos
    

Dadurch entsteht eine Firefox-OS-app in Plattformen/Firefoxos/Www-Verzeichnis, das derzeit gleich aussieht, außer dass es eine Firefox-Manifestdatei (manifest.webapp) in das Www-Verzeichnis hat.

## Entwickeln Ihre app

Zu diesem Zeitpunkt sind Sie bereit zu gehen — ändern Sie den Code in der Test-app/Www, was Sie, Ihre Anwendung wollen zu sein. Sie können die app mit "Cordova Plugin hinzufügen", zum Beispiel [unterstützt Plugins]() hinzufügen:

    cordova plugin add cordova-plugin-device
    cordova plugin add cordova-plugin-vibration
    

Wenn Ihre app-Code geschrieben ist, Bereitstellen von Änderungen an der Firefox-OS-app, die Sie hinzugefügt haben, Ihr Projekt mit

    $ cordova prepare firefoxos
    

Um eine verpackte app zu erstellen kann man das platforms/firefoxos/www-Verzeichnis zip. Sie können auch einfach mit bauen

    $ cordova build firefoxos
    

Die Firefox-OS verpackte app werden in platforms/firefoxos/build/package.zip gebaut

## Testen und Debuggen

Die app kann mit der Firefox-OS [Web IDE][4] getestet werden.

 [4]: https://developer.mozilla.org/en-US/docs/Tools/WebIDE

Wenn Sie die Web-IDE an Ihre Test-Gerät/Simulator angeschlossen haben, wählen Sie die Option "Open verpackt App", dann stellen Sie sicher, Sie zeigen Sie auf die test-app/platforms/firefoxos/www/ -Verzeichnis die App in der Manager-Schnittstelle enthalten.

Hier können Sie die app auf Ihr Test-Gerät/Simulator (mit dem "Play"-Button) installieren. Verwenden die "Pause"-Taste, dann die Anwendung debuggen und bearbeiten Sie ihre Code kann Leben.

Hinweis: Bevor Sie versuchen, Ihre app veröffentlichen sollten Sie es mit dem [App Validator][5] überprüfen.

 [5]: https://marketplace.firefox.com/developers/validator

## Veröffentlichen Sie Ihre app auf dem Firefox-Marktplatz

Sie übermitteln Ihre app auf den Firefox-Markt, oder selbst zu veröffentlichen. Besuchen Sie die [Firefox-Marktplatz-Zone][6] über MDN, nähere Informationen dazu finden; [App-Veröffentlichungsoptionen][7] ist der beste Ort um zu starten.

 [6]: https://developer.mozilla.org/en-US/Marketplace
 [7]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options