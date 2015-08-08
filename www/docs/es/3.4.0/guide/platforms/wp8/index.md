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

# Guía de la plataforma de Windows Phone 8

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos Windows Phone 8. Si quieres tanto 7,5 y 8 dispositivos de destino, desarrollar para Windows Phone 7 en su lugar como detallado en el Windows Phone 7 Guía de la plataforma. Versión 7 no tiene todas las características avanzadas incluidas en Internet Explorer 10, pero implementa el mismo conjunto de APIs. Hacer Windows Phone 8 aplicaciones *no* funcionan en dispositivos Windows Phone 7.

Vea el siguiente para obtener más información específica de la plataforma que se aplica para las dos versiones:

*   Actualización de Windows Phone
*   Windows Phone Plugins
*   Windows Phone herramientas de línea de comandos

Las herramientas de línea de comandos anteriores se refieren a las versiones anteriores Cordova 3.0. Ver la interfaz de línea de comandos para obtener información sobre la interfaz actual.

## Requisitos del sistema

*   Sistema operativo:

    *   Windows 8 o Windows 8 Pro
        *   La versión de 64-bit (x 64) de Windows es necesaria para el SDK.
        *   La versión Pro se recomienda para que pueda ejecutar un emulador de dispositivos.

*   Hardware:

    *   6,5 GB de espacio libre en disco duro
    *   4 GB DE RAM
    *   CPU de 64-bit (x 64)

*   Emulador de Windows Phone 8

    *   El emulador de teléfono utiliza Hyper-V, así que esta lista incluye los requisitos previos.
    *   Edición Pro de 64 bits de Windows 8 o superior
    *   Requiere un procesador compatible con virtualización y [Segunda dirección nivel traducción (listón)][1]
        *   Ver la [lista de procesadores compatibles (virtualización) VT-x y EPT (listón)][2]
    *   Activar la capacidad de virtualización (es decir, VT-x en Intel) en la configuración del BIOS, generalmente esto está deshabilitado por defecto.

*   SDK e IDE (Visual Studio)

    *   Visual Studio Professional 2012, Premium o Ultimate. Tenga en cuenta que Visual Studio Express para Windows Phone (incluida en el SDK) no es recomendable porque no se puede construir la plantilla (véase abajo) VS Express, como no tiene la funcionalidad de la **Plantilla de exportación** , que es sólo en VS Pro o superior.

*   Registrarse y pagar una cuenta de [Windows Phone Dev Center][3] si quieres instalar tu aplicación en un dispositivo real o enviarlo al mercado.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Nota**: ejecuta el SDK en máquina Virtual puede presentar algunos desafíos. Puedes leer este post de blog que da información sobre las soluciones a desarrollar para [Windows Phone en un Mac][4].

 [4]: http://aka.ms/BuildaWP8apponaMac

## Instalar SDK y Cordova

Descargar e instalar el [SDK de Windows Phone][5].

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471

Descargar y descomprimir la copia más reciente de [Córdoba][6]. El `lib\windows-phone-8\wp8` subdirectorio es donde tienes que hacer tu trabajo.

 [6]: http://phonegap.com/download

Copia el `CordovaWP8_x_x_x.zip` archivo a la `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` Directorio.

## La plantilla del edificio

**Nota**: Omita este paso si el `lib\windows-phone` directorio ya contiene un `CordovaWP8_x_x_x.zip` archivo.

Para simplificar el desarrollo, Cordova lía un script para crear plantillas de Visual Studio. Esto permite generar rápidamente aplicaciones Cordova, y se les pueden modificar si es necesario. Los siguientes pasos muestran cómo generarlo.

### Ejecute el archivo por lotes para crear e instalar las plantillas

Directorio raíz de la repo contiene un `createTemplates.bat` archivo. Haga doble clic en éste para generar dos `.zip` archivos: `CordovaWP7_x_x_x.zip` y `CordovaWP8_x_x_x.zip` , donde *x.x.x* es el número de versión actual. Para utilizar estos archivos fácilmente en Visual Studio, copiarlos a `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\` . Entonces eres capaz de crear nuevas aplicaciones Apache Cordova Windows Phone en el menú de **Visual Studio File → New Project** .

Si ejecuta el archivo por lotes desde la línea de comandos, también puedes llamarlo con un parámetro para instalar de forma automática:

        >createTemplates.bat -install


## Configurar un nuevo proyecto

Abra Visual Studio Express para Windows Phone y seleccione **Nuevo proyecto**.

Seleccione **CordovaWP8**. El número de versión se muestra en la descripción de la plantilla.

Dar al proyecto un nombre y seleccione **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## Revisar la estructura del proyecto

La `www` características directory `html` , `js` , y `css` los subdirectorios y todos los demás recursos su aplicación requiere. Cualquier contenido adicional debe ser una parte del proyecto de Visual Studio, y debe insertarse como contenido.

La siguiente muestra estructura representa un 2.3.0 del proyecto, pero puede variar dependiendo de la versión instalada:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Construir y desplegar en emulador

Asegúrese de que **Windows Phone emulador** se selecciona en el menú desplegable.

Luego presione el botón verde **jugar** al lado de la lista desplegable para empezar a depurar, o tipo **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## Genere el proyecto para el dispositivo

Antes de probar la aplicación en un dispositivo, el dispositivo debe estar registrado. Consulte la [documentación de Microsoft][10] para obtener más información sobre cómo implementar y probar en Windows Phone 8. Estos son los pasos básicos:

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Asegúrese de que su teléfono está conectado, y la pantalla se desbloquea.

*   En Visual Studio, seleccione el **dispositivo** en el menú desplegable en la parte superior.

*   Pulse el botón verde **jugar** junto al menú desplegable para iniciar depuración, o bien escriba **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

En este punto, ya está.

## Leer más

El Blog de desarrolladores de Windows Phone proporciona [información útil][12] sobre las diferencias entre navegadores IE10 y WebKit y cómo apoyar ambos.

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
