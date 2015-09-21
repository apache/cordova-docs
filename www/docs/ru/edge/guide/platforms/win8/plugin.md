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

title: Плагины Windows
---

# Плагины Windows

Этот раздел содержит сведения о том, как реализовать плагин для использования в приложении Магазин Windows. Прежде чем читать это, увидеть приложения плагины обзор структуры плагина и его общий интерфейс JavaScript. Этот раздел продолжает демонстрировать образец *эхо* плагин, который общается с webview Кордова на родной платформе и обратно.

Важно отметить, что Windows поддерживает разработку непосредственно в Javascript, что означает «родной» части в только в особых случаях.

## Создание плагина Windows в JavaScript

Эти инструкции предназначены для создания чистой плагин JavaScript. Понимая это имеет решающее значение для понимания того, как для добавления управляемого/машинного биты.

Кордова Windows плагины являются по существу тонкой оболочкой вокруг существующих WinJS предоставляет функции, но предполагая, что вы хотите определить ваш JS общий интерфейс для нескольких устройств, вы обычно будет иметь 1 JS файл, предоставляющий API.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## Внутри Кордова исп на Windows

Функция cordova.exec определена по-разному на каждой платформе, это потому, что каждая платформа имеет его собственный способ общения между js код приложения и код родной оболочки. Но в случае Windows, нет никаких собственную оболочку, поэтому вызов exec существует для обеспечения согласованности. Вашу работу только плагин js непосредственно в EchoPlugin.echo, можно сделать что-то вроде:

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

Это будет может работать нормально, однако это означает, что вам понадобится echoPlugin.js разные версии для разных платформ, и возможно вы могли бы проблемы несоответствия в вашей реализации. Как правило мы решили имитировать native API внутри cordova.exec на Windows, так что мы могли бы запустить тот же код JS и не требуется переписывать его на платформе и также воспользоваться любой проверки параметров, или другой общий код, предоставляемых разработчиками, которые работали на других платформах.

## Кордова исп прокси

В Windows cordova предоставляет прокси-сервер, который можно использовать для регистрации объекта, который будет обрабатывать все cordova.exec вызовы API.

Например если вы хотели предоставить реализацию для акселерометра API, вы могли бы сделать это:

cordova.commandProxy.add («Акселерометр», {начало: function() {/ / ваш код здесь...} / /... и на остальной части API здесь});

Так что в нашем случае, мы будем считать что код в echoplugin.js обработки кросс-платформенный соответствующих JavaScript и мы можем просто написать прокси для Windows

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

Определение плагин

Если мы хотим, чтобы пользователи нашего плагина, чтобы иметь возможность легко установить наш плагин, нам нужно будет определить ее согласно как PlugMan определяет плагины. Подробнее об этом в [Спец плагин][1]

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Это дает нам рабочую Windows JavaScript плагин, который использует общий файл (echoplugin.js) и использует прокси-сервер для обеспечения Windows только часть осуществления (echopluginProxy.js). Так как мы добавим управляемого/машинного кода к этому? Ну, мы собираемся начать то же самое, только разница будет, что мы делаем внутри в echopluginProxy методы.

# Как WinJS получает доступ управляемого/машинного кода

В Windows, WinJS, авторские приложения способны взаимодействовать с машинным кодом, это между ОП доступен для компонентов Среда выполнения Windows. Детали, многочисленны, и это руководство будет охватывать только основы. Корпорация Майкрософт предоставляет гораздо больше информации [здесь][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

Когда вы создаете ваш компонент Среда выполнения Windows, любой класс, который определяется как «общественного ссылочного класса sealed» считается «активируемого класса» и будет можно вызывать из JavaScript.

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

Теперь, чтобы для нас, чтобы вызывать машинный код, мы используем пространство имен, имя класса и lowerCamelCase метод, который мы называем.

var res = EchoRuntimeComponent.EchoPluginRT.echo("boom"); Переезд это наш файл echopluginProxy.js, мы получаем это:

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

И вот это, у нас есть конец в конец при поддержке C++ js вызываемой плагин для использования в Apache Cordova Windows!

# Некоторые технические примечания:

*   обратный вызов обычно является асинхронной, так вызовом обратного вызова сразу ожидается, вероятно, не вызывающим. На практике если вызов не async, следует по крайней мере использовать javascript таймаут заставить называться асинхронного обратного вызова.
*   Активируемых классов можно сделать все виды awesome, как событие, диспетчеризации, асинхронных обратных вызовов, передавая собственные типы объектов, массивы, коллекции, перегруженные методы и многое другое. Я рекомендую, что вы делаете вашу домашнюю работу.
*   Если вы будете придерживаться общих Windows Phone 8.0 и вызовы Windows SDK API, вы будете способны использовать один и тот же компонент среды выполнения (машинный или управляемый бит) в Windows Phone 8.0 Apache Cordova плагин. ~ Следите за этот пост.

# Определение ваш плагин

Теперь у нас есть плагин рабочих, нам необходимо пересмотреть определение плагин от ранее, так что мы можем опубликовать его. Теперь мы можем добавить компонент выполнения как основы. Обратите внимание, что тип выходных данных WindowsRuntimeComponent может быть .winmd или DLL

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Вот это, теперь у вас есть распространяемый плагин, что вы можете поделиться со всем миром! Одна вещь к примечанию, лишь недавно была добавлена поддержка для добавления рамок в проект Windows Cordova, так что вам будет нужно убедиться, что ваше cordova инструментов текущем. Кордова cli и Кордова plugman поддерживает добавление, удаление собственных резервных плагины.

\> cordova plugin add com.risingj.echoplugin

или

\> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug