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

title: Guida allo sviluppo di plugin
---

# Guida allo sviluppo di plugin

Un Cordova plugin ponti un po' di funzionalità tra WebView alimentando un'applicazione di Cordova e la piattaforma nativa Cordova applicazione è in esecuzione. Plugin sono composti da una singola interfaccia JavaScript utilizzata su tutte le piattaforme e implementazioni native seguendo le interfacce di Plugin specifici della piattaforma che chiama il JavaScript. Tutto il nucleo Cordova APIs sono implementati utilizzando questa architettura.

Questa procedura guida il processo di scrittura di un semplice Plugin Echo che passa una stringa da JavaScript e la invia nell'ambiente nativo per le piattaforme supportate. Il codice nativo quindi restituisce la stessa stringa alle richiamate all'interno JavaScript del plugin.

Questa guida fornisce abbastanza panoramica su cui è possibile costruire per scrivere plugin più complessi.

## JavaScript

Il punto di ingresso per ogni plugin è JavaScript. L'uso di sviluppatori di motivo che Cordova è così possono usare e scrivere JavaScript, non Objective-C, non Java, C#. L'interfaccia JavaScript per il tuo plugin è la parte frontale e senza dubbio più importante del vostro plugin di Cordova.

Si può strutturare JavaScript del vostro plugin comunque ti piace. L'unica cosa che si *deve* utilizzare per comunicare tra ambienti nativi e Cordova JavaScript è il `cordova.exec` funzione. Ecco un esempio:

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

I parametri sono i seguenti:

*   `function(winParam) {}`: Callback di funzione successo. Supponendo che il `exec` chiamata viene completata correttamente, questa funzione viene richiamata (facoltativamente con parametri si passa ad essa).

*   `function(error) {}`: Callback di funzione errore. Se l'operazione non viene completata correttamente, questa funzione viene richiamata (facoltativamente con un parametro di errore).

*   `"service"`: Il nome del servizio per chiamare sul lato nativo. Questo è mappato a una classe nativa, che ulteriori informazioni sono disponibili nelle guide native elencate di seguito.

*   `"action"`: Il nome dell'azione per chiamare. Questo viene raccolto il ricevendo classe nativa il `exec` chiamata e, a seconda della piattaforma, essenzialmente il mapping a un metodo della classe. Il native guide elencate di seguito forniscono dettagli.

*   `[/* arguments */]`: Argomenti da passare nell'ambiente nativo.

### Nell'esempio JavaScript Plugin echo

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Tuffiamoci in questo. Il plugin si attacca a `window` , in particolare alla `echo` funzione. Plugin utenti sarebbe quindi utilizzare come segue:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

In primo luogo, diamo un'occhiata agli ultimi tre argomenti per la `exec` funzione. Ci sarà la chiamata il `Echo` "di servizio", chiedendo la `echo` "azione", e passando un array di argomenti contenenti la stringa di eco, che è il primo parametro nella `window.echo` funzione.

Il callback di successo passati in `exec` è semplicemente un riferimento al metodo di callback che la funzione `window.echo` accetta. Facciamo un po' di più per il callback di errore: se il lato nativo spara il callback di errore, semplicemente richiamare il callback di successo e passarvi una stringa "predefinito".

## Plugin Specification

Cordova ha una specifica di plugin disponibile per consentire l'installazione automatica del plugin per Android, iOS, piattaforme 10 BlackBerry e Windows Phone. Strutturare il vostro plugin in modo particolare e aggiungendo un `plugin.xml` file manifesto, si possono consentire agli utenti di installare il plugin tramite l'utensileria da riga di comando.

*   [Plugin Specification](../../../plugin_ref/spec.html)

## Nativo

Una volta definito per il plugin JavaScript, è necessario integrarla con almeno un'implementazione nativa. Dettagli di farlo per ciascuna piattaforma sono elencate di seguito. Queste guide continuano a costruire il semplice esempio Echo Plugin discusso sopra.

*   [Plugin Android](../../platforms/android/plugin.html)
*   [BlackBerry Plugins](../../platforms/blackberry/plugin.html)
*   [BlackBerry 10 plugin](../../platforms/blackberry10/plugin.html)
*   [iOS Plugins](../../platforms/ios/plugin.html)
*   [Windows Phone Plugins](../../platforms/wp8/plugin.html)

La piattaforma di Tizen attualmente non supporta plugin.

## Editrice plugins

Una volta sviluppato il vostro plugin, è possibile pubblicarlo e condividerlo con la Comunità. Si può pubblicare il tuo plugin nel registro di sistema di cordova (basato su [npmjs][1]) o a qualsiasi altro npmjs base del registro di sistema. Gli utenti saranno in grado di installarlo automaticamente utilizzando plugman o cordova-cli.

 [1]: https://github.com/isaacs/npmjs.org

Per pubblicare un plugin è necessario utilizzare lo strumento plugman e passare attraverso le seguenti fasi:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

Questo è tutto!

Sono disponibili altri comandi basati sui registri e `plugman --help` vi darà una lista di quali comandi sono disponibili e come utilizzarli.