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

title: Иконки и заставки
---

# Иконки и заставки

В этом разделе показано, как настроить значок приложения и Факультативного заставка для различных платформ, как при работе в Cordova CLI (описанный в интерфейс командной строки) или с помощью средств SDK платформы (подробные руководства платформы).

## Настройка значков в CLI

При работе в CLI, значок исходные файлы расположены в различные платформы-подкаталогов в рамках проекта `www/res/icons` каталог. Вновь созданный проекты приходят с набором по умолчанию иконки Cordova для вас заменить для платформ, которые вы хотите цели.

Андроид указывает иконки для низкого, среднего, высокого и сверхвысокого резолюций:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

Платформа iOS указывает 72 пикселя иконок для iPads и 57-пиксель иконки для iPhones и плеерах, с высоким разрешением *2 x* варианты для сетчатки отображает:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone указывает значок по умолчанию 48 пикселей, наряду с различных устройств фона плитки изображений, используемых при представлении приложения:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

Ежевика требуется 80-пиксель значок:

        blackberry/icon-80.png
    

Tizen требует 128-пиксель значок:

        tizen/icon-128.png
    

## Настройка заставки в CLI

Используйте Splashscreen API для включения отображения приложения вступительной заставки на многих платформах. При работе в CLI, заставки экрана исходные файлы расположены в рамках проекта `www/res/screens` подкаталог.

Андроид указывает оба ориентированных на портрет и пейзаж заставки экрана изображения для низкого, среднего, высокого и сверхвысокого резолюций:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

Платформа iOS указывает варианты для iPhone/iPod и iPad, с вариантами для retina дисплеев и различными ориентациями. *568 H* файл настроен для iPhone 5 выше экрана:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

BlackBerry и Windows Phone указать один заставки экрана:

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg
    

В следующих разделах подробно Настройка заставки, когда работы с SDK и связанных с ними средств командной строки описаны в руководствах по платформе.

## Экраны-заставки для платформы Android

Поместить файлы [изображений 9-патч][1] в Android-проекта `res/drawable` каталог. Размер для каждого должен быть:

 [1]: https://developer.android.com/tools/help/draw9patch.html

*   девочки (xhdpi): по крайней мере 960 × 720
*   большой (hdpi): по крайней мере 640 × 480
*   Средний (mdpi): по крайней мере 470 × 320
*   малые (ldpi): по крайней мере 426 × 320

В `config.xml` , добавьте следующие настройки:

    <preference name="splashscreen", "splash" />
    <preference name="splashScreenDelay", 10000 />
    

Первая строка задает изображение для отображения в качестве экрана-заставки. Если имя изображения ничего не `splash.png` , вам необходимо изменить эту строку.

Вторая строка задает задержку в миллисекундах появляется как долго splashscreen. Чтобы [закрыть](../cordova/inappbrowser/inappbrowser.html) экран-заставка после этого приложение получает `[deviceready](../cordova/events/events.deviceready.html)` событий, вызов `navigator.splashscreen.hide()` метод.

## Экраны-заставки для платформы iOS

Скопируйте ваши изображения экрана заставки в iOS проект `Resources/splash` каталог. Добавьте только изображения для устройств, которые вы хотите поддерживать, такие как iPad или iPhone. Размер каждого изображения должны быть:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 пикселей)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Экраны-заставки для платформы BlackBerry 10

Скопируйте ваши изображения экрана заставки в проект `res/screen/blackberry10` каталог. Имена файлов должны быть:

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)