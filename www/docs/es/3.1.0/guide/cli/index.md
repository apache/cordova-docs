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

# La interfaz de línea de comandos

Esta guía le muestra cómo crear aplicaciones y desplegarlas para varias plataformas móviles nativas mediante la interfaz de línea de comandos de `cordova` (CLI). Esta herramienta permite crear nuevos proyectos, construirlas en diferentes plataformas y ejecutarlos dentro de un emulador. También puede utilizar la CLI para inicializar el código del proyecto, tras lo cual utilizas SDKs de varias plataformas para desarrollarlas aún más.

## Prerequisitos

Antes de ejecutar cualquiera de las herramientas de línea de comandos, necesita instalar el SDK para cada plataforma de destino. (Vea a las guías de la plataforma para más detalles).

Para añadir soporte o reconstruir un proyecto para cualquier plataforma, necesitará ejecutar la interfaz de línea de comandos desde la misma máquina que soporta el SDK de la plataforma. La CLI admite las siguientes combinaciones:

*   iOS (Mac)
*   Androide (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS (Mac, Linux, Windows)

En el Mac, es disponible a través de la aplicación de *Terminal de* la línea de comandos. En el PC, se encuentra disponible como *símbolo* en *accesorios*.

Lo más probable es que ejecute la CLI de diferentes máquinas, tiene más sentido mantener un repositorio de código fuente remota, cuyos activos que tire hacia abajo para directorios de trabajo local.

Para instalar el `cordova` de línea de comandos de la herramienta, siga estos pasos:

1.  Descargar e instalar [Node.js][1]. Después de la instalación, usted debe ser capaz de invocar `nodo` o `npm` en su línea de comandos.

2.  Instalar la utilidad de `cordova`. En Unix, prefijando el comando `sudo` de adicional puede ser necesario instalar utilidades de desarrollo en lo contrario restringido directorios:

        $ sudo npm install -g cordova


    El registro de instalación puede producir errores para cualquier plataforma desinstalado SDK. Después de la instalación, usted debe ser capaz de ejecutar `cordova` en la línea de comandos.

 [1]: http://nodejs.org/

## Crear la aplicación

Vaya al directorio donde mantener su código fuente y ejecutar un comando como el siguiente:

        $ cordova create hello com.example.hello HelloWorld


Puede tomar algún tiempo para que el comando completar, así que tenga paciencia. Ejecute el `cordova -d` para obtener más información sobre el progreso.

El primer argumento especifica un directorio *Hola* que se generen para su proyecto. Su `www` subdirectorio casas página de inicio de su aplicación, junto con diversos recursos bajo `css` , `js` , y `img` , que seguir común web convenciones de nomenclatura de archivos de desarrollo. El `config.xml` archivo contiene metadatos importantes necesarios para generar y distribuir la aplicación.

Los otros dos argumentos son opcionales: el `com.example.hello` argumento proporciona su proyecto con un identificador de dominio inverso de estilo y el `HelloWorld` proporciona texto en pantalla de la aplicación. Puede editar tanto de estos valores más adelante en el `config.xml` archivo.

## Añadir plataformas

Todos los comandos posteriores necesitan ejecutarse dentro de directorio del proyecto, o cualquier subdirectorios dentro de su ámbito de aplicación:

        $ cd hello


Antes de que usted puede construir el proyecto, tienes que especificar un conjunto de plataformas de destino. Su capacidad para ejecutar estos comandos depende de si tu maquina soporta cada SDK, y si ya tienes instalación cada SDK. Ejecutar cualquiera de éstos desde un Mac:

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Ejecutar cualquiera de éstos desde una máquina Windows, donde *wp* se refiere a diferentes versiones del sistema operativo Windows Phone:

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Ejecutar para comprobar su sistema actual de plataformas:

        $ cordova platforms ls


(Nota del `platform` y `platforms` son sinónimos comandos.)

Ejecutar cualquiera de los siguientes comandos sinónimos para quitar una plataforma:

        $ cordova platform remove blackberry10
        $ cordova platform rm android


Ejecución de comandos para agregar o quitar afecta a plataformas el contenido del directorio de *plataformas* del proyecto, donde cada plataforma especificado aparece como un subdirectorio. El directorio de origen *www* se reproduce dentro del subdirectorio de cada plataforma, que aparece por ejemplo en `platforms/ios/www` o `platforms/android/assets/www` . De forma predeterminada, archivo de configuración de cada plataforma se configura para poder acceder a todas las APIs de Cordova.

Si lo desea, puede utilizar un SDK en este momento para abrir el proyecto que ha creado. Sin embargo, las ediciones en el proyecto dentro de un efecto SDK derivado de la conjunto de activos, no los archivos multiplataforma fuente original. Utilice este método si simplemente desea inicializar un proyecto. (Vea a las guías de plataforma para obtener información sobre cómo desarrollar aplicaciones dentro de cada SDK). Lea sobre si desea usar herramientas de línea de comandos para el ciclo completo de desarrollo.

## Construir la aplicación

De forma predeterminada, el `cordova create` script genera una aplicación basada en web esquelética cuya portada es el proyecto `www/index.html` archivo. Editar esta aplicación que quieras, pero cualquier inicialización debe especificarse como parte de la `deviceready` controlador de eventos, que se hace referencia por defecto de `www/js/index.js` . <!-- XREF
(See the Application Development Guide for details.)
XREF -->

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


Algunas plataformas móviles emulan un dispositivo especial de forma predeterminada, como el iPhone iOS proyectos. Para otras plataformas, necesitará primero asociado a un dispositivo con un emulador. (Vea a las guías de plataforma para más detalles). Por ejemplo, usted primero de puede ejecutar el `android` comando para iniciar el SDK de Android, y luego ejecute una imagen del dispositivo en particular, que inicia según su comportamiento predeterminado:

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Seguimiento con el `cordova emulate` comando actualiza la imagen de emulador para mostrar la última aplicación, que ahora está disponible para el lanzamiento de la pantalla de Inicio:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Alternativamente, puedes enchufe del auricular en el ordenador y probar la aplicación directamente:

        $ cordova run android


Antes de ejecutar este comando, tienes que configurar el dispositivo para la prueba, siguiendo los procedimientos que varían para cada plataforma. En caso de Android, tienes que activar una opción de **depuración USB** en el dispositivo y quizás añadir un controlador USB dependiendo de su entorno de desarrollo. Ver a las guias de plataforma para obtener más información sobre los requisitos de cada plataforma.

## Añadir características

Al construir y ver un nuevo proyecto, la aplicación predeterminada que aparece no hace mucho. Puede modificar la aplicación de muchas maneras a aprovechar las tecnologías web estándar, sino de la aplicación comunicar estrechamente con varias características de nivel de dispositivo, tienes que añadir plugins que proporcionan acceso a núcleo Cordova APIs.

Un *plugin* es un poco de código adicional que proporciona una interfaz para componentes nativos. Usted puede diseñar su propia interfaz plugin, por ejemplo al diseñar una aplicación híbrida que combina un Cordova WebView con componentes nativos. (Véase WebViews incrustar y Plugin Development Guide para obtener más detalles). Más comúnmente, debe agregar un plugin para activar una de las características básicas de Cordova nivel de dispositivo <!--XREF discutidos en la Guía de Desarrollo de Aplicaciones y XREF--> detallado en la referencia de la API.

El `cordova plugin add` comando requiere especificar el repositorio para el código del plugin. Estos son ejemplos de funciones que se podría añadir:

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


Uso `plugin ls` (o `plugin list` , o `plugin` por sí mismo) ver actualmente instalado plugins. Cada muestra por su identificador:

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


Para quitar un plugin, referirse a él por el mismo identificador que aparece en el listado. Por ejemplo, aquí es cómo le quita apoyo para una consola de depuración de una versión:

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


Puede lote-quitar o agregar plugins por especificar más de un argumento para cada comando.

## Personalizar cada plataforma

Mientras que Córdoba permite implementar fácilmente una aplicación para muchas plataformas diferentes, a veces tienes que añadir personalizaciones. En ese caso, no quieres modificar los archivos de código fuente en varios `www` directorios dentro del nivel superior `platforms` Directorio, porque regularmente reemplazaron con el nivel superior `www` fuente del directorio multiplataforma.

En cambio, el nivel superior `merges` Directorio ofrece un lugar para especificar activos para desplegar en plataformas específicas. Cada subdirectorio específico de plataforma dentro de `merges` refleja la estructura de directorios de la `www` árbol de código fuente, lo que permite reemplazar o agregar archivos según sea necesario. Por ejemplo, aquí es cómo podrías utiliza `merges` para aumentar el tamaño de fuente por defecto para los dispositivos Android:

*   Editar el `www/index.html` archivo, añadir un enlace a un archivo CSS adicional, `overrides.css` en este caso:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Opcionalmente crear un vacío `www/css/overrides.css` archivo, que se aplicaría para todas las versiones no-Android, evitando un error de archivo que falta.

*   Crear un `css` subdirectorio dentro de `merges/android` , luego añadir un correspondiente `overrides.css` archivo. Especificar CSS que reemplaza el tamaño de letra de 12 puntos por defecto especificado dentro de `www/css/index.css` , por ejemplo:

        body { font-size:14px; }


Al reconstruir el proyecto, la versión para Android cuenta con el tamaño de fuente personalizada, mientras que otros permanecen inalterados.

También se puede utilizar `merges` para agregar archivos no presenten en el original `www` Directorio. Por ejemplo, una aplicación puede incorporar un gráfico de *botón* en la interfaz de iOS, almacenado en `merges/ios/img/back_button.png` , mientras que la versión de Android puede capturar en su lugar `backbutton` eventos desde el correspondiente botón de hardware.

## Actualización de Cordova

Después de instalar el `cordova` utilidad, puede siempre actualizarlo a la versión más reciente ejecutando el siguiente comando:

        $ sudo npm update -g cordova


Para instalar una versión específica, utilice esta sintaxis:

        $ sudo npm instalar cordova@3.1.0 -g


Ejecute `cordova -v` para ver la versión actualmente en ejecución. Ejecute el `npm
info` comando para obtener una lista más larga que incluye la versión actual junto con otros números de la versión disponible:

        $ npm info cordova


Cordova 3.0 es la primera versión compatible con la interfaz de línea de comandos descrita en esta sección. Si actualiza desde una versión anterior a 3.0, tienes que crear un nuevo proyecto como se describió anteriormente, luego copie los activos de la mayor aplicación en el nivel superior `www` Directorio. En su caso, más detalles sobre la actualización a 3.0 están disponibles en las guías de la plataforma. Una vez que se actualiza a la `cordova` interfaz de línea de comandos y uso `npm update` para estar al día, los más lentos procedimientos descritos allí ya no son relevantes.
