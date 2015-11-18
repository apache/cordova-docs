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

title: Windows Phone 8,0 WebViews
---

# Windows Phone 8,0 WebViews

Esta guía le muestra cómo incrustar un componente WebView Cordova habilitado dentro de una aplicación Windows Phone 8.0 más grande.

Para seguir estas instrucciones, asegúrate de que tienes la última distribución de Córdoba. Descargar desde [cordova.apache.org](http://cordova.apache.org) y descomprime el paquete Windows Phone 8.0 (cordova-wp8-*.zip).

  1. Desplácese hasta el paquete `wp8/framework` Directorio y construir `WPCordovaClassLib.sln` . Se crea el`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. Copia el `WPCordovaClassLib.dll` archivo en del proyecto Windows Phone 8 `/libs` directorio e incluyen `WPCordovaClassLib.dll` a través de su proyecto `Project->References->Add Reference` . Alternativamente, se puede hacer referencia directamente el `wp8/framework/WPCordovaClassLib.csproj` archivo.

  3. Añadir `CordovaView` componente a tu página (por ejemplo,`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. Copia `common/www/cordova.js` junto con archivos HTML y JavaScript de la aplicación del proyecto de Windows Phone 8 `html` directorio e incluyen nuevos archivos al proyecto.

  5. Copia el `wp8/template/config.xml` al directorio raíz del proyecto y

Las instrucciones anteriores se enlace Cordova componentes solamente, ver usando Plugman para gestionar Plugins para enlazar Cordova plugins.