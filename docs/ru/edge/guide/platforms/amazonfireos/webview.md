* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Amazon Fire OS WebViews

Начиная с 3.3.0, Cordova можно использовать в качестве компонента приложений Amazon Fire OS. Amazon Fire ОС ссылается на этот компонент как `CordovaWebView` . `CordovaWebView` расширяет Amazon WebView, который построен на открытом исходном коде проекта Chromium. Используя эту функцию, веб-приложений можно использовать последние веб-стандарты HTML5, работающие в современной веб среде.

Если вы не знакомы с Amazon Fire ОС, необходимо сначала ознакомиться с руководством ОС платформы Amazon огонь и установили последнюю SDK, прежде чем пытаться более необычный вариант развития встраивания WebView.

## Необходимые условия

*   Кордова 3.3.0 или больше

*   Android SDK, последней версии

*   Amazon WebView SDK

## Руководство по использованию CordovaWebView в проекте OS Amazon Fire

1.  Следовать этим инструкциям, убедитесь, что у вас есть дистрибутив последней Кордова. Скачать его с [cordova.apache.org][1] и распакуйте его пакет Amazon Fire OS.

2.  Скачать и развернуть [Amazon WebView SDK][2] , а затем скопируйте awv_interface.jar в `/framework/libs` каталог. Создайте libs / папки, если она не существует.

3.  Перейдите к пакету `/framework` директорию и запустить `ant jar` . Он создаёт Кордова `.jar` файл, как`/framework/cordova-x.x.x.jar`.

4.  Копия `.jar` файл в Android-проект `/libs` каталог.

5.  Добавьте в приложение следующий `/res/xml/main.xml` файл, с `layout_height` , `layout_width` и `id` изменения в соответствии с приложением:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

6.  Измените вашу деятельность так, чтобы он реализует `CordovaInterface` . Вы должны реализовать включены методы. Вы можете скопировать их из `/framework/src/org/apache/cordova/CordovaActivity.java` , или реализовать их на свой собственный. В фрагменте кода ниже показано простое приложение, использующее интерфейс. Обратите внимание, как ссылающееся представление id соответствует `id` атрибут, указанный в XML-фрагменте показано выше:
    
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
    

1.  Скопировать HTML и JavaScript файлы приложения в каталог `/assets/www` проекта Amazon Fire OS.

2.  Скопируйте `config.xml` из `/framework/res/xml` для в каталог `/res/xml` вашего проекта.