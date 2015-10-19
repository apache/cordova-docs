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

title: L'aggiornamento di Android
---

# L'aggiornamento di Android

Questa guida Mostra come modificare progetti Android per l'aggiornamento da versioni precedenti di Cordova. La maggior parte di queste istruzioni si applicano ai progetti creati con un vecchio set di strumenti da riga di comando che precedono la `cordova` utilità CLI. [L'interfaccia della riga di comando](../../cli/index.html) per informazioni, vedere come aggiornare la versione di CLI.

## L'aggiornamento a 4.0.0

Ci sono passaggi di aggiornamento specifici necessari per sfruttare i cambiamenti significativi in 4.0.0. In primo luogo, le comuni operazioni di aggiornamento sono necessari come sotto.

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto
    

Per i progetti CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update android` nei progetti esistenti.

### L'aggiornamento della Whitelist

Tutte le funzionalità di whitelist è ora implementata tramite plugin. Senza un plugin, l'app non è più protetto da una whitelist dopo l'aggiornamento a 4.0.0. Cordova ha due plugin whitelist, che forniscono diversi livelli di protezione.

1.  Il plugin di `cordova-plugin-whitelist` *(consigliato)*
    
    *   Questo plugin è altamente raccomandato, come è più sicuro e configurabile di whitelist nelle versioni precedenti
    *   Vedere [cordova-plugin-whitelist][1] per dettagli sulle modifiche di configurazione necessarie
    *   Eseguire: `cordova plugin add cordova-plugin-crosswalk-webview`

2.  Il plugin di `cordova-plugin-eredità-whitelist`
    
    *   Questo plugin fornisce lo stesso comportamento di whitelist come le versioni precedenti. Vedere [cordova-plugin-legacy-whitelist][2]
    *   Nessuna modifica di configurazione è necessaria, ma offre meno protezione rispetto il plugin consigliato
    *   Eseguire: `cordova plugin add cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### Utilizzando il Crosswalk WebView

Per impostazione predefinita, l'app continua a utilizzare il sistema WebView previsto dal dispositivo. Se si desidera invece utilizzare WebView Crosswalk, basta aggiungere il plugin Crosswalk:

    cordova plugin add cordova-plugin-crosswalk-webview
    

Dopo l'aggiunta di plugin, app otterrà WebView Crosswalk installato e configurato correttamente.

### L'aggiornamento per il Plugin di Splashscreen

Se l'app fa uso di una schermata iniziale, che la funzionalità è stata spostata in un plugin. Le opzioni di configurazione per schermate iniziali sono invariate. Il passaggio di solo aggiornamento richiesto è quello di aggiungere il plugin:

    cordova plugin add cordova-plugin-splashscreen
    

## L'aggiornamento alla 3.7.1 da 3.6.0

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto
    

Per i progetti CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update android` nei progetti esistenti.

## L'aggiornamento a 3.3.0 da 3.2.0

Seguire le stesse istruzioni per quanto riguarda `3.2.0`.

A partire da 3.3.0, il runtime di Cordova è ora compilato come una libreria di Android invece di un vaso. Questo dovrebbe avere alcun effetto per l'utilizzo della riga di comando, ma gli utenti IDE saranno necessario importare il progetto `MyProject CordovaLib` appena aggiunto nella loro area di lavoro.

## L'aggiornamento a 3.2.0 da 3.1.0

Per i progetti che sono stati creati con la CLI, cordova:

1.  Aggiornamento il `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update android`

Per i progetti non creati con la CLI, cordova, eseguire:

        bin/update <project_path>
    

**ATTENZIONE:** A 4.4 Android - Android 4.4.3, creando un file di input elemento con tipo = "file" non si apre la finestra di dialogo di selezione file. Questa è una regressione con cromo su Android e il problema può essere riprodotto nel browser Chrome standalone su Android (vedi http://code.google.com/p/android/issues/detail?id=62220) la soluzione suggerita è di usare il plugin FileTransfer e File per Android 4.4. È possibile attendere un evento onClick dal tipo di input = "file" e poi aprirà una selezione di file UI. Per legare i dati del modulo con il caricamento, è possibile utilizzare JavaScript per fissare i valori in formato multi-parte richiesta POST che rende FileTransfer.

## L'aggiornamento a 3.1.0 da 3.0.0

Per i progetti che sono stati creati con la CLI, cordova:

1.  Aggiornamento il `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update android`

Per i progetti non creati con la CLI, cordova, eseguire:

        bin/update <project_path>
    

## Aggiornamento per il CLI (3.0.0) da 2.9.0

1.  Creare un nuovo progetto di Apache Cordova 3.0.0 utilizzando la CLI, cordova, come descritto in l'interfaccia della riga di comando.

2.  Aggiungere le piattaforme il progetto di cordova, per esempio: `cordova platform add android`.

3.  Copiare il contenuto della directory `www` del progetto alla radice del progetto cordova che appena creata nella directory `www` .

4.  Copiare qualsiasi attività nativo dal tuo vecchio progetto nella directory appropriate sotto `piattaforme/android`: è la directory dove esiste il tuo progetto di cordova-android nativo.

5.  Utilizzare lo strumento CLI cordova per installare alcun plugin che necessario. Si noti che il CLI gestisce tutti i core API come plugin, quindi potrebbero dover essere aggiunto. Solo 3.0.0 plugin sono compatibili con il CLI.

## Aggiornamento a 3.0.0 da 2.9.0

1.  Creare un nuovo progetto Apache Cordova Android.

2.  Copiare il contenuto della directory `www` nel nuovo progetto.

3.  Copiare qualsiasi attività Android nativo dalla directory `res` al nuovo progetto.

4.  Copiare qualsiasi plugin installato dalla sottodirectory `src` nel nuovo progetto.

5.  Assicurati di aggiornare qualsiasi deprecato `< plugin >` riferimenti dal file `config. xml` vecchia per la nuova `di <feature>` specifica.

6.  Aggiornare tutti i riferimenti al pacchetto `org.apache.cordova.api` essere `org.apache.cordova`.
    
    **Nota**: tutti i core API sono stati rimossi e devono essere installate come plugin. Per dettagli, vedere la Plugman usando per gestire guida Plugins.

## L'aggiornamento a 2.9.0 da 2.8.0

1.  Run `bin/update <project_path>`.

## L'aggiornamento a 2.8.0 da 2.7.0

1.  Rimuovere `cordova-2.7.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.8.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

<!-- SS Eclipse -->

1.  Copiare il nuovo `cordova.js` nel vostro progetto.

2.  Aggiorna il tuo HTML per utilizzare il nuovo file di `cordova.js` .

3.  Copia il file `res/xml/config.xml` per abbinare `framework/res/xml/config.xml`.

4.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

5.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.7.0 da 2.6.0

1.  Rimuovere `cordova-2.6.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.7.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.7.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file di `cordova-2.7.0.js` .

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

8.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## L'aggiornamento a 2.6.0 da 2.5.0

1.  Rimuovere `cordova-2.5.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.6.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.6.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.6.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

8.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

Eseguire `bin/update < progetto >` con il percorso del progetto elencato nella directory dei sorgenti di Cordova.

## L'aggiornamento a 2.5.0 da 2.4.0

1.  Rimuovere `cordova-2.4.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.5.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.5.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.5.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

8.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## L'aggiornamento a 2.4.0 da 2.3.0

1.  Rimuovere `cordova-2.3.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.4.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.4.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.4.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## L'aggiornamento a 2.3.0 da 2.2.0

1.  Rimuovere `cordova-2.2.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.3.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.3.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.3.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## L'aggiornamento alla 2.2.0 da 2.1.0

1.  Rimuovere `cordova-2.1.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.2.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.2.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.2.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## L'aggiornamento a 2.1.0 da 2.0.0

1.  Rimuovere `cordova-2.0.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.1.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.1.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.1.0.js` file.

6.  Copia il `res/xml/config.xml` da abbinare`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## L'aggiornamento a 2.0.0 da 1.9.0

1.  Rimuovere `cordova-1.9.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-2.0.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.0.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.0.0.js` file.

6.  Copia il `res/xml/config.xml` da abbinare`framework/res/xml/config.xml`.

Nella 2.0.0 release, il file `config. xml` unisce e sostituisce `cordova.xml` e `plugins`. I vecchi file sono obsolete e mentre lavorano ancora in 2.0.0, smetterà di funzionare in una versione futura.

## Aggiornamento a 1.9.0 da 1.8.1

1.  Rimuovere `cordova-1.8.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.9.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.9.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file di `cordova-1.9.0.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

A causa dell'introduzione della `CordovaWebView` nella 1.9.0, rilascio, plugin di terze parti potrebbero non funzionare. Questi plugin necessario per ottenere un contesto dalla `CordovaInterface` utilizzando `getContext()` o `getActivity()`. Se non sei un esperto sviluppatore Android, si prega di contattare il manutentore di plugin e aggiungere questo compito a loro tracciatore di bug.

## Aggiornamento a 1.8.0 da 1.8.0

1.  Rimuovere `cordova-1.8.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.8.1.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.8.1.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file di `cordova-1.8.1.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.8.0 da 1.7.0

1.  Rimuovere `cordova-1.7.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.8.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.8.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.8.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.8.0 da 1.7.0

1.  Rimuovere `cordova-1.7.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.8.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.8.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.8.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.7.0 da 1.6.1

1.  Rimuovere `cordova-1.6.1.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.7.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.7.0.js` nel vostro progetto.

5.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.6.1 da 1.6.0

1.  Rimuovere `cordova-1.6.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.6.1.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.6.1.js` nel vostro progetto.

5.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.6.0 da 1.5.0

1.  Rimuovere `cordova-1.5.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.6.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.6.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file di `cordova-1.6.0.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Sostituire `res/xml/phonegap.xml` con `res/xml/cordova.xml` corrispondenza `framework/res/xml/cordova.xml`.

## Aggiornamento a 1.5.0 da 1.4.0

1.  Rimuovere `phonegap-1.4.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `cordova-1.5.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.5.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file di `cordova-1.5.0.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Sostituire `res/xml/phonegap.xml` con `res/xml/cordova.xml` corrispondenza `framework/res/xml/cordova.xml`.

## Aggiornamento a 1.4.0 da 1.3.0

1.  Rimuovere `phonegap-1.3.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `phonegap-1.4.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.4.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file `phonegap-1.4.0.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Aggiornamento `res/xml/phonegap.xml` per abbinare`framework/res/xml/phonegap.xml`.

## Aggiornamento a 1.3.0 da 1.2.0

1.  Rimuovere `phonegap-1.2.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `phonegap-1.3.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.3.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file `phonegap-1.2.0.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Aggiornamento `res/xml/phonegap.xml` per abbinare`framework/res/xml/phonegap.xml`.

## Aggiornamento a 1.2.0 da 1.1.0

1.  Rimuovere `phonegap-1.1.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `phonegap-1.2.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.2.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file `phonegap-1.2.0.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Aggiornamento `res/xml/phonegap.xml` per abbinare`framework/res/xml/phonegap.xml`.

## Aggiornamento a 1.1.0 da 1.0.0

1.  Rimuovere `phonegap-1.0.0.jar` dalla directory `libs` del progetto.

2.  Aggiungi `phonegap-1.1.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto di Eclipse e fare una pulizia.

4.  Copiare il nuovo `phonegap-1.1.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file `phonegap-1.1.0.js` .

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.0.0 da 0.9.6

1.  Rimuovere `phonegap-0.9.6.jar` dalla directory `libs` del progetto.

2.  Aggiungi `phonegap-1.0.0.jar` directory `libs` del progetto.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto di Eclipse e fare una pulizia.

4.  Copiare il nuovo `phonegap-1.0.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo file `phonegap-1.0.0.js` .

6.  Aggiungere il `res/xml/plugins.xml` corrispondenza `framework/res/xml/plugins.xml`.