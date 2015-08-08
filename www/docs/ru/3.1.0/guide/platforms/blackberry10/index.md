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

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

На Mac и Linux:

*   Редактировать `~/.bash_profile` файл, добавив строку, например, в зависимости от того, где была установлена родного SDK:

    экспорт $ PATH = ${путь}: / приложения/bbndk/host\_10\_1\_0\_132/Дарвина/x 86/usr/bin /

    или для 10,2 родного SDK:

    экспорт $ PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Выполните следующие действия, чтобы применить изменения в текущем сеансе:

    $ Источник ~/.bash_profile

## Для подписи

Если вы хотите проверить на устройстве или распространять приложения через BlackBerry World, ваша система должна быть установка для подписи кода.

Для получения ключа подписи, перейдите на сайт BlackBerry и убедитесь в том сохранить пароль, указанный вами. Затем запустите `blackberry-signer` Утилита, которая входит в SDK родной BlackBerry.

Подробная инструкция можно найти здесь:

*   [Зарегистрироваться для вашего кода ключа подписи.][2]

*   [Настройка системы для подписи кода.][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Создание проекта

Использование `cordova` утилита для настройки нового проекта, как описано в интерфейс командной строки. Например в каталоге исходного кода:

    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build


## Развертывание в эмулятор

Если вы хотите запустить эмулятор устройства, загрузите и установите 10 имитатор ежевики.

*   [Скачать][1]
*   [Приступая к работе][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Перед тестированием приложения на эмуляторе или устройстве, необходимо добавить *целевой* проект. Каждый с уникальным именем и связанные с IP-адресом. Вам нужно получить IP-адрес из эмулятора, прежде чем использовать его для просмотра приложений.

Запустить образ эмулятора, затем выберите **настройки** на главном экране:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Перейдите к **безопасности и конфиденциальности → режим развития** раздел, включите опцию и получить IP-адрес:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Дополнительный набор утилит командной строки включаются при установке платформы BlackBerry 10 для вашего проекта. Следующая команда, в этом случае вызывается из каталога верхнего уровня проекта, связывает целевой объект с именем *эму* с IP-адресом отображается выше.

*   На Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator

*   На Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator

Затем запустите `emulate` команду для просмотра приложений:

    $ cordova emulate blackberry10


## Развернуть устройстве

Чтобы развернуть на устройстве, убедитесь, что он подключен к компьютеру. Включите режим разработки и получить IP-адрес как desribed эмулятор выше в разделе. Вам также нужно получить ПИН-код от **настройки** приложения под **о → оборудование**:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Запустите утилиту командной строки целевой, чтобы связать имя с IP адрес, пароль и PIN-код.

*   На Windows:

    $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

*   На Mac/Linux:

    $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

где:

*   `--password`относится к пароль, чтобы разблокировать устройство.

*   `--pin`относится к устройству PIN, полученные из **параметров** приложения.

Затем запустите `run` команду для просмотра приложений:

    $ cordova run blackberry10


Если маркер отладки еще не установлен для устройства, сообщение об ошибке предложит использовать платформу, запустить сценарий с паролем, который вы указали при регистрации для ключей подписи.

*   На Windows:

    $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret

*   На Mac/Linux:

    $ platforms/blackberry10/cordova/run --device --keystorepass mysecret

## Отладка с WebInspector

При отладке на устройстве или эмуляторе, вы можете запустить WebInspector удаленно для просмотра внутреннего состояния приложения. Запрос отображает URL-адрес, который позволяет вам подключаться к приложения с помощью стандартного веб-браузера. Для получения дополнительной информации смотрите в разделе [Отладка использование WebInspector][8].

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Создание версии выпуска

По умолчанию, работает `cordova build` команда создает файл пакета неподписанные *.bar* подходит для тестирования на устройстве или симулятор.

Вам необходимо запустить другой `build` команду для создания окончательной версии подходит для распространения через BlackBerry World. Он не полагается на `cordova` CLI инструмент и вместо этого использует следующий синтаксис:

*   На Windows:

    $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret

*   На Mac/Linux:

    $ platforms/blackberry10/cordova/build --release --keystorepass mysecret

`--keystorepass`Параметр указывает пароль, заданные при настройке компьютера для подписи приложения.
