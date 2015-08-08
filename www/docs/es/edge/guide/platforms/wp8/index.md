---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Guía de la plataforma de Windows Phone 8

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos Windows Phone. Aunque se centra en Windows Phone 8, proporciona información adicional sobre cómo soporte Windows Phone 7.

Muestra cómo utilizar herramientas shell Windows Phone específicas para generar y construir aplicaciones o plataformas Cordova CLI discuten en la interfaz de línea de comandos. (Véase la introducción para una comparación de estos flujos de trabajo de desarrollo). Esta sección también muestra cómo abrir Cordova aplicaciones para que se les pueden modificar dentro de Visual Studio. Independientemente de qué enfoque toma, necesitas instalar el SDK de Windows Phone, como se describe a continuación.

Vea el siguiente para los detalles específicos a la plataforma de Windows Phone:

*   Windows Phone 8 Plugins
*   Actualización de Windows Phone 8

Para la plataforma Windows Phone 8, el Cordova WebView confía en Internet Explorer 10 como su motor de render, así como una cuestión práctica puede utilizar a potente depurador de IE10 para probar cualquier contenido web que no invoca Cordova APIs. El Blog de desarrolladores de Windows Phone proporciona una [guía útil][1] sobre cómo apoyar IE10 junto con navegadores WebKit comparables.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Requisitos y apoyo

Se necesita lo siguiente:

*   Una versión de 64 bits de Windows 8 Pro, un disco de instalación o un archivo de imagen de disco *ISO* . Una versión de evaluación está disponible en la [Microsoft Developer Network][2]. La versión Pro es necesaria ejecutar el emulador de dispositivos.

*   El [Windows Phone SDK][3].

*   Con el fin de implementar a través de la línea de comandos con el SDK de Windows Phone 8.0, se debe instalar [Visual Studio 2012 actualización 2][4] .

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [4]: https://support.microsoft.com/en-us/kb/2797912

Para desarrollar aplicaciones de Córdoba para dispositivos Windows Phone, usted puede utilizar un PC con Windows, pero también puede desarrollar en un Mac, ya sea mediante la ejecución de un entorno de máquina virtual o usando Boot Camp para arranque dual una partición de Windows. Consulte estos recursos para configurar el entorno de desarrollo requiere de Windows en un Mac:

*   **VMWare Fusion**: para configurar la máquina virtual de Windows 8, siga las instrucciones proporcionadas por el [Microsoft Developer Network][5]y, a continuación, ver configuración de VMWare Fusion para obtener información sobre cómo preparar el entorno virtual para ejecutar el emulador incluido con el SDK.

*   **Parallels Desktop**: para configurar la máquina virtual de Windows 8, siga las instrucciones proporcionadas por el [Microsoft Developer Network][6]y, a continuación, ver configuración de Parallels Desktop para obtener información sobre cómo preparar el entorno virtual para ejecutar el emulador incluido con el SDK.

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **Campamento**: para configurar la partición de Windows 8, siga las instrucciones de instalación proporcionadas por la [Microsoft Developer Network][7].

 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

Si está desarrollando en un PC, debe apoyar su procesador de virtualización (*VT-x* en Intel) y [Segundo nivel de dirección de traducción (listón)][8]. Consultar [lista de Intel de procesadores][9]. Virtualización típicamente está desactivado por defecto, así que tienes que activarlo en la configuración del BIOS. El PC debe tener al menos 6,5 GB de espacio libre en disco duro y 4GB de RAM.

 [8]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [9]: http://ark.intel.com/Products/VirtualizationTechnology

## Utilizando herramientas de Shell Cordova

Si desea utilizar herramientas de shell de Windows Phone-centrado de Cordova en conjunción con el SDK, tienes dos opciones básicas:

*   Acceder a ellos localmente desde proyecto código generado por el CLI. Están disponibles en el `platforms/wp8/cordova` Directorio después de agregar la `wp8` plataforma como se describe a continuación.

*   Descárguelos desde una distribución independiente en [cordova.apache.org][10]. La distribución de Cordova contiene archivos separados para cada plataforma. Asegúrese de expandir el archivo apropiado, `cordova-wp8\wp8` en este caso, dentro de un directorio vacío. Las utilidades por lotes correspondientes están disponibles en el nivel superior `bin` Directorio. (Si es necesario para obtener instrucciones más detalladas, consulte el archivo **README** ).

 [10]: http://cordova.apache.org

Estas herramientas de shell le permiten crear, construir y ejecutar aplicaciones de Windows Phone. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins. Consulte aplicación Plugins para orientación sobre cómo desarrollar plugins y Windows Phone 8 Plugins para detalles específicos de la plataforma de Windows Phone.

## Instalar el SDK

Instalar la última versión del SDK de Windows Phone de la zona de **descargas** de [dev.windowsphone.com][11]. También puede instalar los paquetes de actualización más recientes del emulador.

 [11]: https://dev.windowsphone.com/en-us/downloadsdk

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

## Crear un nuevo proyecto

En este punto, para crear un nuevo proyecto puede elegir entre la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos, o el conjunto de herramientas de shell de Windows Phone-específicas. Desde dentro de un directorio del código fuente, aquí es el enfoque CLI:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8


Este es el enfoque de shell-herramienta de nivel inferior correspondiente:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Construir el proyecto

Si utilizas la CLI en el desarrollo, el directorio del proyecto es de alto nivel `www` directorio contiene los archivos de origen. Ejecutar cualquiera de éstos dentro del directorio del proyecto para la reconstrucción de la aplicación:

        > cordova build
        > cordova build wp8   # do not rebuild other platforms


Si está utilizando las herramientas de shell de Windows Phone específicos en desarrollo, hay un enfoque diferente. Una vez que se genera el proyecto, fuente de la aplicación por defecto está disponible en el `projects\wp8\www` subdirectorio. Los comandos están disponibles en el `cordova` subdirectorio en el mismo nivel.

El `build` comando limpia archivos de proyecto y reconstruye la aplicación. El primer ejemplo genera información de depuración, y la segunda firma las aplicaciones para el lanzamiento:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


El `clean` comando ayuda a eliminar directorios en preparación para la siguiente `build` :

        C:\path\to\project\cordova\clean.bat


## Desplegar en emulador

En este punto se puede utilizar la `cordova` utilidad CLI para desplegar la aplicación en el emulador desde la línea de comandos:

        > cordova emulate wp8


De lo contrario utilice la interfaz de shell alterno:

        C:\path\to\project\cordova\run


De forma predeterminada, el `run` script invoca la bandera del emulador y acepta banderas de construcción adicional, para que `--debug` proporciona el valor por defecto:

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild


El emulador lanza una imagen del dispositivo con la aplicación instalada. Desde la pantalla principal, desplácese hasta el panel de aplicaciones para lanzar la aplicación **HelloWorld** . Esto demuestra el lanzamiento con su pantalla de bienvenida, seguido por su interfaz principal de la aplicación:

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

Controles básicos del emulador en la parte superior derecha de la pantalla del dispositivo permiten alternar entre la orientación vertical y horizontal. El botón **>** abre más controles que permiten poner a prueba las orientaciones más complejas y gestos:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

Estos controles avanzados también permiten modificar la ubicación del dispositivo o para simular secuencias de movimientos:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## Desplegar en el dispositivo

Antes de probar la aplicación en un dispositivo, el dispositivo debe estar registrado. Consulte la [documentación de Microsoft][16] para obtener más información sobre cómo implementar y probar en Windows Phone 8. También, asegúrese de que el teléfono está conectado al ordenador y la pantalla está desbloqueada.

 [16]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565.aspx

Luego ejecute el siguiente comando CLI para ejecutar la aplicación en el dispositivo:

    > cordova run wp8


Corresponde a este comando de shell de nivel inferior:

    C:\path\to\project\cordova\run --device


Alternativamente, si usted está trabajando en Visual Studio, seleccione **Windows Phone dispositivo** en el menú desplegable en la parte superior, luego oprima el verde **juega** botón cerca o bien escriba **F5**.

## Modificar el proyecto en el SDK

Una vez que construyes una aplicación Cordova como se describió anteriormente, puedes abrirlo con el SDK. El vario `build` comandos genera un archivo de Visual Studio solución (*.sln*). Abra el archivo para modificar el proyecto dentro de Visual Studio. El código fuente basada en web está disponible dentro del proyecto `www` Directorio. Junto con otras herramientas proporciona el SDK, el control debajo del menú le permite lanzar la aplicación en un emulador de Windows Phone:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

Consulte el Resumen de consejos sobre cómo usar herramientas de línea de comandos de Cordova o el SDK en su flujo de trabajo. Cordova CLI se basa en código multiplataforma que rutinariamente sobrescribe los archivos específicos a una plataforma utilizados por el SDK. Si quieres trabajar dentro del SDK, utilice las herramientas de shell de nivel inferior como una alternativa a la CLI.
