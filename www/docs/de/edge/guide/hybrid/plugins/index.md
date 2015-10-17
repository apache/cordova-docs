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

title: Plugin-Entwicklung-Guide
---

# Plugin-Entwicklung-Guide

Ein *Plugin* ist ein Paket von eingefügten Code, der die Cordova Webview ermöglicht es, innerhalb, die derer die app macht mit der einheitlichen Plattform für die Kommunikation auf dem es ausgeführt wird. Plugins ermöglichen den Zugriff auf Geräte und Plattform-Funktionalität, die normalerweise nicht für Web-basierte Anwendungen verfügbar ist. Die wichtigsten Cordova API-Features sind als Plugins implementiert, und viele andere stehen, dass aktivieren wie Barcode-Scannern, NFC-Kommunikation Funktionen, oder zu Kalender anpassen Schnittstellen. Es ist eine [Registrierung][1] der verfügbaren Plugins.

 [1]: http://plugins.cordova.io

Plugins umfassen eine einzelne JavaScript-Schnittstelle zusammen mit entsprechenden native Code-Bibliotheken für jede unterstützte Plattform. Dies blendet im Wesentlichen die verschiedenen Implementierungen von systemeigenem Code hinter eine gemeinsame JavaScript-Schnittstelle.

Dieser Abschnitt schrittweise einen einfachen *Echo* -Plugin, die übergibt eine Zeichenfolge von JavaScript zum einheitlichen Plattform und zurück, die Sie als Modell verwenden können, um viel komplexere Features zu erstellen. Dieser Abschnitt beschreibt die grundlegenden Plugin-Struktur und die nach außen gerichtete JavaScript-Schnittstelle. Jede entsprechende [Benutzeroberfläche](../../next/index.html) finden Sie in der Liste am Ende dieses Abschnitts.

Zusätzlich zu diesen Anweisungen, wenn bereiten auf ein Plugin zu schreiben, ist es am besten über die [vorhandenen Plugins][2] , Anleitungen zu schauen.

 [2]: http://cordova.apache.org/#contribute

## Eine Plugin erstellen

Anwendungsentwickler verwenden der CLI `plugin add` Befehl (beschrieben in The Command-Line Interface), eine Plugin zu einem Projekt anzuwenden. Das Argument für diesen Befehl ist die URL für ein *Git* -Repository mit dem Plugin-Code. In diesem Beispiel implementiert Cordova's Device API:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

Das Plugin Repository muss eine Top-Level-Funktion `plugin.xml` manifest-Datei. Es gibt viele Möglichkeiten um diese Datei zu konfigurieren, die Informationen für die in der [Plugin-Spezifikation](../../../plugin_ref/spec.html) verfügbar sind. Diese gekürzte Version von der `Device` Plugin bietet ein einfaches Beispiel, als Vorbild zu verwenden:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="cordova-plugin-device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

Der obersten Ebene `plugin` Tag `id` Attribut verwendet das gleiche umgekehrt-Domäne-Format in das Plugin-Paket zu identifizieren, wie die apps, die sie hinzugefügt haben. Die `js-module` Tag gibt den Pfad zu "common Interface" JavaScript. Die `platform` Tag gibt einen entsprechenden Satz von systemeigenem Code für die `ios` Plattform in diesem Fall. Die `config-file` Tag kapselt ein `feature` Tag, der in der Plattform-spezifischen eingespritzt ist `config.xml` Datei, die Plattform der zusätzliche Codebibliothek aufmerksam zu machen. Die `header-file` und `source-file` Markierungen geben Sie den Pfad zu der Bibliothek-Komponentendateien.

## Eine Plugin überprüfen

Können Sie das `plugman` -Dienstprogramm zum Überprüfen, ob das Plugin richtig für jede Plattform installiert. Installieren Sie `plugman` mit den folgenden [Knoten][3] -Befehl:

 [3]: http://nodejs.org/

        $ npm install -g plugman
    

Sie benötigen eine gültige app Quellcode-Verzeichnis, z. B. der obersten Ebene `www` Verzeichnis in ein CLI-generierte Standardprojekt enthalten, wie in der Command-Line Interface beschrieben. Sicherstellen, dass der app `index.html` Homepage verweisen den Namen der das Plugin-JavaScript-Schnittstelle, als handele es sich im gleichen Quellverzeichnis,:

        <script src="myplugin.js"></script>
    

Führen Sie dann einen Befehl wie den folgenden zu testen, ob iOS Abhängigkeiten richtig geladen:

         $ plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin
    

Einzelheiten zum `plugman` Optionen, siehe unter Verwendung Plugman zu Plugins verwalten. Finden Sie Informationen zu tatsächlich *debug* Plugins jede Plattform systemeigene Schnittstelle an der Unterseite dieser Seite verzeichnet.

## Die JavaScript-Schnittstelle

JavaScript stellt die vorderseitige-Schnittstelle, so dass es vielleicht den wichtigsten Teil des Plugins. Sie können Ihr Plugin-JavaScript strukturieren, aber Sie mögen, aber Sie aufrufen müssen `cordova.exec` für die Kommunikation mit der einheitlichen Plattform, mit der folgenden Syntax:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

So funktioniert jedes Parameters:

*   `function(winParam) {}`: Ein Erfolg-Callback-Funktion. Vorausgesetzt, Ihre `exec` Aufruf erfolgreich abgeschlossen ist, diese Funktion führt zusammen mit allen Parametern, die Sie an es übergeben.

*   `function(error) {}`: Eine Fehler-Callback-Funktion. Wenn der Vorgang nicht erfolgreich abgeschlossen wird, führt diese Funktion mit einem optionalen Parameter.

*   `"service"`: Der Dienstname für die systemeigene Seite aufrufen. Dies entspricht einer systemeigenen Klasse, für die weitere Informationen in den einheimischen Führern, die unten aufgeführten verfügbar ist.

*   `"action"`: Den Namen der Aktion auf die systemeigene Seite aufrufen. Dies entspricht im Allgemeinen der systemeigenen Klasse-Methode. Finden Sie die nativen Handbüchern aufgeführt.

*   `[/* arguments */]`: Ein Array von Argumenten in der nativen Umgebung übergeben.

## Beispiel JavaScript

Dieses Beispiel zeigt eine Möglichkeit, das Plugin-JavaScript-Schnittstelle implementieren:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

In diesem Beispiel das Plugin heftet sich an die `window` -Objekts als die `echo` -Funktion, die Plugin-Benutzer wie folgt nennen würde:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Sehen Sie sich die letzten drei Argumente für die `cordova.exec` Funktion. Die ersten Aufforderungen der `Echo` *Dienst*, einen Klassennamen. Die zweiten Anfragen der `echo` *Aktion*, eine Methode in der betreffenden Klasse. Der dritte ist ein Array von Argumenten, welche die Echo-Zeichenfolge, die die `window.echo` Funktion ist der erste Parameter.

Der Erfolg-Rückruf übergebenen `exec` ist lediglich ein Verweis auf die Callback-Funktion `window.echo` nimmt. Wenn die native Plattform den Fehler-Rückruf ausgelöst wird, ruft den Erfolg-Rückruf es einfach auf und übergibt eine Standardzeichenfolge.

## Native Schnittstellen

Wenn Sie JavaScript für Ihr Plugin definieren, müssen Sie es mit mindestens einem nativen Implementierung zu ergänzen. Details für jede Plattform sind unten aufgeführt, und jede baut auf dem einfachen Echo-Plugin-Beispiel oben:

*   [Amazon Fire OS Plugins](../../platforms/amazonfireos/plugin.html)
*   [Android Plugins](../../platforms/android/plugin.html)
*   [iOS Plugins](../../platforms/ios/plugin.html)
*   [BlackBerry 10 Plugins](../../platforms/blackberry10/plugin.html)
*   [Windows Phone 8 Plugins](../../platforms/wp8/plugin.html)
*   [Windows Plugins](../../platforms/win8/plugin.html)

Tizen-Plattform unterstützt keine Plugins.

## Publishing Plugins

Wenn Sie Ihr Plugin zu entwickeln, empfiehlt es sich, zu veröffentlichen und mit der Community teilen. Können Sie Ihr Plugin auf jeder `npmjs`veröffentlichen-basierten Registrierung, aber die empfohlenen ist der [NPM-Registrierung][4]. Bitte lesen Sie unsere [Veröffentlichung Plugins Npm-Guide][5].

 [4]: https://www.npmjs.com
 [5]: http://plugins.cordova.io/npm/developers.html

**Hinweis**: [Cordova Plugin Registrierung][6] bewegt sich auf einem schreibgeschützten Zustand. `publish`/ `unpublish` Befehle entzogen wurde `Plugman`, d. h. Sie entsprechende `Npm` -Befehle verwenden müssen.

 [6]: https://plugins.cordova.io

Andere Entwickler können Ihr automatisch mit `Plugman` oder Cordova CLI Plugin installieren. (Für Details zu jedem Entwicklungspfad, siehe Plugman Plugins verwalten und die Befehlszeilenschnittstelle verwenden.)

Um ein Plugin zu NPM-Registrierung zu veröffentlichen müssen Sie folgenden Schritte:

*   `package.json` -Datei für Ihr Plugin zu erstellen:
    
        $ plugman createpackagejson /path/to/your/plugin
        

*   Veröffentlichen Sie sie:
    
        $ npm adduser # that is if you don't have an account yet
        $ npm publish /path/to/your/plugin
        

Das ist es!

`plugman --help` ausgeführt werden anderen verfügbaren registrierungsbasierte-Befehle aufgelistet.