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

# Amazon Fire OS Webansichten für

Beginnend mit 3.0.0, können Sie Cordova als Komponente in Amazon-Feuer-OS-Anwendungen. Amazon Fire OS bezieht sich auf diese Komponente als `CordovaWebView` . `CordovaWebView`erweitert Amazon WebView, die auf der open-Source-Projekt Chromium basiert. Durch die Nutzung dieser Funktion, können Ihre Webanwendungen der neuesten HTML5-Web-Standards, die in einem modernen Web-Runtime-Engine ausgeführt nutzen.

## Voraussetzungen

*   Cordova 3.0.0 oder größer

*   Android SDK aktualisiert, um neuesten SDK

*   Amazon WebView SDK

## Anleitung zur Verwendung von CordovaWebView in einem Amazon-Feuer-OS-Projekt

1.  Download [Amazon WebView SDK][1] zu erweitern, und kopieren Sie die awv_interface.jar in `/framework/libs` Verzeichnis. Erstellen einer Libs / Ordner, wenn es nicht vorhanden ist.

2.  `cd`in `/framework` und `ant jar` baut die Cordova-Jar. Es schafft die .jar-Datei als `cordova-x.x.x.jar` in das `/framework` Verzeichnis.

3.  Bearbeiten der Anwendung `main.xml` Datei (unter `/res/layout` ) mit folgenden Aussehen der `layout_height` , `layout_width` und `id` Ihrer Anwendung angepasst:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Ihre Aktivität ändern, sodass es implementiert die `CordovaInterface` . Sie sollten die enthaltenen Methoden implementieren. Vielleicht möchten Sie Kopieren von `/framework/src/org/apache/cordova/CordovaActivity.java` , oder setzen sie auf eigene Faust. Das folgende Codefragment zeigt eine einfache Anwendung, die die Schnittstelle verwendet. Beachten Sie, wie die referenzierten anzeigen-Id entspricht der `id` in das XML-Fragment oben angegebene Attribut:
    
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

Wenn Sie die Kamera verwenden, sollten Sie dies auch implementieren:

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
    

Denken Sie daran, den Threadpool hinzufügen, sonst die Plugins keine Threads ausgeführt:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Kopieren Sie Ihre Anwendung HTML und JavaScript-Dateien zu Ihrem Amazon-Feuer-OS-Projekts `/assets/www` Verzeichnis.

2.  Kopie `config.xml` von `/framework/res/xml` zu Ihrem Projekts `/res/xml` Verzeichnis.