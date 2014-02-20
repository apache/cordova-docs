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

# Guía de desarrollo de Plugins

Un *plugin* es un paquete de código que permite la webview Cordova dentro de la cual hace que su aplicación para comunicarse con la plataforma nativa en la que se ejecuta. Plugins proporcionan acceso a la funcionalidad de plataforma y dispositivo que está normalmente disponible para aplicaciones basadas en web. Las principales características de Cordova API se implementan como plugins, y muchos otros están disponibles que permiten funciones tales como escáneres de código de barras, comunicación NFC, o adaptar el calendario interfaces.

Plugins comprenden una única interfaz JavaScript junto con bibliotecas de código nativo correspondiente para cada plataforma soportada. A unos pasos esta sección a través de un plugin simple *Eco* que pasa una cadena de JavaScript a la plataforma nativa y posterior, que puede utilizar como modelo para construir características mucho más complejas. Esta sección analiza la estructura básica del plugin y la interfaz JavaScript de exteriores. Para cada interfaz nativa correspondiente, consulte la lista al final de esta sección.

Además de estas instrucciones, cuando se prepara para escribir un plugin es mejor mirar sobre [plugins existentes][1] para orientación.

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

## Construyendo un Plugin

Los programadores de aplicaciones utilizan la CLI `plugin add` comando (discutido en la interfaz de línea de comandos) para aplicar un plugin para un proyecto. El argumento de este comando es la dirección URL de un repositorio *git* que contiene el código del plugin. Este ejemplo implementa dispositivo API de Cordova:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

El repositorio plugin debe cuentan con un alto nivel `plugin.xml` archivo de manifiesto. Hay muchas maneras de configurar este archivo, los detalles para los que están disponibles en la especificación del Plugin. Esta versión abreviada de la `Device` plugin proporciona un ejemplo sencillo de usar como un modelo:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

El nivel superior `plugin` de etiqueta `id` atributo utiliza el mismo formato de dominio reverso para identificar el paquete plugin como las aplicaciones que están agregadas. El `js-module` etiqueta especifica la ruta de acceso a la interfaz común de JavaScript. El `platform` etiqueta especifica un conjunto correspondiente de código nativo para la `ios` plataforma en este caso. El `config-file` etiqueta encapsula un `feature` etiqueta que se inyecta en la específica de la plataforma `config.xml` archivo a la plataforma de la biblioteca de código adicional. El `header-file` y `source-file` etiquetas especifican la ruta de acceso a archivos de la biblioteca componentes.

## Validación de un Plugin

Puede utilizar la `plugman` utilidad para comprobar si el plugin se instala correctamente para cada plataforma. Instalar `plugman` con el siguiente comando de [nodo][2] :

 [2]: http://nodejs.org/

        $ npm install -g plugman
    

Necesita un directorio fuente válida de la aplicación, tales como el nivel superior `www` directorio incluido en un proyecto generado por CLI predeterminado como se describe en la interfaz de línea de comandos. Asegúrese de que la aplicación de `index.html` página de inicio de referencia el nombre de JavaScript interfaz del plugin, como si estuviera en el mismo directorio fuente:

        <script src="myplugin.js"></script>
    

Luego ejecutar un comando como el siguiente para comprobar las dependencias iOS carguen adecuadamente:

        $ plugman -platform ios /path/to/my/project/www /path/to/my/plugin
    

Para obtener más información sobre `plugman` Opciones, vea usando Plugman para gestionar Plugins. Para obtener información sobre cómo realmente *depurar* plugins, consulte interfaz nativa de cada plataforma enumerado en la parte inferior de esta página.

## La interfaz de JavaScript

El JavaScript proporciona la interfaz de frente, por lo que es quizás la parte más importante del plugin. Usted puede estructurar JavaScript de tu plugin sin embargo te gusta, pero tiene que llamar a `cordova.exec` para comunicarse con la plataforma nativa, usando la siguiente sintaxis:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

Aquí está cómo funciona cada parámetro:

*   `function(winParam) {}`: Una función de devolución de llamada de éxito. Asumiendo que tu `exec` llamada se realiza correctamente, esta función se ejecuta junto con cualquiera de los parámetros pasas.

*   `function(error) {}`: Una función de callback de error. Si la operación no se completa correctamente, esta función se ejecuta con un parámetro opcional de error.

*   `"service"`: El nombre del servicio que llame al lado nativo. Esto corresponde a una clase nativa, para lo cual existe más información en las guías nativas enumeradas a continuación.

*   `"action"`: El nombre de acción para llamar al lado nativo. Esto generalmente corresponde al método de la clase nativa. Consulte a las guías nativos enumerados a continuación.

*   `[/* arguments */]`: Un conjunto de argumentos que se pasarán en el entorno nativo.

## Muestra JavaScript

Este ejemplo muestra una forma de implementar interfaz del plugin JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

En este ejemplo, el plugin se adhiere a la `window` objeto como la `echo` la función, que llamarían a los usuarios plugin como sigue:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Mira a los tres últimos argumentos de la `cordova.exec` función. Las primeras convocatorias del `Echo` *servicio*, un nombre de clase. El segundo pide la `echo` *acción*, un método dentro de esa clase. La tercera es una matriz de argumentos que contengan la cadena Eco, que es el `window.echo` función es el primer parámetro.

El callback de éxito pasó a `exec` es simplemente una referencia a la función de callback `window.echo` toma. Si la plataforma nativa despide el callback de error, simplemente pide la devolución de llamada de éxito y pasa una cadena predeterminada.

## Interfaces nativas

Una vez se define JavaScript para tu plugin, debes complementarlo con por lo menos una aplicación nativa. Los datos de cada plataforma se enumeran a continuación, y cada uno se basa en el simple ejemplo Eco Plugin anterior:

*   Amazon fuego OS Plugins
*   Android Plugins
*   iOS Plugins
*   BlackBerry 10 Plugins
*   Windows Phone Plugins

La plataforma Tizen no admite plugins.

## Editorial Plugins

Una vez que desarrollas tu plugin, quizá quieras publicar y compartir con la comunidad. Puede publicar su plugin en el registro de cordova (basado en [ `npmjs` ][3]) o a cualquier otro `npmjs` -basado del registro. Otros desarrolladores pueden instalar automáticamente usando ya sea `plugman` o la CLI Cordova. (Para más detalles sobre cada camino hacia el desarrollo, véase utilizando Plugman para gestionar Plugins y la interfaz de línea de comandos).

 [3]: https://github.com/isaacs/npmjs.org

Para publicar un plugin es necesario utilizar la `plugman` de la herramienta y seguir los siguientes pasos:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

Eso es todo!

Ejecutando `plugman --help` enumera otros comandos disponibles basados en el registro.