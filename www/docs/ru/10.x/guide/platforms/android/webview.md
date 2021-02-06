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

title: WebViews в Android
---

# WebViews в Android

В этом руководстве показано, как встраивать компонент Cordova WebView в рамках более крупных приложений Android. Дополнительные сведения о том, как эти компоненты могут взаимодействовать друг с другом смотрите раздел "Расширения приложения".

Если вы не знакомы с Android, следует сначала ознакомиться с "[Руководство для платформы Android](index.html)" и установить последнюю версию Android перед тем как пробовать делать не обычное встраивание WebView в ваше приложение. Начиная с Cordova 1.9, платформа Android опирается на компонент `CordovaWebView`, который построен на устаревшем компоненте `CordovaActivity`, который был до версии 1.9.

1.  Следуя этим инструкциям, убедитесь, что у вас есть дистрибутив последней версии Cordova. Скачайте его с [cordova.apache.org][1] и распакуйте пакет для Android.

2.  Перейдите в каталог `/framework` пакета Android и запустить `ant jar` . Это создаёт `.jar` файл Cordova, вида `/framework/cordova-x.x.x.jar`.

3.  Скопируйте файл `.jar` в каталог `/libs` Android-проекта.

4.  Добавьте в приложение следующий файл `/res/xml/main.xml`, с `layout_height`, `layout_width` и `id` модицифированными в соответствии с нуждами приложения:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        
5.  Измените вашу деятельность так, чтобы этот класс реализовал `CordovaInterface`. Вы должны реализовать описанные методы этого интерфейса. Вы можете скопировать их из `/framework/src/org/apache/cordova/CordovaActivity.java`, или реализовать их самостоятельно. В следующем фрагменте кода показано простое приложение, которое опирается на интерфейс. Обратите внимание, что id упоминаемого окна соответствует `id` атрибут, указанный в XML-фрагменте показаном выше:
    
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

6.  Если приложение должно использовать камеру, реализуйте следующее:
    
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
        
7.  Наконец, не забудьте добавить пул потоков, иначе у плагинов не будет потоков, на которых они будет выполняться:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }

8.  Скопируйте файлы HTML и JavaScript приложения в каталог `/assets/www` проекта Android.

9.  Скопируйте `config.xml` файл из `/framework/res/xml` в каталог `/res/xml` проекта.

 [1]: http://cordova.apache.org