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

title: Amazon Fire OS Konfiguration
---

# Amazon Fire OS Konfiguration

Die `config.xml` Datei steuert eine app-Grundeinstellungen, die für jede Anwendung und CordovaWebView Instanz gelten. Dieser Abschnitt Informationen über Einstellungen, die nur für Amazon Fire OS gelten baut. Informationen über globale Konfigurationsoptionen finden Sie unter [die Datei config.xml Datei][1].

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(Boolean, wird standardmäßig auf `true` ): bestimmt, ob die Anwendung bleibt auch nach im Hintergrund läuft ein `[pause](../../../cordova/events/events.pause.html)` -Ereignis ausgelöst. Diese `false` tötet nicht die app nach einem `[pause](../../../cordova/events/events.pause.html)` Ereignis, sondern einfach hält Ausführung von Code innerhalb der Webview Cordova, während die app im Hintergrund ist.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`(URL, wird standardmäßig auf `null` ): Wenn gesetzt, wird die referenzierte Seite ein Fehler in der Anwendung statt ein Dialogfeld mit dem Titel "Application Error" angezeigt.
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`(string, der Standardwert ist `null` ): Wenn gesetzt, zeigt einen Dialog mit dem angegebenen Titel und Nachricht und einen Spinner, wenn Sie die erste Seite einer Anwendung zu laden. Titel und Nachricht sind durch Kommas getrennt in dieser Wertzeichenfolge, und das Komma wird entfernt, bevor das Dialogfeld angezeigt wird.
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`(string, der Standardwert ist `null` ): dasselbe wie `LoadingDialog` , aber für das Laden von jeder Seite nach der ersten Seite in der Anwendung.
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(Anzahl, Standard ist `20000` ): beim Laden einer Seite, die Zeitspanne zu warten, bevor ein Timeoutfehler auslösen. In diesem Beispiel gibt 10 Sekunden anstatt 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Der Name der Datei abzüglich ihrer Erweiterung in das `res/drawable` Verzeichnis. Verschiedene Vermögenswerte müssen diesem gemeinsamen Namen in verschiedenen Unterverzeichnissen teilen.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(Nummer, der Standardwert ist `5000` ): die Zeitspanne zeigt das Bild des Begrüßungsbildschirms.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `ShowTitle`(Boolean, wird standardmäßig auf `false` ): den Titel am oberen Rand des Bildschirms anzeigen.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(string, der Standardwert ist `ERROR` ): legt die minimale Protokollebene durch welches Protokoll Nachrichten aus Ihrer Anwendung gefilterte. Gültige Werte sind `ERROR` , `WARN` , `INFO` , `DEBUG` , und`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>