* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows 8 plataforma guía

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova en Windows 8. Muestra cómo utilizar herramientas específicas de Windows 8 shell para generar y construir aplicaciones o plataformas Cordova CLI discuten en la interfaz de línea de comandos. (Véase la introducción para una comparación de estas opciones de desarrollo). Esta sección también muestra cómo modificar Cordova apps dentro de Visual Studio. Independientemente de qué enfoque toma, necesitas instalar el SDK de Visual Studio, como se describe a continuación.

Consulte actualización de Windows 8 para obtener información sobre cómo actualizar los proyectos existentes de Windows 8 Cordova.

Cordova WebViews corriendo en Windows 8 confían en Internet Explorer 10 como su motor de renderizado, así como en la práctica puede utilizar a potente depurador de IE10 para probar cualquier contenido web que no invoca Cordova APIs. El Blog de desarrolladores de Windows Phone proporciona una [guía útil][1] sobre cómo apoyar IE10 junto con navegadores WebKit comparables.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Requerimientos y apoyo

Una de las siguientes combinaciones de OS/SDK, ya sea de un disco de instalación o un archivo de imagen de disco *ISO* necesitas:

*   Windows 8.0 o 8.1, 32 o 64 bits *Home*, *Pro*o *Enterprise* Edition, junto con [Visual Studio 2012 Express][2].

*   8.1 Windows, 32 o 64 bits *Home*, *Pro*o *Enterprise* Edition, junto con [Visual Studio 2013 Pro][2] o superior. Una versión de evaluación de Windows 8.1 Enterprise está disponible desde la [Microsoft Developer Network][3].

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

Hacer aplicaciones compiladas bajo Windows 8.1 *no* corre bajo Windows 8.0. Aplicaciones compiladas bajo Windows 8.0 son compatibles hacia adelante con 8.1.

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

Siga las instrucciones en [windowsstore.com][4] para someter la aplicación para Windows Store.

 [4]: http://www.windowsstore.com/

<!-- true? -->

Para desarrollar aplicaciones de Córdoba para Windows 8, usted puede utilizar un PC con Windows, pero también puede desarrollar en un Mac, ya sea mediante la ejecución de un entorno de máquina virtual o mediante el uso de Boot Camp a la partición de arranque dual Windows 8. Consulte estos recursos para configurar el entorno de desarrollo requiere de Windows en un Mac:

*   [VMWare Fusion][5]

*   [Parallels Desktop][6],

*   [Boot Camp][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Utilizando herramientas de Shell Cordova

Si desea utilizar herramientas de shell de Windows 8-centrado de Cordova en conjunción con el SDK, tienes dos opciones básicas:

*   Acceder a ellos localmente desde proyecto código generado por el CLI. Están disponibles en el `platforms/windows8/cordova` Directorio después de agregar la `windows8` plataforma como se describe a continuación.

*   Descárguelos desde una distribución independiente en [cordova.apache.org][8]. La distribución de Cordova contiene archivos separados para cada plataforma. Asegúrese de expandir el archivo apropiado, `cordova-windows8\windows8` en este caso, dentro de un directorio vacío. Las utilidades por lotes correspondientes están disponibles en el nivel superior `bin` Directorio. (Si es necesario para obtener instrucciones más detalladas, consulte el archivo **README** ).

 [8]: http://cordova.apache.org

Estas herramientas de shell le permiten crear, construir y ejecutar aplicaciones de Windows 8. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins.

## Instalar el SDK

Instalar la *Ultimate*, *Premium*o las ediciones de [Visual Studio][2] *Professional* 2013.

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## Crear un nuevo proyecto

En este punto, para crear un nuevo proyecto puede elegir entre la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos, o el conjunto de herramientas de Windows shell 8-específica. Desde dentro de un directorio del código fuente, este enfoque CLI genera una aplicación denominada *HelloWorld* dentro de un nuevo `hello` Directorio del proyecto:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

Este es el enfoque de shell-herramienta de nivel inferior correspondiente:

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Construir el proyecto

Si utilizas la CLI en el desarrollo, el directorio del proyecto es de alto nivel `www` directorio contiene los archivos de origen. Ejecutar cualquiera de éstos dentro del directorio del proyecto para la reconstrucción de la aplicación:

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

Si está utilizando las herramientas de shell de Windows Phone específicos en desarrollo, hay un enfoque diferente. Una vez que se genera el proyecto, fuente de la aplicación por defecto está disponible en el `projects\windows8\www` subdirectorio. Los comandos están disponibles en el `cordova` subdirectorio en el mismo nivel.

El `build` comando limpia archivos de proyecto y reconstruye la aplicación. El primer ejemplo genera información de depuración, y la segunda firma las aplicaciones para el lanzamiento:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

El `clean` comando ayuda a eliminar directorios en preparación para la siguiente `build` :

        C:\path\to\project\cordova\clean.bat
    

## Abra el proyecto en el SDK y desplegar la aplicación

Una vez que construyes una aplicación Cordova como se describió anteriormente, puedes abrirlo con Visual Studio. El vario `build` comandos de generan un archivo de Visual Studio solución (*.sln*). Abra el archivo en el explorador de archivos para modificar el proyecto dentro de Visual Studio:

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

El `CordovaApp` componente muestra dentro de la solución y su `www` directorio contiene el código fuente basada en web, incluyendo el `index.html` página de Inicio:

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

Los controles debajo del menú principal de Visual Studio permiten probar o desplegar la aplicación:

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

Con la **Máquina Local** seleccionado, pulse la flecha verde para instalar la aplicación en la misma máquina ejecutando Visual Studio. Una vez lo haces, la aplicación aparece en los listados de la aplicación de Windows 8:

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

Cada vez que reconstruir la aplicación, se actualiza la versión disponible en la interfaz.

Una vez disponibles en los listados de la aplicación, manteniendo presionada la tecla **CTRL** mientras selecciona la aplicación le permite culpar a la pantalla principal:

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

Tenga en cuenta que si se abre la aplicación dentro de un entorno de máquina virtual, necesite hacer clic en las esquinas o a lo largo de los lados de las ventanas para cambiar aplicaciones o acceder a funciones adicionales:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

Alternativamente, seleccione la opción de despliegue de **simulador** para ver la aplicación como si se estaban ejecutando en un dispositivo de tableta:

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

A diferencia de la implementación de escritorio, esta opción permite simular la orientación de la tableta, ubicación, y variar su configuración de red.

**Nota**: consulte el Resumen de consejos sobre cómo usar herramientas de línea de comandos de Cordova o el SDK en su flujo de trabajo. Cordova CLI se basa en código multiplataforma que rutinariamente sobrescribe los archivos específicos a una plataforma utilizados por el SDK. Si desea utilizar el SDK para modificar el proyecto, utilice las herramientas de shell de nivel inferior como una alternativa a la CLI.