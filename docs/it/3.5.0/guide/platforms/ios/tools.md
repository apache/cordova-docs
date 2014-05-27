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

# iOS Command-line Tools

Il `cordova` l'utilità della riga di comando è uno strumento ad alto livello che consente di creare applicazioni su piattaforme diverse in una volta. Una versione precedente di Cordova framework fornisce il set di strumenti da riga di comando specifici per ogni piattaforma. Per utilizzarli come alternativa alla CLI, dovete scaricare questa versione di Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere la piattaforma che si desidera fare riferimento. Gli strumenti qui descritti sono in genere disponibili nel livello superiore `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Gli strumenti della riga di comando di iOS sono costruiti su script di shell e fare affidamento sugli strumenti della riga di comando di Xcode come `xcode-select` e`xcodebuild`.

Per informazioni sull'interfaccia della riga di comando a basso livello che Abilita plugin, vedere utilizzando Plugman per gestire i plugin. Per una panoramica, vedere applicazione plugin.

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