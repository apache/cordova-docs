---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# BlackBerry 10 plugin

In questa sezione vengono fornite informazioni dettagliate per come implementare il codice plugin nativo sulla piattaforma BlackBerry 10. Prima di leggere questo, vedere applicazione plugin per una panoramica della struttura del plugin e la sua interfaccia JavaScript comune. Questa sezione continua a dimostrare il plugin di esempio *eco* che comunica da Cordova webview alla piattaforma nativa e ritorno.

Il plugin Echo restituisce praticamente qualunque stringa la `window.echo` funzione Invia da JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Un plugin di Cordova per BlackBerry 10 contiene JavaScript e codice nativo, che comunicano tra loro attraverso un quadro fornito da JNEXT. Ogni plugin deve includere anche un `plugin.xml` file.

## Creazione della classe nativa

Per creare la parte nativa del vostro plugin, aprire il BlackBerry 10 NDK IDE e selezionare **File → nuovo → progetto BlackBerry → estensione nativa → BlackBerry 10**. Immettere il nome del progetto desiderato e posizione, quindi premere **fine**.

Il progetto creato dall'IDE contiene codice di esempio per un plugin di memoria. Si può sostituire o modificare questi file per implementare funzionalità personalizzate:

*   `*name*_js.hpp`: Intestazione C++ per il codice JNEXT.

*   `*name*_js.cpp`: Codice C++ per JNEXT.

L'interfaccia nativa per l'estensione JNEXT può essere visualizzato nel file di intestazione plugin nella directory pubblica del progetto. Dispone anche di costanti e funzioni di utilità disponibili da codice nativo. Il plugin deve essere derivato da `JSExt` , che è definito `plugin.h` . Cioè, è necessario implementare la seguente classe:

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

L'estensione dovrebbe includere il `plugin.h` file di intestazione. Nella `Echo` esempio, si utilizza `JSExt` come segue nel `echo_js.hpp` file:

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

Il `m_id` attributo contiene il `JNEXT` id per l'oggetto che viene passato alla classe come argomento al costruttore. È necessario per il lato nativo per gli eventi di trigger sul lato JavaScript. Il `CanDelete` metodo determina se l'oggetto nativo può essere eliminato. Il `InvokeMethod` è chiamata funzione di conseguenza da una richiesta da JavaScript per richiamare un metodo di questo particolare oggetto. L'unico argomento a questa funzione è una stringa passata da JavaScript che questo metodo analizza per determinare quale dei metodi dell'oggetto nativo dovrebbe eseguire. Questi metodi sono implementati `echo_js.cpp` . Ecco il `InvokeMethod` funzione per il `Echo` esempio:

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

Il plugin nativo deve inoltre implementare le seguenti funzioni di callback:

*   `extern char * onGetObjList (void);`

*   `extern JSExt * onCreateObject (const string & strClassName, const string & strObjId);`

il `onGetObjList` funzione restituisce un elenco separato da virgole delle classi supportate da JNEXT. JNEXT utilizza questa funzione per determinare il set di classi che è possibile creare un'istanza di JNEXT. Il `Echo` plugin implementa i seguenti in `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

il `onCreateObject` funzione accetta due parametri. Il primo è il nome della classe richiesta per essere creato dal lato JavaScript, con nomi validi come quelli restituiti `onGetObjList` . Il secondo parametro è l'id di oggetto unico di classe. Questo metodo restituisce un puntatore all'oggetto plugin creato. Il `Echo` plugin implementa i seguenti in `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Creazione JavaScript del Plugin

Il plugin deve contenere i seguenti file JavaScript:

*   `client.js`: Questo è considerato il lato client e contiene le API disponibili per un'applicazione di Cordova. L'API in `client.js` chiamate effettua chiamate al `index.js` . L'API in `client.js` collega inoltre funzioni di callback agli eventi che fuoco i callback.

*   `index.js`: Cordova carica `index.js` e rende accessibile attraverso il ponte di cordova.exec. La `client.js` file effettua chiamate all'API nella `index.js` file, che a sua volta chiamare al JNEXT per comunicare con il lato nativo.

Il lato client e server ( `client.js` e `index.js` ) interagisce tramite la `Cordova.exec` funzione. Il `client.js` ha bisogno di richiamare il `exec` di funzione di fornire gli argomenti necessari. Il `Echo` plugin implementa i seguenti nella `client.js` file:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

Il `index.js` componente utilizza JNEXT per interagire con il lato nativo. Associare una funzione costruttore denominata `Echo` a JNEXT consente di eseguire le seguenti operazioni chiave utilizzando la `init` funzione:

*   Specificare il modulo richiesto esportato dal lato nativo. Il nome del modulo richiesto deve corrispondere al nome di un file di libreria condivisa ( `.so` file):
    
        JNEXT.require("libecho")
        

*   Creare un oggetto utilizzando un modulo acquisito e salvare l'ID che viene restituito dalla chiamata:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    Quando l'applicazione chiama il `echo` funzione `client.js` , che a sua volta chiamare chiamate il `echo` funzione `index.js` , dove il `PluginResult` oggetto invia i dati come risposta `client.js` . Poiché il `args` argomento passato le funzioni fu convertito da `JSON.stringfy()` e codificato come un `URIcomponent` , è necessario chiamare il seguente:
    
        data = JSON.parse(decodeURIComponent(args.data));
        

È ora possibile inviare i dati indietro, come illustrato di seguito:

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## Architettura a plugin

È possibile inserire gli artefatti del plugin, tra cui il `plugin.xml` file, i file sorgente JavaScript e C++ e il `.so` file binari all'interno di qualsiasi struttura di directory, purché si specificano correttamente i percorsi dei file nella `plugin.xml` file. Qui è una struttura tipica:

***project_directory*** (> plugin)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (> index.js, **nativa** > *.cpp, *.hpp)
    *   **dispositivo** (>*binario file* *. so)
    *   **simulatore** (>*binario file* *. so)

L'elenco Mostra la relazione gerarchica tra le cartelle di livello superiore. La parentesi indica il contenuto di una directory specificata. Tutti i nomi di directory vengono visualizzati in grassetto. I nomi dei file sono preceduti dalla `>` segno.

## Il file di *plugin*

La `plugin.xml` file contiene lo spazio dei nomi dell'estensione e altri metadati. Impostare il `Echo` plugin come segue:

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>