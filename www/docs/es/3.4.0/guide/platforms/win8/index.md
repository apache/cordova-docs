---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations


   under the License.
---

# Windows 8 plataforma guía

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para Windows 8. Vea el siguiente para obtener más información específica de la plataforma:

*   Actualización de Windows 8
*   Herramientas de línea de comandos de Windows 8

Las herramientas de línea de comandos anteriores se refieren a las versiones anteriores Cordova 3.0. Ver la interfaz de línea de comandos para obtener información sobre la interfaz actual.

Microsoft desaprobado el nombre *apps estilo Metro* de Windows 8 y Windows RT. MSDN ahora se refiere a este tipo de aplicación como una aplicación *Windows Store* , y esta guía sigue esa Convención. Además, en esta guía *Windows 8* significa tanto Windows 8 y Windows RT.

## Requisitos

*   Windows 8

*   Visual Studio Professional 2012 o mejor o Visual Studio 2012 Express para Windows 7

Siga las instrucciones en [windowsstore.com][1] para presentar su aplicación para Windows Store.

 [1]: http://www.windowsstore.com/

## Instalar SDK y Cordova

Configure su variante preferida de Visual Studio 2012. Todas las versiones del producto pagado (profesional, etc.) a dejarte construir aplicaciones Windows Store. Necesita **expresar para Windows 8** para construir aplicaciones Windows Store usando las [ediciones Express][2].

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products

Descargar y descomprimir la copia más reciente de [Córdoba][3]. Estas instrucciones se aplican a la `lib\windows-8` subdirectorio.

 [3]: http://phonegap.com/download

## Configurar un nuevo proyecto

Ya puedes construir aplicaciones Windows 8 usando el *HTML/JavaScript pista* disponible en aplicaciones Windows Store. Utilizar Cordova en aplicaciones Windows Store para exponer los mismos APIs como en otras plataformas de apoyo de Córdoba.

*   Abra Visual Studio 2012 y seleccione **Nuevo proyecto**.

*   Seleccione **Instalar → plantillas → otros idiomas → JavaScript → Windows Store** del árbol, y luego **En blanco de la aplicación** de la lista de proyectos. Introduzca cualquier nombre proyecto te gusta, tales como `CordovaWin8Foo` como en este ejemplo:

    ![][4]

*   Microsoft continúa utilizando `default.html` como la página de inicio por defecto, pero más uso de los desarrolladores web `index.html` . Es una buena idea hacerlo, al menos para que coincida con otras plataformas que es probable que estás trabajando. Para solucionar este problema, en el **Explorador de soluciones** renombrar el `default.html` archivo a `index.html` . Haga doble clic en el `package.appxmanifest` archivo y cambiar el valor **de inicio** a `index.html` :

        ![](img/guide/platforms/win8/wschangemanifest.png)


*   Incluir `cordova.js` en su proyecto, haga clic en el `js` Directorio en el **Explorador de soluciones** y seleccione **Agregar → nuevo artículo**. Localice la `cordova.js` de los archivos en el `lib\windows-8` Directorio.

*   Editar el código para `index.html` . Agregue una referencia a `cordova.js` . Puedes hacerlo manualmente, o arrastrando el archivo desde el **Explorador de soluciones**. Agregue lo siguiente a la página de inicio de la aplicación otras dependencias:

            <!-- WinJS references -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo references -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>


*   Añadir un `deviceready` controlador para demostrar Cordova está trabajando:

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>


 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png

## El proyecto de prueba

Ejecute el proyecto de Visual Studio. Usted verá el cuadro de mensaje aparece:

        ![](img/guide/platforms/win8/wsalert.png)


Eso es todo. Ahora estás listo para construir aplicaciones Windows Store con Córdoba.
