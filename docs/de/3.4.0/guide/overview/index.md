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

# Übersicht

Cordova ist ein Open-Source-mobile-Entwicklung-Framework. Sie können standard-Web-Technologien wie HTML5, CSS3 und JavaScript für Cross-Plattform-Entwicklung, Vermeidung jeder mobilen Plattformen native Entwicklung der Sprache zu verwenden. Anwendungen werden in Verpackungen, die gezielt auf jede Plattform und verlassen sich auf standardkonforme API Anbindungen an jedes Gerät Sensoren, Daten und Netzwerkstatus zugreifen.

Verwenden Sie Cordova, falls Sie sind:

*   mobile Entwickler und wollen eine Anwendung über mehrere Plattformen hinweg zu erweitern, ohne es erneut mit Sprache und Tool jede Plattform implementieren festgelegt.

*   Speichern Portale, Webentwickler und wollen eine Webanwendung bereitstellen, die für den Vertrieb in verschiedenen app gepackt ist.

*   mobile Entwickler interessiert mischen systemeigene Anwendungskomponenten mit einer *WebView* (Browser-Fenster), die auf Geräteebene APIs, zugreifen kann oder wollen Sie eine Plugin-Schnittstelle zwischen systemeigenen und WebView Komponenten entwickeln.

## Basiskomponenten

Cordova-Anwendungen basieren auf einer gemeinsamen `config.xml` -Datei, enthält Informationen über die app und gibt Parameter, die beeinflussen, wie es funktioniert, z. B. ob es reagiert auf Orientierung verschiebt. Diese Datei entspricht der W3C-Spezifikation für [Verpackt Web App][1]oder *Widget*.

 [1]: http://www.w3.org/TR/widgets/

Die Anwendung selbst ist als eine Web-Seite implementiert, mit dem Namen *index.html* standardmäßig die verweist, was CSS, JavaScript, Bilder, Mediendateien, oder andere Ressourcen sind notwendig für die Ausführung. Die app führt als ein *WebView* in der Ausgangsanwendung-Wrapper, die Sie auf app Stores zu verteilen. Für die Web-app für die Interaktion mit verschiedenen Gerätefunktionen Weg native apps zu tun, muss es auch verweisen eine `cordova.js` -Datei, die API Bindungen bietet.

Der Cordova-fähigen WebView kann die Anwendung mit der gesamten Benutzeroberfläche bereitstellen. Es kann auch eine Komponente innerhalb einer größeren, Hybridanwendung sein, die die WebView mit nativen Komponenten mischt. Cordova bietet eine *Plugin* -Schnittstelle für diese Komponenten miteinander kommunizieren.

## Entwicklungspfade

Ab Version 3.0 können Sie zwei einfache Workflows verwenden, um eine mobile Anwendung zu erstellen. Während Sie das gleiche mit beiden Workflows ausführen können, sind bestimmte Aufgaben besser geeignet zur Verwendung von einem Workflow über die andere. Aus diesem Grund sollten Sie beide Workflows kennen, damit Sie das beste Werkzeug für die beste Situation verwenden können.

Die zwei wichtigsten Workflows, die unterstützt werden sind der *Web Projekt Dev* -Workflow und der *Einheitlichen Plattform Dev* -Workflow.

### Web-Projekt-Dev

Sie können den ersten Workflow als *Web Projekt Dev* -Workflow vorstellen. Sie sollten diesen Workflow verwenden, wenn eine Cordova-Anwendung zu erstellen, die auf so viele mobile Betriebssysteme wie möglich mit so wenig plattformspezifische Entwicklungsarbeit wie möglich ausgeführt werden soll. Dieser Workflow erbte bestehen mit Cordova 3.0 und die Schaffung von Cordova- *Befehlszeilenschnittstelle* (CLI). Die CLI abstrahiert entfernt viele der Funktionen von Low-Level-Shell-Skripte, die Pflege der Details, die mit dem Bau Ihrer Anwendung, z. B. Kopieren-Ihr Web-Vermögen in die richtigen Ordner für jede mobile Plattform, Plattform-spezifische Konfigurationsänderungen oder Ausführen von bestimmten Buildskripts um Anwendungsbinärdateien zu generieren. Erfahren Sie mehr über den *Web-Projekt-Dev* -Workflow in der Command-Line Interface. Bitte beachten Sie, dass oft, wenn Menschen von der "CLI" sprechen, sie über dieses *Web-Projekt-Dev* -Workflow sprechen.

### Native Plattform-Dev

Der zweite Workflow kann als *Native Plattform Dev* Workflow betrachtet werden. Sie sollten es verwenden, wenn Sie wollen sich auf die Erstellung einer Anwendung für eine einzige Plattform und ändern die Low-Level-Plattform-Details interessiert sind. Während Sie diesen Workflow noch verwenden können, um Cross-Plattform-Anwendungen erstellen, wird der Mangel an Tools, um die verschiedenen Buildschritte abstrahieren erschweren. Beispielsweise müssen Sie Plugman verwenden, um das gleiche Plugin einmal für jede Plattform zu installieren, die Sie unterstützen möchten. Der Vorteil bei der Verwendung dieser *Einheitlichen Plattform Dev* -Workflow ist es, was gibt Ihnen Zugang zu den Low-Level-Shell-Skripte erstellen und Testen der Anwendung, also wenn Sie auf die systemeigene Seite der Dinge Hacking sind, diesen Workflow ist der effizienteste Weg, um Ihre Änderungen zu testen. Dieser Workflow ist auch geeignet, wenn Sie die CordovaWebView als eine kleine Rolle in einer größeren native Anwendung verwenden möchten (siehe Einbettung Webansichten für Guide.) Sie können diesen Workflow in den verschiedenen Shell-Tool-Führern, z.B. Android Shell Tool Guide und iOS Shell Tool Guide nachlesen.

Beim ersten ausgehend, könnte es am einfachsten, den *Web Projekt Dev* -Workflow verwenden zum Erstellen einer Anwendung sein. (Um die CLI zu installieren, siehe The Command-Line Interface). Abhängig von den Plattformen richten möchten, können Sie auf der CLI für schrittweise größere Anteile des Entwicklungszyklus verlassen:

*   Im einfachsten Szenario können die CLI Sie einfach erstellen ein neues Projekt, das gefüllt ist mit Standard-Konfiguration zu ändern.

*   Für viele mobile Plattformen können Sie auch die CLI einrichten weitere Projekt-Dateien erforderlich, um innerhalb jedes SDK kompilieren. Damit dies funktioniert müssen Sie jede gezielte Plattform-SDK installieren. (Siehe den Plattform-Führern Anweisungen.) Gemäß den Plattform-Support-Tabelle, müssen Sie möglicherweise die CLI auf verschiedenen Betriebssystemen abhängig von der Zielplattform ausgeführt.

*   Zur Unterstützung der Plattformen, kann die CLI Dienstprogramme kompilieren und führen sie in einem SDK-basiertes Gerät-Emulator. Für umfassende Tests, können Sie auch Anwendungsdateien zu generieren und installieren Sie sie direkt auf einem Gerät.

Zu jedem Zeitpunkt im Entwicklungszyklus wechseln Sie mit mehr von der *Einheitlichen Plattform Dev* -Workflow. Die plattformspezifischen SDK Tools können eine umfangreichere Optionen bieten. (Siehe die Plattform-Führer für Details über jede Plattform-SDK-Tool festgelegt.)

Eine SDK-Umgebung ist besser geeignet, wenn Sie möchten, eine Hybrid-app zu implementieren, die Web-basierte und native Anwendungskomponenten mischt. Sie können das Befehlszeile-Dienstprogramm verwenden, um zunächst die app generieren oder iterativ danach, aktualisierten Code zu SDK-Tools zu ernähren. Sie können die app-Konfigurationsdatei auch selbst erstellen. (Siehe die Datei config.xml Datei für Details.)