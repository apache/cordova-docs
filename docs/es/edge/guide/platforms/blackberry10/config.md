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

# Configuración de BlackBerry 10

El archivo `config.xml` controla varias configuraciones de Cordova. Éstos se aplican a través de la aplicación. Es el archivo `config.xml` se encuentra en `<project folder>/<www>` directorio.

## `<preference>`

Predeterminado de diversas preferencias (como `<preference>` etiquetas) en no romper aplicaciones existentes. Las preferencias disponibles son:

*   `autoHideSplashScreen`: ( `true` o `false` ): A `false` para controlar cuando se oculta el splashscreen a través de una API de JavaScript. Esta preferencia por defecto a true.

*   `backgroundColor`: Especifica el color de fondo de su aplicación. El valor debe especificar un valor de color en el formato de píxel ARGB usando 8 dígitos hexadecimales.

*   `childBrowser`: Ventanas de navegador secundarias se desactiva. De forma predeterminada, cuando el contenido intenta abrir un recurso en una nueva ventana o pestaña (mediante window.Open (), o especificar `_blank` como destino de un ancla), la aplicación de WebWorks abrirá una ventana de navegador secundario para mostrar el recurso. Esta característica está habilitada de forma predeterminada. Debe especificar el valor `disable` para evitar que las acciones anteriores humedecida.

*   `hideKeyboardFormAccessoryBar`: ( `enable` o `disable` ) desactiva la barra accesoria de forma teclado en un formulario HTML. El bar accesorio teclado forma es una fila de botones (Previous, Next y enviar) que el usuario puede utilizar para navegar a través de un formulario. De forma predeterminada, cuando una aplicación WebWorks contiene un formulario HTML y un `<input>` elemento recibe el foco, WebWorks muestra esta barra accesoria del formulario. Esta característica le permite evitar la aplicación de visualización de la barra accesoria forma especificando valor como`enable`.

*   `orientation`: ( `auto` , `portrait` , o `landscape` ) especifica la orientación persistente para pantallas en su aplicación. De forma predeterminada, si no se especifica una orientación de la pantalla, la orientación se establece en auto.

*   `popupBlocker`: Permite que el bloqueador de ventanas emergentes. De forma predeterminada, todos emergentes aparecen por aplicaciones BlackBerry WebWorks en una ventana del explorador de niño. Puede evitar ventanas emergentes mostrando sin intervención del usuario activando el bloqueador de ventanas emergentes. Esto se hace mediante la especificación de valor como`enable`.

*   `webSecurity`: Seguridad web deshabilita. Desactivación de seguridad web le permite acceder a contenido remoto de fuentes desconocidas durante el desarrollo. Antes de empaquetar su aplicación para su distribución, se debe eliminar esta configuración. Esta característica está diseñada como una conveniencia de desarrollo solamente. En la producción, deben conocerse todos los URI y debe estar lista blanca usando el `<access>` elemento. Para desactivar, especifique el valor como`disable`.