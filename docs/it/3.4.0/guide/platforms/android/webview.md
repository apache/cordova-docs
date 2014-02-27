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

# Visualizzazioni Web Android

In questa sezione viene illustrato come incorporare un componente WebView Cordova abilitato all'interno di un'applicazione Android più grande. Per dettagli su come questi componenti possono comunicare con a vicenda, vedere applicazione plugin.

Se si ha familiarità con Android, si dovrebbe acquisire familiarità con la guida di piattaforma Android e avere l'ultimo Android SDK installato prima di tentare l'opzione di sviluppo più insolito di incorporare un WebView. A partire da 1,9 a Cordova, la piattaforma Android si basa su un `CordovaWebView` componente, che si basa su un retaggio `CordovaActivity` componente che pre-date la versione 1.9.

1.  Per seguire queste istruzioni, assicuratevi di che avere l'ultima distribuzione di Cordova. Scaricare da [cordova.apache.org][1] e decomprimere il pacchetto di Android.

2.  Spostarsi del package Android `/framework` directory ed eseguire `ant jar` . Crea il Cordova `.jar` file, costituita come`/framework/cordova-x.x.x.jar`.

3.  Copia il `.jar` file al progetto Android `/libs` directory.

4.  Aggiungere il seguente all'applicazione `/res/xml/main.xml` file, con la `layout_height` , `layout_width` e `id` modificato per soddisfare la domanda:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  Modificare l'attività in modo che esso implementa il `CordovaInterface` . Deve implementare i metodi inclusi. Si potrebbe desiderare di copiarli da `/framework/src/org/apache/cordova/CordovaActivity.java` , o altrimenti li implementare sul proprio. Il codice di esempio riportato di seguito viene illustrata un'applicazione base che si basa sull'interfaccia. Si noti come l'id di riferimento vista corrisponde la `id` attributo specificato nel frammento XML sopra indicato:
    
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
        

6.  Se l'applicazione deve utilizzare la fotocamera, implementare le seguenti:
    
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
        

7.  Infine, ricordarsi di aggiungere il pool di thread, altrimenti il plugin non hanno nessun thread su cui eseguire:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  Copiare i file dell'applicazione HTML e JavaScript per il progetto Android `/assets/www` directory.

9.  Copia il `config.xml` del file da `/framework/res/xml` per il progetto `/res/xml` directory.

 [1]: http://cordova.apache.org