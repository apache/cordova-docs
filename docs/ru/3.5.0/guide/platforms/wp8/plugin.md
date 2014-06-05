--Лицензия: лицензируются для Apache Software Foundation (ASF) одного или нескольких корреспондентов лицензионных соглашений. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone плагины

Этот раздел содержит сведения о том, как реализовать собственный плагин код на платформе Windows Phone. Прежде чем читать это, увидеть приложения плагины обзор структуры плагина и его общий интерфейс JavaScript. Этот раздел продолжает демонстрировать образец *эхо* плагин, который общается с webview Кордова на родной платформе и обратно.

Писать плагин для Кордова на Windows Phone требуется базовое понимание архитектуры в Кордове. Кордова-WP7 состоит из `WebBrowser` , содержит код JavaScript приложения и управляет родной вызовы API. Вы можете расширить C# `BaseCommand` класса ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ), которая поставляется с большинство функциональных возможностей, вам необходимо:

1.  Выберите ваш проект и щелкните правой кнопкой мыши выбрать **Добавить → новый элемент...** Если вы хотите, вы можете добавить его в `Plugins` папку.

2.  Выберите **класс** и назовите его `Echo.cs` . Этот класс имя должно *точно* соответствовать что вы называете указать в качестве службы в `cordova.exec()` вызов на стороне JavaScript.

3.  Включить осуществление базовых классов:
    
        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;
        

4.  Расширить свой класс от `BaseCommand` :
    
        public class Echo : BaseCommand
        {
            // ...
        }
        

5.  Добавить `echo` метод, который можно вызывать из JavaScript:
    
        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // all JS callable plugin methods MUST have this signature!
                // public, returning void, 1 argument that is a string
            }
        }
        

Смотреть [BaseCommand.cs][1] класс для методов, доступных для плагина для переопределения. Например плагин может захватить события «пауза» и «продолжить».

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## Пространства имен

Пространство имен по умолчанию для неквалифицированных команды является:

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

Если вы хотите задать собственных имен, вам нужно позвонить в полное `cordova.exec` . Например, если вы хотите определить класс C# следующим образом:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

JavaScript необходимо будет вызвать `exec` , как это:

        cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);
    

## Интерпретации аргументов в C

В примере, рассмотренном в плагины приложения данные, которые получает ваш плагин является строкой, но что, если вы хотите передать массив строк? Предположим, что JavaScript `cordova.exec` вызова задается следующим образом:

        cordova.exec(win, fail, "Echo", "echo", ["input string"]);
    

Значение `options` строка, передаваемая в `Echo.echo` метод является JSON:

        "[\"input string\"]"
    

Все JavaScript `exec` аргументы JSON кодируются перед передачей в C# и поэтому нужно декодировать:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Результаты тестирования из C# в JavaScript

`BaseCommand`Класс предоставляет методы для передачи данных обратного вызова обработчиков JavaScript. Если вы хотите просто сигнал успеха без сопровождающих результата, вы можете просто позвонить:

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

Чтобы передать данные обратно, вам нужно позвонить `DispatchCommandResult` по-разному:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Everything went as planned, this is a result that is passed to the success handler."));
    

Используйте зашифрованную строку JSON для передачи данных структурированных объектов обратно в JavaScript:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Чтобы сигнал об ошибке, вызовите `DispatchCommandResult` с `PluginResult` объект, состояние которого является `ERROR` :

        DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signaled an error"));
    

## Обработка ошибок сериализации

При интерпретации аргументов, `try` / `catch` блоки помогают отсеивать плохие ввода. Эта модель появляется на протяжении код Cordova C#:

        string optVal = null;
    
        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }
    
        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }
    

## Плагин XML

Ниже показано, как использовать `plugin.xml` файла для указания плагин исходных файлов на платформе Windows Phone. См приложение плагины обзор, и плагин спецификации для подробной информации об имеющихся вариантах.

*   `<source-file>`Элемент определяет все ресурсы плагин, например *.cs*, *.xaml*, *. xaml.cs*и *DLL-* файлов и графических ресурсов.

*   `<config-file>`Элемент определяет элементы для вставки в файл конфигурации. Этот пример добавляет плагин на платформу `config.xml` файл:
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    Этот пример добавляет возможность контактов `WMAppManifest.xml` файл:
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## Отладка плагины

Использование отладчика Visual Studio для отладки работы плагина C# компонент. Точку останова можно установить в любой из методов, предоставляемых в вашем классе.

JavaScript является более сложным для отладки на Windows Phone. Вам нужно использовать `console.log` для вывода плагин государство, или сообщить себя от ошибок.

## Наиболее распространенные ошибки

*   Будьте осторожны, чтобы не передавать аргументы из JavaScript к родной стороне, которые трудно десериализовать формат JSON. Большинство платформ устройств ожидать аргумент, передаваемый `cordova.exec()` быть массива, например следующие:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);
        
    
    Это может привести к чрезмерно сложным строковое значение для C# для декодирования:
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    Вместо этого, рассмотреть вопрос о преобразовании *всех* параметров в строки перед вызовом `exec()` и декодирования каждой отдельно:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   Как правило, лучше проверить параметры в JavaScript перед вызовом `exec()` . Это позволяет повторно использовать код и вытащить ненужные функции из плагина различных встроенных реализаций.