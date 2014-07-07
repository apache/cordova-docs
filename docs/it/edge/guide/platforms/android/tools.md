* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Shell Android strumento guida

Questa guida illustra come utilizzare set di Cordova di piattaforma-centrato shell strumenti per sviluppare applicazioni Android. Questo percorso di sviluppo, discusso nella panoramica, può offrire una maggiore gamma di opzioni di sviluppo che le piattaforme CLI strumento descritto in l'interfaccia della riga di comando. Ad esempio, è necessario utilizzare strumenti di shell quando si distribuisce un'usanza Cordova WebView accanto alle componenti nativi. Prima di utilizzare qualsiasi percorso di sviluppo, è innanzitutto necessario configurare l'ambiente Android SDK come descritto nella guida alla piattaforma Android.

Per attivare strumenti di shell per Android, scaricare Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere ciascuna si desidera fare riferimento, `android` in questo caso. Gli strumenti pertinenti sono in genere disponibili nel primo livello `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Questi strumenti consentono di creare, compilare ed eseguire applicazioni Android. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin. Per dettagli su come sviluppare plugin, vedere applicazione plugin.

## Creare un progetto

Eseguire il `create` comando, specificando il percorso esistente per il progetto, l'identificatore del pacchetto stile retro-dominio e nome visualizzato dell'app. Ecco la sintassi per Mac/Linux e Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Costruire

Questo pulisce poi costruisce un progetto.

Debug, su Windows o Mac/Linux:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Rilascio, su Windows o Mac/Linux:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Eseguire l'applicazione

Il `run` comando accetta i seguenti parametri *facoltativi* :

*   Destinazione specifica. Ciò include `--emulator` , `--device` , o`--target=<targetID>`.

*   Costruire specifiche. Ciò include `--debug` , `--release` , o`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Assicurarsi di creare almeno un Android Virtual Device, altrimenti viene richiesto di farlo con il `android` comando. Se più di una AVD è disponibile come un bersaglio, viene richiesto di selezionare uno. Per impostazione predefinita il `run` comando rileva un dispositivo collegato o un emulatore attualmente in esecuzione, se non viene trovato nessun dispositivo.

## Registrazione

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Pulizia

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Manuale uso di Ant

Se si desidera chiamare Ant direttamente dalla riga di comando, come `ant debug install` , è necessario specificare ulteriori parametri per il comando di formica:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

Ciò è perché le directory utilizzate dagli script Ant di Cordova sono diverse rispetto a quello predefinito. Questo viene fatto per evitare conflitti quando formica viene eseguito dalla riga di comando rispetto all'interno di Eclipse/ADT.

Questi parametri aggiuntivi vengono aggiunti automaticamente per te quando si utilizza il `cordova/build` e `cordova/run` script descritti sopra. Per questo motivo si consiglia di utilizzare il `cordova/build` e `cordova/run` script invece Ant chiamando direttamente dalla riga di comando.