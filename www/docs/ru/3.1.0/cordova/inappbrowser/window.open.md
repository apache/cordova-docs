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

# window.open

Открывает URL-адрес в новой `InAppBrowser` например, текущий экземпляр браузера или браузера системы.

    var ref = window.open(url, target, options);
    

*   **ссылка**: ссылка для `InAppBrowser` окно. *(InAppBrowser)*

*   **URL**: URL-адрес для загрузки *(String)*. Вызвать `encodeURI()` на это, если URL-адрес содержит символы Unicode.

*   **Цель**: цель для загрузки URL-адреса, необязательный параметр, по умолчанию `_self` . *(Строка)*
    
    *   `_self`: Открывается в Cordova WebView, если URL-адрес в белый список, в противном случае он открывается в`InAppBrowser`.
    *   `_blank`: Открывает в`InAppBrowser`.
    *   `_system`: Открывается в веб-браузера системы.

*   **опции**: параметры для `InAppBrowser` . Необязательный параметр, виновная в: `location=yes` . *(Строка)*
    
    `options`Строка не должна содержать каких-либо пустое пространство, и каждая функция пар имя/значение должны быть разделены запятой. Функция имена нечувствительны к регистру. Все платформы поддерживают исходное значение:
    
    *   **Расположение**: равным `yes` или `no` превратить `InAppBrowser` в адресную строку или выключить.
    ## Андроид только
    
    *   **closebuttoncaption** - задать строку, которая будет заголовок для кнопки "Готово". 
    *   **скрытые** - присвоено значение 'yes', чтобы создать браузера и загрузки страницы, но не показать его. Событие load будет срабатывать, когда загрузка завершена. Опустить или значение «нет» (по умолчанию) иметь браузера открыть и загрузить нормально. 
    *   **clearcache** - присвоено значение 'yes', чтобы иметь кэш браузера cookie очищается перед открытием нового окна
    *   **clearsessioncache** - значение 'yes', чтобы сессии куки кэш очищается перед открытием нового окна
    ## iOS только
    
    *   **closebuttoncaption** - задать строку, которая будет заголовок для кнопки "Готово". Обратите внимание, что вам будет необходимо локализовать это значение самостоятельно.
    *   **скрытые** - присвоено значение 'yes', чтобы создать браузера и загрузки страницы, но не показать его. Событие load будет срабатывать, когда загрузка завершена. Опустить или значение «нет» (по умолчанию) иметь браузера открыть и загрузить нормально. 
    *   **панель инструментов** - набор «да» или «нет», чтобы включение и отключение панели инструментов для InAppBrowser (по умолчанию 'Да')
    *   **enableViewportScale**: значение `yes` или `no` для предотвращения видового экрана, масштабирование через тег meta (по умолчанию`no`).
    *   **mediaPlaybackRequiresUserAction**: значение `yes` или `no` для предотвращения HTML5 аудио или видео от Автовоспроизведение (по умолчанию`no`).
    *   **allowInlineMediaPlayback**: значение `yes` или `no` чтобы разрешить воспроизведение мультимедиа Встроенный HTML5, отображение в окне браузера, а не конкретного устройства воспроизведения интерфейса. HTML `video` элемент должен также включать `webkit-playsinline` атрибут (по умолчанию`no`)
    *   **keyboardDisplayRequiresUserAction**: значение `yes` или `no` чтобы открыть клавиатуру, когда формы элементы получают фокус через JavaScript в `focus()` вызов (по умолчанию`yes`).
    *   **suppressesIncrementalRendering**: значение `yes` или `no` ждать, пока все новое представление содержание полученных до визуализируемого (по умолчанию`no`).
    *   **presentationstyle**: набор `pagesheet` , `formsheet` или `fullscreen` чтобы задать [стиль презентации][1] (по умолчанию`fullscreen`).
    *   **transitionstyle**: набор `fliphorizontal` , `crossdissolve` или `coververtical` чтобы задать [стиль перехода][2] (по умолчанию`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## Поддерживаемые платформы

*   Андроид
*   Ежевика
*   iOS
*   Windows Phone 7 и 8

## Быстрый пример

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>