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

# Руководство по платформы Windows Phone 7

Данное руководство демонстрирует как настроить среду разработки для развертывания приложений на устройствах Windows Phone 7. Приложения также работают на устройствах Windows Phone 8, с помощью интерфейса API, но версия 7 не хватает некоторых IE10 дополнительных функций, доступных в Windows Phone 8. Приложения Windows Phone 8 делать *не* запускаются на устройствах Windows Phone 7.

Смотрите ниже для более подробной информации конкретной платформы, которая применяется для обеих версий:

*   Обновление Windows Phone
*   Windows Phone плагины
*   Windows Phone средств командной строки

Средства командной строки относятся к версии до 3.0 Кордова. Смотрите информацию о текущем интерфейсе интерфейс командной строки.

## Системные требования

Использовать Windows 7 или Windows 8 (Pro) или Windows Vista с пакетом обновления 2. 64-Разрядная версия (x 64) Windows требуется для SDK. Pro версия рекомендуется для запуска эмулятора устройства.

Зарегистрироваться и оплатить счет [Центр разработчиков Windows Phone][1] если вы хотите установить приложения на реальном устройстве или представить его на рынке.

 [1]: http://dev.windowsphone.com/en-us/publish

**Примечание**: выполнение пакета SDK в виртуальной машине могут представлять вызовы. Читайте [Windows Phone на Mac][2] для идеи о разработке решений.

 [2]: http://aka.ms/BuildaWP8apponaMac

## Установить SDK и Кордова

Скачать и установить [Windows Phone SDK][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

Загрузите и распакуйте последнюю копию [Кордова][4]. Вам нужно работать `lib\windows-phone-8\wp7` подкаталога, `lib\windows-phone-8\wp8` содержит 8 телефон Windwos версия Кордова.

 [4]: http://phonegap.com/download

Копия `CordovaWP7_x_x_x.zip` файл `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` каталог.

## Создание шаблона

**Примечание**: этот шаг пропустить, если `lib\windows-phone` уже содержит каталог `CordovaWP7_x_x_x.zip` файлов.

Для упрощения разработки Cordova расслоения сценарий для создания шаблонов Visual Studio. Они позволяют вам быстро создавать Cordova apps, и при необходимости их можно изменить. Ниже шаги показывают, как создать его.

### Запустите пакетный файл для создания и установки шаблонов

Содержит корень репо `createTemplates.bat` файл. Дважды щелкните этот файл создает два `.zip` файлы: `CordovaWP7_x_x_x.zip` и `CordovaWP8_x_x_x.zip` , где *ххх* — номер текущей версии. Чтобы использовать эти файлы в Visual Studio, скопируйте их в `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` подкаталога. Вы могл после этого создать новое меню **приложений Apache Cordova Windows Phone_ из Visual Studio __File → новый проект** .

Если вы запустите пакетный файл из командной строки, можно также вызвать с параметром для автоматической установки:

        >createTemplates.bat -install


## Создание нового проекта

*   Откройте Visual Studio Express для Windows Phone и выберите **Новый проект**.

*   Выберите **CordovaWP7**. Версия номер отображается в описании шаблона.

*   Присвойте проекту имя и нажмите **OK**.

## Обзор структуры проекта

`www`Каталог функции `html` , `js` , и `css` подкаталоги и любые другие ресурсы требует вашего приложения. Любое дополнительное содержимое должно быть частью проекта Visual Studio, и он должен быть задан как содержание.

Следующий пример структуры представляет собой 2.3.0 проекта, но могут варьироваться в зависимости от установленной версии:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Постройте проект для устройства

Перед тестированием приложения на устройстве, устройство должно быть зарегистрировано. Документации [корпорации Майкрософт][6] сведения о том, как развернуть и протестировать на Windows Phone 7. Таковы основные шаги:

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Убедитесь, что ваш телефон подключен, и экран разблокирован.

*   В Visual Studio выберите **устройство** в раскрывающемся меню в верхней.

*   Нажмите кнопку зеленый **играть** рядом с главного меню раскрывающегося списка для запуска отладки, или же введите **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

На данный момент вы сделали.
