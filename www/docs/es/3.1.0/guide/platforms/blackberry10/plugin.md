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

title: BlackBerry 10 Plugins
---

# BlackBerry 10 Plugins

Esto es una continuación de la guía de desarrollo de Plugin para Córdoba. Una vez que ha revisado ese contenido, ahora vamos mirar las cosas que necesitamos tener el plugin de eco para la plataforma BlackBerry 10. Recuerdo que el plugin de Echo básicamente devuelve la secuencia lo que un usuario proporciona a la función `window.echo`:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Un plugin nativo de BlackBerry 10 para Cordova contiene código JavaScript y también puede contener código nativo. El ejemplo de plugin de Echo demuestra cómo invocar la funcionalidad nativa de JavaScript. El nativo y código JavaScript comunican entre sí a través de un marco de JNEXT. Cada plugin debe incluir también un `plugin.xml` archivo.

## Creando la parte nativa de su plugin

Para crear la parte nativa de su plugin, abra el BlackBerry 10 NDK IDE y seleccione [Archivo](../../../cordova/file/fileobj/fileobj.html) > Nueva > BlackBerry proyecto > extensión nativa > BlackBerry WebWorks. Introduzca su nombre de proyecto deseado / ubicación y haga clic en terminar.

El proyecto creado por el IDE contiene código de ejemplo para un plugin de memoria. Puede reemplazar o modificar estos archivos para incluir su propia funcionalidad.

*   `*name*_js.hpp`: Rúbrica C++ para el código JNEXT.

*   `*name*_js.cpp`: Código C++ para JNEXT.

La interfaz nativa para la extensión JNEXT puede verse en el archivo de cabecera plugin ubicado en el directorio público de su proyecto. También contiene constantes y funciones de utilidad que se pueden utilizar en el código nativo. Tu plugin debe derivarse de JSExt que se define en plugin.h. Es decir, debe implementar la siguiente clase:

    class JSExt
    {
    public:
        virtual ~JSExt() {};
        virtual string InvokeMethod( const string& strCommand ) = 0;
        virtual bool CanDelete( void ) = 0;
    private:
        std::string m_id;
    };
    

Por lo tanto, su extensión debe incluir el archivo de encabezado plugin.h. En el ejemplo de eco, utiliza JSExt como sigue en el archivo echo_js.hpp:

    #include "../public/plugin.h"
    #include <string>
    
    #ifndef ECHO_JS_H_
    #define ECHO_JS_H_
    
    class Echo : public JSExt
    {
    public:
        explicit Echo(const std::string& id);
        virtual ~Echo();
        virtual std::string InvokeMethod(const std::string& command);
        virtual bool CanDelete();
    private:
        std::string m_id;
    };
    
    #endif // ECHO_JS_H_
    

El `m_id` es un atributo que contiene el identificador JNEXT para este objeto. La identificación se pasa a la clase como argumento para el constructor. Es necesario para desencadenar eventos en el lado de JavaScript de nativos. Se utiliza el método CanDelete por JNEXT para determinar si su objeto nativo puede ser eliminado. La función de InvokeMethod se llama como resultado de una petición de JavaScript para invocar un método de este objeto particular. El único argumento de esta función es una cadena de JavaScript que este método debería analizar para determinar qué método de objeto nativo debería ser ejecutado. Ahora podemos implementar estas funciones en echo_js.cpp. Por ejemplo el eco, implementamos InvokeMethod función como sigue:

    string Echo::InvokeMethod(const string& command) {
    
        //parse command and args from string
        int index = command.find_first_of(" ");
        string strCommand = command.substr(0, index);
        string strValue = command.substr(index + 1, command.length());
    
        // Determine which function should be executed
        if (strCommand == "echo") {
            return strValue;
        } else {
            return "Unsupported Method";
        }
    }
    

Tu plugin nativo también debe implementar las siguientes funciones de callback:

*   `extern char * onGetObjList (void);`

*   `extern JSExt * onCreateObject (const cadena & strClassName, const string & strObjId);`

La función `onGetObjList` devuelve una lista separada por comas de clases apoyada por JNEXT. JNEXT utiliza esta función para determinar el conjunto de clases que puede crear una instancia de JNEXT. En nuestro plugin de eco, tenemos lo siguiente en `echo_js.cpp`:

    Char * onGetObjList() {static char nombre [] = "Eco";
        devolver el nombre;
    }
    

La función de `onCreateObject` toma dos parámetros. El primer parámetro es el nombre de la clase solicitada a crearse desde el lado de JavaScript. Nombres válidos son aquellos que son devueltos en `onGetObjList`. El segundo parámetro es el identificador de objeto único para la clase. Este método devuelve un puntero al objeto plugin creado. En nuestro plugin de eco, tenemos lo siguiente en `echo_js.cpp`:

    JSExt * onCreateObject (const cadena & className, string const & id) {si (className == "Eco") {return new Echo(id);
        } return NULL;
    }
    

## Creación de la parte de JavaScript de su plugin

La porción de JavaScript de tu plugin debe contener los siguientes archivos:

*   `client.js`: Esto se considera el lado del cliente y contiene la API que se puede llamar una aplicación Cordova. La API en `client.js` llamadas realiza llamadas a `index.js` . La API en `client.js` también conecta las funciones de devolución de llamada a los acontecimientos que la segunda prueba de fuego.

*   `index.js`: Carga Cordova `index.js` y hace accesible a través del puente de cordova.exec. El `client.js` archivo hace llamadas a la API en el `index.js` archivo, que a su vez hace llamar a JNEXT para comunicarse con el lado nativo.

El lado del cliente y el servidor ( `client.js` y `index.js` ) interactúa a través de la `Cordova.exec` función. Así, en `client.js` se invoca el `exec` función y proporcionar los argumentos necesarios. En el plugin de eco, tenemos lo siguiente en el `client.js` archivo:

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

Ahora, `index.js` interactúa con el lado nativo utilizando JNEXT. Así es asociar una función constructora llamada Eco para JNEXT. Dentro del constructor se realizan las siguientes operaciones claves usando la función init:

*   Especificar el módulo requiere exportado por el lado nativo. El nombre del módulo requerido debe coincidir con el nombre de un archivo de biblioteca compartida (archivo así).

`JNEXT.require("libecho")`

*   Crear un objeto mediante un módulo adquirido y guardamos el identificador devuelto por la llamada. Self.m_id = JNEXT.createObject ("libecho.Echo"); Cuando la aplicación llama a la función Eco `client.js` , que llame a su vez llama a la función Eco `index.js` , donde el objeto PluginResult envía una respuesta (datos) a `client.js` . Puesto que el argumento args promulgó las funciones fue convertido por JSON.stringfy() y codificado como un URIcomponent, se deben llamar a los siguientes:

`data = JSON.parse(decodeURIComponent(args.data));`

Ahora puedes enviar los datos de vuelta. Vamos a ponerlo todo junto:

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## Arquitectura del plugin

Usted puede colocar los artefactos del plugin, que incluye el `plugin.xml` archivo, los archivos fuente (C++, JavaScript) y los archivos binarios ( `.so` ) dentro de cualquier estructura de directorios, mientras correctamente especifica las ubicaciones de los archivos en el `plugin.xml` archivo. Una estructura típica de este aspecto:

***your\_project\_directory*** (> plugin.xml)

*   **www** (> client.js)
*   **src** 
    *   **blackberry10** (> **nativa** , index.js > *.cpp, *.hpp)
    *   **dispositivo** (>*archivo binario* * así)
    *   **simulador** (>*archivo binario* * así)

(La lista muestra la relación jerárquica entre los directorios de nivel superior. El paréntesis muestra el contenido de un directorio determinado. Todos los nombres de directorio aparecen en negrita. Nombres de archivo son precedidos por el `>` signo.)

## Contenido de la `plugin.xml` archivo

El `plugin.xml` archivo contiene el espacio de nombres de la extensión y otros metadatos. Definir el espacio de nombres y especificar otros metadatos para el plugin de Echo como sigue:

    <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
        id="org.apache.cordova.blackberry.echo"
        version="1.0.0">
        <js-module src="www/client.js">
            <merges target="navigator" />
        </js-module>
        <platform name="blackberry10">
            <source-file src="src/blackberry10/index.js" />
            <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
            <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
            <config-file target="www/config.xml" parent="/widget">
                <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
            </config-file>
        </platform>
    </plugin>