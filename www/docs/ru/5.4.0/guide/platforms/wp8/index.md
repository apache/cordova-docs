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

title: Руководство для платформы Windows Phone 8
---

# Руководство для платформы Windows Phone 8

Данное руководство демонстрирует как настроить среду разработки для развертывания приложений Cordova на устройствах Windows Phone. Он фокусируется на Windows Phone 8, содержит дополнительные сведения о том, как поддерживать Windows Phone 7.

Оно показывает, как использовать либо инструменты командной строки, специфические для Windows Phone для создания и построения приложения, или кросс платформенный Cordova CLI описываемый в "[Интерфейс командной строки](../../cli/index.html)". (См. [Введение](../../overview/index.html) для сравнения этих процессов разработки.) В этом разделе также показано, как открыть приложений Cordova, так что вы можете изменять их в среде Visual Studio. Независимо от того, какой подход вы принимаете вам нужно установить Windows Phone SDK, как описано ниже.

Смотрите следующие детали, характерные для платформы Windows Phone:

*   [Плагины Windows](../win8/plugin.html) Phone 8
*   [Обновление Windows Phone 8](upgrade.html)

Для платформы Windows Phone 8 - Cordova WebView опирается на Internet Explorer 10 как движок рендеринга, так что с практической точки зрения мощный отладчик IE10 можно использовать для тестирования любого веб-контента, который не вызвает API Cordova. Блог разработчиков Windows Phone предоставляет [полезные рекомендации][1] о том, как поддерживать IE10 наряду с аналогичными WebKit-браузерами.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Требования и поддержка

Вам потребуется следующее:

*   64-разрядная версия Windows 8 Pro, или на установочном диске или образа диска *ISO* . Ознакомительная версия доступна в [Microsoft Developer Network][2]. Версия Pro является необходимым требованием для запуска эмулятора устройства.

*   [Windows Phone SDK][3].

*   Чтобы развернуть через командную строку c Windows Phone SDK 8.0, необходимо установить [Visual Studio 2012 Обновление 2][4] .

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [4]: https://support.microsoft.com/en-us/kb/2797912

Для разработки приложений Cordova под устройства Windows Phone, вы можете использовать ПК под управлением Windows, или вы также можете разрабатывать на Mac, путем запуска всего в виртуальной машине, либо с помощью Boot Camp для загрузки из Windows раздела. Проконсультируйтесь с этими ресурсами для настройки среды разработки Windows на Mac:

*   **VMWare Fusion**: для установки виртуальной машины Windows 8, выполните инструкции, предоставляемые [Microsoft Developer Network][5], затем смотрите "[Настройка VMWare Fusion](vmware.html)" для получения информации о подготовке виртуальной среды для запуска эмулятора, поставляемого в комплекте с SDK.

*   **Parallels Desktop**: для установки виртуальной машины Windows 8, выполните инструкции, предоставляемые [Microsoft Developer Network][6], затем смотрите "[Настройка Parallels Desktop](parallels.html)" для получения информации о подготовке виртуальной среды для запуска эмулятора, поставляемого в комплекте с SDK.

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **Boot Camp**: чтобы настроить раздел Windows 8, следуйте инструкциям по установке, представленной в [Microsoft Developer Network][7].

 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

Если вы разрабатываете на ПК, его процессор должен поддерживать Виртуализация (*VT-x* на Intel) и [Перевода адресов второго уровня (SLAT)][8]. Обратитесь к [списку процессоров Intel][9]. Виртуализация обычно отключена по умолчанию, поэтому необходимо включить ее в настройках BIOS. ПК должен иметь по крайней мере 6,5 ГБ свободного дискового пространства и 4 ГБ оперативной памяти.

 [8]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [9]: http://ark.intel.com/Products/VirtualizationTechnology

## Использование инструментов командной строки Cordova

Если вы хотите использовать инструменты Cordova ориентированные на Windows Phone вместе с SDK, у вас есть два основных варианта:

*   Доступ к ним локально из проекта кода, созданного CLI. Они доступны в `platforms/wp8/cordova` Каталог после добавления `wp8` платформа, как описано ниже.

*   Скачайте их из отдельных дистрибутивов на [cordova.apache.org][10]. Дистрибутив Cordova содержит отдельные архивы для каждой платформы. Убедитесь в том что распаковываете соответствующий архив, `cordova-wp8\wp8` в этом случае, в пустой каталог. Соответствующие утилиты командной строки доступны в каталоге верхнего уровня `bin`. (Обратитесь при необходимости к **README** файлу за более подробными инструкциями.)

 [10]: http://cordova.apache.org

Эти инструменты командной строки позволяют создавать, собирать и запускать приложения Windows Phone. За информаций о дополнительных интерфейсах командной строки которые позволяют встраивать возможности плагинов среди разных платформ, смотрите раздел "[Использование Plugman для управления расширениями](../../../plugin_ref/plugman.html)". Смотрите Плагины приложения для руководства по разработке плагинов и [Плагины Windows](../win8/plugin.html) Phone 8 для получения сведений, специфичных для платформы Windows Phone.

## Установите SDK

Установите последнюю версию пакета Windows Phone SDK из раздела **Загрузки** [dev.windowsphone.com][11]. Вы можете также установить последние пакеты обновления эмулятора.

 [11]: https://dev.windowsphone.com/en-us/downloadsdk

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

## Создание нового проекта

На данный момент для создания нового проекта можно выбрать между кросс-платформенным инструментом CLI, описанным в разделе "[Интерфейс командной строки](../../cli/index.html)", или набором инструментов для Windows Phone. Из каталога с исходным кодом, используя подход CLI:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8
    

Вот соответствующий подход используя инструменты командной строки более низкого уровня:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Построение проекта

Если вы используете CLI для разработки, каталог `www` проекта содержит исходные файлы. Запустите любую из нижеследующих команд в каталоге проекта для перепостроения приложения:

        > cordova build
        > cordova build wp8   # do not rebuild other platforms
    

Если вы используете инструменты командной строки специфические для Windows Phone в процессе разработки, существует другой подход. После создания проекта приложения по оригинальный исходный код доступен в подкаталоге `projects\wp8\www`. Нижеуказанные команды доступны в подкаталоге `cordova` на том же уровне.

Команда `build` очищает файлы проекта и перестраивает приложение. Первый пример генерирует отладочную информацию, и второй подписывает приложения для выпуска:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

Команда `clean` помогает очищать каталоги в рамках подготовки к следующей команде `build`:

        C:\path\to\project\cordova\clean.bat
    

## Развертывание на эмулятор

К этому моменту можно использовать утилиту CLI `cordova` для развертывания приложения на эмулятор из командной строки:

        > cordova emulate wp8
    

В противном случае используйте интерфейс альтернативной оболочки:

        C:\path\to\project\cordova\run
    

По умолчанию скрипт `run` вызывает флаг emulator и принимает дополнительные флаги сборки, для которого `--debug` предоставляется в качестве значения по умолчанию:

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild
    

Эмулятор запускает образ устройства с установленным приложением. Из домашнего экрана перейдите на панель приложения для запуска приложения **HelloWorld**. Это показывает запуск с заставкой, после чего основной интерфейс приложения:

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

Основные элементы управления эмулятора в правом верхнем углу экрана устройства, позволяют переключаться между книжной и альбомной ориентацией. **>** Кнопка открывает больше элементов управления, которые позволяют протестировать более сложных ориентации и жесты:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

Эти дополнительные элементы управления также позволяют изменять местоположение устройства или моделировать последовательность движений:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## Развертывание на устройство

Перед тестированием приложения на устройстве, устройство должно быть зарегистрировано. Документация [корпорации Майкрософт][16] содержит сведения о том, как развернуть и протестировать приложения на Windows Phone 8. Кроме того убедитесь, что телефон подключен к компьютеру, и экран разблокирован.

 [16]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565.aspx

Затем запустите следующую команду CLI для запуска приложения на устройстве:

    > cordova run wp8
    

Это соответствует утилите командной строки более низкого уровня:

    C:\path\to\project\cordova\run --device
    

Кроме того если вы работаете в Visual Studio, выберите **Устройство Windows Phone** из раскрывающегося меню в верхней, а затем нажмите зеленую кнопку **Запустить** рядом, или же нажмите **F5**.

## Изменить проект в SDK

После того, как вы построите Cordova-приложение, как описано выше, вы можете открыть его с помощью SDK. Различные команды `build` создают файл решения Visual Studio (*.sln*). Откройте файл, чтобы изменить проект в Visual Studio. Исходный код веб приложения доступен в каталоге `www` проекта. Совместно с другими инструментами, SDK предоставляет, элемент управления под меню который позволяет запустить приложение в эмуляторе Windows Phone:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

Сверяйтесь с разделом "[Введение](../../overview/index.html)" о том как использовать интерфейс командной строки Cordova командной или SDK в вашем рабочем процессе. Cordova CLI опирается на кросс платформенный исходный код, который будет постоянно перезаписывать файлы платформы, используемые SDK. Если вы хотите работать в рамках SDK, используйте инструменты командной строки низкого уровня как альтернативу CLI.
