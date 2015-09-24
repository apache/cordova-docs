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

title: Плагины для BlackBerry 10
---

# Плагины для BlackBerry 10

Этот раздел содержит сведения о том, как реализовать код родной плагин на платформе BlackBerry 10. Прежде чем читать это, прочтите секции "Архитектура плагинов" для обзор структуры плагина и его общего JavaScript интерфейса. Этот раздел продолжает демонстрировать образец плагина *echo*, который взаимодействует с WebView Cordova на стороне платформы и наоборот.

Плагин Echo просто возвращает любую строку, которую функция `window.echo` отправляет из JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Cordova плагин для BlackBerry 10 содержит как JavaScript так и код платформы, которые общаются друг с другом через фреймворк, предоставляемый JNEXT. Каждый плагин должен также включать файл `plugin.xml`.

## Создание класса плагина

Для создания основной части вашего плагина, откройте BlackBerry 10 NDK IDE и выберите **File → New → BlackBerry Project → Native Extension → BlackBerry 10**. Введите нужное имя и расположение проекта, затем нажмите кнопку **Finish**.

Проект, созданный в среде IDE содержит примеры кода для плагина памяти. Вы можете перезаписать или изменить эти файлы для реализации собственного функционала:

*   `*name*_js.hpp`: Заголовок C++ для кода JNEXT.

*   `*name*_js.cpp`: Код C++ для JNEXT.

Родной интерфейс для модуля JNEXT может быть просмотрен в файле заголовка плагина, расположенном в каталоге public проекта. К вашим услугам также константы и сервисных функций, доступных из кода платформы. Плагин должен быть производным от класса `JSExt`, который определен в `plugin.h` . То есть необходимо реализовать следующий класс:

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

Плаин должн включать заголовочный файл `plugin.h`. В примере `Echo`, вы используете `JSExt` как указано в следующем `echo_js.hpp` файле:

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
    

`m_id` атрибут содержит `JNEXT` id для объекта, который передается в класс в качестве аргумента конструктора. Он необходим для стороны платформы чтобы вызывать события на стороне JavaScript. Метод `CanDelete` определяет, может ли быть удален объект определенный на строне платформы. Функция `InvokeMethod` вызывается в результате запроса со стороны JavaScript для вызова метода из данного конкретного объекта. Единственный аргумент этой функции является строка, передаваемая из JavaScript, который анализируется этим методом для определения, какой из методов собственного объекта должен быть выполнен. Эти методы реализуются в `echo_js.cpp` . Вот функция `InvokeMethod` для `Echo`:

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
    

Плагин платформы должен также реализовывать следующие функции обратного вызова:

*   `extern char* onGetObjList( void );`

*   `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

Функция `onGetObjList` возвращает разделенный запятыми список классов, поддерживаемых JNEXT. JNEXT использует эту функцию для определения набора классов, которые могут быть созданы JNEXT. Плагин `Echo` реализует следующе в `echo_js.cpp`:

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    
Функция `onCreateObject` принимает два параметра. Первый, это имя запрашиваемого класса который должен быть создан для стороны JavaScript, с допустимыми именами как те которые были возвращены из `onGetObjList` . Вторым параметром является уникальный идентификатор объекта класса. Этот метод возвращает указатель на созданный объект плагина. Плагин `Echo` реализует следующе в `echo_js.cpp`:

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Создание плагина JavaScript

Плагин должен содержать следующие файлы JavaScript:

*   `client.js`: Это файл считается клиентской стороной и содержит API для Cordova-приложения. API в вызовах `client.js` делает вызовы к `index.js` . API в `client.js` также связывает функции обратного вызова с событиями, которые вызывают эти функции.

*   `index.js`: Cordova загружает `index.js` и делает его доступным через шлюз cordova.exec. Файл `client.js` делает вызовы к API в файле `index.js`, который в свою очередь делает вызов к JNEXT для взаимодействия со стороной платформы.

Стороне клиента и сервера (`client.js` и `index.js`) взаимодействует через функцию `cordova.exec`. Файлу `client.js` нужно вызывать функцию `exec` и предоставить необходимые аргументы. Плагин `Echo` реализует следующее в файле `client.js`:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

Компонент `index.js` использует JNEXT для взаимодействия со стороной платформы. Присоединение функции конструктора с именем `Echo` к JNEXT позволяет выполнять следующие основные операции с помощью функции `init`:

*   Укажите необходимый модуль, экспортируемые со стороны платформы. Имя необходимого модуля должно соответствовать имени файла общей библиотеки (`.so` файл):
    
        JNEXT.require("libecho")
        
*   Создайте объект используя полученный модуль и сохраните идентификатор, который был возвращен:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    Когда приложение вызывает функцию `echo` из `client.js` , которая в свою очередь, вызывает функцию `echo` из `index.js`, откуда объект `PluginResult` отправляет данные как ответ обратно в `client.js` . Так как аргумент `args`, передаваемый в функции был преобразован с помощью `JSON.stringfy()` и закодирован как `URIcomponent`, вам необходимо вызвать следующее:
    
        data = JSON.parse(decodeURIComponent(args.data));
        
Теперь вы можете отправить данные обратно, как показано ниже:

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## Архитектура плагинов

Вы можете разместить артефакты плагина, включая файл `plugin.xml`, исходные файлы JavaScript и C++ и двоичные файлы `.so` в любой структуре каталогов, до тех пор, пока вы правильно указываете расположение файлов в файле `plugin.xml`. Вот типичная структура:

***project_directory*** (раздел настроек plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (>index.js, **native** >*.cpp, *.hpp)
    *   **device** (>*двоичный файл* * .so)
    *   **simulator** (>*двоичный файл* * .so)

В списке отображаются иерархические отношения между каталогами верхнего уровня. Скобки показывает содержимое данного каталога. Все имена каталогов отображаются полужирным шрифтом. Именам файлов предшествует знак `>`.

## Файл *plugin.xml*

Файл `plugin.xml` содержит пространства имен расширения и другие метаданные. Настройте плагин `Echo` следующим образом:

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