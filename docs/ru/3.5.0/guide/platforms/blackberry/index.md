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

# Руководство по платформы ежевики

В этом руководстве показано, как настроить среду SDK для приложений для платформы ежевики до версии 10. Если вы хотите цели самой последней версии, смотрите в руководстве платформы BlackBerry 10. Смотрите ниже для более подробной информации конкретной платформы:

*   BlackBerry конфигурации
*   Модернизация BlackBerry
*   Ежевика плагины
*   Средства командной строки ежевики

Средства командной строки относятся к версии до Cordova 3.0. Сведения о текущем интерфейсе см интерфейс командной строки.

## Требования и поддержка

Эта версия BlackBerry не поддерживается `cordova` средство, описанное в интерфейс командной строки, но отдельный набор средств командной строки. Скачайте дистрибутив Cordova от [cordova.apache.org][1].

 [1]: http://cordova.apache.org/#download

Cordova для BlackBerry опирается на [BlackBerry WebWorks framework][2], который доступен для Windows XP (32-разрядная), Windows 7 (32-разрядные и 64-бит) и Mac (OS X 10.6.4+). WebWorks приложения могут *только* быть развернут на следующих платформах ежевики:

 [2]: https://bdsc.webapps.blackberry.com/html5

*   BlackBerry OS 5.0 и выше
*   BlackBerry PlayBook
*   Ежевика 10 (QNX)

WebWorks требует Java Development Kit (JDK). Для Windows используйте 32-разрядной версии [Oracle JDK][3]. Java в устанавливается по умолчанию в Mac OS X, вплоть до версии 10.7, которая требует [отдельной установки][4]. Это также требует Apache Ant, который на Mac является частью установки Java. Windows версия доступна с [ant.apache.org][5].

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## Установите SDK

Скачать и установить соответствующий WebWorks SDK для вашего развития. BlackBerry PlayBook и BlackBerry смартфон WebWorks SDK можно загрузить из следующих источников.

*   \[BlackBerry PlayBook SDK\] (https://developer.blackberry.com/html5/download/#playbook) и [Adobe Air SDK][6]

*   \[Ежевики Smartphones SDK\] (https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## Зарегистрироваться для ключей подписи

Если вы хотите опубликовать приложение на мире App ежевики, или на фактическом устройстве, вам будет нужно зарегистрировать для набора бесплатные ключи подписывания кода. Для этого заполните [BlackBerry клавиш бланке заказа][7]. Как только вы получите ваши ключи подписи, они требуют установки. Смотрите [веб-сайт BlackBerry HTML5/WebWorks][8] для получения информации.

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Установить Кордова

Скачайте и распакуйте последнюю копию [Кордова][1].

## Создание нового проекта

*   Открыть терминал командной строки и перейдите к где вы распаковали Cordova.

*   Существует каталог для каждой платформы, которая поддерживает Cordova. Перейдите к `blackberry` каталог.

*   `blackberry`Каталог содержит несколько подкаталогов. `example`Каталог содержит полный проект Cordova. Копия `example` каталог в другое место на вашем компьютере и перемещаться там.

*   Редактировать `project.properties` файла для указания WebWorks SDK, вы используете. Например ниже приведены соответствующие параметры для BlackBerry PlayBook, смартфон BlackBerry (OS5-7) или BlackBerry 10 (QNX):
    
        playbook.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks SDK for TabletOS 2.1.0.6\\bbwp
        blackberry.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks Packager
        qnx.bbwp.dir=C:\\Program Files (x86)\\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

Они соответствуют параметрам, которые указываются при построении проекта. Первый раз при запуске этих команд, они создают приложения «HelloWorld»:

        cordova/build playbook
        cordova/build blackberry
        cordova/build qnx
    

Вместе с SDK необходимо зарегистрировать ключ подписи кода и отладки маркер. Ключ подписи позволяет распространять приложения через BlackBerry World. Маркер отладки позволяет проверить неподписанные приложения на BlackBerry эмуляторе или устройстве. Вам не нужно создавать самостоятельно и установить маркер отладки; Если ввести пароль хранилища ключей, сценарий построения создает и устанавливает маркер отладки для вас. Чтобы настроить ключ подписи, перейдите на веб-сайт BlackBerry для получения, убедившись в том сохранить пароль, указанный вами. Затем запустите `blackberry-signer` Утилита, которая входит в состав SDK. Ежевика предоставляет более подробную информацию здесь:

*   [Зарегистрироваться для вашего кода, ключ подписи][9]

*   [Настройка компьютера для подписи кода][10]

*   [полное руководство по настройке среды SDK][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## Развертывание в эмулятор

Эмуляторов смартфонов blackBerry доступны только на Windows. BlackBerry PlayBook Эмуляторы требуют VMWare Player (Windows) или VMWare Fusion (Mac OS X). WebWorks SDK предоставляет по умолчанию эмулятор, но дополнительные Эмуляторы доступны [через ежевику][12].

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

Из каталога проекта, типа `./cordova/run <target>` , заменяя `<target>` либо с `qnx` , `playbook` , или `blackberry` . Обратите внимание, что для BlackBerry 10 и пьес, эмулятор виртуальный образ уже должен быть запущен.

Смотрите ниже для получения дополнительной информации:

*   [BlackBerry PlayBook][13]

*   [Смартфон blackBerry][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

Для BlackBerry Playbook, отредактируйте `project.properties` для настройки файл `playbook.sim.ip` и `playbook.sim.password` Свойства. Эмулятор IP-адрес доступен через **Параметры** приложения на начальном экране. Включить **безопасности и конфиденциальности → режим развития** параметр для отображения адреса. Пароль можно также задать в закладке **безопасность и конфиденциальность** .

Смартфон BlackBerry, отредактируйте `project.properties` для настройки файл `blackberry.sim.dir` и `blackberry.sim.bin` Свойства. Вам нужно бежать разделителей пути при задании пути каталогов в Windows, например:`C:\\Program
Files\\BlackBerry\\Simulator`.

После того, как эмулятор установлена и запущена, выполните одно из следующих действий, чтобы установить приложение на главном экране:

        cordova/run playbook
        cordova/run blackberry
    

Если вы пробуждены ли устройство подключено к вашему компьютеру, ответить без.

**Примечание:** На BlackBerry OS 5, приложение установлено в `Downloads` каталог.

## Развернуть устройстве

Для развертывания приложения на устройство, он должен быть подключен, и вы должны быть зарегистрированы для кода ключей подписи, как описано выше. Также, для развертывания приложения на BlackBerry PlayBook, **Параметры → Безопасность → режим развития** должна быть включена опция.

Измените на BlackBerry PlayBook, `project.properties` файл и изменить следующие действия, чтобы отразить IP и пароль устройства как descibed выше, вместе с подписания пароль ключа, вы создали:

Из каталога проекта, типа `./cordova/run <target>` , заменяя `<target>` либо с `qnx` , `playbook` , или`blackberry`.

На смартфон BlackBerry (OS5-7), укажите `blackberry.sigtool.password` свойства как подписи пароль ключа.

Затем от каталога проекта, выполните одну из команд бы посмотреть приложение в эмулятор:

        cordova/run playbook
        cordova/run blackberry
    

Если вы пробуждены ли устройство подключено к вашему компьютеру, ответьте Да.

**Примечание:** На BlackBerry OS 5, приложение установлено в `Downloads` каталог.

## Дополнительная информация

Следующие статьи может помочь решить общие проблемы при разработке приложений для платформы BlackBerry WebWorks:

*   [Ежевика WebWorks развития ловушек][15]

*   [Лучшие практики для упаковки приложений WebWorks][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html