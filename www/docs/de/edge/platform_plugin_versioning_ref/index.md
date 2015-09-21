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

title: Plattformen und Plugins Versionsmanagement
---

# Plattformen und Plugins Versionsmanagement

Ab Version 4.3.0 bietet Cordova die Möglichkeit zum Speichern und wiederherstellen, Plattformen und Plugins.

Dieses Feature ermöglicht Entwicklern, speichern und ihre app in einen bekannten Zustand wiederherstellen, ohne in allen von der Plattform und Plugin Quellcode überprüfen.

Der Befehl "Speichern" speichert Informationen über die app-Plattform und Plugin-Versionen in "config.xml". Der 'Wiederherstellung' Schritt geschieht automatisch, wenn ein **'cordova prepare'** ausgegeben wird, machen Gebrauch von Informationen, die zuvor in der Datei config.xml gespeichert.

Ein Szenario, wo speichern/wiederherstellen-Funktionen praktisch, ist in großen Teams, die auf eine Anwendung mit jedes Teammitglied Fokussierung auf einer Plattform oder Plugin arbeiten. Diese Funktion erleichtert das Teilen des Projekts und reduzieren die Menge der redundanten Code, der im Repository eingecheckt ist.

## Plattform-Versionsverwaltung

### Speichern von Plattformen

Um eine Plattform zu speichern, geben Sie folgenden Befehl ein:

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

Nach dem obigen Befehl ausführen, wird die resultierende Datei config.xml sieht:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>
    

Einige Beispiele:

  * => **'cordova platform add android --save'** Ruft die festgehaltene Version der android-Plattform, dem Projekt hinzugefügt und aktualisiert dann "config.xml".
  * => **'cordova platform add android@3.7.0 --save'** Ruft die androide-Plattform, Version 3.7.0 vom Npm, dem Projekt hinzugefügt und aktualisiert dann "config.xml".
  * **"cordova platform add android@https://github.com/apache/cordova-android.git​ --save"** => klont das angegebene Cordova-Android Git Repository, dem Projekt die androide-Plattform hinzugefügt dann aktualisiert "config.xml" und zeigen Sie ihre Version auf der angegebenen Git-Url.
  * => **'cordova platform add C:/path/to/android/platform --save'** Ruft die androide-Plattform aus dem angegebenen Verzeichnis, dem Projekt hinzugefügt, dann aktualisiert "config.xml" und zeigen Sie auf das Verzeichnis.

### Masse-Plattformen auf ein vorhandenes Projekt zu speichern.

Die '--save ' Flagge oben beschriebene ist nur nützlich, wenn Sie daran denken, während die Plattform-Zusatz verwendet. Wenn Sie ein bereits vorhandenes Projekt haben und Sie alle aktuell hinzugefügten Plattformen in Ihrem Projekt speichern möchten, können Sie:

    $ cordova platform save
    

### Aktualisieren / Entfernen von Plattformen

Es ist auch möglich, aktualisieren und Löschen von "config.xml" während der Befehle "Cordova Platform Update' und 'Cordova Plattform entfernen':

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

Einige Beispiele:

  * Neben der Aktualisierung der androiden-Plattform, die festgehaltene Version, Update "config.xml" Eintrag => **'cordova platform update android --save'**
  * Neben der Aktualisierung der androiden-Plattform auf Version 3.8.0, Update "config.xml" Eintrag => **'cordova Plattform update android@3.8.0 --save'**
  * Neben der Aktualisierung der androiden-Plattform auf Version Update "config.xml" Eintrag im Ordner => **'cordova Plattform update /path/to/android/platform --save'**
  * => **'cordova platform remove android --save'** entfernt die androide-Plattform aus dem Projekt und löscht den Eintrag von "config.xml".

### Wiederherstellen von Plattformen

Plattformen werden automatisch von "config.xml" wiederhergestellt, wenn der **'cordova prepare'** -Befehl ausgeführt wird.

Wenn Sie eine Plattform hinzufügen, ohne Angabe einer Version/Ordner/Git_url, stammt die Version installieren von config.xml, **Wenn gefunden**.

Beispiel:

Angenommen, die Datei "config.xml" den folgenden Eintrag enthält:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    

Wenn Sie den Befehl **'cordova platform add android'** (keine Version/Ordner/Git_url angegeben) ausführen, wird die Plattform "android@3.7.0" (wie von "config.xml" abgerufen) installiert.

* * *

## Plugin-Versionsverwaltung

*(Die Plugin-Befehle sind ein Spiegel der Plugin-Befehle)*

### Speichern von plugins

Um ein Plugin zu speichern, geben Sie folgenden Befehl ein:

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

Nach dem obigen Befehl ausführen, wird die resultierende Datei config.xml sieht:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>
    

Einige Beispiele:

  * => **'cordova plugin add cordova-plugin-console --save'** Ruft die festgehaltene Version der Konsole Plugin, dem Projekt hinzugefügt und aktualisiert dann "config.xml".
  * => **'cordova plugin add cordova-plugin-console@0.2.13 --save'** Ruft das androide Plugin Version 0.2.13 von Npm, dem Projekt hinzugefügt und aktualisiert dann "config.xml".
  * => **'cordova plugin add https://github.com/apache/cordova-plugin-console.git --save'** klont das angegebene Konsole Plugin Git Repository, das Konsole-Plugin fügt dem Projekt dann aktualisiert "config.xml" und zeigen Sie ihre Version auf der angegebenen Git-Url.
  * => **'cordova plugin add C:/path/to/console/plugin --save'** Ruft das Konsole-Plugin aus dem angegebenen Verzeichnis, dem Projekt hinzugefügt und dann "config.xml" aktualisiert und zeigen Sie auf das Verzeichnis.

### Masse, die Plugins auf einem vorhandenen Projekt speichern

Die '--save ' Flagge oben beschriebene ist nur nützlich, wenn Sie daran denken, während die Plattform-Zusatz verwendet. Wenn Sie ein bereits vorhandenes Projekt und Sie speichern möchten alle derzeit Plugins im Projekt hinzugefügt, können Sie:

    $ cordova plugin save
    

### Aktualisierung / Plugins entfernen

Es ist auch möglich, aktualisieren und Löschen von "config.xml" während der Befehle "Cordova-Plugin-Update' und 'Cordova Plugin entfernen':

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

Einige Beispiele:

  * Neben der Aktualisierung des Konsole-Plugins um die festgehaltene Version, Update "config.xml" Eintrag => **'cordova plugin update cordova-plugin-console --save'**
  * Neben der Aktualisierung des Androiden Plugins auf Version 3.8.0, Update "config.xml" Eintrag => **'cordova plugin update cordova-plugin-console@0.2.13 --save'**
  * Neben der Aktualisierung des Konsole-Plugins auf Version Update "config.xml" Eintrag im Ordner => **'cordova plugin update /path/to/console/plugin --save'**
  * => **'cordova plugin remove cordova-plugin-console --save'** entfernt das Konsole-Plugin aus dem Projekt und löscht den Eintrag von "config.xml".

### Wiederherstellen von plugins

Plattformen werden automatisch von "config.xml" wiederhergestellt, wenn der **'cordova prepare'** -Befehl ausgeführt wird.

Wenn Sie eine Plugin hinzufügen, ohne Angabe einer Version/Ordner/Git_url, ist die Version installiert werden soll mit "config.xml", entnommen **Wenn gefunden**.

Beispiel:

Angenommen, die Datei "config.xml" den folgenden Eintrag enthält:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>
    

Wenn Sie den Befehl **'cordova plugin add cordova-plugin-console'** (keine Version/Ordner/Git_url angegeben) ausführen, wird das Plugin 'cordova-plugin-console@0.2.11' (wie von "config.xml" abgerufen) installiert.