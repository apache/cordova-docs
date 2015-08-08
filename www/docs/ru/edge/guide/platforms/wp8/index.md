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

# Руководство для платформы Windows Phone 8

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для устройств Windows Phone. Он фокусируется на Windows Phone 8, но дополнительные сведения о том, как поддержка Windows Phone 7.

Оно показывает, как использовать либо инструменты командной строки, специфические для Windows Phone для создания и построения приложения, или кросс платформенный Cordova CLI описываемый в "Интерфейс командной строки". (См. Введение для сравнения этих процессов разработки.) В этом разделе также показано, как открыть приложений Cordova, так что вы можете изменять их в среде Visual Studio. Независимо от того, какой подход вы принимаете вам нужно установить Windows Phone SDK, как описано ниже.

Смотрите следующие детали, характерные для платформы Windows Phone:

*   Плагины Windows Phone 8
*   Обновление Windows Phone 8

Для платформы Windows Phone 8 Cordova WebView опирается на Internet Explorer 10 как ее движок, так что с практической точки зрения IE10 мощный отладчик можно использовать для тестирования любого веб-контента, который не вызвать API Cordova. Блог разработчиков Windows Phone предоставляет [полезные рекомендации][1] о том, как поддержать IE10 наряду с сопоставимыми WebKit-браузерами.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Требования и поддержка

Вам потребуется следующее:

*   64-разрядная версия Windows 8 Pro, установочного диска или файла образа диска *ISO* . Ознакомительная версия доступна в [Microsoft Developer Network][2]. Версия Pro является необходимым для запуска эмулятора устройства.

*   [Windows Phone SDK][3].

*   Чтобы развернуть через командную строку c Windows Phone SDK 8.0, необходимо установить [Visual Studio 2012 Обновление 2][4] .

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [4]: https://support.microsoft.com/en-us/kb/2797912

Для разработки приложений Cordova под устройства Windows Phone, вы можете использовать ПК под управлением Windows, или вы также можете разрабатывать на Mac, путем запуска всего в виртуальной машине, либо с помощью Boot Camp для загрузки из Windows раздела. Проконсультируйтесь с этими ресурсами для настройки среды разработки Windows на Mac:

*   **VMWare Fusion**: для установки виртуальной машины Windows 8, выполните инструкции, предоставляемые [Microsoft Developer Network][5], затем смотрите "Настройка VMWare Fusion" для получения информации о подготовке виртуальной среды для запуска эмулятора, поставляемого в комплекте с SDK.

*   **Parallels Desktop**: для установки виртуальной машины Windows 8, выполните инструкции, предоставляемые [Microsoft Developer Network][6], затем смотрите "Настройка Parallels Desktop" для получения информации о подготовке виртуальной среды для запуска эмулятора, поставляемого в комплекте с SDK.

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

Если вы разрабатываете на ПК, его процессор должен поддерживать Виртуализация (*VT-x* на Intel) и [Перевода адресов второго уровня (SLAT)][8]. Обратитесь к [Intel список процессоров][9]. Виртуализация обычно отключена по умолчанию, поэтому необходимо включить в настройках BIOS. ПК должен иметь по крайней мере 6,5 ГБ свободного дискового пространства и 4 ГБ оперативной памяти.

 [8]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [9]: http://ark.intel.com/Products/VirtualizationTechnology

## С помощью инструментов Cordova оболочки

Если вы хотите использовать инструменты Windows Phone-центру оболочки Cordova вместе с SDK, у вас есть два основных варианта:

*   Доступ к ним локально из проекта кода, созданного CLI. Они доступны в `platforms/wp8/cordova` Каталог после добавления `wp8` платформа, как описано ниже.

*   Скачайте их из отдельных распределения на [cordova.apache.org][10]. Кордова дистрибутив содержит отдельные архивы для каждой платформы. Будьте уверены, чтобы расширить в соответствующий архив, `cordova-wp8\wp8` в данном случае, в пустой каталог. Соответствующие пакетных утилит доступны в верхнего уровня `bin` каталог. (Обратитесь к **README** файл при необходимости для более подробные инструкции.)

 [10]: http://cordova.apache.org

Эти оболочки инструменты позволяют создавать, строить и запускать приложения Windows Phone. За информаций о дополнительных интерфейсах командной строки которые позволяют встраивать возможности плагинов среди разных платформ, смотрите раздел "Использование Plugman для управления расширениями". Смотрите Плагины приложения для руководства по разработке плагинов и Плагины Windows Phone 8 для получения сведений, специфичных для платформы Windows Phone.

## Установите SDK

Установите последнюю версию пакета SDK Windows Phone от **Скачиваний** области [dev.windowsphone.com][11]. Вы можете также установить последние пакеты обновления эмулятора.

 [11]: https://dev.windowsphone.com/en-us/downloadsdk

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

## Создание нового проекта

На данный момент для создания нового проекта можно выбрать между кросс-платформенным инструментом CLI, описанным в разделе "Интерфейс командной строки", или набор инструментов для Windows Phone. С в каталоге исходного кода, а вот подход CLI:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8


Вот соответствующий подход shell инструмент более низкого уровня:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Построение проекта

Если вы используете CLI для разработки, каталога `www` проекта содержит исходные файлы. Запустите любой из нижеследующего в каталоге проекта для перепостроения приложения:

        > cordova build
        > cordova build wp8   # do not rebuild other platforms


Если вы используете инструменты Windows Phone специфические оболочки в процессе развития, существует другой подход. После создания проекта приложения по умолчанию источник доступен в `projects\wp8\www` подкаталога. Последующие команды доступны в `cordova` подкаталога на том же уровне.

`build`Команда очищает файлы проекта и перестраивает app. Первый пример генерирует отладочную информацию, и второй подписывает apps для выпуска:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`Команда помогает вымывать каталогов в рамках подготовки к следующей `build` :

        C:\path\to\project\cordova\clean.bat


## Развертывание на эмулятор

К этому моменту можно использовать утилиту CLI `cordova` для развертывания приложения на эмулятор из командной строки:

        > cordova emulate wp8


В противном случае используйте интерфейс альтернативной оболочки:

        C:\path\to\project\cordova\run


По умолчанию `run` сценарий вызывает эмулятор флаг и принимает дополнительные построения флаги, для которого `--debug` предоставляет значение по умолчанию:

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild


Эмулятор запускает образа устройства с установленным приложением. От домашнего экрана перейдите на панель приложения для запуска приложения **HelloWorld** . Это показывает запуск с его заставка, после чего его основной интерфейс приложения:

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

Основные элементы эмулятора на правом верхнем углу экрана устройства позволяют переключаться между книжной и альбомной ориентации. **>** Кнопка открывает больше элементов управления, которые позволяют протестировать более сложных установок и жесты:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

Эти дополнительные элементы управления также позволяют изменять местоположение устройства или для моделирования последовательностей движений:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## Развертывание на устройство

Перед тестированием приложения на устройстве, устройство должно быть зарегистрировано. Документации [корпорации Майкрософт][16] сведения о том, как развернуть и протестировать на Windows Phone 8. Кроме того убедитесь, что телефон подключен к компьютеру, и экран разблокируется.

 [16]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565.aspx

Затем запустите следующую команду CLI для запуска приложения на устройстве:

    > cordova run wp8


Он соответствует этой команды оболочки более низкого уровня:

    C:\path\to\project\cordova\run --device


Кроме того если вы работаете в Visual Studio, выберите **Устройство Windows Phone** из раскрывающегося меню в верхней, а затем нажмите зеленый **играть** кнопку рядом, или же введите **F5**.

## Изменить проект в SDK

После того, как вы строите Cordova-приложение, как описано выше, вы можете открыть его с SDK. Различные `build` команды создается файл Visual Studio решения (*.sln*). Откройте файл, чтобы изменить проект в Visual Studio. Веб-исходный код доступен в рамках проекта `www` каталог. А также другие средства SDK предоставляет, управления ниже меню позволяет запустить приложение в эмуляторе Windows Phone:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

Сверяйтесь с разделом "Введение" о том как использовать интерфейс командной строки Cordova командной или SDK в вашем рабочем процессе. Кордова CLI опирается на кросс платформенной исходный код, который постоянно перезаписывает файлы платформы, используемые в SDK. Если вы хотите работать в рамках SDK, используйте инструменты низкого уровня оболочки как альтернатива CLI.
