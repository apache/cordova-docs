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

Partire da 1,9 a Cordova, con l'assistenza della `CordovaActivity` , è possibile utilizzare Cordova come componente di un'applicazione Android nativa più grande. Android si riferisce a questo componente come il `CordovaWebView` . Nuove applicazioni basate su Cordova da 1,9 in poi utilizzano il `CordovaWebView` come visualizzazione principale, indipendentemente dal fatto che l'eredità `CordovaActivity` approccio viene utilizzato.

Se si ha familiarità con lo sviluppo di applicazioni Android, Android piattaforma guida allo sviluppo di un'applicazione di Cordova prima di tentare di comprendere un WebView. Non è il modo principale per creare applicazioni Android Cordova. Queste istruzioni sono attualmente manuale, ma può essere eventualmente essere automatizzato.

## Prerequisiti

*   Cordova 1,9 o maggiore

*   Android SDK aggiornato all'ultimo SDK

## Guida all'utilizzo di CordovaWebView in un progetto Android

1.  `cd`in `/framework` ed eseguire `ant jar` per costruire il barattolo di cordova. Crea il file. jar formato come `cordova-x.x.x.jar` nel `/framework` directory.

2.  Copiare il barattolo di cordova nel vostro progetto Android `/libs` directory.

3.  Modifica dell'applicazione `main.xml` file (sotto `/res/xml` ) per essere simile alla seguente, con la `layout_height` , `layout_width` e `id` modificato per soddisfare la vostra applicazione:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Modificare la vostra attività che implementa il `CordovaInterface` . È necessario implementare i metodi inclusi. Si potrebbe desiderare di copiarli da `/framework/src/org/apache/cordova/CordovaActivity.java` , o implementarle sul proprio. Il frammento di codice riportato di seguito viene illustrata un'applicazione di base che utilizza l'interfaccia. Si noti come l'id di riferimento vista corrisponde la `id` attributo specificato nel frammento XML sopra indicato:
    
        classe pubblica che cordovaviewtestactivity estende attività implementa CordovaInterface {CordovaWebView cwv;
            / * Chiamata quando l'attività viene creato. * / @Override pubblici onCreate(Bundle savedInstanceState) void {super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = findViewById(R.id.tutorialView) (CordovaWebView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }
        

Se si utilizza la fotocamera, è necessario implementare anche questo:

        @Override public void setActivityResultCallback (plugin CordovaPlugin) {this.activityResultCallback = plugin;
        } / --- Avviare un'attività per cui si desidera un risultato quando finito. Quando si esce da questa attività, * viene chiamato il metodo onActivityResult().
         ** @param comando l'oggetto comando * intento di @param l'intento di avviare * requestCode @param il codice di richiesta che viene passato al callback per identificare l'attività * / public void startActivityForResult (comando CordovaPlugin, intento intento, int requestCode) {this.activityResultCallback = comando;
            this.activityResultKeepRunning = this.keepRunning;
    
            / / Se il multitasking attivato, quindi disattivarla per attività che restituiscono risultati se (comando! = null) {this.keepRunning = false;
            } / / Inizio attività super.startActivityForResult (intento, requestCode);
        } @Override / --- chiamato quando un'attività ha lanciato uscite, dandovi la requestCode si è iniziato con, * il resultCode ha rinviato ed eventuali dati aggiuntivi da esso.
         requestCode ** @param il codice di richiesta originariamente fornito a startActivityForResult(), * consentendo di identificare che questo risultato è venuto da.
         resultCode * @param il codice di risultato integer restituito dall'attività figlio attraverso il suo setResult().
         dati * @param un intento, che può restituire dati dei risultati al chiamante (vari dati possono essere associati a intenti "extra").
         * / protected void onActivityResult (int requestCode, int resultCode, intento intento) {super.onActivityResult (requestCode, resultCode, intento);
            CordovaPlugin callback = this.activityResultCallback;
            Se (richiamata! = null) {callback.onActivityResult (requestCode, resultCode, intento);
            }
        }
    

Infine, ricordarsi di aggiungere il pool di thread, altrimenti il plugin non hanno nessun thread per eseguire:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Copiare i file dell'applicazione HTML e JavaScript del progetto Android `/assets/www` directory.

2.  Copia `config.xml` dal `/framework/res/xml` al tuo progetto `/res/xml` directory.