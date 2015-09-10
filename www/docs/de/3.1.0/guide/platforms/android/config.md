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
---

# Android-Konfiguration

Die `config.xml` <a href="../../../cordova/file/fileobj/fileobj.html">Datei</a> steuert eine app-Grundeinstellungen, die für jede Anwendung und CordovaWebView Instanz gelten. Dieser Abschnitt beschreibt die Einstellungen, die nur auf Android Builds gelten. Finden Sie die <a href="../../../cordova/file/fileobj/fileobj.html">Datei</a> config.xml <a href="../../../cordova/file/fileobj/fileobj.html">Datei</a> Informationen auf globalen Konfigurations-Optionen.

*   `KeepRunning`(Boolean, wird standardmäßig auf `true` ): bestimmt, ob die Anwendung bleibt auch nach im Hintergrund läuft ein `pause` -Ereignis ausgelöst.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`: Gibt eine Fehlerseite, die als Reaktion auf standard-HTTP-Fehler im Bereich von 400-500 anzeigt. Platzieren Sie die angegebene <a href="../../../cordova/file/fileobj/fileobj.html">Datei</a> im obersten Verzeichnis enthält die Homepage und andere Web-Ressourcen.
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`: Zeigen Sie einen nativen Dialog, wenn die app laden. Der Wert Format ist *Titel, Nachricht*
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`: Zeigen Sie einen nativen Dialog, wenn Unterseiten innerhalb einer app laden. Der Wert Format ist *Titel, Nachricht*
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(Anzahl, Standard ist `20000` ): beim Laden einer Seite, die Zeitspanne zu warten, bevor ein Timeoutfehler auslösen. In diesem Beispiel gibt 10 Sekunden anstatt 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `<a href="../../../cordova/splashscreen/splashscreen.html">SplashScreen</a>`: Der Name der <a href="../../../cordova/file/fileobj/fileobj.html">Datei</a> abzüglich ihrer Erweiterung in das `res/drawable` Verzeichnis. Verschiedene Vermögenswerte müssen diesem gemeinsamen Namen in verschiedenen Unterverzeichnissen teilen.
    
        <preference name="<a href="../../../cordova/splashscreen/splashscreen.html">SplashScreen</a>" value="splash"/>
        

*   `<a href="../../../cordova/splashscreen/splashscreen.html">SplashScreen</a>Delay`(Nummer, der Standardwert ist `5000` ): die Zeitspanne zeigt das Bild des Begrüßungsbildschirms.
    
        <preference name="<a href="../../../cordova/splashscreen/splashscreen.html">SplashScreen</a>Delay" value="10000"/>