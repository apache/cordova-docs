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

title: Plugins verwalten mithilfe Plugman
---

# Plugins verwalten mithilfe Plugman

Ab Version 3.0 ff. Cordova implementiert alle Gerät APIs als Plugins und lässt sie standardmäßig deaktiviert. Es unterstützt auch zwei Möglichkeiten zum Hinzufügen und Entfernen von Plugins, je nach verwendeter Workflow diskutiert in der [Übersicht](../guide/overview/index.html):

*   Wenn Sie einen Cross-Plattform-Workflow verwenden, verwenden Sie die `cordova` CLI-Hilfsprogramm, Plugins, hinzufügen, wie in der Command-Line Interface beschrieben. Die CLI ändert Plugins für alle angegebenen Plattformen gleichzeitig.

*   Wenn Sie einen Workflow Plattform-zentrierte verwenden, verwenden Sie eine Low-Level- [Plugman][1] -Befehlszeilen-Schnittstelle, separat für jede Zielplattform.

 [1]: https://github.com/apache/cordova-plugman/

Dieser Abschnitt erläutert das Plugman-Dienstprogramm. Weitere Informationen zu konsumieren Plugman als Knoten Modul oder den Quellcode ändern finden Sie in [der README-Datei im repository][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Installation von Plugman

Um Plugman zu installieren, müssen Sie die [Knoten][3] , die auf Ihrem Computer installiert haben. Dann die folgenden ausführen Befehl an einer beliebigen Stelle in Ihrer Umgebung Plugman weltweit so installieren, dass es von einem beliebigen Verzeichnis gibt es:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Haben außerdem muss `git` auf Ihre `PATH` um Plugins direkt aus entfernten Git URLs zu installieren zu können.

**Tipp**: Wenn Sie, dass feststellen nach der Installation von Plugman mit `npm` Sie sind noch nicht alle `plugman` Befehle, stellen Sie sicher, dass Sie hinzugefügt haben die `/npm/` Verzeichnis in Ihrem`PATH`.

**Hinweis**: Sie können diesen Schritt überspringen, wenn Sie nicht, um Ihre globalen verschmutzen möchten `npm` Namespace durch die Installation von Plugman weltweit. Wenn dies ist der Fall, wenn Sie ein Cordova-Projekt mit der Shell-Werkzeugen erstellen, gibt es ein `node_modules` Verzeichnis innerhalb des Projekts die Plugman enthält. Da Sie nicht global installiert haben, müssen Sie aufrufen `node` für jeden Plugman-Befehl, zum Beispiel `node
./node_modules/plugman/main.js -version` . Der Rest dieser Anleitung wird angenommen, dass Sie Plugman weltweit installiert haben was bedeutet, dass Sie es mit nur aufrufen können`plugman`.

## Erstellen Sie ein Projekt von Cordova

Bevor Sie Plugman verwenden können, müssen Sie ein Cordova-Projekt erstellen. Sie können dies tun, mit der Befehlszeilen-Schnittstelle oder mit der unteren Ebene Shell-Skripte. Anweisungen zur Verwendung der Shell-Skripte erstellen Sie Ihr Projekt befinden sich in den verschiedenen "Command-Line Tools"-Führern, die auf der Plattform Guides-Seite aufgelistet.

## Eine Plugin hinzufügen

Sobald Sie Plugman installiert haben und ein Cordova-Projekt erstellt haben, können Sie beginnen, die Plattform mit Plugins hinzufügen:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Mit minimalen Parametern, wird dieser Befehl eine Plugin in einem Cordova-Projekt installiert. Sie müssen eine Plattform und Cordova Projektspeicherort für diese Plattform angeben. Sie müssen auch eine Plugin, mit den verschiedenen angeben `--plugin` Parameter bildet sein:

*   `name`: Der Verzeichnisname, wo die Plugin-Inhalte vorhanden sind. Dies muss ein vorhandenes Verzeichnis unter den `--plugins_dir` Pfad (für mehr Info siehe unten) oder ein Plugin in der Cordova-Registrierung.
*   `url`: Eine URL mit https:// oder Git: / / zeigen zu einem gültigen Git-Repository, das geklont werden und enthält eine `plugin.xml` Datei. Kopiert den Inhalt dieses Archivs würden in der`--plugins_dir`.
*   `path`: Ein Pfad zu einem Verzeichnis, die eine gültige Plugin umfasst eine `plugin.xml` Datei. Dieser Pfad Inhalt kopiert werden, in der`--plugins_dir`.

Weitere Parameter:

*   `--plugins_dir`standardmaessig `<project>/cordova/plugins` , aber kann jedes Verzeichnis ein Unterverzeichnis für jeden abgerufenen Plugin.
*   `--www`der Standardwert ist des Projekts `www` Ordnerspeicherort, kann jedoch jedes Verzeichnis, das als Cordova Projekt Anwendung Web Vermögenswerte verwendet werden.
*   `--variable`ermöglicht es, bestimmte Variablen zum Zeitpunkt der Installation notwendig für bestimmte Plugins, die die API-Schlüssel oder andere benutzerdefinierte, benutzerdefinierte Parameter angeben. Finden Sie die [Plugin-Spezifikation][4] für weitere Informationen.

 [4]: plugin_ref_spec.md.html#Plugin%20Specification

## Eine Plugin zu entfernen

Um ein Plugin zu deinstallieren, übergeben Sie einfach die `--uninstall` -flag und bieten die Plugin-ID.

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Hilfebefehle

Plugman verfügt über einen global Help-Befehl, der Ihnen helfen können, wenn Sie stecken bleiben oder Probleme auftreten. Es erscheint eine Liste aller verfügbaren Plugman-Befehle und deren Syntax:

    plugman -help
    plugman  # same as above
    

**Hinweis**: `plugman -help` können einige zusätzliche Registrierung bezogenen Befehle zeigen. Diese Befehle sind für Plugin-Entwickler und können nicht auf Drittanbieter-Plugin-Register implementiert werden.

Sie können auch Anhängen der `--debug|-d` Flagge auf jeden Plugman-Befehl diesen Befehl im ausführlichen Modus ausgeführt, die internen Debuggen-Meldungen angezeigt werden, da sie ausgegeben werden und Ihnen helfen können, ausfindig zu machen Probleme wie fehlende Dateien.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin cordova-plugin-battery-status
    

Schließlich können Sie die `--version|-v` Flagge zu sehen, welche Plugman-Version Sie verwenden.

    plugman -v
    

## Registrierungsaktionen

Es gibt eine Reihe von Plugman-Befehlen, die für die Interaktion mit der [Plugin-Registrierung][5]verwendet werden kann. Bitte beachten Sie, dass diese Registrierung-Befehle beziehen sich auf die *plugins.cordova.io* -Plugin-Registry und nicht von Drittanbieter-Plugin-Register implementiert werden können.

 [5]: http://plugins.cordova.io

### Auf der Suche nach einem Plugin

Plugman können Sie suchen der [Plugin Registrierung][5] für Plugin-Id, die die angegebenen Leerzeichen getrennte Liste von Schlüsselwörtern entsprechen.

    plugman search <plugin keywords>
    

### Ändern der Plugin-Registrierung

Sie können abrufen oder Festlegen der URL der aktuellen Plugin-registry, die Plugman benutzt. In der Regel lassen Sie dies auf http://registry.cordova.io festgelegt wird, sofern Sie eine Drittanbieter-Plugin-Registry verwenden möchten.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### Plugin informieren

Hier erhalten Sie Informationen über alle spezifischen Plugin im Plugin Repository mit gespeichert:

    plugman info <id>
    

Dies wird der Plugin Registrierung und Abruf Informationen wie das Plugin Versionsnummer kontaktieren.

## Core-Plugins installieren

Die folgenden Beispiele veranschaulichen, Plugins hinzufügen, nach Bedarf, so dass Sie in Ihrem Projekt verwenden APIs Cordova noch funktionieren nach dem upgrade auf Version 3.0. Für jeden Befehl müssen Sie wählen die Zielplattform und die Plattform-Projektverzeichnis zu verweisen.

*   cordova-plugin-battery-status
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-battery-status`

*   cordova-plugin-camera
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-camera`

*   cordova-plugin-console
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-console`

*   cordova-plugin-contacts
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-contacts`

*   cordova-plugin-device
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device`

*   cordova-plugin-device-motion (accelerometer)
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device-motion`

*   cordova-plugin-device-orientation (compass)
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device-orientation`

*   cordova-plugin-dialogs
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-dialogs`

*   cordova-plugin-file
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-file`

*   cordova-plugin-file-transfer
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-file-transfer`

*   cordova-plugin-geolocation
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-geolocation`

*   cordova-plugin-globalization
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-globalization`

*   cordova-plugin-inappbrowser
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-inappbrowser`

*   cordova-plugin-media
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-media`

*   cordova-plugin-media-capture
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-media-capture`

*   cordova-plugin-network-information
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-network-information`

*   cordova-plugin-splashscreen
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-splashscreen`

*   cordova-plugin-vibration
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-vibration`