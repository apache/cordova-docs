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

`config.xml`Файл управляет app основные параметры, которые применяются через каждое приложение и экземпляр CordovaWebView. Этот раздел описывает настройки, которые применяются только к iOS построений. Смотрите информацию в файле config.xml на параметры глобальной конфигурации.

*   `EnableViewportScale`(логическое значение, по умолчанию `false` ): набор `true` Разрешить метатег видового экрана либо отключить или ограничить диапазон масштабирования пользователь, который включен по умолчанию.
    
        <preference name="EnableViewportScale" value="true"/>
        
    
    Место просмотра следующих в HTML, чтобы отключить масштабирование и подходят гибко в WebView рендеринга контента:
    
        < мета имя = «просмотра» содержание =' ширина = устройства ширина, первоначальный масштаб = 1, пользователь масштабируемых = no' / >
        

*   `MediaPlaybackRequiresUserAction`(логическое значение, по умолчанию `false` ): набор `true` чтобы запретить автоматическое воспроизведение с HTML5 видео или аудио `autoplay` атрибут или через JavaScript.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(логическое значение, по умолчанию `false` ): набор `true` чтобы разрешить воспроизведение мультимедиа HTML5 появляться *inline* в пределах экрана, с помощью элементов управления браузера поставляется, а не собственные элементы управления. Для этой работы, добавить `webkit-playsinline` атрибута к любому `<video>` элементов.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(строка, либо `none` , `local` , или значение по умолчанию `cloud` ): набор `cloud` чтобы разрешить веб-хранения данных для резервного копирования через iCloud. Установите `local` Разрешить только в местных резервные копии через iTunes синхронизации. Установите `none` предотвратить веб хранения резервных копий.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(строка, по умолчанию `gray` ): контролирует появление небольшой вращающийся значок в строке состояния, указывающее активность значительные процессора. Допустимыми значениями являются `whiteLarge` , `white` , и`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `KeyboardDisplayRequiresUserAction`(логическое значение, по умолчанию `true` ): набор `false` Разрешить клавиатуры появляются при вызове `focus()` на форм ввода.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(логическое значение, по умолчанию `false` ): набор `true` ждать, пока все содержимое был получен до того, как он отображается на экране.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `GapBetweenPages`(float, значение по умолчанию `` ): размер разрыва, в точках, между страницами.
    
        <preference name="GapBetweenPages" value="0"/>
        

*   `PageLength`(float, значение по умолчанию `` ): размер каждой страницы, в точках, в направление потока страниц. Когда PaginationMode — справа налево или слева направо, это свойство представляет ширину каждой страницы. Когда PaginationMode topToBottom или bottomToTop, это свойство представляет высоту каждой страницы. Значение по умолчанию равно 0, что означает, что макет использует размер окна просмотра, чтобы определить размеры страницы.
    
        <preference name="PageLength" value="0"/>
        

*   `PaginationBreakingMode`(строки, по умолчанию `page` ): допустимые значения `page` и `column` .Порядок, в котором происходит разрыв столбца или страницы. Это свойство определяет, заслуженный или игнорируются некоторые CSS свойства относительно разрыва столбца и страницы. Когда это свойство имеет значение `column` , содержание уважает CSS свойства, относящиеся к колонке разрыв в месте разрыва страницы.
    
        <preference name="PaginationBreakingMode" value="page"/>
        

*   `PaginationMode`(строки, по умолчанию `unpaginated` ): допустимые значения `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , и `rightToLeft` . Это свойство определяет ли содержимое в представлении веб-разбиты на страницы, которые заполняют один экран в то время, или как один длинный прокрутки представления. Если набор в разбитой на страницы форме, это свойство Переключение страничного макета на контент, вызывая веб-представление для использования значения PageLength и GapBetweenPages relayout его содержание.
    
        <preference name="PaginationMode" value="unpaginated"/>
        

*   `UIWebViewDecelerationSpeed`(строки, по умолчанию `normal` ): допустимые значения `normal` , `fast` . Это свойство контролирует скорость замедления прокрутки импульса. `normal`по умолчанию скорость для наиболее родные apps, и `fast` является значением по умолчанию для Mobile Safari.
    
        <preference name="UIWebViewDecelerationSpeed" value="fast" />