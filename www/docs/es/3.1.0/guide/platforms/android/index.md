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

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos Android. Vea el siguiente para obtener más información específica de la plataforma:

*   Configuración de Android
*   Android WebViews
*   Android Plugins
*   Actualizar Android
*   Android Herramientas de línea de comandos

Las herramientas de línea de comandos anteriores se refieren a las versiones anteriores Cordova 3.0. Ver la interfaz de línea de comandos de Cordova para obtener más información sobre la interfaz actual.

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

## Instalar el SDK

Instalar el SDK de Android desde [developer.android.com/sdk][3]. De lo contrario usted puede presentarse con una selección de donde instalar el SDK, mueva el descargado `adt-bundle` árbol a dondequiera que usted almacenar herramientas de desarrollo.

 [3]: http://developer.android.com/sdk/

Cordova Herramientas de línea de comandos trabajar, es necesario incluir el SDK `tools` y `platform-tools` directorios en su entorno PATH. En Mac, puede utilizar un editor de texto para crear o modificar el `~/.bash_profile` archivo, añadir una línea como la siguiente, dependiendo de donde se instala el SDK:

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools


Esto expone SDK tools en windows terminales recién inauguradas. De lo contrario corre para que estén disponibles en el actual período de sesiones:

    $ source ~/.bash_profile


Para modificar el entorno PATH en Windows 7:

*   Haga clic en el menú de **Inicio** en la esquina inferior izquierda del escritorio, haga clic en la **computadora**, luego haga clic en **Propiedades**.

*   En la columna de la izquierda, haga clic en **Configuración avanzada del sistema** .

*   En el cuadro de diálogo resultante, pulse **Las Variables de entorno**.

*   Seleccionar la variable **PATH** y pulse **Editar**.

*   Agregue lo siguiente a la ruta basada en donde se ha instalado el SDK, por ejemplo:

        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools


*   El valor de guardar y cerrar ambos cuadros de diálogo.

También necesitará habilitar Java y Ant. abrir un símbolo del sistema y el tipo `java` y también de tipo `ant` . Anexar a la trayectoria de cualquiera que no se puedan ejecutar:

        ; %JAVA_HOME%\bin;%ANT_HOME%\bin


## Abrir un proyecto en el SDK

Uso el `cordova` utilidad para configurar un nuevo proyecto, como se describe en el Cordova la línea de comandos de interfaz. Por ejemplo, en un directorio del código fuente:

        $ cordova crear Hola com.example.hello "HelloWorld" $ cd Hola $ cordova plataforma añadir construir android $ cordova


Una vez creado, aquí es cómo utilizar el SDK para modificarlo:

*   Inicie la aplicación de **Eclipse** .

*   Seleccione el elemento de menú **Nuevo proyecto** .

*   Elija **Proyecto Android de código existente** en el cuadro de diálogo resultante y pulse **siguiente**: ![][4]

*   Vaya a `hello` , o cualquier directorio que creó para el proyecto, luego en el `platforms/android` subdirectorio.

*   Pulse **Finalizar**.

 [4]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

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

    ![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

Una vez abierto, el Android SDK Manager muestra varias bibliotecas de tiempo de ejecución:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

Elija **Herramientas → administrar AVDs** (Android dispositivos virtuales), a continuación elegir cualquier artículo de **Definiciones de dispositivos** en el cuadro de diálogo resultante:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Pulse **Crear AVD**, opcionalmente modificar el nombre, luego pulse **OK** para aceptar los cambios:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

La AVD entonces aparece en la lista de **Dispositivos Android Virtual** :

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Para abrir el emulador como una aplicación independiente, seleccione la AVD y presione **Start**. Se lanza como lo haría en el dispositivo, con controles adicionales disponibles para los botones de hardware:

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

En este punto se puede utilizar la `cordova` utilidad para desplegar la aplicación en el emulador desde la línea de comandos:

        $ cordova emular android


Si en cambio están trabajando dentro de Eclipse, haga clic derecho en el proyecto y elija **ejecuta como → aplicación para Android**. Se le podría especificar una AVD si no aparece ninguna ya abierto.

Para una experiencia más rápida, utilice una imagen de emulador basados en Intel:

*   Instalar uno o más `Intel x86 Atom` imágenes del sistema así como el `Intel Hardware Accelerated Execution Manager` , disponible bajo **Extras**.

*   Ejecute al instalador de Intel, que está disponible en el SDK de Android en`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   Crear un nuevo AVD con el objetivo fijado a una imagen de Intel.

*   Al iniciar el emulador, asegúrese que no hay error mensajes indicando la imposibilidad de cargar módulos HAX.

## Desplegar en el dispositivo

Para empujar una aplicación directamente al dispositivo, asegúrese de depuración USB está habilitado en el dispositivo como se describe en el [Sitio para desarrolladores de Android][11]y utilice un cable mini-USB para conectarlo a su sistema.

 [11]: http://developer.android.com/tools/device.html

Usted puede empujar la aplicación al dispositivo de la línea de comandos:

        $ cordova corre android


Alternativamente dentro de Eclipse, haga clic derecho en el proyecto y elija **ejecuta como → aplicación para Android**.
