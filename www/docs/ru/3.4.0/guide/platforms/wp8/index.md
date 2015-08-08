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

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для устройств Windows Phone 8. Если вы хотите 7,5 и 8 устройств, разработка для Windows Phone 7 вместо подробно в Windows Phone 7 руководство платформы. Версия 7 не имеют всех продвинутых функций, включенных в Internet Explorer 10, но реализует тот же набор API-интерфейсов. Приложения Windows Phone 8 делать *не* запускаются на устройствах Windows Phone 7.

Смотрите ниже для более подробной информации конкретной платформы, которая применяется для обеих версий:

*   Обновление Windows Phone
*   Windows Phone плагины
*   Windows Phone средств командной строки

Средства командной строки относятся к версии до 3.0 Кордова. Смотрите информацию о текущем интерфейсе интерфейс командной строки.

## Системные требования

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

*   SDK и IDE (Visual Studio)

    *   Visual Studio 2012 Professional, Premium или Ultimate. Обратите внимание что Visual Studio Express для Windows Phone (входит в пакет SDK) не рекомендуется, потому что вы не можете построить шаблон (см. ниже) с VS Express, как он не имеет функциональность **Экспорт шаблона** , который является только в VS Pro или выше.

*   Зарегистрироваться и оплатить для учетной записи [Windows Phone Dev центр][3] , если вы хотите установить приложение на реальном устройстве или представить его на рынке.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Примечание**: выполнение пакета SDK в виртуальной машине может представлять определенные трудности. Вы можете читать этот блог, который дает представление о решениях по разработке для [Windows Phone на Mac][4].

 [4]: http://aka.ms/BuildaWP8apponaMac

## Установить SDK и Кордова

Скачать и установить [Windows Phone SDK][5].

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471

Загрузите и распакуйте последнюю копию [Кордова][6]. `lib\windows-phone-8\wp8`Подкаталог, где вы должны сделать вашу работу.

 [6]: http://phonegap.com/download

Копия `CordovaWP8_x_x_x.zip` файл `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` каталог.

## Создание шаблона

**Примечание**: этот шаг пропустить, если `lib\windows-phone` уже содержит каталог `CordovaWP8_x_x_x.zip` файлов.

Для упрощения разработки Cordova расслоения сценарий для создания шаблонов Visual Studio. Они позволяют вам быстро создавать Cordova apps, и при необходимости их можно изменить. Ниже шаги показывают, как создать его.

### Запустите пакетный файл для создания и установки шаблонов

Репо корневой каталог содержит `createTemplates.bat` файл. Дважды щелкните это для создания двух `.zip` файлы: `CordovaWP7_x_x_x.zip` и `CordovaWP8_x_x_x.zip` , где *ххх* — номер текущей версии. Чтобы использовать эти файлы в Visual Studio, скопируйте их в `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\` . Вы могл после этого создание новых приложений Apache Cordova Windows Phone из меню **Visual Studio файл → новый проект** .

Если вы запустите пакетный файл из командной строки, можно также вызвать его с параметром для автоматической установки:

        >createTemplates.bat -install


## Создание нового проекта

Откройте Visual Studio Express для Windows Phone и выберите **Новый проект**.

Выберите **CordovaWP8**. Номер версии отображается в описании шаблона.

Присвойте проекту имя и нажмите **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## Обзор структуры проекта

`www`Каталог функции `html` , `js` , и `css` подкаталоги и любые другие ресурсы требует вашего приложения. Любое дополнительное содержимое должно быть частью проекта Visual Studio, и он должен быть задан как содержание.

Следующий пример структуры представляет собой 2.3.0 проекта, но могут варьироваться в зависимости от установленной версии:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Построение и развертывание в эмулятор

Убедитесь, что **Эмулятор Windows Phone** установлен в главном меню раскрывающегося списка.

Затем нажмите на кнопку зеленую **играть** рядом раскрывающегося меню, чтобы начать отладку, или введите **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## Постройте проект для устройства

Перед тестированием приложения на устройстве, устройство должно быть зарегистрировано. Документации [корпорации Майкрософт][10] сведения о том, как развернуть и протестировать на Windows Phone 8. Таковы основные шаги:

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Убедитесь, что ваш телефон подключен, и экран разблокируется.

*   В Visual Studio выберите **устройство** в раскрывающемся меню в верхней.

*   Нажмите кнопку зеленый **играть** рядом с главного меню раскрывающегося списка для запуска отладки, или же введите **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

На данный момент вы сделали.

## Дальнейшее чтение

Блог разработчиков Windows Phone предоставляет [полезные сведения][12] о различиях между IE10 и WebKit браузеров и как поддержать оба.

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
