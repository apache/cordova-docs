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

# iOS Plugins

Esta sección proporciona información detallada de cómo implementar el código del plugin nativo en la plataforma iOS. Antes de leer esto, vea aplicación Plugins para tener una visión general de la estructura del plugin y su interfaz común de JavaScript. Esta sección sigue demostrando el plugin *Eco* muestra que comunica desde la webview Cordova a la plataforma nativa y de regreso.

Un plugin de iOS se implementa como una clase de Objective-C que se extiende la `CDVPlugin` clase. Para JavaScript `exec` del método `service` parámetro para asignar a un Objective-C, clase cada plugin debe estar registrado como un `<feature>` tag en del directorio la aplicación llamado `config.xml` archivo.

## Asignación de clase plugin

La porción de JavaScript de un plugin utiliza el `cordova.exec` método de la siguiente manera:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Esto mariscales una solicitud de la `UIWebView` al lado nativo iOS, efectivamente llamando el `action` método de la `service` clase, con los argumentos pasados en la `args` matriz.

Especificar el plugin como un `<feature>` etiqueta de proyecto de la aplicación Cordova-iOS `config.xml` archivo, usando el `plugin.xml` archivo para inyectar este marcado automáticamente, como se describe en aplicación Plugins:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

De la característica `name` atributo debe coincidir con lo que se especifica como el JavaScript `exec` llamada `service` parámetro. El `value` atributo debe coincidir con el nombre de clase de Objective-C del plugin. El `<param>` del elemento `name` siempre debe ser `ios-package` . Si usted no sigue estas pautas, el plugin puede compilar, pero Córdoba todavía no puede ser capaz de acceder a él.

## Vida e inicialización de Plugin

Para la vida de cada uno se crea una instancia de un objeto plugin `UIWebView` . Plugins normalmente se instancian cuando primero hace referencia a una llamada desde JavaScript. De lo contrario puede instanciarse mediante el establecimiento de un `param` llamado `onload` a `true` en el `config.xml` archivo:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

No hay *ningún* señalado a inicializador de plugins. Por el contrario, debe usar plugins el `pluginInitialize` método para su lógica de arranque.

Actividad de fondo plugins con solicitudes de larga duración, tales como medios de reproducción, los oyentes o que mantener el estado interno debe implementar el `onReset` método para limpiar esas actividades. El método ejecuta cuando el `UIWebView` se desplaza a una nueva página o actualizaciones, que vuelve a cargar el JavaScript.

## Escribir un iOS Cordova Plugin

¿Una llamada JavaScript dispara una solicitud plugin nativo al lado, y el iOS correspondiente plugin Objective-C se asigna correctamente en el `config.xml` archivo, pero lo que le gusta el final iOS Objective-C plugin mirada de clase? Lo que es enviado al plugin de JavaScript `exec` función se pasa a la clase correspondiente plugin `action` método. Esta firma cuenta con un método de plugin:

        - (void)myMethod:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* myarg = [command.arguments objectAtIndex:0];
    
            if (myarg != nil) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
            }
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    

Para más detalles, ver `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , y`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS tipos de mensaje CDVPluginResult

Puede utilizar `CDVPluginResult` para devolver una variedad de resultado tipos de vuelta a las devoluciones de llamadas de JavaScript, usando métodos de la clase que siguen este patrón:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Puede crear `String`, `Int`, `Double`, `Bool`, `Array`, `Dictionary`, `ArrayBuffer` y `Multipart` tipos. Puede también dejar de lado ningún argumento para enviar un estatus, o devolver un error, o incluso optar por no enviar ningún resultado del plugin, en cuyo caso se despide ni devolución de llamada.

Tenga en cuenta lo siguiente para valores complejos de retorno:

*   `messageAsArrayBuffer`Espera `NSData*` y se convierte en un `ArrayBuffer` en la devolución de llamada JavaScript. Asimismo, cualquier `ArrayBuffer` el JavaScript envía a un plugin se convierte en`NSData*`.

*   `messageAsMultipart`Espera un `NSArray*` que contengan cualquiera de las otras apoyado tipos y envía la matriz completa como el `arguments` a la devolución de llamada JavaScript. De esta manera, todos los argumentos son serializa o deserializa según sea necesario, así que es seguro volver `NSData*` como varias partes, pero no como `Array` /`Dictionary`.

## Eco iOS ejemplo Plugin

Para hacer coincidir la función de *Eco* de la interfaz JavaScript descrita en Plugins de aplicación, utilice el `plugin.xml` para inyectar un `feature` Especificación de la plataforma local `config.xml` archivo:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

Entonces nos gustaría añadir lo siguiente `Echo.h` y `Echo.m` los archivos en el `Plugins` carpeta dentro del directorio de la aplicación de Cordova-iOS:

        /********* Echo.h Cordova Plugin Header *******/
    
        #import <Cordova/CDV.h>
    
        @interface Echo : CDVPlugin
    
        - (void)echo:(CDVInvokedUrlCommand*)command;
    
        @end
    
        /********* Echo.m Cordova Plugin Implementation *******/
    
        #import "Echo.h"
        #import <Cordova/CDV.h>
    
        @implementation Echo
    
        - (void)echo:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* echo = [command.arguments objectAtIndex:0];
    
            if (echo != nil && [echo length] > 0) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            }
    
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    
        @end
    

Las importaciones necesarias en la parte superior del archivo amplía la clase de `CDVPlugin` . En este caso, el plugin sólo es compatible con un solo `echo` acción. Obtiene la cadena Eco llamando el `objectAtIndex` método de conseguir el primer parámetro de la `arguments` matriz, que corresponde a los argumentos pasaron en el JavaScript `exec()` función.

Comprueba el parámetro para asegurarse de que no es `nil` o una cadena vacía, devolviendo un `PluginResult` con un `ERROR` estado si es así. Si el parámetro pasa la cuenta, devuelve un `PluginResult` con un `OK` estado, generando así en el original `echo` cadena. Por último, envía el resultado a `self.commandDelegate` , que ejecuta el `exec` callbacks de éxito o fracaso del método en el lado de JavaScript. Si se llama a la devolución de llamada de éxito, pasa en la `echo` parámetro.

## iOS integración

El `CDVPlugin` clase cuenta con otros métodos que puede invalidar su plugin. Por ejemplo, usted puede capturar el `pause` , `resume` , poner fin a la aplicación y `handleOpenURL` eventos. Vea la clase [CDVPlugin.h][1] y [CDVPlugin.m][2] para la dirección.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## Roscar

Plugin métodos normalmente se ejecutan en el mismo subproceso como la interfaz principal. Si tu plugin requiere una gran cantidad de procesamiento o requiere una llamada de bloquea, debe utilizar un subproceso de fondo. Por ejemplo:

        - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
        {
            // Check command.arguments here.
            [self.commandDelegate runInBackground:^{
                NSString* payload = nil;
                // Some blocking logic...
                CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
                // The sendPluginResult method is thread-safe.
                [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
            }];
        }
    

## Depuración de iOS Plugins

Para depurar en el lado de Objective-C, necesitas a depurador incorporado de Xcode. Para JavaScript, en iOS 5,0 puede utilizar [Weinre, un proyecto de Cordova Apache][3] o [iWebInspector, una utilidad de terceros][4]. Para iOS 6, puede adjuntar a su aplicación ejecuta dentro del iOS 6 simulador Safari 6.0.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## Errores comunes

*   No te olvides de agregar asignación de su plugin para `config.xml` . Si se olvida, se registra un error en la consola de Xcode.

*   No olvide agregar los hosts que conectarse en la lista blanca, como se describe en la guía de lista blanca de dominio. Si se olvida, se registra un error en la consola de Xcode.