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

# Piattaforma ubuntu guida

## Rilascio iniziale

Benvenuti alla versione iniziale di supporto della piattaforma Ubuntu in Cordova. Con questa release, il focus è lo sviluppo di un sistema Ubuntu e utilizzando il Workflow Cordova Web progetto Dev. Questo include l'aggiunta della piattaforma di Ubuntu al progetto, aggiungendo il plugin standard di Cordova e, naturalmente, generazione e l'esecuzione di applicazioni per la piattaforma di Ubuntu.

### Ubuntu SDK

Si potrebbe anche voler installare l'ambiente di sviluppo di Ubuntu QtCreator. Vedi [developer.ubuntu.com][1] per maggiori informazioni. (QtCreator SDK non è necessario aggiungere il supporto piattaforma Ubuntu all'app Cordova).

 [1]: http://developer.ubuntu.com

### Piattaforme Ubuntu Runtime

Ubuntu è ben noto per il suo ambiente Desktop (per computer portatili, PC e simili). Ubuntu Touch estende il sistema operativo Ubuntu sul tablet e telefoni cellulari. Piattaforme di runtime di Ubuntu hanno diverse architetture di CPU (x 86, armhf, ecc.). Codice app e plugin deve essere compilato in modo appropriato. Il supporto per questa vasta area si sta evolvendo rapidamente in Ubuntu.

### Ultime informazioni

Per informazioni aggiornate sul supporto di Cordova app per Ubuntu runtime piattaforme, vedere [wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## Requisiti di piattaforma di sviluppo

Per questa versione iniziale, la piattaforma di sviluppo dovrebbe essere un Desktop di Ubuntu. 13.10 Di Ubuntu (nome in codice 'impertinente') o più tardi è necessaria per godere il set completo di funzionalità supportate.

È possibile installare Cordova su sistemi non Ubuntu (utilizzando npm), ma importanti funzionalità sono disponibili solo attraverso pacchetti debian Ubuntu in questo momento.

## Installazione di Cordova

Aggiungere Ubuntu Cordova [Archivio personale pacchetto][3] sistema Ubuntu:

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

Installare il pacchetto di cordova-cli (e le relative dipendenze):

    $ sudo apt-get install cordova-cli
    

## Workflow di progetto

### Creare un progetto

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### Spostarsi nella Directory del progetto

    $ cd project1
    

### Aggiungere la piattaforma Ubuntu

    $ cordova platform add ubuntu
    

### Costruire per Ubuntu

    $ cordova build ubuntu
    

### Eseguire l'applicazione

    $ cordova run ubuntu
    

### Aggiungere il Plugin lo stato della batteria

    $ cordova plugin add org.apache.cordova.battery-status