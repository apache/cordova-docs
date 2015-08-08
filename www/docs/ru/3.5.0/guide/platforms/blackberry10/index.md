---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations


   under the License.
---

# Руководство по платформы blackBerry 10

В этом руководстве показано, как настроить среду разработки для создания и развертывания приложений Cordova для устройств BlackBerry 10. Для предыдущих версий BlackBerry вам нужно использовать другой набор средств командной строки, описанные в руководстве платформы ежевики.

## Требования к

Среда разработки доступна на Windows, Mac и Linux.

Разработчики должны использовать `cordova` утилита в сочетании с родного SDK ежевики. Интерфейс командной строки информацию смотрите в разделе как установить `cordova` , добавить проекты, а затем построить и развернуть для каждой платформы.

## Установите SDK ежевики родной

Ежевики родной пакет SDK доступен от [developer.blackberry.com][1]. После установки вам нужно добавить его средства командной строки в системном пути.

 [1]: http://developer.blackberry.com/native/download/

На Windows:

*   Перейти к **переменным среды → мой компьютер → свойства → расширенный**.

*   Добавьте каталог установки собственного SDK путь, например:

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

На Mac и Linux:

*   Редактировать `~/.bash_profile` файл, добавив строку, например, в зависимости от того, где была установлена родного SDK:

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Выполните следующие действия, чтобы применить изменения в текущем сеансе:

    $ Источник ~/.bash_profile

## Для подписи

Если вы хотите проверить на устройстве или распространять приложения через BlackBerry World, ваша система должна быть установка для подписи кода.

Для получения ключа подписи, перейдите к \[BlackBerry клавиши форме заказа\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Выберите первый флажок: «для BlackBerry10 приложений, разработанных с использованием BlackBerry NDK» и затем войти или создать BBID.

Введите пароль и нажмите кнопку «Получить маркер», чтобы загрузить bbidtoken.csk. Сохраните этот файл в расположение по умолчанию для вашей ОС, которая будет отображаться на странице загрузки.

Последним шагом является для создания сертификата подписи:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Создание проекта

Использование `cordova` утилита для настройки нового проекта, как описано в интерфейс командной строки. Например в каталоге исходного кода:

    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build


## Развертывание в эмулятор

Если вы хотите запустить эмулятор устройства, загрузите и установите симулятор BlackBerry 10.

*   [Скачать][1]
*   [Приступая к работе][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Перед тестированием приложения на эмуляторе или устройстве, необходимо включить режим развития.

Запустить образ эмулятора, затем выберите **настройки** на главном экране:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Перейдите к **безопасность и конфиденциальность → режим развития** раздел и включить опцию:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Затем, запустите `emulate` команду для просмотра приложений:

    $ cordova emulate blackberry10 --devicepass <password>


## Развернуть устройстве

Чтобы развернуть на устройстве, убедитесь, что он подключен к компьютеру и включен режим развития.

Затем, запустите `run` команду для просмотра приложений:

    $ cordova run blackberry10 --devicepass <password>


Если маркер отладки еще не создали для устройства, сообщение об ошибке попросит ввести пароль, заданные при настройке компьютер для подписи приложений.

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## Отладка с WebInspector

При отладке на устройстве или эмуляторе, вы можете запустить WebInspector удаленно для просмотра внутреннего состояния приложения. Запрос отображает URL-адрес, который позволяет подключаться к приложения с помощью стандартного веб-браузера. Для получения дополнительной информации см. [Отладка с помощью WebInspector][5].

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Создание версии выпуска

По умолчанию, работает `cordova build` команда создает файл пакета без знака *.bar* подходит для тестирования на устройстве или симулятор.

Используйте `--release` для создания релиз версии для распространения через BlackBerry World.

    $ cordova build --release --keystorepass <signing password>


`--keystorepass`Параметр определяет пароль, заданные при настройке компьютера для подписи приложений.

## Развертывание в других местах

В инструкциях выше предполагается устройство подключено через USB или симулятор выполняется на локальном компьютере. Это также можно развернуть в другие места.

Дополнительный набор утилит командной строки включаются при установке платформы BlackBerry 10 для вашего проекта. Следующая команда, в данном случае вызван из каталога верхнего уровня проекта, связывает целевой объект с именем *эму* с IP-адресом.

*   В Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   На Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

После того, как цель определена, вы можете предоставить его с помощью команды run `--target` :

    $ cordova run blackberry10 --target=emu
