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

# Amazon fuego OS Platform Guide

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos como el Kindle fuego HDX Amazon fuego OS.

Vea el siguiente para obtener más información específica de la plataforma:

*   Amazon fuego OS configuración
*   Amazon fuego OS WebViews
*   Amazon fuego OS Plugins

## Introducción

Al dirigirse a la plataforma Amazon fuego OS, Cordova los desarrolladores pueden crear aplicaciones web híbridas que aprovechan el motor web avanzada integrado en los dispositivos Kindle Fire. Amazon WebView API (AWV) es un tiempo de ejecución derivados del cromo web exclusivo de fuego OS. Un reemplazo de sobreponer para la vista Web que viene con dispositivos Android, AWV hace posible crear realizar mejor y más poderoso híbrido web apps proporcionando apoyo para un rápido motor JavaScript (V8), depuración remota y optimizaciones de hardware para los dispositivos Kindle Fire incluyendo un lienzo 2D acelerado, y acceso a características de HTML5 no soportado por Android construido en WebView tales como: Calc CSS, validación de formularios, getUserMedia, IndexedDB, los trabajadores Web, WebSockets y WebGL.

Para obtener más información acerca de la Amazonía WebView API, consulte del Portal Amazon desarrollador [aplicaciones híbridas HTML5 página][1]. Para preguntas sobre comenzó y otros problemas de soporte, consulte el Amazonas Developer Portal [foros - aplicaciones híbridas HTML5][2].

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## Requisitos y apoyo

Desarrollando aplicaciones Cordova para Amazon fuego OS requiere la instalación de una variedad de archivos de apoyo, incluyendo todo lo necesario para el desarrollo de Android, así como el Amazonas WebView SDK. Compruebe la lista de abajo para las instalaciones necesarias:

*   La interfaz de linea de comandos
*   [SDK de Android][3]
*   [Apache Ant][4]
*   [Amazon WebView SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## Instalación

### El SDK de Android y Apache Ant

Instalar el SDK de Android desde [developer.android.com/sdk][3]. Puede presentarse con una elección de donde instalar el SDK, de lo contrario mover el árbol descargado `adt-bundle` a dondequiera que usted almacenar herramientas de desarrollo.

Usted necesitará ejecutar el administrador de Android SDK ( `android` de línea de comandos) al menos una vez antes de comenzar su proyecto Cordova. Asegúrese de instalar la versión más reciente del Android SDK Tools y plataforma SDK **específicamente nivel API 19**. Consulte [configurar el entorno de desarrollo][5] de la Amazonía Developer Portal para obtener más información sobre cómo configurar su entorno de desarrollo para dispositivos Kindle fuego OS.

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Instalar el Apache Ant construir herramienta de [descarga una distribución binaria de hormiga][6], descomprimir en un directorio que puede consultar posteriormente. Consulte el [manual de hormiga][7] para obtener más información.

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

Cordova Herramientas de línea de comandos trabajar, es necesario incluir el SDK de Android `tools` , `platform-tools` y `apache-ant/bin` directorios en su entorno PATH.

#### Ruta de Mac/Linux

En Mac, Linux u otras plataformas Unix-like, puede utilizar un editor de texto para crear o modificar el `~/.bash_profile` archivo, añadir una línea como la siguiente, dependiendo de donde están instalados los SDK y la hormiga:

    export PATH = ${PATH}: / / adt-bundle/sdk/plataforma-herramientas de desarrollo: / / adt-bundle/sdk/herramientas de desarrollo: / desarrollo/apache-ant/bin


Esto expone SDK tools en windows terminales recién inauguradas. De lo contrario corre para que estén disponibles en el actual período de sesiones:

    $ source ~/.bash_profile


#### Windows Path

Para modificar el entorno PATH en Windows:

*   Haga clic en el menú de **Start** en la esquina inferior izquierda del escritorio, haga clic derecho en el **Computer**, haga clic en **Properties**.

*   En la columna de la izquierda, haga clic en **Configuración avanzada del sistema**.

*   En el cuadro de diálogo resultante, presione **Environment Variables**.

*   Seleccione la variable **PATH** y pulse **Editar**.

*   Agregue lo siguiente a la ruta basada en donde se ha instalado el SDK de la hormiga, por ejemplo:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   El valor de guardar y cerrar ambos cuadros de diálogo.

*   Usted también necesitará habilitar Java. Abra un símbolo del sistema y el tipo `java` , si no funciona, anexar su camino así como la ubicación de los binarios de Java. Asegúrese de que JAVA_HOME % apunta al directorio JDK instalado. Tendrás que agregar separadamente variable de entorno JAVA_HOME.

        ; %JAVA_HOME%\bin


### Amazon WebView SDK

Para crear aplicaciones de Córdoba con el objetivo de la plataforma de Amazon fuego OS, usted necesitará descargar, descomprimir e instalar los archivos de soporte de Amazon WebView SDK. Este paso sólo tendrá que ser hecho por tu primer proyecto Amazonas fuego OS.

*   Descargue el SDK de WebView Amazonas del [Amazonas Developer Portal][1].

*   Copia `awv_interface.jar` del SDK descargado al directorio de trabajo de Cordova. Crear carpeta commonlibs(shown below) si no existe:

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## Crear nuevo proyecto para el Amazonas fuego OS

Utilice la utilidad de `cordova` para configurar un nuevo proyecto, tal como se describe en el Cordova la línea de comandos de interfaz. Por ejemplo, en un directorio del código fuente:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***Nota:*** La primera vez que la plataforma amazon-fireos está instalada en su sistema, se descargará los archivos correspondientes en el directorio de trabajo de Córdoba, pero entonces fracasará como le faltan los archivos de soporte AWV SDK (véase arriba). Siga las instrucciones anteriores para instalar el `awv_interface.jar` , luego quitar y volver a agregar la plataforma amazon-fireos a su proyecto. Este paso sólo tendrá que hacerse para primer proyecto Amazonas fuego OS.

## Desplegar en el dispositivo

Para empujar una aplicación directamente al dispositivo, asegúrese de depuración USB está habilitado en el dispositivo como se describe en el [Sitio para desarrolladores de Android][8]y utilice un cable mini-USB para conectarlo a su sistema.

 [8]: http://developer.android.com/tools/device.html

Usted puede empujar la aplicación para el dispositivo de la línea de comandos:

    $ cordova ejecutar Amazonas-fireos


Alternativamente dentro de Eclipse, haga clic derecho en el proyecto y elija **Run As → Android Application**.

**Nota**: Actualmente, la prueba mediante un emulador no es compatible para Amazon WebView basados en aplicaciones, además la API WebView Amazon sólo está disponible en dispositivos fuego OS. Para obtener más información, consulte la documentación de [Amazon WebView API SDK][1] .

### Ejecutar las banderas

Ejecutar el comando acepta parámetros opcionales como se especifica en el documento de Cordova Command Line Interface, fuego OS también acepta un adicional `--debug` bandera que permitirá herramientas para desarrolladores de cromo para la depuración de web remoto.

Para utilizar las herramientas para desarrolladores, escriba:

    $ cordova run --debug amazon-fireos


Esto permitirá a las herramientas en el cliente ejecutando. Entonces puede conectar al cliente por el reenvío de puertos mediante el Android Debug Bridge (adb) refiriéndose al nombre del paquete de la aplicación.

Por ejemplo:

    ADB tcp:9222 delantero localabstract:com.example.helloworld.devtools


Puede utilizar el DevTools mediante un navegador basado en Chromium desplazándose a:`http://localhost:9222`.

### Soporte opcional de Eclipse

Una vez creado, puede utilizar el Eclipse que viene con el SDK de Android para modificar el proyecto. Tenga cuidado que las modificaciones efectuadas a través de Eclipse se sobrescribirán si continúa utilizando herramientas de línea de comandos de Córdoba.

*   Inicie la aplicación de **Eclipse**.

*   Seleccione el elemento de menú **Nuevo proyecto**.

*   Elija **Proyecto Android de código existente** en el cuadro de diálogo resultante y pulse **siguiente**: ![][9]

*   Vaya a `hello` , o cualquier directorio que creó para el proyecto, luego en el `platforms/amazon-fireos` subdirectorio.

*   Eclipse le mostrará el Hola y Hola-CorddovaLib - 2 proyectos a agregarse. Añadir ambos.

*   Pulse **Finish**.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Una vez que se abre la ventana de Eclipse, puede aparecer una **X** de color rojo indicar los problemas irresueltos. Si es así, siga estos pasos adicionales:

*   Haga clic en el directorio del proyecto.

*   En el cuadro de diálogo **Properties** resultante, seleccione **Android** desde el panel de navegación.

*   Para el objetivo de construir proyecto, seleccione el nivel más alto de Android API (actualmente API nivel 19) instalado.

*   Haga clic en **OK**.

*   Seleccione **Clean** en el menú **Project**. Esto debería corregir todos los errores en el proyecto.
