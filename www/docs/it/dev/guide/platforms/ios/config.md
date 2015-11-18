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

title: Configurazione iOS
---

# Configurazione iOS

La `config.xml` file controlla le impostazioni di base di un'app che si applicano a ogni applicazione e istanza di CordovaWebView. In questa sezione i dettagli delle preferenze che si applicano solo a Build di iOS. Per informazioni sulle opzioni di configurazione globale, vedere [il File config. xml][1].

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(boolean, impostazioni predefinite a `false` ): impostare su `true` per consentire un viewport metatag a disabilitare o limitare l'intervallo di ridimensionamento dell'utente, che è abilitato per impostazione predefinita.

        <preference name="EnableViewportScale" value="true"/>


    Inserire una finestra come la seguente in HTML per disabilitare il ridimensionamento e la forma contenuti in modo flessibile all'interno del rendering WebView:

        < nome meta = contenuto di 'finestra' =' larghezza = larghezza dispositivo, iniziale-scala = 1, scalabile utente = no' / >


*   `MediaPlaybackAllowsAirPlay`(boolean, impostazioni predefinite a `true` ): impostata su `false` per prevenire Air Gioca venga utilizzato in questa visualizzazione. Disponibile in default UIWebView e WKWebView.

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>


*   `MediaPlaybackRequiresUserAction`(boolean, impostazioni predefinite a `false` ): impostata su `true` per impedire HTML5 video o audio di riproduzione automatica con il `autoplay` attributo o tramite JavaScript.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>


*   `AllowInlineMediaPlayback`(boolean, impostazioni predefinite a `false` ): impostata su `true` per consentire la riproduzione multimediale HTML5 a comparire *in linea* all'interno del layout dello schermo, utilizzando controlli fornito dal browser invece di controlli nativi. A questo scopo, aggiungere il `webkit-playsinline` attribuire a qualsiasi `<video>` elementi.

        <preference name="AllowInlineMediaPlayback" value="true"/>


*   `BackupWebStorage`(stringa, o `none` , `local` , o il valore predefinito `cloud` ): impostata su `cloud` per consentire i dati di archiviazione web per backup tramite iCloud. Impostato su `local` per consentire solo i backup locali tramite iTunes sync. Impostare su `none` prevenire i backup di archiviazione web.

        <preference name="BackupWebStorage" value="local"/>


*   `TopActivityIndicator`(stringa, valore predefinito è `gray` ): controlla l'aspetto dell'icona piccola filatura nella barra di stato che indica l'attività del processore. I valori validi sono `whiteLarge` , `white` , e`gray`.

        <preference name="TopActivityIndicator" value="white"/>


*   `KeyboardDisplayRequiresUserAction`(boolean, impostazioni predefinite a `true` ): impostata su `false` per consentire la tastiera venga visualizzato quando si chiama `focus()` sugli ingressi del modulo.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>


*   `SuppressesIncrementalRendering`(boolean, impostazioni predefinite a `false` ): impostare su `true` aspettare fino a quando tutto il contenuto è stato ricevuto prima il rendering sullo schermo.

        <preference name="SuppressesIncrementalRendering" value="true"/>


*   `GapBetweenPages`(float, il valore predefinito è `` ): la dimensione dello spazio, in punti, tra le pagine.

        <preference name="GapBetweenPages" value="0"/>


*   `PageLength`(float, il valore predefinito è `` ): la dimensione di ogni pagina, espressa in punti, in direzione del flusso delle pagine. Quando PaginationMode è giusto a sinistra o da sinistra a destra, questa proprietà rappresenta la larghezza di ciascuna pagina. Quando PaginationMode è topToBottom o bottomToTop, questa proprietà rappresenta l'altezza di ciascuna pagina. Il valore predefinito è 0, ovvero che il layout utilizza le dimensioni del riquadro di visualizzazione per determinare le dimensioni della pagina.

        <preference name="PageLength" value="0"/>


*   `PaginationBreakingMode`(stringa, valore predefinito è `page` ): i valori validi sono `page` e `column` . Il modo in cui si verifica la rottura di pagina o di colonna. Questa proprietà determina se determinate proprietà CSS per quanto riguarda la colonna e pagina-rottura sono onorato o ignorato. Quando questa proprietà è impostata su `column` , il contenuto rispetta le proprietà CSS relazionate alla interruzione di colonna in luogo di interruzione di pagina.

        <preference name="PaginationBreakingMode" value="page"/>


*   `PaginationMode`(stringa, valore predefinito è `unpaginated` ): i valori validi sono `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , e `rightToLeft` . Questa proprietà determina se il contenuto nel web è suddiviso in pagine che riempiono lo schermo di una vista alla volta, o mostrato come una visualizzazione a lungo scorrimento. Se impostato su un form impaginato, questa proprietà attiva o disattiva un layout impaginato sul contenuto, causando la visualizzazione web di utilizzare i valori di PageLength e GapBetweenPages a Ridefinisci layout contenuto.

        <preference name="PaginationMode" value="unpaginated"/>


*   `UIWebViewDecelerationSpeed`(stringa, valore predefinito è `normal` ): i valori validi sono `normal` , `fast` . Questa proprietà controlla la velocità di decelerazione di slancio lo scorrimento. `normal`è la velocità di impostazione predefinita per le applicazioni più native, e `fast` è l'impostazione predefinita per Safari Mobile.

        <preference name="UIWebViewDecelerationSpeed" value="fast" />


*   `ErrorUrl`(stringa, non impostato per impostazione predefinita): se impostato, verrà visualizzata la pagina locale cui si fa riferimento al momento di un errore nell'applicazione.

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `OverrideUserAgent`(stringa, non impostato per impostazione predefinita): se impostato, il valore sostituirà il vecchio UserAgent di webview. È utile identificare la richiesta dal browser e app quando si richiedono pagine remoti. Usare con cautela, questo maggio causa compitiable problema con server web. Per la maggior parte dei casi, utilizzare AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(stringa, non impostato per impostazione predefinita): se impostato, il valore verrà aggiunte alla fine del vecchio UserAgent di webview. Quando si utilizza con OverrideUserAgent, questo valore verrà ignorato.

        <preference name="AppendUserAgent" value="My Browser" />
