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

# L'Interface de ligne de commande

Esta guía le muestra cómo crear aplicaciones y desplegarlas para varias plataformas móviles nativas mediante la interfaz de línea de comandos de `cordova` (CLI). Esta herramienta le permite crear nuevos proyectos, construirlas en diferentes plataformas y ejecutar en dispositivos reales o dentro de los emuladores. El CLI es la herramienta principal para el flujo de trabajo multiplataforma descrita en la descripción. Lo contrario también puede utilizar la CLI para inicializar el código del proyecto, luego cambiar a de diversas plataformas SDK y herramientas de shell para el continuo desarrollo.

## Prerequisitos

Antes de ejecutar cualquiera de las herramientas de línea de comandos, necesita instalar el SDK para cada plataforma de destino. (Vea a las guías de la plataforma para más detalles).

Para añadir soporte o reconstruir un proyecto para cualquier plataforma, necesitará ejecutar la interfaz de línea de comandos desde la misma máquina que soporta el SDK de la plataforma. La CLI admite las siguientes combinaciones:

*   iOS (Mac)
*   Amazon fuego OS (Mac, Linux, Windows)
*   Androide (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS (Mac, Linux, Windows)

En el Mac, es disponible a través de la aplicación de *Terminal de* la línea de comandos. En el PC, se encuentra disponible como *símbolo* en *accesorios*.

**Nota**: para las plataformas Windows, todavía puedes hacer tu desarrollo en hardware Mac ejecutando Windows en un entorno de máquina virtual o en modo de arranque dual. Para las opciones disponibles, consulte la guía de la plataforma Windows Phone o guía de plataforma de Windows 8.

Lo más probable es que ejecute la CLI de diferentes máquinas, más sentido para mantener un repositorio de código fuente remota, cuyos activos que tire hacia abajo para directorios de trabajo local.

Para instalar el `cordova` de línea de comandos de la herramienta, siga estos pasos:

1.  Descargar e instalar [Node.js][1]. Después de la instalación, usted debe ser capaz de invocar `nodo` o `npm` en su línea de comandos.

2.  Instalar la utilidad de `cordova`. En Unix, prefijando el comando `sudo` de adicional puede ser necesario instalar utilidades de desarrollo en lo contrario restringido directorios:

        $ sudo npm install -g cordova


    El registro de instalación puede producir errores para cualquier plataforma desinstalado SDK. Después de la instalación, usted debe ser capaz de ejecutar `cordova` en la línea de comandos.

    **Nota**: el `-g` bandera arriba dice `npm` instalar cordova en todo el mundo. Puede que necesites añadir el `npm` Directorio a su `PATH` para invocar a nivel mundial instalada `npm` módulos. En Windows, `npm` generalmente se puede encontrar en `C:\Users\username\AppData\Roaming\npm` y en Unix en`/usr/local/share/npm`.

 [1]: http://nodejs.org/

## Crear la aplicación

Vaya al directorio donde mantener su código fuente y ejecutar un comando como el siguiente:

        $ cordova create hello com.example.hello HelloWorld


Puede tomar algún tiempo para que el comando completar, así que tenga paciencia. Ejecutar el comando con el `-d` opción muestra información acerca de su progreso.

El primer argumento *Hola* especifica un directorio que se generen para su proyecto. Este directorio ya no debería existir, Córdoba lo creará para usted. Su `www` subdirectorio casas página de inicio de su aplicación, junto con diversos recursos bajo `css` , `js` , y `img` , que seguir común web convenciones de nomenclatura de archivos de desarrollo. El `config.xml` archivo contiene metadatos importantes necesarios para generar y distribuir la aplicación.

El segundo argumento `com.example.hello` proporciona un identificador de dominio reverso-estilo su proyecto. Este argumento es opcional, pero sólo si también omite el tercer argumento, puesto que los argumentos son posicionales. Puede editar este valor más adelante en el `config.xml` de archivos, pero tenga en cuenta que puede haber código generado fuera de `config.xml` utilizando este valor, tales como nombres de paquetes Java. El valor predeterminado es `io.cordova.hellocordova` , pero se recomienda que seleccione un valor apropiado.

El tercer argumento `HelloWorld` da título de pantalla de la aplicación. Este argumento es opcional. Puede editar este valor más adelante en el `config.xml` de archivos, pero tenga en cuenta que puede haber código generado fuera de `config.xml` utilizando este valor, tales como nombres de clase de Java. El valor predeterminado es `HelloCordova` , pero se recomienda que seleccione un valor apropiado.

## Añadir plataformas

Todos los comandos posteriores necesitan ejecutarse dentro de directorio del proyecto, o cualquier subdirectorios dentro de su ámbito de aplicación:

        $ cd hello


Antes de que usted puede construir el proyecto, tienes que especificar un conjunto de plataformas de destino. Su capacidad para ejecutar estos comandos depende de si tu maquina soporta cada SDK, y si ya tienes instalación cada SDK. Ejecutar cualquiera de éstos desde un Mac:

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Ejecutar cualquiera de éstos desde una máquina Windows, donde *wp* se refiere a diferentes versiones del sistema operativo Windows Phone:

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Ejecutar para comprobar su sistema actual de plataformas:

        $ cordova platforms ls


(Nota del `platform` y `platforms` son sinónimos comandos.)

Ejecutar cualquiera de los siguientes comandos sinónimos para quitar una plataforma:

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


Ejecución de comandos para agregar o quitar afecta a plataformas el contenido del directorio de *plataformas* del proyecto, donde cada plataforma especificado aparece como un subdirectorio. El directorio de origen *www* se reproduce dentro del subdirectorio de cada plataforma, que aparece por ejemplo en `platforms/ios/www` o `platforms/android/assets/www` . Porque la CLI constantemente copia archivos desde la carpeta *www* fuente, sólo debe editar estos archivos y no los ubicado debajo de los subdirectorios de *plataformas* . Si utilizas software de control de versión, debe agregar esta carpeta *www* fuente, junto con la carpeta *se funde* , a su sistema de control de versión. (Puede encontrarse más información sobre la carpeta *se funde* en la sección de personalizar cada plataforma abajo).

**ADVERTENCIA**: cuando se usa la CLI para construir su solicitud, usted debe *no* editar cualquiera de los archivos en el `/platforms/` Directorio si no sabes lo que estás haciendo, o si documentación especifica lo contrario. Los archivos de este directorio se sobrescriben rutinariamente al preparar las aplicaciones para la construcción, o cuando son instalar plugins.

Si lo desea en este punto, puede utilizar un SDK como Eclipse o Xcode para abrir el proyecto que ha creado. Usted necesitará abrir el conjunto derivado de los activos de la `/platforms/` Directorio para desarrollar con un SDK. Esto es porque los archivos de metadatos específicos del SDK se almacenan dentro de la correspondiente `/platform/` subdirectorio. (Vea a las guías de plataforma para obtener información sobre cómo desarrollar aplicaciones dentro de cada IDE). Utilice este enfoque si simplemente quieres inicializar un proyecto mediante la CLI y luego cambiar a un SDK para trabajo nativo.

Lea sobre si desea utilizar el enfoque de flujo de trabajo multiplataforma (CLI) para el ciclo completo de desarrollo.

## Construir la aplicación

De forma predeterminada, el `cordova create` script genera una aplicación basada en web esquelética cuya portada es el proyecto `www/index.html` archivo. Editar esta aplicación que quieras, pero cualquier inicialización debe especificarse como parte de la `deviceready` controlador de eventos, que se hace referencia por defecto de`www/js/index.js`.

Ejecute el siguiente comando para crear iterativamente el proyecto:

        $ cordova build


Esto genera código específico de plataforma dentro del proyecto `platforms` subdirectorio. Opcionalmente puede limitar el alcance de cada generación de plataformas específicas:

        $ cordova build ios


El `cordova build` el comando es una abreviatura para el siguiente, que en este ejemplo también está orientado a una única plataforma:

        $ cordova prepare ios
        $ cordova compile ios


En este caso, una vez se ejecuta `prepare` , puede utilizar como una alternativa Xcode SDK de Apple para modificar y compilar el código específico de plataforma que Córdoba se genera dentro de `platforms/ios` . Puede utilizar el mismo enfoque con SDK de otras plataformas.

## Probar la aplicación en un emulador o dispositivo

SDK para plataformas móviles vienen a menudo incluidos con emuladores que ejecutan una imagen del dispositivo, así que usted puede lanzar la aplicación desde la pantalla principal y ver cómo interactúa con muchas características de la plataforma. Ejecutar un comando como el siguiente para reconstruir la aplicación y visualizarlo en emulador de una plataforma específica:

        $ cordova emulate android


Algunas plataformas móviles emulan un dispositivo especial de forma predeterminada, como el iPhone iOS proyectos. Para otras plataformas, necesitará primero asociado a un dispositivo con un emulador.

**Nota**: apoyo emulador no está actualmente disponible para Amazon fuego OS.

(Vea a las guías de plataforma para más detalles). Por ejemplo, usted primero de puede ejecutar el `android` comando para iniciar el SDK de Android, y luego ejecute una imagen del dispositivo en particular, que inicia según su comportamiento predeterminado:

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Seguimiento con el `cordova emulate` comando actualiza la imagen de emulador para mostrar la última aplicación, que ahora está disponible para el lanzamiento de la pantalla de Inicio:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativamente, puedes enchufe del auricular en el ordenador y probar la aplicación directamente:

        $ cordova run android


Antes de ejecutar este comando, tienes que configurar el dispositivo para la prueba, siguiendo los procedimientos que varían para cada plataforma. En los dispositivos Android y Amazon fuego OS, tendrías que activar una opción de **depuración USB** en el dispositivo y quizás añadir un controlador USB dependiendo de su entorno de desarrollo. Ver a las guias de plataforma para obtener más información sobre los requisitos de cada plataforma.

## Añadir funciones Plugin

Al construir y ver un nuevo proyecto, la aplicación predeterminada que aparece no hace mucho. Puede modificar la aplicación de muchas maneras a aprovechar las tecnologías web estándar, sino de la aplicación comunicar estrechamente con varias características de nivel de dispositivo, tienes que añadir plugins que proporcionan acceso a núcleo Cordova APIs.

Un *plugin* es un poco de código adicional que proporciona una interfaz para componentes nativos. Usted puede diseñar su propia interfaz plugin, por ejemplo al diseñar una aplicación híbrida que combina un Cordova WebView con componentes nativos. (Véase WebViews incrustar y Plugin Development Guide para obtener más detalles). Más comúnmente, debe agregar un plugin para activar uno de los rasgos básicos de nivel de dispositivo de Cordova detallados en la referencia de la API. Una lista de estos plugins, incluyendo plugins adicionales proporcionados por la comunidad, puede encontrarse en [plugins.cordova.io][4]. Puede utilizar la CLI para buscar plugins de este registro. Por ejemplo, buscando `bar` y `code` produce un solo resultado que coincide con ambos términos como subcadenas entre mayúsculas y minúsculas:

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


Buscando solamente el `bar` término rendimientos y resultados adicionales:

        org.apache.cordova.statusbar - Cordova StatusBar Plugin


El `cordova plugin add` comando requiere especificar el repositorio para el código del plugin. Estos son ejemplos de cómo puede usar la CLI para agregar funciones a la aplicación:

*   Información básica del dispositivo (dispositivo API):

        $ cordova plugin add org.apache.cordova.device


*   Conexión de red y eventos de batería:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   Acelerómetro, brújula y geolocalización:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   Cámara, reproducción multimedia y captura:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   Acceder a archivos en el dispositivo o red (archivo API):

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   Notificación mediante vibración o cuadro de diálogo:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   Contactos:

        $ cordova plugin add org.apache.cordova.contacts


*   Globalización:

        $ cordova plugin add org.apache.cordova.globalization


*   SplashScreen:

        $ cordova plugin add org.apache.cordova.splashscreen


*   Abrir nuevas ventanas del navegador (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser


*   Consola de depuración:

        $ cordova plugin add org.apache.cordova.console


**Nota**: el CLI agrega plugin código según proceda para cada plataforma. Si usted quiere desarrollar con las herramientas de nivel inferior cáscara o plataforma SDK como se indica en el Resumen, tienes que ejecutar la utilidad Plugman para añadir plugins por separado para cada plataforma. (Para obtener más información, véase Plugman usando a gestionar Plugins).

Uso `plugin ls` (o `plugin list` , o `plugin` por sí mismo) ver actualmente instalado plugins. Cada muestra por su identificador:

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


Para quitar un plugin, referirse a él por el mismo identificador que aparece en el listado. Por ejemplo, aquí es cómo le quita apoyo para una consola de depuración de una versión:

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


Puede lote-quitar o agregar plugins por especificar más de un argumento para cada comando:

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device


## Opciones avanzadas Plugin

Al agregar un plugin, varias opciones permiten especificar de dónde buscar el plugin. Los ejemplos anteriores utilizan una conocida `registry.cordova.io` del registro y el plugin es especificada por el `id` :

        $ cordova plugin add org.apache.cordova.console


El `id` también puede incluir el número de versión del plugin, anexado después de un `@` personaje. El `latest` versión es un alias para la versión más reciente. Por ejemplo:

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1


Si el plugin no está registrado en `registry.cordova.io` , pero se encuentra en otro repositorio git, puede especificar una URL alternativa:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


El ejemplo de git anterior recupera el plugin desde el final de la rama principal, pero una alternativa git-ref como una etiqueta o rama puede ser añadido después de un `#` personaje:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


Si el plugin (y sus `plugin.xml` archivo) está en un subdirectorio dentro del repositorio git, puede especificar con un `:` personaje. Tenga en cuenta que el `#` personaje es necesario:

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


Usted puede también combinar el subdirectorio tanto el git-ref:

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


Alternativamente, especifique una ruta de acceso local para el directorio que contiene el `plugin.xml` archivo:

        $ cordova plugin add ../my_plugin_dir


## Usando *fusiona* a personalizar cada plataforma

Mientras que Córdoba permite implementar fácilmente una aplicación para muchas plataformas diferentes, a veces tienes que añadir personalizaciones. En ese caso, no quieres modificar los archivos de código fuente en varios `www` directorios dentro del nivel superior `platforms` Directorio, porque regularmente reemplazaron con el nivel superior `www` fuente del directorio multiplataforma.

En cambio, el nivel superior `merges` Directorio ofrece un lugar para especificar activos para desplegar en plataformas específicas. Cada subdirectorio específico de plataforma dentro de `merges` refleja la estructura de directorios de la `www` árbol de código fuente, lo que permite reemplazar o agregar archivos según sea necesario. Por ejemplo, aquí es cómo podrías utiliza `merges` para aumentar el tamaño de fuente por defecto para los dispositivos Android y Amazon fuego OS:

*   Editar el `www/index.html` archivo, añadir un enlace a un archivo CSS adicional, `overrides.css` en este caso:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Opcionalmente crear un vacío `www/css/overrides.css` archivo, que se aplicaría para todas las versiones no-Android, evitando un error de archivo que falta.

*   Crear un `css` subdirectorio dentro de `merges/android` , luego añadir un correspondiente `overrides.css` archivo. Especificar CSS que reemplaza el tamaño de letra de 12 puntos por defecto especificado dentro de `www/css/index.css` , por ejemplo:

        body { font-size:14px; }


Al reconstruir el proyecto, la versión para Android cuenta con el tamaño de fuente personalizada, mientras que otros permanecen inalterados.

También se puede utilizar `merges` para agregar archivos no presenten en el original `www` Directorio. Por ejemplo, una aplicación puede incorporar un gráfico de *botón* en la interfaz de iOS, almacenado en `merges/ios/img/back_button.png` , mientras que la versión de Android puede capturar en su lugar `backbutton` eventos desde el correspondiente botón de hardware.

## Comandos de ayuda

Córdoba cuenta con un par de comandos globales, que puede ayudar si se atranca o experimenta algún problema. El `help` comando muestra todos los comandos disponibles de Córdoba y su sintaxis:

    $ cordova help
    $ cordova        # same


El `info` comando produce un listado de detalles potencialmente útiles, tales como plataformas actualmente instaladas y plugins, versiones SDK para cada plataforma y versiones de CLI y `node.js` :

    $ cordova info


Tanto presenta la información en pantalla y captura la salida en un local `info.txt` archivo.

**Nota**: en la actualidad, sólo los detalles en plataformas Android y iOS están disponibles.

## Actualización de Córdoba y su proyecto

Después de instalar el `cordova` utilidad, puede siempre actualizarlo a la versión más reciente ejecutando el siguiente comando:

        $ sudo npm update -g cordova


Para instalar una versión específica, utilice esta sintaxis:

        $ sudo npm instalar cordova@3.1.0-0.2.0 -g


Ejecute `cordova -v` para ver qué versión se está ejecutando actualmente. Ejecute el `npm
info` comando para obtener una lista más larga que incluye la versión actual junto con otros números de versión disponible:

        $ npm info cordova


Cordova 3.0 es la primera versión compatible con la interfaz de línea de comandos descrita en esta sección. Si actualiza desde una versión anterior a 3.0, tienes que crear un nuevo proyecto como se describió anteriormente, luego copie los activos de la mayor aplicación en el nivel superior `www` Directorio. En su caso, más detalles sobre la actualización a 3.0 están disponibles en las guías de la plataforma. Una vez que se actualiza a la `cordova` interfaz de línea de comandos y uso `npm update` para estar al día, los más lentos procedimientos descritos allí ya no son relevantes.

Cordova 3.0 + todavía puede requerir varios cambios a estructuras de directorios de nivel de proyecto y otras dependencias. Después de ejecutar el `npm` mando sobre actualizar Cordova sí mismo, puede que necesites asegurar los recursos del proyecto se ajustan a los requisitos de la versión más reciente. Ejecutar un comando como el siguiente para cada plataforma están construyendo:

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
