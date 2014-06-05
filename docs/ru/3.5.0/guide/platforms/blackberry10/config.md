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

# Настройка blackBerry 10

`config.xml`Файл управляет app основные параметры, которые применяются через каждое приложение и экземпляр CordovaWebView. Этот раздел Подробности настройки, которые применяются только к BlackBerry 10 строит. Смотрите информацию в файле config.xml на параметры глобальной конфигурации.

*   `ChildBrowser`( `disable` или значение по умолчанию `enable` ): отключает дочерних окон браузера. По умолчанию приложения запустить окно вторичного браузера для отображения ресурсов, через `window.open()` или указав `_blank` целевого объекта привязки. Укажите `disable` переопределить это поведение по умолчанию.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` или значение по умолчанию `disable` ): позволяет блокировщик всплывающих окон, который предотвращает вызовы `window.open()` . По умолчанию всплывающие окна отображаются в окне браузера ребёнка. Установка предпочтение `enable` предотвращает отображение на всех.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` или значение по умолчанию `enable` ): значение `disable` для переопределения параметров веб-безопасности, позволяя доступ к удаленному содержимому из неизвестных источников. Это предпочтение предназначен как для удобства разработки только, так что удалить его перед упаковкой приложение для распространения. Для выпущенных app, все URI должен быть известный и whitelisted с использованием `<access>` элемент, описанный в руководстве Whitelist домена.
    
        <preference name="WebSecurity" value="disable"/>