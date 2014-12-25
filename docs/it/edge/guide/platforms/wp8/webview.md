---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Windows Phone visualizzazioni 8,0 Web

Questa guida Mostra come incorporare un componente WebView Cordova abilitato all'interno di un'applicazione Windows Phone 8.0 più grande.

Per seguire queste istruzioni, assicuratevi di che avere l'ultima distribuzione di Cordova. Scaricare da [cordova.apache.org](http://cordova.apache.org) e decomprimere il pacchetto Windows Phone 8.0 (cordova-wp8-*. zip).

  1. Spostarsi del pacchetto `wp8/framework` directory e costruire `WPCordovaClassLib.sln` . Crea il`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. Copia il `WPCordovaClassLib.dll` file al progetto Windows Phone 8 `/libs` directory e includono `WPCordovaClassLib.dll` al progetto tramite `Project->References->Add Reference` . In alternativa, può fare riferimento direttamente al `wp8/framework/WPCordovaClassLib.csproj` file.

  3. Aggiungi `CordovaView` componente alla tua pagina (ad esempio,`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. Copia `common/www/cordova.js` insieme con i file dell'applicazione HTML e JavaScript per il progetto Windows Phone 8 `html` directory e comprendono nuovi file al progetto.

  5. Copia il `wp8/template/config.xml` nella directory radice del progetto e

Istruzioni di cui sopra saranno link componenti Cordova core solo, vedere utilizzando Plugman per gestire i plugin per collegare i plugins di Cordova.