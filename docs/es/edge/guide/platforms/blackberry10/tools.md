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

# BlackBerry 10 herramientas de línea de comandos

El `cordova` la utilidad de línea de comandos es una herramienta de alto nivel que le permite construir aplicaciones a través de varias plataformas a la vez. Una versión anterior del marco Cordova ofrece conjuntos de herramientas de línea de comandos específicos de cada plataforma. Para usarlos como una alternativa a la CLI, tienes que descargar esta versión de Córdoba desde [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar la plataforma de destino. Las herramientas aquí descritas están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Para obtener información sobre la interfaz de línea de comandos de bajo nivel que permite plugins, ver usando Plugman para gestionar Plugins. Consulte aplicación Plugins para tener una visión general.

Si necesitas ayuda con cualquier comando que se enumeran a continuación, escriba el comando junto con el `-h` o `-help` argumentos, que son compatibles con todos los comandos y que proporcionan descripciones para cada uno de los argumentos disponibles.

## Crear una aplicación

El `create` comando crea un nuevo proyecto:

    bin/crear < path-a-proyecto ><-paquete del proyecto ><-nombre del proyecto >
    

donde

*   `<path-to-project>`especifica el directorio que quieres el proyecto creado en

*   `<project-package>`especifica un identificador de estilo de dominio inverso

*   `<project-name>`especifica el nombre para mostrar aplicaciones

**Nota**: el `create` comando bootstraps instalación dependencia a través de la `npm install` mando. Dependiendo de los permisos de directorio y sistema de instalación, esto puede requerir privilegios de administrador. Si hay problema en OSX/Linux, ejecute `sudo npm install` antes de usar el `create` comando. En Windows, ejecute `npm install` en una utilidad de línea de comandos abrió con privilegios de administrador.

## Crear un destino

La `target` mando le permite administrar el emulador o dispositivos BlackBerry que se utilizan para probar su aplicación. Puede agregar o quitar un destino o fijar un objetivo como el destino predeterminado.

### Añadir un destino

    <path-to-project>/cordova/target add <name> <ip-address> [-t | --type <device | simulator>] [-p | --password <password>] [--pin <device-pin>]
    

donde

*   `<name>`especifica un nombre único para el objetivo.

*   `<ip-address>`especifica la dirección ip del dispositivo BlackBerry o simulador.

*   `-p | --password <password>`especifica la contraseña para el dispositivo o el emulador. Esto sólo es necesario si el dispositivo o el emulador está protegido con contraseña.

*   `--pin <device-pin>`especifica el PIN del dispositivo BlackBerry, que identifica el dispositivo como un host válido para el token de depuración. Este argumento es necesario solamente cuando se crea un token de depuración.

### Quitar un destino

    <path-to-project>/cordova/target remove <name>
    

### Establecer un objetivo como predeterminado

    <path-to-project>/cordova/target default <name>
    

## Construir la aplicación

El `build` comando construye el proyecto como un archivo en pantalla. Puedes construir tu aplicación en cualquier modo de lanzamiento (que produce un archivo firmado pantalla) o en modo debug (que produce un archivo unsigned pantalla).

### Construir la aplicación en modo de liberación

    <path-to-project>/cordova/build release [-k | --keystorepass <password>] [-b | --buildId <number>] [-p | --params <params-JSON-file>]
    

donde

*   `-k | --keystorepass <password>`especifica la contraseña que se ha definido al configurar su ordenador para firmar las aplicaciones.

*   `-b | --buildId <number>`especifica el número de versión de compilación de la aplicación. Por lo general, este número debe ser incrementado de la anterior versión firmada. Este argumento es opcional.

*   `-p | --params <params-JSON-file>`especifica un archivo JSON que contiene parámetros adicionales para pasar a herramientas de aguas abajo. Este argumento es opcional.

### Construir el proyecto en modo de depuración

    <path-to-project>/cordova/build debug [<target>] [-k | --keystorepass <password>] [-p | --params <params-JSON-file>]  [-ll | --loglevel <error|warn|verbose>]
    

donde

*   `<target>`especifica el nombre de un objetivo previamente agregado. Si `<target>` no se especifica, se utiliza el destino predeterminado, si uno ha sido creada. Este argumento sólo es necesario si quieres el script para desplegar su aplicación en un dispositivo BlackBerry o emulador y usted no ha creado un destino predeterminado. Además, si `<target>` es un dispositivo, luego que el dispositivo debe estar conectado a su computadora por USB o conectarse a la misma red Wi-Fi que su computadora.

*   `-k | --keystorepass <password>`especifica la contraseña que se ha definido al configurar su ordenador para firmar las aplicaciones. Esta contraseña se utiliza también para crear su token de depuración. Este argumento sólo es necesario si quieres el script para crear e instalar el token de depuración para ti.

*   `-p | --params <params-JSON-file>`especifica un archivo JSON que contiene parámetros adicionales para pasar a herramientas de aguas abajo.

*   `-ll | --loglevel <level>`especifica el nivel de registro. El nivel de registro puede ser uno de `error` , `warn` , o`verbose`.

Si tienes definido previamente un destino por defecto (y previamente instalado un token de depuración, si ese objetivo es un dispositivo BlackBerry), puede ejecutar el script con sin argumentos y los paquetes de escritura su aplicación y lo despliega en el destino por defecto. Por ejemplo:

    <path-to-project>/cordova/build debug
    

## Ejecute la aplicación

El `run` comando despliega construir más reciente de la aplicación en el dispositivo BlackBerry especificado o un emulador. Para desplegar su aplicación, debe especificar un destino para el dispositivo o el emulador:

    <path-to-project>/cordova/run <target>
    

.. .donde `<target>` especifica el nombre de un objetivo previamente agregado. Si `<target>` es un dispositivo, entonces debe conectarse al ordenador mediante un cable USB, o bien por la misma red Wi-Fi como ordenador.

## Manejar Plugins

El `target` comando le permite añadir y eliminar plugins. Para ir a buscar un plugin alojado localmente:

    <path-to-project>/cordova/plugin fetch <path-to-plugin>
    

Ver una lista de plugins instalados:

    <path-to-project>/cordova/plugin ls
    

Agregar un plugin:

    <path-to-project>/cordova/plugin add <name>
    

Quitar un plugin:

    <path-to-project>/cordova/plugin rm <name>