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

Die `config.xml` Datei steuert verschiedene Cordova-Einstellungen. Diese gelten für die Anwendung. Die `config.xml` -Datei befindet sich im `<project folder>/<www>` Verzeichnis.

## `<preference>`

Verschiedene Einstellungen (als `<preference>` Markierungen) Standard auf vorhandene Anwendungen nicht zu brechen. Die verfügbaren Einstellungen sind:

*   `autoHideSplashScreen`: ( `true` oder `false` ): Legen Sie auf `false` zu steuern, wenn das Splashscreen über eine JavaScript-API ausgeblendet ist. Diese Einstellung wird standardmäßig auf true fest.

*   `backgroundColor`: Gibt die Hintergrundfarbe Ihrer Anwendung. Der Wert muss einen Farbwert in der ARGB-Pixel-Format mit 8 hexadezimale Ziffern angeben.

*   `childBrowser`: Kind-Browser-Fenster deaktiviert. Standardmäßig, wenn der Inhalt versucht, eine Ressource in einem neuen Fenster oder Tab öffnen (mithilfe von window.open() oder durch Angabe von `_blank` als Ziel eines Ankers), die WebWorks app öffnet sich eine sekundäre Browser-Fenster, um die Ressource anzuzeigen. Dieses Feature ist standardmäßig aktiviert. Der Wert muss angeben `disable` , die oben genannten Maßnahmen von Auftritt zu verhindern.

*   `hideKeyboardFormAccessoryBar`: ( `enable` oder `disable` ) deaktiviert die Tastatur Form Zubehör Bar in ein HTML-Formular. Die Tastatur-Form-Zubehör-Bar ist eine Reihe Tasten ("zurück", "Next" und "Absenden"), mit der Benutzer ein Formular navigieren kann. Standardmäßig Wenn eine WebWorks app ein HTML-Formular enthält, und ein `<input>` Element den Fokus erhält, WebWorks zeigt diese Form-Zubehör-Bar. Mit dieser Funktion können Sie verhindern, dass Ihre app anzeigt die Form Zubehör Bar indem Wert als`enable`.

*   `orientation`: ( `auto` , `portrait` , oder `landscape` ) gibt die beständige Ausrichtung für Bildschirme in Ihrer app. Standardmäßig Wenn Sie eine Bildschirm-Ausrichtung nicht angeben ist die Ausrichtung auf auto festgelegt.

*   `popupBlocker`: Ermöglicht den Popup-Blocker. Standardmäßig werden alle Popups von BlackBerry WebWorks apps in einem Kind-Browserfenster angezeigt. Sie können verhindern, dass Pop-ups anzeigen ohne Eingreifen des Benutzers durch den Popup-Blocker aktivieren. Dies geschieht indem Wert als`enable`.

*   `webSecurity`: Deaktiviert web-Sicherheit. Web-Sicherheit deaktivieren, können Sie auf Remoteinhalt aus unbekannten Quellen während der Entwicklung. Vor dem Verpacken Ihre app für den Vertrieb, sollten Sie diese Einstellung entfernen. Dieses Feature soll lediglich eine Entwicklung der Bequemlichkeit. In der Produktion, sollten alle URIs bekannt sein und sollte auf der weißen Liste werden mithilfe der `<access>` Element. Deaktivieren, geben Sie Wert als`disable`.