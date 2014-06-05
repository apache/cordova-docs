---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# BlackBerry 10 Plugins

Esta sección proporciona información sobre cómo implementar código plugin nativo en la plataforma BlackBerry 10. Antes de leer esto, vea aplicación Plugins para tener una visión general de la estructura del plugin y su interfaz común de JavaScript. Esta sección sigue demostrando el plugin *Eco* muestra que comunica desde la webview Cordova a la plataforma nativa y de regreso.

El plugin Eco básicamente devuelve cualquier cadena el `window.echo` envía a la función de JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Un plugin de Córdoba para BlackBerry 10 contiene JavaScript y código nativo, que comunican entre sí a través de un marco de JNEXT. Cada plugin debe incluir también un `plugin.xml` archivo.

## Crear la clase nativa

Para crear la parte nativa de su plugin, abra el BlackBerry 10 NDK IDE y seleccione **archivo → nuevo → BlackBerry proyecto → nativa extensión → BlackBerry 10**. Ingrese el nombre del proyecto deseado y la ubicación, luego pulse **Finalizar**.

El proyecto creado por el IDE contiene código de ejemplo para un plugin de memoria. Puede reemplazar o modificar estos archivos para implementar su propia funcionalidad:

*   `*Name*_js.HPP`: cabecera de C++ para el código JNEXT.

*   `*name*_js.cpp`: Código C++ para JNEXT.

La interfaz nativa para la extensión JNEXT puede verse en el archivo de cabecera plugin ubicado en el directorio público del proyecto. También cuenta con constantes y funciones de utilidad disponibles en código nativo. El plugin debe derivarse de `JSExt` , que está definido en `plugin.h` . Es decir, debe implementar la siguiente clase:

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

La extensión debe incluir la `plugin.h` archivo de encabezado. En la `Echo` ejemplo, utiliza `JSExt` como sigue en el `echo_js.hpp` archivo:

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
    

El `m_id` atributo contiene el `JNEXT` id para el objeto que se pasa como argumento al constructor para la clase. Es necesario para el lado nativo para eventos de disparo en el lado de JavaScript. El `CanDelete` método determina si el objeto nativo puede ser eliminado. El `InvokeMethod` se llama función como resultado de una solicitud de JavaScript para invocar un método de este objeto particular. El único argumento de esta función es una cadena de JavaScript que este método analiza para determinar cuál de los métodos del objeto nativo debe ejecutar. Estos métodos son implementados en `echo_js.cpp` . Aquí está el `InvokeMethod` función de la `Echo` ejemplo:

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
    

El plugin nativo también debe implementar las siguientes funciones de devolución de llamada:

*   `extern char * onGetObjList (void);`

*   `extern JSExt * onCreateObject (const cadena & strClassName, const string & strObjId);`

El `onGetObjList` función devuelve una lista separada por comas de clases apoyada por JNEXT. JNEXT utiliza esta función para determinar el conjunto de clases que puede crear una instancia de JNEXT. El `Echo` plugin implementa la siguiente `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

La `onCreateObject` la función toma dos parámetros. El primero es el nombre de la clase solicitada para ser creado desde el lado de JavaScript, con nombres válidos como los devueltos en `onGetObjList` . El segundo parámetro es el identificador de objeto único de la clase. Este método devuelve un puntero al objeto creado plugin. El `Echo` plugin implementa la siguiente `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Crear JavaScript del Plugin

El plugin debe contener los siguientes archivos JavaScript:

*   `client.js`: Esto se considera el lado del cliente y contiene la API disponible para una aplicación de Córdoba. La API en `client.js` llamadas realiza llamadas a `index.js` . La API en `client.js` también conecta las funciones de devolución de llamada a los acontecimientos que la segunda prueba de fuego.

*   `index.js`: Carga Cordova `index.js` y hace accesible a través del puente de cordova.exec. El `client.js` archivo hace llamadas a la API en el `index.js` archivo, que a su vez hace llamar a JNEXT para comunicarse con el lado nativo.

El lado del cliente y el servidor ( `client.js` y `index.js` ) interactúa a través de la `Cordova.exec` función. El `client.js` necesita invocar la `exec` función y proporcionar los argumentos necesarios. El `Echo` plugin implementa los siguientes en el `client.js` archivo:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

El `index.js` componente utiliza JNEXT para interactuar con el lado nativo. Asociar una función constructora llamada `Echo` a JNEXT le permite realizar las siguientes operaciones claves utilizando el `init` función:

*   Especifique el módulo requiere exportado por el lado nativo. El nombre del módulo requerido debe coincidir con el nombre de un archivo de biblioteca compartida ( `.so` file):
    
        JNEXT.require("libecho")
        

*   Crear un objeto mediante un módulo adquirido y guardamos el identificador devuelto por la llamada:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    Cuando la aplicación llama la `echo` funcionan en `client.js` , que a su vez llamar llama la `echo` funcionan en `index.js` , donde el `PluginResult` objeto envía datos como una respuesta de vuelta a `client.js` . Puesto que el `args` argumento pasado a las funciones fue convertido por `JSON.stringfy()` y codificado como un `URIcomponent` , usted debe llamar a los siguientes:
    
        data = JSON.parse(decodeURIComponent(args.data));
        

Ahora usted puede enviar los datos, como en el siguiente:

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## Arquitectura de plugin

Usted puede colocar artefactos del plugin, incluyendo el `plugin.xml` archivo, los archivos de código fuente JavaScript y C++ y el `.so` archivos binarios dentro de cualquier estructura de directorios, mientras correctamente especifica las ubicaciones de los archivos en el `plugin.xml` archivo. Aquí es una estructura típica:

***project_directory*** (> plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (> **nativa** , index.js > *.cpp, *.hpp)
    *   **dispositivo** (>*archivo binario* * así)
    *   **simulador** (>*archivo binario* * así)

La lista muestra la relación jerárquica entre las carpetas de nivel superior. El paréntesis muestra el contenido de un directorio determinado. Todos los nombres de directorio aparecen en negrita. Nombres de archivo son precedidos por el `>` señal.

## El archivo *plugin.xml*

El `plugin.xml` archivo contiene el espacio de nombres de la extensión y otros metadatos. Configurar el `Echo` plugin como sigue:

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