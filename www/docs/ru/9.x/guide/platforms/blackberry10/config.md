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

title: Конфигурация BlackBerry 10
---

# Конфигурация BlackBerry 10

Файл `config.xml` управляет основные параметрами приложения, которые применяются к каждому приложению и экземпляру CordovaWebView. Этот раздел описывает настройки, которые применяются только к BlackBerry 10. Смотрите [Файл config.xml][1] для получения информации о глобальных параметрах конфигурации.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `ChildBrowser` (`disable` или значение по умолчанию `enable` ): отключает дочерние окна браузера. По умолчанию приложения запускает окно вторичного браузера для отображения ресурсов, через `window.open()` или указав `_blank` в качестве целевого объекта привязки. Укажите `disable` чтобы переопределить это поведение по умолчанию.
    
        <preference name="ChildBrowser" value="disable"/>
        
*   `PopupBlocker` (`enable` или значение по умолчанию `disable` ): Включает блокировщик всплывающих окон, который предотвращает вызовы `window.open()` . По умолчанию всплывающие окна отображаются во второстепенном окне браузера. Установка предпочтение `enable` предотвращает отображение на всех.
    
        <preference name="PopupBlocker" value="enable"/>

*   `WebSecurity` (`disable` или значение по умолчанию `enable` ): значение `disable` для переопределения параметров веб-безопасности, позволяя доступ к удаленному содержимому из неизвестных источников. Эта настройка предназначена только для удобства разработки только, так что удалите его перед упаковкой приложения для распространения. Для опубликованных приложений, все URI должен быть известны и разрешены с использованием `<access>` элемента, описанный в разделе "[Инструкция по доступу к внешним ресурсам](../../appdev/whitelist/index.html)".
    
        <preference name="WebSecurity" value="disable"/>