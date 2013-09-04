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

# L'utilizzo di Plugman per gestire i plugin

Dalla versione 3.0 in poi, Cordova implementa dispositivo tutte le API come plugin e li lascia disattivata per impostazione predefinita. Supporta inoltre due modi per aggiungere e rimuovere il plugin. Il primo è tramite il `cordova` CLI descritto in l'interfaccia della riga di comando. Il secondo è tramite un'interfaccia della riga di comando di basso livello [plugman][1] . Questa guida si concentra sul secondo approccio, che può essere utile per gli sviluppatori che vogliono aggiornare la loro versione di Cordova, ma che non hanno ancora adottato il CLI Cordova nel loro flusso di lavoro.

 [1]: https://github.com/apache/cordova-plugman/

Per ulteriori informazioni su plugman, vedere [il file README nel suo repository][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Comandi di base

Per installare plugman, è necessario disporre di [nodo][3] installato sulla vostra macchina:

 [3]: http://nodejs.org/

    npm install -g plugman
    

Ecco la sintassi per aggiungere un plugin per ogni piattaforma:

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Per disinstallare un plugin:

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## L'installazione di plugin di Core

Negli esempi seguenti mostrano come aggiungere plugin come necessario affinché qualsiasi APIs Cordova è utilizzare nel progetto di lavorare ancora dopo l'aggiornamento alla versione 3.0. Per ogni comando, è necessario selezionare la piattaforma di destinazione e la directory del progetto della piattaforma di riferimento.

*   Cordova-plugin-batteria-stato plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git - plugin

*   Cordova-plugin-fotocamera plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git - plugin

*   Cordova-plugin-console plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git - plugin

*   plugman Cordova-plugin-contatti - piattaforma < ios|android|blackberry10|wp7|wp8 > - progetto <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git - plugin

*   Cordova-plugin-dispositivo plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git - plugin

*   Cordova-plugin-dispositivo-movimento (accelerometro) plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git - plugin

*   plugman Cordova-plugin-dispositivo orientamento (bussola) - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git - plugin

*   Cordova-plugin-finestre di dialogo plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git - plugin

*   Cordova-plugin-file plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git - plugin

*   Cordova-plugin-trasferimento di file plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git - plugin

*   plugman Cordova-plugin-geolocalizzazione - piattaforma < ios|android|blackberry10|wp7|wp8 > - progetto <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git - plugin

*   plugman Cordova-plugin-globalizzazione - piattaforma < ios|android|blackberry10|wp7|wp8 > - progetto <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git - plugin

*   Cordova-plugin-inappbrowser plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git - plugin

*   Cordova-plugin-media plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git - plugin

*   plugman Cordova-plugin-media-cattura - piattaforma < ios|android|blackberry10|wp7|wp8 > - progetto <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git - plugin

*   plugman Cordova-plugin-rete-informazioni - piattaforma < ios|android|blackberry10|wp7|wp8 > - progetto <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git - plugin

*   Cordova-plugin-splashscreen plugman - progetto di piattaforma < ios|android|blackberry10|wp7|wp8 >... <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git - plugin

*   plugman Cordova-plugin-vibrazione - piattaforma < ios|android|blackberry10|wp7|wp8 > - progetto <directory> https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git - plugin