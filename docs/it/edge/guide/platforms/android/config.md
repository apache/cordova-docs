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

# Android configurazione

La `config.xml` file controlla varie impostazioni di Cordova. Questi si applicano in tutta l'applicazione e per ogni istanza di CordovaWebView.

## `< preferenza >`

Varie altre preferenze (come `<preference>` tag) predefinita su non rompere le applicazioni esistenti. Le preferenze disponibili sono:

*   `useBrowserHistory`(boolean, impostazioni predefinite a `true` ): impostare su `false` se si desidera utilizzare lo spessore della storia che è stato utilizzato per aggirare l'hashtag # errore presente in Android 3. x prima la correzione della storia. (Nota: questa impostazione verrà rimossa in aprile 2013)

*   `loadingDialog`: Visualizzare una finestra di dialogo nativa di caricamento durante il caricamento dell'app. Il formato del valore è il *titolo, messaggio*

*   `loadingPageDialog`: Visualizzare una finestra di dialogo nativa di caricamento durante il caricamento di pagine secondarie. Il formato del valore è il *titolo, messaggio*

*   `errorUrl`: Impostare la pagina di errore dell'applicazione. Dovrebbe trovarsi nel progetto Android in`file://android_asset/www/`

*   `backgroundColor`: Impostare il colore di sfondo per la vostra applicazione. Supporta un valore esadecimale di quattro byte, con il primo byte che rappresenta il valore alfa e i seguenti tre byte con valori RGB standard. Ad esempio, `0x00000000` è nero.

*   `loadUrlTimeoutValue`: Quanto tempo deve attendere prima di generare un errore di timeout sull'applicazione di Cordova.

*   `keepRunning`(boolean, impostazioni predefinite a `true` ): determina se Cordova rimane in esecuzione in background.

*   `splashscreen`: Il nome del file meno sua estensione nella `res/drawable` directory. Se si dispone di più asset, tutti devono condividere questo nome comune nelle rispettive directory.

*   `disallowOverscroll`(boolean, impostazioni predefinite a `false` ): impostare su `true` per disabilitare il bagliore quando un utente scorre oltre il bordo della webview.

## `< plugin >`

Android supporta usando `<feature>` come analoghi a `<plugin>` elementi.