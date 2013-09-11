---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android конфигурации

`config.xml`Файл управляет различные параметры Cordova. Они распространяются через приложение и для каждого экземпляра CordovaWebView.

## `<preference>`

Различные другие предпочтения (как `<preference>` теги) по умолчанию на не нарушая существующие приложения. Доступные настройки являются:

*   `useBrowserHistory`(логическое значение, по умолчанию `true` ): набор `false` Если вы хотите использовать прокладку истории, которая была использована для обойти в Android 3.x до истории исправить ошибку хэштэг. (Примечание: этот параметр будет считаться устаревшей в апреле 2013 года)

*   `loadingDialog`: Отображать диалоговое окно родной загрузки при загрузке приложения. Формат значения является *название, сообщение*

*   `loadingPageDialog`: Отображать диалоговое окно родной загрузки при загрузке суб-страниц. Формат значения является *название, сообщение*

*   `errorUrl`: Задайте страницу ошибки для вашего приложения. Должен находиться в вашем Android-проект в`file://android_asset/www/`

*   `backgroundColor`: Задайте цвет фона для вашего приложения. Поддерживает шестнадцатеричное значение размером 4 байта, с первый байт, представляющий значение альфа-канала и следующие три байта с стандартные значения RGB. Например `0x00000000` черный.

*   `loadUrlTimeoutValue`: Сколько времени Cordova должен ждать, прежде чем бросать ошибка времени ожидания в приложении.

*   `keepRunning`(логическое значение, по умолчанию `true` ): определяет, является ли Cordova остается в фоновом режиме.

*   `splashscreen`: Имя файла минус его продление в `res/drawable` каталог. Если у вас есть несколько ресурсов, все они должны поделиться это общее название в соответствующие каталоги.

*   `disallowOverscroll`(логическое значение, по умолчанию `false` ): набор `true` Отключить свечения, когда пользователь прокручивает за пределы края webview.

## `<plugin>`

Android поддерживает использование `<feature>` как аналогов `<plugin>` элементов.