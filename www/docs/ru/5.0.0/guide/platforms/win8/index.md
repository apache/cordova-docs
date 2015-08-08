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

# Руководство по платформе Windows

В этом руководстве показано, как настроить среду разработки SDK для создания и развертывания приложений Cordova для Windows 8, Windows 8.1 и 8.1 Windows Phone. Он показывает, как использовать инструменты либо оболочки для создания и построения приложения, или кросс платформенный Cordova CLI обсуждаются в "Интерфейс командной строки". (См. Введение для сравнения этих вариантов развития). В этом разделе также показано, как изменять Cordova приложения в среде Visual Studio. Независимо от того, какой подход вы принимаете вам нужно установить SDK для Visual Studio, как описано ниже.

Смотрите "Обновление для Windows 8" для информации о том, как обновить существующие проекты Windows 8 Cordova.

Window Phone 8 (wp8) остается в качестве отдельной платформы, подробности в "Руководство для платформы Windows Phone 8".

Cordova WebView под управлением ОС Windows полагаются на Internet Explorer 10 (Windows 8.0) и Internet Explorer 11 (Windows 8.1 и Windows Phone 8.1) как их движок рендеринга, так что с практической точки зрения мощный отладчик в IE можно использовать для тестирования любого веб-контента, который не вызвает API Cordova. Блог разработчиков Windows Phone предоставляет [полезные рекомендации][1] о том, как поддержка IE наряду с сопоставимыми WebKit-браузерами.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Требования и поддержка

Для разработки приложений для платформы Windows необходимо:

*   Windows 8.1, 32 или 64-разрядная машина (*Домашняя*, *Профессиональная*или *Корпортативное* издание) с как минимум 4 ГБ ОЗУ.

*   Для эмуляторов Windows Phone, Профессиональная версия Windows 8.1 (x64) или выше и процессор, который поддерживает [клиент Hyper-V и перевода адресов второго уровня (SLAT)][2]. Ознакомительная версия Windows 8.1 Enterprise доступна из [Microsoft Developer Network][3].

*   [Visual Studio 2013 для Windows][4] (Экспресс или выше).

 [2]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Приложения, скомпилированные под Windows 8.1 *не* запускаються под Windows 8.0. Приложения для Windows 8.0 совместимы с 8.1.

Следуйте инструкциям на [windowsstore.com][5] для отправки приложения в магазин Windows.

 [5]: http://www.windowsstore.com/

Для разработки Cordova приложения для Windows, вы можете использовать ПК под управлением Windows, но может также разрабатывать на Mac, либо путем запуска в среде виртуальной машины, либо с помощью Boot Camp для двойной загрузки Windows 8.1 раздела. Проконсультируйтесь с этими ресурсами для настройки среды разработки Windows на Mac:

*   [VMWare Fusion][6]

*   [Parallels Desktop][7],

*   [Boot Camp][8].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Установите SDK

Установить *Ultimate*, *Premium*или *Professional* выпуски [Visual Studio][4] 2013.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

## Использование инструментов командной строки Cordova

Если вы хотите использовать инструменты оболочки Windows в центре Кордовы в сочетании с SDK, у вас есть два основных варианта:

*   Доступ к ним локально из кода проекта, созданного CLI. Они доступны в каталоге `platforms/windows/` после добавления платформы `windows` , как описано ниже.

*   Скачайте их из отдельного дистрибутива на [cordova.apache.org][10]. Дистрибутив Cordova содержит отдельные архивы для каждой платформы. Убедитесь в том что распаковываете соответствующий архив, `cordova-windows` в этом случае, в пустой каталог. Соответствующие утилиты командной строки доступны в каталоге `package/bin` . (Обратитесь при необходимости к **README** файлу за более подробными инструкциями.)

 [10]: https://www.apache.org/dist/cordova/platforms/

Эти оболочки инструменты позволяют создавать, строить и запускать приложения Windows. За информаций о дополнительных интерфейсах командной строки которые позволяют встраивать возможности плагинов среди разных платформ, смотрите раздел "Использование Plugman для управления расширениями".

## Создание нового проекта

На данный момент для создания нового проекта можно выбрать между кросс-платформенным инструментом CLI, описанным в разделе "Интерфейс командной строки", или набор инструментов для Windows. Ниже CLI подход создает приложение с именем *HelloWorld* в каталог нового проекта `hello` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


Вот соответствующий подход shell инструмент более низкого уровня:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Построение проекта

Если вы используете CLI для разработки, каталога `www` проекта содержит исходные файлы. Запустите любой из нижеследующего в каталоге проекта для перепостроения приложения:

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


Вот соответствующий подход shell инструмент более низкого уровня:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release
        C:\path\to\project\cordova\clean.bat


## Настройка целевой версии Windows

По умолчанию, команда `build` производит два пакета: Windows 8.0 и 8.1 Windows Phone. Чтобы обновить пакет Windows до версии 8.1 следующие параметры конфигурации должны быть добавлены в файл конфигурации (`config.xml`).

        <preference name='windows-target-version' value='8.1' />


После того, как вы добавите этот параметр, команда `build` начнет создавать пакеты Windows 8.1 и 8.1 Windows Phone.

## Развертывание приложения

Развертывание пакета Windows:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Развертывание пакета Windows Phone:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


Можно использовать **cordova run windows --list** чтобы увидеть все доступные цели и **cordova run windows --target=target_name \-- -|-phone** для запуска приложения на конкретном устройстве или эмуляторе (например, `cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

Чтобы увидеть дополнительные параметры построения и запуска также можно использовать **cordova run --help**.

## Откройте проект в SDK и развертывание приложения

После того, как вы построите Cordova-приложение, как описано выше, вы можете открыть его в Visual Studio. Различные команды `build` создют файл решения Visual Studio (*.sln*). Откройте файл в Проводнике, чтобы изменить проект в Visual Studio:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

Компонент `CordovaApp` отображается внутри решения, и его каталог `www` содержит исходный код, включая домашнюю страницу `index.html` :

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Элементы управления ниже главного меню Visual Studio позволяют вам тестировать или развертывать приложения:

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

При выбранном пункте **Локальный компьютер** нажмите зеленую стрелку, чтобы установить приложение на том же компьютере где работает Visual Studio. Как только вы сделаете это, приложение появляется в списках приложений Windows 8:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

Каждый раз, когда вы перестроить приложение, версия доступная в интерфейсе обновляется.

После появления в списке приложений, удерживайте нажатой клавишу **CTRL** это позволяет закрепить приложение на главный экран:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

Обратите внимание, что если вы открываете приложение в среде виртуальной машины, вам может понадобиться нажать в углах или по бокам окна переключения приложений или получить доступ к дополнительным функциям:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

Альтернативно выберите параметр развертывания **Симулятор** для просмотра приложения, как если бы она была установлена на планшетном устройстве:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

В отличие от развертывания на настольные системы этот параметр позволяет имитировать ориентацию планшета, его местоположение и изменять его параметры сети.

**Примечание**: Сверяйтесь с разделом "Введение" для понимания когда использовать инструменты командной строки Cordova а когда инструменты SDK в вашем рабочем процессе. Cordova CLI опирается на кросс платформенной исходный код, который постоянно перезаписывает файлы платформы, используемые SDK. Если вы хотите использовать SDK для изменения проекта, используйте низкоуровневые инструменты командной строки как альтернативу CLI.
