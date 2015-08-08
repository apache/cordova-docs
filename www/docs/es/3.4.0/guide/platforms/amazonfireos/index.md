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

## Requerimientos y apoyo

Desarrollando aplicaciones Cordova para Amazon fuego OS requiere el SDK de Android y el Amazonas WebView SDK. Compruebe los requisitos para estos SDK en los siguientes enlaces:

*   [Sistema SDK de Android][1]

*   [Amazon WebView SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## Instalación

### SDK de Android

Instalar el SDK de Android desde [developer.android.com/sdk][1]. De lo contrario usted puede presentarse con una selección de donde instalar el SDK, mueva el descargado `adt-bundle` árbol a dondequiera que usted almacenar herramientas de desarrollo.

Cordova Herramientas de línea de comandos trabajar, es necesario incluir el SDK `tools` y `platform-tools` directorios en su entorno PATH.

En Mac, Linux u otras plataformas Unix-like, puede utilizar un editor de texto para crear o modificar el `~/.bash_profile` archivo, añadir una línea como la siguiente, dependiendo de donde se instala el SDK:

    export PATH = ${PATH}: / / adt-bundle/sdk/plataforma-herramientas de desarrollo: / desarrollo/adt-bundle/sdk/herramientas


Esto expone SDK tools en windows terminales recién inauguradas. De lo contrario corre para que estén disponibles en el actual período de sesiones:

    $ fuente ~/.bash_profile


Para modificar el entorno PATH en Windows 7:

*   Haga clic en el menú de **Inicio** en la esquina inferior izquierda del escritorio, haga clic en la **computadora**, luego haga clic en **Propiedades**.

*   En la columna de la izquierda, haga clic en **Configuración avanzada del sistema** .

*   En el cuadro de diálogo resultante, pulse **Las Variables de entorno**.

*   Seleccionar la variable **PATH** y pulse **Editar**.

*   Agregue lo siguiente a la ruta basada en donde se ha instalado el SDK, por ejemplo:

        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools


*   El valor de guardar y cerrar ambos cuadros de diálogo.

También necesitará habilitar Java y Ant. abrir un símbolo del sistema y el tipo `java` y también de tipo `ant` . Anexar a la trayectoria de cualquiera que no se puedan ejecutar:

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin


### Amazon WebView SDK

Descargue el SDK de WebView Amazonas del [Amazonas Developer Portal][2].

*   Crear un `libs/` carpeta `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` carpeta.
*   Añadir el `awv_interface.jar` desde el SDK descargado a`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## Abrir un proyecto en el SDK

Uso el `cordova` utilidad para configurar un nuevo proyecto, como se describe en la Córdoba del interfaz de comandos. Por ejemplo, en un directorio del código fuente:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


Una vez creado, aquí es cómo utilizar el SDK para modificarlo:

*   Inicie la aplicación de **Eclipse** .

*   Seleccione el elemento de menú **Nuevo proyecto** .

*   Elija **Proyecto Android de código existente** en el cuadro de diálogo resultante y pulse **siguiente**: ![][3]

*   Vaya a `hello` , o cualquier directorio que creó para el proyecto, luego en el `platforms/amazon-fireos` subdirectorio.

*   Pulse **Finalizar**.

 [3]: {{ site.baseurl }}/static/img/guide/platforms//eclipse_new_project.png

Una vez que se abre la ventana de Eclipse, puede aparecer una **X** de color rojo indicar los problemas irresueltos. Si es así, siga estos pasos adicionales:

*   Haga clic en el directorio del proyecto.

*   En el cuadro de diálogo **Propiedades** resultante, seleccione **Android** desde el panel de navegación.

*   Para el proyecto de construcción de destino, seleccione el nivel más alto de la API de Android instalado.

*   Haga clic en **Aceptar**.

*   Seleccione el menú **proyecto** **limpio** . Esto debe corregir todos los errores en el proyecto.

## Implementar al dispositivo

Para empujar una aplicación directamente al dispositivo, asegúrese de depuración USB está habilitado en el dispositivo como se describe en el [Sitio para desarrolladores de Android][4]y utilice un cable mini-USB para conectarlo a su sistema.

 [4]: http://developer.android.com/tools/device.html

Usted puede empujar la aplicación al dispositivo de la línea de comandos:

    $ cordova run amazon-fireos


Alternativamente dentro de Eclipse, haga clic derecho en el proyecto y elija **ejecuta como → aplicación para Android**.

**Nota**: Actualmente, la prueba mediante un emulador no es compatible para Amazon WebView basados en aplicaciones.
