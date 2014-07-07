* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# iOS guida strumento Shell

Questa guida illustra come utilizzare set di Cordova di piattaforma-centrato shell strumenti per sviluppare applicazioni iOS. Questo percorso di sviluppo, discusso nella panoramica, può offrire una maggiore gamma di opzioni di sviluppo per iOS rispetto le piattaforme CLI strumento descritto in l'interfaccia della riga di comando. Ad esempio, è necessario utilizzare strumenti di shell quando si distribuisce un'usanza Cordova WebView accanto alle componenti nativi. Prima di utilizzare qualsiasi percorso di sviluppo, è innanzitutto necessario configurare l'ambiente SDK come descritto nella guida piattaforma iOS. Questi strumenti si basano su strumenti della riga di comando di Xcode come `xcode-select` e`xcodebuild`.

Per attivare strumenti di shell per iOS, scaricare Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere ciascuna si desidera fare riferimento, `ios` in questo caso. Gli strumenti pertinenti sono in genere disponibili nel primo livello `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Questi strumenti consentono di creare, compilare ed eseguire applicazioni iOS. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin. Per dettagli su come sviluppare plugin, vedere applicazione plugin.

## Creare un progetto

Eseguire il `create` comando, specificando il percorso esistente per il progetto, l'identificatore del pacchetto stile retro-dominio e nome visualizzato dell'app.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Costruire un progetto

        $ /path/to/my_new_project/cordova/build
    

## Eseguire l'applicazione su un emulatore

        $ /path/to/my_new_project/cordova/run
    

## Rilasciando

        $ /path/to/my_new_project/cordova/release
    

## Registrazione

        $ /path/to/my_new_project/cordova/log