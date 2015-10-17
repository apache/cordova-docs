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

title: iOS Configuration
---

# iOS Configuration

La `config.xml` file controlla le impostazioni di base di un'app che si applicano a ogni applicazione e istanza di CordovaWebView. In questa sezione i dettagli delle preferenze che si applicano solo a Build di iOS. Vedere il file config. XML [File](../../../cordova/file/fileobj/fileobj.html) per informazioni sulle opzioni di configurazione globale.

*   `EnableViewportScale`(boolean, impostazioni predefinite a `false` ): impostare su `true` utilizzare un metatag viewport per disabilitare oppure limitare l'intervallo di ridimensionamento dell'utente.
    
        <preference name="EnableViewportScale" value="true"/>
        

*   `MediaPlaybackRequiresUserAction`(boolean, impostazioni predefinite a `false` ): impostata su `true` per impedire che HTML5 video giocare automaticamente con il `autoplay` attributo. Non si applica quando si chiama `play()` su un oggetto video.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(boolean, impostazioni predefinite a `false` ): impostare su `true` per consentire la riproduzione multimediale di HTML5 apparire *in linea* all'interno del layout di schermo, utilizzando il browser fornito controlli piuttosto che controlli nativi. Per questo lavoro, aggiungere il `webkit-playsinline` attribuire a qualsiasi `<video>` elementi.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(stringa, o `none` , `local` , o il default `cloud` ): impostata su `cloud` per consentire l'archiviazione web dati backup tramite iCloud. Impostare `local` per consentire solo i backup locali tramite iTunes sync. Impostare `none` prevenire i backup di archiviazione web.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(stringa, valore predefinito del `gray` ): controlla l'aspetto dell'icona nella barra di stato che indica attività significativa processore piccolo filatura. I valori validi sono `whiteLarge` , `white` , e`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `FadeSplashScreen`(boolean, impostazioni predefinite a `true` ): impostare su `false` per impedire la dissolvenza e uscire quando cambia lo stato di visualizzazione della schermata iniziale.
    
        <preference name="FadeSplashScreen" value="false"/>
        

*   `FadeSplashScreenDuration`(galleggiare, di default è `2` ): specifica il numero di secondi per la schermata iniziale dissolvenza effetto da eseguire.
    
        <preference name="FadeSplashScreenDuration" value="4"/>
        

*   `ShowSplashScreenSpinner`(boolean, impostazioni predefinite a `true` ): impostare su `false` per nascondere la filatrice schermata iniziale.
    
        <preference name="ShowSplashScreenSpinner" value="false"/>
        

*   `KeyboardDisplayRequiresUserAction`(boolean, impostazioni predefinite a `true` ): impostare su `false` per consentire la tastiera venga visualizzato quando si chiama `focus()` sugli ingressi di forma.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(boolean, impostazioni predefinite a `false` ): impostare su `true` attendere che tutto il contenuto è stato ricevuto prima il rendering sullo schermo.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `KeyboardShrinksView`(boolean, impostazioni predefinite a `false` ): impostare su `true` ridimensionare webview quando appare la tastiera, si esegue l'override del beavior predefinito che restringe la finestra verticalmente. Questo corrisponde il comportamento predefinito per le applicazioni Android.
    
        <preference name="KeyboardShrinksView" value="true"/>
        

*   `GapBetweenPages`(galleggiare, di default è `` ): la dimensione dello spazio, in punti, tra le pagine.
    
        < nome preferenza = "GapBetweenPages" value = "0" / >
        

*   `PageLength`(galleggiare, di default è `` ): la dimensione di ogni pagina, in punti, nel senso che le pagine scorrono. Quando PaginationMode è di destra a sinistra o da sinistra a destra, questa proprietà rappresenta la larghezza di ciascuna pagina. Quando PaginationMode è topToBottom o bottomToTop, questa proprietà rappresenta l'altezza di ciascuna pagina. Il valore predefinito è 0, ovvero che il layout utilizza le dimensioni del riquadro di visualizzazione per determinare le dimensioni della pagina.
    
        < nome preferenza = "PageLength" value = "0" / >
        

*   `PaginationBreakingMode`(stringa, valore predefinito del `page` ): i valori validi sono `page` e `column` .Il modo in cui si verifica la rottura di pagina o di colonna. Questa proprietà determina se determinate proprietà CSS per quanto riguarda colonna e pagina-rottura sono onorato o ignorato. Quando questa proprietà è impostata su `column` , il contenuto rispetta le proprietà CSS relative alla interruzione di colonna in luogo di interruzione di pagina.
    
        < nome preferenza = "PaginationBreakingMode" value = "pagina" / >
        

*   `PaginationMode`(stringa, valore predefinito del `unpaginated` ): i valori validi sono `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , e `rightToLeft` . Questa proprietà determina se il contenuto nella visualizzazione web è suddiviso in pagine che riempiono lo schermo di visualizzazione uno alla volta, o mostrato come una visualizzazione a lungo scorrimento. Se impostato su un form impaginato, questa proprietà attiva o disattiva un layout impaginato sul contenuto, causando la visualizzazione web di utilizzare i valori di PageLength e GapBetweenPages a Ridefinisci layout contenuto.
    
        < nome preferenza = "PaginationMode" value = "non paginato" / >