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

# BlackBerry плагины

Этот раздел содержит сведения о том, как реализовать код родной плагин на платформе BlackBerry. Прежде чем читать это, увидеть приложения плагины обзор структуры плагина и его общий интерфейс JavaScript. Этот раздел продолжает демонстрировать образец *эхо* плагин, который общается с webview Кордова на родной платформе и обратно.

Кроме того Скачайте [репозиторий Cordova BlackBerry][1]. `Cordova-BlackBerry`Проект позволяет развертывать для приспособлений ежевики как факел, полужирный и Playbook. Playbook использует другой код базы, чем других портативных устройств BlackBerry, для которых необходимо дублировать ваши усилия в области развития. Это руководство фокусируется на портативные устройства, а не таблетки.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Изменение plugins.xml

`Echo`Плагин возвращает все сообщения пользователь отправляет с `window.echo` функции на стороне JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Проект `www/plugins.xml` файл содержит все необходимые ссылки на плагины Cordova проекта. Добавить дополнительные ссылки, так что когда `cordova.exec` — называется, Кордова знает как сопоставить `Echo` аргумент в родной `Echo` класс:

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Файл Echo.java

`feature`Спецификации `value` атрибут ссылается на идентификатор обратный домена стиля. Это соответствует путь в репо Cordova BlackBerry WebWorks `framework/ext/src` каталог. Добавить `framework/ext/src/org/apache/cordova/echo` каталог и добавить `Echo.java` файл.

`Echo.java`Необходимо определить класс, который расширяет `Plugin` класс. Необходимо также осуществить `execute` метод, который возвращает `PluginResult` класс. Любой звонок, сделанный в `cordova.exec` проходит в действий в пределах класса для выполнения, а также аргументы. В этом случае `Echo` класса `echo` метод – это действие, и `[str]` является дополнительным аргументом для передачи в метод.

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

В коде выше `execute` метод сначала приводит в действие. В этом случае есть только один действительный `echo` действия, поэтому он просто проверяет это значение.

Входящее сообщение, переданными в качестве `[str]` из JavaScript доступен для `Echo` как класс `args` массив. В этом случае есть только один аргумент, доступной с помощью индекса массива:

        String theMsg = args.getString(0);
    

После различных проверка ошибок на значение сообщения, этот метод создает новый `PluginResult` с `OK` состояние и возвращает сообщение. В свою очередь, это значение передается обратно в качестве аргумента в метод обратного вызова JavaScript успех. В случае ошибки различные коды статуса отправляются обратно в JavaScript ошибка обратного вызова.

## Обновление .jar в www проекта каталог

Добавил `Echo.java` необходимо обновить в проекте. Для создания `.jar` файла, перейдите к директории корня ежевики WebWorks репо и запустить `ant` команда:

        ant update -Dproject.path="~/path_to_my_project"
    

Это создает новый `.jar` файл в `build/ext` каталог. Копия `build/ext/cordova.jar` файл `project/www/ext` каталог.

Если все пойдет хорошо, что позволяет использовать `Echo` плагин в BlackBerry.