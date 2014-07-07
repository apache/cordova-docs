* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guía de la plataforma Android

Esta guía muestra cómo configurar su entorno SDK para desplegar aplicaciones Cordova para dispositivos Android y cómo utilizar opcionalmente Android centrado en herramientas de línea de comandos en su flujo de trabajo de desarrollo. Tienes que instalar el SDK de Android sin importar si desea utilizar estas herramientas plataforma centrada en la cáscara o multiplataforma Cordova CLI para el desarrollo. Para una comparación de las trayectorias de dos desarrollo, vea la información general. Para más detalles sobre el CLI, vea la interfaz de línea de comandos.

## Requisitos y apoyo

Cordova para Android requiere el SDK de Android. Consulte del SDK de Android [requisitos del sistema][1].

 [1]: http://developer.android.com/sdk/index.html

Cordova soporta Android 2.3 (Gingerbread, empezando por Android API nivel 10) y 4.x. Como regla general, las versiones de Android se convierten soportadas por Cordova como sumergen por debajo del 5% en del Google [tablero de distribución][2]. Las versiones de Android antes de las API de nivel 10, y las versiones 3.x (panal, los niveles API 11-13) caen significativamente por debajo de ese umbral de 5%.

 [2]: http://developer.android.com/about/dashboards/index.html

## Instalar las herramientas de Shell Cordova

Si desea utilizar herramientas de Cordova cáscara Android-centrado en conjunción con el SDK, descargar Cordova desde [cordova.apache.org][3]. De lo contrario ignorar esta sección si va a utilizar la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos.

 [3]: http://cordova.apache.org

La descarga de Cordova contiene archivos separados para cada plataforma. Asegúrese de expandir el archivo apropiado, `android` en este caso, dentro de un directorio vacío. Las utilidades ejecutables correspondientes están disponibles en el nivel superior `bin` Directorio. (Si es necesario para obtener instrucciones más detalladas, consulte el archivo **README** ).

Estas herramientas de shell le permiten crear, construir y ejecutar aplicaciones Android. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins. Ver aplicación Plugins para obtener más información sobre cómo desarrollar plugins.

Instalar el SDK de Android desde [developer.android.com/sdk][4]. El sdk de android es distribuido como un archivo 'adt - bundle - < os > - < arco > - < ver >'. En windows, el adt-paquete viene con un instalador. En OSX y Linux, simplemente descomprimir el 'adt-bundle' en el lugar se almacenan herramientas de desarrollo. [Aquí encontrará información más detallada sobre la configuración del SDK de Android][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

Para Cordova Herramientas de línea de comandos para el trabajo o la CLI que se basa en ellos, es necesario incluir el SDK `tools` y `platform-tools` directorios en su `PATH` . En un Mac, puede utilizar un editor de texto para crear o modificar el `~/.bash_profile` archivo, añadir una línea como la siguiente, dependiendo de donde se instala el SDK:

        export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools
    

Añada las rutas para `java` y `ant` si es necesario. Esta línea en `~/.bash_profile` expone estas herramientas en windows terminales recién inauguradas. Si tu ventana de terminal ya está abierto en OSX o para evitar un cierre de sesión/inicio de sesión en Linux, ejecute esto para que estén disponibles en la ventana de terminal actual:

        $ source ~/.bash_profile
    

Para modificar el `PATH` ambiente en Windows 7:

1.  Haga clic en el menú de **Inicio** en la esquina inferior izquierda del escritorio, haga clic derecho sobre **equipo**y seleccione **Propiedades**.

2.  Seleccione **Configuración avanzada del sistema** en la columna de la izquierda.

3.  En el cuadro de diálogo resultante, pulse **Las Variables de entorno**.

4.  Seleccionar la variable **PATH** y pulse **Editar**.

5.  Añadir lo siguiente a la `PATH` basada en donde se ha instalado el SDK, por ejemplo:
    
        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools
        

6.  El valor de guardar y cerrar ambos cuadros de diálogo.

También necesitará habilitar Java y Ant. abrir un símbolo del sistema y el tipo `java` y también de tipo `ant` . Añadir a la `PATH` cualquiera de éstos no se ejecuta:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## Abra un nuevo proyecto en el SDK

En este punto, para crear un nuevo proyecto puede elegir entre la herramienta de la cruz-plataforma CLI que se describe en la interfaz de línea de comandos, o el conjunto de herramientas de shell específicas para Android. Desde dentro de un directorio del código fuente, aquí es el enfoque CLI:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

Aquí es el enfoque de shell-herramienta de nivel inferior correspondiente para Unix y Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

Aquí es cómo utilizar el SDK para modificarlo:

1.  Inicie la aplicación de **Eclipse** .

2.  Seleccione el elemento de menú **Nuevo proyecto** .

3.  Elija **Proyecto Android de código existente** en el cuadro de diálogo resultante y pulse **siguiente**:
    
    ![][6]

4.  Si estás usando CLI, desplácese hasta la `hello` directorio creado para el proyecto, luego a la `platforms/android` subdirectorio. Alternativamente, si utilizas el `create` utilidad de shell, simplemente vaya a la `hello` Directorio.

5.  Pulse **Finalizar**.

 [6]: img/guide/platforms/android/eclipse_new_project.png

Una vez que se abre la ventana de Eclipse, puede aparecer una **X** de color rojo indicar los problemas irresueltos. Si es así, siga estos pasos adicionales:

1.  Haga clic en el directorio del proyecto.

2.  En el cuadro de diálogo **Propiedades** resultante, seleccione **Android** desde el panel de navegación.

3.  Para el proyecto de construcción de destino, seleccione el nivel más alto de la API de Android instalado.

4.  Haga clic en **Aceptar**.

5.  Seleccione el menú **proyecto** **limpio** . Esto debe corregir todos los errores en el proyecto.

## Construir el proyecto

Si utilizas la CLI en el desarrollo, el directorio del proyecto es de alto nivel `www` directorio contiene los archivos de origen. Ejecutar cualquiera de éstos dentro del directorio del proyecto para la reconstrucción de la aplicación:

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

Si está utilizando las herramientas de shell específicas para Android en desarrollo, hay un enfoque diferente. Una vez que se genera el proyecto, fuente de la aplicación por defecto está disponible en el `assets/www` subdirectorio. Los comandos están disponibles en su `cordova` subdirectorio.

El `build` comando limpia archivos de proyecto y reconstruye la aplicación. Aquí está la sintaxis para Mac y Windows. El primer par de ejemplos generará información de depuración, y la segunda firma las aplicaciones para el lanzamiento:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## Configurar un emulador

Se puede utilizar ya sea la `cordova` CLI utilidad o cáscara de Android-centrado de Cordova Herramientas para ejecutar una aplicación en un emulador. De cualquier manera, el SDK primero debe configurarse para mostrar al menos un dispositivo. Para ello, utilice el Android SDK Manager, una aplicación Java que funciona por separado del Eclipse. Hay dos maneras para abrirlo:

1.  Ejecute `android` en la línea de comandos.

2.  Desde dentro de Eclipse, presione este icono de la barra de herramientas:
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

Una vez abierto, el Android SDK Manager muestra varias bibliotecas de tiempo de ejecución:

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

Elija **Herramientas → administrar AVDs** (Android dispositivos virtuales), a continuación elegir cualquier artículo de **Definiciones de dispositivos** en el cuadro de diálogo resultante:

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

Pulse **Crear AVD**, opcionalmente modificar el nombre, luego pulse **OK** para aceptar los cambios:

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

La AVD entonces aparece en la lista de **Dispositivos Android Virtual** :

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

Para abrir el emulador como una aplicación independiente, seleccione la AVD y presione **Start**. Se lanza como lo haría en el dispositivo, con controles adicionales disponibles para los botones de hardware:

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## Desplegar en emulador

En este punto se puede utilizar la `cordova` utilidad CLI para desplegar la aplicación en el emulador desde la línea de comandos:

        $ cordova emulate android
    

De lo contrario utilice la interfaz de shell alterno:

        $ /path/to/project/cordova/run --emulator
    

En lugar de depender de cualquier emulador está habilitado actualmente dentro del SDK, puede hacer referencia a cada uno de los nombres que usted suministra:

        $ /path/to/project/cordova/run --target=NAME
    

Esto empuja la aplicación a la pantalla de inicio y lo lanza:

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

Cuando te `run` la aplicación, también `build` lo. Se pueden añadir adicional `--debug` , `--release` , y `--nobuild` banderas para controlar cómo se construye, o incluso si es necesaria una reconstrucción:

        $ /path/to/project/cordova/run --emulator --nobuild
    

Si en cambio están trabajando dentro de Eclipse, haga clic derecho en el proyecto y elija **Ejecutar como → aplicación para Android**. Se le podría especificar una AVD si no aparece ninguna ya abierto.

Para una experiencia más rápida, puede utilizar el `Virtual Machine Acceleration` para mejorar la velocidad de ejecución. Muchas CPUs modernas ofrecen extensiones para ejecutar máquinas virtuales más eficientemente. Antes de usar este tipo de aceleración, es necesario determinar si CPU de su sistema actual de desarrollo, uno admite las siguientes tecnologías de virtualización:

*   **Tecnología de virtualización Intel** (VT-x, vmx) → [Intel VT-x procesador lista soportada][14]
*   **AMD Virtualization** (AMD-V, SVM), sólo se admite para Linux (desde mayo de 2006, todas las CPUs de AMD incluyen AMD-V, excepto Sempron).

 [14]: http://ark.intel.com/products/virtualizationtechnology

Otra forma de averiguar si su procesador Intel compatible con la tecnología VT-x, es mediante la ejecución de la `Intel Processor Identification Utility` , para `Windows` puede descargarlo desde el [Centro de descarga][15]de Intel, o puede utilizar la [utilidad booteable][16], que es`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Después de instalar y ejecutar el `Intel Processor Identification Utility` sobre ventanas, obtendrá la ventana siguiente, con el fin de comprobar si su CPU es compatible con las tecnologías de virtualización:

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

Para acelerar el emulador, tienes que descargar e instalar uno o más `Intel x86 Atom` imágenes del sistema, así como la`Intel Hardware Accelerated Execution Manager (HAXM)`.

Abra su Android SDK Manager y seleccione la `Intel x86 Atom` imagen del sistema, para cualquier versión que desea probar. Luego ir a `Extras` y seleccione `Intel x86 Emulator Accelerator (HAXM)` e instalar los paquetes:

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

Después de la descarga, ejecute el instalador de Intel, que está disponible en el SDK de Android en `extras/intel/Hardware_Accelerated_Execution_Manager` . **Nota**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [artículo de Intel][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Instalar uno o más `Intel x86 Atom` imágenes del sistema así como el `Intel Hardware Accelerated Execution Manager` , disponible bajo **Extras**.

2.  Ejecute al instalador de Intel, que está disponible en el SDK de Android en`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  Crear un nuevo AVD con el objetivo fijado a una imagen de Intel.

4.  Al iniciar el emulador, asegúrese que no hay error mensajes indicando la imposibilidad de cargar módulos HAX.

## Implementar al dispositivo

Para empujar una aplicación directamente al dispositivo, asegúrese de depuración USB está habilitado en el dispositivo como se describe en el [Sitio para desarrolladores de Android][20]y utilice un cable mini-USB para conectarlo a su sistema.

 [20]: http://developer.android.com/tools/device.html

Puede utilizar este comando CLI para empujar la aplicación para el dispositivo:

        $ cordova run android
    

.. .o utilice esta interfaz Android centrado en la cáscara:

        $ /path/to/project/cordova/run --device
    

Con sin banderas especificados, el `run` comando detecta un dispositivo conectado, o un emulador ejecutando si no se encuentra ningún dispositivo, de lo contrario se solicita para especificar un emulador.

Para ejecutar la aplicación desde dentro de Eclipse, haga clic derecho en el proyecto y elija **Ejecutar como → aplicación para Android**.

## Otros comandos

Los siguientes genera un registro detallado de la aplicación que se ejecuta:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

A continuación limpia los archivos del proyecto:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat