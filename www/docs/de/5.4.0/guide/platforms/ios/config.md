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

title: iOS Konfiguration
---

# iOS Konfiguration

Die `config.xml` Datei steuert eine app-Grundeinstellungen, die für jede Anwendung und CordovaWebView Instanz gelten. Dieser Abschnitt beschreibt die Einstellungen, die nur auf iOS-Builds zu gelten. Informationen über globale Konfigurationsoptionen finden Sie unter [die Datei config.xml Datei][1].

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` um ein Viewport Metatag entweder deaktivieren oder beschränken die Bandbreite der Benutzer zu skalieren, zu ermöglichen, die standardmäßig aktiviert ist.

        <preference name="EnableViewportScale" value="true"/>


    Platzieren Sie einen Viewport wie die folgende in den HTML-Code zu deaktivieren, Skalierung und passen Inhalte flexibel innerhalb der Darstellung WebView:

        < Meta Name = "Viewport" Content = "Breite = Gerät-breit, Initial-Scale = 1, Benutzer-skalierbare = No" / >


*   `MediaPlaybackAllowsAirPlay` (Boolean, standardmäßig auf `true festgelegt`): Air Play verhindern, in dieser Ansicht verwendet wird auf `false` festgelegt. Erhältlich in Standard UIWebView und WKWebView.

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>


*   `MediaPlaybackRequiresUserAction` (Boolean, standardmäßig auf `false`): um zu verhindern, dass HTML5-Videos oder Audios automatisch wiedergegeben werden, mit dem Attribut `Autoplay` oder per JavaScript auf `true` festgelegt.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>


*   `AllowInlineMediaPlayback` (Boolean, standardmäßig auf `false`): HTML5-Medienwiedergabe *Inline* innerhalb des Bildschirm-Layouts, mit Browser bereitgestellten Steuerelemente anstelle von native Steuerelemente angezeigt werden können auf `true` festgelegt. Damit dies funktioniert fügen Sie das `Webkit-Playsinline` -Attribut für alle `< video >` Elemente.

        <preference name="AllowInlineMediaPlayback" value="true"/>


*   `BackupWebStorage` (string, entweder `keine`, `lokalen`oder der Standard- `Wolke`): Legen Sie auf `Wolke` Web Speicherdaten-Backup über iCloud können. Legen Sie auf `lokalen` nur lokale Backups über iTunes Sync zu ermöglichen. Satz auf `none` zu verhindern, dass Web-Speicher-Sicherungen.

        <preference name="BackupWebStorage" value="local"/>


*   `TopActivityIndicator` (string, standardmäßig `gray`): steuert die Anzeige von das kleine rotierende-Symbol in der Statusleiste, die erhebliche Prozessoraktivitäten angibt. Gültige Werte sind `whiteLarge`, `white`und `gray`.

        <preference name="TopActivityIndicator" value="white"/>


*   `KeyboardDisplayRequiresUserAction` (Boolean, standardmäßig auf `true festgelegt`): auf `false` festgelegt, um die Tastatur angezeigt werden beim Aufrufen von `focus()` für Formularfelder zu ermöglichen.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>


*   `SuppressesIncrementalRendering` (Boolean, standardmäßig auf `false`): warten, bis alle Inhalte eingegangen ist, bevor es auf dem Bildschirm gerendert wird auf `true` festgelegt.

        <preference name="SuppressesIncrementalRendering" value="true"/>


*   `GapBetweenPages` (float, hat den Standardwert ``): die Größe der Lücke, zwischen Seiten in Punkt.

        <preference name="GapBetweenPages" value="0"/>


*   `PageLength` (float, hat den Standardwert ``): die Größe jeder Seite in Punkt in die Richtung, die die Seiten fließen. Wenn PaginationMode rechts nach links oder von links nach rechts, diese Eigenschaft stellt die Breite auf jeder Seite. Diese Eigenschaft stellt beim PaginationMode TopToBottom oder BottomToTop ist, die Höhe der einzelnen Seiten dar. Der Standardwert ist 0, was, dass das Layout die Größe des Viewports wird verwendet bedeutet, um die Dimensionen der Seite bestimmen.

        <preference name="PageLength" value="0"/>


*   `PaginationBreakingMode` (string, wird standardmäßig auf der `page`): gültige Werte sind `page` und `column`. Die Art und Weise, in der Spalte oder Seitenumbruch auftritt. Diese Eigenschaft bestimmt, ob bestimmte CSS-Eigenschaften zur Spalte und Seitenumbruch berücksichtigt oder ignoriert werden. Wenn diese Eigenschaft auf `column`festgelegt ist, respektiert die Inhalte mit Bezug zu Spalte aktuelle an Stelle der Seitenumbruch CSS-Eigenschaften.

        <preference name="PaginationBreakingMode" value="page"/>


*   `PaginationMode` (string, Standard ist `unpaginated`): gültige Werte sind `unpaginated`, `LeftToRight`, `TopToBottom`, `BottomToTop`und `RightToLeft`. Diese Eigenschaft bestimmt, ob Inhalte in der Webansicht aufgebrochen in Seiten, die den Ansicht einen Bildschirm in einer Zeit zu füllen, oder als eine lange durchlaufende Ansicht angezeigt. Wenn der Satz zu einem paginierten Formular, diese Eigenschaft ein paginiertes Layouts zum Inhalt verursacht die Webansicht zu verwenden, die Werte der SeitenLaenge und GapBetweenPages zu Relayout inhaltlich schaltet.

        <preference name="PaginationMode" value="unpaginated"/>


*   `UIWebViewDecelerationSpeed` (string, wird standardmäßig auf `normal`): gültige Werte sind `normal`, `fast`. Diese Eigenschaft steuert die Geschwindigkeit Abbremsen Schwung scrollen. `Normal` ist die Standardgeschwindigkeit für die meisten systemeigenen apps, und `fast` ist der Standard für Mobile Safari.

        <preference name="UIWebViewDecelerationSpeed" value="fast" />


*   `ErrorUrl` (String, nicht standardmäßig festgelegt): Wenn gesetzt, wird die referenzierte lokale Seite ein Fehler in der Anwendung angezeigt.

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `OverrideUserAgent`(String, nicht standardmäßig festgelegt): Wenn gesetzt, der Wert der alten UserAgent Webview ersetzen wird. Es ist hilfreich, um die Anforderung von app/Browser identifizieren, wenn entfernte Seiten anfordern. Verwendung mit Vorsicht, dies kann verursacht Compitiable Problem mit Webservern. Verwenden Sie für die meisten Fälle stattdessen AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(String, nicht standardmäßig festgelegt): Wenn gesetzt, der Wert bis zum Ende des alten UserAgent der Webview angefügt wird. Wenn Sie mit OverrideUserAgent zu verwenden, wird dieser Wert ignoriert.

        <preference name="AppendUserAgent" value="My Browser" />
