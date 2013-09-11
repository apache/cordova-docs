---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# iOS Konfiguration

Die Datei `config.xml` steuert verschiedene Cordova-Einstellungen. Dies ist breit und nicht Set pro CDVViewController Instanz Anwendung. Die `config.xml` Datei befindet sich Ihr `<project folder>/<appname>` Verzeichnis.

## `<preference>`

Verschiedene Einstellungen (als `<preference>` Markierungen) Standard auf vorhandene Anwendungen nicht zu brechen. Die verfügbaren Einstellungen sind:

*   `DisallowOverscroll`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` Wenn Sie nicht, dass die WebView Gummi-Band möchten.

*   `TopActivityIndicator`(string, der Standardwert ist `gray` ): Dies ist die oben drehenden Throbber in der Status/Batterie-Bar, gültige Werte sind `whiteLarge` , `white` , und`gray`.

*   `EnableLocation`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` , initialisiert das Geolocation-Plugin beim Start (also das Update auf Ihrer Position genauer sein kann) **veraltet**: setzen Sie bitte die `onload` Attribut des der `Geolocation` Plugin zu `true` statt.

*   `EnableViewportScale`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` , Viewport Skalierung durch ein Meta-Tag zu verhindern.

*   `AutoHideSplashScreen`(Boolean, wird standardmäßig auf `true` ): Legen Sie auf `false` zu steuern, wenn das Splashscreen über eine JavaScript-API ausgeblendet ist.

*   `FadeSplashScreen`(Boolean, wird standardmäßig auf `true` ): Legen Sie auf `false` um den Begrüßungsbildschirm zu ein-und ausgeblendet, wenn ein- oder Ausblenden von es zu verhindern.

*   `FadeSplashScreenDuration`(float, der Standardwert ist 2): der Begrüßungsbildschirm Fade Dauer in Sekunden.

*   `ShowSplashScreenSpinner`(Boolean, wird standardmäßig auf `true` ): Legen Sie auf `false` den Begrüßungsbildschirm Spinner zu verstecken.

*   `MediaPlaybackRequiresUserAction`(Boolean, wird standardmäßig auf `false` ): auf True, nicht Autoplayed HTML5 video erlauben.

*   `AllowInlineMediaPlayback`(Boolean, wird standardmäßig auf `false` ): auf true festgelegt, um Inline HTML5 Media-Wiedergabe zu ermöglichen, auch das video-Element im HTML-Dokument muss auch das Webkit-Playsinline-Attribut.

*   `BackupWebStorage`(string, der Standardwert ist `cloud` ): gültige Werte sind `none` , `cloud` und `local` . Legen Sie auf `cloud` ermöglichen die Web-Speicherdaten werden in iCloud gesichert, und auf `local` nur lokale Backups (iTunes Sync) erlauben. Legen Sie auf `none` , keine Sicherungen von Web-Speicher erlauben.

*   `KeyboardDisplayRequiresUserAction`(Boolean, wird standardmäßig auf `true` ): auf False festgelegt, um die Tastatur zu öffnen, wenn Formularelemente Fokus über den JavaScript focus() Aufruf erhalten.

*   `SuppressesIncrementalRendering`(Boolean, wird standardmäßig auf `false` ): auf True zu warten, bis alle neuen Inhalte anzeigen eingegangen, bevor es wiedergegeben wird.

*   `HideKeyboardFormAccessoryBar`(Boolean, wird standardmäßig auf `false` ): Set zu treu ausblenden die zusätzliche Symbolleiste, die am oberen Rand der Tastatur befindet. Diese Symbolleiste enthält die Schaltflächen **zurück**, **weiter**und **fertig** .

*   `KeyboardShrinksView`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` , die WebView zu verkleinern, wenn die Tastatur kommt. Die WebView verkleinert statt der Viewport schrumpfen und der bildlauffähigen Seite. Dies gilt für Anwendungen, die ihre Elemente relativ zu Fuße der WebView positionieren. Dies ist das Standardverhalten auf Android und macht sehr viel Sinn, wenn apps im Gegensatz zu Webseiten erstellen.