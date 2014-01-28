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

# Configuración de blackBerry 10

El archivo `config.xml` controla la configuración básica de una app que se aplican a través de cada aplicación y una instancia de CordovaWebView. Se construye este preferencias detalles sección que sólo se aplican a BlackBerry 10. Vea el archivo config.xml archivo para obtener información sobre las opciones de configuración global.

*   `ChildBrowser` (el defecto `enable` o `disable`): deshabilita ventanas de navegador secundarias. De forma predeterminada, las apps lanzan una ventana del navegador secundario para mostrar los recursos de acceso mediante `window.open()` o especificando un objetivo de anclaje `_blank`. Especificar `disable` para anular este comportamiento predeterminado.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker` (`enable` o el defecto `disable`): permite el bloqueador de ventanas emergentes, que evita que las llamadas a `window.Open ()`. De forma predeterminada, ventanas emergentes muestran en una ventana del explorador de niño. Establecer la preferencia para `enable` impide Mostrar en absoluto.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity` (el defecto `enable` o `disable`): establece en `disable` para anular la configuración de seguridad web, permitiendo el acceso a contenido remoto de fuentes desconocidas. Esta preferencia está pensada como una conveniencia de desarrollo solamente, así que quitarlo antes de empaquetar su aplicación para su distribución. Para la aplicación liberada, todos URIs debe conocerse y lista blanca utilizando el elemento `<access>`, descrito en la guía de lista blanca de dominio.
    
        <preference name="WebSecurity" value="disable"/>