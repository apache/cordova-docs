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

title: iOS Webansichten für
---

# iOS Webansichten für

Beginnend mit Cordova 1.4, können Cordova als Komponente in den iOS-Anwendungen Sie. Diese Komponente ist mit dem Codenamen "Cleaver".

Neue Cordova-basierte Anwendungen mithilfe der bereitgestellten in Cordova 1.4 oder stärkere Nutzung Cleaver Xcode-Vorlage erstellt. (Die Vorlage ist Cleaver des Referenz-Implementierung.)

Cordova 2.0.0 und nachfolgende Versionen unterstützen nur die Teilprojekt-basierte Cleaver-Implementierung.

## Voraussetzungen

*   Cordova 2.3.0 oder größer

*   Xcode 4.5 oder höher

*   `config.xml`[Datei](../../../cordova/file/fileobj/fileobj.html) (aus einem neu erstellten iOS-Projekt)

## Hinzufügen von Cleaver zum Xcode Projekt (CordovaLib-Teilprojekt)

1.  Herunterladen Sie und extrahieren Sie die Cordova-Quelle zu einem permanenten Speicherort auf Ihrer Festplatte, zum Beispiel in`~/Documents/Cordova`.

2.  Beenden Sie Xcode, wenn es geöffnet ist.

3.  Terminal.app verwenden, navigieren Sie zu dem Verzeichnis, in dem Sie die heruntergeladene Quelle oben setzen.

4.  Kopie der `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html) in das Projektverzeichnis auf der Festplatte (siehe die oben genannten Voraussetzungen).

5.  Drag & drop die `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html) in das Projekt-Navigator Xcode.

6.  Wählen Sie das Optionsfeld **erstellen Gruppen für alle hinzugefügten Ordner** und drücken Sie die Taste **Beenden**.

7.  Drag & drop die `CordovaLib.xcodeproj` [Datei](../../../cordova/file/fileobj/fileobj.html) in das Projekt-Navigator Xcode (aus dem ständigen Verzeichnis Lage oben, und es sollte in der `CordovaLib` Unterverzeichnis).

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  Geben Sie die **Option-Befehl-1** -Tastenkombination, um die **Datei Inspector** -Serie.

10. Wählen Sie **Relative Gruppe** im **Datei-Inspektor** für die Drop-Down-Menü für **Lage**.

11. Wählen Sie das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie Ihr **Ziel**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

12. Fügen Sie `-all_load` und `-Obj-C` für den Wert **Anderer Linker-Flags** .

13. Klicken Sie auf das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie Ihr **Ziel**, dann wählen Sie die Registerkarte **Build Phasen** .

14. **Link-Binärdateien mit Bibliotheken** zu erweitern.

15. Wählen Sie das **+** Schaltfläche, und fügen Sie folgende **Rahmenbedingungen**. Optional in der Projekt-Navigator, verschieben Sie sie unter der **Frameworks** -Gruppe):
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

16. **Ziel Abhängigkeiten**, die wie folgt beschriftet, wenn Sie mehrere Felder haben-Top-Box zu erweitern!

17. Wählen Sie das **+** Schaltfläche, und fügen Sie das `CordovaLib` Produkt zu bauen.

18. **Link-Binärdateien mit Bibliotheken**, die wie folgt beschriftet, wenn Sie mehrere Felder haben-Top-Box zu erweitern!

19. Wählen Sie das **+** hinzufügen, und klicken`libCordova.a`.

20. Legen Sie die Voreinstellung "Xcode" **Xcode "Einstellungen" → Standorte → abgeleitete Daten → Advanced...** auf **Unique**.

21. Wählen Sie das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie Ihr **Ziel**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

22. Suche nach **Header-Suchpfade**. Fügen Sie für diese Einstellung diese drei Werte unten (mit Anführungszeichen):
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    Mit Cordova 2.1.0 `CordovaLib` zur **Automatischen Reference Counting (ARC)**verwenden aktualisiert wurde. Sie nicht müssen upgrade auf **ARC** mithilfe von CordovaLib, aber wenn Sie, aktualisieren Sie das Projekt zur Verwendung von **ARC möchten**, verwenden Sie bitte den Xcode-Migrations-Assistenten aus dem Menü: **Bearbeiten → → umgestalten Convert in Objective-C-Bogen...**, **libCordova.a aufzuheben**, führen Sie den Assistenten bis zum Abschluss.

## Verwendung von CDVViewController im code

1.  Dieser Header hinzufügen:
    
        #import <Cordova/CDVViewController.h>
        

2.  Instanziieren eines neuen `CDVViewController` , und behalten Sie es irgendwo (z.B. auf eine Eigenschaft in der Klasse):
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*OPTIONAL*) Festlegen der `wwwFolderName` -Eigenschaft (standardmäßig `www` ):
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*OPTIONAL*) Festlegen die Startseite in Ihrem "config.xml", der `<content>` Tag.
    
        <content src="index.html" />
        
    
    OR
    
        <content src="http://apache.org" />
        

5.  (*OPTIONAL*) Festlegen der `useSplashScreen` -Eigenschaft (standardmäßig `NO` ):
    
        viewController.useSplashScreen = YES;
        

6.  Legen Sie den **Ansicht-Frame** (immer gesetzt dies als die letzte Eigenschaft):
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Fügen Sie Cleaver zu Ihrer Ansicht:
    
        [myView addSubview:viewController.view];
        

## Hinzufügen Ihres Vermögens HTML, CSS und JavaScript

1.  Erstellen Sie ein neues Verzeichnis in Ihrem Projekt auf der Festplatte, `www` zum Beispiel.

2.  Setzen Sie Ihr Vermögen für HTML, CSS und JavaScript, in dieses Verzeichnis.

3.  Drag & drop das Verzeichnis in dem Projekt-Navigator Xcode.

4.  Wählen Sie das Optionsfeld **Erstellen Ordner Verweise für alle hinzugefügten Ordner** .

5.  Legen Sie die entsprechenden `wwwFolderName` und `startPage` Eigenschaften für den Ordner, die Sie ursprünglich erstellt, oder verwenden Sie die Standardeinstellungen (siehe vorheriger Abschnitt) Wenn Sie instanziieren der`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"