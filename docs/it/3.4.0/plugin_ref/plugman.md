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

Dalla versione 3.0 in poi, Cordova implementa dispositivo tutte le API come plugin e li lascia disattivata per impostazione predefinita. Supporta inoltre due modi per aggiungere e rimuovere il plugin. Il primo è tramite il `cordova` CLI descritto in l'interfaccia della riga di comando. Il secondo è tramite un'interfaccia della riga di comando di [Plugman][1] basso livello ("piattaforma nativa dev" flusso di lavoro). La differenza principale tra questi percorsi di due sviluppo è che Plugman può solo aggiungere plugin alla uno piattaforma alla volta, mentre il CLI aggiungere plugins per tutte le piattaforme che vi si rivolgono. Per questo motivo, ha più senso utilizzare Plugman quando si lavora strettamente con un'unica piattaforma, da qui il nome "Dev Platform Native" del flusso di lavoro.

 [1]: https://github.com/apache/cordova-plugman/

Per ulteriori informazioni su Plugman, soprattutto se siete interessati a consumare Plugman come modulo nodo o hacking sul codice Plugman, vedere [il file README nel suo repository][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## L'installazione Plugman

Per installare plugman, è necessario disporre di [nodo][3] installato sulla vostra macchina. Poi è possibile eseguire il seguente comando da ovunque nel vostro ambiente per installare plugman globalmente, in modo che è disponibile da qualsiasi directory sul tuo computer:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Deve anche avere `git` sul tuo `PATH` per poter installare il plugin direttamente da URL remoto git.

**Suggerimento:** Se si trova che dopo l'installazione di plugman con npm siete ancora in grado di eseguire qualsiasi `plugman` comandi, assicurarsi che sono aggiunti il `/npm/` directory nel tuo`PATH`.

**Nota:** Si può saltare questo passaggio se non vuoi inquinare lo spazio dei nomi globale GEMAP installando Plugman globalmente. Se questo è il caso, poi quando si crea un progetto di Cordova con gli strumenti di conchiglia, ci sarà un `node_modules` directory all'interno del progetto che contiene Plugman. Dato che hai fatto non instally a livello globale, si dovrà richiamare il nodo per ogni comando di Plugman, ad esempio `node ./node_modules/plugman/main.js -version` . Il resto di questa guida presuppone che sia stata installata Plugman globalmente, significato che è possibile richiamarla con solo`plugman`.

## Creare un progetto di Cordova

Prima di utilizzare Plugman, è necessario creare un progetto di Cordova. È possibile farlo con entrambi l'interfaccia della riga di comando o con gli script di shell di livello inferiori. Istruzioni per utilizzare gli script di shell per creare il progetto si trovano nelle varie guide "Gli strumenti della riga di comando" elencati nella pagina guide piattaforma.

## L'aggiunta di un Plugin

Una volta che hai installato Plugman e hanno creato un progetto di Cordova, è possibile iniziare l'aggiunta di plugin per la piattaforma con:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Utilizzando i parametri minimi, questo comando installa un plugin in un progetto di cordova. È necessario specificare un percorso di progetto piattaforma e cordova per tale piattaforma. È necessario specificare anche un plugin, con le diverse `--plugin` parametro forma essendo:

*   `name`: Il nome della directory dove il contenuto del plugin esiste. Questo deve essere una directory esistente sotto il `--plugins_dir` percorso (vedi sotto per maggiori informazioni) o un plugin del registro di sistema di Cordova.
*   `url`: Un URL che inizia con https:// o git: / /, che punta a un repository git valido che è duplicabile e contiene un `plugin.xml` file. Il contenuto di questo archivio verrebbero copiato nella`--plugins_dir`.
*   `path`: Un percorso di una directory contenente un valido plugin che include un `plugin.xml` file. Contenuti di questo percorso verranno copiati nella`--plugins_dir`.

Altri parametri:

*   `--plugins_dir`impostazione predefinita è `<project>/cordova/plugins` , ma può essere qualsiasi directory che contiene una sottodirectory per ogni plugin scaricato.
*   `--www`impostazioni predefinite per il progetto `www` percorso di cartella, ma può essere qualsiasi directory che deve essere utilizzata come attività di cordova progetto applicazione web.
*   `--variable`permette di specificare determinate variabili in fase di installazione, necessario per alcuni plugin che richiedono chiavi API o altri parametri personalizzati, definito dall'utente. Si prega di consultare la [specifica di plugin][4] per ulteriori informazioni.

 [4]: plugin_spec.md

## Rimuovere un Plugin

Per disinstallare un plugin, è sufficiente passare il `--uninstall` bandiera e fornire l'ID del plugin.

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Aiuto comandi

Plugman dispone di un comando di aiuto globale che può aiutarvi se rimani bloccato o sono problemi. Visualizzerà un elenco di tutti i comandi Plugman e la loro sintassi:

    plugman -help
    plugman  # same as above
    

**Nota**: `plugman -help` possono mostrare alcuni comandi aggiuntivi del registro di sistema correlate. Questi comandi sono per gli sviluppatori di plugin e non possono essere implementati sui registri di plugin di terze parti.

Può anche aggiungere il `--debug|-d` bandiera a qualsiasi comando Plugman per eseguire quel comando in modalità dettagliata, che consentirà di visualizzare i messaggi di debug interni quanto vengono emessi e può aiutare a tenere traccia dei problemi come file mancanti.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

Infine, è possibile utilizzare il `--version|-v` bandiera per vedere quale versione di Plugman si utilizza.

    plugman -v
    

## Azioni del registro di sistema

Ci sono un certo numero di comandi plugman che può essere utilizzato per interagire con il [Registro dei Plugin][5]. Si prega di notare che questi comandi del registro di sistema sono per il plugin *plugins.cordova.io* del registro di sistema e non possono essere attuati dai registri di plugin di terze parti.

 [5]: http://plugins.cordova.io

### Stai cercando un Plugin

È possibile utilizzare Plugman per il [Registro dei Plugin][5] per plugin id che corrisponde all'elenco dato spazio separato di parole chiave di ricerca.

    plugman search <plugin keywords>
    

### Modificando il registro di sistema di Plugin

È possibile ottenere o impostare l'URL del registro attuale plugin che utilizza plugman. Generalmente si dovrebbe lasciare questo insieme a http://registry.cordova.io, a meno che non si desidera utilizzare un registro di plugin di terze parti.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### Ottenere informazioni di Plugin

È possibile ottenere informazioni su qualsiasi plugin specifici memorizzati nel repository con plugin:

    plugman info <id>
    

Questo metterà in contatto il plugin del registro di sistema e recuperare informazioni quali il numero di versione del plugin.

## L'installazione di plugin di Core

Negli esempi seguenti mostrano come aggiungere plugin come necessario affinché qualsiasi APIs Cordova è utilizzare nel progetto di lavorare ancora dopo l'aggiornamento alla versione 3.0. Per ogni comando, è necessario selezionare la piattaforma di destinazione e la directory del progetto della piattaforma di riferimento.

*   cordova-plugin-battery-status
    
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration