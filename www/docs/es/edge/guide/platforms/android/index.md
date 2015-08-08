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

# Guía de la plataforma Android

Esta guía muestra cómo configurar su entorno SDK para desplegar aplicaciones Cordova para dispositivos Android y cómo utilizar opcionalmente Android centrado en herramientas de línea de comandos en su flujo de trabajo de desarrollo. Tienes que instalar el SDK de Android sin importar si desea utilizar estas herramientas plataforma centrada en la cáscara o multiplataforma Cordova CLI para el desarrollo. Para una comparación de las trayectorias de dos desarrollo, vea la información general. Para más detalles sobre el CLI, vea la interfaz de línea de comandos.

## Requisitos y apoyo

Cordova para Android requiere el SDK de Android que puede ser instalado en sistema operativo OS X, Linux o Windows. Consulte del SDK de Android [requisitos del sistema][1].

 [1]: http://developer.android.com/sdk/index.html#Requirements

Cordova soporta Android 4.0 (empezando por Android API nivel 14) y superiores. Como regla general, las versiones de Android se convierten soportadas por Cordova como sumergen por debajo del 5% en del Google [tablero de distribución][2]. Las versiones de Android antes de las API de nivel 10, y las versiones 3.x (panal, los niveles API 11-13) caen significativamente por debajo de ese umbral de 5%.

 [2]: http://developer.android.com/about/dashboards/index.html

## Instalar las herramientas de Shell Cordova

Si desea utilizar herramientas de Cordova cáscara Android-centrado en conjunción con el SDK, descargar Cordova desde [cordova.apache.org][3]. De lo contrario ignorar esta sección si va a utilizar la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos.

 [3]: http://cordova.apache.org

La descarga de Cordova contiene archivos separados para cada plataforma. Asegúrese de expandir el archivo apropiado, `android` en este caso, dentro de un directorio vacío. Las utilidades ejecutables correspondientes están disponibles en el nivel superior `bin` Directorio. (Si es necesario para obtener instrucciones más detalladas, consulte el archivo **README** ).

Estas herramientas de shell le permiten crear, construir y ejecutar aplicaciones Android. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins. Ver aplicación Plugins para obtener más información sobre cómo desarrollar plugins.

## Instale el Kit de desarrollo de Java (JDK)

Instalar [Java Development Kit (JDK) 7][4] o posterior.

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

Cuando se instala en Windows también tienes que definir la Variable de entorno `JAVA_HOME` según la ruta de instalación de JDK (por ejemplo, C:\Program Files\Java\jdk1.7.0_75).

## Instalar el SDK de Android

Instalar las [herramientas de Android SDK independiente][5] o [Android Studio][6]. Proceder con el `Estudio de Android` si tiene previsto desarrollar nueva Córdoba para Android plugins o utilizando herramientas nativas para ejecutar y depurar la plataforma Android. De lo contrario, `Stand-alone Android SDK Tools` son suficientes para construir e implementar aplicaciones Android.

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=tools
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=studio

Instrucciones de instalación detalladas están disponibles como parte de los enlaces de la instalación anteriores.

Cordova Herramientas de línea de comandos para trabajar, o la CLI que se basa en ellos, necesita incluir directorios `Herramientas` y `herramientas de la plataforma` de la SDK en tu `camino`. En un Mac, puede utilizar un editor de texto para crear o modificar el archivo `~/.bash_profile` , añadir una línea como la siguiente, dependiendo de donde se instala el SDK:

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


Esta línea en `~/.bash_profile` expone estas herramientas en windows terminales recién inauguradas. Si tu ventana de terminal ya está abierto en OSX o para evitar un cierre de sesión/inicio de sesión en Linux, ejecute esto para que estén disponibles en la ventana de terminal actual:

        $ source ~/.bash_profile


Para modificar el entorno `PATH` en Windows:

1.  Haga clic en el menú de **Inicio** en la esquina inferior izquierda del escritorio, haga clic derecho sobre **equipo**y seleccione **Propiedades**.

2.  Seleccione **Configuración avanzada del sistema** en la columna de la izquierda.

3.  En el cuadro de diálogo resultante, presione **Environment Variables**.

4.  Seleccione la variable **PATH** y pulse **Editar**.

5.  Añadir lo siguiente a la `PATH` basada en donde se ha instalado el SDK, por ejemplo:

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  El valor de guardar y cerrar ambos cuadros de diálogo.

## Instalar paquetes SDK

Abrir el administrador de Android SDK (por ejemplo, a través de terminal: `android`) e instalar:

1.  5.1.1 Android (API 22) platform SDK
2.  Android SDK Build-tools versión 19.1.0 o superior
3.  Repositorio de Android soporte (Extras)

Ver [Instalar paquetes SDK][7] para obtener más detalles.

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## Configurar un emulador

El sdk de Android no proporciona ninguna instancia de emulador predeterminada por defecto. Puede crear una nueva ejecutando `android` en la línea de comandos. La prensa **Herramientas → administrar AVDs** (Android dispositivos virtuales), luego elegir cualquier artículo de **Definiciones de dispositivos** en el cuadro de diálogo resultante:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Pulse **Crear AVD**, opcionalmente modificar el nombre, luego pulse **OK** para aceptar los cambios:

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

La AVD entonces aparece en la lista de **Dispositivos Android Virtual** :

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Para abrir el emulador como una aplicación independiente, seleccione la AVD y presione **Start**. Se lanza como lo haría en el dispositivo, con controles adicionales disponibles para los botones de hardware:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

Para una experiencia más rápida, puede utilizar la `Aceleración de la máquina Virtual` para mejorar la velocidad de ejecución. Muchas CPUs modernas ofrecen extensiones para ejecutar máquinas virtuales más eficientemente. Antes de usar este tipo de aceleración, es necesario determinar si CPU de su sistema actual de desarrollo, uno admite las siguientes tecnologías de virtualización:

*   **Tecnología de virtualización Intel** (VT-x, vmx) → [Intel VT-x procesador lista soportada][12]
*   **AMD Virtualization** (AMD-V, SVM), sólo se admite para Linux (desde mayo de 2006, todas las CPUs de AMD incluyen AMD-V, excepto Sempron).

 [12]: http://ark.intel.com/products/virtualizationtechnology

Otra forma de averiguar si su procesador Intel compatible con la tecnología VT-x, es mediante la ejecución de la `Utilidad de identificación de procesadores Intel`, para `Windows`puede descargarlo desde el [Centro de descarga][13]de Intel, o puede utilizar la [utilidad booteable][14], que es `Independiente del sistema operativo`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Después de instalar y ejecutar la `Utilidad de identificación de procesador Intel` sobre ventanas, obtendrá la ventana siguiente, con el fin de comprobar si su CPU es compatible con las tecnologías de virtualización:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

Para acelerar el emulador, tienes que descargar e instalar uno o más imágenes del sistema `x 86 de Intel Atom` , así como el `Intel Hardware acelerado ejecución Manager (HAXM)`.

Abre tu Android SDK Manager y seleccione la imagen del sistema `x 86 de Intel Atom` , para cualquier versión que desea probar. Luego ir a `Extras` `Acelerador Intel x 86 de emulador (HAXM)`y seleccione instalar los paquetes:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

Después de la descarga, ejecute al instalador de Intel, que está disponible en el SDK de Android en `extras/intel/Hardware_Accelerated_Execution_Manager`. **Nota**:`si tienes algún problema al instalar el paquete, usted puede encontrar más información y orientación paso a paso revise este` [Artículo de Intel][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Instalar una o más imágenes del sistema `x 86 de Intel Atom` , así como la `Acelerada ejecución administrador de Hardware de Intel`, disponible bajo **Extras**.

2.  Ejecute al instalador de Intel, que está disponible en el SDK de Android en `extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  Crear un nuevo AVD con el objetivo fijado a una imagen de Intel.

4.  Al iniciar el emulador, asegúrese que no hay error mensajes indicando la imposibilidad de cargar módulos HAX.

## Crear un nuevo proyecto

En este punto, para crear un nuevo proyecto puede elegir entre la herramienta de la cruz-plataforma CLI que se describe en la interfaz de línea de comandos, o el conjunto de herramientas de shell específicas para Android. Desde dentro de un directorio del código fuente, aquí es el enfoque CLI:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


Aquí es el enfoque de shell-herramienta de nivel inferior correspondiente para Unix y Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Construir el proyecto

Si utilizas la CLI en desarrollo, directorio de nivel superior `www` del directorio proyecto contiene los archivos de origen. Ejecutar cualquiera de éstos dentro del directorio del proyecto para la reconstrucción de la aplicación:

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


Si está utilizando las herramientas de shell específicas para Android en desarrollo, hay un enfoque diferente. Una vez que se genera el proyecto, fuente de la aplicación por defecto está disponible en el subdirectorio de `activos/www` . Los comandos están disponibles en su subdirectorio `cordova` .

El comando `build` limpia archivos de proyecto y reconstruye la aplicación. Aquí está la sintaxis para Mac y Windows. El primer par de ejemplos generará información de depuración, y la segunda crea las aplicaciones para el lanzamiento:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## Desplegar la aplicación

Puede utilizar la utilidad CLI `cordova` para desplegar la aplicación en el emulador o el dispositivo desde la línea de comandos:

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


De lo contrario, utilice la interfaz de shell alterno:

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


Puede utilizar **cordova run android --list** para ver todos los destinos disponibles y **cordova run android --target = target_name** para ejecutar la aplicación en un dispositivo específico o un emulador (por ejemplo, `cordova run android --target = "Nexus4_emulator"`).

También puede utilizar **cordova run --help** para ver opciones adicionales para construir y correr.

Esto empuja la aplicación a la pantalla de inicio y lo lanza:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

Cuando se `ejecuta` la aplicación, también se `construye` . Puede anexar adicional `--debug`, `--release`y `--nobuild` banderas para controlar cómo se construye, o incluso si es necesaria una reconstrucción:

        $ /path/to/project/cordova/run --emulator --nobuild


## Otros comandos

Los siguientes genera un registro detallado de la aplicación que se ejecuta:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


A continuación limpia los archivos del proyecto:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## Abra un nuevo proyecto en el SDK

Una vez que la plataforma android se agrega a su proyecto, puede abrir desde dentro de [Android Studio][6]:

1.  Inicie la aplicación **Android Studio** .

2.  Seleccione **Importar proyecto (Eclipse ADT, Gradle, etc.)**.

    ![][19]

3.  Seleccione la ubicación donde la plataforma android es almacenado (`su/proyecto/platform/android`).

    ![][20]

4.  Para la pregunta `Gradle Sync` puede responder simplemente **Sí**.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

Listo ahora y puede construir y ejecutar la aplicación directamente desde `Android Studio`.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

Ver [Resumen estudio Android][22] y [construcción y huyendo de Android Studio][23] para más detalles.

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html
