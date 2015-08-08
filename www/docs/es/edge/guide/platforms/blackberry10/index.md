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

# Guía de la plataforma BlackBerry 10

Esta guía le muestra cómo configurar su entorno SDK para desplegar aplicaciones Cordova para dispositivos BlackBerry 10. Para las versiones anteriores de BlackBerry, tienes que usar un diverso ambiente SDK y conjunto de herramientas de línea de comandos, que se describe en la guía de la plataforma BlackBerry. Para BlackBerry 10, tienes que instalar el SDK de independientemente de si desea utilizar el CLI Cordova multiplataforma para el desarrollo, o un estrecho conjunto de herramientas de línea de comandos centrado en plataforma. Para una comparación de las trayectorias de dos desarrollo, vea la información general. Para obtener más información sobre cada uno, ver el BlackBerry 10 Shell herramienta de guía y la interfaz de línea de comandos.

## Requisitos

El entorno de desarrollo está disponible en Windows, Mac y Linux.

Los desarrolladores deberían usar la `cordova` utilidad en conjunción con la BlackBerry WebWorks SDK o SDK nativo BlackBerry. Ver la interfaz de línea de comandos para obtener información de cómo instalar `cordova` , agregar proyectos, entonces construir y desplegar para cada plataforma.

Simulador del dispositivo blackBerry 10:

*   Procesador: Intel dual core 2.0 GHz/AMD Athlon 4200 + o superior
*   Espacio en disco: 10 GB
*   Memoria RAM: 4 GB
*   Virtualización: uno de los siguientes:
    *   **Tecnología de virtualización Intel** (VT, VT-x, vmx) → [Intel VT-x procesador lista soportada][1]
    *   **AMD Virtualization** (AMD-V, SVM) (Desde mayo de 2006 todas las CPU AMD incluyen excepto Sempron AMD-V).

 [1]: http://ark.intel.com/products/virtualizationtechnology

Más información sobre requisitos: [requisitos BB10 simulador][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## Instalar el SDK de BlackBerry WebWorks

Descargue e instale el BlackBerry WebWorks SDK de [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

El instalador sumará herramientas de línea de comandos a tu camino. Dependiendo de su sistema operativo, necesitará abrir una nueva ventana de terminal o volver a entrar.

## Instalar el SDK nativo de BlackBerry

Si tienes que compilar código nativo, por ejemplo en el desarrollo de un plugin nativo, usted necesitará instalar el SDK nativo de BlackBerry.

Para obtener el SDK nativo de BlackBerry, descargar e instalar el IDE para BlackBerry disponible desde [developer.blackberry.com][4], luego usando el IDE, instalar el SDK nativo de BlackBerry. Después de la instalación, tienes que añadir sus herramientas de línea de comandos a la ruta del sistema.

 [4]: http://developer.blackberry.com/native/download/

En Windows:

*   Ir a **mis PC → propiedades → avanzada → las Variables de entorno**.

*   Anexar el directorio de instalación del SDK nativo a la ruta, por ejemplo:

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


En Mac y Linux:

*   Editar el `~/.bash_profile` archivo, añadir una línea como la siguiente, dependiendo de donde se instaló el SDK nativo:

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    o para el SDK nativo 10.2:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   Ejecute lo siguiente para aplicar el cambio en el actual período de sesiones:

        $ source ~/.bash_profile


Si tienes cualquier problema ambiental, utilizando el SDK nativo desde la línea de comandos, ejecute el archivo apropiado para su plataforma, ubicado en la ruta de instalación:

*   En Windows → cáscara de MS-DOS:

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   En Windows → shell bash git:

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   En Linux → instalado como usuario root:

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   En Linux → instalado como usuario no-root:

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   En Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## Configurar para firma

Si usted desea probar en un dispositivo o distribuir aplicaciones a través de BlackBerry World, su sistema debe ser configurado para firma de código.

Para obtener una clave de firma, ir al \[formulario de pedido de la llaves del BlackBerry\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Seleccione la primera opción: "para BlackBerry10 aplicaciones desarrolladas usando BlackBerry NDK" y luego firmar o crear un BBID.

Escriba una contraseña y haga clic en "Obtener Token" para descargar bbidtoken.csk. Guardar este archivo en la ubicación predeterminada para su sistema operativo que se mostrará en la página de descarga.

El paso final es para generar un certificado de firma:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Crear un proyecto

Uso el `cordova` utilidad para configurar un nuevo proyecto, como se describe en la interfaz de línea de comandos. Por ejemplo, en un directorio del código fuente:

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build


## Desplegar en emulador

Si desea ejecutar un emulador de dispositivo, descargue e instale el simulador de BlackBerry 10.

*   [Descargar][4]
*   [Getting Started][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Antes de probar una aplicación en un emulador o un dispositivo, tienes que activar el modo de desarrollo.

Inicie la imagen del emulador, luego elija la **configuración** de la pantalla de Inicio:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Desplácese hasta la **→ seguridad y privacidad, modo de desarrollo** sección y activar la opción:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Un conjunto de utilidades de línea de comandos se incluyen cuando se configura la plataforma BlackBerry 10 para su proyecto. El siguiente comando, en este caso ha sido invocado desde el directorio de alto nivel del proyecto, asocia un objetivo llamado *la UEM* con la dirección IP que aparece arriba.

*   En Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   En Mac/Linux:

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


A continuación, ejecute el `emulate` comando para ver la aplicación:

        $ cordova emulate blackberry10


## Desplegar en el dispositivo

Para desplegar a un dispositivo, asegúrese de que esté conectado a su computadora. Activar el modo de desarrollo y obtener la dirección IP como descrito en la sección de emulador anterior. Usted también necesitará obtener el PIN de la la aplicación de **configuración** en **sobre → Hardware**:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Ejecute la utilidad de línea de comandos de objetivo para asociar un nombre a una dirección IP, contraseña del dispositivo y PIN.

*   En Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   En Mac/Linux:

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


donde:

*   `--password`se refiere a la contraseña para desbloquear el dispositivo.

*   `--pin`se refiere al dispositivo de perno Obtenido de la aplicación de **ajustes** .

A continuación, ejecute el `run` comando para ver la aplicación:

        $ cordova ejecutar blackberry10


Si una ficha depuración no está aún configurada para el dispositivo, un mensaje de error le pide que utilice la plataforma ejecutar secuencia de comandos con la contraseña que proporcionó al registrarse para la firma de claves.

*   En Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   En Mac/Linux:

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## Depuración con WebInspector

Al depurar en el aparato o un emulador, puede ejecutar WebInspector remotamente para visualizar el estado interno de la aplicación. Un indicador muestra la dirección URL que le permite conectarse a la aplicación con un navegador web estándar. Para más información, vea [depuración utilizando WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Construir una versión

De forma predeterminada, ejecuta el `cordova build` comando crea un archivo de paquete sin firmar *pantalla* conveniente para probar en un dispositivo o simulador.

Uso `--release` para crear una versión adecuada para su distribución a través de BlackBerry World.

    $ cordova build --release --keystorepass <signing password>


El `--keystorepass` opción especifica la contraseña se ha definido al configurar el ordenador para firmar las aplicaciones.

## Desplegar en otras localidades

Las instrucciones anteriores asumen un dispositivo está conectado vía USB o un simulador se está ejecutando en el equipo local. También es posible desplegar a otros lugares.

Un conjunto de utilidades de línea de comandos se incluyen cuando se configura la plataforma BlackBerry 10 para su proyecto. El siguiente comando, en este caso ha sido invocado desde el directorio de alto nivel del proyecto, asocia un objetivo llamado *emu* con una dirección IP.

*   En Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   En Mac/Linux:

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


Una vez definido el objetivo, usted puede proporcionar al ejecutar comando usando `--target` :

    $ cordova run blackberry10 --target=emu
