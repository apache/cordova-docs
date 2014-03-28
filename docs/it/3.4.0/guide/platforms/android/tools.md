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

# Android strumenti da riga di comando

Il `cordova` l'utilità della riga di comando è uno strumento ad alto livello che consente di creare applicazioni su piattaforme diverse in una volta. Una versione precedente di Cordova framework fornisce il set di strumenti da riga di comando specifici per ogni piattaforma. Per utilizzarli come alternativa alla CLI, dovete scaricare questa versione di Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere la piattaforma che si desidera fare riferimento. Gli strumenti qui descritti sono in genere disponibili nel livello superiore `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Per informazioni sull'interfaccia della riga di comando a basso livello che Abilita plugin, vedere utilizzando Plugman per gestire i plugin. Per una panoramica, vedere applicazione plugin.

## Creare un progetto

Eseguire il `create` comando, specificando il percorso esistente per il progetto, l'identificatore del pacchetto stile retro-dominio e nome visualizzato dell'app. Ecco la sintassi per Mac e Windows:

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## Costruire

Questo pulisce poi costruisce un progetto.

Debug, su Mac o Windows:

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Rilascio, su Mac o Windows:

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## Eseguire l'applicazione

Il `run` comando accetta i seguenti parametri *facoltativi* :

*   Destinazione specifica. Ciò include `--emulator` , `--device` , o`--target=<targetID>`.

*   Costruire specifiche. Ciò include `--debug` , `--release` , o`--nobuild`.
    
    $ /path/to/project/cordova/run \[destinazione\] \[Build\] $ C:\path\to\project\cordova\run.bat \[destinazione\] \[Build\]

Assicurarsi di creare almeno un Android Virtual Device, altrimenti viene richiesto di farlo con il `android` comando. Se più di una AVD è disponibile come un bersaglio, viene richiesto di selezionare uno. Per impostazione predefinita il `run` comando rileva un dispositivo collegato o un emulatore attualmente in esecuzione, se non viene trovato nessun dispositivo.

## Registrazione

    $ /path/to/project/cordova/log $ C:\path\to\project\cordova\log.bat
    

### Pulizia

    $ /path/to/project/cordova/clean $ C:\path\to\project\cordova\clean.bat