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

title: Windows Plugins
---

# Windows Plugins

Esta sección proporciona información detallada de cómo implementar un plugin para el uso en una aplicación Windows Store. Antes de leer esto, vea aplicación Plugins para tener una visión general de la estructura del plugin y su interfaz común de JavaScript. Esta sección sigue demostrando el plugin *Eco* muestra que comunica desde la webview Cordova a la plataforma nativa y de regreso.

Es importante tener en cuenta que Windows apoya desarrollo directamente en Javascript, que significa desarrollar las porciones 'nativas' en sólo requiere en casos especiales.

## Crear un Plugin de ventanas en JavaScript

Estas instrucciones son crear un plugin de JavaScript puro. Comprender esto es crucial para entender cómo agregar los bits nativo/administrado.

Windows Cordova plugins son esencialmente un contenedor fino existente WinJS proporcionada las funciones, pero suponiendo que desea definir su interfaz común de JS para múltiples dispositivos, normalmente tendrá 1 archivo JS que ofrece la API.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## Interior Cordova ejec en Windows

La función cordova.exec se define diferentemente en cada plataforma, esto es debido a que cada plataforma tiene su propia forma de comunicación entre el código de aplicación de js y código de contenedor nativa. Pero en el caso de Windows, no hay ninguna envoltura nativa, así la llamada exec está allí para la consistencia. Que harías tu trabajo único plugin js directamente en EchoPlugin.echo, algo así como:

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

¿/ Podría funcionar bien, sin embargo significa que usted necesitará diferentes versiones de echoPlugin.js para diferentes plataformas, y posiblemente pudieras tener problemas con las inconsistencias en sus implementaciones. Como una buena práctica, hemos decidido imitar una API nativa dentro de cordova.exec en Windows, para poder ejecutar el mismo código JS y no tener que reescribir para la plataforma y también tomar ventaja de cualquier parámetro de comprobación, u otro código común proporcionada por los desarrolladores que estaban trabajando en otras plataformas.

## El proxy de exec Cordova

En Windows, cordova proporciona a un servidor proxy que puede utilizar para registrar un objeto que se encargará de todas las llamadas a una API cordova.exec.

Por ejemplo si quisieras proporcionar la implementación de la API de acelerómetro, haría esto:

cordova.commandProxy.add ("Acelerometro", {comienzo: function() {/ / tu código aquí...} / /... y el resto de la API aquí});

Así que en nuestro caso, supondremos que está manejando el código en echoplugin.js cruz plataforma relevante JavaScript y nos puede escribir simplemente un proxy para Windows

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

La definición del plugin

Si queremos que los usuarios de nuestro plugin para poder instalar fácilmente nuestro plugin, necesitamos definirla según cómo PlugMan define plugins. Más sobre este tema en el [Plugin Spec][1]

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Esto nos da un trabajo Windows JavaScript plugin que utiliza un archivo común (echoplugin.js) y utiliza a un proxy para proporcionar la porción única ventanas de la aplicación (echopluginProxy.js). ¿Qué adicionamos código nativo/administrado a esto? Bueno vamos a empezar el mismo, la única diferencia será lo que hacemos dentro de los métodos echopluginProxy.

# ¿WinJS tiene acceso a código nativo/administrado

En Windows, WinJS aplicaciones creados son capaces de interactuar con código nativo, esta operación Inter está disponible para los componentes de tiempo de ejecución de Windows. Los detalles son numerosos, y esta guía sólo cubrirá los conceptos básicos. Microsoft proporciona mucha más información [aquí][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

Al crear el componente Windows Runtime, cualquier clase se define como 'clase pública ref sellado' se considera una 'clase activatable' y será accesible desde JavaScript.

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

Ahora en orden para nosotros llamar a código nativo, utilizamos el espacio de nombres, classname y lowerCamelCase estamos llamando al método.

var res = EchoRuntimeComponent.EchoPluginRT.echo("boom"); Esto mueve a nuestro archivo echopluginProxy.js, conseguimos esto:

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

Y eso es todo, tenemos un to end C++ respaldado js exigible plugin para uso en Apache Cordova Windows!

# Algunas notas técnicas:

*   la devolución de llamada es típicamente async, llamando a la devolución de llamada ahora mismo probablemente no se espera por el llamador. En la práctica, si la llamada no es asincrónico, debe al menos usar javascript timeout para forzar la devolución de llamada para ser llamado async.
*   Activatable clases pueden hacer todo tipo de increíbles, como evento enviar, las devoluciones de llamada asincrónico, generando sus propios tipos de objeto, matrices, colecciones, métodos sobrecargados y mucho más. Te recomiendo que hagas tu tarea.
*   Si te atienes a común Windows Phone 8.0 y llamadas a la API del SDK de Windows, usted será capaz de utilizar el mismo componente runtime (nativos o administrados pedacitos) en un plugin de Windows Phone 8.0 Apache Cordova. ~ sintonizados para ese puesto.

# Definir su plugin

Ahora que tenemos un plugin de trabajo, tenemos que revisar la definición de plugin de antes y lo publicaremos. Ahora podemos añadir el componente de tiempo de ejecución como marco. Tenga en cuenta que el tipo de salida de un WindowsRuntimeComponent puede ser .winmd o .dll

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Eso es todo, ahora tienes un plugin distribuible que puedes compartir con el mundo! Una cosa que tenga en cuenta, sólo recientemente se agregó soporte para añadir marcos a Windows Cordova proyecto así que tendrá que asegurarse de que su cordova herramientas corriente. La cli de cordova y cordova-plugman soportan agregar quitar plugins nativos respaldado.

> cordova plugin add com.risingj.echoplugin

o

> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug