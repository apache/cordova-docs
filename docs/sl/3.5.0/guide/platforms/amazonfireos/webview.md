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

# Amazon ogenj OS spletni pogledi

Začenši z 3.0.0, uporabite Cordova kot komponenta v Amazon ogenj OS aplikacije. Amazon ogenj OS se nanaša na to komponento, kot `CordovaWebView` . `CordovaWebView`razširja Amazon spletni pogled, ki je zgrajen na odprtokodni projekt kroma. Z premikanje z vzvodom to funkcijo, lahko vaše spletne aplikacije uporabljajo najnovejše HTML5 spletnih standardov vožnjo v sodobni spletni izvajalnik motor.

## Predpogoji

*   Cordova 3.0.0 ali večje

*   Android SDK, posodobljen na najnovejšo SDK

*   Amazon spletni pogled SDK

## Vodnik za uporabo CordovaWebView v projektu Amazon ogenj OS

1.  Download in razširite [Amazon spletni pogled SDK][1] , torej ulitek awv_interface.jar v `/framework/libs` naslovnik. Ustvarite a libs / mapo, če ne obstaja.

2.  `cd`v `/framework` ter prost dostop `ant jar` zgraditi cordova kozarec. Ustvari datoteka s pripono .jar ustanovljena kot `cordova-x.x.x.jar` v v `/framework` naslovnik.

3.  Urejanje aplikacije `main.xml` datoteko (pod `/res/layout` ) videti kot naslednje, z v `layout_height` , `layout_width` in `id` spremenjene, da ustrezajo aplikacijo:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Spremenijo svoje dejavnosti tako, da izvaja z `CordovaInterface` . Bi bilo izvajala vključeni metodah. Želite kopirati jih iz `/framework/src/org/apache/cordova/CordovaActivity.java` , ali jih izvajajo na svoje. Kodeks fragment spodaj prikazuje osnovno aplikacijo, ki uporablja vmesnik. Opomba kako sklicevano pogled id ujema z `id` atributa, navedenega v XML fragment prikazan zgoraj:
    
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

Če uporabljate fotoaparat, bi tudi izvajati to:

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
    

Nenazadnje, ne pozabite dodati zaloga niti, sicer plugins so ni niti teči:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Kopiranje vaše prijave HTML in JavaScript datotek na Amazon ogenj OS projekta `/assets/www` imenik.

2.  Kopija `config.xml` od `/framework/res/xml` za vaš projekt `/res/xml` imenik.