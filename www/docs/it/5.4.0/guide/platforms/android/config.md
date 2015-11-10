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

title: Configurazione Android
---

# Configurazione Android

La `config.xml` file controlla le impostazioni di base di un'app che si applicano a ogni applicazione e istanza di CordovaWebView. In questa sezione i dettagli delle preferenze che si applicano solo a Build di Android. Per informazioni sulle opzioni di configurazione globale, vedere [il File config. xml][1] .

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(boolean, impostazioni predefinite a `true` ): determina se l'applicazione rimane in esecuzione in background anche dopo un `[pause](../../../cordova/events/events.pause.html)` evento incendi. Questa impostazione `false` non uccide l'app dopo un `[pause](../../../cordova/events/events.pause.html)` evento, ma semplicemente verrà interrotto l'esecuzione del codice all'interno di cordova webview mentre l'app è in background.

        <preference name="KeepRunning" value="false"/>


*   `LoadUrlTimeoutValue`(numero in millisecondi, per impostazione predefinita `20000` , 20 secondi): durante il caricamento di una pagina, la quantità di tempo di attesa prima di generare un errore di timeout. Questo esempio specifica 10 secondi anziché 20:

        <preference name="LoadUrlTimeoutValue" value="10000"/>


*   `SplashScreen`(stringa, valore predefinito del `splash` ): il nome del file meno sua estensione nella `res/drawable` directory. Vari beni devono condividere questo nome comune nelle varie sottodirectory.

        <preference name="SplashScreen" value="mySplash"/>


*   `SplashScreenDelay`(numero in millisecondi, di default è `3000` ): la quantità di tempo consente di visualizzare l'immagine della schermata iniziale.

        <preference name="SplashScreenDelay" value="10000"/>


*   `InAppBrowserStorageEnabled`(boolean, impostazioni predefinite a `true` ): controlli se pagine aperto all'interno di un InAppBrowser possono accedere la stessa [localStorage](../../../cordova/storage/localstorage/localstorage.html) e archiviazione WebSQL come pagine aperte con il browser predefinito.

        <preference name="InAppBrowserStorageEnabled" value="true"/>


*   `LoadingDialog`(stringa, valore predefinito del `null` ): se impostato, viene visualizzato un dialogo con il titolo specificato e il messaggio e un filatore, durante il caricamento della pagina prima di un'applicazione. Il titolo e il messaggio sono separati da una virgola in questa stringa di valore, e quello virgola viene rimosso prima che venga visualizzata la finestra di dialogo.

        <preference name="LoadingDialog" value="My Title,My Message"/>


*   `LoadingPageDialog`(stringa, valore predefinito del `null` ): lo stesso di `LoadingDialog` , ma per ogni pagina di caricamento dopo la prima pagina dell'applicazione.

        <preference name="LoadingPageDialog" value="My Title,My Message"/>


*   `ErrorUrl`(URL, impostazioni predefinite a `null` ): se impostato, visualizzerà la pagina di riferimento su di un errore dell'applicazione invece di una finestra di dialogo con il titolo "Errore dell'applicazione".

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `ShowTitle`(boolean, impostazioni predefinite a `false` ): Visualizza il titolo nella parte superiore dello schermo.

        <preference name="ShowTitle" value="true"/>


*   `LogLevel`(stringa, valore predefinito del `ERROR` ): imposta il livello di log minimo attraverso cui registro verranno filtrati i messaggi dall'applicazione. I valori validi sono `ERROR` , `WARN` , `INFO` , `DEBUG` , e`VERBOSE`.

        <preference name="LogLevel" value="VERBOSE"/>


*   `SetFullscreen`(boolean, impostazioni predefinite a `false` ): come il `Fullscreen` parametro nella configurazione globale di questo file xml. Questo elemento specifico Android è deprecato in favore del global `Fullscreen` elemento e verrà rimossa in una versione futura.

*   `AndroidLaunchMode`(stringa, valore predefinito del `singleTop` ): imposta l'attività `android:launchMode` attributo. Questo cambia la cosa succede quando l'applicazione viene avviata da icona app o intenti ed è già in esecuzione. I valori validi sono `standard` , `singleTop` , `singleTask` ,`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>


*   `DefaultVolumeStream`(stringa, valore predefinito del `default` , aggiunto in cordova-Androide 3.7.0): imposta il volume il volume di hardware pulsanti linkare. Per impostazione predefinita questo è "chiamata" per telefoni cellulari e "media" per compresse. Impostare questo parametro su "media" per avere i tasti del volume dell'app sempre cambiare il volume del contenuto multimediale. Si noti che quando si utilizza il plugin media di Cordova, i pulsanti del volume cambierà dinamicamente a controllo del volume di media quando tutti gli oggetti di Media sono attivi.

*   `OverrideUserAgent` (stringa, non impostato per impostazione predefinita): se impostato, il valore sostituirà il vecchio UserAgent di webview. È utile identificare la richiesta dal browser e app quando si richiedono pagine remoti. Usare con cautela, questo maggio causa compitiable problema con server web. Per la maggior parte dei casi, utilizzare AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent` (stringa, non impostato per impostazione predefinita): se impostato, il valore verrà aggiunte alla fine del vecchio UserAgent di webview. Quando si utilizza con OverrideUserAgent, questo valore verrà ignorato.

        <preference name="AppendUserAgent" value="My Browser" />
