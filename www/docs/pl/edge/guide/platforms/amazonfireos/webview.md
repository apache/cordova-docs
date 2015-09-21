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

title: Amazon ogień OS WebViews
---

# Amazon ogień OS WebViews

Począwszy od 3.3.0, można użyć Cordova jako składnika w aplikacji Amazon ogień OS. Amazon ogień OS odnosi się do tej części jako `CordovaWebView` . `CordovaWebView`rozszerza Widok sieci Web Amazon, który opiera się na open source Chromium projektu. Korzystając z tej funkcji, aplikacji sieci web można wykorzystać najnowsze standardy internetowe HTML5 w nowoczesny tkanina aparat runtime.

Jeśli jesteś zaznajomiony z Amazon ogień OS, najpierw należy zapoznać się z Amazon ogień OS platformy przewodnik i najnowsze SDK zainstalowany zanim spróbujesz opcji rozwoju bardziej nietypowe osadzanie widoku sieci Web.

## Wymagania

*   Cordova 3.3.0 lub większa

*   Android SDK aktualizacji do najnowszego zestawu SDK

*   Amazon WebView SDK

## Przewodnik CordovaWebView w projekcie OS Amazon ognia

1.  Aby wykonać te instrukcje, upewnij się, że masz najnowsze dystrybucji Cordova. Pobierz go z [cordova.apache.org][1] i rozpakuj jego pakiet Amazon ogień OS.

2.  Pobierz i rozwiń [Amazon WebView SDK][2] , a następnie skopiuj awv_interface.jar do `/framework/libs` katalogu. Tworzenie biblioteki / folderu, jeśli jeszcze nie istnieje.

3.  Przejdź do pakietu `/framework` katalogu i uruchomić `ant jar` . Tworzy Cordova `.jar` pliku, powstały jako`/framework/cordova-x.x.x.jar`.

4.  Kopia `.jar` pliku do projektu Android `/libs` katalogu.

5.  Dodaj następujące wpisy do aplikacji `/res/xml/main.xml` pliku, z `layout_height` , `layout_width` i `id` dostosowany do wniosku:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

6.  Modyfikować swoje działania, tak, że realizuje `CordovaInterface` . Należy wdrożyć metody zawarte. Może chcesz skopiować je z `/framework/src/org/apache/cordova/CordovaActivity.java` , lub wdrożyć je na własną rękę. Poniższy fragment kodu pokazuje podstawowych aplikacji, która korzysta z interfejsu. Zauważ, jak odpowiada identyfikator odwołanie `id` atrybut określonych we fragmencie XML pokazano powyżej:
    
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
        

 [1]: http://cordova.apache.org
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

Jeśli używasz aparatu, należy również wdrożyć to:

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
    

Wreszcie, należy pamiętać dodać wątek puli, inaczej pluginy mieć nie wątków, aby uruchomić:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Skopiować HTML i JavaScript, pliki aplikacji do projektu Amazon ogień OS `/assets/www` katalogu.

2.  Kopia `config.xml` z `/framework/res/xml` do projektu `/res/xml` katalogu.