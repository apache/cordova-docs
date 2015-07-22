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

# L'aggiornamento di Windows Phone

Questa guida Mostra come modificare i progetti Windows Phone, entrambe le versioni 7 e 8, eseguire l'aggiornamento da versioni precedenti di Cordova. La maggior parte di queste istruzioni si applicano ai progetti creati con un vecchio set di strumenti da riga di comando che precedono la `cordova` utilità CLI. L'interfaccia della riga di comando per informazioni, vedere come aggiornare la versione di CLI. La sezione seguente viene illustrato come eseguire l'aggiornamento da progetti non-CLI.

## Aggiornamento a 3.2.0 da 3.1.0

Per i progetti creati con il cordova CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update wp8` (o `wp7` , per le piattaforme che hai aggiunto al progetto).

Per i progetti non creati con la CLI di cordova, eseguire:

        bin\update <project_path>
    

## Aggiornamento a 3.1.0 da 3.0.0

Per i progetti creati con il cordova CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update wp8` (o `wp7` , per le piattaforme che hai aggiunto al progetto).

Per i progetti non creati con la CLI di cordova, eseguire:

        bin\update <project_path>
    

## Aggiornamento per il CLI (3.0.0) da 2.9.0

1.  Creare un nuovo progetto di Apache Cordova 3.0.0 utilizzando la CLI, cordova, come descritto in l'interfaccia della riga di comando.

2.  Aggiungere le piattaforme per il progetto di cordova, per esempio:`cordova
platform add wp7 wp8`.

3.  Copiare il contenuto del progetto `www` nella directory del `www` cartella alla radice del progetto cordova appena creato.

4.  Copiare o sovrascrivere qualsiasi attività nativo dal progetto originale ( `SplashScreen` , `ApplicationIcon` , ecc), rendendo sicuri di aggiungere nuovi file per il `.csproj` file. Windows build di progetto all'interno del telefono al `platforms\wp7` o `platforms\wp8` directory.

5.  Utilizzare lo strumento CLI di cordova per installare il plug-in che è necessario. Si noti che il CLI gestisce tutti i core API come plugin, così che può essere necessario aggiungere. Solo 3.0.0 plugin sono compatibili con il CLI.

6.  Costruire e testare.

## Aggiornamento a 3.0.0 (non-CLI) da 2.9.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 o WP8 3.0.0 del progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

4.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

5.  Costruire e testare.

**Nota**: tutti i core API vengono rimossi dalla versione 3.0 di Cordova e devono essere installate separatamente come plugin. Per ulteriori informazioni su come riattivare queste caratteristiche in un flusso di lavoro non-CLI, vedere utilizzando Plugman per gestire i plugin.

## Aggiornamento a 2.9.0 da 2.8.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 o WP8 2.9.0 di progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiornare il nome di `cordova.js` nel tag HTML se sta ancora utilizzando cordova-VERSION.js (dovrebbe essere solo`cordova.js`).

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che anche essi vengono aggiunti al file csproj.

6.  Costruire e testare.

## Aggiornamento a 2.8.0 da 2.7.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 o WP8 2.8.0 di progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova.js` file. (Si noti la mancanza di un numero di versione nel nome file).

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.7.0 da 2.6.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 o WP8 2.7.0 di progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.7.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.6.0 da 2.5.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 o WP8 2.6.0 del progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.6.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.5.0 da 2.4.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 o WP8 2.5.0 del progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.5.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.4.0 da 2.3.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 o WP8 2.4.0 del progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.4.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.3.0 da 2.2.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 2.3.0 di progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.3.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.2.0 da 2.1.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 2.2.0 del progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.2.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.1.0 da 2.0.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP7 2.1.0 del progetto.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.1.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 2.0.0 da 1.9.0

Ci sono stati notevoli cambiamenti alla struttura del progetto WP7 in Apache Cordova 2.0.0 che fanno questo aggiornamento un po' più coinvolto che gli altri. Essenzialmente questo non è un aggiornamento ma la creazione di un nuovo progetto e copia sopra del file di origine esistenti.

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo progetto di Apache Cordova WP7 2.0.

2.  Copiare il contenuto del tuo `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-2.0.0.js` file.

4.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

5.  Copia su qualsiasi plugin dalla `plugins` nella directory del nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

6.  Costruire e testare.

## Aggiornamento a 1.9.0 da 1.8.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.9.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.9.0.js` file.

## Aggiornamento a 1.8.0 da 1.7.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.8.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.8.0.js` file.

## Aggiornamento a 1.7.0 da 1.6.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.7.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.7.0.js` file.

## Aggiornamento a 1.6.1 da 1.6.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.6.1.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.6.1.js` file.

## Aggiornamento a 1.6.0 da 1.5.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.6.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.6.0.js` file.

## Aggiornamento a 1.5.0 da 1.4.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.5.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.5.0.js` file.

## Aggiornamento a 1.4.0 da 1.3.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.4.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.4.0.js` file.

## Aggiornamento a 1.3.0 da 1.2.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.3.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.3.0.js` file.

## Aggiornamento a 1.2.0 da 1.1.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: È possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.2.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.2.0.js` file.

## Aggiornamento a 1.1.0 da 1.0.0

Nella finestra Esplora soluzioni di Visual Studio:

1.  Eliminare `GapLib/WP7CordovaClassLib.dll` dal progetto.

2.  Rimuovere il riferimento a `WP7CordovaClassLib` nella directory **riferimenti** .

3.  Tasto destro del mouse su **riferimenti** e scegliere **Aggiungi riferimento**.

4.  Passare alla nuova distribuzione e aggiungere il `WP7CordovaClassLib.dll` file.
    
    **Nota**: è possibile visualizzare la versione della DLL cliccando col tasto destro sul riferimento e selezionando **Proprietà**.

5.  Copiare il nuovo `cordova-1.1.0.js` nel vostro progetto. (Essere sicuri che è contrassegnato come contenuto).

6.  Aggiorna il tuo HTML per utilizzare il nuovo `cordova-1.1.0.js` file.