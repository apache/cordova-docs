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

Начиная Cordova 1.9, с помощью `CordovaActivity` , Cordova можно использовать в качестве компонента в более крупных родной Android приложений. Android относится к этот компонент как `CordovaWebView` . Новые приложения на базе Cordova от 1,9 года использовать `CordovaWebView` как основной вид, независимо от того наследие `CordovaActivity` используется подход.

Если вы не знакомы с разработки Android приложений, пожалуйста, прочитайте руководство Android платформы разработки Cordova-приложение перед попыткой включить WebView. Это не основной способ создания приложений Android Кордова. Эти инструкции в настоящее время вручную, но может быть в конечном итоге быть автоматизированы.

## Необходимые условия

*   Кордова 1.9 или выше

*   SDK Android, обновлены до последних SDK

## Руководство по использованию CordovaWebView в Android-проект

1.  `cd`в `/framework` и запустить `ant jar` построить cordova банку. Он создает файл .jar, формируется как `cordova-x.x.x.jar` в `/framework` каталог.

2.  Скопируйте cordova банку в ваш Android-проект `/libs` каталог.

3.  Редактирование вашего приложения `main.xml` файл (под `/res/xml` ) чтобы выглядеть следующим образом, с `layout_height` , `layout_width` и `id` изменены в соответствии с вашего приложения:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Измените вашу деятельность, чтобы он реализует `CordovaInterface` . Следует реализовать включены методы. Вы можете скопировать их из `/framework/src/org/apache/cordova/CordovaActivity.java` , или реализовать их на свой собственный. Фрагмент кода ниже показывает простое приложение, использующее интерфейс. Обратите внимание, как ссылающееся представление id соответствует `id` атрибут, указанный в XML-фрагменте показано выше:
    
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
    

Наконец, не забудьте добавить пул потоков, иначе плагины нет потоков для запуска на:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Скопировать файлы HTML и JavaScript вашего приложения на ваш Android-проекта `/assets/www` каталог.

2.  Копия `config.xml` от `/framework/res/xml` к вашему проекту `/res/xml` каталог.