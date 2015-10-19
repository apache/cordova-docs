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

title: BlackBerry 10 плагинов
---

# BlackBerry 10 плагинов

Это продолжение плагин развития руководство для Кордова. После просмотра этого содержимого, теперь давайте смотрите на вещи, мы должны иметь эхо плагин для платформы BlackBerry 10. Напомним, что эхо плагин в основном возвращает все строки пользователя предоставляет `window.echo` функции:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Родной BlackBerry 10 плагин для Кордова содержит код JavaScript и может также содержать машинный код. Эхо плагин примере показано, как ссылаться на родной функциональность из JavaScript. Родной и код JavaScript общаться друг с другом в рамках, предоставленных JNEXT. Каждый плагин должен также включать `plugin.xml` файл.

## Создание собственного частью вашего плагина

Для создания собственного часть вашего плагина, открыть BlackBerry 10 NDK IDE и выберите файл настроек новый раздел настроек BlackBerry проекта настроек стандартного расширения настроек BlackBerry WebWorks. Введите имя требуемого проекта / местоположение и нажмите кнопку Готово.

Проект, созданный в среде IDE содержит примеры кода для памяти плагин. Вы можете заменить или изменить эти файлы, чтобы включить свои собственные функции.

*   `*name*_js.hpp`: Заголовок C++ для кода JNEXT.

*   `*name*_js.cpp`: Код C++ для JNEXT.

Родной интерфейс для модуля JNEXT может рассматриваться в файле заголовка плагина, расположенный в общественной директории вашего проекта. Он также содержит константы и сервисных функций, которые могут использоваться в машинном коде. Ваш плагин должен быть производным от JSExt, который определен в plugin.h. То есть необходимо реализовать следующий класс:

    class JSExt
    {
    public:
        virtual ~JSExt() {};
        virtual string InvokeMethod( const string& strCommand ) = 0;
        virtual bool CanDelete( void ) = 0;
    private:
        std::string m_id;
    };
    

Таким образом расширение должно включать файл заголовка plugin.h. В этом примере Эхо используется JSExt следующим в файле echo_js.hpp:

    #include "../public/plugin.h"
    #include <string>
    
    #ifndef ECHO_JS_H_
    #define ECHO_JS_H_
    
    class Echo : public JSExt
    {
    public:
        explicit Echo(const std::string& id);
        virtual ~Echo();
        virtual std::string InvokeMethod(const std::string& command);
        virtual bool CanDelete();
    private:
        std::string m_id;
    };
    
    #endif // ECHO_JS_H_
    

`m_id`— Это атрибут, содержащий идентификатор JNEXT для этого объекта. Идентификатор передается классу как аргумент в конструктор. Необходимо активировать события на стороне JavaScript из родной. Метод CanDelete используется JNEXT для определения, является ли ваш родной объект может быть удален. InvokeMethod функция вызывается в результате запроса от JavaScript для вызова метода из данного конкретного объекта. Единственный аргумент этой функции является строка, передаваемая от JavaScript, что этот метод должен анализировать для того, чтобы определить, какой метод собственного объекта должен быть выполнен. Теперь мы реализовать эти функции в echo_js.cpp. Для примера, эхо мы реализовать функции InvokeMethod следующим образом:

    string Echo::InvokeMethod(const string& command) {
    
        //parse command and args from string
        int index = command.find_first_of(" ");
        string strCommand = command.substr(0, index);
        string strValue = command.substr(index + 1, command.length());
    
        // Determine which function should be executed
        if (strCommand == "echo") {
            return strValue;
        } else {
            return "Unsupported Method";
        }
    }
    

Ваш родной плагин также необходимо реализовать следующие функции обратного вызова:

*   `extern char* onGetObjList( void );`

*   `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

`onGetObjList`Функция возвращает разделенный запятыми список классов, поддерживаемых JNEXT. JNEXT эта функция используется для определения набора классов, которые можно создать экземпляр JNEXT. В нашем эхо плагин, у нас есть следующие в `echo_js.cpp` :

    char* onGetObjList() {
        static char name[] = "Echo";
        return name;
    }
    

`onCreateObject`Функция принимает два параметра. Первый параметр — имя данного класса должен быть создан из JavaScript стороне. Допустимые имена являются те, которые возвращаются в `onGetObjList` . Вторым параметром является идентификатор уникального объекта для класса. Этот метод возвращает указатель на объект создан плагин. В нашем эхо плагин, у нас есть следующие в `echo_js.cpp` :

    JSExt* onCreateObject(const string& className, const string& id) {
        if (className == "Echo") {
            return new Echo(id);
        }
        return NULL;
    }
    

## Создание JavaScript часть вашего плагина

JavaScript часть ваш плагин должен содержать следующие файлы:

*   `client.js`: Это считается стороне клиента и содержит интерфейс API, который можно вызывать Cordova-приложение. API в `client.js` звонки делает вызовы `index.js` . API в `client.js` также соединяет функции обратного вызова для событий, вызываемых обратные вызовы.

*   `index.js`: Загружает Кордова `index.js` и делает его доступным через cordova.exec мост. `client.js`Файла делает вызовы API в `index.js` файл, который в свою очередь делает вызов для JNEXT для взаимодействия с родной стороне.

Стороне клиента и сервера ( `client.js` и `index.js` ) взаимодействует через `Cordova.exec` функции. Так, в `client.js` вы вызываете `exec` функционировать и предоставлять необходимые аргументы. В эхо плагин, мы имеем следующую в `client.js` файл:

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

Теперь `index.js` взаимодействует с родной стороны, с помощью JNEXT. Так вы прикрепить функции конструктора с именем Echo в JNEXT. Внутри конструктора выполните следующие основные операции, используя функцию init:

*   Укажите необходимый модуль, экспортируемые на родной стороне. Имя необходимого модуля должно соответствовать имени файла общей библиотеки (.so файла).

`JNEXT.require("libecho")`

*   Создайте объект с помощью приобретенного модуль и сохраните идентификатор, возвращенный вызовом. Self.m_id = JNEXT.createObject ("libecho.Эхо»); Когда приложение вызывает функцию эхо в `client.js` , что вызов в свою очередь вызывает функцию эхо в `index.js` , где PluginResult объект отправляет ответ (данных) обратно в `client.js` . Поскольку args аргумент, переданный функции был преобразован в JSON.stringfy() и кодируются как URIcomponent, необходимо вызвать следующие:

`данных = JSON.parse(decodeURIComponent(args.data));`

Теперь вы можете отправлять данные обратно. Давайте положить все это вместе:

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## Архитектура плагин

Вы можете разместить артефакты плагин, который включает в себя `plugin.xml` файл, исходные файлы (JavaScript, C++) и двоичные файлы ( `.so` ) в любой структуре каталогов, как долго, как вы правильно укажите расположение файлов в `plugin.xml` файл. Типичная структура выглядит следующим образом:

***your\_project\_directory*** (раздел настроек plugin.xml)

*   **www** (раздел настроек client.js)
*   **src** 
    *   **blackberry10** (раздел настроек index.js, **родной** настроек *.cpp, *.hpp)
    *   **устройство** (раздел настроек*двоичный файл* * .so)
    *   **симулятор** (раздел настроек*двоичный файл* * .so)

(В списке отображаются иерархические связи между каталогов верхнего уровня. Скобки показывает содержимое данного каталога. Все имена каталогов отображаются полужирным шрифтом. Имена файлов предшествует `>` знак.)

## Содержимое `plugin.xml` файла

`plugin.xml`[Файл](../../../cordova/file/fileobj/fileobj.html) содержит пространства имен расширения и другие метаданные. Определить пространство имен и укажите другие метаданные для Эхо плагина следующим:

    <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
        id="org.apache.cordova.blackberry.echo"
        version="1.0.0">
        <js-module src="www/client.js">
            <merges target="navigator" />
        </js-module>
        <platform name="blackberry10">
            <source-file src="src/blackberry10/index.js" />
            <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
            <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
            <config-file target="www/config.xml" parent="/widget">
                <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
            </config-file>
        </platform>
    </plugin>