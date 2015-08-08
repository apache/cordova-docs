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

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

En Mac y Linux:

*   Editar el `~/.bash_profile` archivo, añadir una línea como la siguiente, dependiendo de donde se instaló el SDK nativo:

    $ export PATH = ${PATH}: / aplicaciones/bbndk/host\_10\_1\_0\_132/darwin/x 86/usr/bin /

    o para el SDK nativo 10.2:

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Ejecute lo siguiente para aplicar el cambio en el actual período de sesiones:

    $ fuente ~/.bash_profile

## Configurar para firma

Si usted desea probar en un dispositivo o distribuir aplicaciones a través de BlackBerry World, su sistema debe ser configurado para firma de código.

Para obtener una clave de firma, visite el sitio web de BlackBerry y asegúrese de mantener la contraseña que especifique. A continuación, ejecute el `blackberry-signer` utilidad que se incluye con el SDK nativo de BlackBerry.

Aquí encontrará instrucciones detalladas:

*   [Regístrese para su código clave de firma.][2]

*   [Configurar su sistema para firma de código.][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Crear un proyecto

Uso el `cordova` utilidad para configurar un nuevo proyecto, como se describe en la interfaz de línea de comandos. Por ejemplo, en un directorio del código fuente:

    $ cordova crear Hola com.example.hello $ cd Hola $ cordova plataforma añadir construir blackberry10 $ cordova


## Desplegar en emulador

Si desea ejecutar un emulador de dispositivo, descargue e instale el simulador de BlackBerry 10.

*   [Descargar][1]
*   [Getting Started][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Antes de probar una aplicación en un emulador o un dispositivo, tienes que añadir un *objetivo* para su proyecto. Cada uno está identificado con un nombre único y asociado con una dirección IP. Tienes que conseguir la dirección IP desde el emulador antes de utilizarlo para ver las apps.

Inicie la imagen del emulador, luego elija la **configuración** de la pantalla de Inicio:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Desplácese hasta la **→ seguridad y privacidad, modo de desarrollo** sección y activar la opción obtener la dirección IP:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Un conjunto de utilidades de línea de comandos se incluyen cuando se configura la plataforma BlackBerry 10 para su proyecto. El siguiente comando, en este caso ha sido invocado desde el directorio de alto nivel del proyecto, asocia un objetivo llamado *la UEM* con la dirección IP que aparece arriba.

*   En Windows:

    $ platforms\blackberry10\cordova\target.bat agregar simulador emu 169.254.0.1 -t

*   En Mac/Linux:

    $ plataformas/blackberry10/Córdoba/destino añadir simulador emu 169.254.0.1 -t

A continuación, ejecute el `emulate` comando para ver la aplicación:

    $ cordova emular blackberry10


## Implementar al dispositivo

Para desplegar a un dispositivo, asegúrese de que esté conectado a su computadora. Activar el modo de desarrollo y obtener la dirección IP como descrito en la sección de emulador anterior. Usted también necesitará obtener el PIN de la la aplicación de **configuración** en **sobre → Hardware**:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Ejecute la utilidad de línea de comandos de objetivo para asociar un nombre a una dirección IP, contraseña del dispositivo y PIN.

*   En Windows:

    $ platforms\blackberry10\cordova\target.bat Agregar dispositivo mydevice 169.254.0.1 -t--contraseña 123456 - pin FFFF972E

*   En Mac/Linux:

    $ plataformas/blackberry10/Córdoba/destino Agregar dispositivo mydevice 169.254.0.1 -t--contraseña 123456 - pin FFFF972E

donde:

*   `--password`se refiere a la contraseña para desbloquear el dispositivo.

*   `--pin`se refiere al dispositivo de perno Obtenido de la aplicación de **ajustes** .

A continuación, ejecute el `run` comando para ver la aplicación:

    $ cordova ejecutar blackberry10


Si una ficha depuración no está aún configurada para el dispositivo, un mensaje de error le pide que utilice la plataforma ejecutar secuencia de comandos con la contraseña que proporcionó al registrarse para la firma de claves.

*   En Windows:

    $ platforms\blackberry10\cordova\run.bat--dispositivo--keystorepass Secr3To

*   En Mac/Linux:

    $ plataformas/blackberry10/Córdoba/ejecutar--dispositivo--keystorepass Secr3To

## Depuración con WebInspector

Al depurar en el aparato o un emulador, puede ejecutar WebInspector remotamente para visualizar el estado interno de la aplicación. Un indicador muestra la dirección URL que le permite conectarse a su aplicación con un navegador web estándar. Para más información, vea [depuración utilizando WebInspector][8].

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Construir una versión

De forma predeterminada, ejecuta el `cordova build` comando crea un archivo de paquete sin firmar *pantalla* conveniente para probar en un dispositivo o simulador.

Necesitará ejecutar diferentes `build` comando para crear una versión adecuada para su distribución a través de BlackBerry World. No depende de la `cordova` herramienta de CLI y en su lugar utiliza la siguiente sintaxis:

*   En Windows:

    $ platforms\blackberry10\cordova\build.bat--lanzamiento--keystorepass Secr3To

*   En Mac/Linux:

    $ plataformas/blackberry10/Córdoba/construcción--lanzamiento--keystorepass Secr3To

El `--keystorepass` opción especifica la contraseña se ha definido al configurar el ordenador para firmar las aplicaciones.
