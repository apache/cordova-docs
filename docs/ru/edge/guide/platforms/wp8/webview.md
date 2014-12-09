* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
    

* * *

# Windows Phone 8.0 WebViews

В этом руководстве показано, как внедрить компонент Cordova с поддержкой WebView в большее приложение Windows Phone 8.0.

Следовать этим инструкциям, убедитесь, что у вас есть дистрибутив последней Кордова. Скачать его с [cordova.apache.org](http://cordova.apache.org) и разархивируйте его пакет Windows Phone 8.0 (cordova-wp8-*.zip).

  1. Перейдите к пакету `wp8/framework` каталог и построить `WPCordovaClassLib.sln` . Это создает`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. Копия `WPCordovaClassLib.dll` файл в Windows Phone 8 проект `/libs` каталог и включают в себя `WPCordovaClassLib.dll` к вашему проекту через `Project->References->Add Reference` . Кроме того, можно напрямую ссылаться `wp8/framework/WPCordovaClassLib.csproj` файл.

  3. Добавить `CordovaView` компонент на страницу (например,`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. Копия `common/www/cordova.js` вместе с HTML и JavaScript файлы приложения в Windows Phone 8 проект `html` каталог и включают в себя новые файлы в проект.

  5. Копия `wp8/template/config.xml` в корневой каталог проекта и

Инструкции выше ссылка только компоненты ядра Cordova, см с помощью Plugman управление плагины для того, чтобы связать Cordova плагины.