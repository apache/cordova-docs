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

# IOS Upgrade

Diese Anleitung zeigt wie iOS-Projekte von älteren Versionen von Cordova upgedatet werden. Die meisten diese Anweisungen gelten für Projekte, die mit einer älteren Befehlszeilentools, die vorangehen erstellt die `cordova` CLI-Hilfsprogramm. Die Command-Line Interface Informationen finden Sie unter Gewusst wie: Aktualisieren Sie die Version der CLI.

**Hinweis**: Xcode 4.6 ist erforderlich, Xcode-5 wird empfohlen. Derzeit um die Apple-App-Store zu übermitteln, verwenden Sie die neueste ausgelieferte Version des iOS SDK, welches ist iOS 7. iOS 7 SDK noch nicht erforderlich, aber dies kann sich schnell ändern.

## Upgrade 3.1.0 Projekte zu 3.2.0

Für nicht-CLI Projekte führen:

        bin/Pfad/zu/Projekt-update
    

CLI-Projekte:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Ausführen`cordova platform update ios`

## Upgrade 3.0.0 Projekte zu 3.1.0

Für nicht-CLI Projekte führen:

        bin/Pfad/zu/Projekt-update
    

CLI-Projekte:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Ausführen`cordova platform update ios`

iOS 7 Fragen:

1.  Entfernen von `width=device-width, height=device-height` aus der `index.html` Datei `viewport` `meta` Tag. (Siehe [die relevant-bug][1].)

2.  Aktualisieren Sie Ihre Medien, Medien-Capture und Splashscreen Core-Plugins für iOS 7 Unterstützung.

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 Fragen:

1.  Aktualisieren Sie die Projekteinstellungen ändern, wenn Sie Xcode-5 (in den Themen-Navigator) dazu aufgefordert werden.

2.  Update Ihrer **Compiler für C / C + + / Objective-C** festlegen, unter der Registerkarte **Buildeinstellungen** **Erstellungsoptionen** Abschnitt. Wählen Sie **Standard-Compiler (Apple LLVM 5.0)**.

## Upgrade auf die CLI (3.0.0) von 2.9.0

1.  Erstellen Sie ein neues Apache Cordova 3.0.0-Projekt mit Cordova CLI, wie in der Command-Line Interface beschrieben.

2.  Die Plattformen der Cordova Projekt fügen Sie hinzu, zum Beispiel:`cordova
platform add ios`.

3.  Kopieren Sie den Inhalt des Projekts `www` Verzeichnis in das `www` Verzeichnis im Stammverzeichnis des Projektes Cordova, die Sie gerade erstellt haben.

4.  Kopieren oder nativen Vermögen aus dem ursprünglichen Projekt zu überschreiben ( `Resources` usw.), die sicher um jede neuen Dateien zu den `.xcodeproj` Projekt. Das iOS-Projekt erstellt, in das `platforms\ios` Verzeichnis.

5.  Kopie Ihrer `config.xml` in das `www` Verzeichnis und entfernen Sie alle Plugin-Definitionen. Ändern Sie die Einstellungen hier anstelle des Plattform-Verzeichnisses.

6.  Verwenden Sie Cordova-CLI-Tool, um alle Plugins zu installieren, die Sie brauchen. Beachten Sie, dass die CLI behandelt alle Kern-APIs als Plugins, so müssen sie möglicherweise hinzugefügt werden. Nur 3.0.0 Plugins sind kompatibel mit CLI.

7.  Erstellen und testen.

## Upgrade 2.9.0 Projekte 3.0.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 3.0.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-3.0.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova.js` (Beachten Sie, dass es muss ein Version-Suffix nicht mehr, die Version ist in der Datei selbst in der Kopfzeile) Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova.js` Datei.

7.  Löschen Sie Ihre `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

**Hinweis**: beginnend mit Cordova 3.0.0, Plugins sind nicht vorinstalliert und müssen Sie verwenden die `plugman` Befehlszeilen-Dienstprogramm sie selbst installieren. Siehe Verwenden von Plugman Plugins verwalten.

## Upgrade 2.8.0 Projekte 2.9.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.9.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.9.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova.js` (Beachten Sie, dass es muss ein Version-Suffix nicht mehr, die Version ist in der Datei selbst in der Kopfzeile) Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova.js` Datei.

7.  Löschen Sie Ihre `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

## Upgrade 2.7.0 Projekte 2.8.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.8.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.8.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova.js` (Beachten Sie, dass es muss ein Version-Suffix nicht mehr, die Version ist in der Datei selbst in der Kopfzeile) Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-2.7.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova.js` Datei.

7.  Aktualisieren `<plugin>` -tags in der `config.xml` Datei `<feature>` Tags. Beachten Sie, dass die vorhandenen `<plugin>` Tags noch funktionieren, aber sind veraltet. Sie können diese Informationen in der `config.xml` -Datei für ein neues Projekt. Zum Beispiel:
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  Löschen der `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

9.  Fügen Sie diese beiden Frameworks zum Projekt:
    
        OpenAL ImageIO
        

10. Aktualisieren Sie Ihr Projektziel **Buildeinstellungen**. Unter **Verbindung → Sonstiges Linker-Flags**, bearbeiten **"- Obj - C"** zu **"-ObjC"**.

11. Aktualisieren Sie Ihr Projektziel **Buildeinstellungen**. Ändern Sie unter **Verbindung → Sonstiges Linker-Flags**, **"-All_load"** zu `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` . Sie müssten nur, dies zu tun, wenn Sie das Problem in definierten [dieses Problem.][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## Upgrade 2.6.0 Projekte 2.7.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.7.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.7.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova-2.7.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-2.6.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.7.0.js` Datei.

7.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `AppDelegate.m` Datei entsprechend von dem neuen Projekt (siehe [diese Diff][3]).

8.  In der `config.xml` Datei, [Entfernen Sie diese Zeile][4].

9.  Löschen Sie Ihre `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## Upgrade 2.5.0 Projekte 2.6.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.6.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.6.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopieren Sie das Projekt `www/cordova-2.6.0.js` Datei in Ihr `www` Verzeichnis, und Löschen der `www/cordova-2.5.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (zusammen mit anderen Dateien, die das Skript verweisen) zum Verweisen auf die neue `cordova-2.6.0.js` Datei.

7.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `AppDelegate.m` Datei entsprechend von dem neuen Projekt (siehe [diese Diff][5]).

8.  In der `config.xml` Datei, [fügen Sie diese neue Linie][6].

9.  In der `config.xml` Datei, [fügen Sie diese neue Linie][7].

10. In der `config.xml` Datei, [UIWebViewBounce, DisallowOverscroll, geändert wurde und Standardwerte sind unterschiedlich][8].

11. In der `config.xml` Datei, die `EnableLocation` Präferenz ist veraltet.

12. Löschen Sie Ihre `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## Upgrade 2.4.0 Projekte 2.5.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.5.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.5.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova-2.5.0.js` Datei aus dem neuen Projekt in Ihrem `www` -Verzeichnis und löschen Ihre `www/cordova-2.4.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.5.0.js` Datei.

7.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `AppDelegate.m` Datei entsprechend von dem neuen Projekt (siehe [diese Diff][9]).

8.  In der `config.xml` Datei, [fügen Sie diese neuen Zeilen][10].

9.  In Ihrem `config.xml` Datei, [das Root-Element zu bearbeiten, ändern sie von Cordova, Widget][11].

10. In der `config.xml` Datei, [Entfernen Sie die Voreinstellung "OpenAllWhitelistURLsInWebView"][12].

11. Löschen Sie Ihre `cordova` Verzeichnis, und kopieren die `cordova` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis. In 2.5.0 hat dieses Skripts aktualisiert.

12. Löschen Sie Ihre `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## Upgrade 2.3.0 Projekte 2.4.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.4.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.4.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova-2.4.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-2.3.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.4.0.js` Datei.

7.  Aktualisieren (oder zu ersetzen, wenn Sie die Dateien nie geändert) Ihre `MainViewController.m` Datei entsprechend von dem neuen Projekt (siehe [diese Diff][13]).

8.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `AppDelegate.m` Datei entsprechend von dem neuen Projekt (siehe [diese Diff][14]).

9.  In der `config.xml` Datei, [fügen Sie diese neue Linie][15].

10. Löschen Sie Ihre `cordova` Verzeichnis, und kopieren die `cordova` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis. In 2.4.0 hat dieses Skripts fest.

11. Löschen Sie Ihre `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

12. AssetsLibrary.framework als Ressource dem Projekt hinzufügen. (Siehe [Apples Dokumentation][16] Hinweise dazu, wie dies zu tun.).

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## Upgrade 2.2.0 Projekte 2.3.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.3.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.3.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova-2.3.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-2.2.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.3.0.js` Datei.

7.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `MainViewController.m` nach von dem neuen Projekt.

8.  Löschen Sie Ihre `cordova` Verzeichnis, und kopieren die `cordova` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis. In 2.3.0 hat das neue Skripte.

9.  Löschen Sie Ihre `CordovaLib` Verzeichnis, und kopieren die `CordovaLib` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis.

10. Konvertieren Ihrer `Cordova.plist` Datei zu `config.xml` , durch Ausführen des Skripts `bin/cordova\_plist\_to\_config\_xml` auf Ihre Projektdatei.

11. Fügen Sie das InAppBrowser-Plugin, um Ihre `config.xml` , durch Hinzufügen von diesem Tag unter `<cordova><plugins>` :
    
        < Plugin Name = "InAppBrowser" Value = "CDVInAppBrowser" / >
        

12. Beachten Sie, dass Objective-C-Plugins *nicht* auf der weißen Liste mehr sind. Auf die Whitelist Ihre Verbindungen mit der app-Whitelist, müssen Sie die `User-Agent` die Verbindung mit der gleichen User-Agent als die wichtigsten Cordova WebView-Header. Erhalten Sie durch den Zugriff auf die `userAgent` Eigenschaft aus den wichtigsten anzeigen-Controller. Die wichtigsten View-Controller ( `CDVViewController` ) hat auch eine `URLisAllowed` Methode, damit Sie prüfen, ob eine URL die Whitelist übergibt.

13. Geräte API-Änderungen:
    
    *   Für iOS, device.platform zurückgeben verwendet `iPhone` , `iPad` oder `iPod Touch` , jetzt es gibt (richtig)`iOS`.
    *   Für iOS, device.name (veraltet für alle Plattformen) verwendet, um den Namen von dem Gerät des Benutzers zurückzugeben (z.B. ' Shazrons iPhone 5 '); Jetzt gibt es was device.platform zurückgegeben: `iPhone` , `iPad` oder`iPod Touch`.
    *   Für alle Plattformen gibt es eine neue Eigenschaft namens device.model; Dies gibt das jeweilige Gerätemodell, z.B. `iPad2,5` (für andere Plattformen gibt das was device.name zurückgegeben).

## Upgrade 2.1.0 Projekte 2.2.0

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.2.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.2.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova-2.2.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-2.1.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.2.0.js` Datei.

7.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `MainViewController.m` nach von dem neuen Projekt:
    
    *   Aktualisiert → ViewWillAppear

8.  Kopie der `cordova` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis. Im 2.2.0 hat dies ein aktualisiertes 'emulieren' Skript.

9.  Anschließend aktualisieren Ihre `CordovaLib` Teilprojekt Verweis. Beginnend mit Cordova 2.1.0, wir verwenden nicht die CORDOVALIB Xcode-Variable nicht mehr wo verweisen auf `CordovaLib` befindet, der Verweis ist eine absolute Dateiverweis jetzt.
    
    1.  Terminal.app starten
    2.  Gehen Sie zu dem Speicherort, wo Sie Cordova installiert (siehe Schritt 1), in der `bin` Unterverzeichnis
    3.  Führen Sie das Skript unten, wo der erste Parameter ist der Pfad zu Ihrem Projekts `.xcodeproj` Datei:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**Hinweis**: In 2.2.0, das `bin/create` Skript-Kopie in der `CordovaLib` Teilprojekt in Ihr Projekt. Um die gleiche Art der Installation haben, kopieren Sie einfach in der rechten `CordovaLib` in Ihr Projektverzeichnis, und Update der `CordovaLib` Teilprojekt Lage (bezogen auf "Projekt") in der Xcode-Datei-Inspektor.

## Upgrade 2.0.0 Projekte auf 2.1.0

Mit Cordova 2.1.0 `CordovaLib` zur **Automatischen Reference Counting (ARC)**verwenden aktualisiert wurde. Sie nicht müssen upgrade auf **ARC** mithilfe von CordovaLib, aber wenn Sie, aktualisieren Sie das Projekt zur Verwendung von **ARC möchten**, verwenden Sie bitte den Xcode-Migrations-Assistenten aus dem Menü: **Bearbeiten → → umgestalten Convert in Objective-C-Bogen...**, libCordova.a aufzuheben, dann führen Sie den Assistenten bis zum Abschluss.

1.  Herunterladen Sie und extrahieren Sie die Cordova 2.1.0-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova-2.1.0`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

5.  Kopie der `www/cordova-2.1.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-2.0.0.js` Datei.

6.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.1.0.js` Datei.

7.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `AppDelegate.m` nach von dem neuen Projekt:
    
    *   Bearbeitet → Anwendung: DidFinishLaunchingWithOptions:
    *   Hinzugefügt → Anwendung: SupportedInterfaceOrientationsForWindow:

8.  Aktualisieren (oder zu ersetzen, wenn Sie die Datei nie geändert) Ihre `MainViewController.m` nach von dem neuen Projekt:
    
    *   Hinzugefügt → ViewWillAppear

9.  Kopie der `cordova` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis. Im 2.1.0 hat dies die aktualisierte Skripts um Pfade mit Leerzeichen zu unterstützen.

10. Entfernen Sie die `VERSION` Datei Verweis aus dem Projekt (*nicht* die in`CordovaLib`).

11. Anschließend aktualisieren Ihre `CordovaLib` Teilprojekt Verweis. Beginnend mit Cordova 2.1.0, wir verwenden nicht die CORDOVALIB Xcode-Variable nicht mehr wo verweisen auf `CordovaLib` befindet, der Verweis ist eine absolute Dateiverweis jetzt.
    
    1.  Terminal.app starten
    2.  Gehen Sie zu dem Speicherort, wo Sie Cordova installiert (siehe Schritt 1), in der `bin` Unterverzeichnis
    3.  Führen Sie das Skript unten, wo der erste Parameter ist der Pfad zu Ihrem Projekts `.xcodeproj` Datei:
        
        `Update_cordova_subproject Pfad/zu/Ihrem/Projekt/xcodeproj`

## Upgrade 1.9.0 Projekte 2.0.0

1.  Cordova 2.0.0 zu installieren.

2.  Erstellen Sie ein neues Projekt, wie in iOS Command-Line Tools beschrieben. Sie benötigen die Vermögen aus diesem neuen Projekt.

3.  Kopie der `www/cordova-2.0.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-1.9.0.js` Datei.

4.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-2.0.0.js` Datei.

5.  Kopie der `cordova` Verzeichnis des neuen Projekts in Ihrem Projekt-Root-Verzeichnis (wenn Sie möchten, dass die Projekt-Befehlszeilen-Tools).

6.  Fügen Sie einen neuen Eintrag unter `Plugins` in Ihrem `Cordova.plist` -Datei unter der **Hilfsdateien** -Gruppe. Der Schlüssel ist `Device` und der Wert ist`CDVDevice`.

7.  Entfernen`Cordova.framework`.

8.  Entfernen von `verify.sh` aus der **Hilfsdateien** -Gruppe.

9.  Wählen Sie das Projektsymbol in der Projekt-Navigator, wählen Sie das Projekt **Target**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

10. Suchen Sie nach **Präprozessor-Makros**, dann entfernen Sie alle **CORDOVA_FRAMEWORK = 1** Werte.

11. Suchen Sie das `CordovaLib` -Verzeichnis, das auf Ihrer Festplatte unter Ihrem Benutzerordner installiert wurde `Documents` Unterverzeichnis.

12. Suchen Sie die `CordovaLib.xcodeproj` Datei das `CordovaLib` Verzeichnis, dann per Drag & Drop die Datei in Ihr Projekt. Es sollte als ein Teilprojekt angezeigt.

13. Erstellen Sie das Projekt, solltest du einige Fehler im Zusammenhang mit `#import` Richtlinien.

14. Für die `#import` Fehler, Quote-basierende Einfuhren in diesem Stil zu ändern:
    
        #import "CDV.h"
        
    
    zu dieser Art auf der Grundlage von Klammern:
    
        #import <Cordova/CDV.h>
        
    
    und entfernen Sie alle `#ifdef` Wrapper für jede Cordova importiert, sie sind nicht mehr erforderlich (die Einfuhren sind nun einheitlich)

15. Erstellen Sie das Projekt erneut, und es sollten keine `#import` Störungen.

16. Wählen Sie das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie das Projekt **Target**, dann wählen Sie die Registerkarte **Build Phasen** .

17. Erweitern Sie die **Ziel Abhängigkeiten** -Phase, dann wählen Sie das **+** -Schaltfläche.

18. Wählen Sie die `CordovaLib` als Ziel, dann wählen Sie die Schaltfläche " **Hinzufügen** ".

19. Die erste **Link Binary mit Bibliotheken** Phase (es sollte bereits eine Reihe von Frameworks enthalten) zu erweitern, und wählen Sie das **+** Knopf.

20. Wählen Sie die `libCordova.a` statische Bibliothek, klicken Sie die Schaltfläche " **Hinzufügen** ".

21. Löschen Sie die **Skript ausführen** -Phase.

22. Wählen Sie das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie das Projekt **Target**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

23. Suchen Sie nach **Anderen Linker-Flags**, und addieren Sie die Werte **-Force_load** und **- Obj-C**.

24. Erweitern Sie die `CordovaLib` Teilprojekt.

25. Suchen Sie die `VERSION` Datei, ziehen Sie es in Ihr Haupt-Projekt (wir möchten einen Link zu ihr, keine Kopie erstellen).

26. Aktivieren Sie das Optionsfeld **erstellen Gruppen für alle hinzugefügten Ordner** , und wählen Sie die Schaltfläche **Fertig stellen** .

27. Wählen Sie die `VERSION` Datei, die Sie nur in einem vorherigen Schritt gezogen.

28. Geben Sie die **Option-Befehl-1** -Tastenkombination zum Anzeigen der **Datei Inspector** (oder Menuitem **anzeigen → Dienstprogramme → "Datei-Informationen einblenden"**).

29. Wählen Sie **relativ zum CORDOVALIB** in der **Datei-Inspektor** für die Drop-Down-Menü für **Lage**.

30. Legen Sie die Voreinstellung "Xcode" **Xcode "Einstellungen" → Standorte → abgeleitete Daten → Advanced...** auf **Unique**, damit die einheitliche Header gefunden werden können.

31. Wählen Sie das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie Ihr **Ziel**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

32. Suche nach **Header-Suchpfade**. Fügen Sie für diese Einstellung diese drei Werte, einschließlich der Anführungszeichen:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. Suche nach **anderen Linker-Flags**. Fügen Sie diesen Wert für diese Einstellung:
    
        -weak_framework CoreFoundation
        

34. Erstellen Sie das Projekt, es sollten kompilieren und verknüpfen **ohne** Probleme.

35. Wählen Sie das Projekt der **Schema** -Dropdown-Menü, und wählen Sie dann **iPhone 5.1 Simulator**.

36. Wählen Sie die Schaltfläche " **Ausführen** ".

**Hinweis**: Wenn Ihr Projekt nicht funktioniert wie erwartet im Simulator, bitte beachten ein Fehler in der Konsole anmelden Xcode nach hinweisen.

## Update 1.8.x-Projekten auf 1.9.0

1.  Installieren Sie Cordova 1.9.0.

2.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

3.  Kopie der `www/cordova-1.9.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-1.8.x.js` Datei.

4.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-1.9.0.js` Datei.

**Hinweis**: 1.9.0 unterstützt das neue `BackupWebStorage` boolesche `Cordova.plist` Einstellung. Es ist standardmäßig aktiviert, so legen Sie es auf `false` , besonders auf iOS 6 deaktivieren. Finden Sie unter [Release Notes: Safari und UIKit Abschnitt][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## Upgrade 1.7.0 Projekte 1.8.x

1.  Installieren Sie Cordova 1.8.0.

2.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

3.  Kopie der `www/cordova-1.8.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-1.7.x.js` Datei.

4.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-1.8.0.js` Datei.

Wollen Sie über die Verwendung der API zu erfassen, benötigen Sie die neue **iPad Retina-Display** -Vermögen:

1.  Kopie der `Resources/Capture.bundle` Element aus dem neuen Projekt in Ihrem Projektverzeichnis, schreiben über Ihre bestehende `Resources/Capture.bundle` Element.

2.  Wählen Sie in Ihrem Projekt, das `Capture.bundle` Element in Ihrem Projekt-Navigator in Xcode, geben Sie die **Entf** -Taste, und wählen Sie im daraufhin angezeigten Dialogfeld **Verweis entfernen** .

3.  Ziehen Sie die neue `Capture.bundle` aus Schritt 1 oben in Ihrem Projekt-Navigator in Xcode, wählen Sie das Optionsfeld **erstellen Gruppen für alle hinzugefügten Ordner** .

## Update 1.6.x-Projekten auf 1.7.0

1.  Installieren Sie Cordova 1.7.0.

2.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

3.  Kopie der `www/cordova-1.7.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-1.6.0.js` Datei.

4.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-1.7.0.js` Datei.

## Upgrade 1.5.0 Projekte 1.6.x

1.  Installieren Sie Cordova 1.6.1.

2.  Erstellen Sie eine Sicherungskopie von `AppDelegate.m` , `AppDelegate.h` , `MainViewController.m` , `MainViewController.h` , und `Cordova.plist` in Ihrem Projekt.

3.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

4.  Kopieren Sie diese Dateien aus dem neuen Projekt in Ihr 1.5.0-based-Projekt-Verzeichnis auf der Festplatte ersetzt alle alten Dateien (sichern Sie Ihre Dateien zuerst aus Schritt 2 oben):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  Fügen Sie die neue `MainViewController` und `AppDelegate` Dateien in das Xcode-Projekt.

6.  Kopie der `www/cordova-1.6.1.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/cordova-1.5.0.js` Datei.

7.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `cordova-1.6.1.js` Datei.

8.  Fügen Sie das neue `Cordova.plist` -Datei in Ihrem Projekt. Dies ist notwendig, da die Core-Plugin-Dienst-Namen ändern müssen, um die für eine einheitliche Cordova JavaScript-Datei (von Android und BlackBerry, übereinstimmen`cordova-js`).

9.  Alle Einstellungen, **Plugins** und **ExternalHosts** Einträge, die Sie in Ihrem **gesicherten Cordova.plist** in das neue hatten zu integrieren`Cordova.plist`.

10. Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `AppDelegate.h` und `AppDelegate.m` in das neue `AppDelegate` Dateien. `UIWebViewDelegate`Oder `CDVCommandDelegate` code in `AppDelegate.m` muss in `MainViewController.m` jetzt (siehe auskommentierte Abschnitte in der Datei).

11. Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `MainViewController.h` und `MainViewController.m` in die neuen MainViewController-Dateien.

12. Klicken Sie auf das Projektsymbol in der Projekt-Navigator, wählen Sie das **Projekt**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

13. Geben Sie **Compiler für C / C + + / Objective-C** in das Suchfeld ein.

14. Wählen Sie den **Apple LLVM Compiler 3.1** -Wert.

## Update 1.4.x-Projekten auf 1.5.0

1.  Installieren Sie Cordova 1.5.0.

2.  Erstellen Sie ein neues Projekt, und führen Sie es einmal. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

3.  Kopie der `www/cordova-1.5.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/phonegap-1.4.x.js` Datei.

4.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue Cordova hinzu `cordova-1.5.0.js` Datei.

5.  Finden Sie `PhoneGap.framework` in Ihrem Projekt-Navigator, wählen Sie es.

6.  Geben Sie den Schlüssel **Löschen** und Löschen der `PhoneGap.framework` Verweis in der Projekt-Navigator.

7.  Geben Sie die **Option-Befehl-A** -Tastenkombination, die drop-down-ein Blatt zu dem Projekt (die **Dateien hinzufügen...** -Blatt) Dateien hinzufügen sollten. Stellen Sie sicher, dass das Optionsfeld **erstellt Gruppen für alle hinzugefügten Ordner** ausgewählt ist.

8.  Geben Sie die Tastenkombination **Umschalt-Befehl-G** , drop-down-ein weiteres Blatt für Sie zu einem Ordner gehen sollte (die **gehen in den Ordner:** Blatt).

9.  Geben Sie `/Users/Shared/Cordova/Frameworks/Cordova.framework` in die **gehen in den Ordner:** Blatt und drücken Sie dann die Schaltfläche " **Go** ".

10. Drücken Sie die Taste " **Hinzufügen** " in dem **Dateien hinzufügen...** -Blatt.

11. Wählen Sie `Cordova.framework` in der Projektnavigator.

12. Geben Sie die **Option-Befehl-1** -Tastenkombination, um die **Datei Inspector** -Serie.

13. Wählen Sie **Absoluter Pfad** in der **Datei-Inspektor** für die Drop-Down-Menü für **Standort**.

14. Geben Sie die **Option-Befehl-A** -Tastenkombination, die drop-down-ein Blatt zu dem Projekt (die **Dateien hinzufügen...** -Blatt) Dateien hinzufügen sollten. Stellen Sie sicher, dass das Optionsfeld **erstellt Gruppen für alle hinzugefügten Ordner** ausgewählt ist.

15. Geben Sie die Tastenkombination **Umschalt-Befehl-G** , drop-down-ein weiteres Blatt für Sie zu einem Ordner gehen sollte (die **gehen in den Ordner:** Blatt).

16. Geben Sie `~/Documents/CordovaLib/Classes/deprecated` in die **gehen in den Ordner:** Blatt und drücken Sie dann die Schaltfläche " **Go** ".

17. Drücken Sie die Taste " **Hinzufügen** " in dem **Dateien hinzufügen...** -Blatt.

18. In Ihrem `AppDelegate.h` , `AppDelegate.m` , und `MainViewController.h` Dateien, ersetzen die gesamte `#ifdef PHONEGAP_FRAMEWORK` -block mit:
    
        #import "CDVDeprecated.h"
        

19. Klicken Sie auf das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie Ihr **Ziel**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

20. Suche nach **Framework-Suchpfade**.

21. Ersetzen Sie den vorhandenen Wert mit`/Users/Shared/Cordova/Frameworks`.

22. Suche nach **Präprozessor-Makros**.

23. Für den ersten (zusammengesetzten) Wert, ersetzen Sie den Wert mit **CORDOVA_FRAMEWORK = YES**.

24. Wählen Sie die Registerkarte **Build Phasen** .

25. **Skript** zu erweitern.

26. Ersetzen Sie alle Vorkommen von **PhoneGap** mit **Cordova**.

27. Finden Sie Ihre `PhoneGap.plist` in der Projekt-Navigator Datei, und klicken Sie auf den Dateinamen eingeben Name Bearbeitungsmodus.

28. Benennen Sie `PhoneGap.plist` auf`Cordova.plist`.

29. Mit der rechten Maustaste auf `Cordova.plist` und wählen Sie **Öffnen als → Quellcode**.

30. Drücken Sie **Option-Command-F**, wählen Sie **ersetzen** aus der Dropdown-Liste oben links im Quellcodefenster.

31. Geben Sie `com.phonegap` für die Zeichenfolge suchen und `org.apache.cordova` für die Zeichenfolge ersetzen und drücken Sie dann die Schaltfläche " **Alle ersetzen** ".

32. Geben Sie **PG** die Suchzeichenfolge und **CDV** für die Zeichenfolge ersetzen, und drücken Sie die Schaltfläche " **Alle ersetzen** ".

33. Drücken Sie **Befehl-B** baut. Du hast noch Abwertungen, die Sie in Zukunft loswerden können (siehe `CDVDeprecated.h` . Z. B. ersetzen-Klassen in Ihrem Code, PG * CDV * verwendet).

## 1.4.1 Upgrade 1.4.0-Projekten

1.  Installieren Sie Cordova 1.4.1.

2.  Erstellen Sie eine Sicherungskopie der`MainViewController.m`.

3.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

4.  Kopie der `MainViewController.m` Datei aus dem neuen Projekt in das 1.4.0-based-Projekt-Verzeichnis auf der Festplatte, die alte Datei ersetzen (backup Ihrer Dateien zuerst aus Schritt 2 oben).

5.  Fügen Sie die `MainViewController.m` Datei in das Xcode-Projekt.

6.  Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `MainViewController.m` in die neue Datei.

7.  Aktualisierung der `phonegap-1.4.0.js` Datei ist optional, in der JavaScript zwischen 1.4.0 und 1.4.1 hat sich nichts geändert.

## Upgrade 1.3.0 Projekte 1.4.0

1.  Cordova 1.4.0 zu installieren.

2.  Erstellen Sie eine Sicherungskopie von `AppDelegate.m` und `AppDelegate.h` in Ihrem Projekt.

3.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

4.  Kopieren Sie diese Dateien aus dem neuen Projekt in Ihr 1.3.0-based-Projekt-Verzeichnis auf der Festplatte ersetzt alle alten Dateien (sichern Sie Ihre Dateien zuerst aus Schritt 2 oben):
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Fügen Sie alle die `MainViewController` Dateien in das Xcode-Projekt.

6.  Kopie der `www/phonegap-1.4.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/phonegap-1.3.0.js` Datei.

7.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `phonegap-1.4.0.js` Datei.

8.  Fügen Sie einen neuen Eintrag unter `Plugins` in der `PhoneGap.plist` Datei. Der Schlüssel ist `com.phonegap.battery` und der Wert ist`PGBattery`.

9.  Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `AppDelegate.h` und `AppDelegate.m` in die neuen AppDelegate-Dateien.

## Upgrade 1.2.0 Projekte 1.3.0

1.  Installieren Sie Cordova 1.3.0.

2.  Erstellen Sie eine Sicherungskopie von `AppDelegate.m` und `AppDelegate.h` in Ihrem Projekt.

3.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

4.  Kopieren Sie diese Dateien aus dem neuen Projekt in Ihr 1.2.0-based-Projekt-Verzeichnis auf der Festplatte ersetzt alle alten Dateien (sichern Sie Ihre Dateien zuerst aus Schritt 2 oben):
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Fügen Sie alle die `MainViewController` Dateien in das Xcode-Projekt.

6.  Kopie der `www/phonegap-1.3.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/phonegap-1.2.0.js` Datei.

7.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `phonegap-1.3.0.js` Datei.

8.  Fügen Sie einen neuen Eintrag unter `Plugins` in der `PhoneGap.plist` Datei. Der Schlüssel ist `com.phonegap.battery` und der Wert ist`PGBattery`.

9.  Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `AppDelegate.h` und `AppDelegate.m` in die neuen AppDelegate-Dateien.

## Upgrade 1.1.0 Projekte 1.2.0

1.  Installieren Sie Cordova 1.2.0.

2.  Erstellen Sie eine Sicherungskopie von `AppDelegate.m` und `AppDelegate.h` in Ihrem Projekt.

3.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

4.  Kopieren Sie diese Dateien aus dem neuen Projekt in Ihr 1.1.0-based-Projekt-Verzeichnis auf der Festplatte ersetzt alle alten Dateien (sichern Sie Ihre Dateien zuerst aus Schritt 2 oben):
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Fügen Sie alle die `MainViewController` Dateien in das Xcode-Projekt.

6.  Kopie der `www/phonegap-1.2.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/phonegap-1.1.0.js` Datei.

7.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `phonegap-1.2.0.js` Datei.

8.  Fügen Sie einen neuen Eintrag unter `Plugins` in der `PhoneGap.plist` Datei. Der Schlüssel ist `com.phonegap.battery` und der Wert ist`PGBattery`.

9.  Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `AppDelegate.h` und `AppDelegate.m` in die neuen AppDelegate-Dateien.

## Upgrade 1.0.0 auf 1.1.0 Projekte

1.  Installieren Sie Cordova 1.1.0.

2.  Erstellen Sie eine Sicherungskopie von `AppDelegate.m` und `AppDelegate.h` in Ihrem Projekt.

3.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

4.  Kopieren Sie diese Dateien aus dem neuen Projekt in Ihr 1.0.0-based-Projekt-Verzeichnis auf der Festplatte ersetzt alle alten Dateien (sichern Sie Ihre Dateien zuerst aus Schritt 2 oben):
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Fügen Sie alle die `MainViewController` Dateien in das Xcode-Projekt.

6.  Kopie der `www/phonegap-1.1.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/phonegap-1.0.0.js` Datei.

7.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `phonegap-1.1.0.js` Datei.

8.  Fügen Sie einen neuen Eintrag unter `Plugins` in der `PhoneGap.plist` Datei. Der Schlüssel ist `com.phonegap.battery` und der Wert ist`PGBattery`.

9.  Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `AppDelegate.h` und `AppDelegate.m` in die neuen AppDelegate-Dateien.

## Upgrade 0.9.6 Projekte 1.0.0

1.  Cordova 1.0.0 installiert.

2.  Erstellen Sie eine Sicherungskopie von `AppDelegate.m` und `AppDelegate.h` in Ihrem Projekt.

3.  Erstellen Sie ein neues Projekt. Sie benötigen einen Teil der Vermögensgegenstände aus diesem neuen Projekt.

4.  Kopieren Sie diese Dateien aus dem neuen Projekt in Ihr 0.9.6-based-Projekt-Verzeichnis auf der Festplatte ersetzt alle alten Dateien (sichern Sie Ihre Dateien zuerst aus Schritt 2 oben):
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  Fügen Sie alle die `MainViewController` Dateien in das Xcode-Projekt.

6.  Kopie der `www/phonegap-1.0.0.js` Datei aus dem neuen Projekt in Ihr `www` Verzeichnis und löschen Ihre `www/phonegap-0.9.6.js` Datei.

7.  Aktualisieren von Cordova Skriptverweis in Ihre `www/index.html` Datei (und alle anderen Dateien, die den Skriptverweis enthalten) auf die neue hinzu `phonegap-1.0.0.js` Datei.

8.  Fügen Sie einen neuen Eintrag unter `Plugins` in der `PhoneGap.plist` Datei. Der Schlüssel ist `com.phonegap.battery` und der Wert ist`PGBattery`.

9.  Integrieren Sie Projekt-spezifischen Code, die Sie in Ihrem gesicherten `AppDelegate.h` und `AppDelegate.m` in die neuen AppDelegate-Dateien.