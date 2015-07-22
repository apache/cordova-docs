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

title: Android плагины
---

# Android плагины

Написание плагин требует понимания архитектуры Cordova-андроида. Кордова-Android состоит из Android WebView с крючками, прилагается к нему. Эти плагины представлены как класс сопоставления в `config.xml` файл.

Модуль состоит из по крайней мере один Java-класса, который расширяет `CordovaPlugin` класс. Плагин должен переопределить один из `execute` методы из `CordovaPlugin` . Как лучшая практика, плагин должен обрабатывать `pause` и `resume` события и любое сообщение, проходя между плагины. Следует осуществить плагинов с долго выполняющихся запросов, фоновой активности, таких как воспроизведение мультимедиа, слушателей или внутреннее состояние `onReset()` метод также. Он выполняется, когда `WebView` переходит на новую страницу или обновления, которая перезагружает JavaScript.

## Сопоставление классов плагина

Часть JavaScript плагин всегда использует `cordova.exec` метод следующим образом:

    Exec (<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Это маршалирует запрос от WebView Android родной стороне, более или менее кипящей вплоть до вызова `action` метод `service` класса с аргументами, переданными в `args` массив.

Ли вы распространяете Ваш плагин, как Java-файл или как банку, плагин должен быть добавлен `config.xml` файлов в приложении Cordova-Android `res/xml/` каталог.

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

Имя службы должно соответствовать используемому в JavaScript `exec` вызов и значение является Java классы полное имя, включая пространство имен. В противном случае плагин может компилировать, но по-прежнему быть недоступен, Кордова.

## Написание Android Java плагин

JavaScript запускает запрос плагин на родной стороне. Android Java плагин правильно сопоставлен через `config.xml` файл. Так как последний Android плагин Java класс выглядит?

То, что направляется плагин через JavaScript `exec` функция возвращает переданный в класс плагин `execute` метод. Большинство `execute` реализаций выглядеть следующим образом:

    @Override общественного boolean execute (строка действий, JSONArray args, CallbackContext callbackContext) бросает JSONException {если («beep".equals(action)) {this.beep(args.getLong(0));
            callbackContext.success();
            Возвращает значение true;
        } вернуться ложным;  / / Возвращения ложные результаты в сообщение об ошибке «MethodNotFound».
    }
    

Мы сравниваем значение `action` параметр и отправки запроса off (частных) метод в классе, при желании передавая некоторые параметры к методу.

Когда перехват исключений и возвращение ошибки, важно для ясности, что ошибки передаются имена исключений JavaScript матч Java как можно больше.

### Работа с потоками

Делает JavaScript в WebView *не* выполняться в потоке пользовательского интерфейса. Она работает на потоке WebCore. `execute`Метод также выполняется в потоке WebCore.

Если вам нужно взаимодействовать с UI, следует использовать следующее:

    @Override общественного boolean execute (строка действий, JSONArray args, окончательный CallbackContext callbackContext) бросает JSONException {если («beep".equals(action)) {окончательный длительность = args.getLong(0);
            cordova.getActivity () — .runOnUiThread (новый Runnable() {общественного void run() {...
                    callbackContext.success(); / / Поточно ориентированной.
                }
            });
            Возвращает значение true;
        } вернуться ложным;
    }
    

Если вам не нужно запускать в потоке пользовательского интерфейса, но не хотите, чтобы заблокировать поток WebCore:

    @Override общественного boolean execute (строка действий, JSONArray args, окончательный CallbackContext callbackContext) бросает JSONException {если («beep".equals(action)) {окончательный длительность = args.getLong(0);
            cordova.getThreadPool () — .execute (новый Runnable() {общественного void run() {...
                    callbackContext.success(); / / Поточно ориентированной.
                }
            });
            Возвращает значение true;
        } вернуться ложным;
    }
    

### Эхо Android плагин пример

Добавить следующий наш `config.xml` файл:

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

Затем добавьте следующий файл для `src/org/apache/cordova/plugin/Echo.java` внутри нашей Cordova-Android приложения:

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
    

Давайте взглянем на код. Необходимые `imports` находятся на вершине. Наш класс простирается от `CordovaPlugin` . Мы переопределяем метод execute() для того, чтобы получать сообщения от exec(). Наш метод сначала сравнивает против `action` : этот плагин поддерживает только одно действие, `echo` действий. Других действий возвращает `false` , что приводит к ошибке типа `INVALID_ACTION` , который приводит к ошибке обратного вызова на стороне JavaScript. Далее, мы захватить эхо строку, используя `getString` метод на наших `args` , говорят, мы хотим получить 0-й параметра в массиве параметров. Мы делаем немного проверка параметров: Убедитесь, что это не `null` и убедитесь, что он не является строкой нулевой длины. Если это так, мы называем `callbackContext.error()` (которая в настоящее время, вы должны знать вызывает ошибка обратного вызова). Если все эти проверки проходят, то мы называем `callbackContext.success()` и переходят в `message` строка, мы получили как параметр. Наконец, это переводит в успех обратного вызова на стороне JavaScript. Он также передает `message` параметр в качестве параметра в функцию обратного вызова JavaScript успех.

## Отладка плагины

Eclipse может использоваться для отладки Android проекта, и плагины можно отлаживать, если в проект включен исходный код Java. Известно, что только последнюю версию Android Developer Tools позволяют исходного кода привязанность к JAR-зависимости, поэтому это поддерживается не полностью, на данный момент.

## Наиболее распространенные ошибки

*   Плагины имеют доступ к `CordovaInterface` объект. Этот объект имеет доступ к Android `Activity` , на котором выполняется приложение. Это `Context` необходимые для запуска нового Android `Intent` . `CordovaInterface`Позволяет плагины для запуска `Activity` на результат и установить плагин обратного вызова для когда `Intent` возвращается к приложению. Это важно, поскольку `Intent` s система является, как Android обеспечивает взаимодействие между процессами.

*   Плагины не имеют прямого доступа к `Context` как они имеют в прошлом. Наследие `ctx` член является устаревшим и будет удален через шесть месяцев после 2.0 выпущена. Все `ctx` методы существуют на `Context` , так как `getContext()` и `getActivity()` способны возвращения требуется надлежащий объект.

## Использовать источник

Один из лучших способов, чтобы подготовить себя, чтобы написать свой собственный плагин является посмотреть [на существующие плагины][1].

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

Вы должны также прочитать через комментарии в [CordovaPlugin.java][2].

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java