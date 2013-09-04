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

Questa guida illustra come sviluppare un plugin Echo sul BlackBerry. La guida allo sviluppo di Plugin fornisce un'ampia panoramica con cui si dovrebbe già avere familiarità, e questa guida riprende da dove lascia fuori. Inoltre, scaricare la [repository di Cordova BlackBerry][1].

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

Il `Cordova-BlackBerry` progetto consente di distribuire ai dispositivi BlackBerry come la torcia, grassetto e Playbook. Il Playbook utilizza un diverso codice base rispetto ad altri dispositivi palmari BlackBerry, per cui è necessario duplicare i vostri sforzi di sviluppo. Questa guida si concentra su dispositivi palmari anziché compresse. (In futuro, questa guida dovrebbe coprire entrambe le piattaforme).

Il plugin Echo restituisce essenzialmente qualunque messaggio un utente fornisce per la `window.echo` funzione:

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## Modifica plugins

Il progetto `www/plugins.xml` directory contiene tutti i riferimenti necessari plugins del vostro progetto di Cordova. Aggiungere un ulteriore riferimento così che quando `cordova.exec` è chiamato, Cordova conosce come mappare il `Echo` argomento di `cordova.exec` per la `Echo` classe che vogliamo scrivere nativamente:

    < nome funzione = "Echo" >< nome param = "blackberry-pacchetto" value="org.apache.cordova.echo.Echo" / >< / caratteristica >
    

## L'aggiunta di Echo.java

Se si nota la struttura dell'attributo value, vedrete un percorso definito che conduce al plugin Echo. Nella directory radice del repo Cordova BlackBerry WebWorks, cercare una directory chiamata `framework` . Questa directory contiene tutto il codice sorgente che gira nativamente su BlackBerry. Passare a `framework/ext/src/org/apache/cordova` . A questo punto, vedrete tutti i plugin directorys, che all'interno della quale è il codice sorgente. Quindi aggiungere l'eco directory per `framework/ext/src/org/apache/cordova/echo` e creare un file chiamato `Echo.java` a`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## Scrittura Echo.java

L'idea base scrivendo un plugin è quello di creare una classe che estende la classe Plugin e un metodo chiamato `execute` per restituire un `PluginResult` classe. Tutte le chiamate a `cordova.exec` passa nell'azione da eseguire all'interno della classe, così come gli argomenti. In questo caso, "eco" è l'azione che vogliamo eseguire all'interno della classe "Echo" e [str] sono gli argomenti che stiamo passando in.

    pacchetto org.apache.cordova.echo;
    
    importazione org.apache.cordova.api.Plugin;
    importazione org.apache.cordova.api.PluginResult;
    importazione org.apache.cordova.json4j.JSONArray;
    importazione org.apache.cordova.json4j.JSONException;
    importazione org.apache.cordova.json4j.JSONObject;
    / --- Un semplice plugin per illustrare come creare un plugin per BlackBerry * fondamentalmente echos indietro il msg che chiama un utente a questo plugin * / pubblica finale classe Echo estende Plugin {echo stringa statica pubblica finale = "echo";
    
        PluginResult pubblica esecuzione (azione String, args JSONArray, String callbackId) {PluginResult risultato = PluginResult nuovo (PluginResult.Status.INVALID_ACTION, "Echo: azione non valido:" + azione);
            if(Action.Equals(echo)) {provare {String theMsg = args.getString(0);
                    Se (theMsg! = null | | theMsg.length() > 0) {risultato = PluginResult nuovo (PluginResult.Status.OK, theMsg);
                    } else {risultato = PluginResult nuovo (PluginResult.Status.ERROR, "Nulla a echo.");
                    }} catch (JSONException e) {risultato = PluginResult nuovo (PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                risultato restituito}};
        }
    
    }
    

Così se guardiamo il codice qui sopra, possiamo vedere che all'interno del metodo execute, prima cerchiamo quali azioni stanno arrivando. Il plugin Echo ha solo una azione, `echo` , quindi ci sarà il solo check per quello. Se il nostro plugin aveva più azioni, è semplicemente una questione di aggiungere ulteriori test condizionali per verificare tali azioni.

Abbiamo poi intenzione di afferrare il messaggio proveniente dal argomenti che viene fornito dal parametro args. Noi possiamo afferrare il primo argomento facendo semplicemente`String theMsg = args.getString(0);`.

Faremo qualche errore controllo e se il messaggio sembra OK, ci sarà istanziare un nuovo PluginResult con uno status ok: `PluginResult.Status.OK` e restituire il messaggio: `theMsg` . Dopo questo, abbiamo restituito il risultato che da passare a JavaScript di essere licenziato nel callback di successo. Se qualcosa non riesce, possiamo tornare varie eccezioni di stato come `PluginResult.Status.ERROR` , `PluginResult.Status.JSON_EXCEPTION` , o `PluginResult.Status.INVALID_ACTION` . Quando passato indietro, questi tipi di risultati fuoco il callback di fallire in JavaScript.

## Aggiornando il. jar nella directory www del progetto

L'aggiunto `Echo.java` deve essere aggiornato nel tuo progetto. Per costruire il `.jar` del file, passare alla directory principale di repo BlackBerry WebWorks ed eseguire il `ant` comando:

    formica aggiornare - Dproject.path="~/path_to_my_project"
    

Questo crea un nuovo `.jar` del file nella `build/ext` directory. Copia il `build/ext/cordova.jar` del file nel tuo `project/www/ext` directory.

Se tutto va bene, che permette di utilizzare il plugin Echo in BlackBerry.