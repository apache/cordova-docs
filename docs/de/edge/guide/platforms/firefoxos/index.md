* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

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

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

Außerdem müssen Sie eine benutzerdefinierte manifest.webapp-Datei in Ihrem Test-app/Www-Verzeichnis hinzufügen, die mindestens Folgendes enthalten sollte:

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

Lesen Sie für weitere Informationen zu Firefox App Manifesten auf MDN [App zu manifestieren][4] .

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

Wenn Ihre app-Code geschrieben ist, Bereitstellen von Änderungen an der Firefox-OS-app, die Sie hinzugefügt haben, Ihr Projekt mit

    $ cordova prepare
    

Beachten Sie, dass eine Build-Schritt (d.h. Cordova Bau) nicht erforderlich ist bei der Bereitstellung für die Firefox-OS-Plattform, wie Firefox OS apps HTML-basierte, und daher nicht kompiliert werden.

## Testen und Debuggen

Die app kann mit der Firefox-OS [App Manager][5] getestet werden.

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

Wenn Sie den App-Manager Ihre Test-Gerät/Simulator angeschlossen haben, wählen Sie die Option "Verpackt App hinzufügen", dann stellen Sie sicher, Sie zeigen Sie auf die Test-app/Plattformen/Firefoxos/Www/-Verzeichnis die App in der Manager-Schnittstelle enthalten.

Hier können Sie die app auf Ihr Test-Gerät/Simulator (mit dem Button "Aktualisieren") installieren. Verwenden das "Debug" Button dann die Anwendung debuggen und bearbeiten Sie ihre Code kann Leben.

Hinweis: Bevor Sie versuchen, Ihre app veröffentlichen sollten Sie es mit dem [App Validator][6] überprüfen.

 [6]: https://marketplace.firefox.com/developers/validator

## Veröffentlichen Sie Ihre app auf dem Firefox-Marktplatz

Sie übermitteln Ihre app auf den Firefox-Markt, oder selbst zu veröffentlichen. Besuchen Sie die [Firefox-Marktplatz-Zone][7] über MDN, nähere Informationen dazu finden; [App-Veröffentlichungsoptionen][8] ist der beste Ort um zu starten.

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options