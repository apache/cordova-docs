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

title: Windows Phone Plugins
---

# Windows Phone Plugins

Escribir un plugin para Cordova de Windows Phone requiere un entendimiento básico de la arquitectura de Córdoba. Cordova-WP7 consiste en un navegador web que aloja el código JavaScript de aplicación y administra las llamadas API nativas. Hay una clase de BaseCommand (`WP7CordovaClassLib.Cordova.Commands.BaseCommand`) en C# que se puede extender, y viene con la mayoría de las 'tuberías' construida para ti ya.

1.  Seleccione su proyecto y con el botón derecho para elegir **Add → New Item...**
    
    *   Preferiblemente añadirlo al directorio 'Plugins', pero depende de ti

2.  Seleccione 'Class' y asígnele el nombre `Echo.cs`
    
    *   El nombre de esta clase debe *exactamente* coincidir con lo que se llama a `cordova.exec (win, fail, "Eco",...)`

3.  Incluyen la implementación de las clases base
    
        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;
        

4.  Extender la clase de BaseCommand
    
        public class Echo : BaseCommand
        {
            // ...
        }
        

5.  Agregue un método que es accesible desde JavaScript
    
        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // all JS callable plugin methods MUST have this signature!
                // public, returning void, 1 argument that is a string
            }
        }
        

## Espacios de nombres

Es el espacio de nombres predeterminado para comandos no cualificados:

    namespace Cordova.Extension.Commands
    {
        // ...
    }
    

Si desea utilizar su propio espacio de nombres, necesitas hacer una llamada totalmente calificada para `cordova.exec`. Por ejemplo, si desea definir tu clase de C# como esto:

    namespace com.mydomain.cordovaExtensions
    {
        public class Echo : BaseCommand
        {
            // ...
        }
    }
    

Luego, en JavaScript necesitas llamar `exec` así:

    cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);
    

## Interpretar sus argumentos en C

Los datos recibidos por su método de plugin están un valor de cadena, pero en realidad mirando nuestro código JavaScript, vemos que nuestra intención era pasar una matriz de cadenas. Mirando hacia atrás en nuestra llamada JavaScript a `cordova.exec`, vemos que pasamos `[str]`:

    cordova.exec(win, fail, "Echo", "echo", ["input string"]);
    

Si examinamos la cadena opciones pasan en nuestro método de `Echo.echo`, vemos que el valor es en realidad:

    "[\"input string\"]"
    

Todos los argumentos `exec` JavaScript son que JSON codificadas antes de ser pasado a C#.

Si queremos tratar esto como la cadena que estábamos esperando, necesitamos decodificarlo. Podemos utilizar simple deserialización JSON.

    string optVal = JsonHelper.Deserialize<string[]>(options)[0];
    // optVal now has the value of "input string"
    

## Resultados satisfactorios de C# para JavaScript

La clase base BaseCommand proporciona métodos para pasar datos a sus controladores de devolución de llamada JavaScript. Para simplemente señalar que el comando ha logrado, cuando no hay información de resultado adicional es necesario, se puede simplemente llamar:

    DispatchCommandResult(); // calls back with an empty plugin result, considered a success callback
    

Para pasar datos, tienes que llamar a una versión diferente de `DispatchCommandResult`:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Everything went as planned, this is a result that is passed to the success handler."));
    

Para pasar datos de objeto estructurado a JavaScript, que debe ser codificado como una cadena JSON:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Si usted necesita indicar que se ha producido un error, puede llamar a `DispatchCommandResult` con un objeto `PluginResult`:

    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signaled an error"));
    

## Controlar errores de serialización en método de tu plugin C#

Al interpretar sus argumentos, es una buena idea usar un bloque try/catch en caso tenemos mala entrada. Esto es un patrón usado en todo el código Cordova C#:

    string optVal = null;
    
    try
    {
        optVal = JsonHelper.Deserialize<string[]>(options)[0];
    }
    catch(Exception)
    {
        // simply catch the exception, we handle null values and exceptions together
    }
    
    if (optVal == null)
    {
        DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
    }
    else
    {
        // ... continuar a hacer nuestro trabajo}
    

## Plugin XML

Estos son ejemplos específicos de windows phone de usar el archivo plugin.xml, consulte la especificación de Plugin para más detalles

### `<source-file>`

En windows teléfono el elemento `< archivo fuente >` se utiliza actualmente para definir todos los recursos de plugin (es decir. CS, XAML,. xaml.cs, .dll, activos de imágenes, etc.).

### `<config-file>`

El elemento `<config-file>` define qué elementos ponen en un archivo de configuración. Por ejemplo, para añadir un plugin en el archivo config.xml de plataformas, que hicieras algo como esto:

    < config-file target="config.xml" padres = "/ *" >< nombre de la función = "NombrePlugin" >< nombre param = "wp-paquete" value = "NombrePlugin" / >< / característica >< / config-file >
    

Si quisiéramos añadir la capacidad de contactos a la WMAppManifest.xml, se vería así:

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## Funcionalidad avanzada Plugin

Ver otros métodos que se pueden reemplazar en:

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

Por ejemplo, puede conectar en los eventos de aplicación 'continuar' y '[pause](../../../cordova/events/events.pause.html)'.

### Depuración de Plugins

Para depurar el lado C#, puedes utilizar el depurador de Visual Studio, sólo tienes que configurar un punto de interrupción en cualquiera de los métodos expuestos por la clase.

JavaScript es un poco más difícil de depurar en Windows Phone. Tienes que usar `console.log` para el estado de su plugin de salida, o informar de errores.

## Errores comunes

*   Tenga cuidado al decidir sobre los argumentos que se pasa al nativo en la implementación de JavaScript. La mayoría de las plataformas de dispositivo esperan los argumentos pasados a cordova.exec para ser un array, pero si tienes diferentes tipos de objetos en esta matriz, se torna difícil o imposible deserializar.
    
        Cordova.exec (win, fail, "ServiceName", "MethodName", ["esto es una cadena", 54, {literal: 'trouble'}]);
        
    
    *   Esto significa que el código C# recibe un difícil de descifrar el valor de cadena, tales como:
        
            "[\"this es un string\ ", 54, {literal: 'trouble'}]"
            
    
    *   Considerar convertir todos los parámetros en cadenas antes de llamar a exec:
        
            Cordova.exec (win, fail, "ServiceName", "MethodName", ["esto es una cadena", "54", "{literal: 'trouble'}"]);
            
            String [] optValues = JsonHelper.Deserialize < string [] > (opciones);
            

*   Es generalmente una buena idea hacer parámetro comprobando tu código JavaScript, antes de llamar al `exec` . Esto le permite reutilizar código JavaScript más entre diferentes implementaciones nativa de su plugin.