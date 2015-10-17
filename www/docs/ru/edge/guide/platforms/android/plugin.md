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

title: Плагины для Android
---

# Плагины для Android

Этот раздел содержит сведения о том, как реализовать плагин в коде на платформе Android. Прежде чем читать этот раздел, изучите раздел "Расширения приложения" для обзора структуры плагина и его общий интерфейс JavaScript. Этот раздел продолжает демонстрировать пример *echo* плагина, который соообщается из WebView Cordova с кодом платформы и в обратную строну. Еще один пример см. также комментарии в файле [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android плагины основаны на проекте Cordova-Android, который состоит из Android WebView с хуками, прилагаемыми к нему. Плагины представляются как сопоставления классов в файле `config.xml`. Модуль состоит из по крайней мере из одного Java-класса, который расширяет класс `CordovaPlugin`, и переопределяющий один из его методов - `execute`. Как лучшая практика, плагин также должен обрабатывать `[pause](../../../cordova/events/events.pause.html)` и `[resume](../../../cordova/events/events.resume.html)` события, наряду с любой передачи сообщений между плагинами. Плагины с длительные запросы, фоновой активностью такие как воспроизведение мультимедиа, слушатели или внутреннее состояние следует также реализовать метод `onReset()`. Он выполняется, когда `WebView` переходит на новую страницу или обновляется, что приводит к перезагрузке JavaScript.

## Сопоставление классов плагина

Интерфейс JavaScript плагин использует метод `cordova.exec` следующим образом:

        Exec (< successFunction >, < failFunction >, < служба >, < действия > [< args >]);
    

Это маршалирует запрос от WebView к коду Android, вызывая метод `action` класса `service`, с дополнительными аргументами, передаваемые в массиве `args`.

Распространяете ли вы плагин как Java-файл или файл *jar*, плагин должен быть указан в вашем файле `res/xml/config.xml` Cordova-Android приложения. См. "Расширения приложения" для получения дополнительной информации о том, как использовать файл `plugin.xml` для вставки следующего элемента `feature`:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

Имя службы должен соответствовать той службе, которая используется в JavaScript вызове `exec`. Значение является идентификатором класса Java включая полное пространство имен. В противном случае плагин может компилировать, но по-прежнему будет недоступным для Cordova.

## Инициализация плагин его жизненный цикл

Один экземпляр объекта плагин создается для каждого `WebView` . Плагины не создаются до тех пор, пока они первый раз не ссылается из JavaScript вызова, за исключением если `<param>` с атрибутом `name` тега `onload` имеющим значение `"true"` в `config.xml` . Например:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Следует использовать метод плагина `initialize` для логики инициализации плагина.

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Написание Java плагин Android

Вызов из JavaScript выполняет запрос к стороне платформы, и соответствующий Java плагин привязан корректно в файле `config.xml`, но как выглядит окончательный Java-класс плагина для Android? Все, что отправляется в плагин с JavaScript функцией `exec` передается в метод класса `execute`. Большинство реализаций `execute` выглядят следующим образом:

        @Override общественного boolean выполнение (строка действия, JSONArray args, CallbackContext callbackContext) бросает JSONException {если («beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                Возвращает значение true;
            } Возвращает значение false;  / / Возвращения ложные результаты в сообщение об ошибке «MethodNotFound».
        }
    

Параметр `action` функции JavaScript `exec` соответствует закрытому методу класса куда диспетчиризуются необязательные параметры.

При перехвате исключений и возвращении ошибки, важно для ясности, чтобы ошибки возвращены в JavaScript соотвествовали именам исключений Java как можно больше.

## Работа с потоками

JavaScript плагине *не* выполняются в основном потоке интерфейса `WebView`, вместо этого, он работает в потоке `WebCore`, как это делает метод `execute`. Если вам нужно взаимодействовать с интерфейсом пользователя, следует использовать следующие изменения:

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
    

Используйте следующее, если вам не нужно запускать в главном потоке интерфейсе, но не хотите также блокировать поток `WebCore`:

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
    

## Пример плагина Echo Android

Для сопоставления интерфейса JavaScript функция *echo*, описанная в разделе "Плагины приложения", используйте `plugin.xml` для вставки спецификации `feature` в файл `config.xml` платформы:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

Затем добавить следующий файл `src/org/apache/cordova/plugin/Echo.java`:

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
    

Необходимые импорты в верхней части файла наследуют класс от `CordovaPlugin`, чей метод `execute()` переопределяется для получения сообщений от `exec()` . Метод `execute()` сначала проверяет значение `action` , для которого в этом случае есть только одно действительное значение - `echo`. Любое другое значение параметра action возвращает `false` и приводит к ошибке `INVALID_ACTION`, которая передается интерфейсу обратного вызова об ошибке на стороне JavaScript.

Далее, этот метод извлекает эхо-строку, используя метод `getString` объекта `args`, определяя первый параметр передаваемый методу. После того, как значение передается в закрытый метод `echo`, это параметр проверяется, чтобы убедиться, что это не `null` и не является пустой строкой, в этом случае `callbackContext.error()` вызывает ошибку на стороне JavaScript. Если различные проверки проходят успешно, `callbackContext.success()` передает исходное значение строки `message` обратно в JavaScript в качестве параметре функции успешного вызова.

## Интеграция с Android

Android предоставляет систему `Intent`, которая позволяет процессам взаимодействовать друг с другом. Плагины имеют доступ к объекту `CordovaInterface`, который можно получить доступ к Android `Activity` которая запустила приложение. Это `Context` необходимые для запуска нового `Intent` Android. `CordovaInterface` позволяет плагинам запускать `Activity` для получения результата и установить функцию обратного вызова которая выполнится когда `Intent` вернутся приложению.

По состоянию на Cordova 2.0, плагины больше не имеют прямого доступа к `Context` и член класса `ctx` член является устаревшим. Все `ctx` методы существуют в `Context` , так что оба `getContext()` и `getActivity()` могут возвращать требуемый объект.

## Отладка Android плагинов

Eclipse позволяет отлаживать плагины как исходный код Java, включенный в проект. Только последняя версия Android Developer Tools позволяет вам прикрепить исходный код к *JAR* зависимостям, так что эта функция пока не поддерживается полностью.