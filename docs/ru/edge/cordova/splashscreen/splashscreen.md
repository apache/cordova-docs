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

# Экран-заставка

> Отображает и скрывает экран-заставку приложения.

## Методы

*   splashscreen.show
*   splashscreen.hide

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   iOS (в`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. Смотрите поддержку платформы обзор.

## Установка

### Андроид

1.  Скопировать изображение экрана-заставки в Android-проект `res/drawable` каталог. Размер для каждого изображения должны быть:

*   девочки (xhdpi): по крайней мере 960 × 720
*   большой (hdpi): по крайней мере 640 × 480
*   Средний (mdpi): по крайней мере 470 × 320
*   малые (ldpi): по крайней мере 426 × 320
    
    Следует использовать [9-патч изображение][1] для экрана-заставки.

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  В `onCreate` метод класса, который расширяет `DroidGap` , добавьте следующие две строки:
    
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);
        
    
    Первая строка задает изображение для отображения в виде splashscreen. Если имя изображения ничего не `splash.png` , вам необходимо изменить эту строку. Вторая строка является нормальной `super.loadUrl` линию, но он имеет второй параметр, который указывает значение времени ожидания для экрана-заставки. В этом примере экран-заставка отображается 10 секунд. Чтобы закрыть экран-заставка после этого приложение получает `deviceready` событий, вызов `navigator.splashscreen.hide()` метод.

### iOS

Скопируйте ваши изображения экрана заставки в iOS проект `Resources/splash` каталог. Добавьте только изображения для устройств, которые вы хотите поддерживать, такие как iPad или iPhone. Размер каждого изображения должны быть:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048x1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)