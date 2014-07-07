* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Руководство по Windows 8 платформы

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova в Windows 8. Он показывает, как использовать инструменты либо оболочки, характерных для Windows 8 для создания и построения приложения, или кросс платформенный Cordova CLI обсуждаются в интерфейс командной строки. (См. Обзор для сравнения этих вариантов развития). В этом разделе также показано, как изменять Cordova приложения в среде Visual Studio. Независимо от того, какой подход вы принимаете вам нужно установить SDK для Visual Studio, как описано ниже.

Информацию о том, как обновления существующих проектов Windows 8 Cordova см обновление Windows 8.

Кордова WebViews работает на Windows 8 полагаются на Internet Explorer 10 как их движок рендеринга, так что с практической точки зрения IE10 мощный отладчик можно использовать для тестирования любого веб-контента, который не вызвать API Cordova. Блог разработчиков Windows Phone предоставляет [полезные рекомендации][1] о том, как поддержать IE10 наряду с сопоставимыми WebKit-браузерами.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Требования и поддержка

Вам необходима одна из следующих комбинаций OS/SDK, либо с установочного диска или файла образа диска *ISO* :

*   Windows 8.0 или 8.1, 32 или 64-кусочек *дома*, *Pro*или выпуски *Enterprise* , вместе с [Visual Studio 2012 Express][2].

*   Windows 8.1, 32 или 64-кусочек *дома*, *Pro*или выпуски *Enterprise* , вместе с [Visual Studio 2013 Pro][2] или выше. Ознакомительная версия Windows 8.1 предприятия доступен из [Microsoft Developer Network][3].

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

Приложения, скомпилированные под Windows 8.1 сделать *не* запускаться под Windows 8.0. Приложения под Windows 8.0 совместимые с 8.1.

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

Следуйте инструкциям на [windowsstore.com][4] для отправки приложения в магазин Windows.

 [4]: http://www.windowsstore.com/

<!-- true? -->

Для разработки Cordova приложения для Windows 8, вы можете использовать ПК под управлением Windows, но может также развиться на Mac, либо путем запуска в среде виртуальной машины, либо с помощью Boot Camp для двойной загрузки Windows 8 раздела. Консультации эти ресурсы для настройки среды разработки необходимо Windows на Mac:

*   [VMWare Fusion][5]

*   [Parallels Desktop][6],

*   [Boot Camp][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## С помощью инструментов Cordova оболочки

Если вы хотите использовать инструменты оболочки Windows 8 в центре Кордовы в сочетании с SDK, у вас есть два основных варианта:

*   Доступ к ним локально из проекта кода, созданного CLI. Они доступны в `platforms/windows8/cordova` Каталог после добавления `windows8` платформа, как описано ниже.

*   Скачайте их из отдельных распределения на [cordova.apache.org][8]. Кордова дистрибутив содержит отдельные архивы для каждой платформы. Будьте уверены, чтобы расширить в соответствующий архив, `cordova-windows8\windows8` в данном случае, в пустой каталог. Соответствующие пакетных утилит доступны в верхнего уровня `bin` каталог. (Обратитесь к **README** файл при необходимости для более подробные инструкции.)

 [8]: http://cordova.apache.org

Эти оболочки инструменты позволяют создавать, строить и запускать приложения Windows 8. Для получения информации о дополнительных интерфейс командной строки, который позволяет использовать возможности плагина на всех платформах смотрите с помощью Plugman для управления плагинами.

## Установите SDK

Установить *Ultimate*, *премиум*или выпуски [Visual Studio][2] *Professional* 2013.

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## Создание нового проекта

На данный момент для создания нового проекта можно выбрать между CLI инструмент крест платформы, описанные в интерфейс командной строки, или набор инструментов Windows 8 конкретных оболочки. Из каталога исходного кода, этот подход CLI генерирует приложение под названием *HelloWorld* в новом `hello` каталог проекта:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

Вот соответствующий подход shell инструмент более низкого уровня:

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Построение проекта

Если вы используете CLI в развитии, в каталог проекта верхнего уровня `www` Каталог содержит исходные файлы. Запустите любой из них в каталоге проекта по восстановлению app:

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

Если вы используете инструменты Windows Phone специфические оболочки в процессе развития, существует другой подход. После создания проекта приложения по умолчанию источник доступен в `projects\windows8\www` подкаталога. Последующие команды доступны в `cordova` подкаталога на том же уровне.

`build`Команда очищает файлы проекта и перестраивает app. Первый пример генерирует отладочную информацию, и второй подписывает apps для выпуска:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

`clean`Команда помогает вымывать каталогов в рамках подготовки к следующей `build` :

        C:\path\to\project\cordova\clean.bat
    

## Откройте проект в SDK и развертывание приложения

После того, как вы строите Cordova-приложение, как описано выше, вы можете открыть его с Visual Studio. Различные `build` команды создать файл Visual Studio решения (*.sln*). Откройте файл в проводнике файл, чтобы изменить проект в Visual Studio:

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`Компонент отображает внутри решения и его `www` Каталог содержит веб-исходный код, включая `index.html` Домашняя страница:

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

Элементы управления ниже главного меню Visual Studio позволяют вам испытывать и не развертывать приложения:

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

С **Локального компьютера** выбран нажмите зеленую стрелку, чтобы установить приложение на одном компьютере работает Visual Studio. Как только вы сделать это, приложение появляется в списках приложений Windows 8:

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

Каждый раз, когда вы перестроить приложение, обновляется версия доступна в интерфейсе.

После доступные в app списки, удерживайте нажатой клавишу **CTRL** при выборе app позволяет закрепить его на главный экран:

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

Обратите внимание, что если вы открываете приложение в среде виртуальной машины, вам может понадобиться нажать в углах или по бокам окна переключения приложений или доступа к дополнительным функциям:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

Попеременно выберите параметр развертывания **симулятор** для просмотра приложения, как если бы она была установлена на планшетное устройство:

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

В отличие от развертывания настольных систем этот параметр позволяет имитировать ориентации планшета, местоположение и изменять его параметры сети.

**Примечание**: проконсультироваться обзор для консультации по использованию Кордовы в командной строки или SDK в рабочем процессе. Кордова CLI опирается на кросс платформенной исходный код, который постоянно перезаписывает файлы платформы, используемые в SDK. Если вы хотите использовать пакет SDK для изменения проекта, используйте инструменты низкого уровня оболочки как альтернатива CLI.