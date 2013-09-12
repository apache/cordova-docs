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

# Конфигурации ежевики 10

`config.xml`Файл управляет различные параметры Cordova. Они распространяются через приложение. `config.xml`Файл расположен в `<project folder>/<www>` каталог.

## `<preference>`

Различные предпочтения (как `<preference>` теги) по умолчанию на не нарушая существующие приложения. Доступные настройки являются:

*   `autoHideSplashScreen`: ( `true` или `false` ): значение `false` для управления, когда splashscreen скрыто через JavaScript API. Этот параметр по умолчанию равно true.

*   `backgroundColor`: Указывает цвет фона вашего приложения. Значение необходимо указать значение цвета в ARGB-формате точек, с помощью 8 шестнадцатеричных цифр.

*   `childBrowser`: Отключает дочерних окон браузера. По умолчанию, когда содержание пытается открыть ресурс в новом окне или вкладке (с помощью window.open(), или указав `_blank` качестве целевого объекта привязки), WebWorks app откроет окно вторичного браузера для отображения ресурса. Эта функция включена по умолчанию. Необходимо указать значение `disable` для предотвращения вышеуказанных действий от происходящих.

*   `hideKeyboardFormAccessoryBar`: ( `enable` или `disable` ) отключает форма аксессуар панель клавиатуры в HTML-форме. Клавиатуры формы аксессуар бар находится ряд кнопок (предыдущий, следующий и отправить), которые пользователь может использовать для навигации по форме. По умолчанию когда приложение WebWorks содержит HTML-форму и Ан `<input>` элемент получает фокус, WebWorks отображает этот аксессуар бар формы. Эта функция позволяет запретить отображение панели формы аксессуар, указав значение как ваше приложение`enable`.

*   `orientation`: ( `auto` , `portrait` , или `landscape` ) определяет постоянные ориентацию для экранов в вашем приложении. По умолчанию если не указать ориентацию экрана, ориентация установлен на авто.

*   `popupBlocker`: Позволяет блокировщик всплывающих окон. По умолчанию все всплывающие окна отображаются apps ежевики WebWorks в дочернем окне браузера. Всплывающие окна могут запретить отображение без вмешательства пользователя, позволяя блокировщик всплывающих окон. Это делается путем указания значения как`enable`.

*   `webSecurity`: Отключает веб-безопасности. Отключение веб-безопасности позволяет вам получить доступ к удаленному содержимому из неизвестных источников во время разработки. Перед упаковкой приложение для распространения, вы должны удалить этот параметр. Эта функция предназначена только для удобства разработки. В производстве, должны быть известны все URI и должен whitelisted с использованием `<access>` элемент. Чтобы отключить, укажите значение`disable`.