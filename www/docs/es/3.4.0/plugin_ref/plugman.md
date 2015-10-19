---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: L'utilisation de Plugman pour gérer les Plugins
---

# L'utilisation de Plugman pour gérer les Plugins

Desde la versión 3.0 adelante, Cordova implementa todas las APIs del dispositivo como plugins y les deja desactivado por defecto. También soporta dos formas diferentes para agregar y quitar plugins. La primera es mediante el uso de la `cordova` descrita en la interfaz de línea de comandos CLI. La segunda es usando una línea de comandos [Plugman][1] de bajo nivel (Flujo de trabajo "Plataforma nativa de desarrollo".) La diferencia principal entre estas dos maneras de desarrollo es que Plugman sólo puede añadir plugins a una plataforma a la vez, mientra que CLI añadirá los plugins a todas las plataformas para las cuales estés desarrollando. Por esto, tiene más sentido usar Plugman cuando te encuentras trabajando estrechamente con el flujo de trabajo "Plataforma nativa de desarrollo".

 [1]: https://github.com/apache/cordova-plugman/

Para más información sobre Plugman, especialmente si te encuentras interesado en consumir Plugman como un módulo de node o hackear el sobre el código, ve [el archivo README de este repositorio.][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Instalando Plugman

Para instalar Plugman, tu debes tener [node][3] instalado en tu computadora. Entonces puedes ejecutar el siguiente comando desde cualquier lugar de tu entorno, para instalar plugman globalmente, de esta manera estará disponible desde cualquier directorio de tu computadora:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Además debes tener `git` en tu `PATH` para poder instalar los plugins directamente desde URLs remotas de git.

**TIP:** Si encuentras que luego de instalar plugman con npm aún no puedes ejecutar ningún comando `plugman`, asegúrate de que has agregado el directorio de `/npm/` en tu `PATH`.

**NOTA:** Puedes saltarte este paso si no quieres "contaminar" tu namespace de npm instalando Plugman globalmente. Si este es el caso, entonces cuando generes un proyecto Cordova con las herramientas shell, se creará un directorio llamado `node_modules` dentro del proyecto que contenga Plugman. Como hiciste la instalación global, tendrás que invocar node en cada comando Plugman, por ejemplo, `node ./node_modules/plugman/main.js -version`. El resto de esta guía asume que has instalado Plugman globalmente, lo que implica que podrás invocarlo solo con `plugman`.

## Crear un proyecto Cordova

Antes de que puedas utilizar Plugman, debes crear un proyecto Cordova. Puedes hacer esto del mismo modo utilizando la Interfaz de línea de comandos o bien con scripts shell de bajo nivel. Las instrucciones para utilizar los scripts del shell para crear tu proyecto se encuentran en las guías "Herramientas de línea de comandos" listadas en la página de las [Guías](../index.html) de plataformas.

## Añadir un Plugin

Una vez que has instalado Plugman y creado un proyecto Cordova, puedes comenzar a añadir plugins a la plataforma utilizando el siguiente comando:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Usando una mínima cantidad de parámetros, este comando instala un plugin en un proyecto Cordova. Debes especificar una plataforma y la ubicación de un proyecto Cordova para dicha plataforma. Además, debes especificar un plugin con las diferentes formas del parámetro `--plugin` , las mismas son:

*   `name`: El nombre del directorio en dnde reside el plugin. Este debe ser un directorio dentro del path `--plugins_dir` (ve más abajo por más información) o un plugin del Cordova registry.
*   `url`: Una URL que comience https:// o git://, y apunte a un repositorio git válido que es clonable y contenga el archivo `plugin.xml`. Los contenidos de este repositorio serán copiados a `--plugins_dir`.
*   `path`: Una ruta a un directorio que contenga un plugin válido el cual incluya el archivo `plugin.xml`. El contenido de esta ruta será copiada a `--plugins_dir`.

Otro parámetros:

*   `--plugins_dir` cuyo valor por defecto es `<project>/cordova/plugins`, pero puede ser cualquier directorio que contenga un subdirectorio por cada plugin.
*   `--www` cuyo valor por defecto es la ruta de la carpeta `www`, pero puede ser cualquier directorio del proyecto Cordova que es utilizado como para los assets de la aplicación web.
*   `--variable` permite especificar ciertas variables en el momento de la instalación, necesario para aquellos plugins que requieras una key del API u otros parámetros personalizados por el usuario. Por favor, vea [especificación del plugin][4] para más información.

 [4]: plugin_spec.md

## Remover un Plugin

Para desinstalar un plugin, simplemente pasa el flag `--uninstall` e indica el ID del plugin.

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Comandos de ayuda

Plugman ofrece un comando de ayuda global el cual puede ayudarte si no sabes como continuar o si estás experimentando problemas. Esta ayuda mostrará la lista de todos los comandos disponibles de Plugman y su sintaxis:

    plugman -help
    plugman  # same as above
    

**NOTA**: `plugman -help` puede mostrar algún comando adicional del registry. Estos comandos son para desarrolladores de plugins y no deben ser implementados por registros de plugin de terceras partes.

Además puede añadir el flag `--debug|-d` a cualquier comando Plugman que corra en modo verboso, el cual mostrará cualquier mensaje interno de depuración del mismo modo en el que son emitidos de manera que pueda ayudarte a encontrar el origen de problemas, como por ejemplo, archivos inexistentes.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

Finalmente, puedes utilizar el flag `--version|-v` para ver que versión de Plugman te encuentras utilizando.

    plugman -v
    

## Acciones del Registry

Estos son comando que pueden ser utilizados para interactuar con el [Plugin registry][5]. Por favor, nota que que estos comandos son específicos del registro de plugins *plugins.cordova.io* y no deben ser implementados por registros de terceras partes.

 [5]: http://plugins.cordova.io

### Buscando un Plugin

Puedes utilizar Plugman para buscar el id de un plugin dentro del [Plugin registry][5] que se corresponda con la lista de palabras clave separadas por espacios.

    plugman search <plugin keywords>
    

### Cambiando el Plugin Registry

Puedes obtener o indicar la URL de los registros de plugins que actualmente plugman está usando. Generalmente tu debes utilizar este valor http://registry.cordova.io a menos que quieras utilizar un plugín en un registro de plugins de una tercera parte.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### Obtener información de un Plugin

Puedes obtener información acerca de cualquier plugin que se encuentre almacenado en el repositorio de plugins con el siguiente comando:

    plugman info <id>
    

Esto contactará al registro de plugins y obtendrá información como la versión del plugin.

## Instalando Core Plugins

Los ejemplos descritos más abajo muestran como agregar plugins según se necesite, de modo que cualquier proyecto Cordova que utilize la API superior a la versión 3.0 siga funcionando. Por cada comando, necesitas seleccionar la plataforma destino, y referencias el directorio del proyecto.

*   cordova-plugin-battery-status
    
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration