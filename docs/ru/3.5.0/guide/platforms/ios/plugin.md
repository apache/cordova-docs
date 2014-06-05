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

# iOS плагины

Этот раздел содержит сведения о том, как реализовать код родной плагин на платформе iOS. Прежде чем читать это, увидеть приложения плагины обзор структуры плагина и его общий интерфейс JavaScript. Этот раздел продолжает демонстрировать образец *эхо* плагин, который общается с webview Кордова на родной платформе и обратно.

IOS плагин реализован как Objective-C класс, который расширяет `CDVPlugin` класс. Для JavaScript `exec` метода `service` параметр для сопоставления с Objective-C класс, каждый плагин должен быть зарегистрирован как `<feature>` в каталоге именованного приложения тег `config.xml` файл.

## Сопоставление классов плагина

Часть JavaScript плагин использует `cordova.exec` метод следующим образом:

        Exec (<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Это маршалирует запрос от `UIWebView` в сторону родной iOS эффективно вызова `action` метод `service` класса, с аргументами, переданными в `args` массив.

Укажите плагин как `<feature>` тег в Кордова iOS приложения проекта `config.xml` файл, используя `plugin.xml` файл, чтобы придать этой разметки автоматически, как описано в приложении плагины:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

Функция `name` атрибут должен соответствовать указан как JavaScript `exec` вызова `service` параметр. `value`Атрибут должен соответствовать имени плагина Objective-C класса. `<param>`Элемента `name` всегда должно быть `ios-package` . Если не следовать этим рекомендациям, может скомпилировать плагин, но Cordova до сих пор не может быть возможность доступа к ней.

## Плагин инициализации и жизни

Для жизни каждого из них создается один экземпляр объекта плагин `UIWebView` . Плагины создаются обычно при первом обращении путем вызова из JavaScript. В противном случае они могут быть созданы путем установки `param` с именем `onload` для `true` в `config.xml` файл:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

Существует *нет* места для инициализатора для плагинов. Вместо этого следует использовать плагины `pluginInitialize` метод для их запуска логики.

Плагины с долго выполняющихся запросов, фон деятельности, такие как воспроизведение мультимедиа, слушателей или что поддерживать внутреннее состояние следует осуществлять `onReset` метод для очистки этих мероприятий. Метод работает, когда `UIWebView` переходит на новую страницу или обновления, которая перезагружает JavaScript.

## Написание iOS Cordova плагин

Вызов JavaScript запускает запрос плагин к родной стороне, и соответствующие iOS плагин Objective-C отображается правильно в `config.xml` файл, но как окончательный iOS Objective-C модуль класса взгляд? Все, что отправляется в плагин с JavaScript в `exec` функция передается в соответствующий класс плагин `action` метод. Метод плагин имеет подпись:

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
    

Для более подробной информации, см. `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , и`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult типы сообщений

Вы можете использовать `CDVPluginResult` для возвращения различных результата типа обратно в обратных вызовов JavaScript, с помощью методов класса, следовать этой схеме:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Вы можете создать `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , и `Multipart` типов. Вы можете также оставить вне каких-либо аргументов, чтобы отправить статус, или возвращает ошибку, или даже не решили отправить любой плагин результат, в этом случае срабатывает ни обратного вызова.

Обратите внимание на следующие для сложных возвращаемых значений:

*   `messageAsArrayBuffer`ожидает `NSData*` и преобразует `ArrayBuffer` в обратного вызова JavaScript. Кроме того, любой `ArrayBuffer` отправляет плагин JavaScript преобразуются в`NSData*`.

*   `messageAsMultipart`ожидает `NSArray*` содержащие любые другие поддерживаемые типы и отправляет весь массив как `arguments` для обратного вызова JavaScript. Таким образом, все аргументы сериализуются и десериализуются как необходимости, так что это безопасно вернуться `NSData*` как составной, а не как `Array` /`Dictionary`.

## Эхо iOS плагин пример

Для сопоставления интерфейса JavaScript *эхо* функция, описанная в плагины приложения, используйте `plugin.xml` для вставки `feature` спецификации локальной платформы `config.xml` файл:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

Тогда мы хотели бы добавить следующие `Echo.h` и `Echo.m` файлы в `Plugins` папку в каталоге приложений Cordova-iOS:

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
    

Необходимого импорта в верхней части файла расширяет класс от `CDVPlugin` . В этом случае плагин поддерживает только один `echo` действий. Он получает эхо строку путем вызова `objectAtIndex` метод получить первый параметр `arguments` массив, который соответствует аргументам, принятому JavaScript в `exec()` функции.

Он проверяет параметр, чтобы убедиться, что это не `nil` или является пустой строкой, возвращая `PluginResult` с `ERROR` статус, если это так. Если параметр проходит проверку, он возвращает `PluginResult` с `OK` статус, проходя в оригинале `echo` строка. Наконец, он отправляет результат `self.commandDelegate` , которая выполняет `exec` метода успех или неудача обратные вызовы на стороне JavaScript. Если успех обратного вызова вызывается, он проходит в `echo` параметр.

## iOS интеграции

`CDVPlugin`Класса есть другие методы, которые можно переопределить ваш плагин. Например, вы можете захватить `pause` , `resume` , прервать app и `handleOpenURL` события. См [CDVPlugin.h][1] и [CDVPlugin.m][2] для руководства.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## Работа с потоками

Плагин методы обычно выполняются в том же потоке, что основной интерфейс. Если ваш плагин требует большой обработки или требует блокирующий вызов, вам следует использовать фоновый поток. Например:

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
    

## Отладка iOS плагины

Для отладки на стороне Objective-C, требуется встроенный отладчик Xcode's. Для JavaScript на iOS 5.0 можно использовать [Weinre, проект Apache Cordova][3] , или [iWebInspector, сторонние утилиты][4]. Для iOS 6 вы можете прикрепить Safari 6.0 для вашего приложения, выполняющиеся в iOS 6 симулятор.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## Наиболее распространенные ошибки

*   Не забудьте добавить ваш плагин сопоставление `config.xml` . Если вы забыли, ошибка регистрируется в консоли Xcode.

*   Не забудьте добавить любые узлы, при подключении к в белый список, как описано в руководстве белый список доменов. Если вы забыли, ошибка регистрируется в консоли Xcode.