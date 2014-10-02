* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Руководство для платформы Firefox OS

В этом руководстве показано, как настроить вашу среду разработки для развертывания приложений Cordova на устройствах Firefox OS, а также тестировать и опубликовывать эти приложения.

## Требования и поддержка

Firefox OS приложения являются просто веб-приложениями, с добавлением файла manifest.webapp, который определяет метаданные о приложении и позволяет ему быть установленым на устройстве Firefox OS. Любая платформа которую поддерживает Cordova может быть использована.Чтобы узнать больше о создании веб-приложений, обратитесь в [App Center][1] на [MDN][2].

 [1]: https://developer.mozilla.org/en-US/Apps
 [2]: https://developer.mozilla.org/en-US/

## Установка и настройка среды

Сначала установить [Node.js][3], а затем установить пакет Cordova следующим образом:

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

Далее создайте тестовое приложения Cordova, а затем перейдите в созданную директорию:

    $ cordova create test-app
    $ cd test-app
    

Добавьте Firefox OS как поддерживаемую платформа в приложение следующим образом:

    $ cordova platform add firefoxos
    

Это создает приложение Firefox OS в каталоге platforms/firefoxos/www, который в настоящее время выглядит так же как и каталог www, за исключением того, что он содержит файл манифеста Firefox (manifest.webapp) внутри директории www.

## Разработка вашего приложения

На данный момент вы готовы к работе — изменить код внутри test-app/www на все, что вы хотите. Вы можете добавить [поддерживаемые плагины]() в приложение, с помощью «cordova plugin add», например:

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

Необходимо также добавить пользовательский файле manifest.webapp в ваш каталог test-app/www, который должен включать по крайней мере следующее:

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

Дополнительные сведения о манифестах приложения Firefox можно получить в разделе [Манифест приложения][4] на MDN.

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

Когда написан код приложения, развертывайте ваши изменений в Firefox OS приложении, которые вы добавили в в проект с помощью

    $ cordova prepare
    

Обратите внимание, что этап построения (то есть cordova build) не требуется при развертывании на платформе Firefox OS, так как Firefox OS приложения основаны на HTML и поэтому не требуют компиляции.

## Тестирование и отладка

Приложение можно протестировать с помощью Firefox OS [App Manager][5].

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

Когда вы подключените App Manager к вашему тестовому устройству/симулятору, выберите параметр «Add Packaged App», то убедитесь, что вы указываете на каталог test-app/platforms/firefoxos/www/ для включения приложения в интерфейсе App Manager.

Здесь можно установить приложение на ваше тестовое устройство/симулятор (с кнопкой «Update»). С помощью кнопки «Debug» можно выполнить отладку приложения и отредактировать его код по живому.

Примечание: Прежде чем публиковать приложение вы должны проверить его с помощью [App validator][6].

 [6]: https://marketplace.firefox.com/developers/validator

## Публикация приложения в Firefox Marketplace

Можно отправить ваше приложение в Firefox Marketplace или опубликовать его самостоятельно. Посетите [Зону Firefox Marketplace][7] на MDN, чтобы узнать больше о том, как сделать это; [Параметры публикации App][8] является лучшим местом для начала.

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options