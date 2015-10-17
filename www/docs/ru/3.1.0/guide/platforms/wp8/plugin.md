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

title: Windows Phone плагины
---

# Windows Phone плагины

Написание плагин для Кордова на Windows Phone требует понимания архитектуры Cordova. Кордова-WP7 состоит из WebBrowser, который размещает код JavaScript приложения и управляет родной вызовы API. Есть BaseCommand ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) класс в C#, который можно расширить, и он приходит с большинством «сантехника» построен для вас уже.

1.  Выберите ваш проект и щелкните правой кнопкой мыши выбрать **Добавить → новый элемент...**
    
    *   Желательно добавить его в папку «Плагины», но это до вас

2.  Выберите «Класс» и назовите его`Echo.cs`
    
    *   Имя этого класса должны *точно* совпадать, что вы называете в`cordova.exec(win, fail, "Echo", ...)`

3.  Включить осуществление базовых классов
    
        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;
        

4.  Расширить свой класс от BaseCommand
    
        public class Echo : BaseCommand
        {
            // ...
        }
        

5.  Добавьте метод, который можно вызывать из JavaScript
    
        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // all JS callable plugin methods MUST have this signature!
                // public, returning void, 1 argument that is a string
            }
        }
        

## Пространства имен

Пространство имен по умолчанию для неквалифицированных команд является:

    namespace Cordova.Extension.Commands
    {
        // ...
    }
    

Если вы хотите использовать свои собственные пространства имен, вам нужно позвонить полное `cordova.exec` . Например, если вы хотите определить класс C# следующим образом:

    namespace com.mydomain.cordovaExtensions
    {
        public class Echo : BaseCommand
        {
            // ...
        }
    }
    

Затем, в JavaScript необходимо вызвать `exec` , как это:

    cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);
    

## Интерпретации аргументов в C

Данные, полученные методом ваш плагин — это строковое значение, но в действительности, глядя на наш код JavaScript, мы видим, что наше намерение передать массив строк. Оглядываясь назад на наш вызов JavaScript `cordova.exec` , мы видим, мы прошли `[str]` :

    cordova.exec(win, fail, "Echo", "echo", ["input string"]);
    

Если мы проверяем параметры строки, переданной в нашей `Echo.echo` метод, мы видим, что значение является на самом деле:

    "[\"input string\"]"
    

Все JavaScript `exec` аргументы являются JSON кодируются перед передачей в C#.

Если мы хотим, чтобы рассматривать это как строку, которую мы ожидали, нам нужно расшифровать его. Мы можем использовать простой десериализации JSON.

    string optVal = JsonHelper.Deserialize<string[]>(options)[0];
    // optVal now has the value of "input string"
    

## Передача результатов из C# в JavaScript

Базовый класс BaseCommand предоставляет методы для передачи данных в обработчиках обратного вызова JavaScript. Чтобы просто сигнал, что команда была выполнена успешно, когда не требуется никаких дополнительных результат информация, вы можете просто позвонить:

    DispatchCommandResult(); // calls back with an empty plugin result, considered a success callback
    

Чтобы передать данные обратно, необходимо вызвать другую версию `DispatchCommandResult` :

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Everything went as planned, this is a result that is passed to the success handler."));
    

Для передачи данных структурированных объектов JavaScript, он должен быть закодирован как JSON-строка:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Если вам необходимо сигнализировать, что произошла ошибка, вы можете позвонить `DispatchCommandResult` с `PluginResult` объект:

    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signaled an error"));
    

## Обработка ошибок сериализации в ваш плагин метода C#

При интерпретации ваши аргументы, это хорошая идея, чтобы использовать блок try/catch в случае, если у нас есть плохие ввода. Это шаблон используется во всем код Cordova C#:

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
        // ... Продолжайте делать нашу работу}
    

## Плагин XML

Это windows телефон конкретные примеры использования файла plugin.xml, обратитесь к спецификации плагин для получения более подробной информации

### `<source-file>`

В windows phone `<source-file>` элемент в настоящее время используется для определения всех плагинов ресурсов (т.е. .cs, .xaml,. xaml.cs, .dll, изображения активов и т.д.).

### `<config-file>`

`<config-file>`Элемент определяет, какие элементы получают положить в файл config. Например добавить плагин в config.xml платформ вы могли бы сделать что-то вроде этого:

    <config-file target="config.xml" parent="/*">
        <feature name="PluginName">
            <param name="wp-package" value="PluginName"/>
        </feature>
    </config-file>
    

Если мы хотим добавить возможность контактов WMAppManifest.xml, он будет выглядеть следующим образом:

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## Расширенный плагин функциональность

Смотрите другие методы, которые можно переопределить в:

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

Например вы можете подключить в «пауза» и «резюме» события приложения.

### Отладка плагины

Для отладки C# стороне, вы можете использовать отладчик Visual Studio, просто установите точку останова в любом из методов, предоставляемых вашего класса.

JavaScript является немного более трудным для отладки на Windows Phone. Вам нужно использовать `console.log` для вывода состояния вашего плагина, или информировать себя от ошибок.

## Наиболее распространенные ошибки

*   Будьте осторожны при принятии решения о аргументов, передаваемый в машинный код в вашем JavaScript реализации. Большинство платформ устройств ожидать передан cordova.exec чтобы быть массивом args, но если у вас есть различные типы объектов в этом массиве, она становится трудно или невозможно выполнить десериализацию.
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);
        
    
    *   Это означает, что код C# получает трудно расшифровать строковое значение, таких как:
        
            "[\"this is a string\", 54, { literal:'trouble' }]"
            
    
    *   Рассмотрим преобразование всех параметров в строки перед вызовом exec:
        
            cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]) ;
            
            string[] optValues = JsonHelper.Deserialize<string[]>(options);
            

*   Это обычно хорошая идея, чтобы сделать параметр проверки в коде JavaScript, перед вызовом метода `exec` . Это позволяет повторно использовать код JavaScript среди различных встроенных реализаций ваш плагин.