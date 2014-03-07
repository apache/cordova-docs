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

# Aktualisieren der BlackBerry 10

Diese Anleitung zeigt wie zum Ändern von BlackBerry Projekten Upgrade von älteren Versionen von Cordova. Die meisten diese Anweisungen gelten für Projekte, die mit einer älteren Befehlszeilentools, die vorangehen erstellt die `cordova` CLI-Hilfsprogramm. Die Command-Line Interface Informationen finden Sie unter Gewusst wie: Aktualisieren Sie die Version der CLI.

## Upgrade von 3.1.0 auf 3.2.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Ausführen`cordova platform update blackberry`

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        Aktualisieren Sie bin/< Project_path >
    

## Ein Upgrade auf 3.1.0 von 3.0.0

1.  Erstellen Sie ein neues Apache Cordova 3.1.0-Projekt mit Cordova CLI, wie in der Command-Line Interface beschrieben.

2.  Die Plattformen der Cordova Projekt fügen Sie hinzu, zum Beispiel:`cordova
platform add blackberry10`.

3.  Kopieren Sie den Inhalt des ursprünglichen Projekts `www` Verzeichnis in das `www` Verzeichnis im Stammverzeichnis des Projektes Cordova, die Sie gerade erstellt haben.

4.  Kopieren oder nativen Vermögen aus dem ursprünglichen Projekt zu überschreiben ( `Resources` , etc..)

5.  Kopie der `config.xml` -Datei in das `www` Verzeichnis und entfernen Sie alle Plugin-Definitionen. Du musst Einstellungen hier anstatt innerhalb des Plattform-Verzeichnisses ändern.

6.  Verwenden Sie Cordova-CLI-Tool, um alle Plugins zu installieren, die Sie brauchen. Beachten Sie, dass die CLI behandelt alle Kern-APIs als Plugins, so müssen sie möglicherweise hinzugefügt werden. Nur Plugins markiert 3.0.0 und oben sind kompatibel mit CLI.

7.  Erstellen und testen.

Bitte beachten Sie, dass die CLI die BlackBerry10-Plattform ausschließlich unterstützt. Textbuch und BBOS, finden Sie unter Cordova Version 2.9.0 und unten.

## Upgrade auf die CLI (3.0.0) von 2.9.0

1.  Erstellen Sie ein neues Apache Cordova 3.0.0-Projekt mit Cordova CLI, wie in der Command-Line Interface beschrieben.

2.  Die Plattformen der Cordova Projekt fügen Sie hinzu, zum Beispiel:`cordova
platform add blackberry10`.

3.  Kopieren Sie den Inhalt des ursprünglichen Projekts `www` Verzeichnis in das `www` Verzeichnis im Stammverzeichnis des Projektes Cordova, die Sie gerade erstellt haben.

4.  Kopieren oder nativen Vermögen aus dem ursprünglichen Projekt zu überschreiben ( `Resources` , etc..)

5.  Kopie der `config.xml` -Datei in das `www` Verzeichnis und entfernen Sie alle Plugin-Definitionen. Du musst Einstellungen hier anstatt innerhalb des Plattform-Verzeichnisses ändern.

6.  Verwenden Sie Cordova-CLI-Tool, um alle Plugins zu installieren, die Sie brauchen. Beachten Sie, dass die CLI behandelt alle Kern-APIs als Plugins, so müssen sie möglicherweise hinzugefügt werden. Nur 3.0.0 Plugins sind kompatibel mit CLI.

7.  Erstellen und testen.

## Upgrade 2.8.0 Projekte 2.9.0

Für BlackBerry 10:

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.9.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Cordova-2.9.0`.

2.  Beenden Sie alle laufenden SDK-Tools: Eclipse, Momentics und dergleichen.

3.  Navigieren Sie zum Verzeichnis, in dem Sie die heruntergeladene Quelle oben, ein Unix wie Terminal setzen: Terminal.app, Bash, Cygwin, etc..

4.  Erstellen Sie ein neues Projekt, wie in BlackBerry-Befehlszeilen-Tools beschrieben. Dies wird die Startseite des Projekts aktualisiert.

5.  Kopieren Sie Ihre Projekte-Quelle aus des alten Projekts `/www` Verzeichnis in des neuen Projekts `/www` Verzeichnis.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova.js` Datei.

Für BlackBerryOS/Textbuch:

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.9.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Cordova-2.9.0`.

2.  Beenden Sie alle laufenden SDK-Tools: Eclipse, Momentics und dergleichen.

3.  Navigieren Sie zum Verzeichnis, in dem Sie die heruntergeladene Quelle oben, ein Unix wie Terminal setzen: Terminal.app, Bash, Cygwin, etc..

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova.js` Datei.

7.  Kopie der `native` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `native` Verzeichnis.

8.  Kopie der `lib` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `lib` Verzeichnis.

9.  Kopie der `cordova` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `cordova` Verzeichnis.

## Upgrade 2.7.0 Projekte 2.8.0

BlackBerry 10 verwendet die neue CLI-Werkzeuge und Kern-APIs als Plugins verwaltet. Die Anweisungen Migrieren Ihres Projekts für ein neues Projekt, anstatt ein vorhandenes Projekt, aufgrund der Komplexität der Aktualisierung eines alten Projekts zu aktualisieren. Auch beachten Sie, dass die Cordova-Js--Datei Skript heißt jetzt 'cordova.js' und nicht mehr eine Zeichenfolge enthält.

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.8.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Cordova-2.8.0`.

2.  Beenden Sie alle laufenden SDK-Tools: Eclipse, Momentics und dergleichen.

3.  Navigieren Sie zum Verzeichnis, in dem Sie die heruntergeladene Quelle oben, ein Unix wie Terminal setzen: Terminal.app, Bash, Cygwin, etc..

4.  Erstellen Sie ein neues Projekt, wie in BlackBerry-Befehlszeilen-Tools beschrieben. Dies wird die Startseite des Projekts aktualisiert.

5.  Kopieren Sie Ihre Projekte-Quelle aus des alten Projekts `/www` Verzeichnis in des neuen Projekts `/www` Verzeichnis.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova.js` Datei.

Für BlackBerryOS/Textbuch:

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.8.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Cordova-2.8.0`.

2.  Beenden Sie alle laufenden SDK-Tools: Eclipse, Momentics und dergleichen.

3.  Navigieren Sie zum Verzeichnis, in dem Sie die heruntergeladene Quelle oben, ein Unix wie Terminal setzen: Terminal.app, Bash, Cygwin, etc..

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova.js` Datei.

7.  Kopie der `native` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `native` Verzeichnis.

8.  Kopie der `lib` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `lib` Verzeichnis.

9.  Kopie der `cordova` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `cordova` Verzeichnis.

## Upgrade 2.6.0 Projekte 2.7.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.7.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Cordova-2.7.0`.

2.  Beenden Sie alle laufenden SDK-Tools: Eclipse, Momentics und dergleichen.

3.  Navigieren Sie zum Verzeichnis, in dem Sie die heruntergeladene Quelle oben, ein Unix wie Terminal setzen: Terminal.app, Bash, Cygwin, etc..

4.  Erstellen Sie ein neues Projekt, wie in BlackBerry-Befehlszeilen-Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova-2.7.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-2.6.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.7.0.js` Datei.

7.  Kopie der `native` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `native` Verzeichnis.

8.  Kopie der `lib` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `lib` Verzeichnis.

9.  Kopie der `cordova` Verzeichnis des neuen Projekts in das bestehende Projekt, überschreiben die alte `cordova` Verzeichnis.

## Ein Upgrade auf 2.6.0 von 2.5.0

Fortschreibung des PhoneGap-Download-Verzeichnis:

Es wird empfohlen, dass Sie eine neue Kopie von das gesamte Verzeichnis herunterladen.

Aber auch hier sind die neuen Teile für die schrittweise Aktualisierung:

1.  Aktualisieren Sie die Datei cordova.blackberry.js in das `Phonegap-2.6.0/lib/blackberry/javascript` Verzeichnis.

2.  Update der `ext` , `ext-air` , und `ext-qnx` in das `Phonegap-2.6.0/lib/blackberry/framework` Verzeichnis.

3.  Update der `build.xml` Datei das `Phonegap-2.6.0/lib/blackberry` Verzeichnis.

4.  Update der `Phonegap-2.6.0/lib/blackberry/bin` Verzeichnis.

5.  Update der `VERSION` Datei das `Phonegap-2.6.0/lib/blackberry` Verzeichnis.

Aktualisieren das Beispiel / Verzeichnis oder Migrieren einer vorhandenen Projekt:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Aktualisieren des Inhalts der `ext-qnx/` Verzeichnis.

5.  Kopieren Sie die neue `cordova-2.6.0.js` in Ihr Projekt.

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.6.0.js` Datei.

## Ein Upgrade auf 2.5.0 von 2.4.0

Fortschreibung des PhoneGap-Download-Verzeichnis:

Es wird empfohlen, dass Sie eine neue Kopie von das gesamte Verzeichnis herunterladen.

Aber auch hier sind die neuen Teile für die schrittweise Aktualisierung:

1.  Aktualisieren Sie die Datei cordova.blackberry.js in das `Phonegap-2.5.0/lib/blackberry/javascript` Verzeichnis.

2.  Update der `ext` , `ext-air` , und `ext-qnx` in das `Phonegap-2.5.0/lib/blackberry/framework` Verzeichnis.

3.  Update der `build.xml` Datei das `Phonegap-2.5.0/lib/blackberry` Verzeichnis.

4.  Update der `Phonegap-2.5.0/lib/blackberry/bin` Verzeichnis.

5.  Update der `VERSION` Datei das `Phonegap-2.5.0/lib/blackberry` Verzeichnis.

Aktualisieren das Beispiel / Verzeichnis oder Migrieren einer vorhandenen Projekt:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Aktualisieren des Inhalts der `ext-qnx/` Verzeichnis.

5.  Kopieren Sie die neue `cordova-2.5.0.js` in Ihr Projekt.

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.5.0.js` Datei.

## Ein Upgrade auf 2.4.0 von 2.3.0

Aktualisierung nur das `www` Verzeichnis:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Kopieren Sie die neue `cordova-2.4.0.js` in Ihr Projekt.
    
    *   Wenn Textbuch, dann Update die JS-in Datei das `playbook/` Verzeichnis.
    *   Wenn BlackBerry 10, aktualisieren Sie dann die JS-Datei in das `qnx/` Verzeichnis.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.4.0.js` Datei.

Aktualisieren das Beispielverzeichnis (d. h. Aktualisierung mithilfe der Ant-Tools):

1.  Öffnen der `sample/lib/` Verzeichnis.

2.  Aktualisieren Sie die .jar-Datei in das `cordova.2.3.0/ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `cordova.2.3.0/ext-air/` Verzeichnis.

4.  Aktualisieren des Inhalts der `cordova.2.3.0/ext-qnx/` Verzeichnis.

5.  Aktualisieren Sie die JS-Datei in das `cordova.2.3.0/javascript/` Verzeichnis.

6.  Öffnen der `sample/lib/` Verzeichnis und benennen Sie die `cordova.2.3.0/` Verzeichnis`cordova.2.4.0/`.

7.  Typ `ant blackberry build` oder `ant playbook build` zum Aktualisieren der `www/` Verzeichnis mit aktualisierten Cordova.

8.  Öffnen der `www/` Verzeichnis und aktualisieren Sie den HTML-Code um das neue `cordova-2.4.0.js` Datei.

## Ein Upgrade auf 2.3.0 von 2.2.0

Aktualisierung nur das `www` Verzeichnis:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Kopieren Sie die neue `cordova-2.3.0.js` in Ihr Projekt.
    
    *   Wenn Textbuch, dann Update die JS-in Datei das `playbook/` Verzeichnis.
    *   Wenn BlackBerry 10, aktualisieren Sie dann die JS-Datei in das `qnx/` Verzeichnis.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.3.0.js` Datei.

Aktualisieren das Beispielverzeichnis (d. h. Aktualisierung mithilfe der Ant-Tools):

1.  Öffnen der `sample/lib/` Verzeichnis.

2.  Aktualisieren Sie die .jar-Datei in das `cordova.2.2.0/ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `cordova.2.2.0/ext-air/` Verzeichnis.

4.  Aktualisieren des Inhalts der `cordova.2.2.0/ext-qnx/` Verzeichnis.

5.  Aktualisieren Sie die JS-Datei in das `cordova.2.2.0/javascript/` Verzeichnis.

6.  Öffnen der `sample/lib/` Verzeichnis und benennen Sie die `cordova.2.2.0/` Verzeichnis`cordova.2.3.0/`.

7.  Typ `ant blackberry build` oder `ant playbook build` zum Aktualisieren der `www/` Verzeichnis mit aktualisierten Cordova.

8.  Öffnen der `www/` Verzeichnis und aktualisieren Sie den HTML-Code um das neue `cordova-2.3.0.js` Datei.

## Ein Upgrade auf 2.2.0 von 2.1.0

Aktualisieren einfach das Www-Verzeichnis:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Kopieren Sie die neue `cordova-2.2.0.js` in Ihr Projekt.
    
    *   Wenn Textbuch, dann Update die JS-in Datei das `playbook/` Verzeichnis.
    *   Wenn BlackBerry 10, aktualisieren Sie dann die JS-Datei in das `qnx/` Verzeichnis.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.2.0.js` Datei.

Aktualisieren das Beispielverzeichnis (d. h. Aktualisierung mithilfe der Ant-Tools):

1.  Öffnen der `sample/lib/` Verzeichnis.

2.  Aktualisieren Sie die .jar-Datei in das `cordova.2.1.0/ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `cordova.2.1.0/ext-air/` Verzeichnis.

4.  Aktualisieren des Inhalts der `cordova.2.1.0/ext-qnx/` Verzeichnis.

5.  Aktualisieren Sie die JS-Datei in das `cordova.2.1.0/javascript/` Verzeichnis.

6.  Öffnen der `sample/lib/` Verzeichnis und benennen Sie die `cordova.2.1.0/` Verzeichnis`cordova.2.2.0/`.

7.  Typ `ant blackberry build` oder `ant playbook build` zum Aktualisieren der `www/` Verzeichnis mit aktualisierten Cordova.

8.  Öffnen der `www/` Verzeichnis und aktualisieren Sie den HTML-Code um das neue `cordova-2.2.0.js` Datei.

## Upgrade auf 2.1.0 von 2.0.0

Aktualisierung nur das `www` Verzeichnis:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Kopieren Sie die neue `cordova-2.1.0.js` in Ihr Projekt.
    
    *   Wenn Textbuch, dann Update die JS-in Datei das `playbook/` Verzeichnis.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.1.0.js` Datei.

Aktualisieren das Beispielverzeichnis (d. h. Aktualisierung mithilfe der Ant-Tools):

1.  Öffnen der `sample/lib/` Verzeichnis.

2.  Aktualisieren Sie die .jar-Datei in das `cordova.2.0.0/ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `cordova.2.0.0/ext-air/` Verzeichnis.

4.  Aktualisieren Sie die JS-Datei in das `cordova.2.0.0/javascript/` Verzeichnis.

5.  Öffnen der `sample/lib/` Verzeichnis und benennen Sie die `cordova.2.0.0/` Verzeichnis`cordova.2.1.0/`.

6.  Typ `ant blackberry build` oder `ant playbook build` zum Aktualisieren der `www/` Verzeichnis mit aktualisierten Cordova.

7.  Öffnen der `www/` Verzeichnis und aktualisieren Sie den HTML-Code um das neue `cordova-2.1.0.js` Datei.

## Ein Upgrade auf 2.0.0 von 1.9.0

Aktualisierung nur das `www` Verzeichnis:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Kopieren Sie die neue `cordova-2.0.0.js` in Ihr Projekt.
    
    *   Wenn Textbuch, dann Update die JS-in Datei das `playbook/` Verzeichnis.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.0.0.js` Datei.

6.  Update der `www/plugins.xml` Datei. Zwei Plugins verändert ihr Label-Namespace-Dienst. Ändern Sie die alten Einträge für die Erfassung und Kontakt-Plugins von:
    
        < Plugin Name = "Capture" value="org.apache.cordova.media.MediaCapture"/ >< Plugin-Name = "Kontakt" value="org.apache.cordova.pim.Contact"/ >
        
    
    An:
    
        < Plugin Name = "Capture" value="org.apache.cordova.capture.MediaCapture"/ >< Plugin-Namen "Kontakte" value="org.apache.cordova.pim.Contact"/ = >
        

Aktualisieren das Beispielverzeichnis (d. h. Aktualisierung mithilfe der Ant-Tools):

1.  Öffnen der `sample/lib/` Verzeichnis.

2.  Aktualisieren Sie die .jar-Datei in das `cordova.1.9.0/ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `cordova.1.9.0/ext-air/` Verzeichnis.

4.  Aktualisieren Sie die JS-Datei in das `cordova.1.9.0/javascript/` Verzeichnis.

5.  Öffnen der `sample/lib/` Verzeichnis und benennen Sie die `cordova.1.9.0/` Verzeichnis`cordova.2.0.0/`.

6.  Typ `ant blackberry build` oder `ant playbook build` zum Aktualisieren der `www/` Verzeichnis mit aktualisierten Cordova.

7.  Öffnen der `www/` Verzeichnis und aktualisieren Sie den HTML-Code um das neue `cordova-2.0.0.js` Datei.

8.  Öffnen der `www/` Verzeichnis und Update der `plugins.xml` Datei. Zwei Plugins verändert ihr Label-Namespace-Dienst. Ändern Sie die alten Einträge für die Erfassung und Kontakt-Plugins von:
    
         < Plugin Name = "Capture" value="org.apache.cordova.media.MediaCapture"/ >< Plugin-Name = "Kontakt" value="org.apache.cordova.pim.Contact"/ >
        
    
    An:
    
         < Plugin Name = "Capture" value="org.apache.cordova.capture.MediaCapture"/ >< Plugin-Namen "Kontakte" value="org.apache.cordova.pim.Contact"/ = >
        

*   Um auf 1.8.0 aktualisieren, gehen Sie bitte 1.7.0

## Ein Upgrade auf 1.8.0 von 1.7.0

Aktualisierung nur das `www` Verzeichnis:

1.  Öffnen Ihre `www/` Verzeichnis, das Ihre Anwendung enthält.

2.  Entfernen und aktualisieren Sie die .jar-Datei in das `ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `ext-air/` Verzeichnis.

4.  Kopieren Sie die neue `cordova-1.8.0.js` in Ihr Projekt.
    
    *   Wenn Textbuch, dann Update die JS-in Datei das `playbook/` Verzeichnis.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.8.0.js` Datei.

6.  Update der `www/plugins.xml` Datei. Zwei Plugins verändert ihr Label-Namespace-Dienst. Ändern Sie die alten Einträge für die Erfassung und Kontakt-Plugins von:
    
        < Plugin Name = "Capture" value="org.apache.cordova.media.MediaCapture"/ >< Plugin-Name = "Kontakt" value="org.apache.cordova.pim.Contact"/ >
        
    
    An:
    
        < Plugin Name = "Capture" value="org.apache.cordova.capture.MediaCapture"/ >< Plugin-Namen "Kontakte" value="org.apache.cordova.pim.Contact"/ = >
        

Aktualisieren das Beispielverzeichnis (d. h. Aktualisierung mithilfe der Ant-Tools):

1.  Öffnen der `sample/lib/` Verzeichnis.

2.  Aktualisieren Sie die .jar-Datei in das `cordova.1.7.0/ext/` Verzeichnis.

3.  Aktualisieren des Inhalts der `cordova.1.7.0/ext-air/` Verzeichnis.

4.  Aktualisieren Sie die JS-Datei in das `cordova.1.7.0/javascript/` Verzeichnis.

5.  Öffnen der `sample/lib/` Verzeichnis und benennen Sie die `cordova.1.7.0/` Verzeichnis`cordova.1.8.0/`.

6.  Typ `ant blackberry build` oder `ant playbook build` zum Aktualisieren der `www/` Verzeichnis mit aktualisierten Cordova.

7.  Öffnen der `www/` Verzeichnis und aktualisieren Sie den HTML-Code um das neue `cordova-1.8.0.js` Datei.

8.  Öffnen der `www/` Verzeichnis und Update der `plugins.xml` Datei. Zwei Plugins verändert ihr Label-Namespace-Dienst. Ändern Sie die alten Einträge für die Erfassung und Kontakt-Plugins von:
    
         < Plugin Name = "Capture" value="org.apache.cordova.media.MediaCapture"/ >< Plugin-Name = "Kontakt" value="org.apache.cordova.pim.Contact"/ >
        
    
    An:
    
         < Plugin Name = "Capture" value="org.apache.cordova.capture.MediaCapture"/ >< Plugin-Namen "Kontakte" value="org.apache.cordova.pim.Contact"/ = >