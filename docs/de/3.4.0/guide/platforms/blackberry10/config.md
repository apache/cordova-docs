---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# BlackBerry 10 Konfiguration

Die `config.xml` Datei steuert eine app-Grundeinstellungen, die für jede Anwendung und CordovaWebView Instanz gelten. In diesem Abschnitt Informationen-Einstellungen, die nur für BlackBerry 10 gelten baut. Finden Sie die Datei config.xml Datei Informationen auf globalen Konfigurations-Optionen.

*   `ChildBrowser`( `disable` oder Standard `enable` ): Kind-Browser-Fenster deaktiviert. Standardmäßig starten apps ein sekundäre Browser-Fenster zum Anzeigen von Ressourcen Zugriff über `window.open()` oder durch Angabe eines `_blank` Anker Ziel. Geben Sie `disable` dieses Standardverhalten überschreiben.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` oder Standard `disable` ): ermöglicht den Popup-Blocker, die Aufrufe von verhindert `window.open()` . Standardmäßig zeigen Popups in einem Kind-Browserfenster. Wenn Sie die Einstellung auf `enable` verhindert, dass es überhaupt anzeigt.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` oder Standard `enable` ): Legen Sie auf `disable` Web-Sicherheits-Einstellungen, den Zugriff auf remote-Inhalte aus unbekannten Quellen zu überschreiben. Diese Einstellung soll wie vor Entwicklung Bequemlichkeit nur, also dem Entfernen Verpackung Ihrer app für den Vertrieb. Für die veröffentlichten app sollte alle URIs bekannt und auf der weißen Liste mithilfe der `<access>` in die Domain-Whitelist-Guide beschriebene Element.
    
        <preference name="WebSecurity" value="disable"/>