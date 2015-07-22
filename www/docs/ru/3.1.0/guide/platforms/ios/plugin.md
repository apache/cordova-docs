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

title: iOS плагины
---

# iOS плагины

Плагин-это Objective-C класс, который расширяет `CDVPlugin` класс.

Каждый класс плагин должен быть зарегистрирован как `<feature>` тег в `config.xml` файл. Именно через этот механизм что JavaScript `exec` метода `service` параметр сопоставляется Objective-C-класса.

## Сопоставление классов плагина

Часть JavaScript плагин всегда использует `cordova.exec` метод следующим образом:

    Exec (<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Это маршалирует запрос от `UIWebView` родной стороне iOS, более или менее кипящей вплоть до вызова `action` метод `service` класса с аргументами, переданными в `args` массив.

Укажите плагин как `<feature>` тег в Кордова iOS приложения проекта `config.xml` файл.

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

Функция `name` должен соответствовать атрибут в JavaScript используется `exec` вызова `service` параметр и `value` атрибута должно соответствовать имени плагина Objective-C класса. `<param name>`всегда должно быть я `"ios-package"` . Если вы не будете следовать этой установки, плагин может компилировать, но не будет добраться на Cordova.

## Плагин инициализации и жизни

Для жизни каждого из них создается один экземпляр объекта плагин `UIWebView` . Плагины не создаются до тех пор, пока они сначала ссылается вызов из JavaScript, если не `<param>` с `onload` `name` атрибут имеет значение `"true"` в `config.xml` . Например:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

Существует *нет* места для инициализатора для плагинов. Вместо этого следует использовать плагины `pluginInitialize` метод для их запуска логики.

Плагины с долго выполняющихся запросов, фоновая активность (например, воспроизведение компакт-диска), слушателей или внутреннее состояние следует реализовать `onReset` метод и остановить или очистки этих мероприятий. Этот метод запускается при `UIWebView` переходит на новую страницу или обновления, которая перезагружает JavaScript.

## Написание iOS Cordova плагин

У нас есть JavaScript выстрелить плагин запрос на родной стороне. У нас есть плагин iOS Objective-C, должным образом сопоставлены через `config.xml` файл. Так как окончательный iOS плагин Objective-C класс выглядит?

Что получает разосланы плагин через JavaScript `exec` функция передается в соответствующий класс плагин `action` метод. Метод плагин имеет эта подпись:

    - (void)myMethod:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* myarg = [command.arguments objectAtIndex:0];
    
        if (myarg != nil) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
        }
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
    

1.  [CDVInvokedUrlCommand.h][1]

2.  [CDVPluginResult.h][2]

3.  [CDVCommandDelegate.h][3]

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h
 [3]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h

## iOS CDVPluginResult типы сообщений

С помощью CDVPluginResult вы можете вернуть различные типы результатов вернуться к вашей обратных вызовов JavaScript, с помощью методов класса, которые выглядят как:

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Вы можете создать `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , и `Multipart` типов. Или не придают любые аргументы (просто отправить статус). Или возвращает ошибку. Вы даже можете не посылать каких-либо плагин результат на всех, в этом случае функция обратного вызова не огонь.

### Примечания

*   `messageAsArrayBuffer`ожидает `NSData*` и преобразует в `ArrayBuffer` для вашего обратного вызова JavaScript (и `ArrayBuffers` направил плагин из JavaScript преобразуются в`NSData*`).
*   `messageAsMultipart` ожидает `NSArray *` содержащие любой другой Поддерживаемые типы и посылает весь массив как `аргументы` для обратного вызова JavaScript. 
    *   Галтель: это не просто синтаксический сахар (хотя это сладкое). Таким образом, все аргументы сериализуются и десериализуются в случае необходимости. Например, это безопасно вернуться `NSData*` как составной, но не как `Array` /`Dictionary`.

## IOS эхо плагин плагин

Мы хотели бы добавить следующее в проект `config.xml` файл:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

Тогда мы хотели бы добавить следующие файлы ( `Echo.h` и `Echo.m` ) в директорию плагинов внутри нашего каталога приложений Cordova-iOS:

    /********* Echo.h Cordova Plugin Header *******/
    
    #import <Cordova/CDV.h>
    
    @interface Echo : CDVPlugin
    
    - (void)echo:(CDVInvokedUrlCommand*)command;
    
    @end
    
    /********* Echo.m Cordova Plugin Implementation *******/
    
    #import "Echo.h"
    #import <Cordova/CDV.h>
    
    @implementation Echo
    
    - (void)echo:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* echo = [command.arguments objectAtIndex:0];
    
        if (echo != nil && [echo length] > 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        }
    
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
    
    @end
    

Давайте взглянем на код. В верхней части у нас есть все необходимые Cordova импорта. Наш класс простирается от `CDVPlugin` (очень важно).

Этот плагин поддерживает только одно действие, `echo` действий. Во-первых, мы захватить эхо строку, используя `objectAtIndex` метод на наших `args` , говоря это, мы хотим получить 0-й параметр в массиве аргументов. Мы делаем немного проверка параметров: Убедитесь, что это не `nil` и убедитесь, что он не является строкой нулевой длины.

Если это так, мы возвращаем `PluginResult` с `ERROR` статус. Если все эти проверки проходят, то мы вернуть `PluginResult` с `OK` статус и проход в `echo` строка, мы получили в первую очередь, как параметр.

Наконец, мы отправить результат на `self.commandDelegate` , который выполняет `exec` метода успех или неудача обратные вызовы на стороне JavaScript. Если успех обратного вызова вызывается, он проходит в `echo` параметр.

## Работа с потоками

Плагин методы выполняются в том же потоке пользовательского интерфейса. Если ваш плагин требует большой обработки или требует блокирующий вызов, следует использовать фоновый поток. Например:

    - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
    {
        // Check command.arguments here.
        [self.commandDelegate runInBackground:^{
            NSString* payload = nil;
            // Some blocking logic...
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
            // The sendPluginResult method is thread-safe.
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }
    

## Расширенный плагин функциональность

Смотрите другие методы, которые можно переопределить в:

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

Например, вы можете подключить в `pause` , `resume` , прекратить app и `handleOpenURL` события.

## Отладка плагины

Для отладки на стороне Objective-C, будет использовать встроенный отладчик Xcode в. Для JavaScript на iOS 5.0 можно использовать [Weinre, проект Apache Cordova][6] или [iWebInspector, - сторонней утилиты][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

Для iOS 6 будет использовать Safari 6.0 просто приложить к ваше приложение работает на iOS 6 симулятор.

## Наиболее распространенные ошибки

*   Не забудьте добавить ваш плагин сопоставление файла config.xml. Если вы забыли, ошибка регистрируется в консоли Xcode.

*   Не забудьте добавить любые узлы, при подключении к в белый список, как описано в руководстве Whitelist домена. Если вы забыли, ошибка регистрируется в консоли Xcode.