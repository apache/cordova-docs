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

title: Windows Phone 8.0 WebViews
---

# Windows Phone 8.0 WebViews

В этом руководстве показано, как внедрить компонент Cordova с поддержкой WebView в другое, большее, приложение Windows Phone 8.0.

Следовать этим инструкциям, убедитесь, что у вас есть дистрибутив последней версии Cordova. Скачать его с [cordova.apache.org](http://cordova.apache.org) и разархивируйте пакет для Windows Phone 8.0 (cordova-wp8-*.zip).

  1. Перейдите к директории `wp8/framework` пакета и соберите решение `WPCordovaClassLib.sln` . Это создаст `Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. Скопируйте файл `WPCordovaClassLib.dll` в каталог `/libs` проект Windows Phone 8 и подключите `WPCordovaClassLib.dll` к вашему проекту через `Project->References->Add Reference` . Кроме того, можно напрямую ссылаться на файл `wp8/framework/WPCordovaClassLib.csproj`.

  3. Добавьте компонент `CordovaView` на страницу (например,`MainPage.xaml`).
    
         xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
         ...
         <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
         StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />

  4. Скопируйте `common/www/cordova.js` и разметите его вместе с HTML и JavaScript файлами приложения в каталоге `html` проекта Windows Phone 8 и добавьте новые файлы в ваш проект.

  5. Скопируйте `wp8/template/config.xml` в корневой каталог проекта и

[Инструкции](../../../index.html) выше подключат только основные компоненты Cordova, см [Использование Plugman для управления расширениями](../../../plugin_ref/plugman.html) для того, чтобы подключить плагины Cordova.