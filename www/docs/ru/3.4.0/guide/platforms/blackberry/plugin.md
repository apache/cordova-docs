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

В этом руководстве показано, как разработать эхо плагин на ежевике. Руководство по разработке плагин обеспечивает широкий обзор, с которой вы уже должны быть знакомы, и это руководство забирает где он листья. Кроме того Скачайте [Cordova BlackBerry репозитория][1].

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

`Cordova-BlackBerry`Проект позволяет развернуть к приборам ежевики как факел, полужирный и пьес. Playbook использует другой код базы чем других портативных устройств BlackBerry, для которых необходимо дублировать ваши усилия в области развития. В этом руководстве основное внимание на портативные устройства, а не таблетки. (В будущем, это руководство должны охватывать обе платформы).

Эхо плагин по существу возвращает все сообщения пользователя предоставляет `window.echo` функции:

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## Изменение plugins.xml

Вашего проекта `www/plugins.xml` Каталог содержит все необходимые ссылки на проекте Cordova плагины. Добавить дополнительные ссылки так что когда `cordova.exec` это называется, Кордова знает как сопоставить `Echo` аргумент `cordova.exec` для `Echo` класс, который мы хотим написать изначально:

    <feature name="Echo">
        <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
    </feature>
    

## Добавление Echo.java

Если вы заметили структуры атрибута value, вы увидите определенный путь, что приводит к эхо плагин. В корневом каталоге Cordova BlackBerry WebWorks репо, найдите каталог, называемый `framework` . Этот каталог содержит весь исходный код, который изначально работает на ежевике. Перейдите к `framework/ext/src/org/apache/cordova` . На данный момент вы увидите все плагин directorys, внутри которого содержится исходный код. Так что добавьте каталог эхо для `framework/ext/src/org/apache/cordova/echo` и создайте файл с именем `Echo.java` в`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## Написание Echo.java

Основная идея написания плагина является создание класса, который расширяет плагин класс и метод, называемый `execute` вернуться `PluginResult` класс. Любой звонок, сделанный в `cordova.exec` проходит в действие для выполнения в пределах класса, а также аргументы. В этом случае «эхо» являются действия, мы хотим выполнять в пределах класса «Эхо» и [силы] аргументы, которые мы проходим в.

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
    

Так что если мы посмотрим на приведенный выше код, мы видим, что в методе execute, мы сначала ищет то, что действия идут в. Эхо плагин имеет только одно действие, `echo` , поэтому мы будем только проверять для этого. Если наш плагин больше действий, это просто вопрос добавления более условной тесты для этих действий.

Затем мы будем захватить сообщения, поступающие из аргументов, которая поставляется параметр args. Мы можем взять первый аргумент, просто делать`String theMsg = args.getString(0);`.

Мы сделаем некоторые проверки ошибок и если сообщение выглядит нормально, мы будет создан экземпляр нового PluginResult со статусом ОК: `PluginResult.Status.OK` и вернуть сообщение: `theMsg` . После этого мы вернуть результат который быть передан обратно в JavaScript, чтобы быть уволены в успех обратного вызова. Если что-то не удается, мы можем вернуть различные состояния исключения, как `PluginResult.Status.ERROR` , `PluginResult.Status.JSON_EXCEPTION` , или `PluginResult.Status.INVALID_ACTION` . При передаче обратно, эти типы результатов огонь сбой обратного вызова в JavaScript.

## Обновление .jar в www каталоге вашего проекта

Добавил `Echo.java` необходимо обновить в проекте. Для создания `.jar` файла, перейдите к BlackBerry WebWorks репо корневой каталог и запустить `ant` команду:

    муравей обновление - Dproject.path="~/path_to_my_project»
    

Это создает новый `.jar` файл в `build/ext` каталог. Копия `build/ext/cordova.jar` файл в ваш `project/www/ext` каталог.

Если все пойдет хорошо, что позволяет использовать плагин эхо в BlackBerry.