---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android плагины

Этот раздел содержит сведения о том, как реализовать код родной плагин на платформе Android. Прежде чем читать это, увидеть приложения плагины обзор структуры плагина и его общий интерфейс JavaScript. Этот раздел продолжает демонстрировать образец *эхо* плагин, который общается с webview Кордова на родной платформе и обратно. Еще один пример см. также комментарии в [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android плагины основаны на Cordova-андроида, который состоит из Android WebView с крючками, прилагается к нему. Плагины представляются в виде сопоставления класса в `config.xml` файл. Модуль состоит из по крайней мере один Java-класса, который расширяет `CordovaPlugin` класс, переопределение одной из его `execute` методы. Как лучшая практика, плагин также должен обрабатывать `pause` и `resume` события, наряду с любой передачи между плагины сообщений. Плагины с длительные запросы, фоновой активности как воспроизведение мультимедиа, слушателей или внутреннее состояние следует осуществить `onReset()` метод также. Он выполняется, когда `WebView` переходит на новую страницу или обновления, которая перезагружает JavaScript.

## Сопоставление классов плагина

Интерфейс JavaScript плагин использует `cordova.exec` метод следующим образом:

        Exec (<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Это маршалирует запрос от WebView Android родной стороне, эффективно вызова `action` метод `service` класса, с дополнительные аргументы, передаваемые в `args` массив.

Ли вы распространяете плагин Java-файл или файл *jar* своих собственных, плагин должен быть указан в вашем приложении Cordova-Android `res/xml/config.xml` файл. См приложение плагины для получения дополнительной информации о том, как использовать `plugin.xml` файл для вставки это `feature` элемент:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

Имя службы соответствует той, которая используется в JavaScript `exec` вызов. Значение является идентификатором полного пространства имен класса Java. В противном случае плагин может компилировать, но по-прежнему недоступным для Кордова.

## Плагин инициализации и жизни

Один экземпляр объекта плагин создан для жизни каждого `WebView` . Плагины не создаются до тех пор, пока они сначала ссылается вызов из JavaScript, если не `<param>` с `onload` `name` атрибут имеет значение `"true"` в `config.xml` . Например:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Следует использовать плагины `initialize` метод для их запуска логики.

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Написание Android Java плагин

Вызов JavaScript запускает запрос плагин к родной стороне, и плагин Java correspoinding отображается правильно в `config.xml` файл, но как окончательный вид класса Android Java плагин? Все, что отправляется в плагин с JavaScript в `exec` функция передается в модуль класса `execute` метод. Большинство `execute` реализаций выглядеть следующим образом:

        @Override общественного boolean выполнение (строка действия, JSONArray args, CallbackContext callbackContext) бросает JSONException {если («beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                Возвращает значение true;
            } Возвращает значение false;  / / Возвращения ложные результаты в сообщение об ошибке «MethodNotFound».
        }
    

JavaScript `exec` функции `action` параметр соответствует параметру метода частного класса направить с необязательными параметрами.

Когда перехват исключений и возвращение ошибки, важно для ясности, что ошибки возвращены имена исключений JavaScript матч Java как можно больше.

## Работа с потоками

Плагин JavaScript делает *не* выполняются в основном потоке `WebView` интерфейс, вместо этого, он работает на `WebCore` поток, как это делает `execute` метод. Если вам нужно взаимодействовать с интерфейсом пользователя, следует использовать следующие изменения:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

Использовать следующее, если вам не нужно запускать в главном интерфейсе в нить, но не хотите блокировать `WebCore` нить либо:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## Эхо Android плагин пример

Для сопоставления интерфейса JavaScript *эхо* функция, описанная в плагины приложения, используйте `plugin.xml` для вставки `feature` спецификации локальной платформы `config.xml` файл:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

Затем добавить следующий `src/org/apache/cordova/plugin/Echo.java` файл:

        package org.apache.cordova.plugin;
    
        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;
    
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;
    
        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {
    
            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }
    
            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }
    

Необходимого импорта в верхней части файла расширяет класс из `CordovaPlugin` , чья `execute()` метод переопределяет для получения сообщений от `exec()` . `execute()`Метод сначала проверяет значение `action` , для которого в этом случае есть только один действительный `echo` значение. Любой другой Возвращает действие `false` и приводит к `INVALID_ACTION` ошибка, которая переводится как ошибка обратного вызова на стороне JavaScript.

Далее, этот метод извлекает эхо строку, используя `args` объекта `getString` метод, первый параметр передается методу. После того, как значение передается в частный `echo` метод, это параметр проверяется, чтобы убедиться, что это не `null` или является пустой строкой, в этом случае `callbackContext.error()` вызывает ошибка обратного вызова JavaScript. Если проходит различные проверки, `callbackContext.success()` передает оригинал `message` строки обратно в JavaScript успех обратного вызова как параметр.

## Android интеграции

Android функции `Intent` системы, что позволяет процессам взаимодействовать друг с другом. Плагины имеют доступ к `CordovaInterface` объект, который можно получить доступ к Android `Activity` для запуска приложения. Это `Context` необходимые для запуска нового Android `Intent` . `CordovaInterface`Позволяет плагины для запуска `Activity` на результат и установить плагин обратного вызова для когда `Intent` возвращается к приложению.

По состоянию на Cordova 2.0, плагины могут больше не прямой доступ к `Context` и наследие `ctx` член является устаревшим. Все `ctx` методы существуют на `Context` , так как `getContext()` и `getActivity()` может возвращать требуемый объект.

## Отладка Android плагины

Eclipse позволяет отлаживать плагины как исходный код Java, включенный в проект. Только последняя версия Android Developer Tools позволяет вам прикрепить исходный код к *банку* зависимостей, так что эта функция пока не поддерживается полностью.