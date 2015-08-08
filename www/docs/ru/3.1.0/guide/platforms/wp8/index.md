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

# Руководство по платформы Windows Phone 8

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для устройств Windows Phone 8. Если вы хотите 7,5 и 8 устройств, разработка для Windows Phone 7 вместо подробно в Windows Phone 7 Руководство по платформы. Версия 7 не имеют все расширенные функции, включенные в IE10, но реализует тот же набор API-интерфейсов. Приложения Windows Phone 8 делать *не* запускаются на устройствах Windows Phone 7.

Смотрите ниже для более подробной информации конкретной платформы, которая применяется для обеих версий:

*   Обновление Windows Phone
*   Windows Phone плагины
*   Windows Phone средств командной строки

Средства командной строки относятся к версии до Cordova 3.0. Сведения о текущем интерфейсе см интерфейс командной строки.

## 1. Системные требования

*   Операционная система:

    *   Windows 8 или Windows 8 Pro
        *   Для SDK требуется 64-разрядная версия (x 64) Windows.
        *   Рекомендуется использовать версию Pro, так что вы можете запустить эмулятор устройства.

*   Аппаратное обеспечение:

    *   6,5 ГБ свободного дискового пространства
    *   4 ГБ ОПЕРАТИВНОЙ ПАМЯТИ
    *   64-разрядный (x 64) процессор

*   Эмулятор Windows Phone 8

    *   Телефон Эмулятор использует Hyper-V, поэтому этот список включает те предпосылки.
    *   Про 64-разрядная версия Windows 8 или больше
    *   Требуется процессор поддерживает виртуализацию и [Второй перевод адреса уровня (SLAT)][1]
        *   Смотрите [список процессоров Intel, которые поддерживают VT-x (виртуализация) и EPT (SLAT)][2]
    *   Включите возможность виртуализации (например, VT-x на Intel) в настройках BIOS, как обычно, эта возможность отключена по умолчанию.

*   SDK + IDE (Visual Studio)

    *   Visual Studio 2012 Professional, Premium или Ultimate. Обратите внимание что Visual Studio Express для Windows Phone (входит в пакет SDK) не рекомендуется, потому что вы не можете построить шаблон (см. ниже) с VS Express, как он не имеет функциональность **Экспорт шаблона** , который является только в VS Pro или выше.

*   Зарегистрироваться и оплатить для учетной записи [Windows Phone Dev центр][3] , если вы хотите установить приложение на реальном устройстве или представить его на рынке.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Примечание:** Запуск пакета SDK в виртуальной машине может представлять определенные трудности. Вы можете читать этот блог, который дает представление о решениях по разработке для [Windows Phone на Mac][4].

 [4]: http://aka.ms/BuildaWP8apponaMac

## 2. Установить SDK + Кордова

*   Скачать и установить [Windows Phone SDK][5]

*   Загрузите и распакуйте последнюю копию [Cordova][6]. Вы будете работать `lib\windows-phone-8\wp8` подкаталог, `lib\windows-phone-8\wp7` содержит версию Windwos 7 Телефон Cordova.

*   Копия `CordovaWP8_x_x_x.zip` файл `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` каталог.

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [6]: http://phonegap.com/download

## 2.1. Создание шаблона

**Примечание:** этот шаг может не потребоваться. Если lib\windows телефонный справочник уже содержит файл CordovaWP8\_x\_x_x.zip, то вы можете пропустить этот шаг.

Чтобы упростить процесс разработки, Кордова поставляется с сценарий для создания шаблонов Visual Studio. Это позволяет для быстрого создания приложений Cordova внутри Visual Studio. Этот шаблон может быть изменен при необходимости и ниже шаги свидетельствуют о том, как поступить, если вы хотите создать шаблон.

### Запустите пакетный файл для создания и установки шаблонов.

*   Корень репо содержит файл createTemplates.bat. Дважды щелкнув этот файл будет генерировать 2 ZIP-файлов. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip, где ХХХ это номер текущей версии) Легко использовать эти файлы в Visual Studio, копировать их «Мои документы\Visual Studio 2012\Templates\ProjectTemplates\» вы затем сможете для создания новых приложений Apache Cordova Windows Phone из файла Visual Studio-> меню новый проект.

*   Если вы запустите пакетный файл из командной строки, вы также можете позвонить с параметром для автоматической установки

Запустите сценарий:

    >createTemplates.bat -install


## 3. Установите новый проект

*   Откройте Visual Studio Express для Windows Phone и выберите **Новый проект**.

*   Выберите **CordovaWP8**. (Номер версии отображается в описании шаблона.)

*   Присвойте проекту имя и нажмите **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## 4. Обзор структуры проекта

*   `www`Каталог содержит ваше Cordova `html/js/css` и любые другие ресурсы, включенные в вашем приложении.

*   Любое содержание, которое вы добавляете, здесь должен быть частью проекта Visual Studio, и он должен быть задан как содержание.

*   Примечание: Этот захват экрана от Кордова-2.3.0 скачать, ваше объявление будет зависеть от фактической версии.

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 5. Построение и развертывание в эмулятор

*   Убедитесь, что в главном меню раскрывающегося списка выбран **Эмулятор Windows Phone** .

*   Нажмите на зеленый **играть** кнопку рядом раскрывающегося меню, чтобы начать отладку, или введите **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## 6. Создайте свой проект для устройства

Для тестирования приложения на устройстве, устройство должны быть зарегистрированы. Нажмите [здесь][10] для чтения документации по развертыванию и тестированию на вашем Windows Phone 8.

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Убедитесь, что ваш телефон подключен, и экран разблокирован.

*   В Visual Studio выберите «Устройство» в верхнем раскрывающемся меню.

*   Нажмите на зеленый **играть** кнопку рядом с основной раскрывающееся меню, чтобы начать отладку, или введите **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Договорились!

## Дальнейшее чтение

Для более подробной информации о конкретных различий между IE10 и WebKit браузерах и как поддерживать оба MS имеет полезное [руководство здесь][12]

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
