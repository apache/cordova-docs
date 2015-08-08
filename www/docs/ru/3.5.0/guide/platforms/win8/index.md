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

# Руководство по Windows 8 платформы

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для Windows 8. Смотрите ниже для более подробной информации конкретной платформы:

*   Обновление для Windows 8
*   Средства командной строки Windows 8

Средства командной строки относятся к версии до 3.0 Кордова. Смотрите информацию о текущем интерфейсе интерфейс командной строки.

Майкрософт рекомендуется использовать имя *приложения в стиле Metro* в Windows 8 и Windows RT. MSDN теперь ссылается на этот тип приложения как приложения *Магазина Windows* , и это руководство следует этой Конвенции. Кроме того в этом руководстве *Windows 8* означает Windows 8 и Windows RT.

## Требования к

*   ОС Windows 8

*   Visual Studio 2012 Professional или лучше или Visual Studio 2012 Express для Windows 8

Следуйте инструкциям в [windowsstore.com][1] представить ваше приложение для Магазина Windows.

 [1]: http://www.windowsstore.com/

## Установить SDK и Кордова

Настройте ваш предпочтительный вариант Visual Studio 2012. Все платные версии продукта (профессиональный, и т.д.) позволяют создавать приложения Магазина Windows. Вам нужно **Express для Windows 8** для построения приложений Магазина Windows с использованием [Экспресс издания][2].

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products

Загрузите и распакуйте последнюю копию [Кордова][3]. Эти instuctions применяются к `lib\windows-8` подкаталога.

 [3]: http://phonegap.com/download

## Создание нового проекта

Вы уже можете построить приложений Windows 8 с помощью *отслеживания HTML/JavaScript,* доступные в приложениях Магазина Windows. Используйте Кордова в приложениях Магазина Windows для предоставления те же API как на других платформах, поддерживаемых Кордова.

*   Откройте Visual Studio 2012 и выберите **Новый проект**.

*   Выберите **Установленные → шаблон → другие языки → JavaScript → Windows Store** из дерева, а затем **Пустое приложение** из списка проекты. Введите имя проекта, какой вам нравится, такие как `CordovaWin8Foo` как в этом примере:

    ![][4]

*   Microsoft продолжает использовать `default.html` как Главная страница по умолчанию, но большинство веб-разработчиков сайта `index.html` . Это хорошая идея, чтобы сделать это, по крайней мере соответствовать другие платформы, скорее всего, вы работаете на. Чтобы исправить это, в **Обозреватель** переименовать `default.html` файл `index.html` . Затем дважды щелкните `package.appxmanifest` файл и измените значение, **Стартовая страница** `index.html` :

        ![](img/guide/platforms/win8/wschangemanifest.png)


*   Включить `cordova.js` в проекте, щелкните правой кнопкой мыши `js` в **Обозревателе** решений и выберите **пункт Добавить → новый**. Найдите `cordova.js` файл в `lib\windows-8` каталог.

*   Изменить код для `index.html` . Добавьте ссылку на `cordova.js` . Вы можете сделать это вручную, или перетащить файл из **Обозревателя решений**. Добавьте следующие другие зависимости к домашней странице приложения:

            <!-- WinJS references -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo references -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>


*   Добавить `deviceready` работает обработчик для демонстрации Кордова:

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>


 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png

## Тестирование проекта

Запуск проекта из Visual Studio. Вы увидите окно сообщения появляются:

        ![](img/guide/platforms/win8/wsalert.png)


Вот это. Теперь вы готовы строить приложения Магазина Windows с Кордова.
