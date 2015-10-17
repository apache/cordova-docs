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

Ein Cordova Plugin Brücken ein wenig Funktionalität zwischen den WebView eine Cordova-Anwendung und der einheitlichen Plattform die Cordova-Anwendung läuft. Plugins bestehen aus einer einzigen JavaScript-Schnittstelle verwendet, die für alle Plattformen und native Implementierungen nach Plattform-spezifischen Plugin-Schnittstellen, denen das JavaScript aufruft. Alle Kern-Cordova-APIs werden mithilfe dieser Architektur implementiert.

Dieser Leitfaden Schritte der Prozess des Schreibens ein einfaches Echo-Plugin, das übergibt eine Zeichenfolge von JavaScript und sendet sie in die native-Umgebung für die unterstützten Plattformen. Der systemeigene Code gibt dann dieselbe Zeichenfolge an die Rückrufe innerhalb des Plugins JavaScript zurück.

Dieses Handbuch bietet ausreichend [Übersicht](../../overview/index.html), auf der Sie aufbauen können, um komplexere Plugins zu schreiben.

## JavaScript

Der Einstiegspunkt für alle Plugin ist JavaScript. Die Grund-Entwickler-verwenden Sie Cordova ist, damit sie nutzen können und schreiben JavaScript, keine Objective-C, nicht Java, nicht c#. Die JavaScript-Schnittstelle für Ihr Plugin ist der nach vorn gerichtete und wohl wichtigsten Teil Ihrer Cordova-Plugin.

Sie können Ihr Plugin-JavaScript strukturieren, wie Sie wollen. Die eine Sache, die Sie *müssen* verwenden, um die Kommunikation zwischen der Cordova JavaScript und native-Umgebungen ist die `cordova.exec` Funktion. Hier ist ein Beispiel:

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

Die Parameter sind nachstehend aufgeführt:

*   `function(winParam) {}`: Erfolg Funktion Rückruf. Vorausgesetzt, Ihre `exec` Aufruf erfolgreich abgeschlossen ist, diese Funktion wird aufgerufen (optional mit allen Parametern, die Sie wieder an es übergeben).

*   `function(error) {}`: Fehler Funktion Rückruf. Wenn der Vorgang nicht erfolgreich abgeschlossen wird, wird diese Funktion (optional mit einem Fehlerparameter) aufgerufen.

*   `"service"`: Der Dienstname auf die systemeigene Seite aufrufen. Dies ist eine systemeigene Klasse zugeordnet darüber, welche Informationen in den einheimischen Führern, die unten aufgeführten verfügbar ist.

*   `"action"`: Den Namen der Aktion zum aufrufen. Dies ist von der systemeigenen Klasse Empfang abgeholt die `exec` Aufruf und, abhängig von der Plattform, im Wesentlichen eine Klassenmethode ordnet. Die einheimischen Guides, die unten aufgeführten Angaben.

*   `[/* arguments */]`: In der nativen Umgebung zu übergebenden Argumente.

### Echo-Plugin-JavaScript-Beispiel

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Lass uns tauchen Sie ein in das. Das Plugin fügt sich `window` , speziell auf die `echo` Funktion. Plugin-Nutzer würde es dann wie folgt verwenden:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Zunächst werfen wir einen Blick auf die letzten drei Argumente für die `exec` Funktion. Rufen wir die `Echo` "service", um die `echo` "Aktion" und übergeben ein Array von Argumenten, die Echo-Zeichenfolge enthält, das ist der erste Parameter in der `window.echo` Funktion.

Der Erfolg-Rückruf übergebenen `exec` ist lediglich ein Verweis auf den Rückruf, die Funktion `window.echo` führt. Wir machen ein bisschen mehr für den Fehler-Rückruf: Wenn die systemeigene Seite aus der Fehler-Rückruf ausgelöst wird, wir einfach den Erfolg-Rückruf aufzurufen und übergeben sie eine Zeichenfolge "Standard".

## Plugin-Spezifikation

Cordova hat eine [Plugin-Spezifikation](../../../plugin_ref/spec.html) verfügbar, aktivieren Sie die automatische Installation des Plugins für Android, iOS, BlackBerry 10 und Windows Phone-Plattformen. Indem Ihr Plugin in einer bestimmten Weise zu strukturieren und ein `plugin.xml` manifest-Datei, Sie können Benutzern ermöglichen, Ihr Plugin über die Befehlszeile Werkzeuge zu installieren.

*   [Plugin-Spezifikation](../../../plugin_ref/spec.html)

## Native

Wenn Sie JavaScript für Ihr Plugin definieren, müssen Sie es mit mindestens einem nativen Implementierung zu ergänzen. Details für jede Plattform dazu sind unten aufgeführt. Diese Leitfäden weiterhin auf dem einfachen Echo-Plugin-Beispiel wie oben beschrieben zu bauen.

*   [Android Plugins](../../platforms/android/plugin.html)
*   [BlackBerry-Plugins](../../platforms/blackberry/plugin.html)
*   [BlackBerry 10 Plugins](../../platforms/blackberry10/plugin.html)
*   [iOS Plugins](../../platforms/ios/plugin.html)
*   [Windows Phone Plugins](../../platforms/wp8/plugin.html)

Tizen-Plattform unterstützt derzeit keine Plugins.

## Publishing plugins

Sobald Sie Ihr Plugin entwickelt, empfiehlt es sich, zu veröffentlichen und mit der Community teilen. Sie können Ihr Plugin auf der Cordova-Registrierung (basierend auf [Npmjs][1]) veröffentlichen oder zu jeder anderen Npmjs basierte Registrierung. Benutzer werden automatisch mit Plugman oder Cordova-Cli installieren können.

 [1]: https://github.com/isaacs/npmjs.org

Um ein Plugin zu veröffentlichen müssen Sie mit dem Plugman-Tool und gehen Sie durch die folgenden Schritte aus:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

Das ist es!

Andere registrierungsbasierte Befehle stehen zur Verfügung und `plugman --help` wird Ihnen eine Liste welche Befehle verfügbar sind und wie man sie benutzt.