---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Firefox guida piattaforma OS
---

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

    cordova plugin add cordova-plugin-device
    cordova plugin add cordova-plugin-vibration
    

Quando viene scritto il codice dell'app, distribuire le modifiche al sistema operativo Firefox app che hai aggiunto al tuo progetto con

    $ cordova prepare firefoxos
    

Per creare un app confezionato uno può zip nella directory di platform/firefoxos/www. Si può anche semplicemente costruire utilizzando

    $ cordova build firefoxos
    

L'app di Firefox OS confezionato sarà costruito in platforms/firefoxos/build/package.zip

## Test e debug

L'app può essere testata usando Firefox OS [IDE Web][4].

 [4]: https://developer.mozilla.org/en-US/docs/Tools/WebIDE

Dopo aver collegato l'IDE Web al tuo dispositivo/simulatore di test, selezionare l'opzione "Apri App confezionata", quindi assicurarsi che si punta alla prova-app/platform/firefoxos/www/directory per includere l'App nell'interfaccia Manager.

Qui è possibile installare l'app sul tuo dispositivo/simulatore di test (con il tasto "Play"). Utilizzando il pulsante è possibile quindi eseguire il debug dell'applicazione e modificare il suo codice live "pausa".

Nota: Prima di tentare di pubblicare la tua app è necessario convalidarlo utilizzando il [validatore di App][5].

 [5]: https://marketplace.firefox.com/developers/validator

## Pubblicare la tua app sul Firefox Marketplace

Puoi presentare la tua app sul mercato di Firefox, o pubblicarlo voi stessi. Visitare la [Zona del mercato di Firefox][6] su MDN per saperne di più su come fare questo; [Opzioni di pubblicazione di app][7] è il posto migliore per iniziare.

 [6]: https://developer.mozilla.org/en-US/Marketplace
 [7]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options