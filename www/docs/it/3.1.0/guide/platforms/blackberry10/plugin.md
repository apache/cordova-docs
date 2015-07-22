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

title: BlackBerry 10 plugin
---

# BlackBerry 10 plugin

Questa è una continuazione della guida sviluppo Plugin per Cordova. Una volta che si hanno esaminato tale contenuto, ora facciamo guardare le cose che abbiamo bisogno di avere il plugin di Echo per la piattaforma BlackBerry 10. Ricordiamo che il plugin Echo restituisce praticamente qualunque stringa un utente fornisce per la `window.echo` funzione:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Un nativo BlackBerry 10 plugin per Cordova contiene codice JavaScript e possa contenere anche codice nativo. L'esempio di plugin Echo viene illustrato come richiamare le funzionalità native da JavaScript. Native e codice JavaScript comunicano tra loro attraverso un quadro fornito da JNEXT. Ogni plugin deve includere anche un `plugin.xml` file.

## Creazione parte nativa del vostro plugin

Per creare la parte nativa del vostro plugin, aprire il BlackBerry 10 NDK IDE e selezionare il [File](../../../cordova/file/fileobj/fileobj.html) > New > BlackBerry progetto > estensione nativa > BlackBerry WebWorks. Immettere il nome del progetto desiderato / posizione e fare clic su fine.

Il progetto creato dall'IDE contiene codice di esempio per un plugin di memoria. Si può sostituire o modificare questi file per includere funzionalità personalizzate.

*   `*name*_js.hpp`: Intestazione C++ per il codice JNEXT.

*   `*name*_js.cpp`: Codice C++ per JNEXT.

L'interfaccia nativa per l'estensione JNEXT può essere visualizzato nel file di intestazione plugin nella directory pubblica del vostro progetto. Inoltre contiene costanti e funzioni di utilità che possono essere utilizzati nel codice nativo. Il plugin deve essere derivato da JSExt che è definito in plugin.h. Cioè, è necessario implementare la seguente classe:

    JSExt di classe {public: virtual ~JSExt() {};
        virtuale stringa InvokeMethod (const string & strCommand) = 0;
        Virtual bool CanDelete (void) = 0;
    privato: m_id std:: String;
    };
    

Pertanto, l'estensione deve includere il file di intestazione plugin.h. Nell'esempio di Echo, si utilizza JSExt come segue nel file echo_js.hpp:

    #include ".../ public/plugin.h "#include < string > #ifndef ECHO_JS_H_ #define ECHO_JS_H_ classe Echo: pubblica JSExt {pubblica: Echo esplicita (const std:: String & id);
        Virtual ~ echo ();
        std:: String virtuale InvokeMethod (const std:: String & comando);
        Virtual bool CanDelete();
    privato: m_id std:: String;
    };
    
    #endif / / ECHO_JS_H_
    

Il `m_id` è un attributo che contiene l'id JNEXT per questo oggetto. L'id viene passato alla classe come argomento al costruttore. È necessario attivare eventi sul lato JavaScript da codice nativo. Il metodo di CanDelete è utilizzato da JNEXT per determinare se il vostro oggetto nativo può essere eliminato. La funzione InvokeMethod è chiamata come risultato da una richiesta da JavaScript per richiamare un metodo di questo particolare oggetto. L'unico argomento a questa funzione è una stringa passata da JavaScript che questo metodo dovrebbe analizzare al fine di determinare quale metodo dell'oggetto nativo deve essere eseguito. Ora abbiamo implementare queste funzioni in echo_js.cpp. Per l'esempio di Echo, implementiamo InvokeMethod funzione come segue:

    String Echo::InvokeMethod (const string & comando) {//parse comando e args dall'indice di stringa int = command.find_first_of("");
        String strCommand = command.substr (0, indice);
        String strValue = command.substr (indice + 1, command.length());
    
        / / Determinare quale funzione dovrebbe essere eseguita se (strCommand = = "echo") {return strValue;
        } else {return "Metodo non supportato";
        }
    }
    

Il vostro plugin nativo deve implementare anche le seguenti funzioni di callback:

*   `extern char * onGetObjList (void);`

*   `extern JSExt * onCreateObject (const string & strClassName, const string & strObjId);`

il `onGetObjList` funzione restituisce un elenco separato da virgole delle classi supportate da JNEXT. JNEXT utilizza questa funzione per determinare il set di classi che è possibile creare un'istanza di JNEXT. Nel nostro plugin Echo, abbiamo il seguente `echo_js.cpp` :

    char * onGetObjList() {static char nome [] = "Echo";
        restituire il nome;
    }
    

il `onCreateObject` funzione accetta due parametri. Il primo parametro è il nome della classe che ha chiesto di essere creato dal lato JavaScript. Nomi validi sono quelli restituiti in `onGetObjList` . Il secondo parametro è l'id di oggetto univoco per la classe. Questo metodo restituisce un puntatore all'oggetto plugin creato. Nel nostro plugin Echo, abbiamo il seguente `echo_js.cpp` :

    JSExt * onCreateObject (const string & className, const string & id) {se (className = = "Echo") {return nuovo Echo(id);
        } return NULL;
    }
    

## Creare la parte di JavaScript del vostro plugin

La parte di JavaScript del vostro plugin deve contenere i seguenti file:

*   `client.js`: Questo è considerato il lato client e contiene le API che si può chiamare un'applicazione di Cordova. L'API in `client.js` chiamate effettua chiamate al `index.js` . L'API in `client.js` collega inoltre funzioni di callback agli eventi che fuoco i callback.

*   `index.js`: Cordova carica `index.js` e rende accessibile attraverso il ponte di cordova.exec. La `client.js` file effettua chiamate all'API nella `index.js` file, che a sua volta chiamare al JNEXT per comunicare con il lato nativo.

Il lato client e server ( `client.js` e `index.js` ) interagisce tramite la `Cordova.exec` funzione. Così, in `client.js` si richiama il `exec` di funzione di fornire gli argomenti necessari. Nel plugin Echo, abbiamo seguito nella `client.js` file:

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

Ora, `index.js` interagisce con il lato nativo utilizzando JNEXT. Così allegare una funzione costruttore denominata eco a JNEXT. All'interno del costruttore è eseguire le seguenti operazioni chiave utilizzando la funzione init:

*   Specificare il modulo richiesto esportato dal lato nativo. Il nome del modulo richiesto deve corrispondere al nome di un file di libreria condivisa (file. so).

`JNEXT.require("libecho")`

*   Creare un oggetto utilizzando un modulo acquisito e salvare l'ID che viene restituito dalla chiamata. self.m_Id = JNEXT.createObject ("libecho.Echo"); Quando l'applicazione chiama la funzione echo in `client.js` , che a sua volta chiamata chiama la funzione echo in `index.js` , dove l'oggetto PluginResult invia una risposta (dati) a `client.js` . Poiché l'argomento args passato le funzioni è stato convertito da JSON.stringfy() e codificato come un componente URI, è necessario chiamare il seguente:

`dati = JSON.parse(decodeURIComponent(args.data));`

È ora possibile inviare i dati indietro. Mettiamolo tutti insieme:

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## Architettura del plugin

È possibile posizionare i manufatti del plugin, che comprende il `plugin.xml` file, i file di origine (JavaScript, C++) e i file binari ( `.so` ) all'interno di qualsiasi struttura di directory, finchè si specificano correttamente i percorsi dei file nella `plugin.xml` file. Una tipica struttura assomiglia a questo:

***your\_project\_directory*** (> plugin)

*   **www** (> client.js)
*   **src** 
    *   **blackberry10** (> index.js, **nativa** > *.cpp, *.hpp)
    *   **dispositivo** (>*binario file* *. so)
    *   **simulatore** (>*binario file* *. so)

(L'elenco Mostra la relazione gerarchica tra le directory di livello superiore. La parentesi indica il contenuto di una directory specificata. Tutti i nomi di directory vengono visualizzati in grassetto. I nomi dei file sono preceduti dalla `>` segno.)

## Contenuto della `plugin.xml` file

La `plugin.xml` file contiene lo spazio dei nomi di estensione e altri metadati. Definire lo spazio dei nomi e specificare altri metadati per il plugin Echo come segue:

    < plugin xmlns = "http://www.phonegap.com/ns/plugins/1.0" id="org.apache.cordova.blackberry.echo" versione = "1.0.0" >< js-modulo src = "www/client.js" >< unioni destinazione = "navigator" / >< / js-modulo >< nome piattaforma = "blackberry10" >< file di origine src="src/blackberry10/index.js" / >< lib-file src="src/blackberry10/native/device/libecho.so" arco = "dispositivo" / >< lib-file src="src/blackberry10/native/simulator/libecho.so" arco = "simulator" / >< bersaglio-config-file = "www/config.xml" padre = "/ widget" >< presentano name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" / >< / config-file >< /piattaforma >< / plugin >