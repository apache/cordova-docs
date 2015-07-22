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

# Handbuch Ubuntu Plattform

## Erstveröffentlichung

Willkommen Sie bei der ersten Version von Ubuntu-Plattform-Unterstützung in Cordova. Mit dieser Version ist der Fokus auf einem Ubuntu-System entwickeln und verwenden die Cordova Web Dev Projektablauf. Dazu gehören die Ubuntu-Plattform auf Ihr Projekt hinzufügen von Cordova Standarderweiterungen, und, natürlich, erstellen und Ausführen von apps für die Ubuntu-Plattform hinzufügen.

### Ubuntu-SDK

Sie können auch die Entwicklungsumgebung Ubuntu QtCreator installieren möchten. Siehe [developer.ubuntu.com][1] für mehr Info. (Der QtCreator SDK ist nicht erforderlich, Ihre Cordova-app-Plattform-Unterstützung für Ubuntu hinzu.)

 [1]: http://developer.ubuntu.com

### Ubuntu-Runtime-Plattformen

Ubuntu ist bekannt für seine Desktop-Umgebung (für Laptops, PCs und so weiter). Ubuntu Touch erweitert das Betriebssystem Ubuntu auf Handys und Tablets. Ubuntu-Runtime-Plattformen haben unterschiedliche CPU-Architekturen (X 86, Armhf, etc..). Entsprechend muss die APP und Plugin-Code kompiliert werden. Unterstützung für diesen breiten Bereich entwickelt sich schnell in die Ubuntu.

### Aktuelle Informationen

Die neuesten Informationen zu Cordova app Unterstützung für Ubuntu-Runtime-Plattformen finden Sie unter [wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## Anforderungen für die Plattform

In dieser ersten Version sollte die Entwicklungsplattform ein Ubuntu-Desktop. Ubuntu-13.10 (Codename 'frech') oder höher ist erforderlich, um den vollständigen Satz der unterstützten Funktionen zu genießen.

Cordova k÷nnen Sie auf nicht-Ubuntu Systemen (Npm), aber wichtige Funktionen stehen nur durch Ubuntu debian-Pakete zu dieser Zeit zur Verfügung.

## Cordova-Installation

Fügen Sie Ihr Ubuntu-System Ubuntu Cordova [Personal Package Archive][3] :

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

Cordova-Cli-Paket (und seine Abhängigkeiten) zu installieren:

    $ sudo apt-get install cordova-cli
    

## Projektablauf

### Erstellen Sie ein Projekt

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### Verschieben Sie in das Projektverzeichnis

    $ cd project1
    

### Fügen Sie die Ubuntu-Plattform

    $ cordova platform add ubuntu
    

### Build für Ubuntu

    $ cordova build ubuntu
    

### Führen Sie die Anwendung

    $ cordova run ubuntu
    

### Batterie-Status-Plugin hinzufügen

    $ cordova plugin add org.apache.cordova.battery-status