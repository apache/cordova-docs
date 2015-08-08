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

# Guía de la plataforma BlackBerry 10

Esta guía le muestra cómo configurar el entorno de desarrollo para construir y desplegar aplicaciones Cordova para dispositivos BlackBerry 10. Para las versiones anteriores de BlackBerry, tienes que utilizar un conjunto diverso de herramientas de línea de comandos, descritas en la guía de la plataforma BlackBerry.

## Requisitos

El entorno de desarrollo está disponible en Windows, Mac y Linux.

Los desarrolladores deberían usar la `cordova` utilidad en conjunción con el SDK nativo de Blackberry. Ver la interfaz de línea de comandos para obtener información de cómo instalar `cordova` , agregar proyectos, entonces construir y desplegar para cada plataforma.

## Instalar el SDK nativo de BlackBerry

El SDK nativo de BlackBerry está disponible en [developer.blackberry.com][1]. Después de la instalación, tienes que añadir sus herramientas de línea de comandos a la ruta del sistema.

 [1]: http://developer.blackberry.com/native/download/

En Windows:

*   Ir a **mis Variables de entorno informático → propiedades → avanzada →**.

*   Anexar el directorio de instalación del SDK nativo a la ruta, por ejemplo:

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

En Mac y Linux:

*   Editar el `~/.bash_profile` archivo, añadir una línea como la siguiente, dependiendo de donde se instaló el SDK nativo:

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Ejecute lo siguiente para aplicar el cambio en el actual período de sesiones:

    $ fuente ~/.bash_profile

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

*   [Descargar][1]
*   [Getting Started][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Antes de probar una aplicación en un emulador o un dispositivo, tienes que activar el modo de desarrollo.

Inicie la imagen del emulador, luego elija la **configuración** de la pantalla de Inicio:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Desplácese hasta la **→ seguridad y privacidad, modo de desarrollo** sección y activar la opción:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

A continuación, ejecute el `emulate` comando para ver la aplicación:

    $ cordova emulate blackberry10 --devicepass <password>


## Implementar al dispositivo

Para desplegar a un dispositivo, asegúrese de que esté conectado a su computadora y se activa el modo de desarrollo.

A continuación, ejecute el `run` comando para ver la aplicación:

    $ cordova run blackberry10 --devicepass <password>


Si un token de depuración no está configurado para el dispositivo, un mensaje de error le pedirá que proporcione la contraseña ha definido al configurar el equipo para firmar las aplicaciones.

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## Depuración con WebInspector

Al depurar en el aparato o un emulador, puede ejecutar WebInspector remotamente para visualizar el estado interno de la aplicación. Un indicador muestra la dirección URL que le permite conectarse a su aplicación con un navegador web estándar. Para más información, vea [depuración utilizando WebInspector][5].

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Construir una versión

De forma predeterminada, ejecuta el `cordova build` comando crea un archivo de paquete sin firmar *pantalla* conveniente para probar en un dispositivo o simulador.

Uso `--release` para crear una versión adecuada para su distribución a través de BlackBerry World.

    $ cordova build --release --keystorepass <signing password>


El `--keystorepass` opción especifica la contraseña se ha definido al configurar el ordenador para firmar las aplicaciones.

## Desplegar en otras localidades

Las instrucciones anteriores asumen un dispositivo está conectado vía USB o un simulador se está ejecutando en el equipo local. También es posible desplegar a otros lugares.

Un conjunto de utilidades de línea de comandos se incluyen cuando se configura la plataforma BlackBerry 10 para su proyecto. El siguiente comando, en este caso ha sido invocado desde el directorio de alto nivel del proyecto, asocia un objetivo llamado *emu* con una dirección IP.

*   En Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   En Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

Una vez definido el objetivo, usted puede proporcionar al ejecutar comando usando `--target` :

    $ cordova run blackberry10 --target=emu
