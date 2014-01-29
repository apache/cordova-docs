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

# Android Webansichten für

In diesem Abschnitt veranschaulicht, wie eine Cordova-fähigen WebView Komponente innerhalb einer größeren Android Anwendung einbetten. Details darüber, wie diese Komponenten miteinander kommunizieren können finden Sie unter Application Plugins.

Wenn Sie mit Android nicht vertraut sind, sollten Sie zunächst machen Sie sich vertraut mit der Android-Plattform-Guide und haben die neuesten Android SDK installiert, bevor Sie versuchen die ungewöhnlicheren Entwicklungsoption einen WebView-Einbettung. Beginnend mit Cordova 1,9, die Android-Plattform setzt auf eine `CordovaWebView` -Komponente, die auf ein Vermächtnis baut `CordovaActivity` Komponente, die vor der 1.9 Version stammt.

1.  Um diese Anweisungen befolgen, stellen Sie sicher, dass Sie die neueste Cordova-Verteilung. Von [cordova.apache.org][1] herunterladen Sie und entpacken Sie das Android-Paket.

2.  Navigieren Sie zu des Android-Pakets `/framework` Verzeichnis und führen `ant jar` . Es schafft die Cordova `.jar` Datei, bildete sich als`/framework/cordova-x.x.x.jar`.

3.  Kopie der `.jar` Datei in des Android-Projekts `/libs` Verzeichnis.

4.  Fügen Sie Folgendes in der Anwendung `/res/xml/main.xml` -Datei, mit der `layout_height` , `layout_width` und `id` die Anwendung angepasst:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  Die Aktivität ändern, sodass es implementiert die `CordovaInterface` . Es sollte die enthalten Methoden implementieren. Vielleicht möchten Sie Kopieren von `/framework/src/org/apache/cordova/CordovaActivity.java` , oder sonst auf eigene Faust zu realisieren. Das folgende Codefragment zeigt eine einfache Anwendung, die auf die Schnittstelle beruht. Beachten Sie, wie die referenzierten anzeigen-Id entspricht der `id` in das XML-Fragment oben angegebene Attribut:
    
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
        

6.  Wenn die Anwendung die Kamera benutzen muss, implementieren Sie Folgendes:
    
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
        

7.  Denken Sie daran, den Threadpool hinzufügen, sonst Plugins keine Threads für die Ausführung:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  Kopieren von HTML und JavaScript-Dateien der Anwendung für des Android-Projekts `/assets/www` Verzeichnis.

9.  Kopie der `config.xml` -Datei `/framework/res/xml` in des Projekts `/res/xml` Verzeichnis.

 [1]: http://cordova.apache.org