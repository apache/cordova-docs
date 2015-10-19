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

Die `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html) steuert eine app-Grundeinstellungen, die für jede Anwendung und CordovaWebView Instanz gelten. Dieser Abschnitt beschreibt die Einstellungen, die nur auf iOS-Builds zu gelten. Finden Sie die [Datei](../../../cordova/file/fileobj/fileobj.html) config.xml [Datei](../../../cordova/file/fileobj/fileobj.html) Informationen auf globalen Konfigurations-Optionen.

*   `EnableViewportScale`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` ein Viewport Meta-Tag verwenden, um entweder deaktivieren oder den Bereich der Benutzer Skalierung zu beschränken.
    
        <preference name="EnableViewportScale" value="true"/>
        

*   `MediaPlaybackRequiresUserAction`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` um zu verhindern, dass HTML5-Videos automatisch mit spielen die `autoplay` Attribut. Gilt nicht beim Aufrufen von `play()` für ein video-Objekt.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` HTML5 Medienwiedergabe *Inline* innerhalb des Bildschirm-Layouts, mit Browser bereitgestellten Steuerelemente anstelle von native Steuerelemente angezeigt werden können. Damit dies funktioniert, fügen Sie das `webkit-playsinline` -Attribut auf eine `<video>` Elemente.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(string, entweder `none` , `local` , oder den Standardwert `cloud` ): Legen Sie auf `cloud` Web-Speicherdaten-Backup über iCloud können. Legen Sie auf `local` um nur lokale Backups über iTunes Sync zu ermöglichen. Legen Sie auf `none` zu verhindern, dass Web-Speicher-Backup.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(string, der Standardwert ist `gray` ): steuert die Anzeige von das kleine rotierende-Symbol in der Statusleiste, der bedeutende Prozessoraktivitäten angibt. Gültige Werte sind `whiteLarge` , `white` , und`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `FadeSplashScreen`(Boolean, wird standardmäßig auf `true` ): Legen Sie auf `false` um zu verhindern, dass den Begrüßungsbildschirm ein-und ausblenden wenn seinen Anzeigezustand ändert.
    
        <preference name="FadeSplashScreen" value="false"/>
        

*   `FadeSplashScreenDuration`(float, der Standardwert ist `2` ): gibt die Anzahl der Sekunden für den Begrüßungsbildschirm fade Effekt ausgeführt.
    
        <preference name="FadeSplashScreenDuration" value="4"/>
        

*   `ShowSplashScreenSpinner`(Boolean, wird standardmäßig auf `true` ): Legen Sie auf `false` den Begrüßungsbildschirm Spinner zu verstecken.
    
        <preference name="ShowSplashScreenSpinner" value="false"/>
        

*   `KeyboardDisplayRequiresUserAction`(Boolean, wird standardmäßig auf `true` ): Legen Sie auf `false` erlauben die Tastatur angezeigt werden, beim Aufrufen von `focus()` auf Formularfelder.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` zu warten, bis alle Inhalte eingegangen ist, bevor es auf dem Bildschirm gerendert wird.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `KeyboardShrinksView`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` , die Webview zu reduzieren, wenn die Tastatur angezeigt wird, überschreiben die Standard-Beavior, die den Viewport vertikal verkleinert,. Dies entspricht dem Standardverhalten für Android apps.
    
        <preference name="KeyboardShrinksView" value="true"/>
        

*   `GapBetweenPages`(float, der Standardwert ist `` ): die Größe der Lücke, zwischen Seiten in Punkt.
    
        < Einstellungsname = "GapBetweenPages" Value = "0" / >
        

*   `PageLength`(float, der Standardwert ist `` ): die Größe jeder Seite in Punkt in die Richtung, die die Seiten fließen. Wenn PaginationMode rechts nach links oder von links nach rechts, diese Eigenschaft stellt die Breite auf jeder Seite. Diese Eigenschaft stellt beim PaginationMode TopToBottom oder BottomToTop ist, die Höhe der einzelnen Seiten dar. Der Standardwert ist 0, was, dass das Layout die Größe des Viewports wird verwendet bedeutet, um die Dimensionen der Seite zu bestimmen.
    
        < Einstellungsname = "SeitenLaenge" Value = "0" / >
        

*   `PaginationBreakingMode`(string, der Standardwert ist `page` ): gültige Werte sind `page` und `column` .Die Art und Weise, in der Spalte oder Seitenumbruch auftritt. Diese Eigenschaft legt fest, ob bestimmte CSS-Eigenschaften zur Spalte und Seitenumbruch berücksichtigt oder ignoriert werden. Wenn diese Eigenschaft auf festgelegt ist `column` , der Inhalt steht im Einklang mit der CSS-Eigenschaften, die im Zusammenhang mit Spalte aktuelle an Stelle der Seitenumbruch.
    
        < Einstellungsname = "PaginationBreakingMode" Value = "Seite" / >
        

*   `PaginationMode`(string, der Standardwert ist `unpaginated` ): gültige Werte sind `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , und `rightToLeft` . Diese Eigenschaft bestimmt, ob Inhalte in der Webansicht aufgebrochen in Seiten, die die eine Ansicht zu einer Zeit zu füllen, oder als eine lange durchlaufende Ansicht angezeigt. Wenn der Satz zu einem paginierten Formular, diese Eigenschaft ein paginiertes Layouts zum Inhalt: verursacht die Webansicht zu verwenden, die Werte der SeitenLaenge und GapBetweenPages zu Relayout inhaltlich schaltet.
    
        < Einstellungsname = "PaginationMode" Value = "unpaginated" / >