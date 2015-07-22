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

# Plugins de BlackBerry

Esta guía le muestra cómo desarrollar un plugin de Echo en BlackBerry. La guía de desarrollo de Plugin ofrece un amplio resumen con el cual ya debe estar familiarizado, y esta guía recoge donde sale. Además, descargar el [repositorio Cordova BlackBerry][1].

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

El proyecto de `Cordova-BlackBerry` permite desplegar en dispositivos como la antorcha, negrita y Playbook de BlackBerry. El libro de jugadas utiliza un código diferente base que otros dispositivos de mano BlackBerry, para lo cual necesita duplicar sus esfuerzos de desarrollo. Esta guía se centra en los dispositivos portátiles en lugar de tabletas. (En el futuro, esta guía debe cubrir ambas plataformas).

El plugin de eco esencialmente devuelve el mensaje que un usuario proporciona a la función `window.echo`:

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## Modificar plugins.xml

De su proyecto `www/plugins.xml` directorio contiene todas las referencias necesarias a plugins de su proyecto de Cordova. Agregue una referencia adicional para que cuando se llama a `cordova.exec`, Cordova sabe cómo asignar el argumento de `Eco` de `cordova.exec` a la clase de `Echo` que queremos escribir de forma nativa:

    <feature name="Echo">
        <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
    </feature>
    

## Agregar Echo.java

Si observa la estructura del atributo valor, verás un camino definido que conduce al plugin de eco. En el directorio raíz de la repo Cordova BlackBerry WebWorks, busque un directorio llamado `framework` . Este directorio contiene todo el código fuente que funciona de forma nativa en el BlackBerry. Desplácese a `framework/ext/src/org/apache/cordova`. En este punto, usted verá todos los directorios de plugin, que dentro de los cuales es el código fuente. Agrega el eco directorio a `framework/ext/src/org/apache/cordova/echo` y crear un archivo llamado `Echo.java` en`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## Escritura Echo.java

La idea básica detrás de escribir un plugin es crear una clase que extiende la clase Plugin y tener un método llamado `execute` para volver a una clase de `PluginResult`. Cualquier llamada a pases de `cordova.exec` en la acción a ejecutar dentro de la clase, así como los argumentos. En este caso, "echo" es la acción que queremos ejecutar dentro de la clase "Echo" y [str] son los argumentos que estamos pasando en.

    paquete org.apache.cordova.echo;
    
    Import org.apache.cordova.api.Plugin;
    Import org.apache.cordova.api.PluginResult;
    Import org.apache.cordova.json4j.JSONArray;
    Import org.apache.cordova.json4j.JSONException;
    Import org.apache.cordova.json4j.JSONObject;
    / ** * Un plugin sencillo para demostrar cómo crear un plugin para BlackBerry * básicamente ecos de vuelta el msg que un usuario llama a este plugin * clase pública final Eco extiende Plugin {público estático Eco final de cadena = "eco";
    
        PluginResult público ejecutar (acción de las cuerdas, JSONArray args, String callbackId) {PluginResult resultado = new PluginResult (PluginResult.Status.INVALID_ACTION, "Eco: inválido acción:" + acción);
            if(Action.Equals(echo)) {pruebe {String theMsg = args.getString(0);
                    Si (theMsg! = null || theMsg.length() > 0) {resultado = new PluginResult (PluginResult.Status.OK, theMsg);
                    } más {resultado = new PluginResult (PluginResult.Status.ERROR, "Nada eco.");
                    }} catch (JSONException e) {resultado = new PluginResult (PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                }} return resultado;
        }
    
    }
    

Así que si nos fijamos en el código anterior, podemos ver que en el método execute, primero buscamos para qué acciones están llegando. El plugin de Echo tiene sólo una acción, `echo`, así que llegará sólo para eso. Si nuestro plugin tenía más acciones, es simplemente una cuestión de añadir más pruebas condicionales para verificar esas acciones.

Entonces vamos a agarrar el mensaje viene de los argumentos que es suministrado por el parámetro args. Podemos coger el primer argumento por simplemente haciendo `String theMsg = args.getString(0);`.

Haremos una comprobación de errores y si el mensaje está bien, nos hará instanciar un nuevo PluginResult con un estado ok: `PluginResult.Status.OK` y el mensaje de retorno: `theMsg`. Después de esto, nos devolverá el resultado para devolver a JavaScript para ser disparada en el callback de éxito. Si algo falla, podemos regresar varias excepciones de estado como `PluginResult.Status.ERROR`, `PluginResult.Status.JSON_EXCEPTION` o `PluginResult.Status.INVALID_ACTION`. Al regreso, estos tipos de resultados fuego el callback fail en JavaScript.

## Actualizando el jar en el directorio del proyecto www

El agregado `Echo.java` necesita ser actualizado en su proyecto. Para generar el archivo `.jar`, navegar al directorio raíz de la repo BlackBerry WebWorks y ejecutar el comando `ant`:

    ant update -Dproject.path="~/path_to_my_project"
    

Esto crea un nuevo archivo `jar` en el directorio `build/ext`. Copie el archivo `build/ext/cordova.jar` en tu directorio de `project/www/ext`.

Si todo va bien, que permite usar el plugin de Echo en BlackBerry.