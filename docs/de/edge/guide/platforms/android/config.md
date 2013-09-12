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

# Android-Konfiguration

Die Datei `config.xml` steuert verschiedene Cordova-Einstellungen. Diese gelten in der Anwendung und je CordovaWebView-Instanz.

## `<preference>`

Verschiedene andere Einstellungen (als `<preference>` Markierungen) Standard auf vorhandene Anwendungen nicht zu brechen. Die verfügbaren Einstellungen sind:

*   `useBrowserHistory`(Boolean, wird standardmäßig auf `true` ): Legen Sie auf `false` Wenn Sie das Geschichte-Shim verwenden, die verwendet wurde, um den Hashtag-Fehler im Android 3.x vor Kontrollverlust Geschichte umgehen möchten. (Hinweis: Diese Einstellung wird im April 2013 veraltet sein)

*   `loadingDialog`: Zeigen Sie einen native laden-Dialog, wenn die app laden. Der Wert Format ist *Titel, Nachricht*

*   `loadingPageDialog`: Zeigen Sie einen native laden-Dialog, wenn Unterseiten zu laden. Der Wert Format ist *Titel, Nachricht*

*   `errorUrl`: Legen Sie die Error-Page für Ihre Anwendung. Sollte in Ihrem Android Projekt in befinden`file://android_asset/www/`

*   `backgroundColor`: Legen Sie die Hintergrundfarbe für Ihre Anwendung. Unterstützt einen 4-Byte-hex-Wert mit dem ersten Byte, alpha-Wert und die folgenden drei Bytes mit standard-RGB-Werten darstellt. Z. B. `0x00000000` ist schwarz.

*   `loadUrlTimeoutValue`: Wieviel Zeit Cordova sollten vor dem Auslösen eines Timeout-Fehlers über die Anwendung warten.

*   `keepRunning`(Boolean, wird standardmäßig auf `true` ): bestimmt, ob Cordova bleibt im Hintergrund laufen.

*   `splashscreen`: Der Name der Datei abzüglich ihrer Erweiterung in das `res/drawable` Verzeichnis. Wenn Sie mehrere Anlagen haben, müssen sie alle diese gemeinsamen Namen in die entsprechenden Verzeichnisse austauschen.

*   `disallowOverscroll`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` um den Schein zu deaktivieren, wenn ein Benutzer über den Rand der Webview blättert.

## `<plugin>`

Android unterstützt die Verwendung von `<feature>` als Analoga zu `<plugin>` Elemente.