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

Die `config.xml` Datei steuert eine app-Grundeinstellungen, die für jede Anwendung und CordovaWebView Instanz gelten. Dieser Abschnitt beschreibt die Einstellungen, die nur auf Android Builds gelten. Finden Sie die Datei config.xml Datei Informationen auf globalen Konfigurations-Optionen.

*   `KeepRunning`(Boolean, wird standardmäßig auf `true` ): bestimmt, ob die Anwendung bleibt auch nach im Hintergrund läuft ein `pause` -Ereignis ausgelöst. Hinweis: Diese Einstellung auf False wird nicht töten die app nach einer Pause, wird es nur Ausführung von Code in der Webview Cordova zu stoppen, während die app im Hintergrund ist.
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(Nummer in Millisekunden, standardmäßig `20000` , 20 Sekunden): beim Laden einer Seite, die Zeitspanne zu warten, bevor ein Timeoutfehler auslösen. In diesem Beispiel gibt 10 Sekunden anstatt 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`(string, der Standardwert ist `splash` ): der Name der Datei abzüglich ihrer Erweiterung in das `res/drawable` Verzeichnis. Verschiedene Vermögenswerte müssen diesem gemeinsamen Namen in verschiedenen Unterverzeichnissen teilen.
    
        <preference name="SplashScreen" value="mySplash"/>
        

*   `SplashScreenDelay`(Zahl in Millisekunden, der Standardwert ist `3000` ): die Zeitspanne zeigt das Bild des Begrüßungsbildschirms.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(Boolean, wird standardmäßig auf `true` ): Steuerelemente ob Seiten innerhalb einer InAppBrowser geöffnet können Zugriff auf die gleichen LocalStorage und WebSQL Speicher als Seiten mit Standardbrowser geöffnet.
    
        <preference name="InAppBrowserStorageEnabled" value="true"/>
        

*   `LoadingDialog`(string, der Standardwert ist `null` ): Wenn gesetzt, zeigt einen Dialog mit dem angegebenen Titel und Nachricht und einen Spinner, wenn Sie die erste Seite einer Anwendung zu laden. Titel und Nachricht sind durch Kommas getrennt in dieser Wertzeichenfolge, und das Komma wird entfernt, bevor das Dialogfeld angezeigt wird.
    
        <preference name="LoadingDialog" value="My Title,My Message"/>
        

*   `LoadingPageDialog`(string, der Standardwert ist `null` ): dasselbe wie `LoadingDialog` , aber für das Laden von jeder Seite nach der ersten Seite in der Anwendung.
    
        <preference name="LoadingPageDialog" value="My Title,My Message"/>
        

*   `ErrorUrl`(URL, wird standardmäßig auf `null` ): Wenn gesetzt, wird die referenzierte Seite ein Fehler in der Anwendung statt ein Dialogfeld mit dem Titel "Application Error" angezeigt.
    
        <preference name="ErrorUrl" value="myErrorPage.html"/>
        

*   `ShowTitle`(Boolean, wird standardmäßig auf `false` ): den Titel am oberen Rand des Bildschirms anzeigen.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(string, der Standardwert ist `ERROR` ): legt die minimale Protokollebene durch welches Protokoll Nachrichten aus Ihrer Anwendung gefilterte. Gültige Werte sind `ERROR` , `WARN` , `INFO` , `DEBUG` , und`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>
        

*   `SetFullscreen`(Boolean, wird standardmäßig auf `false` ): wie die `Fullscreen` Parameter in der globalen Konfiguration dieser XML-Datei. Dieses Android-spezifische Element ist veraltet, zu Gunsten der globalen `Fullscreen` Element, und wird in einer zukünftigen Version entfernt.