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

title: Windows Phone 8,0 WebViews
---

# Windows Phone 8,0 WebViews

Ce guide montre comment intégrer un composant WebView Cordova-activée dans une application Windows Phone 8.0 plus grande.

Pour suivre ces instructions, vérifiez que vous avez la dernière distribution de Cordova. Téléchargez-le sur [cordova.apache.org](http://cordova.apache.org) et décompressez son Windows Phone 8.0 (cordova-wp8-*.zip).

  1. Accédez à du package `wp8/framework` répertoire et build `WPCordovaClassLib.sln` . Il crée le`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. Copie le `WPCordovaClassLib.dll` fichier dans le projet Windows Phone 8 `/libs` répertoire et inclure `WPCordovaClassLib.dll` à votre projet via `Project->References->Add Reference` . Alternativement, vous pouvez référencer directement le `wp8/framework/WPCordovaClassLib.csproj` fichier.

  3. Ajouter `CordovaView` composant à votre page (par exemple,`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. Copie `common/www/cordova.js` ainsi que les fichiers HTML et JavaScript de l'application pour le projet Windows Phone 8 `html` répertoire et inclure de nouveaux fichiers au projet.

  5. Copie le `wp8/template/config.xml` au répertoire racine du projet et

Instructions ci-dessus va lier uniquement les composants Cordova core, voir Plugman à l'aide à gérer les Plugins afin de relier les plugins de Cordova.