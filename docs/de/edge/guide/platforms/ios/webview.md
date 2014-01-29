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

# iOS Webansichten für

In diesem Abschnitt veranschaulicht, wie eine Cordova-fähigen WebView Komponente innerhalb einer größeren iOS-Anwendung einbetten. Details darüber, wie diese Komponenten miteinander kommunizieren können finden Sie unter Application Plugins.

Unterstützung für iOS Webansichten für begann mit Cordova Version 1.4, mit einer `Cleaver` Komponente, für die die Xcode-Vorlage als Referenzimplementierung dient. Cordova 2.0 und höheren Versionen unterstützen nur die Teilprojekt-basierte Cleaver-Implementierung.

Diese Anweisungen erfordern mindestens Cordova 2.3 und Xcode 4.5, zusammen mit einer `config.xml` Datei aus einem neu erstellten iOS-Projekt. Können Sie das Verfahren in der Befehlszeilenschnittstelle ein neues Projekt erstellen, dann erhalten Sie die `config.xml` -Datei im Unterverzeichnis innerhalb der benannten Anwendung`platforms/ios`.

Um diese Anweisungen befolgen, stellen Sie sicher, dass Sie die neueste Cordova-Verteilung. Von [cordova.apache.org][1] herunterladen Sie und entpacken Sie das iOS-Paket.

 [1]: http://cordova.apache.org

## Die Xcode-Projekt (CordovaLib-Teilprojekt) Cleaver hinzufügen

1.  Beenden Sie Xcode, wenn es geöffnet ist.

2.  Öffnen Sie ein Terminal und wechseln Sie in das Quellverzeichnis für Cordova iOS.

3.  Kopie der `config.xml` Datei in das Projektverzeichnis beschriebenen.

4.  Xcode öffnen und verwenden Sie den Finder, kopieren Sie die `config.xml` Datei in einem **Projekt-Navigator** -Fenster.

5.  Wählen Sie **Create-Gruppen für alle hinzugefügten Ordner** und drücken Sie die Taste **Beenden**.

6.  Verwenden Sie den Finder, kopieren Sie die `CordovaLib/CordovaLib.xcodeproj` Datei in Xcodes **Projektnavigator**

7.  Wählen Sie `CordovaLib.xcodeproj` innerhalb der **Projektnavigator**.

8.  Geben Sie die **Option-Befehl-1** -Tastenkombination, um die **Datei Inspector** -Serie.

9.  Wählen Sie **Relative Gruppe** im **Datei-Inspektor** für die Drop-Down-Menü für **Lage**.

10. Wählen Sie das **Symbol "Projekt"** in der **Projekt-Navigator**, wählen Sie das **Ziel**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

11. Fügen Sie `-force_load` und `-Obj-C` für den Wert **Anderer Linker-Flags** .

12. Klicken Sie auf das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie das **Ziel**, dann wählen Sie die Registerkarte **Build Phasen** .

13. **Link-Binärdateien mit Bibliotheken** zu erweitern.

14. Wählen Sie das **+** Schaltfläche, und fügen Sie folgende **Rahmenbedingungen**. Optional in der **Projekt-Navigator**verschieben Sie unter der **Frameworks** -Gruppe:
    
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
        

15. **Ziel Abhängigkeiten**, das obere Feld mit diesem Label ist mehr als ein Feld zu erweitern.

16. Wählen Sie das **+** Schaltfläche, und fügen Sie das `CordovaLib` Produkt zu bauen.

17. **Link-Binärdateien mit den Bibliotheken**, im oberen Feld mit diesem Label ist mehr als ein Feld zu erweitern.

18. Wählen Sie das **+** hinzufügen, und klicken`libCordova.a`.

19. Legen Sie die **Xcode "Einstellungen" → Standorte → abgeleitete Daten → erweiterte...** , **einzigartige**.

20. Wählen Sie das **Symbol "Projekt"** in der Projekt-Navigator, wählen Sie Ihr **Ziel**, dann wählen Sie die Registerkarte **Einstellungen erstellen** .

21. Suche nach **Header-Suchpfade**. Fügen Sie für diese Einstellung diese drei Werte unterhalb, schliessen die Zitate:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    Ab Cordova 2.1.0 `CordovaLib` zur **Automatischen Reference Counting (ARC)**verwenden aktualisiert wurde. Du musst nicht ein upgrade auf **ARC** verwenden `CordovaLib` , aber wenn Sie das Projekt zur Verwendung von **ARC**aktualisieren möchten, verwenden Sie der Assistent für die Migration von Xcode die **Bearbeiten → umgestalten → umwandeln in Objective-C-Bogen...** im Menü **libCordova.a aufzuheben**, führen Sie den Assistenten bis zum Abschluss.

## Verwendung von CDVViewController

1.  Fügen Sie den folgenden Header:
    
        #import <Cordova/CDVViewController.h>
        

2.  Instanziieren eines neuen `CDVViewController` und behalten es irgendwo, z. B. auf eine Klasseneigenschaft:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  Optional können Sie festlegen der `wwwFolderName` -Eigenschaft, die standardmäßig auf `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  Optional können Sie festlegen die Startseite der `config.xml` Datei `<content>` tag, entweder eine lokale Datei:
    
        <content src="index.html" />
        
    
    ... oder einem remote-Standort:
    
        <content src="http://apache.org" />
        

5.  Optional können Sie festlegen der `useSplashScreen` -Eigenschaft, die standardmäßig auf `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  Legen Sie den **Ansicht-Frame**. Immer dies als die letzte Eigenschaft einrichten:
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Hinzufügen von Cleaver zur Ansicht:
    
        [myView addSubview:viewController.view];
        

## Hinzufügen von HTML, CSS und JavaScript Vermögenswerte

1.  Erstellen Sie ein neues Verzeichnis innerhalb des Projekts `www` zum Beispiel.

2.  Positionieren Sie HTML, CSS und JavaScript Posten in dieses Verzeichnis.

3.  Verwenden Sie den Finder, um das Verzeichnis in Xcodes **Projekt-Navigator** -Fenster kopieren.

4.  Wählen Sie **Erstellen Ordner Verweise für alle hinzugefügten Ordner**.

5.  Legen Sie die entsprechenden `wwwFolderName` und `startPage` Eigenschaften des Verzeichnisses, die Sie ursprünglich erstellt, oder verwenden Sie die Standardwerte (angegeben im vorherigen Abschnitt) beim Instanziieren der`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"