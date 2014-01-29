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

# Android WebViews

В этом разделе показано, как вставлять WebView Cordova включен компонент в рамках более крупных приложений Android. Дополнительные сведения о том, как эти компоненты могут взаимодействовать друг с другом смотрите приложение плагины.

Если вы не знакомы с Android, следует сначала ознакомиться с руководством Android платформы и установлен перед более необычный вариант развития встраивания WebView последний пакет SDK Android. Начиная с Cordova 1.9, платформа Android опирается на `CordovaWebView` компонент, который опирается на наследие `CordovaActivity` компонент, который до даты версии 1.9.

1.  Следовать этим инструкциям, убедитесь, что у вас есть дистрибутив последней Кордова. Скачать его с [cordova.apache.org][1] и распакуйте Android пакет.

2.  Перейдите в Android пакет `/framework` директорию и запустить `ant jar` . Он создаёт Кордова `.jar` файл, как`/framework/cordova-x.x.x.jar`.

3.  Копия `.jar` файл в Android-проект `/libs` каталог.

4.  Добавьте в приложение следующий `/res/xml/main.xml` файл, с `layout_height` , `layout_width` и `id` изменения в соответствии с приложением:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  Изменения деятельности таким образом, чтобы он реализует `CordovaInterface` . Она должна реализовывать методы, включены. Вы можете скопировать их из `/framework/src/org/apache/cordova/CordovaActivity.java` , или иначе реализовать их на свой собственный. В следующем фрагменте кода показано простое приложение, которое опирается на интерфейсе. Обратите внимание, как ссылающееся представление id соответствует `id` атрибут, указанный в XML-фрагменте показано выше:
    
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
        

7.  Наконец, не забудьте добавить пул потоков, иначе плагины не нити, на которой будет выполняться:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  Скопируйте файлы HTML и JavaScript приложения для Android-проект `/assets/www` каталог.

9.  Копия `config.xml` файл из `/framework/res/xml` в проект `/res/xml` каталог.

 [1]: http://cordova.apache.org