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

# Strumenti della riga di comando di blackBerry

Il `cordova` l'utilità della riga di comando è uno strumento ad alto livello che consente di creare applicazioni su piattaforme diverse in una volta. Una versione precedente di Cordova framework fornisce il set di strumenti da riga di comando specifici per ogni piattaforma. Per utilizzarli come alternativa alla CLI, dovete scaricare questa versione di Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere la piattaforma che si desidera fare riferimento. Gli strumenti qui descritti sono in genere disponibili nel livello superiore `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

## Creare un progetto

Eseguire il `create` comando, specificando il percorso esistente per il progetto, l'identificatore del pacchetto stile retro-dominio e nome visualizzato dell'app. Ecco la sintassi per Mac e Windows:

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**Nota:** La piattaforma BlackBerry ignora il segnaposto del nome di pacchetto ( `com.example.project_name` ), ma è ancora necessario per l'uso di strumenti multipiattaforma.

## Costruire un progetto

Per i progetti di BlackBerry, assicurati di personalizzare il `project.properties` file nella directory radice del progetto Cordova. Devi farlo per fornire il vostro BlackBerry firma chiave password e specificare i percorsi per il BlackBerry WebWorks SDK e BlackBerry emulatore file eseguibili.

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## Avviare l'emulatore

Per i progetti di BlackBerry, assicurati di personalizzare il `project.properties` file nella radice della directory del progetto di Cordova. Devi farlo per fornire il vostro BlackBerry firma chiave password e specificare i percorsi per il BlackBerry WebWorks SDK e BlackBerry emulatore file eseguibili.

    $ /path/to/my_new_project/cordova/run <platform>
    

e poi scegliere 'no' quando richiesto con:

    Avete un dispositivo BlackBerry collegato al computer? (y/n) $ /path/to/my_new_project/cordova/run < piattaforma >
    

e poi scegliere 'no' quando richiesto con:

    Avete un dispositivo BlackBerry collegato al computer? (y/n)
    

## Registrazione

Purtroppo, registri direttamente dal dispositivo in streaming è attualmente supportato. Tuttavia, BlackBerry offre supporto integrato Web Inspector per Playbook e BlackBerry dispositivi smartphone in esecuzione BlackBerry OS 7.0 e superiori. È possibile accedere anche i log dell'applicazione (compresi eventuali chiamate al `console.log` ) sul vostro dispositivo tenendo premuto il tasto 'ALT ' dalla schermata iniziale e digitando i tasti ' lglg '.