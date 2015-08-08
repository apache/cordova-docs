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

# Guía de la plataforma Windows

Esta guía muestra cómo configurar el entorno de desarrollo SDK para construir y desplegar aplicaciones de Córdoba para Windows 8, Windows 8.1, Windows Phone 8.1 y Windows 10 plataforma de aplicación Universal. Muestra cómo utilizar herramientas shell para generar y construir aplicaciones o plataformas Cordova CLI discute en la interfaz de línea de comandos. (Véase la introducción para una comparación de las opciones de desarrollo.) Esta sección también muestra cómo modificar Cordova aplicaciones dentro de Visual Studio. Independientemente de qué enfoque tomar, es necesario instalar el SDK de Visual Studio, como se describe a continuación.

Consulte actualización de Windows 8 para obtener información sobre cómo actualizar los proyectos existentes de Windows 8 Cordova.

Ventana teléfono 8 (wp8) permanece como una plataforma independiente, consulte Windows Phone 8 Platform Guide para obtener más detalles.

Cordova WebViews corriendo en Windows dependen de Internet Explorer 10 (Windows 8.0) y Internet Explorer 11 (8.1 de Windows y Windows Phone 8.1) como su motor de renderizado, así como en la práctica puede utilizar a potente depurador de IE para probar cualquier contenido web que no invoca Cordova APIs. El Blog de desarrolladores de Windows Phone proporciona una [guía útil][1] sobre cómo Soporte IE junto con navegadores WebKit comparables.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Requisitos y apoyo

Para desarrollar aplicaciones para la plataforma Windows necesitas:

*   Una máquina Windows 8.1, 32 o 64 bits (ediciones *Home*, *Pro* o *empresa* ) con mínimo 4 GB de RAM.

*   Windows 8.0, 8.1 o 10, 32 o 64 bits *Home*, *Pro*o *Enterprise* Edition, junto con [Visual Studio 2012 Express][2] o Visual Studio 2013. Visual Studio 2015 no es capaz de construir aplicaciones Windows 8.0.

 [2]: http://www.visualstudio.com/downloads

Para desarrollar aplicaciones para Windows 8.0 y 8.1 (incluyendo Windows Phone 8.1):

*   8.1 de Windows o Windows 10, 32 o 64-bit *Home*, *Pro*o *Enterprise* Edition, junto con [Visual Studio 2013 Express][2] o superior. Una versión de evaluación de Windows 8.1 Enterprise está disponible desde la [Microsoft Developer Network][3].

*   Para los emuladores de Windows Phone, edición profesional de Windows 8.1 (x 64) o superior y un procesador que soporte [cliente de Hyper-V y segundo nivel de dirección de traducción (listón)][4]. Una versión de evaluación de Windows 8.1 Enterprise está disponible desde [Microsoft Developer Network][3].

*   [Visual Studio 2013 para Windows][5] (Expreso o superior).

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Para desarrollar aplicaciones para Windows 10:

*   8.1 de Windows o Windows 10 técnico vista previa 2, 32 - o 64-bit, junto con [Visual Studio 2015 RC][6] o superior.

 [6]: http://www.visualstudio.com/preview

Compatibilidad de la aplicación se determina por el sistema operativo que la aplicación. Aplicaciones son compatibles hacia adelante pero no el compatible, así que no se puede ejecutar una aplicación a Windows 8.1 en 8.0, pero se puede ejecutar una aplicación construida para 8.0 en 8.1.

Siga las instrucciones en [windowsstore.com][7] para enviar la aplicación para Windows Store.

 [7]: http://www.windowsstore.com/

Para desarrollar aplicaciones de Córdoba para Windows, puede utilizar un PC con Windows, pero también puede desarrollar en un Mac, ya sea ejecutando un entorno de máquina virtual o usando Boot Camp a la partición de arranque dual un Windows 8.1. Consulte estos recursos para configurar el entorno de desarrollo requiere de Windows en un Mac:

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Utilizando herramientas de Shell Cordova

Si desea utilizar herramientas de Cordova centrado en Windows shell en conjunción con el SDK, tienes dos opciones básicas:

*   Acceder a ellos localmente de proyecto código generado por el CLI. Están disponibles en el `platforms/windows/` directorio después de agregar la plataforma `windows` como se describe a continuación.

*   Descargarlas desde una distribución independiente en [cordova.apache.org][11]. La distribución de Córdoba contiene archivos separados para cada plataforma. No olvide ampliar el archivo apropiado, `cordova-windows` en este caso, dentro de un directorio vacío. Las utilidades del lote correspondiente están disponibles en el directorio `package/bin` . (Si es necesario para instrucciones más detalladas, consulte el archivo **README** ).

 [11]: https://www.apache.org/dist/cordova/platforms/

Estas herramientas de shell le permiten crear, construir y ejecutar aplicaciones de Windows. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins.

## Instalar el SDK

Instalar cualquier edición de [Visual Studio][2] que empareja la versión requisitos enumerados anteriormente.

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

Para Windows, el instalador de Visual Studio tiene una opción para instalar las herramientas para construir aplicaciones Windows Universal. Debe asegurarse de que esta opción está seleccionada durante la instalación para instalar el SDK requiere.

## Crear un nuevo proyecto

En este punto, para crear un nuevo proyecto puede elegir entre la plataforma CLI herramienta descrita en la interfaz de línea de comandos, o el conjunto de herramientas de shell de específicas de Windows. El enfoque CLI abajo genera una aplicación llamada *HelloWorld* dentro de un nuevo directorio de proyecto `hello` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


Este es el enfoque de shell-herramienta de nivel inferior correspondiente:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


Este proyecto apunta a Windows 8.1 como el destino por defecto OS. Puedes elegir destino 8.0 o 10.0 (véase "Versión de Windows de configurar destino") para todas las versiones o destino específico de una versión especial durante cada generación.

## Construir el proyecto

Si utilizas la CLI en el desarrollo, el directorio del proyecto es de alto nivel `www` directorio contiene los archivos de origen. Ejecutar cualquiera de éstos dentro del directorio del proyecto para la reconstrucción de la aplicación:

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


Este es el enfoque de shell-herramienta de nivel inferior correspondiente:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


El `clean` comando ayuda a eliminar directorios en preparación para la siguiente `build` :

        C:\path\to\project\cordova\clean.bat


## Configurar la versión de Windows blanco

Por defecto `crear` comando produce dos paquetes: Windows 8.0 y 8.1 de Windows Phone. Para actualizar el paquete de Windows a la versión 8.1 que debe añadirse la siguiente configuración al archivo de configuración (`config.xml`).

        <preference name="windows-target-version" value="8.1" />


Una vez que se agrega este comando `build` ajuste comenzará a producir paquetes Windows 8.1 y 8.1 de Windows Phone.

### El parámetro --appx

Usted puede decidir que usted quiere construir una versión particular de su aplicación a un determinado sistema operativo (por ejemplo, puede selecionar destino Windows 10 que quieres construir para Windows Phone 8.1). Para ello, puede utilizar el parámetro `--appx` :

        > cordova build windows -- --appx=8.1-phone


El sistema ignorará el sistema de preferencia en archivo config.xml de la versión de Windows de destino y estrictamente construir un paquete para Windows Phone 8.1.

Los valores válidos para la bandera `--appx` son `8.1-win`, `8.1-phone`y `uap` (para Windows 10 aplicaciones Universal). Estas opciones también se aplican al comando `Ejecutar de Córdoba` .

### Consideraciones para la versión de Windows de destino

Windows 10 apoya un nuevo modo "Remote" para Córdoba aplicaciones (y HTML en general). Este modo permite aplicaciones mucho más libertad con respecto al uso de la manipulación del DOM y patrones comunes de la web como el uso de secuencias de comandos en línea, pero no así reduciendo el conjunto de capacidades de su aplicación puede usar cuando envía a la tienda pública de Windows. Para obtener más información acerca de Windows 10 y modo remoto, mirar la documentación de [Córdoba para Windows 10][13] .

 [13]: win10-support.md.html

Cuando utiliza el modo remoto, los desarrolladores se anima a aplicar una política de contenido de seguridad (CSP) para su aplicación para evitar ataques de inyección de secuencia de comandos.

## Desplegar la aplicación

Para desplegar el paquete de Windows:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Para desplegar el paquete de Windows Phone:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


Puede utilizar **cordova run windows --list** para ver todos los destinos disponibles y **cordova run windows --target=target_name \-- -|-phone** para ejecutar la aplicación en un dispositivo específico o emulador (por ejemplo, `cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

También puede utilizar **cordova run --help** adicional construir y ejecutar opciones.

## Abra el proyecto en el SDK y desplegar la aplicación

Una vez que construyes una aplicación Cordova como se describe anteriormente, usted puede abrir con Visual Studio. Los distintos comandos de `build` generan un archivo de Visual Studio solución (*.sln*). Abra el archivo en el explorador de archivos para modificar el proyecto dentro de Visual Studio:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

El componente de `CordovaApp` muestra dentro de la solución, y su directorio `www` contiene el código fuente basada en web, incluyendo la página `index.html` :

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Los controles debajo de menú principal de Visual Studio le permite probar o implementar la aplicación:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

Con la **Máquina Local** seleccionado, pulsaremos la flecha verde para instalar la aplicación en el mismo equipo que ejecuta Visual Studio. Una vez lo haces, la aplicación aparece en los listados de la aplicación de Windows 8:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

Cada vez que reconstruir la aplicación, se actualiza la versión disponible en la interfaz.

Una vez disponible en la lista aplicación, manteniendo presionada la tecla **CTRL** mientras selecciona la aplicación le permite a prender a la pantalla principal:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

Tenga en cuenta que si usted abre la aplicación dentro de un entorno de máquina virtual, puede que necesite hacer clic en las esquinas o a lo largo de los lados de las ventanas para cambiar de aplicaciones o acceder a funciones adicionales:

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

Alternativamente, elija la opción de despliegue de **simulador** para ver la aplicación como si estuviera ejecutando en un dispositivo tablet:

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

A diferencia de la implementación de escritorio, esta opción le permite simular la orientación de la tableta, ubicación, y variar su configuración de red.

**Nota**: Consulte el Resumen de consejos sobre cómo utilizar herramientas de línea de comandos de Cordova o el SDK en su flujo de trabajo. El CLI Cordova se basa en código fuente entre plataformas que rutinariamente sobrescribe los archivos específicos para cada plataforma utilizados el SDK de. Si desea utilizar el SDK para modificar el proyecto, utilizar las herramientas de nivel inferior shell como una alternativa a la CLI.
