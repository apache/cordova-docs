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

Средства командной строки относятся к версии до Cordova 3.0. Сведения о текущем интерфейсе см интерфейс командной строки.

## 1. Системные требования

*   Операционная система:

    *   Windows 7 или Windows 8 (Pro) или Windows Vista с пакетом обновления 2
        *   Для SDK требуется 64-разрядная версия (x 64) Windows.
        *   Pro версия рекомендуется для запуска эмулятора устройства.

*   Зарегистрироваться и оплатить для учетной записи [Windows Phone Dev центр][1] , если вы хотите установить приложение на реальном устройстве или представить его на рынке.

 [1]: http://dev.windowsphone.com/en-us/publish

**Примечание:** Запуск пакета SDK в виртуальной машине может представлять определенные трудности. Вы можете читать этот блог, который дает представление о решениях по разработке для [Windows Phone на Mac][2].

 [2]: http://aka.ms/BuildaWP8apponaMac

## 2. Установить SDK + Кордова

*   Скачать и установить [Windows Phone SDK][3]

*   Загрузите и распакуйте последнюю копию [Cordova][4]. Вы будете работать `lib\windows-phone-8\wp7` подкаталог, `lib\windows-phone-8\wp8` содержит версию Windwos телефон 8 Cordova.

*   Копия `CordovaWP7_x_x_x.zip` файл `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` каталог.

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/
 [4]: http://phonegap.com/download

## 2.1. Создание шаблона

**Примечание:** этот шаг может не потребоваться. Если lib\windows телефонный справочник уже содержит файл CordovaWP7\_x\_x_x.zip, то вы можете пропустить этот шаг.

Чтобы упростить процесс разработки, Кордова поставляется с сценарий для создания шаблонов Visual Studio. Это позволяет для быстрого создания приложений Cordova внутри Visual Studio. Этот шаблон может быть изменен при необходимости и ниже шаги свидетельствуют о том, как поступить, если вы хотите создать шаблон.

### Запустите пакетный файл для создания и установки шаблонов.

*   Корень репо содержит файл createTemplates.bat. Дважды щелкнув этот файл будет генерировать 2 ZIP-файлов. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip, где ХХХ это номер текущей версии) Легко использовать эти файлы в Visual Studio, копировать их «Мои документы\Visual Studio 2012\Templates\ProjectTemplates\» вы затем сможете для создания новых приложений Apache Cordova Windows Phone из файла Visual Studio-> меню новый проект.

*   Если вы запустите пакетный файл из командной строки, вы также можете позвонить с параметром для автоматической установки

Запустите сценарий:

    >createTemplates.bat -install


## 3. Установите новый проект

*   Откройте Visual Studio Express для Windows Phone и выберите **Новый проект**.

*   Выберите **CordovaWP7**. (Номер версии отображается в описании шаблона.)

*   Присвойте проекту имя и нажмите **OK**.

## 4. Обзор структуры проекта

*   `www`Каталог содержит ваше Cordova `html/js/css` и любые другие ресурсы, включенные в вашем приложении.

*   Любое содержание, которое вы добавляете, здесь должен быть частью проекта Visual Studio, и он должен быть задан как содержание.

*   Примечание: Этот захват экрана от wp8 cordova-2.3.0 скачать, ваше объявление будет зависеть от фактической версии.

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 6. Создайте свой проект для устройства

Для тестирования приложения на устройстве, устройство должны быть зарегистрированы. Нажмите [здесь][6] для чтения документации по развертыванию и тестированию на вашем Windows Phone 7.

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Убедитесь, что ваш телефон подключен, и экран разблокирован.

*   В Visual Studio выберите «Устройство» в верхнем раскрывающемся меню.

*   Нажмите на зеленый **играть** кнопку рядом с основной раскрывающееся меню, чтобы начать отладку, или введите **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Договорились!
