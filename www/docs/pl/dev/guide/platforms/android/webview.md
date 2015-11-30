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

title: Android WebViews
---

# Android WebViews

Ten poradnik pokazuje jak wobec sprzeniewierzyć Cordova włączony Widok sieci Web składnika w większych aplikacji Android. Szczegółowe informacje na temat jak te składniki mogą komunikować się ze sobą, zobacz wtyczki aplikacji.

Jeśli jesteś zaznajomiony z systemem Android, należy najpierw zapoznać się z podręcznikiem platformy Android i mieć najnowszy Android SDK zainstalowany zanim spróbujesz opcji rozwoju bardziej nietypowe osadzanie widoku sieci Web. Począwszy od Cordova 1.9, platformy Android opiera się na `CordovaWebView` składnik, który opiera się na dziedzictwo `CordovaActivity` składnik sprzed wersji 1.9.

1.  Aby wykonać te instrukcje, upewnij się, że masz najnowsze dystrybucji Cordova. Pobierz go z [cordova.apache.org][1] i rozpakuj jej Android pakiet.

2.  Przejdź do pakietu Android `/framework` katalogu i uruchomić `ant jar` . Tworzy Cordova `.jar` pliku, powstały jako`/framework/cordova-x.x.x.jar`.

3.  Kopia `.jar` pliku do projektu Android `/libs` katalogu.

4.  Dodaj następujące wpisy do aplikacji `/res/xml/main.xml` pliku, z `layout_height` , `layout_width` i `id` dostosowany do wniosku:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  Modyfikowanie działania, tak, że realizuje `CordovaInterface` . To należy wprowadzić w życie metody zawarte. Może chcesz skopiować je z `/framework/src/org/apache/cordova/CordovaActivity.java` , czy jeszcze je realizować na własną rękę. Poniższy fragment kodu pokazuje podstawowych aplikacji, która opiera się na interfejsie. Zauważ, jak odpowiada identyfikator odwołanie `id` atrybut określonych we fragmencie XML pokazano powyżej:
    
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
        

6.  Jeśli aplikacja musi korzystać z aparatu fotograficznego, wykonania następujących czynności:
    
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
        

7.  Wreszcie, należy pamiętać dodać wątek puli, inaczej wtyczki mają nie wątki, na którym należy uruchomić:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  Skopiuj pliki aplikacji HTML i JavaScript do projektu Android `/assets/www` katalogu.

9.  Kopia `config.xml` plik `/framework/res/xml` do projektu `/res/xml` katalogu.

 [1]: http://cordova.apache.org