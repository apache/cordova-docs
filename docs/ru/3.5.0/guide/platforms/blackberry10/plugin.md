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

# BlackBerry 10 плагинов

Этот раздел содержит сведения о том, как реализовать код родной плагин на платформе BlackBerry 10. Прежде чем читать это, увидеть приложения плагины обзор структуры плагина и его общий интерфейс JavaScript. Этот раздел продолжает демонстрировать образец *эхо* плагин, который общается с webview Кордова на родной платформе и обратно.

Эхо плагин в основном возвращает любую строку `window.echo` функция отправляет из JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Кордова плагин для BlackBerry 10 содержит JavaScript и машинного кода, которые общаются друг с другом через рамки, предусмотренные JNEXT. Каждый плагин должен также включать `plugin.xml` файл.

## Создание собственного класса

Для создания родной части вашего плагина, откройте BlackBerry 10 NDK IDE и выберите **файл → новый → ежевика проекта → стандартного расширения → BlackBerry 10**. Введите нужное имя и расположение проекта, затем нажмите кнопку **Готово**.

Проект, созданный в среде IDE содержатся примеры кода для модуль памяти. Вы можете заменять или изменять эти файлы для реализации собственной функциональности:

*   `*name*_js.hpp`: Заголовок C++ для кода JNEXT.

*   `*name*_js.cpp`: Код C++ для JNEXT.

Родной интерфейс для модуля JNEXT может рассматриваться в файле заголовка плагина, расположенный в общественной директории проекта. К вашим услугам также константы и сервисных функций, доступных в машинном коде. Плагин должен быть производным от `JSExt` , который определен в `plugin.h` . То есть необходимо реализовать следующий класс:

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

Должна включать расширение `plugin.h` заголовочный файл. В `Echo` примере, вы используете `JSExt` следующим в `echo_js.hpp` файл:

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
    

`m_id`Содержит атрибут `JNEXT` id для объекта, который передается в класс в качестве аргумента в конструктор. Он необходим для родной стороны на стороне JavaScript триггера события. `CanDelete`Метод определяет, могут ли быть удалены собственный объект. `InvokeMethod`Функция вызывается в результате запроса от JavaScript для вызова метода из данного конкретного объекта. Единственный аргумент этой функции является строка, передаваемая из JavaScript, который анализирует этот метод для определения, какой из методов собственного объекта должен выполняться. Эти методы реализуются в `echo_js.cpp` . Вот `InvokeMethod` функция `Echo` Пример:

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
    

Родной плагин должен также реализовывать следующие функции обратного вызова:

*   `extern char* onGetObjList( void );`

*   `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

`onGetObjList`Функция возвращает запятыми список классов, поддерживаемых JNEXT. JNEXT эта функция используется для определения набора классов, которые можно создать экземпляр JNEXT. `Echo`Плагин реализует следующие действия в `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

`onCreateObject`Функция принимает два параметра. Во-первых, имя запрашиваемого класса должен быть создан из JavaScript стороне, с допустимыми именами как те вернулись в `onGetObjList` . Вторым параметром является идентификатор класса уникальный объект. Этот метод возвращает указатель на объект создан плагин. `Echo`Плагин реализует следующие действия в `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Создание плагина JavaScript

Плагин должен содержать следующие файлы JavaScript:

*   `client.js`: Это считается стороне клиента и содержит API для Cordova-приложение. API в `client.js` звонки делает вызовы `index.js` . API в `client.js` также соединяет функции обратного вызова для событий, вызываемых обратные вызовы.

*   `index.js`: Загружает Кордова `index.js` и делает его доступным через cordova.exec мост. `client.js`Файла делает вызовы API в `index.js` файл, который в свою очередь делает вызов к JNEXT общаться с родной стороной.

Стороне клиента и сервера ( `client.js` и `index.js` ) взаимодействует через `Cordova.exec` функции. `client.js`Нужно вызывать `exec` функционируют и обеспечивают необходимые аргументы. `Echo`Плагин реализует следующие действия в `client.js` файл:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

`index.js`Компонент использует JNEXT для взаимодействия с родной стороной. Присоединение конструктор функция с именем `Echo` для JNEXT позволяет выполнять следующие основные операции с помощью `init` функции:

*   Укажите необходимый модуль, экспортируемые на родной стороне. Имя необходимого модуля должно соответствовать имени файла Разделяемая библиотека ( `.so` файл):
    
        JNEXT.require("libecho")
        

*   Создайте объект с помощью приобретенных модуль и сохраните идентификатор, возвращенный вызовом:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    Когда приложение вызывает `echo` работать в `client.js` , что, в свою очередь, вызовы `echo` работать в `index.js` , где `PluginResult` объект отправляет данные в ответ обратно в `client.js` . Так как `args` был преобразован аргумент, переданный функции `JSON.stringfy()` и закодированные как `URIcomponent` , необходимо вызвать следующее:
    
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

Вы можете разместить плагин артефактов, включая `plugin.xml` файл, исходные файлы JavaScript и C++ и `.so` двоичные файлы в любой структуре каталогов, до тех пор, как вы правильно укажите расположение файлов в `plugin.xml` файл. Вот типичная структура:

***project_directory*** (раздел настроек plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (раздел настроек index.js, **родной** раздел настроек *.cpp, *.hpp)
    *   **устройство** (раздел настроек*двоичный файл* * .so)
    *   **симулятор** (раздел настроек*двоичный файл* * .so)

В списке отображаются иерархические отношения между папки верхнего уровня. Скобки показывает содержимое данного каталога. Все имена каталогов отображаются полужирным шрифтом. Имена файлов предшествует `>` знак.

## Файл *plugin.xml*

`plugin.xml`Файл содержит пространства имен расширения и другие метаданные. Настройка `Echo` плагин следующим образом:

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