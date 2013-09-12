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

# Konfigurationsreferenz

Viele Aspekte des Verhaltens einer Anwendung können mit einer plattformunabhängig Konfigurationsdatei, `config.xml`, gesteuert werden, welche auf der Grundlage von [Packaged Web Apps (Widgets)][1] der W3C spezifiziert ist.

 [1]: http://www.w3.org/TR/widgets/

Für Projekte, die mit dem Cordova-CLI (beschrieben in Die Kommandozeilen-Schnittstelle) erstellt wurden, finden Sie diese Datei im `www` Verzeichnis der obersten Ebene. Mit dem CLI erstellte Projekte, regeneriert Versionen dieser Datei in verschiedenen Unterverzeichnissen innerhalb `platforms`. Für nicht-CLI Projekte dient jede plattformspezifischen Datei als Quelle.

Während der Speicherort der `config.xml` Datei je nach Plattform ändern kann, ändert sich deren Inhalt im Allgemeinen nicht. Einige plattformspezifischen Funktionen sind auch in der gleichen Konfigurationsdatei angegeben. Einzelheiten sind unten aufgeführt:

*   iOS Konfiguration
*   Android Konfiguration
*   BlackBerry Konfiguration

## config.xml Elemente

Das [Apache-Cordova][2] Projekt strebt danach, die abstrakten Einzelheiten der nativen Platform mit webinspirierten und webbasierte Abstraktionen zu ersetzten, die stark von Standards gesteuert und in der Web-Gemeinschaft angenommen sind. Bitte nehmen Sie sich ein paar Minuten Zeit, um sich mit der [config.xml Spezifikation][1] vertraut zu machen, zu verstehen auf welcher Art das Apache-Cordova-Projekt die Anwendungsmetadaten versucht zu abstrahieren und die einfachen Einstiegspunkte anzusehen.

 [2]: http://cordova.io

Ein Beispiel:

        <widget>
            <preference name="MySetting" value="true" />
            <feature name="MyPlugin" value="MyPluginClass" />
            <access origin="*" />
            <content src="index.html" />
        </widget>
    

Eine Liste der unterstützten Elemente der gängigen Plattformen, die in Apache Cordova unterstützt werden.

### `<feature>`

Diese Elemente verweisen auf systemeigene APIs, auf welche die Anwendung zugreift. Während der Laufzeit verweist das Apache Cordova Framework `<feature>` Elemente auf nativen Code, um Ihrer Cordova Anwendungen den Zugriff auf Geräte APIs zu ermöglichen, was für typisch webbasierte Anwendungen sonst nicht möglich ist.

### `<access>`

Diese Elemente definieren die Funktionsweise Ihrer Whitelist. Bitte lesen Sie den Domain Whitelist Guide für weitere Informationen.

### `<content>`

Dieses Element definiert die Startseite Ihrer Anwendung relativ zum Standard Web Root Verzeichnis des Projekts. Dieses Element ist optional, der Standardwert ist `index.html`.