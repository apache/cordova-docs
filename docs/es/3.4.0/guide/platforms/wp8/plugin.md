--licencia: licencia a la Apache Software Foundation (ASF) bajo acuerdos de licencia de uno o más colaborador. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone Plugins

Esta sección proporciona información sobre cómo implementar código plugin nativo en la plataforma de Windows Phone. Antes de leer esto, vea aplicación Plugins para tener una visión general de la estructura del plugin y su interfaz común de JavaScript. Esta sección sigue demostrando el plugin *Eco* muestra que comunica desde la webview Cordova a la plataforma nativa y de regreso.

Escribir un plugin para Cordova de Windows Phone requiere una comprensión básica de la arquitectura de Cordova. Cordova-WP7 consta de un `WebBrowser` que acoge el código JavaScript de la aplicación y administra las llamadas API nativas. Se puede extender un C# `BaseCommand` clase ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ), que viene con la mayoría de la funcionalidad que usted necesita:

1.  Seleccione su proyecto y haga clic para seleccionar **Add → nuevo artículo...** Si lo desea, puede añadir a la `Plugins` carpeta.

2.  **SEL** y asígnele el nombre `Echo.cs` . Coincidir esta clase nombre debe *exactamente* con lo que se llama especificar que el servicio en el `cordova.exec()` llamar al lado de JavaScript.

3.  Incluyen la implementación de las clases base:
    
        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;
        

4.  Extender la clase de `BaseCommand` :
    
        public class Echo : BaseCommand
        {
            // ...
        }
        

5.  Añadir un `echo` método que es accesible desde JavaScript:
    
        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // all JS callable plugin methods MUST have this signature!
                // public, returning void, 1 argument that is a string
            }
        }
        

Vea la clase [BaseCommand.cs][1] para los métodos disponibles para el plugin anular. Por ejemplo, el plugin puede capturar eventos 'pausa' y 'volver'.

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## Espacios de nombres

Es el espacio de nombres predeterminado para los comandos no cualificados:

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

Si desea especificar su propio espacio de nombres, necesitas hacer una llamada totalmente calificada para `cordova.exec` . Por ejemplo, si desea definir la clase de C# así:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

El JavaScript tendría que llamar a `exec` así:

        cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);
    

## Interpretación de argumentos en C

¿En el ejemplo explicado en Plugins de aplicación, los datos que recibe de su plugin están una cadena, pero lo que si desea pasar una matriz de cadenas? Supongamos que el JavaScript `cordova.exec` llamada se especifica así:

        cordova.exec(win, fail, "Echo", "echo", ["input string"]);
    

El valor de la `options` cadena pasada a la `Echo.echo` método es JSON:

        "[\"input string\"]"
    

Todos JavaScript `exec` argumentos son codificados en JSON antes de ser pasado en C# y así debemos ser decodificada:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Resultados satisfactorios de C# para JavaScript

El `BaseCommand` clase proporciona métodos para pasar datos a los controladores de devolución de llamada JavaScript. Si simplemente desea éxito sin ningún resultado acompaña la señal, se puede simplemente llamar:

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

Para recuperar datos, tienes que llamar `DispatchCommandResult` diferentemente:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Everything went as planned, this is a result that is passed to the success handler."));
    

Utilice una cadena JSON codificada para pasar datos de objeto estructurado a JavaScript:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Para señalar un error, llame a `DispatchCommandResult` con un `PluginResult` objeto cuyo estado es `ERROR` :

        DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signaled an error"));
    

## Controlar errores de serialización

Al interpretar sus argumentos, `try` / `catch` bloques ayudan a eliminar la mala entrada. Este patrón aparece en el código de Cordova C#:

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
            // ... continue on to do our work
        }
    

## Plugin XML

Lo siguiente muestra cómo utilizar el `plugin.xml` archivo para especificar archivos de código fuente de un plugin en la plataforma de Windows Phone. Ver aplicación Plugins para tener una visión general y la especificación de Plugin para más detalles sobre las opciones disponibles.

*   El `<source-file>` elemento define todos los recursos de plugin, como *CS*, *XAML*, *. xaml.cs*y archivos *.dll* y activos de imágenes.

*   El `<config-file>` elemento define elementos para inyectar en un archivo de configuración. Este ejemplo agrega un plugin para la plataforma `config.xml` archivo:
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    Este ejemplo agrega la capacidad de contactos de la `WMAppManifest.xml` archivo:
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## Depuración de Plugins

Utilizar el depurador de Visual Studio para depurar componente de un plugin C#. Puede establecer un punto de interrupción en cualquiera de los métodos expuestos por la clase.

JavaScript es más difícil de depurar en Windows Phone. Tienes que usar `console.log` estado del plugin de salida, o para informar de errores.

## Errores comunes

*   Tenga cuidado de no pasar argumentos de JavaScript al lado nativo que son difíciles de deserializar como JSON. La mayoría de las plataformas de dispositivo esperan el argumento pasado al `cordova.exec()` a una matriz como la siguiente:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);
        
    
    Esto puede resultar en un valor de cadena excesivamente complejo para C# decodificar:
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    Por el contrario, considerar convertir *todos* los parámetros en cadenas antes de llamar al `exec()` y el descifrar cada uno por separado:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   Es generalmente mejor comprobar parámetros en JavaScript antes de llamar al `exec()` . Así le permite reutilizar código más y tire funcionalidad innecesaria desde del plugin varias implementaciones nativas.