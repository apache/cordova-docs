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

Un plugin è una classe di Objective-C che estende la `CDVPlugin` classe.

Ogni classe plugin deve essere registrato come un `<feature>` taggare nella `config.xml` file. È attraverso questo meccanismo che JavaScript `exec` del metodo `service` parametro esegue il mapping a una classe Objective-C.

## Classe plugin Mapping

La parte di JavaScript di un plugin utilizza sempre il `cordova.exec` metodo come segue:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Questo esegue il marshalling di una richiesta dalla `UIWebView` sul lato nativo di iOS, più o meno bollente fino a chiamare il `action` metodo sul `service` classe, con gli argomenti passati nella `args` matrice.

Specificare il plugin come un `<feature>` tag nel progetto dell'applicazione Cordova-iOS `config.xml` file.

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

La caratteristica `name` attributo deve corrispondere a quello che si utilizza in JavaScript `exec` di chiamata `service` parametro e il `value` attributo deve corrispondere al nome della classe Objective-C del plugin. `<param name>`io dovrei essere sempre `"ios-package"` . Se non si segue questa impostazione, il plugin può compilare, ma non sarà raggiungibile da Cordova.

## Durata e inizializzazione di Plugin

Viene creata un'istanza di un oggetto plugin per la vita di ogni `UIWebView` . Plugin non vengono create istanze fino a quando essi fanno riferimento in primo luogo una chiamata da JavaScript, a meno che non `<param>` con un `onload` `name` attributo è impostato su `"true"` in `config.xml` . Per esempio:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

Non c'è *nessun* designato inizializzatore per i plugin. Plugin necessario utilizzare invece il `pluginInitialize` metodo per la loro logica di avviamento.

Plugin con richieste di lunga durata, sfondo attività (per esempio, riproduzione multimediale), ascoltatori o stato interno dovrebbe implementare il `onReset` metodo e interrompere o ripulire tali attività. Questo metodo viene eseguito quando il `UIWebView` si sposta su una nuova pagina o rinfresca, che ricarica il JavaScript.

## Scrivendo un iOS Cordova Plugin

Abbiamo JavaScript fuoco fuori una richiesta di plugin al lato nativo. Abbiamo il plugin iOS Objective C mappato correttamente tramite il `config.xml` file. Così ciò che fa apparire l'iOS finale classe Objective C Plugin come?

Che cosa ottiene spedito al plugin tramite di JavaScript `exec` funzione viene passato la classe corrispondente Plugin `action` metodo. Un metodo di plugin ha questa firma:

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

## iOS CDVPluginResult tipi di messaggio

Utilizzando CDVPluginResult è possibile restituire una varietà di tipi di risultato al vostro callback JavaScript, utilizzando i metodi della classe che sembrano:

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

È possibile creare `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , e `Multipart` tipi. O, non allegare eventuali argomenti (basta inviare uno status). O, per restituire un errore. Può anche scegliere di non inviare alcun risultato plugin a tutti, nel qual caso non viene generato il callback.

### Note

*   `messageAsArrayBuffer`si aspetta `NSData*` e la converte in un `ArrayBuffer` per il callback di JavaScript (e `ArrayBuffers` inviati a un plugin da JavaScript vengono convertiti in`NSData*`).
*   `messageAsMultipart` si aspetta un `NSArray *` contenente uno qualsiasi degli altri supportati i tipi e manda l'intera matrice come il `argomenti` il callback di JavaScript. 
    *   Particolarità: questo non è zucchero sintattico solo (anche se è dolce). In questo modo, tutti gli argomenti sono serializzati o deserializzati come necessari. Per esempio, è sicuro di tornare `NSData*` più parti, ma non come `Array` /`Dictionary`.

## IOS Echo Plugin Plugin

Aggiungiamo i seguenti al progetto `config.xml` file:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

Poi aggiungiamo i seguenti file ( `Echo.h` e `Echo.m` ) nella directory Plugins all'interno della nostra directory di applicazione Cordova-iOS:

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
    

Diamo un'occhiata al codice. In cima abbiamo tutte le necessarie importazioni di Cordova. La nostra classe si estende da `CDVPlugin` (molto importante).

Questo plugin supporta solo un'azione, la `echo` azione. In primo luogo, si afferra l'eco stringa utilizzando il `objectAtIndex` metodo sul nostro `args` , dicendo che vogliamo ottenere il parametro 0A nella matrice di argomenti. Facciamo un po' di controllo parametro: assicurarsi che non è `nil` e assicurarsi che non è una stringa di lunghezza zero.

Se si, torniamo un `PluginResult` con un `ERROR` stato. Se tutti quei controlli passano, poi torniamo un `PluginResult` con un `OK` lo status e passare il `echo` abbiamo ricevuto in primo luogo come un parametro di stringa.

Infine, inviamo il risultato di `self.commandDelegate` , che esegue il `exec` callback del metodo di successo o fallimento sul lato JavaScript. Se viene chiamato il callback di successo, passa il `echo` parametro.

## Filettatura

Plugin metodi vengono eseguiti nello stesso thread come interfaccia utente. Se il tuo plugin richiede una grande quantità di elaborazione o richiede una chiamata di blocco, è necessario utilizzare un thread in background. Ad esempio:

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
    

## Funzionalità avanzate del Plugin

Vedere altri metodi che è possibile eseguire l'override in:

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

Ad esempio, si può collegare nella `pause` , `resume` , app terminare e `handleOpenURL` eventi.

## Plugin debug

Per eseguire il debug lato Objective-C, si utilizzerebbe il debugger integrato di Xcode. Per JavaScript, su iOS 5,0 è possibile utilizzare [Weinre, un progetto di Cordova Apache][6] o [iWebInspector, un'utilità di terze parti][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

Per iOS 6, usereste 6.0 Safari semplicemente allegare all'app in esecuzione nel iOS 6 simulatore.

## Trabocchetti comuni

*   Non dimenticare di aggiungere il mapping del vostro plugin config. Xml. Se si dimentica, viene registrato un errore nella console di Xcode.

*   Non dimenticate di aggiungere qualsiasi host che si connette a nella lista bianca, come descritto nella guida di dominio Whitelist. Se si dimentica, viene registrato un errore nella console di Xcode.