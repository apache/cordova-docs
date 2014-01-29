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

# Amazon Fire OS WebViews

Начиная с 3.0.0, Cordova можно использовать в качестве компонента приложений Amazon Fire OS. Amazon Fire ОС относится к этот компонент как `CordovaWebView` . `CordovaWebView`расширяет Amazon WebView, который построен на открытым исходным кодом проекта Chromium. Используя эту функцию, веб-приложений можно использовать последних веб-стандартов HTML5, в современный веб подсистемой среды выполнения.

## Необходимые условия

*   Кордова 3.0.0 или больше

*   Android SDK, обновлены до последних SDK

*   Amazon WebView SDK

## Руководство по использованию CordovaWebView в проекте OS Amazon Fire

1.  Скачать и развернуть [Amazon WebView SDK][1] , а затем скопируйте awv_interface.jar в `/framework/libs` каталог. Создайте libs / папки, если она не существует.

2.  `cd`в `/framework` и запустите `ant jar` для создания jar Кордова. Он создает файл .jar, формируется как `cordova-x.x.x.jar` в `/framework` каталог.

3.  Редактирование вашего приложения `main.xml` файл (под `/res/layout` ) чтобы выглядеть следующим образом, с `layout_height` , `layout_width` и `id` изменены в соответствии с приложением:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Измените вашу деятельность так, чтобы он реализует `CordovaInterface` . Вы должны реализовать включены методы. Вы можете скопировать их из `/framework/src/org/apache/cordova/CordovaActivity.java` , или реализовать их на свой собственный. В фрагменте кода ниже показано простое приложение, использующее интерфейс. Обратите внимание, как ссылающееся представление id соответствует `id` атрибут, указанный в XML-фрагменте показано выше:
    
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

Если вы используете камеру, следует также реализовать это:

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
    

Наконец, не забудьте добавить пул потоков, в противном случае плагинов нет потоков для запуска на:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Скопировать HTML и JavaScript файлы приложения в проект Amazon Fire OS `/assets/www` каталог.

2.  Копия `config.xml` от `/framework/res/xml` для вашего проекта `/res/xml` каталог.