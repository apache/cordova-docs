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

# BlackBerry Plugins

In questa sezione vengono fornite informazioni dettagliate per come implementare il codice plugin nativo sulla piattaforma BlackBerry. Prima di leggere questo, vedere applicazione plugin per una panoramica della struttura del plugin e la sua interfaccia JavaScript comune. Questa sezione continua a dimostrare il plugin di esempio *eco* che comunica da Cordova webview alla piattaforma nativa e ritorno.

Inoltre, scaricare la [repository di Cordova BlackBerry][1]. Il `Cordova-BlackBerry` progetto consente di distribuire ai dispositivi BlackBerry come la torcia, grassetto e Playbook. Il Playbook utilizza un diverso codice base rispetto ad altri dispositivi palmari BlackBerry, per cui è necessario duplicare i vostri sforzi di sviluppo. Questa guida si concentra su dispositivi palmari, piuttosto che compresse.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Modifica plugins

Il `Echo` plugin restituisce qualsiasi messaggio che un utente invia con la `window.echo` funzione sul lato JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Il progetto `www/plugins.xml` file contiene tutti i riferimenti necessari plugins del progetto Cordova. Aggiungere un riferimento aggiuntivo così che quando `cordova.exec` è chiamato, Cordova conosce come mappare il `Echo` argomento nativo `Echo` classe:

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Il File Echo.java

Il `feature` di specifica `value` attributo fa riferimento a un identificatore di dominio-stile reverse. Ciò corrisponde ad un percorso all'interno di repo Cordova BlackBerry WebWorks `framework/ext/src` directory. Aggiungere un `framework/ext/src/org/apache/cordova/echo` directory e aggiungere un `Echo.java` file.

Il `Echo.java` è necessario definire una classe che estende la `Plugin` classe. Esso deve inoltre implementare un `execute` metodo che restituisce un `PluginResult` classe. Tutte le chiamate a `cordova.exec` passa nell'azione all'interno della classe per eseguire, così come gli argomenti. In questo caso, la `Echo` della classe `echo` metodo è l'azione, e `[str]` è un ulteriore argomento da passare al metodo.

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

Nel codice precedente, il `execute` metodo prima porta ad un'azione. In questo caso, c'è solo una valida `echo` azione, così controlla semplicemente per quel valore.

Il messaggio in arrivo in passato come `[str]` da JavaScript è disponibile per la `Echo` della classe come un `args` matrice. In questo caso, c'è un solo argomento, accessibile utilizzando un indice in base zero della matrice:

        String theMsg = args.getString(0);
    

Dopo vari controllo errori sul valore del messaggio, il metodo crea un'istanza di un nuovo `PluginResult` con un `OK` stato e restituisce il messaggio. Questo valore, a sua volta, passato come argomento al metodo di callback successo JavaScript. In caso di errore, vari codici di stato vengono inviati al callback di errore di JavaScript.

## Aggiornando il. jar in www del progetto Directory

L'aggiunto `Echo.java` deve essere aggiornato nel tuo progetto. Per costruire il `.jar` del file, passare alla directory principale di repo BlackBerry WebWorks ed eseguire il `ant` comando:

        ant update -Dproject.path="~/path_to_my_project"
    

Questo crea un nuovo `.jar` del file nella `build/ext` directory. Copia il `build/ext/cordova.jar` del file nella `project/www/ext` directory.

Se tutto va bene, che permette di utilizzare il `Echo` plugin in BlackBerry.