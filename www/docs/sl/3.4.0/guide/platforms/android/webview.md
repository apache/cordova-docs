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

# Spletni Android pogledi

To poglavje prikazuje kako vlagati Cordova omogočen spletni pogled komponente znotraj večje Android aplikacije. Podrobnosti o tem, kako te komponente lahko komunicirajo med seboj, si oglejte Uporaba Plugins.

Če niste seznanjeni z Android, morate najprej seznanite z Android platformo vodnik in so najnovejši Android SDK nameščen, preden poskusite bolj nenavadnih razvoj možnost vdelave v spletni pogled. Začenši z 1,9 Cordova, platformo Android temelji na a `CordovaWebView` komponento, ki temelji na zapuščino `CordovaActivity` komponento, ki pred datumi 1.9 sprostitev.

1.  Sledite tem navodilom, poskrbite, da imate najnovejšo distribucijo Cordova. Travnato gričevje to s [cordova.apache.org][1] ter odpreti patentno zadrgo Android paket.

2.  Krmarite do Android paket `/framework` naslovnik ter prost dostop `ant jar` . Ustvarja na Cordova `.jar` datoteko, ki je nastala kot`/framework/cordova-x.x.x.jar`.

3.  Kopiraj v `.jar` datoteke v projektu Android `/libs` imenik.

4.  Dodajte naslednje aplikacije `/res/xml/main.xml` datoteko, z v `layout_height` , `layout_width` in `id` spremenjene, da ustrezajo uporabi:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  Spreminjanje dejavnosti tako, da izvaja z `CordovaInterface` . To bi morale izvajati vključeni metodah. Želite kopirati jih iz `/framework/src/org/apache/cordova/CordovaActivity.java` , ali pa jih izvajati na svoje. Naslednji odlomek prikazuje osnovno aplikacijo, ki se opira na vmesniku. Opomba kako sklicevano pogled id ujema z `id` atributa, navedenega v XML fragment prikazan zgoraj:
    
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
        

6.  Če uporabite kamero uporabo, izvajati naslednje:
    
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
        

7.  Nenazadnje, ne pozabite dodati zaloga niti, sicer plugins so nobenih niti, ko želite zagnati:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  Kopirajte HTML in JavaScript datotek programa Android projekt `/assets/www` imenik.

9.  Izvod v `config.xml` pila s `/framework/res/xml` v projekt `/res/xml` imenik.

 [1]: http://cordova.apache.org