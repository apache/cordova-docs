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

# L'aggiornamento di Windows 8

Questa guida Mostra come modificare Windows 8 progetti per l'aggiornamento da versioni precedenti di Cordova. La maggior parte di queste istruzioni si applicano ai progetti creati con un vecchio set di strumenti da riga di comando che precedono la `cordova` utilità CLI. L'interfaccia della riga di comando per informazioni, vedere come aggiornare la versione di CLI.

## Aggiornamento a 3.2.0 da 3.1.0

Per i progetti creati con il cordova CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire`cordova platform update windows8`.

Per i progetti non creati con la CLI di cordova, eseguire:

        bin\update <project_path>
    

## Aggiornamento a 3.1.0

Supporto di Cordova CLI per Windows 8 è stato introdotto in Cordova 3.1.0. Per aggiornare, consigliamo di creazione di un nuovo CLI Cordova progetto e spostando sopra tutti i beni necessari.

## Aggiornamento a 2.9.0 da 2.8.0

I comandi seguenti dovrebbero essere fatto all'interno di Visual Studio per essere sicuri che i riferimenti di progetto sono aggiornati o eliminati.

1.  Rimuovere `cordova-2.8.0.js` del progetto `www` directory.

2.  Aggiungi `cordova.js` file dall'origine al progetto `www` directory. (Si noti che il file non contiene più un numero di versione nel nome file).

3.  Costruire e testare!

## Aggiornamento a 2.8.0 da 2.7.0

I comandi seguenti dovrebbero essere fatto all'interno di Visual Studio per essere sicuri che i riferimenti di progetto sono aggiornati o eliminati.

1.  Rimuovere `cordova-2.7.0.js` del progetto `www` directory.

2.  Aggiungi `cordova.js` file dall'origine al progetto `www` directory. (Si noti che il file non contiene più un numero di versione nel nome file).

3.  Costruire e testare!