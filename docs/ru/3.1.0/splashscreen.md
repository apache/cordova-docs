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
---


# Экран-заставка

> Отображает и скрывает экран-заставку приложения.

## Методы

*   splashscreen.show
*   splashscreen.hide

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   iOS (в`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.

Смотрите информацию о том, как настраивает эти образы иконки и заставки.


# splashscreen.show

Отображает экран-заставку.

    navigator.splashscreen.show();
    

## Описание

Этот метод отображает экран-заставку приложения.

## Поддерживаемые платформы

*   Андроид
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    navigator.splashscreen.show();
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.show();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>


# splashscreen.hide

Закройте экран-заставка.

    navigator.splashscreen.hide();
    

## Описание

Этот метод закрывает экран-заставку приложения.

## Поддерживаемые платформы

*   Андроид
*   Ежевика 10
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    navigator.splashscreen.hide();
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
    

## iOS галтель

`config.xml`Файла `AutoHideSplashScreen` должен быть `false` . Для задержки скрытия заставки на две секунды, добавить таймер например следующее в `deviceready` обработчик событий:

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);
