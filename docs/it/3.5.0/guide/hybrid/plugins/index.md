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

# Guida allo sviluppo di plugin

Un *plugin* è un pacchetto di codice inserito che permette di Cordova webview entro cui l'app esegue il rendering per comunicare con la piattaforma nativa su cui viene eseguito. Plugin forniscono accesso alla funzionalità di piattaforma e dispositivo ordinariamente non disponibile per le applicazioni basate su web. Tutte le principali caratteristiche di Cordova API vengono implementate come plugin, e molti altri sono disponibili che abilitare funzioni quali scanner di codice a barre, comunicazione NFC, o calendario di adattare le interfacce.

Plugin comprendono una singola interfaccia JavaScript corrispondenti librerie di codice nativo per ogni piattaforma supportata. Questa procedura di sezione attraverso un plugin semplice *eco* che passa una stringa da JavaScript alla piattaforma nativa e ritorno, uno che è possibile utilizzare come modello per costruire funzioni molto più complesse. Questa sezione discute la struttura di base del plugin e l'interfaccia JavaScript rivolte. Per ogni interfaccia nativa corrispondente, vedere l'elenco alla fine di questa sezione.

Oltre a queste istruzioni, quando si appresta a scrivere un plugin che è meglio guardare oltre [esistenti plugin][1] per l'orientamento.

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

## Costruzione di un Plugin

Gli sviluppatori di applicazioni utilizzano il CLI `plugin add` comando (discusso in The Command-Line Interface) per applicare un plugin per un progetto. L'argomento che il comando è l'URL di un repository *git* , contenente il codice del plugin. Questo esempio implementa l'API di Device di Cordova:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

Il repository dei plugin deve dispongono di un livello superiore `plugin.xml` file manifesto. Ci sono molti modi per configurare questo file, per cui i dettagli sono disponibili nella specifica del Plugin. Questa versione abbreviata della `Device` plugin fornisce un esempio semplice da utilizzare come modello:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

Il primo livello `plugin` tag `id` attributo utilizza lo stesso formato di retromarcia-dominio per identificare il pacchetto plugin aggiunti i apps per essi. Il `js-module` tag specifica il percorso del comune interfaccia JavaScript. Il `platform` tag specifica un insieme corrispondente di codice nativo, per il `ios` piattaforma in questo caso. Il `config-file` tag incapsula un `feature` tag che viene iniettato nella piattaforma-specifiche `config.xml` file a sensibilizzare la piattaforma della libreria di codice aggiuntivo. Il `header-file` e `source-file` tag specificare il percorso al file di libreria componenti.

## Convalidando un Plugin

È possibile utilizzare il `plugman` utility per verificare se il plugin si installa correttamente per ogni piattaforma. Installare `plugman` con il seguente comando di [nodo][2] :

 [2]: http://nodejs.org/

        $ npm install -g plugman
    

Hai bisogno di una directory di origine valido app, ad esempio il primo livello `www` directory incluso in un progetto generato da CLI predefinito come descritto in l'interfaccia della riga di comando. Assicurarsi che l'app `index.html` home page di riferimento al nome dell'interfaccia del plugin JavaScript come se fossero nella stessa directory dei sorgenti:

        <script src="myplugin.js"></script>
    

Quindi eseguire un comando simile al seguente per verificare se le dipendenze iOS carica correttamente:

        $ plugman -platform ios /path/to/my/project/www /path/to/my/plugin
    

Per maggiori dettagli su `plugman` opzioni, vedere utilizzando Plugman per gestire i plugin. Per informazioni su come effettivamente plugin *debug* , vedere l'interfaccia nativa su ogni piattaforma, elencato in fondo a questa pagina.

## L'interfaccia JavaScript

Il JavaScript fornisce l'interfaccia frontale, che lo rende forse la parte più importante del plugin. Si può strutturare JavaScript del vostro plugin comunque piace, ma è necessario chiamare `cordova.exec` per comunicare con la piattaforma nativa, utilizzando la seguente sintassi:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

Ecco come funziona ogni parametro:

*   `function(winParam) {}`: Funzione di callback un successo. Supponendo che il `exec` chiamata viene completata correttamente, questa funzione viene eseguita insieme a tutti i parametri si passa ad esso.

*   `function(error) {}`: Funzione di callback un errore. Se l'operazione non viene completata correttamente, questa funzione viene eseguita con un parametro facoltativo errore.

*   `"service"`: Il nome del servizio chiamare il lato nativo. Ciò corrisponde ad una classe nativa, per cui ulteriori informazioni sono disponibili nelle guide native elencate di seguito.

*   `"action"`: Il nome dell'azione per chiamare sul lato nativo. Generalmente corrisponde al metodo classe nativa. Vedere le guide native elencate di seguito.

*   `[/* arguments */]`: Una matrice di argomenti da passare nell'ambiente nativo.

## Esempio JavaScript

In questo esempio viene illustrato un modo per implementare l'interfaccia JavaScript del plugin:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

In questo esempio, il plugin si attacca per la `window` object come la `echo` funzione che gli utenti plugin chiamerebbe come segue:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Guardate gli ultimi tre argomenti per la `cordova.exec` funzione. Il primo chiama la `Echo` *servizio*, un nome di classe. Le richieste seconda la `echo` *azione*, un metodo all'interno di tale classe. La terza è una matrice di argomenti contenenti la stringa di eco, che è la `window.echo` funzione di primo parametro.

Il callback di successo passati in `exec` è semplicemente un riferimento alla funzione di callback `window.echo` prende. Se la piattaforma nativa viene generato il callback di errore, semplicemente chiama il callback di successo e si passa una stringa predefinita.

## Interfacce native

Una volta definito per il plugin JavaScript, è necessario integrarla con almeno un'implementazione nativa. Di seguito sono elencati i dettagli per ogni piattaforma, e ciascuno si basa sul semplice esempio Echo Plugin precedente:

*   Amazon fuoco OS Plugins
*   Plugin Android
*   iOS Plugins
*   BlackBerry 10 plugin
*   Windows Phone Plugins

La piattaforma di Tizen non supporta plugin.

## Editrice Plugins

Una volta che si sviluppa il tuo plugin, puoi pubblicare e condividere con la Comunità. È possibile pubblicare il tuo plugin nel registro di sistema di cordova (basato su [ `npmjs` ][3]) o a qualsiasi altro `npmjs` -base del registro di sistema. Altri sviluppatori possono installarlo automaticamente utilizzando `plugman` o Cordova CLI. (Per informazioni dettagliate su ciascun percorso di sviluppo, vedere utilizzando Plugman per gestire i plugin e l'interfaccia della riga di comando).

 [3]: https://github.com/isaacs/npmjs.org

Per pubblicare un plugin è necessario utilizzare il `plugman` tool e passare attraverso le seguenti fasi:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

Questo è tutto!

Esecuzione `plugman --help` elenca altri comandi disponibili basati sul Registro di sistema.