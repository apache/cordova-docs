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

title: Windows Phone 8,0 Webansichten für
---

# Windows Phone 8,0 Webansichten für

Diese Anleitung zeigt, wie eine Cordova-fähigen WebView Komponente innerhalb einer größeren Windows Phone 8.0-Anwendung einbetten.

Um diese Anweisungen befolgen, stellen Sie sicher, dass Sie die neueste Cordova-Verteilung. Von [cordova.apache.org](http://cordova.apache.org) herunterladen Sie und entpacken Sie des Windows Phone 8.0-Pakets (Cordova-wp8-*.zip).

  1. Navigieren Sie zu des Pakets `wp8/framework` Verzeichnis und Build `WPCordovaClassLib.sln` . Es schafft die`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. Kopie der `WPCordovaClassLib.dll` Datei in des Windows Phone 8-Projekts `/libs` Verzeichnis und `WPCordovaClassLib.dll` zu Ihrem Projekt über `Project->References->Add Reference` . Alternativ können Sie direkt verweisen die `wp8/framework/WPCordovaClassLib.csproj` Datei.

  3. Fügen Sie `CordovaView` zu Ihrer Seite (z. B. Komponente`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. Kopie `common/www/cordova.js` zusammen mit HTML und JavaScript-Dateien der Anwendung für des Windows Phone 8-Projekts `html` Verzeichnis und fügen Sie neue Dateien zum Projekt.

  5. Kopie der `wp8/template/config.xml` auf Root-Verzeichnis des Projekts und

Obige Anleitung wird link nur Kernkomponenten Cordova, finden Sie unter Using Plugman zu verwalten Plugins um Cordova Plugins zu verbinden.