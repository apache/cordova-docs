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

title: Configurazione di fuoco OS Amazon
---

# Configurazione di fuoco OS Amazon

La `config.xml` file controlla le impostazioni di base di un'app che si applicano a ogni applicazione e istanza di CordovaWebView. Costruisce le preferenze di dettagli questa sezione che si applicano solo al sistema operativo di fuoco di Amazon. Per informazioni sulle opzioni di configurazione globale, vedere [il File config. XML][1] .

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(boolean, impostazioni predefinite a `true` ): determina se l'applicazione rimane in esecuzione in background anche dopo un `[pause](../../../cordova/events/events.pause.html)` evento incendi. Questa impostazione `false` non uccide l'app dopo un `[pause](../../../cordova/events/events.pause.html)` evento, ma semplicemente verrà interrotto l'esecuzione del codice all'interno di cordova webview mentre l'app è in background.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`(URL, impostazioni predefinite a `null` ): se impostato, visualizzerà la pagina di riferimento su di un errore dell'applicazione invece di una finestra di dialogo con il titolo "Errore dell'applicazione".
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`(stringa, valore predefinito del `null` ): se impostato, viene visualizzato un dialogo con il titolo specificato e il messaggio e un filatore, durante il caricamento della pagina prima di un'applicazione. Il titolo e il messaggio sono separati da una virgola in questa stringa di valore, e quello virgola viene rimosso prima che venga visualizzata la finestra di dialogo.
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`(stringa, valore predefinito del `null` ): lo stesso di `LoadingDialog` , ma per ogni pagina di caricamento dopo la prima pagina dell'applicazione.
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(numero, valore di default è `20000` ): durante il caricamento di una pagina, la quantità di tempo di attesa prima di generare un errore di timeout. Questo esempio specifica 10 secondi anziché 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Il nome del file meno sua estensione nella `res/drawable` directory. Vari beni devono condividere questo nome comune nelle varie sottodirectory.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(numero, di default è `5000` ): la quantità di tempo consente di visualizzare l'immagine della schermata iniziale.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `ShowTitle`(boolean, impostazioni predefinite a `false` ): Visualizza il titolo nella parte superiore dello schermo.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(stringa, valore predefinito del `ERROR` ): imposta il livello di log minimo attraverso cui registro verranno filtrati i messaggi dall'applicazione. I valori validi sono `ERROR` , `WARN` , `INFO` , `DEBUG` , e`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>