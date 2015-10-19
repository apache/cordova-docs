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

title: Guía de desarrollo de plugin
---

# Guía de desarrollo de plugin

Un Cordova plugin puentes es quedando un poco de funcionalidad entre el WebView alimentando una aplicación Cordova y la plataforma nativa la aplicación Cordova. Plugins están compuestos de una sola interfaz JavaScript utilizada a través de todas las plataformas y nativas implementaciones siguiendo las interfaces Plugin específica de la plataforma que el JavaScript llama a. Todo el núcleo Cordova APIs se implementan mediante esta arquitectura.

Pasos de esta guía el proceso de escribir un Plugin sencillo Eco pasa una cadena de JavaScript y lo envía al entorno nativo para las plataformas soportadas. El código nativo entonces devuelve la misma cuerda a las devoluciones de llamada en JavaScript del plugin.

Esta guía proporciona suficiente Resumen en el cual se pueden construir para escribir plugins más complejos.

## JavaScript

El punto de entrada para cualquier plugin es JavaScript. El uso de los desarrolladores razón que Cordova es por lo que pueden utilizar y escribir JavaScript, no Objective-C, no Java, no C#. La interfaz JavaScript para tu plugin es la parte frontal y posiblemente más importante de su plugin Cordova.

Usted puede estructurar JavaScript de su plugin sin embargo te gusta. Lo único *debe* utilizar para comunicarse entre los entornos nativos y Cordova JavaScript es el `cordova.exec` función. Aquí está un ejemplo:

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

Los parámetros se detallan a continuación:

*   `function(winParam) {}`: Devolución de llamada de función éxito. Asumiendo que tu `exec` llamada se realiza correctamente, esta función es invocada (opcionalmente con cualquier parámetro pasas a él).

*   `function(error) {}`: Devolución de llamada de función error. Si la operación no se completa correctamente, esta función es invocada (opcionalmente con un parámetro de error).

*   `"service"`: El nombre del servicio a lado del nativo. Esto se asigna a una clase nativa, sobre el cual existe más información en las guías nativas enumeradas a continuación.

*   `"action"`: El nombre de la acción a. Esto es recogido por la recepción de la clase nativa la `exec` llamada y, dependiendo de la plataforma, esencialmente los mapas al método de una clase. Los guías nativos a continuación proporcionan detalles.

*   `[/* arguments */]`: Argumentos para pasar al medio ambiente nativo.

### Ejemplo de JavaScript Plugin echo

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Vamos a sumergirnos en esto. El plugin se une a `window` , específicamente a la `echo` función. Los usuarios plugin entonces usaría como sigue:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Primero, echemos un vistazo a los tres últimos argumentos de la `exec` función. Llamaremos el `Echo` "de servicio", solicitando a la `echo` «acción», y pasar una matriz de argumentos que contiene la cadena Eco, que es el primer parámetro en el `window.echo` función.

El callback de éxito pasó a `exec` es simplemente una referencia a la devolución de llamada función que `window.echo` lleva. Hacemos un poco más para el callback de error: Si el lado nativo dispara el callback de error, simplemente invocar callback éxito y pasar en él una cadena "por defecto".

## Especificación de plugin

Córdoba tiene una especificación plugin disponible para permitir la instalación automática del plugin para Android, iOS, plataformas 10 BlackBerry y Windows Phone. Estructuración de su plugin en forma particular y añadiendo un `plugin.xml` archivo de manifiesto, usted puede habilitar a los usuarios a instalar el plugin mediante las herramientas de línea de comandos.

*   [Especificación de plugin](../../../plugin_ref/spec.html)

## Nativo

Una vez se define JavaScript para tu plugin, debes complementarlo con por lo menos una aplicación nativa. A continuación los detalles para hacerlo para cada plataforma. Estas guías de seguirán construyendo en el simple ejemplo Eco Plugin discutido anteriormente.

*   [Android Plugins](../../platforms/android/plugin.html)
*   Plugins de blackBerry
*   [BlackBerry 10 Plugins](../../platforms/blackberry10/plugin.html)
*   [iOS Plugins](../../platforms/ios/plugin.html)
*   [Windows Phone Plugins](../../platforms/wp8/plugin.html)

La plataforma Tizen actualmente no soporta plugins.

## Editorial plugins

Una vez que desarrollaste tu plugin, deberías publicarla y compartirla con la comunidad. Usted puede publicar su plugin en el registro de cordova (basado en [npmjs][1]) o a cualquier otro npmjs base del registro. Los usuarios podrán instalar automáticamente usando plugman o cordova-cli.

 [1]: https://github.com/isaacs/npmjs.org

Para publicar un plugin que debes utilizar la herramienta plugman y seguir los siguientes pasos:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

Eso es todo!

Otros comandos de base de registro están disponibles y `plugman --help` le dará una lista de qué comandos están disponibles y cómo utilizarlos.