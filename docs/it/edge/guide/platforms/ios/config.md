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

# iOS Configuration

Il `config.xml` Impostazioni file controlla varie impostazioni di Cordova. Questa è l'applicazione ampia e non impostati per ogni istanza di CDVViewController. La `config.xml` file si trova nella tua `<project folder>/<appname>` directory.

## `< preferenza >`

Varie preferenze (come `<preference>` tag) predefinita su non rompere le applicazioni esistenti. Le preferenze disponibili sono:

*   `DisallowOverscroll`(boolean, impostazioni predefinite a `false` ): impostare su `true` se non si desidera il WebView elastica.

*   `TopActivityIndicator`(stringa, valore predefinito del `gray` ): questo è il throbber filatura superiore nella barra di stato batteria, i valori validi sono `whiteLarge` , `white` , e`gray`.

*   `EnableLocation`(boolean, impostazioni predefinite a `false` ): impostata su `true` , per inizializzare il plugin di geolocalizzazione allo start-up (quindi la correzione sulla tua posizione può essere più precisa) **SCONSIGLIATI**: si prega di impostare il `onload` attributo della `Geolocation` plugin per `true` invece.

*   `EnableViewportScale`(boolean, impostazioni predefinite a `false` ): impostare su `true` per prevenire viewport ridimensionamento tramite un tag meta.

*   `AutoHideSplashScreen`(boolean, impostazioni predefinite a `true` ): impostare su `false` per controllare quando lo splashscreen è nascosto attraverso un API JavaScript.

*   `FadeSplashScreen`(boolean, impostazioni predefinite a `true` ): impostare su `false` per prevenire la schermata iniziale a sbiadire e uscire quando mostrando o nascondendo.

*   `FadeSplashScreenDuration`(galleggiare, il default è 2): la durata della dissolvenza schermata iniziale in pochi secondi.

*   `ShowSplashScreenSpinner`(boolean, impostazioni predefinite a `true` ): impostare su `false` per nascondere la filatrice schermata iniziale.

*   `MediaPlaybackRequiresUserAction`(boolean, impostazioni predefinite a `false` ): impostato su true per non consentire autoplayed HTML5 dei.

*   `AllowInlineMediaPlayback`(boolean, impostazioni predefinite a `false` ): impostato su true per consentire la riproduzione multimediale inline HTML5, anche, l'elemento video nel documento HTML deve anche includere l'attributo webkit-playsinline.

*   `BackupWebStorage`(stringa, valore predefinito del `cloud` ): i valori validi sono `none` , `cloud` e `local` . Impostare `cloud` per consentire i web storage backup a iCloud e dati impostata su `local` per consentire solo backup locali (iTunes sync). Impostare su `none` per non permettere eventuali backup di archiviazione web.

*   `KeyboardDisplayRequiresUserAction`(boolean, impostazioni predefinite a `true` ): impostato su false per aprire la tastiera quando elementi form riceve lo stato attivo mediante la chiamata di Blur JavaScript.

*   `SuppressesIncrementalRendering`(boolean, impostazioni predefinite a `false` ): impostato su true per attendere tutti Mostra nuovi contenuti è stato ricevuto prima il rendering.

*   `HideKeyboardFormAccessoryBar`(boolean, impostazioni predefinite a `false` ): impostare a true per nascondere la barra degli strumenti aggiuntiva che è in cima alla tastiera. Questa barra degli strumenti presenta i pulsanti **Prev**, **Next**e **fatto** .

*   `KeyboardShrinksView`(boolean, impostazioni predefinite a `false` ): impostare `true` a ridursi WebView quando esce la tastiera. WebView si riduce invece il viewport restringimento e la pagina scorrevole. Questo vale per apps che posizione loro elementi rispetto alla parte inferiore della WebView. Questo è il comportamento predefinito su Android e rende molto utile quando si creano applicazioni in contrasto con le pagine Web.