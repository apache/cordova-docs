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

title: iOS Plugins
---

# iOS Plugins

Un plugin es una clase de Objective-C que extiende la clase `CDVPlugin`.

Cada clase plugin debe estar registrado como un `<feature>` de la etiqueta en el `config.xml` archivo. Es a través de este mecanismo de ese JavaScript `exec` del método `service` parámetro asigna a una clase de Objective-C.

## Asignación de clase plugin

La porción de JavaScript de un plugin utiliza siempre el `cordova.exec` método como sigue:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Esto mariscales una solicitud de la `UIWebView` al lado de iOS nativas, más o menos hirviendo a llamar al método de `acción` en la clase de `servicio`, con los argumentos pasados en la matriz de `args`.

Especifique el plugin como un `<feature>` etiqueta de proyecto de la aplicación Cordova-iOS `config.xml` archivo.

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

La función `name` atributo debe coincidir con lo que usas en JavaScript `exec` llamada `service` parámetro y el `value` atributo debe coincidir con el nombre de clase de Objective-C del plugin. `<param name>`debería ser siempre `"ios-package"` . Si usted no cumple con esta configuración, el plugin puede compilar pero no será accesible por Córdoba.

## Vida e inicialización de Plugin

Para la vida de cada uno se crea una instancia de un objeto plugin `UIWebView` . Plugins no se instancian hasta que primero se hace referencia mediante una llamada desde JavaScript, a menos que `<param>` con un `onload` `name` atributo se establece en `"true"` en `config.xml` . Por ejemplo:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

No hay *ningún* señalado a inicializador de plugins. Por el contrario, debe usar plugins el `pluginInitialize` método para su lógica puesta en marcha.

Plugins con solicitudes de larga duración, actividad (por ejemplo, medios de reproducción) del fondo, los oyentes o estado interno debe implementar el `onReset` método y detener o limpiar esas actividades. Este método se ejecuta cuando el `UIWebView` se desplaza a una nueva página o actualizaciones, que vuelve a cargar el JavaScript.

## Escribir un iOS Cordova Plugin

Tenemos fuego JavaScript apagado una solicitud plugin nativo al lado. Tenemos el iOS Objective-C plugin asigna correctamente mediante el archivo `config.xml`. Así qué ¿te parece el final iOS Objective-C Plugin clase?

Lo obtiene despachó al plugin vía la función de JavaScript `exec` se pasa al método de `action` de la clase Plugin correspondiente. Un método de plugin tiene esta firma:

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
    

1.  [CDVInvokedUrlCommand.h][1]

2.  [CDVPluginResult.h][2]

3.  [CDVCommandDelegate.h][3]

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h
 [3]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h

## iOS tipos de mensaje CDVPluginResult

Usando CDVPluginResult puede volver una variedad de tipos de resultados a su segunda prueba de JavaScript, utilizando métodos de la clase que se parecen:

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Puede crear `String`, `Int`, `Double`, `Bool`, `Array`, `Dictionary`, `ArrayBuffer` y `Multipart` tipos. O, no conecte ningún argumento (sólo enviar un estado). O, devolverá un Error. Incluso puede elegir no enviar ningún resultado del plugin, en cuyo caso la devolución de llamada no se dispara.

### Notas

*   `messageAsArrayBuffer`Espera `NSData*` y se convierte en un `ArrayBuffer` para la devolución de llamada JavaScript (y `ArrayBuffers` envió a un plugin de JavaScript se convierten en`NSData*`).
*   `messageAsMultipart` Espera un `NSArray *` que contengan cualquiera de las otras apoyado tipos y envía la matriz entera como la `argumentos` a la devolución de llamada JavaScript. 
    *   Capricho: esto no es sólo "syntactic sugar" (aunque es dulce). De esta manera, todos los argumentos son serializa o deserializa según sea necesario. Por ejemplo, que es seguro volver `NSData*` como varias partes, pero no como `Array` /`Dictionary`.

## IOS echo Plugin Plugin

Nos gustaría añadir lo siguiente al proyecto de `config.xml` archivo:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

Entonces nos gustaría añadir los siguientes archivos (`Echo.h` y `Echo.m`) en el directorio de Plugins dentro de nuestro directorio de aplicaciones Cordova-iOS:

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
    

Echemos un vistazo al código. En la parte superior tenemos todas las necesarias importaciones de Córdoba. Nuestra clase se extiende desde `CDVPlugin` (muy importante).

Este plugin soporta sólo una acción, el `echo` acción. En primer lugar, cogemos la cadena Eco usando el `objectAtIndex` método en nuestro `args` , diciendo queremos que el parámetro décimo en la matriz de argumentos. Hacemos un poco de control de parámetro: Asegúrese de que no es `nil` y asegúrese de que no es una cadena de longitud cero.

Si lo es, volvemos a `PluginResult` con un `ERROR` estado. Si todos esos cheques pasan, entonces volvemos un `PluginResult` con un `OK` estado y pase en el `echo` que recibimos en el primer lugar como un parámetro de cadena.

Finalmente, enviamos el resultado a `self.commandDelegate` , que ejecuta el `exec` callbacks de éxito o fracaso del método en el lado de JavaScript. Si se llama a la devolución de llamada de éxito, pasa en la `echo` parámetro.

## Threading

Plugin métodos se ejecutan en el mismo subproceso como la interfaz de usuario. Si tu plugin requiere una gran cantidad de procesamiento o requiere una llamada de bloquea, debe utilizar un subproceso de fondo. Por ejemplo:

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
    

## Funcionalidad avanzada Plugin

Ver otros métodos que puede reemplazar en:

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

Por ejemplo, puede conectar en el `[pause](../../../cordova/events/events.pause.html)` , `[resume](../../../cordova/events/events.resume.html)` , poner fin a la aplicación y `handleOpenURL` eventos.

## Plugins de depuración

Para depurar el lado Objective-C, utilizaría a depurador incorporado de Xcode. Para JavaScript, en iOS 5,0 puede utilizar [Weinre, un proyecto de Cordova Apache][6] o [iWebInspector, una utilidad de terceros][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

Para iOS 6, utilizaría Safari 6.0 simplemente adjuntar a su aplicación corriendo en el iOS Simulator 6.

## Errores comunes

*   No olvides agregar asignación de su plugin en config.xml. Si se olvida, se registra un error en la consola de Xcode.

*   No olvide agregar los hosts que conectarse en la lista blanca, como se describe en la guía de lista blanca de dominio. Si se olvida, se registra un error en la consola de Xcode.