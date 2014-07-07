* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Иконки и заставки

В этом разделе показано, как настроить иконку приложения и дополнительные заставки для различных платформ, как при работе с Cordova CLI (описано в разделе Интерфейс Командной Строки) так и с помощью средств SDK специфических для платформы (подробнее в разделе Руководстве по поддерживаемым платформам).

## Настройка иконок в CLI

Когда работает в CLI вы можете определить app icon(s) через `<icon>` элемент ( `config.xml` ). Если значок не задан, то используется Apache Cordova логотип.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src: (обязательно) указывает расположение файла изображения, относительно каталога проекта

Платформа: (необязательно) Целевая платформа

ширина: (необязательно) значок ширина в пикселях

Высота: (необязательно) значок высота в пикселях

Плотность: (опционально) android конкретные, указывает значок плотности

Следующая конфигурация может использоваться для определения единого по умолчанию значок, который будет использоваться для всех платформ.

        <icon src="res/icon.png" />
    

Для каждой платформы можно также определить идеальное значков, заданных для различных разрешений экрана.

Amazon Fire ОС

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Android

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Blackberry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

Смотрите документацию BlackBerry при ориентировании на набор различных размеров и языков. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## Настройка заставки с помощью CLI

Используйте Splashscreen API для включения отображения приложения заставки на различных платформах. При работе в CLI, исходные файлы заставки расположены в рамках подкаталоге `www/res/screens` проекта.

Android указывает два набора заставок ориентированных на портретную и альбомную ориентацию, для низкого, среднего, высокого и сверхвысокого разрешения:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

Платформы iOS определяет варианты для iPhone/iPod и iPad, с вариантами для retina дисплеев в различных ориентациях. *568 H* файл относится к более продолговатому экрану iPhone 5:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone определяет только один вариант заставки:

        windows-phone/screen-portrait.jpg
    

В следующих разделах раскрывается как настроить заставки, когда работаешь с использованием SDK и связанных с ними средств командной строки описанных в Руководстве по платформам.

Не забудьте установить плагин SplashScreen перед тем как использовать методы `navigator.splashscreen.hide()` или `navigator.splashscreen.show()`.

## Заставки для платформы Android

Разместите файлы [изображения 9-patch][1] в директории `platforms/android/res/drawable*` проекта на Android.

 [1]: https://developer.android.com/tools/help/draw9patch.html

Размер для каждой директории должен быть следующим:

*   xlarge (xhdpi): по крайней мере 960 × 720
*   large (hdpi): по крайней мере 640 × 480
*   medium (mdpi): по крайней мере 470 × 320
*   small (ldpi): по крайней мере 426 × 320

При создании нового проекта Android, изображения заставки по умолчанию, предоставляемые базовым приложение Cordova уже должны присутствовать в каталогах `platforms/android/res/drawable*`. Вы можете заменить их вашими собственными изображениями. При указании своих собственных заставок, вы не обязаны предоставлять все те же 8 изображений, которые предоставляет Cordova. Более или менее оптимизация может быть использована. Имена под-директорий в директории `drawable` должны соответствовать конвенциям Android для поддержки [различных размеров экранов][2] и [файлов ресурсов][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

В файле верхнего уровня `config.xml` (не в том который находится в `platforms`) добавьте следующие параметры:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

Первая строка указывает изображение которое отображать в качестве заставки. Это имя файла png в каталогах `drawable*`, без расширения `.png`. Значения по умолчанию для заставки - `screen` (для файла `platforms/android/res/drawable*/screen.png`), так что если вы дадите изображениям другие названия, отличные от `screen.png` в каталогах `drawable*`, вам необходимо добавить/модифицировать эту линию.

Вторая строка устанавливает задержку по умолчанию, как долго заставка будет отображаться в миллисекундах. Значение должно содержать максимальное ожидаемое время загрузки приложение. Значение по умолчанию для SplashScreenDelay - 3000мс.

Наконец, в качестве стандартной практики заставка должен присутствовать не дольше чем это необходимо. Когда ваше приложение запустилось и webview был загружен, ваше приложение должно скрывать заставку чтобы ваше главный экран становился видимым, сразу после того как он готов к использованию. Из-за того что время запуска приложения может достаточно сильно различаться из-за разных факторов, рекомендуется чтобы ваше приложение явно вызывало `navigator.splashscreen.hide()` в методе JavaScript который обрабатывает событие `deviceready`. В противном случае заставка будет видимым в течении количества миллисекунд указанных в параметре SplashScreenDelay, которое вы указали выше, это значение вероятно, больше, чем это необходимо. Этот событийно ориентированный подход, крайне рекомендуется в отличие от отображения заставки в течении фиксированного промежутка времени.

## Заставки для платформы iOS

Скопируйте изображения заставки в каталог `Resources/splash` проекта iOS. Добавьте изображения только для тех устройств, которые вы хотите поддерживать, например iPad или iPhone. Размер каждого изображения должны быть:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048x1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Заставки для платформы BlackBerry 10

Добавьте элемент rim:splash в config.xml для каждого разрешения и локали, которые вы хотите поддерживать:

[http://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html