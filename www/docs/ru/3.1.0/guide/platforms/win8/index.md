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

Средства командной строки относятся к версии до Cordova 3.0. Сведения о текущем интерфейсе см интерфейс командной строки.

Майкрософт рекомендуется использовать имя *приложения в стиле Metro* в Windows 8 и Windows RT. MSDN теперь ссылается на этот тип приложения как приложения *Магазина Windows* , и это руководство следует этой Конвенции. Кроме того в этом руководстве *Windows 8* означает Windows 8 и Windows RT.

## 1. Требования

*   ОС Windows 8

*   Visual Studio 2012 Professional или лучше или Visual Studio 2012 Express для Windows 8

Следуйте инструкциям [здесь][1] представить ваши приложения Магазина Windows.

 [1]: http://www.windowsstore.com/

## 2. Установить SDK + Кордова

*   Настройте ваш предпочтительный вариант Visual Studio 2012. Все платные версии продукта (профессиональный, и т.д.) позволяют создавать приложения Магазина Windows. Вам нужно **Express для Windows 8** для построения приложений Магазина Windows с использованием [Экспресс издания][2].

*   Загрузите и распакуйте последнюю копию [Cordova][3]. Вы будете работать `lib\windows-8` подкаталог.

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products
 [3]: http://phonegap.com/download

## 3. Установите новый проект

Вы уже можете построить приложений Windows 8 с помощью *отслеживания HTML/JavaScript,* доступные в приложениях Магазина Windows. Используйте Кордова в приложениях Магазина Windows для предоставления те же API как на других платформах, поддерживаемых Cordova.

*   Откройте Visual Studio 2012 и выберите **Новый проект**.

*   Выберите **Установленные → шаблон → другие языки → JavaScript → магазина Windows** из дерева, а затем **Пустое приложение** из списка проекты. Введите любые имя проекта, вам нравится, такие как `CordovaWin8Foo` как в этом примере.

    ![][4]

*   Корпорация Майкрософт продолжает использовать `default.html` как домашняя страница по умолчанию, но большинство веб-разработчиков сайта `index.html` . (Плюс вполне вероятно, что в других вариантах платформа вашего проекта вы используете `index.html` как имя страницы по умолчанию.) Чтобы исправить это, в обозреватель переименовать `default.html` файл `index.html` . Затем дважды щелкните `package.appxmanifest` файл и изменить значение **Начальная страница**`index.html`.

    ![][5]

*   Включить `cordova.js` в вашем проекте, щелкните правой кнопкой мыши `js` в обозревателе решений и выберите **Добавить → новый элемент**. Найдите `cordova.js` файл в `lib\windows-8` Каталог отмечалось выше.

*   Изменить код для `index.html` . Добавьте ссылку на `cordova.js` . Вы можете сделать это, или вручную, перетащив файл из обозревателя решений.

 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png
 [5]: {{ site.baseurl }}/static/img/guide/platforms/win8/wschangemanifest.png

### Добавление ссылки на...

        <!-- WinJS references -->
        <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
        <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
        <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

        <!-- Cordova -->
        <script src="/js/cordova.js"></script>

        <!-- CordovaWin8Foo references -->
        <link href="/css/default.css" rel="stylesheet" />
        <script src="/js/default.js"></script>


*   Далее добавите, что некоторый код, который демонстрирует Cordova работает.

### Добавление обработчика «deviceready»...

    <body>
        <p>Content goes here</p>

        <script type="text/javascript">

            console.log("Subscribing...");
            document.addEventListener("deviceready", function () {

                navigator.notification.alert("The device is ready!");

            });

        </script>

    </body>


## 5. Тестирование проекта

*   Запуск проекта из Visual Studio. Вы увидите окно сообщения появляются:

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsalert.png

## Договорились!

Вот оно что! Теперь вы готовы строить приложения Магазина Windows с Кордова.
