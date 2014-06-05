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

# L'utilisation de Plugman pour gérer les Plugins

Desde la versión 3.0 adelante, Cordova implementa todas las APIs del dispositivo como plugins y les deja desactivado por defecto. También soporta dos formas diferentes para agregar y quitar plugins, dependiendo de su elección de flujo de trabajo discutida en la Descripción:

*   Si utiliza un flujo de trabajo multiplataforma, utiliza el `cordova` utilidad CLI para agregar plugins, tal como se describe en la interfaz de línea de comandos. La CLI modifica plugins para todas las plataformas especificadas a la vez.

*   Si utiliza un flujo de trabajo centrado en plataforma, utilice una interfaz de comandos de [Plugman][1] de nivel inferior, por separado para cada plataforma de destino.

 [1]: https://github.com/apache/cordova-plugman/

Esta sección detalla la utilidad Plugman. Para más información sobre consumo de Plugman como un módulo de nodo o modificar el código fuente, vea [el archivo Léame en su repositorio][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Instalando Plugman

Para instalar Plugman, tu debes tener [node][3] instalado en tu computadora. A continuación, puede ejecutar el siguiente comando desde cualquier parte en su entorno para instalar plugman en todo el mundo, que está disponible desde cualquier directorio:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Además debes tener `git` en tu `PATH` para poder instalar los plugins directamente desde URLs remotas de git.

**TIP**: Si encuentras que después de instalar el plugman con `npm` no es todavía capaz de ejecutar cualquiera `plugman` comandos, asegúrese de que ha agregado la `/npm/` Directorio en tu`PATH`.

**Nota**: puede omitir este paso si no quieres contaminar su global `npm` espacio de nombres mediante la instalación de Plugman en todo el mundo. Si este es el caso, entonces cuando se crea un proyecto de Córdoba con las herramientas de shell, habrá un `node_modules` directorio dentro de su proyecto que contiene Plugman. Dado que no se instalar en todo el mundo, hace falta invocar `node` para cada comando Plugman, por ejemplo `node
./node_modules/plugman/main.js -version` . El resto de esta guía asume que ha instalado Plugman en todo el mundo, significa que usted puede invocar con sólo`plugman`.

## Crear un proyecto Cordova

Antes de que puedas utilizar Plugman, debes crear un proyecto Cordova. Puedes hacer esto del mismo modo utilizando la Interfaz de línea de comandos o bien con scripts shell de bajo nivel. Las instrucciones para utilizar los scripts del shell para crear tu proyecto se encuentran en las guías "Herramientas de línea de comandos" listadas en la página de las Guías de plataformas.

## Añadir un Plugin

Una vez que has instalado Plugman y creado un proyecto Cordova, puedes comenzar a añadir plugins a la plataforma utilizando el siguiente comando:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Usando una mínima cantidad de parámetros, este comando instala un plugin en un proyecto Cordova. Debes especificar una plataforma y la ubicación de un proyecto Cordova para dicha plataforma. Además, debes especificar un plugin con las diferentes formas del parámetro `--plugin` , las mismas son:

*   `name`: El nombre del directorio donde existen los contenidos del plugin. Esto debe ser un directorio existente bajo el `--plugins_dir` camino (véase abajo para más información) o un plugin en el registro de Córdoba.
*   `url`: A partir de https:// o git una URL: / /, apuntando a un repositorio git válida que es clonable y contiene un `plugin.xml` archivo. El contenido de este repositorio se copiarán en la`--plugins_dir`.
*   `path`: Un camino hacia un directorio que contenga un plugin válido que incluye un `plugin.xml` archivo. Contenido de este sendero se copiará en el`--plugins_dir`.

Otro parámetros:

*   `--plugins_dir`por defecto es `<project>/cordova/plugins` , pero puede ser cualquier directorio que contiene un subdirectorio para cada uno trajo plugin.
*   `--www`los valores predeterminados del proyecto de `www` Ubicación de la carpeta, pero puede ser cualquier directorio que se va a utilizar como activos cordova proyecto aplicación web.
*   `--variable`permite para especificar ciertas variables en el tiempo de instalación, necesario para ciertos plugins que requieren claves API u otros parámetros personalizados, definida por el usuario. Por favor, vea la [Especificación plugin][4] para obtener más información.

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

*   Cordova-plugin-batería-estado
    
    plugman - proyecto de plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.battery-estado

*   plugman Cordova-plugin-cámara--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.camera

*   plugman Cordova-plugin-console--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.console

*   plugman Cordova-plugin-contactos - proyecto plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >... <directory> --plugin org.apache.cordova.contacts

*   plugman Cordova-plugin-dispositivo--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.device

*   plugman Cordova-plugin-dispositivo-movimiento (acelerómetro)--proyecto plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >... <directory> --plugin org.apache.cordova.device-movimiento

*   plugman Cordova-plugin-dispositivo-orientación (brújula)--proyecto plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >... <directory> --plugin org.apache.cordova.device-orientación

*   plugman Cordova-plugin-diálogos--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.dialogs

*   Cordova-plugin-file plugman - proyecto de plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >-- <directory> --plugin org.apache.cordova.file

*   plugman Cordova-plugin-transferencia de archivos - plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.file-transferencia

*   plugman Cordova-plugin-geolocalización--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.geolocation

*   plugman Cordova-plugin-la globalización--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.globalization

*   Cordova-plugin-inappbrowser plugman--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.inappbrowser

*   plugman Cordova-plugin-medios - proyecto plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >... <directory> --plugin org.apache.cordova.media

*   plugman Cordova-plugin-medios-captura--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.media-captura

*   plugman Cordova-plugin-red-información - proyecto plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >... <directory> org.apache.cordova.network - plugin-más información

*   plugman Cordova-plugin-splashscreen--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.splashscreen

*   plugman Cordova-plugin-vibración--plataforma < ios|amazon-fireos|android|blackberry10|wp7|wp8 >--proyecto <directory> --plugin org.apache.cordova.vibration