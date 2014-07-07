* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Firefox guida piattaforma OS

Questa guida descrive come configurare l'ambiente di sviluppo per creare Cordova apps per dispositivi di OS di Firefox, poi prova e pubblicare tali applicazioni.

## Requisiti e supporto

Firefox OS apps sono fondamentalmente solo applicazioni web, con l'aggiunta di un file manifest.webapp che definisce i metadati sull'app e permette di essere installato su dispositivi di OS di Firefox. Può essere utilizzato qualsiasi piattaforma che supporti di Cordova.Per saperne di più sulla creazione di applicazioni web, consultare l' [App Center][1] su [MDN][2].

 [1]: https://developer.mozilla.org/en-US/Apps
 [2]: https://developer.mozilla.org/en-US/

## Installazione e configurazione di un ambiente

Prima di installare [node. js][3], quindi installare il pacchetto di Cordova in questo modo:

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

Successivamente, creare un app di Cordova, quindi spostarsi nella directory appena creata:

    $ cordova create test-app
    $ cd test-app
    

Aggiungi Firefox OS piattaforme supportate per l'app con il seguente:

    $ cordova platform add firefoxos
    

Questo crea una app di Firefox OS in piattaforme/firefoxos/www directory, che attualmente sembra lo stesso, tranne che ha un file di manifesto di Firefox (manifest.webapp) all'interno della directory di www.

## Lo sviluppo di app

A questo punto sei pronto per andare, cambiare il codice all'interno della prova-app/www qualunque cosa si desidera l'app può essere. È possibile aggiungere [supportati plugin]() per l'applicazione utilizzando "aggiungere plugin cordova", ad esempio:

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

È inoltre necessario aggiungere un file personalizzato manifest.webapp nella directory di prova-app/www, che dovrebbe comprendere almeno i seguenti:

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

Per ulteriori informazioni sui manifesti di Firefox App, leggere il [manifesto applicazione][4] su MDN.

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

Quando viene scritto il codice dell'app, distribuire le modifiche al sistema operativo Firefox app che hai aggiunto al tuo progetto con

    $ cordova prepare
    

Si noti che un'istruzione di compilazione (cioè compilazione di cordova) non è necessaria quando si distribuisce alla piattaforma OS di Firefox, come Firefox OS apps sono basate su HTML e quindi non compilato.

## Test e debug

Le app possono essere testati utilizzando Firefox OS [App Manager][5].

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

Dopo aver collegato l'App Manager al vostro dispositivo/simulatore di test, selezionare l'opzione "Aggiungi App confezionata", quindi assicurarsi che si punta alla prova-app/piattaforme/firefoxos/www/directory per includere l'App nell'interfaccia Manager.

Qui è possibile installare l'app sul tuo dispositivo/simulatore di test (con il pulsante "Aggiorna"). Utilizzando il pulsante è possibile quindi eseguire il debug dell'applicazione e modificare il suo codice live "Debug".

Nota: Prima di tentare di pubblicare la tua app è necessario convalidarlo utilizzando il [validatore di App][6].

 [6]: https://marketplace.firefox.com/developers/validator

## Pubblicare la tua app sul Firefox Marketplace

Puoi presentare la tua app sul mercato di Firefox, o pubblicarlo voi stessi. Visitare la [Zona del mercato di Firefox][7] su MDN per saperne di più su come fare questo; [Opzioni di pubblicazione di app][8] è il posto migliore per iniziare.

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options