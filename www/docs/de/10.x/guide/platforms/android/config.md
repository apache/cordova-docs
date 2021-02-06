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

title: Android Konfiguration
---

# Android Konfiguration

Die `config.xml` Datei steuert eine app-Grundeinstellungen, die für jede Anwendung und CordovaWebView Instanz gelten. Dieser Abschnitt beschreibt die Einstellungen, die nur auf Android Builds gelten. Informationen über globale Konfigurationsoptionen finden Sie unter [die Datei config.xml Datei][1] .

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(Boolean, wird standardmäßig auf `true` ): bestimmt, ob die Anwendung bleibt auch nach im Hintergrund läuft ein `[pause](../../../cordova/events/events.pause.html)` -Ereignis ausgelöst. Diese `false` tötet nicht die app nach einem `[pause](../../../cordova/events/events.pause.html)` Ereignis, sondern einfach hält Ausführung von Code innerhalb der Webview Cordova, während die app im Hintergrund ist.

        <preference name="KeepRunning" value="false"/>


*   `LoadUrlTimeoutValue`(Nummer in Millisekunden, standardmäßig `20000` , 20 Sekunden): beim Laden einer Seite, die Zeitspanne zu warten, bevor ein Timeoutfehler auslösen. In diesem Beispiel gibt 10 Sekunden anstatt 20:

        <preference name="LoadUrlTimeoutValue" value="10000"/>


*   `SplashScreen`(string, der Standardwert ist `splash` ): der Name der Datei abzüglich ihrer Erweiterung in das `res/drawable` Verzeichnis. Verschiedene Vermögenswerte müssen diesem gemeinsamen Namen in verschiedenen Unterverzeichnissen teilen.

        <preference name="SplashScreen" value="mySplash"/>


*   `SplashScreenDelay`(Zahl in Millisekunden, der Standardwert ist `3000` ): die Zeitspanne zeigt das Bild des Begrüßungsbildschirms.

        <preference name="SplashScreenDelay" value="10000"/>


*   `InAppBrowserStorageEnabled`(Boolean, wird standardmäßig auf `true` ): Steuerelemente ob Seiten innerhalb einer InAppBrowser geöffnet können Zugriff auf die gleichen LocalStorage und WebSQL [Speicher](../../../cordova/storage/storage.html) als Seiten mit Standardbrowser geöffnet.

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

*   `AndroidLaunchMode`(string, der Standardwert ist `singleTop` ): legt die Aktivität `android:launchMode` Attribut. Dies ändert, was passiert, wenn die app aus app-Symbol oder Vorsatz gestartet und wird bereits ausgeführt. Gültige Werte sind `standard` , `singleTop` , `singleTask` ,`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>


*   `DefaultVolumeStream`(string, der Standardwert ist `default` , hat in Cordova-Android 3.7.0): setzt die Lautstärke Tasten Verknüpfen mit Hardware-Band. Standardmäßig ist das "call" für Handys und "Medien" für Tabletten. Wählen Sie hier "Medien" haben Ihre app-Lautstärke-Tasten, die immer die Medien-Lautstärke ändern. Beachten Sie, dass bei der Verwendung von Cordova's Media Plugin die Lautstärketasten dynamisch ändert, wenn alle Medienobjekte aktiv sind Lautstärke einstellen Medien.

*   `OverrideUserAgent` (String, nicht standardmäßig festgelegt): Wenn gesetzt, der Wert der alten UserAgent Webview ersetzen wird. Es ist hilfreich, um die Anforderung von app/Browser identifizieren, wenn entfernte Seiten anfordern. Verwendung mit Vorsicht, dies kann verursacht Compitiable Problem mit Webservern. Verwenden Sie für die meisten Fälle stattdessen AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent` (String, nicht standardmäßig festgelegt): Wenn gesetzt, der Wert bis zum Ende des alten UserAgent der Webview angefügt wird. Wenn Sie mit OverrideUserAgent zu verwenden, wird dieser Wert ignoriert.

        <preference name="AppendUserAgent" value="My Browser" />
