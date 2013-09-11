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

# iOS конфигурации

`config.xml`Файл параметров контролирует различные параметры Cordova. Это применение широкого и не задано для каждого экземпляра CDVViewController. `config.xml`Файл расположен в вашем `<project folder>/<appname>` каталог.

## `<preference>`

Различные предпочтения (как `<preference>` теги) по умолчанию на не нарушая существующие приложения. Доступные настройки являются:

*   `DisallowOverscroll`(логическое значение, по умолчанию `false` ): набор `true` Если вы не хотите WebView для резиновой.

*   `TopActivityIndicator`(строка, по умолчанию `gray` ): это топ спиннинг throbber в строке статуса батареи, допустимые значения находятся в `whiteLarge` , `white` , и`gray`.

*   `EnableLocation`(логическое значение, по умолчанию `false` ): присвоено значение `true` , чтобы инициализировать модуль геолокации на начальном этапе (таким образом исправить на ваше местоположение может быть более точным) **DEPRECATED**: пожалуйста, установите `onload` атрибут `Geolocation` плагин для `true` вместо этого.

*   `EnableViewportScale`(логическое значение, по умолчанию `false` ): значение `true` для предотвращения масштабирования через мета-тег viewport.

*   `AutoHideSplashScreen`(логическое значение, по умолчанию `true` ): значение `false` для управления, когда splashscreen скрыто через JavaScript API.

*   `FadeSplashScreen`(логическое значение, по умолчанию `true` ): значение `false` для предотвращения экрана заставки для появления и исчезновения при отображении или скрытии его.

*   `FadeSplashScreenDuration`(float, значение по умолчанию 2): длительность затухания экрана заставки в секундах.

*   `ShowSplashScreenSpinner`(логическое значение, по умолчанию `true` ): значение `false` чтобы скрыть счетчик экрана заставки.

*   `MediaPlaybackRequiresUserAction`(логическое значение, по умолчанию `false` ): значение true, чтобы не позволить autoplayed HTML5 видео.

*   `AllowInlineMediaPlayback`(логическое значение, по умолчанию `false` ): значение true, чтобы разрешить воспроизведение мультимедиа Встроенный HTML5, Кроме того, видео элемент в HTML-документе должны также включать атрибут webkit-playsinline.

*   `BackupWebStorage`(строка, по умолчанию `cloud` ): допустимые значения `none` , `cloud` и `local` . Установите `cloud` Разрешить веб-хранения данных для резервного копирования iCloud и значение `local` Разрешить только локальных бекапов (iTunes sync). Значение `none` не позволить все резервные копии веб-хранилища.

*   `KeyboardDisplayRequiresUserAction`(логическое значение, по умолчанию `true` ): значение false чтобы открыть клавиатуру, когда элементы формы получают фокус через вызов focus() JavaScript.

*   `SuppressesIncrementalRendering`(логическое значение, по умолчанию `false` ): набор значение true, чтобы подождать, пока все новые просматривать контент был получен до его отображения.

*   `HideKeyboardFormAccessoryBar`(логическое значение, по умолчанию `false` ): установите значение true, чтобы скрыть дополнительную панель инструментов, которая находится на верхней части клавиатуры. Эта панель инструментов есть кнопки **Предыдущая**, **Следующая**и **сделали** .

*   `KeyboardShrinksView`(логическое значение, по умолчанию `false` ): присвоено `true` уменьшить WebView, когда клавиатура идет. WebView сжимает вместо уменьшения видового экрана и прокручиваемой страницы. Это относится к приложениям, которые бы их элементов по отношению к нижней части WebView. Это поведение по умолчанию на Android и делает много смысла, при построении приложений в отличие от веб-страниц.