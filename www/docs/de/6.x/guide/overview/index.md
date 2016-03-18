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

title: Übersicht
---

# Übersicht

Apache Cordova ist ein Open-Source-mobile-Entwicklung-Framework. Sie können standard-Web-Technologien wie HTML5, CSS3 und JavaScript für Cross-Plattform-Entwicklung, Vermeidung jeder mobilen Plattformen native Entwicklung der Sprache zu verwenden. Anwendungen werden in Verpackungen, die gezielt auf jede Plattform und verlassen sich auf standardkonforme API Anbindungen an jedes Gerät Sensoren, Daten und Netzwerkstatus zugreifen.

Apache Cordova graduierte Oktober 2012 als Top-Level-Projekt innerhalb der Apache Software Foundation (ASF). Durch die ASF wird künftige Cordova offene Leitung des Projekts sichergestellt. Es bleibt immer kostenlos und open Source unter der Apache License, Version 2.0. Besuchen Sie [cordova.apache.org][1] für weitere Informationen.

 [1]: http://cordova.apache.org

Verwenden Sie Apache Cordova, falls Sie sind:

*   mobile Entwickler und wollen eine Anwendung über mehrere Plattformen hinweg zu erweitern, ohne es erneut mit Sprache und Tool jede Plattform implementieren festgelegt.

*   Speichern Portale, Webentwickler und wollen eine Webanwendung bereitstellen, die für den Vertrieb in verschiedenen app gepackt ist.

*   mobile Entwickler interessiert mischen systemeigene Anwendungskomponenten mit einer *WebView* (spezielle Browser-Fenster), die auf Geräteebene APIs, zugreifen kann oder wollen Sie eine Plugin-Schnittstelle zwischen systemeigenen und WebView Komponenten entwickeln.

## Basiskomponenten

Apache-Cordova-Anwendungen basieren auf einer gemeinsamen `config.xml` -Datei, enthält Informationen über die app und gibt Parameter, die beeinflussen, wie es funktioniert, z. B. ob es reagiert auf Orientierung verschiebt. Diese Datei entspricht der W3C-Spezifikation für [Verpackt Web App][2]oder *Widget*.

 [2]: http://www.w3.org/TR/widgets/

Die Anwendung selbst wird als eine Web-Seite implementiert, standardmäßig eine lokale Datei mit dem Namen *index.html*, die verweist was CSS, JavaScript, Bilder, Mediendateien oder andere Ressourcen sind notwendig für die Ausführung. Die app führt als ein *WebView* in der Ausgangsanwendung-Wrapper, die Sie auf app Stores zu verteilen.

Der Cordova-fähigen WebView kann die Anwendung mit der gesamten [Benutzeroberfläche](../next/index.html) bereitstellen. Auf einigen Plattformen kann es auch eine Komponente innerhalb einer größeren, Hybridanwendung sein, die die WebView mit nativen Komponenten mischt. (Siehe Einbettung Webansichten für Details.)

Eine *Plugin* -Schnittstelle steht für Cordova und systemeigenen Komponenten miteinander kommunizieren. Dadurch können mit systemeigenen Code aus JavaScript aufrufen. Im Idealfall sind die JavaScript-APIs für systemeigenen Code konsistent mehrere Geräteplattformen. Ab der Version 3.0 bieten Plugins Bindungen an standard-Device-APIs. Drittanbieter Plugins bieten zusätzliche Bindungen an Funktionen nicht notwendigerweise auf allen Plattformen. Sie können finden diese Drittanbieter Plugins in der [Plugin-Registry][3] und in Ihrer Anwendung verwenden. Sie können auch eigene Plugins entwickeln, wie in der Plugin-Entwicklung-Handbuch beschrieben. Plugins, z. B. möglicherweise erforderlich für die Kommunikation zwischen Cordova und benutzerdefinierte systemeigenen Komponenten.

 [3]: http://plugins.cordova.io

**Hinweis**: ab Version 3.0, wenn Sie erstellen ein Cordova-Projekt nicht über irgendwelche Plugins vorhanden. Dies ist das neue Standardverhalten. Alle Plugins, die Sie wünschen, die auch die Core-Plugins muss explizit hinzugefügt werden.

Cordova bietet keine UI-Widgets oder MV-Frameworks. Cordova bietet nur die Runtime, in der diejenigen ausgeführt werden können. Wenn Sie UI-Widgets und/oder ein MV * Framework verwenden möchten, müssen Sie diejenigen auswählen und sie in Ihrer Anwendung selbst als Material von Drittherstellern.

## Entwicklungspfade

Ab Version 3.0 können Sie zwei einfache Workflows verwenden, um eine mobile app zu erstellen. Während Sie häufig entweder Workflow verwenden können, um die gleiche Aufgabe, bieten sie alle Vorteile:

*   **Cross-Plattform (CLI)-Workflow**: Nutzung dieser Workflow Ihre app auf so viele verschiedene mobile Betriebssysteme wie möglich laufen soll mit wenig müssen für Plattform-spezifische Entwicklung. Dieser Workflow dreht sich um die `cordova` Dienstprogramm, andernfalls bekannt als die Cordova *CLI*, die mit Cordova 3.0 eingeführt wurde. Die CLI ist High-Level-Tool, das Ihnen erlaubt, Projekte für viele Plattformen gleichzeitig zu erstellen viele der Funktionen von Low-Level-Shell-Skripte zu abstrahieren. Die CLI einen gemeinsamen Satz von Web-Vermögenswerte in Unterverzeichnisse für jede mobile Plattform kopiert, macht alle notwendigen Konfigurationsänderungen für jede, läuft Buildskripts, Anwendungsbinärdateien zu generieren. Die CLI bietet auch eine gemeinsame Schnittstelle um Plugins für Ihre Anwendung zu übernehmen. Für mehr Details über die CLI siehe The Command-Line Interface. Es sei denn, Sie den Plattform-zentriert-Workflow benötigen, empfiehlt sich der Cross-Plattform-Workflow.

*   **Plattform-zentrierte Workflow**: Verwenden Sie diesen Workflow, wenn Sie konzentrieren eine app für eine einzelne Plattform und müssen in der Lage, es auf einer niedrigeren Ebene ändern möchten. Du musst diesen Ansatz, beispielsweise verwenden, möchten Sie Ihre app zum Mischen von benutzerdefinierter systemeigener Komponenten mit Web-basierten Cordova Komponenten, wie in Webansichten Einbettung für erläutert. Als Faustregel gilt verwenden Sie diesen Workflow, wenn Sie das Projekt im SDK ändern müssen. Dieser Workflow basiert auf einer Reihe von Low-Level-Shell-Skripte, die zugeschnitten sind, für jede unterstützte Plattform und ein separates Plugman-Dienstprogramm, mit das Sie Plugins anwenden kann. Während Sie diesen Workflow verwenden können, um Cross-Plattform-Anwendungen erstellen, ist es im allgemeinen schwieriger, weil das Fehlen eines übergeordneten Tools separate Build Zyklen und Plugin Änderungen für jede Plattform bedeutet. Dennoch, diesen Workflow können Sie besseren Zugang zu von jeder SDK bereitgestellten Entwicklungsoptionen und ist essentiell für komplexe Hybrid-apps. Sehen Sie die verschiedenen Plattform-Leitfäden für Details auf jeder Plattform verfügbar Shell Versorgungseinrichtungen.

Wenn zunächst ausgehend, kann es am einfachsten, den Cross-Plattform-Workflow verwenden, um eine app erstellen, wie beschrieben in The Command-Line Interface sein. Sie haben dann die Möglichkeit zu einem Plattform-zentriert-Workflow zu wechseln, benötigen Sie größere Kontrolle, die das SDK enthält. Low-Level-Shell Dienstprogramme stehen unter [cordova.apache.org][1] in einer separaten Verteilerliste als CLI zur Verfügung. Für Projekte, die ursprünglich von der CLI generiert, diese Shell Tools stehen auch in das Projekt hat verschiedene `platforms/*/cordova` Verzeichnisse.

**Hinweis**: Sobald Sie von der CLI-basierte Workflow zu einem rund um die Plattform-spezifische SDKs und Shell Tools wechseln, du kannst nicht zurück gehen. Die CLI unterhält einen gemeinsamen Satz von Cross-Plattform Quellcode, die auf jedem es verwendet, um über Plattform-spezifischen Quellcode schreiben zu bauen. Um Änderungen zu den Plattform-spezifischen Vermögenswerten vorgenommenen erhalten, Sie müssen auf der Plattform-zentrierte Shell-Werkzeugen zu wechseln, die Cross-Plattform-Quellcode zu ignorieren, und stützt sich stattdessen auf den Plattform-spezifischen Quellcode.

## Installation von Cordova

Die Installation von Cordova variieren abhängig vom obigen Workflow, die Sie wählen:

*   Plattformübergreifende Workflow: finden Sie die Befehlszeilen-Schnittstelle.

*   Plattform-zentrierte Workflow: finden Sie die Plattform-Handbüchern.

Nach der Installation von Cordova, empfiehlt es sich, dass Sie die Plattform-Führer für die mobilen Plattformen überprüfen, die Sie für entwickeln werden. Es wird auch empfohlen, dass Sie auch die Privatsphäre Guide, Sicherheit und die nächsten Schritte überprüfen. Konfigurieren von Cordova, finden Sie in der Datei config.xml Datei. JavaScript native Funktion auf einem Gerät zugreifen, finden Sie in der Plugin-APIs. Und finden Sie in den anderen enthalten wie nötig.
