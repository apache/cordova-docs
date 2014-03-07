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

# Plugin Android

In questa sezione vengono fornite informazioni dettagliate per come implementare il codice plugin nativo sulla piattaforma Android. Prima di leggere questo, vedere applicazione plugin per una panoramica della struttura del plugin e la sua interfaccia JavaScript comune. Questa sezione continua a dimostrare il plugin di esempio *eco* che comunica da Cordova webview alla piattaforma nativa e ritorno. Per un altro esempio, vedi anche i commenti di [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Plugin Android sono basati su Android di Cordova, che consiste di una WebView Android con ganci collegati ad esso. Plugin sono rappresentati come mapping di classe nella `config.xml` file. Un plugin è costituito da almeno una classe Java che estende la `CordovaPlugin` classe, si esegue l'override di uno dei suoi `execute` metodi. Come migliore pratica, il plugin dovrebbe gestire anche `pause` e `resume` eventi, insieme a qualsiasi messaggio passando tra plugin. Plugin con richieste di lungo corso, attività di fondo quali la riproduzione multimediale, ascoltatori o stato interno dovrebbe implementare il `onReset()` metodo pure. Esegue quando la `WebView` si sposta su una nuova pagina o rinfresca, che ricarica il JavaScript.

## Classe plugin Mapping

Interfaccia JavaScript del plugin utilizza il `cordova.exec` metodo come segue:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Questo esegue il marshalling di una richiesta da WebView al lato nativo Android, efficacemente chiamando il `action` metodo sul `service` classe, con ulteriori argomenti passati nella `args` matrice.

Se si distribuisce un plugin come Java file o come un file *jar* propria, il plugin deve essere specificato nell'applicazione Android-Cordova `res/xml/config.xml` file. Vedere applicazione plugin per ulteriori informazioni su come utilizzare il `plugin.xml` file per iniettare questo `feature` elemento:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

Il nome del servizio corrisponde a quello utilizzato in JavaScript `exec` chiamare. Il valore è l'identificatore dello spazio dei nomi completo della classe Java. In caso contrario, il plugin può compilare ma non essere ancora disponibile a Cordova.

## Durata e inizializzazione di Plugin

Viene creata un'istanza di un oggetto plugin per la vita di ogni `WebView` . Plugin non vengono create istanze fino a quando essi fanno riferimento in primo luogo una chiamata da JavaScript, a meno che non `<param>` con un `onload` `name` attributo è impostato su `"true"` in `config.xml` . Per esempio:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Plugin dovrebbe usare il `initialize` metodo per la loro logica di avviamento.

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Scrivere un Plugin Java Android

Una chiamata JavaScript spara una richiesta di plugin al lato nativo, e il plugin di Java correspoinding è mappato correttamente nella `config.xml` file, ma cosa il finale Android Java Plugin classe aspetto? Qualunque cosa viene inviata al plugin con JavaScript `exec` funzione viene passato in classe plugin `execute` metodo. La maggior parte dei `execute` implementazioni assomigliano a questo:

        @Override boolean pubblica esecuzione (azione String, args JSONArray, CallbackContext callbackContext) genera JSONException {se ("beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                restituire true;
            } return false;  / / Restituzione risultati falsi in un errore di "MethodNotFound".
        }
    

JavaScript `exec` della funzione `action` parametro corrisponde a un metodo di classe privata per spedire con parametri facoltativi.

Quando cattura eccezioni e restituendo errori, è importante per motivi di chiarezza che gli errori restituiti ai nomi di eccezione di JavaScript match Java quanto più possibili.

## Filettatura

JavaScript del plugin fa *non* eseguire nel thread principale della `WebView` interfaccia; invece, gira sul `WebCore` filo, come fa il `execute` metodo. Se avete bisogno di interagire con l'interfaccia utente, è necessario utilizzare la seguente variazione:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

Uso la seguente se non è necessario eseguire l'interfaccia principale di discussione, ma non voglio bloccare il `WebCore` filo sia:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## Esempio di Plugin Android echo

Per abbinare la caratteristica di *eco* dell'interfaccia JavaScript descritto nel plugin di applicazione, utilizzare il `plugin.xml` per iniettare una `feature` specifica per la piattaforma locale `config.xml` file:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

Quindi aggiungere il codice seguente per la `src/org/apache/cordova/plugin/Echo.java` file:

        package org.apache.cordova.plugin;
    
        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;
    
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;
    
        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {
    
            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }
    
            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }
    

Le importazioni necessarie nella parte superiore del file estende la classe da `CordovaPlugin` , di cui `execute()` metodo esegue l'override per ricevere messaggi da `exec()` . Il `execute()` metodo verifica innanzitutto il valore di `action` , per cui in questo caso c'è una sola valida `echo` valore. Qualsiasi altra azione restituisce `false` e si traduce in un `INVALID_ACTION` errore, che si traduce in un callback di errore richiamato sul lato JavaScript.

Il metodo recupera successivamente l'eco stringa utilizzando la `args` dell'oggetto `getString` metodo, specificando il primo parametro passato al metodo. Dopo che il valore viene passato a un privato `echo` metodo, è parametro controllato per assicurarsi che non è `null` o una stringa vuota, nel qual caso `callbackContext.error()` richiama il callback di errore di JavaScript. Se passano i vari controlli, il `callbackContext.success()` passa l'originale `message` stringa al callback di successo di JavaScript come parametro.

## Integrazione Android

Caratteristiche Android un `Intent` sistema che consente di comunicare tra loro processi. Plugin hanno accesso a un `CordovaInterface` oggetto, che può accedere l'androide `Activity` che esegue l'applicazione. Questa è la `Context` necessaria per lanciare un nuovo Android `Intent` . Il `CordovaInterface` permette di plugin avviare un `Activity` per un risultato e impostare il plugin richiamata per quando il `Intent` restituisce all'applicazione.

A partire da Cordova 2.0, plugin possono accedere non più direttamente il `Context` e l'eredità `ctx` membro è obsoleto. Tutti i `ctx` metodi esistano sulla `Context` , così entrambi `getContext()` e `getActivity()` può restituire l'oggetto richiesto.

## Plugin Android debug

Eclissi consente di eseguire il debug di plugin come sorgente Java incluso nel progetto. Solo l'ultima versione dell'Android Developer Tools consente di allegare il codice sorgente alle dipendenze *JAR* , quindi questa funzione non è ancora pienamente supportata.