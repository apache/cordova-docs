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

# Guía de la plataforma BlackBerry

Esta guía le muestra cómo configurar un entorno de SDK para aplicaciones para la plataforma BlackBerry antes de la versión 10. Si quieres apuntar a la versión más reciente, consulte a la guía de plataforma BlackBerry 10. Vea el siguiente para obtener más información específica de la plataforma:

*   Configuración de blackBerry
*   Actualizar BlackBerry
*   Plugins de blackBerry
*   Herramientas de línea de comandos de blackBerry

Las herramientas de línea de comandos anteriores se refieren a las versiones anteriores Cordova 3.0. Ver la interfaz de línea de comandos para obtener información sobre la interfaz actual.

## Requisitos y apoyo

Esta versión de BlackBerry no es compatible con el `cordova` utilidad se describe en la interfaz de línea de comandos, sino por un conjunto separado de las herramientas de línea de comandos. Descargar la distribución Cordova desde [cordova.apache.org][1].

 [1]: http://cordova.apache.org/#download

Cordova para BlackBerry basa en el [marco de BlackBerry WebWorks][2], que está disponible para Windows XP (32-bit), Windows 7 (32 bits y 64 bits) y Mac (OS X 10.6.4+). WebWorks aplicaciones puede *sólo* ser desplegados en las siguientes plataformas de BlackBerry:

 [2]: https://bdsc.webapps.blackberry.com/html5

*   BlackBerry OS 5.0 y superiores
*   BlackBerry PlayBook
*   BlackBerry 10 (QNX)

WebWorks requiere el Kit de desarrollo de Java (JDK). Para Windows, utilice la versión de 32 bits de [Oracle JDK][3]. Java instalado por defecto en Mac OS X hasta la versión 10.7, que requiere [una instalación por separado][4]. También requiere Apache Ant, que en Mac es parte de la instalación de Java. La versión de Windows está disponible en [ant.apache.org][5].

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## Instalar el SDK

Descargar e instalar el SDK WebWorks apropiado para su desarrollo. BlackBerry PlayBook y BlackBerry Smartphone WebWorks SDK pueden descargarse de las siguientes ubicaciones.

*   \[BlackBerry PlayBook SDK\] (https://developer.blackberry.com/html5/download/#playbook) y [Adobe Air SDK][6]

*   \[SDK de Smartphones blackBerry\] (https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## Registro para firmar las claves

Si desea publicar su solicitud en BlackBerry App World, o en un dispositivo real, usted necesitará inscribirse en un juego de llaves de firma de código libre. Para ello, complete el [Formulario de pedido de llaves de BlackBerry][7]. Una vez que reciba las llaves de tu firma, requieren configuración. Consulte el [sitio web de BlackBerry HTML5/WebWorks][8] para obtener información.

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Instalar Cordova

Descargue y extraiga la copia más reciente de [Córdoba][1].

## Configurar un nuevo proyecto

*   Abrir un terminal de línea de comandos y vaya a donde extrajo Cordova.

*   Hay un directorio para cada plataforma que apoya a Córdoba. Desplácese hasta el `blackberry` Directorio.

*   El `blackberry` directorio contiene varios subdirectorios. El `example` directorio contiene un proyecto completo de Córdoba. Copia el `example` Directorio a otra ubicación en tu computadora y navegar por allí.

*   Editar el `project.properties` archivo para especificar el SDK WebWorks está utilizando. Por ejemplo, aquí están los ajustes respectivos para BlackBerry PlayBook, BlackBerry Smartphone (OS5-7) o BlackBerry 10 (QNX):
    
        PlayBook.bbwp.dir=C:\\Program Files\\Research en Motion\\BlackBerry WebWorks SDK para TabletOS 2.1.0.6\\bbwp blackberry.bbwp.dir=C:\\Program Files\\Research en Motion\\BlackBerry WebWorks empaquetador qnx.bbwp.dir=C:\\Program Files (x 86) \\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

Éstos corresponden a los parámetros que especifique cuando su proyecto de construcción. La primera vez que ejecuta estos comandos, que generan una aplicación "HelloWorld":

        Cordova/construir jugadas cordova/construcción blackberry cordova/construcción qnx
    

Junto con el SDK, también debes registrarte para una firma clave y depuración token. La clave de firma le permite distribuir aplicaciones a través de BlackBerry World. El token de depuración permite probar aplicaciones sin firmar en un emulador de BlackBerry o dispositivo. No tienes que crear e instalar el token de depuración; Si usted suministra la contraseña del almacén de claves, el script crea e instala el token de depuración para ti. Para configurar la clave de firma, visite el sitio web de BlackBerry para obtenerlo, procurando conservar la contraseña especificada. A continuación, ejecute el `blackberry-signer` utilidad que se incluye con el SDK. BlackBerry proporciona más información aquí:

*   [Registro para su código clave de firma][9]

*   [Configurar el ordenador para firma de código][10]

*   [Guía completa para configurar su entorno SDK][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## Desplegar en emulador

Emuladores de smartphone blackBerry sólo están disponibles en Windows. Emuladores de blackBerry PlayBook requieren VMWare Player (Windows) o VMWare Fusion (Mac OS X). WebWorks SDK proporciona un emulador por defecto, pero emuladores adicionales están [disponibles a través de BlackBerry][12].

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

Desde el directorio de tu proyecto, escriba `./cordova/run <target>` , reemplazando `<target>` ya sea con `qnx` , `playbook` , o `blackberry` . Tenga en cuenta que 10 BlackBerry y PlayBook, la imagen de emulador virtual debe ser comenzada.

Vea el siguiente para más información:

*   [BlackBerry PlayBook][13]

*   [Smartphone blackBerry][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

Para BlackBerry Playbook, editar el `project.properties` archivo para personalizar el `playbook.sim.ip` y `playbook.sim.password` Propiedades. Dirección IP del emulador está disponible a través de la aplicación de **ajustes** en la pantalla de inicio. Habilitar la **seguridad y privacidad → modo de desarrollo** opción para mostrar la dirección. También se puede definir la contraseña en la pestaña de **seguridad y privacidad** .

Para BlackBerry Smartphone, edite el `project.properties` archivo para personalizar el `blackberry.sim.dir` y `blackberry.sim.bin` Propiedades. Tienes que escapar delimitadores de ruta al especificar rutas de directorio en Windows, por ejemplo:`C:\\Program
Files\\BlackBerry\\Simulator`.

Una vez que el emulador está instalado y en ejecución, ejecutar cualquiera de los siguientes pasos para instalar una aplicación en la pantalla de Inicio:

        blackberry playbook Cordova/ejecutar cordova/run
    

Si se le solicita si un dispositivo está conectado al ordenador, respuesta es no.

**Nota:** En BlackBerry OS 5, la aplicación está instalada en el `Downloads` Directorio.

## Implementar al dispositivo

Para desplegar su aplicación a un dispositivo, debe ser conectada, y debes estar registrado para código de firma de claves como se describió anteriormente. También, para desplegar aplicaciones en BlackBerry PlayBook, el **configuración → seguridad → modo de desarrollo** debe estar habilitada la opción.

En BlackBerry PlayBook, edite el `project.properties` archivo y modificar lo siguiente para reflejar la IP y la contraseña del dispositivo como describen arriba, junto con la firma clave contraseña que elegiste:

Desde el directorio de tu proyecto, escriba `./cordova/run <target>` , reemplazando `<target>` ya sea con `qnx` , `playbook` , o`blackberry`.

El Smartphone BlackBerry (OS5-7), especifique la `blackberry.sigtool.password` propiedad como la clave de firma.

Luego del directorio del proyecto, ejecutar cualquiera de los comandos que lo haría para ver la aplicación en un emulador:

        blackberry playbook Cordova/ejecutar cordova/run
    

Si se le solicita si un dispositivo está conectado al ordenador, responda sí.

**Nota:** En BlackBerry OS 5, la aplicación está instalada en el `Downloads` Directorio.

## Información adicional

Los artículos siguientes pueden ayudar a resolver problemas comunes en el desarrollo de aplicaciones para BlackBerry WebWorks framework:

*   [BlackBerry WebWorks desarrollo trampas][15]

*   [Mejores prácticas para empaquetar las aplicaciones WebWorks][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html