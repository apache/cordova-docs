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

# Amazon fuoco OS visualizzazioni Web

A partire da 3.0.0, è possibile utilizzare Cordova come componente nelle applicazioni OS fuoco Amazon. Amazon fuoco OS si riferisce a questo componente come `CordovaWebView` . `CordovaWebView`estende WebView Amazon che è costruito sul cromo progetto open source. Sfruttando questa caratteristica, le applicazioni web possono utilizzare i più recenti standard del web HTML5 in esecuzione in un motore di runtime del web moderno.

## Prerequisiti

*   Cordova 3.0.0 o maggiore

*   Android SDK aggiornato all'ultimo SDK

*   Amazon WebView SDK

## Guida all'utilizzo di CordovaWebView in un progetto di OS del fuoco Amazon

1.  Scarica espandere [Amazon WebView SDK][1] , quindi copiare il awv_interface.jar in `/framework/libs` directory. Creare un libs / cartella se non esiste.

2.  `cd`in `/framework` ed eseguire `ant jar` per costruire il barattolo di cordova. Crea il file. jar formato come `cordova-x.x.x.jar` nel `/framework` directory.

3.  Modifica dell'applicazione `main.xml` file (sotto `/res/layout` ) per essere simile alla seguente, con la `layout_height` , `layout_width` e `id` modificato per soddisfare la vostra applicazione:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Modificare la vostra attività che implementa il `CordovaInterface` . È necessario implementare i metodi inclusi. Si potrebbe desiderare di copiarli da `/framework/src/org/apache/cordova/CordovaActivity.java` , o implementarle sul proprio. Il frammento di codice riportato di seguito viene illustrata un'applicazione di base che utilizza l'interfaccia. Si noti come l'id di riferimento vista corrisponde la `id` attributo specificato nel frammento XML sopra indicato:
    
        public class CordovaViewTestActivity extends Activity implements CordovaInterface {
            CordovaWebView cwv;
            /* Called when the activity is first created. */
            @Override
            public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }
        

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

Se si utilizza la fotocamera, è necessario implementare anche questo:

        @Override
        public void setActivityResultCallback(CordovaPlugin plugin) {
            this.activityResultCallback = plugin;
        }
        /**
         * Launch an activity for which you would like a result when it finished. When this activity exits,
         * your onActivityResult() method is called.
         *
         * @param command           The command object
         * @param intent            The intent to start
         * @param requestCode       The request code that is passed to callback to identify the activity
         */
        public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
            this.activityResultCallback = command;
            this.activityResultKeepRunning = this.keepRunning;
    
            // If multitasking turned on, then disable it for activities that return results
            if (command != null) {
                this.keepRunning = false;
            }
    
            // Start activity
            super.startActivityForResult(intent, requestCode);
        }
    
        @Override
        /**
         * Called when an activity you launched exits, giving you the requestCode you started it with,
         * the resultCode it returned, and any additional data from it.
         *
         * @param requestCode       The request code originally supplied to startActivityForResult(),
         *                          allowing you to identify who this result came from.
         * @param resultCode        The integer result code returned by the child activity through its setResult().
         * @param data              An Intent, which can return result data to the caller (various data can be attached to Intent "extras").
         */
        protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
            super.onActivityResult(requestCode, resultCode, intent);
            CordovaPlugin callback = this.activityResultCallback;
            if (callback != null) {
                callback.onActivityResult(requestCode, resultCode, intent);
            }
        }
    

Infine, ricordarsi di aggiungere il pool di thread, altrimenti il plugin non hanno nessun thread per eseguire:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Copiare i file dell'applicazione HTML e JavaScript al progetto Amazzonia fuoco OS `/assets/www` directory.

2.  Copia `config.xml` dal `/framework/res/xml` al tuo progetto `/res/xml` directory.