---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Configurazione di fuoco OS Amazon

La `config.xml` file controlla le impostazioni di base di un'app che si applicano a ogni applicazione e istanza di CordovaWebView. Costruisce le preferenze di dettagli questa sezione che si applicano solo al sistema operativo di fuoco di Amazon. Vedere il file config. XML File per informazioni sulle opzioni di configurazione globale.

*   `KeepRunning`(boolean, impostazioni predefinite a `true` ): determina se l'applicazione rimane in esecuzione in background anche dopo un `pause` evento incendi.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`: Specifica di una pagina di errore che viene visualizzato in risposta agli errori HTTP standard nella gamma 400-500. Posizionare il file specificato nella directory principale che contiene la home page e altre risorse web.
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`: Visualizzare una finestra di dialogo nativo durante il caricamento dell'app. Il formato del valore è il *titolo, messaggio*
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`: Visualizzare una finestra di dialogo nativo durante il caricamento di pagine secondarie all'interno di un'app. Il formato del valore è il *titolo, messaggio*
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(numero, valore di default è `20000` ): durante il caricamento di una pagina, la quantità di tempo di attesa prima di generare un errore di timeout. Questo esempio specifica 10 secondi anziché 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Il nome del file meno sua estensione nella `res/drawable` directory. Vari beni devono condividere questo nome comune nelle varie sottodirectory.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(numero, di default è `5000` ): la quantità di tempo consente di visualizzare l'immagine della schermata iniziale.
    
        <preference name="SplashScreenDelay" value="10000"/>