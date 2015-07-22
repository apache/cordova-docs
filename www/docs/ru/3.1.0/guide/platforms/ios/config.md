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

title: iOS конфигурации
---

# iOS конфигурации

`config.xml`[Файл](../../../cordova/file/fileobj/fileobj.html) управляет app основные параметры, которые применяются через каждое приложение и экземпляр CordovaWebView. Этот раздел описывает настройки, которые применяются только к iOS построений. Смотрите информацию в файле config.xml на параметры глобальной конфигурации.

*   `EnableViewportScale`(логическое значение, по умолчанию `false` ): набор `true` использовать мета-тег viewport либо отключить или ограничить диапазон масштабирования пользователя.
    
        <preference name="EnableViewportScale" value="true"/>
        

*   `MediaPlaybackRequiresUserAction`(логическое значение, по умолчанию `false` ): набор `true` чтобы запретить автоматическое воспроизведение с HTML5 видео `autoplay` атрибут. Не применяется при вызове `play()` на объект video.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(логическое значение, по умолчанию `false` ): набор `true` чтобы разрешить воспроизведение мультимедиа HTML5 появляться *inline* в пределах экрана, с помощью элементов управления браузера поставляется, а не собственные элементы управления. Для этой работы, добавить `webkit-playsinline` атрибута к любому `<video>` элементов.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(строка, либо `none` , `local` , или значение по умолчанию `cloud` ): набор `cloud` чтобы разрешить веб-хранения данных для резервного копирования через iCloud. Установите `local` Разрешить только в местных резервные копии через iTunes синхронизации. Установите `none` предотвратить веб хранения резервных копий.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(строка, по умолчанию `gray` ): контролирует появление небольшой вращающийся значок в строке состояния, указывающее активность значительные процессора. Допустимыми значениями являются `whiteLarge` , `white` , и`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `FadeSplashScreen`(логическое значение, по умолчанию `true` ): значение `false` для предотвращения выцветания и при изменении его состояния отображения экрана-заставки.
    
        <preference name="FadeSplashScreen" value="false"/>
        

*   `FadeSplashScreenDuration`(float, значение по умолчанию `2` ): указывает количество секунд для экрана-заставки исчезать эффект для выполнения.
    
        <preference name="FadeSplashScreenDuration" value="4"/>
        

*   `ShowSplashScreenSpinner`(логическое значение, по умолчанию `true` ): значение `false` чтобы скрыть счетчик экрана заставки.
    
        <preference name="ShowSplashScreenSpinner" value="false"/>
        

*   `KeyboardDisplayRequiresUserAction`(логическое значение, по умолчанию `true` ): набор `false` Разрешить клавиатуры появляться при вызове `focus()` на форм ввода.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(логическое значение, по умолчанию `false` ): установите `true` ждать, пока все содержимое был получен до того, как он отображается на экране.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `KeyboardShrinksView`(логическое значение, по умолчанию `false` ): набор `true` сократить webview, когда клавиатура появляется, переопределение по умолчанию beavior, которое уменьшает размер окна просмотра по вертикали. Это соответствует поведение по умолчанию для приложений Android.
    
        <preference name="KeyboardShrinksView" value="true"/>
        

*   `GapBetweenPages`(float, значение по умолчанию `` ): размер промежутка в точках между страницами.
    
        < предпочтение имя = значение «GapBetweenPages» = «0» / >
        

*   `PageLength`(float, значение по умолчанию `` ): размер каждой страницы в точках, в направление потока страниц. Когда PaginationMode справа налево или слева направо, это свойство представляет ширину каждой страницы. Когда PaginationMode topToBottom или bottomToTop, это свойство представляет высоту каждой страницы. Значение по умолчанию равно 0, что означает, что макет использует размер окна просмотра, чтобы определить размеры страницы.
    
        < предпочтение имя = значение «PageLength» = «0» / >
        

*   `PaginationBreakingMode`(строка, по умолчанию `page` ): допустимые значения `page` и `column` .Порядок, в котором происходит разрыв столбца или страницы. Это свойство определяет заслуженный или проигнорированы некоторых свойств CSS относительно разрыва столбца и страницы. Когда это свойство имеет значение `column` , содержание уважает CSS свойства, относящиеся к колонке ломать в месте разрыва страницы.
    
        < предпочтение имя = значение «PaginationBreakingMode» = «страницы» / >
        

*   `PaginationMode`(строка, по умолчанию `unpaginated` ): допустимые значения `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , и `rightToLeft` . Это свойство определяет, является ли содержимое в представлении веб-разбиты на страницы, которые заполняют экран один в то время, или показан как один длинный прокрутки представления. Если набор в разбитой на страницы форме, это свойство переключает разбитого на страницы макета на контент, вызывая веб-представлении значения PageLength и GapBetweenPages для relayout использовать его содержание.
    
        < предпочтение имя = значение «PaginationMode» = «unpaginated» / >