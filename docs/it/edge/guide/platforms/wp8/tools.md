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

# Windows Phone strumenti da riga di comando

Il `cordova` l'utilità della riga di comando è uno strumento ad alto livello che consente di creare applicazioni su piattaforme diverse in una volta. Una versione precedente di Cordova framework fornisce il set di strumenti da riga di comando specifici per ogni piattaforma. Per utilizzarli come alternativa alla CLI, dovete scaricare questa versione di Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere la piattaforma che si desidera fare riferimento. Gli strumenti qui descritti sono in genere disponibili nel livello superiore `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Per informazioni sull'interfaccia della riga di comando a basso livello che Abilita plugin, vedere utilizzando Plugman per gestire i plugin. Per una panoramica, vedere applicazione plugin.

## Windows Phone

Gli strumenti della riga di comando di Windows Phone supportano la creazione, costruzione ed esecuzione di nuovi progetti. Comandi devono essere eseguiti da un prompt cmd o powershell.

Il repo WP8 ora include il codice per la costruzione sia WP7 + WP8 apps. Repo ha sottodirectory per ciascuna: `wp7/` e`wp8/`.

## Creare un progetto

Ci sono 2 modi per andare sulla creazione di una nuova applicazione Apache Cordova WP7 o WP8.

### Eseguire il File Batch per creare e installare i modelli

*   La radice del repo contiene un `createTemplates.bat` file. Facendo doppio clic su esso genera due `.zip` file: `CordovaWP7_x_x_x.zip` e `CordovaWP8_x_x_x.zip` , dove *x.x.x* rappresenta il numero di versione corrente. Per utilizzare facilmente questi file in Visual Studio, copiali in `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` . Vi sono poi in grado di creare nuove applicazioni per Windows Phone di Apache Cordova da Visual Studio **File → nuovo progetto** menu.

*   Se si esegue il file batch dalla riga di comando, è possibile chiamare anche con un parametro per installare automaticamente

Eseguire lo script:

    > createTemplates.bat-installare
    

### Utilizzare gli script di creazione della riga di comando

Eseguire il `create` comando, specificando il percorso esistente per il progetto, l'identificatore del pacchetto stile retro-dominio e nome visualizzato dell'app. Ecco la sintassi per Windows Phone 7 e 8:

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Avviare Visual Studio e aprire il file di soluzione (sln) in (C:\path\to\my\_new\_project)

Costruire ed eseguirlo

## Il progetto di costruzione (pulire, poi costruire)

*   Eseguire il debug
    
    $ C:\path\to\my\_new\_project\cordova\build - debug

*   Rilascio
    
    $ C:\path\to\my\_new\_project\cordova\build - rilascio

## In esecuzione l'App

Eseguire il comando 'Esegui' con i seguenti parametri *facoltativi*

*   Destinazione specifica. Ciò include `--emulator` , `--device` , o`--target=<targetID>`.

*   Costruire specifiche. Ciò include `--debug` , `--release` , o`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[destinazione\] \[Build\]

Per impostazione predefinita il `run` comando viene chiamato con `--emulator --debug` se il flag non sono forniti.

## Pulizia

    $ C:\path\to\my_new_project\cordova\clean