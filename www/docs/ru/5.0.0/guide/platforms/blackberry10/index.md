---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# Руководство для платформы BlackBerry 10

В этом руководстве показано, как настроить среду SDK для развертывания приложений Cordova на устройствах BlackBerry 10. Для предыдущих версий BlackBerry вы должны использовать другую версию SDK и другой набор средств командной строки, описанные в руководстве платформы BlackBerry. Для BlackBerry 10 вам необходимо установить SDK независимо от того, хотите ли вы использовать кросс платформенное CLI Cordova для разработки или более узкий набор платформо-ориентированных средств командной строки. Для сравнения двух вариантов разработки см. Обзор. Подробную информацию о каждом способе смотрите в разделе "Руководство по инструментам командной строки BlackBerry 10".

## Требования

Среда разработки доступна на Windows, Mac и Linux.

Разработчикам следует использовать утилиту `cordova` в сочетании с BlackBerry WebWorks SDK или BlackBerry Native SDK. Смотрите раздел "Интерфейс командной строки" для получения информации как установить `cordova`, добавлять проекты, построить и развернуть их для каждой платформы.

Симулятор BlackBerry 10:

*   Процессор: Intel dual core 2.0 ГГц/AMD Athlon 4200 + или выше
*   Место на диске: 10 ГБ
*   Оперативной памяти: 4 ГБ
*   Виртуализация: одно из следующих действий:
    *   **Технология виртуализации Intel** (VT, VT-x, vmx) → [Intel VT-x список поддерживаемых процессоров][1]
    *   **AMD виртуализации** (AMD-V, SVM) (С мая 2006 года все процессоры AMD включают AMD-V за исключением Sempron).

 [1]: http://ark.intel.com/products/virtualizationtechnology

Дополнительные сведения о требованиях: [Требования к симулятору BB10][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## Установите BlackBerry WebWorks SDK

Скачать и установить BlackBerry WebWorks SDK с [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

Программа установки добавит инструменты командной строки к вашем пути. В зависимости от вашей ОС может потребоваться открыть новое окно терминала или повторно войти в систему.

## Установите BlackBerry Native SDK

Если вам нужно скомпилировать в машинный код, например, при разработке собственного плагина, будет необходимо установить BlackBerry Native SDK.

Чтобы получить BlackBerry Native SDK, скачать и установить IDE для BlackBerry с [developer.blackberry.com][4], а затем используя IDE, установить BlackBerry Native SDK. После установки вам нужно добавить свои средства командной строки к системному пути.

 [4]: http://developer.blackberry.com/native/download/

В Windows:

*   Перейти к **мой компьютер → Свойства → Дополнительно → Переменные среды**.

*   Добавьте каталог установки Native SDK к пути, например:

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


На Mac и Linux:

*   Отредактируйте файл `~/.bash_profile`, добавив строку, наподобие нижеуказанной, изменив ее в зависимости от того, где был установлен Native SDK:

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    или для Native SDK 10.2:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   Выполните следующие действия, чтобы применить изменения в текущем сеансе:

        $ источника ~/.bash_profile


Если у вас есть любые проблемы со средой, используя Native SDK выполните из командной строки, соответствующий для вашей платформы файл, расположенный в пути установки:

*   На Windows → оболочку MS-DOS:

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   На Windows → оболочка bash git:

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   На Linux → установлен в качестве пользователя root:

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   На Linux → установлен как не root пользователя:

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   На Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## Настройка для подписывания

Если вы хотите проверить на устройстве или распространять приложения через BlackBerry World, ваша система должна быть сконфигурирована для подписи кода.

Для получения ключа подписи, перейдите к \[Форма покупки ключей BlackBerry\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Выберите первый флажок: «для BlackBerry10 приложений, разработанных с использованием BlackBerry NDK» и затем войти на сайт или создайте новый BBID.

Введите пароль и нажмите кнопку «Get Token», чтобы загрузить bbidtoken.csk. Сохраните этот файл в расположение по умолчанию для вашей ОС, которая будет отображаться на странице загрузки.

Последним шагом является создания сертификата подписи:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Создание проекта

Используйте утилиту `cordova` для настройки нового проекта, как описано в разделе "Интерфейс командной строки Cordova". Например выполните в каталоге исходного кода:

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build


## Развертывание на эмулятор

Если вы хотите запустить эмулятор устройства, загрузите и установите симулятор BlackBerry 10.

*   [Скачать][4]
*   [Приступая к работе][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Перед тестированием приложения на эмуляторе или устройстве, необходимо включить режим разработки.

Запустить образ эмулятора, затем выберите **Настройки** на главном экране:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Перейдите к разделу **Безопасности и конфиденциальность → Режим разработки** и включить опцию:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Дополнительный набор утилит командной строки включаются при установке платформы BlackBerry 10 для вашего проекта. Следующая команда, в данном случае вызваная из каталога проекта верхнего уровня, связывает целевой объект с именем *emu* с IP-адресом указанным выше.

*   В Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   На Mac/Linux:

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


Затем выполните команду `emulate` для просмотра приложения:

        $ cordova emulate blackberry10


## Развертывание на устройство

Чтобы развернуть на устройстве, убедитесь, что оно подключено к компьютеру. Включить режим разработки и получить IP-адрес как описано в разделе по эмулятору выше. Вам также нужно будет получить ПИН-код из приложения **Настройки** в разделе **Об устройстве → Оборудование**:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Запустите утилиту командной строки чтобы связать имя с IP адресом, паролем устройства и ПИН-кодом.

*   В Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   На Mac/Linux:

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


где:

*   `--password` указывает на пароль, необходимый чтобы разблокировать устройство.

*   `--pin` относится к PIN устройства, полученный из приложения **Настройки**.

Затем выполните команду `run` для просмотра приложений:

        $ cordova run blackberry10


Если маркер отладки еще не настроен для устройства, сообщение об ошибке предложит вам использовать скрипт платформы run, c паролем который вы указали при регистрации для ключей подписи.

*   В Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   На Mac/Linux:

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## Отладка с WebInspector

При отладке на устройстве или эмуляторе, вы можете запустить WebInspector удаленно для просмотра внутреннего состояния приложения. Запрос отображает URL-адрес, который позволяет вам подключиться к приложению через стандартный веб-браузер. Для получения дополнительной информации см. [Отладка с помощью WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Создание релиз версии

По умолчанию команда `cordova build` создает файл неподписанный файл пакета *.bar* который подходит для тестирования на устройстве или симуляторе.

Используйте `--release` для создания релиз версии подходящей для распространения через BlackBerry World.

    $ cordova build --release --keystorepass <signing password>


Параметр `--keystorepass` определяет пароль, заданные при настройке вашего компьютера для подписи приложений.

## Развертывание в других местах

В инструкциях выше предполагается что устройство подключено через USB или симулятор выполняется на локальном компьютере. Также можно развернуть приложение в других местах.

Дополнительный набор утилит командной строки включаются при установке платформы BlackBerry 10 для вашего проекта. Следующая команда, в данном случае вызваная из каталога проекта верхнего уровня, связывает целевой объект с именем *emu* с IP-адресом.

*   В Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   На Mac/Linux:

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


После того, как цель определена, вы можете передавать ее команде run с помощью `--target`:

    $ cordova run blackberry10 --target=emu
