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

Ten poradnik pokazuje jak wobec sprzeniewierzyć Cordova włączony Widok sieci Web składnika w większych aplikacji Windows Phone 8.0.

Aby wykonać te instrukcje, upewnij się, że masz najnowsze dystrybucji Cordova. Pobierz go z [cordova.apache.org](http://cordova.apache.org) i rozpakuj jego pakiet Windows Phone 8.0 (cordova-wp8-*.zip).

  1. Przejdź do pakietu `wp8/framework` katalog i budować `WPCordovaClassLib.sln` . Tworzy`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. Kopia `WPCordovaClassLib.dll` pliku do projektu Windows Phone 8 `/libs` katalogu i `WPCordovaClassLib.dll` do projektu za pośrednictwem `Project->References->Add Reference` . Alternatywnie, można bezpośrednio odwoływać `wp8/framework/WPCordovaClassLib.csproj` pliku.

  3. Dodać `CordovaView` komponent do Twojej strony (np.`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. Kopia `common/www/cordova.js` wraz z HTML i JavaScript pliki aplikacji w Windows Phone 8 projekt `html` katalog i zawierać nowe pliki do projektu.

  5. Kopiowanie `wp8/template/config.xml` do katalogu projektu i

Instrukcji powyżej zostanie link Cordova zręby tylko, zobacz za pomocą Plugman do zarządzania wtyczki aby połączyć wtyczki Cordova.