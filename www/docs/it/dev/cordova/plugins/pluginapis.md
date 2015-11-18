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

title: Plugin API
---

# Plugin API

Cordova viene fornito con un set minimo di API e progetti aggiungere cosa extra API richiedono tramite plugin.

Può cercare attraverso tutti i plugin esistenti (tra cui il plugin di terze parti) su [npm][1].

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

Il set tradizionale di nucleo Cordova plugin sono i seguenti:

*   [Stato della batteria][2]
    
    > Monitorare lo stato della batteria del dispositivo.

*   [Fotocamera][3]
    
    > Catturare una foto usando la fotocamera del dispositivo.

*   [Console][4]
    
    > Aggiungere ulteriori capacità console.log().

*   [Contatti][5]
    
    > Lavorare con il database di contatti di dispositivi.

*   [Dispositivo][6]
    
    > Raccogliere informazioni specifiche del dispositivo.

*   [Movimento di dispositivo (accelerometro)][7]
    
    > Sfruttare il sensore di movimento del dispositivo.

*   [Dispositivo orientamento (bussola)][8]
    
    > Ottenere la direzione che il dispositivo sta puntando.

*   [Finestre di dialogo][9]
    
    > Notifiche visive del dispositivo.

*   [FileSystem][10]
    
    > Gancio in file system nativo tramite JavaScript.

*   [Trasferimento di file][11]
    
    > Gancio in file system nativo tramite JavaScript.

*   [Geolocalizzazione][12]
    
    > Sensibilizzare la vostra sede di applicazione.

*   [Globalizzazione][13]
    
    > Attivare la rappresentazione degli oggetti specifici di una lingua.

*   [InAppBrowser][14]
    
    > Lanciare gli URL in un'altra istanza del browser in-app.

*   [Media][15]
    
    > Registrare e riprodurre file audio.

*   [Acquisizione di media][16]
    
    > Catturare i file multimediali utilizzando le applicazioni di cattura multimediale del dispositivo.

*   [Informazioni di rete (connessione)][17]
    
    > Verificare rapidamente lo stato di rete e informazioni della rete cellulare.

*   [Splashscreen][18]
    
    > Mostrare e nascondere la schermata iniziale di applicazioni.

*   [Vibrazione][19]
    
    > Un'API per vibrare il dispositivo.

*   [StatusBar][20]
    
    > Un'API per mostrare, nascondere e la configurazione sfondo barra di stato.

*   [Whitelist][21]
    
    > Un plugin per le richieste di rete whitelist. Necessario installare per avere eventuali richieste di rete nelle applicazioni.

*   [Whitelist legacy][22]
    
    > Un plugin per usare il vecchio stile di whitelist prima è stato strappato fuori e cambiato nel plugin whitelist.

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

Traduzioni inglese di questi documenti del plugin possono essere trovati andando ai repository di github plugin e cerca nella cartella docs