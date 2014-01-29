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

# L'aggiornamento di Android

Questa guida Mostra come modificare progetti Android per l'aggiornamento da versioni precedenti di Cordova. La maggior parte di queste istruzioni si applicano ai progetti creati con un vecchio set di strumenti da riga di comando che precedono la `cordova` utilità CLI. L'interfaccia della riga di comando per informazioni, vedere come aggiornare la versione di CLI.

## L'aggiornamento a 3.3.0 da 3.2.0

Seguire la stessa instructinos come per`3.2.0`.

A partire da 3.3.0, il runtime di Cordova è ora compilato come una libreria di Android invece di un vaso. Questo dovrebbe avere alcun effetto per l'utilizzo della riga di comando, ma gli utenti IDE saranno necessario importare appena aggiunto `MyProject-CordovaLib` progetto nella loro area di lavoro.

## L'aggiornamento a 3.2.0 da 3.1.0

Per i progetti creati con il cordova CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire`cordova platform update android`

Per i progetti non creati con la CLI di cordova, eseguire:

        bin/update <project_path>
    

## L'aggiornamento a 3.1.0 da 3.0.0

Per i progetti creati con il cordova CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire`cordova platform update android`

Per i progetti non creati con la CLI di cordova, eseguire:

        bin/update <project_path>
    

## Aggiornamento per il CLI (3.0.0) da 2.9.0

1.  Creare un nuovo progetto di Apache Cordova 3.0.0 utilizzando la CLI, cordova, come descritto in l'interfaccia della riga di comando.

2.  Aggiungere le piattaforme il progetto di cordova, per esempio:`cordova
platform add android`.

3.  Copiare il contenuto del tuo progetto `www` nella directory del `www` cartella alla radice del progetto cordova appena creato.

4.  Copiare qualsiasi attività nativo dal tuo vecchio progetto nella directory appropriate sotto `platforms/android` : è la directory dove esiste il tuo progetto di cordova-android nativo.

5.  Utilizzare lo strumento CLI di cordova per installare il plug-in che è necessario. Si noti che il CLI gestisce tutti i core API come plugin, così che può essere necessario aggiungere. Solo 3.0.0 plugin sono compatibili con il CLI.

## Aggiornamento a 3.0.0 da 2.9.0

1.  Creare un nuovo progetto Apache Cordova Android.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto.

3.  Copiare qualsiasi attività nativo Android dal tuo `res` nella directory del nuovo progetto.

4.  Copia su qualsiasi plugin installato dalla `src` sottodirectory nel nuovo progetto.

5.  Assicurarsi di aggiornare qualsiasi deprecato `<plugin>` riferimenti dal vecchio `config.xml` file per il nuovo `<feature>` specifica.

6.  Aggiornare tutti i riferimenti per il `org.apache.cordova.api` pacchetto di`org.apache.cordova`.
    
    **Nota**: tutti i core API sono stati rimossi e devono essere installate come plugin. Per dettagli, vedere la Plugman usando per gestire guida Plugins.

## Aggiornamento a 2.9.0 da 2.8.0

1.  Eseguire`bin/update <project_path>`.

## Aggiornamento a 2.8.0 da 2.7.0

1.  Rimuovere `cordova-2.7.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.8.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

<!-- SS Eclipse -->

1.  Copiare il nuovo `cordova.js` nel vostro progetto.

2.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova.js` file.

3.  Copia il `res/xml/config.xml` file per abbinare`framework/res/xml/config.xml`.

4.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

5.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.7.0 da 2.6.0

1.  Rimuovere `cordova-2.6.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.7.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.7.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.7.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

8.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.6.0 da 2.5.0

1.  Rimuovere `cordova-2.5.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.6.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.6.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.6.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

8.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

Eseguire `bin/update <project>` con il percorso del progetto elencati nella directory dei sorgenti di Cordova.

## Aggiornamento a 2.5.0 da 2.4.0

1.  Rimuovere `cordova-2.4.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.5.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.5.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.5.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Aggiornamento `framework/res/xml/config.xml` per avere impostazioni simili, come ha fatto in precedenza.

8.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.4.0 da 2.3.0

1.  Rimuovere `cordova-2.3.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.4.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.4.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.4.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.3.0 da 2.2.0

1.  Rimuovere `cordova-2.2.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.3.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.3.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.3.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.2.0 da 2.1.0

1.  Rimuovere `cordova-2.1.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.2.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.2.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.2.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.1.0 da 2.0.0

1.  Rimuovere `cordova-2.0.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.1.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.1.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.1.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

7.  Copiare i file da `bin/templates/cordova` per il progetto `cordova` directory.

## Aggiornamento a 2.0.0 da 1.9.0

1.  Rimuovere `cordova-1.9.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-2.0.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-2.0.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.0.0.js` file.

6.  Copia il `res/xml/config.xml` corrispondere`framework/res/xml/config.xml`.

Nella 2.0.0 rilasciare, il `config.xml` file unisce e sostituisce `cordova.xml` e `plugins.xml` . I vecchi file sono obsolete e mentre lavorano ancora in 2.0.0, smetterà di funzionare in una versione futura.

## Aggiornamento a 1.9.0 da 1.8.1

1.  Rimuovere `cordova-1.8.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.9.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.9.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.9.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

A causa dell'introduzione della `CordovaWebView` nella 1.9.0 rilascio, plugin di terze parti potrebbero non funzionare. Questi plugin necessario per ottenere un contesto dalla `CordovaInterface` utilizzando `getContext()` o `getActivity()` . Se non sei un esperto sviluppatore Android, si prega di contattare il manutentore di plugin e aggiungere questo compito a loro tracciatore di bug.

## Aggiornamento a 1.8.0 da 1.8.0

1.  Rimuovere `cordova-1.8.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.8.1.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.8.1.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.8.1.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.8.0 da 1.7.0

1.  Rimuovere `cordova-1.7.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.8.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.8.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.8.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.8.0 da 1.7.0

1.  Rimuovere `cordova-1.7.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.8.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.8.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.8.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.7.0 da 1.6.1

1.  Rimuovere `cordova-1.6.1.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.7.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.7.0.js` nel vostro progetto.

5.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.6.1 da 1.6.0

1.  Rimuovere `cordova-1.6.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.6.1.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.6.1.js` nel vostro progetto.

5.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.6.0 da 1.5.0

1.  Rimuovere `cordova-1.5.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.6.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.6.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.6.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Sostituire `res/xml/phonegap.xml` con `res/xml/cordova.xml` da abbinare`framework/res/xml/cordova.xml`.

## Aggiornamento a 1.5.0 da 1.4.0

1.  Rimuovere `phonegap-1.4.0.jar` del progetto `libs` directory.

2.  Aggiungi `cordova-1.5.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `cordova-1.5.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.5.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Sostituire `res/xml/phonegap.xml` con `res/xml/cordova.xml` da abbinare`framework/res/xml/cordova.xml`.

## Aggiornamento a 1.4.0 da 1.3.0

1.  Rimuovere `phonegap-1.3.0.jar` del progetto `libs` directory.

2.  Aggiungi `phonegap-1.4.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.4.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `phonegap-1.4.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Aggiornamento `res/xml/phonegap.xml` per abbinare`framework/res/xml/phonegap.xml`.

## Aggiornamento a 1.3.0 da 1.2.0

1.  Rimuovere `phonegap-1.2.0.jar` del progetto `libs` directory.

2.  Aggiungi `phonegap-1.3.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.3.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `phonegap-1.2.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Aggiornamento `res/xml/phonegap.xml` per abbinare`framework/res/xml/phonegap.xml`.

## Aggiornamento a 1.2.0 da 1.1.0

1.  Rimuovere `phonegap-1.1.0.jar` del progetto `libs` directory.

2.  Aggiungi `phonegap-1.2.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.2.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `phonegap-1.2.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

7.  Aggiornamento `res/xml/phonegap.xml` per abbinare`framework/res/xml/phonegap.xml`.

## Aggiornamento a 1.1.0 da 1.0.0

1.  Rimuovere `phonegap-1.0.0.jar` del progetto `libs` directory.

2.  Aggiungi `phonegap-1.1.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.1.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `phonegap-1.1.0.js` file.

6.  Aggiornamento `res/xml/plugins.xml` per abbinare`framework/res/xml/plugins.xml`.

## Aggiornamento a 1.0.0 da 0.9.6

1.  Rimuovere `phonegap-0.9.6.jar` del progetto `libs` directory.

2.  Aggiungi `phonegap-1.0.0.jar` al progetto `libs` directory.

3.  Se si utilizza Eclipse, si prega di aggiornare il progetto Eclipse e fare una pulita.

4.  Copiare il nuovo `phonegap-1.0.0.js` nel vostro progetto.

5.  Aggiorna il tuo HTML per utilizzare il nuovo `phonegap-1.0.0.js` file.

6.  Aggiungere il `res/xml/plugins.xml` corrispondere`framework/res/xml/plugins.xml`.