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

# Guía de la plataforma Android

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos Android. Muestra cómo instalar el SDK de Android, abrir un proyecto de Android en el SDK e implementarlo en un emulador o dispositivo. Debes seguir las instrucciones para instalar el SDK de Android, independientemente de si usted utiliza el flujo de trabajo multiplataforma discuten en la descripción, o las herramientas de shell centrada en plataforma detalladas en Android Herramientas de línea de comandos.

Vea el siguiente para obtener más información específica de la plataforma:

*   Configuración de Android
*   Android WebViews
*   Android Plugins
*   Actualizar Android
*   Android Herramientas de línea de comandos

Las herramientas de línea de comandos anteriores se refieren a las versiones anteriores Cordova 3.0. Ver la interfaz de línea de comandos para obtener información sobre la interfaz actual.

## Requisitos y apoyo

Consulte los [requisitos del sistema][1] para el SDK de Android.

 [1]: http://developer.android.com/sdk/index.html

Cordova soporta Android 2.2, 2.3 y 4.x. Como regla general, las plataformas son desaprobadas como sumergen por debajo del 5% en del Google [tablero de distribución][2].

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Los desarrolladores deberían usar la `cordova` utilidad en conjunción con el SDK de Android. Ver la interfaz de línea de comandos para obtener información como instalarlo, agregar proyectos, entonces construir e implementar un proyecto.

Instalar el SDK de Android desde [developer.android.com/sdk][3]. El sdk de android es distribuido como un archivo 'adt - bundle - < os > - < arco > - < ver >'. En windows, el adt-paquete viene con un instalador. En OSX y Linux, simplemente descomprimir el 'adt-bundle' en el lugar se almacenan herramientas de desarrollo. [Aquí encontrará información más detallada sobre la configuración del SDK de Android][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

Cordova Herramientas de línea de comandos trabajar, es necesario incluir el SDK `tools` y `platform-tools` directorios en su entorno PATH. Usted también necesitará `java` y `ant` . Ya que tenga `java` y `ant` en su entorno PATH, trata de invocarlos desde un indicador de línea de comandos para ver si están desaparecidos y agregar sólo lo que le falta a su trayectoria. Tenga en cuenta que los Mavericks omite `ant` en comparación con versiones anteriores de OSX, así que puede que necesites instalar `ant` por separado si usas Mavericks o posterior de OSX. En OSX o Linux, puede utilizar un editor de texto para crear o modificar el `~/.bash_profile` archivo, añadir una línea como la siguiente (modificar los lugares a donde está instalado el SDK en su estación de trabajo):

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools


Añada las rutas para `java` y `ant` si es necesario. Esta línea en `~/.bash_profile` expone estas herramientas en windows terminales recién inauguradas. Si tu ventana de terminal ya está abierto en OSX o para evitar un cierre de sesión/inicio de sesión en Linux, ejecute esto para que estén disponibles en la ventana de terminal actual:

    $ fuente ~/.bash_profile


Para modificar el entorno PATH en Windows:

*   Haga clic en el menú de **Inicio** en la esquina inferior izquierda del escritorio, haga clic en la **computadora**, luego haga clic en **Propiedades**.

*   En la columna de la izquierda, haga clic en **Configuración avanzada del sistema** .

*   En el cuadro de diálogo resultante, pulse **Las Variables de entorno**.

*   Seleccionar la variable **PATH** y pulse **Editar**.

*   Agregue lo siguiente a la ruta basada en donde se ha instalado el SDK, por ejemplo:

        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools


*   El valor de guardar y cerrar ambos cuadros de diálogo.

*   También necesitará agregar Java y Ant. abran símbolo del sistema y escriba `java` y también de tipo `ant` . Para cualquiera que no se ejecutan, anexar a la ruta como esta:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## Abrir un proyecto en el SDK

Uso el `cordova` utilidad para configurar un nuevo proyecto, como se describe en la Córdoba del interfaz de comandos. Por ejemplo, en un directorio del código fuente:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


Una vez creado, puede utilizar el Eclipse que viene con el SDK de Android para modificarlo:

*   Inicie la aplicación de **Eclipse** .

*   Seleccione el elemento de menú **Nuevo proyecto** .

*   Elija **Proyecto Android de código existente** en el cuadro de diálogo resultante y pulse **siguiente**: ![][5]

*   Vaya a `hello` , o cualquier directorio que creó para el proyecto, luego en el `platforms/android` subdirectorio.

*   Asegúrese de que ambos `hello` y `hello-CordovaLib` proyectos son seleccionados para ser importados. El `hello-CordovaLib` proyecto es necesaria a partir de Cordova 3.3.0 porque Cordova ahora se utiliza como una biblioteca de Android en lugar de un archivo jar.

*   Pulse **Finalizar**.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Una vez que se abre la ventana de Eclipse, puede aparecer una **X** de color rojo indicar los problemas irresueltos. Si es así, siga estos pasos adicionales:

*   Haga clic en el directorio del proyecto.

*   En el cuadro de diálogo **Propiedades** resultante, seleccione **Android** desde el panel de navegación.

*   Para el proyecto de construcción de destino, seleccione el nivel más alto de la API de Android instalado.

*   Haga clic en **Aceptar**.

*   Seleccione el menú **proyecto** **limpio** . Esto debe corregir todos los errores en el proyecto.

## Desplegar en emulador

Puede utilizar la `cordova` utilidad para ejecutar una aplicación en un emulador, o usted puede ejecutar dentro del SDK. De cualquier manera, el SDK primero debe configurarse para mostrar al menos un dispositivo. Para ello, utilice el Android SDK Manager, una aplicación Java que funciona por separado del Eclipse. Hay dos maneras para abrirlo:

*   Ejecute `android` en la línea de comandos.

*   Desde dentro de Eclipse, presione este icono de la barra de herramientas:

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

Una vez abierto, el Android SDK Manager muestra varias bibliotecas de tiempo de ejecución:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

Elija **Herramientas → administrar AVDs** (Android dispositivos virtuales), a continuación elegir cualquier artículo de **Definiciones de dispositivos** en el cuadro de diálogo resultante:

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

En este punto se puede utilizar la `cordova` utilidad para desplegar la aplicación en el emulador desde la línea de comandos:

        $ cordova emular android


Si en cambio trabajas dentro de Eclipse, haga clic derecho en el proyecto y elija **Ejecutar como → aplicación para Android**. Se le podría especificar una AVD si no aparece ninguna ya abierto.

Para una experiencia más rápida, puede utilizar el `Virtual Machine Acceleration` para mejorar la velocidad de ejecución. Muchas CPUs modernas ofrecen extensiones para ejecutar máquinas virtuales más eficientemente. Antes de usar este tipo de aceleración, es necesario determinar si CPU de su sistema actual de desarrollo, uno admite las siguientes tecnologías de virtualización:

*   **Tecnología de virtualización Intel** (VT-x, vmx) → [Intel VT-x procesador lista soportada][12]
*   **AMD Virtualization** (AMD-V, SVM), sólo se admite para Linux (desde mayo de 2006, todas las CPUs de AMD incluyen AMD-V, excepto Sempron).

 [12]: http://ark.intel.com/products/virtualizationtechnology

Otra forma de averiguar si su procesador Intel compatible con la tecnología VT-x, es mediante la ejecución de la `Intel Processor Identification Utility` , para `Windows` puede descargarlo desde el [Centro de descarga][13]de Intel, o puede utilizar la [utilidad booteable][14], que es`OS Independent`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Después de instalar y ejecutar el `Intel Processor Identification Utility` sobre ventanas, obtendrá la ventana siguiente, con el fin de comprobar si su CPU es compatible con las tecnologías de virtualización:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

Para acelerar el emulador, tienes que descargar e instalar uno o más `Intel x86 Atom` imágenes del sistema, así como la`Intel Hardware Accelerated Execution Manager (HAXM)`.

Abra su Android SDK Manager y seleccione la `Intel x86 Atom` imagen del sistema, para cualquier versión que desea probar. Luego ir a `Extras` y seleccione `Intel x86 Emulator Accelerator (HAXM)` e instalar los paquetes:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

Después de la descarga, ejecute el instalador de Intel, que está disponible en el SDK de Android en `extras/intel/Hardware_Accelerated_Execution_Manager` . **Nota**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [artículo de Intel][17] .

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

Una vez instalado, con el fin de probar, crear nuevos un AVD con el `CPU/ABI` a un `Intel (Atom) x86` imagen:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_new_and_dev_intel.png

Si usted está usando `Linux-based system` , siga las instrucciones en el [Sitio para desarrolladores de Android][19].

 [19]: http://developer.android.com/tools/devices/emulator.html#vm-linux

Al iniciar el emulador, asegúrese que no hay error mensajes indicando la imposibilidad de cargar módulos HAXM.

## Implementar al dispositivo

Para empujar una aplicación directamente al dispositivo, asegúrese de depuración USB está habilitado en el dispositivo como se describe en el [Sitio para desarrolladores de Android][20]y utilice un cable mini-USB para conectarlo a su sistema.

 [20]: http://developer.android.com/tools/device.html

Usted puede empujar la aplicación al dispositivo de la línea de comandos:

        $ cordova run android


Alternativamente dentro de Eclipse, haga clic derecho en el proyecto y elija **Ejecutar como → aplicación para Android**.
