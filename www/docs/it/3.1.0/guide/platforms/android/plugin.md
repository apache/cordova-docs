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

title: Plugin Android
---

# Plugin Android

Scrivere un plugin richiede una comprensione dell'architettura di Cordova-Android. Cordova-Android è costituito da una WebView Android con ganci collegati ad esso. Questi plugin sono rappresentati come mapping di classe nella `config.xml` file.

Un plugin è costituito da almeno una classe Java che estende la `CordovaPlugin` classe. Un plugin deve eseguire l'override di uno dei `execute` metodi da `CordovaPlugin` . Come migliore pratica, dovrebbe gestire il plugin `pause` e `resume` eventi e qualsiasi messaggio passando tra plugin. Plugin con richieste di lungo corso, attività di fondo quali la riproduzione multimediale, ascoltatori o stato interno dovrebbe implementare il `onReset()` metodo pure. Esegue quando la `WebView` si sposta su una nuova pagina o rinfresca, che ricarica il JavaScript.

## Classe plugin Mapping

La parte di JavaScript di un plugin utilizza sempre il `cordova.exec` metodo come segue:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Questo esegue il marshalling di una richiesta da WebView sul lato nativo Android, più o meno bollente giù a chiamare il `action` metodo sul `service` classe, con gli argomenti passati nella `args` matrice.

Se si distribuiscono vostro plugin come Java file o come un vaso proprio, deve essere aggiunto il plugin per la `config.xml` file nell'applicazione Android-Cordova `res/xml/` directory.

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

Il nome del servizio deve corrispondere a quello utilizzato in JavaScript `exec` chiamata e il valore è il nome completo della classi Java, tra cui lo spazio dei nomi. Altrimenti il plugin può compilare ma comunque irraggiungibile di Cordova.

## Scrivere un Plugin Java Android

JavaScript genera una richiesta di plugin al lato nativo. Il plugin Java Android è mappato correttamente tramite il `config.xml` file. Così ciò che fa apparire la classe finale di Android Java Plugin come?

Che cosa ottiene spedito al plugin tramite di JavaScript `exec` funzione viene passato in classe Plugin `execute` metodo. La maggior parte dei `execute` implementazioni assomigliano a questo:

    @Override boolean pubblica esecuzione (azione String, args JSONArray, CallbackContext callbackContext) genera JSONException {se ("beep".equals(action)) {this.beep(args.getLong(0));
            callbackContext.success();
            restituire true;
        } return false;  / / Restituzione risultati falsi in un errore di "MethodNotFound".
    }
    

Confrontiamo il valore dei `action` parametro e invio richiesta fuori per un metodo (privato) nella classe, facoltativamente passando alcuni dei parametri al metodo.

Quando cattura eccezioni e restituendo errori, è importante per motivi di chiarezza che gli errori restituiti ai nomi di eccezione di JavaScript match Java quanto più possibili.

### Filettatura

JavaScript in WebView fa *non* eseguito sul thread dell'interfaccia utente. Esso viene eseguito sul thread WebCore. Il `execute` metodo gestisce anche sul thread WebCore.

Se avete bisogno di interagire con l'interfaccia utente, è necessario utilizzare il seguente:

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
    

Se non è necessario per l'esecuzione sul thread dell'interfaccia utente, ma non voglio bloccare il thread WebCore:

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
    

### Esempio di Plugin Android echo

Aggiungere quanto segue al nostro `config.xml` file:

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

Quindi aggiungere il seguente file `src/org/apache/cordova/plugin/Echo.java` all'interno della nostra applicazione Android-Cordova:

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
    

Diamo un'occhiata al codice. Il necessario `imports` sono al top. La nostra classe si estende da `CordovaPlugin` . Abbiamo l'override del metodo Execute () al fine di ricevere messaggi da exec (). Il nostro metodo confronta prima contro `action` : questo plugin supporta solo un'azione, la `echo` azione. Qualsiasi altra azione restituisce `false` , che si traduce in un errore di tipo `INVALID_ACTION` , che si traduce in una chiamata di callback errore sul lato JavaScript. Successivamente, si afferra l'eco stringa utilizzando il `getString` metodo sul nostro `args` , dicendo che vogliamo ottenere il parametro 0A nella matrice di parametri. Facciamo un po' di controllo parametro: assicurarsi che non è `null` e assicurarsi che non è una stringa di lunghezza zero. Se è, che noi chiamiamo `callbackContext.error()` (che, ormai, dovresti sapere richiama il callback di errore). Se tutti quei controlli passano, poi chiamiamo `callbackContext.success()` e passare il `message` abbiamo ricevuto come parametro di stringa. Questo si traduce infine in una chiamata di callback di successo sul lato JavaScript. Passa anche il `message` parametro come parametro nella funzione di callback successo JavaScript.

## Plugin debug

Eclipse può essere utilizzato per eseguire il debug un progetto Android, e il plugin può eseguire il debug se il sorgente Java è incluso nel progetto. Per consentire l'attaccamento di codice sorgente alle dipendenze del vaso, quindi questo non è completamente supportato in questo momento è conosciuto solo l'ultima versione di Android strumenti di sviluppo.

## Trabocchetti comuni

*   Plugin hanno accesso a un `CordovaInterface` oggetto. Questo oggetto ha accesso all'androide `Activity` che esegue l'applicazione. Questa è la `Context` necessaria per lanciare un nuovo Android `Intent` . Il `CordovaInterface` permette di plugin avviare un `Activity` per un risultato e impostare il plugin richiamata per quando la `Intent` Torna all'applicazione. Questo è importante, dal momento che il `Intent` sistema s è come Android comunica tra processi.

*   Plugin non hanno accesso diretto alla `Context` che hanno in passato. L'eredità `ctx` membro è obsoleto e verrà rimosso sei mesi dopo 2.0 è rilasciato. Tutti i `ctx` metodi esistano sulla `Context` , così entrambi `getContext()` e `getActivity()` sono in grado di restituire l'oggetto corretto richiesto.

## Utilizzare la fonte

Uno dei modi migliori per prepararsi a scrivere il tuo plugin è di [guardare oltre i plugin esistenti][1].

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

È inoltre necessario leggere i commenti di [CordovaPlugin.java][2].

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java