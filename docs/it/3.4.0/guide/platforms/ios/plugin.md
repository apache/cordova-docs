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

In questa sezione vengono fornite informazioni dettagliate per come implementare il codice plugin nativo sulla piattaforma iOS. Prima di leggere questo, vedere applicazione plugin per una panoramica della struttura del plugin e la sua interfaccia JavaScript comune. Questa sezione continua a dimostrare il plugin di esempio *eco* che comunica da Cordova webview alla piattaforma nativa e ritorno.

Un plugin di iOS è implementato come Objective C classe che estende la `CDVPlugin` classe. Per JavaScript `exec` di metodo `service` parametro per eseguire il mapping a una classe di Objective-C, ogni classe plugin deve essere registrato come un `<feature>` tag di directory dell'applicazione denominata `config.xml` file.

## Classe plugin Mapping

La parte di JavaScript di un plugin che utilizza il `cordova.exec` metodo come segue:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Questo esegue il marshalling di una richiesta dalla `UIWebView` a lato nativo di iOS, efficacemente chiamando il `action` metodo sul `service` classe, con gli argomenti passati nel `args` matrice.

Specificare il plugin come un `<feature>` tag nel progetto dell'applicazione Cordova-iOS `config.xml` file, usando il `plugin.xml` file per iniettare questo markup automaticamente, come descritto in applicazione plugin:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

La caratteristica `name` attributo deve corrispondere a quello specificato come il JavaScript `exec` di chiamata `service` parametro. Il `value` attributo deve corrispondere al nome della classe Objective-C del plugin. Il `<param>` dell'elemento `name` deve essere sempre `ios-package` . Se non segui queste linee guida, può compilare il plugin, ma Cordova può non essere ancora in grado di accedervi.

## Durata e inizializzazione di Plugin

Viene creata un'istanza di un oggetto plugin per la vita di ogni `UIWebView` . Plugin ordinariamente vengono istanziati quando fatto riferimento prima di una chiamata da JavaScript. In caso contrario possono essere istanziate impostando un `param` denominato `onload` per `true` nella `config.xml` file:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

Non c'è *nessun* designato inizializzatore per i plugin. Plugin necessario utilizzare invece il `pluginInitialize` metodo per la loro logica di avvio.

Plugin con richieste di lungo corso, attività di base come la riproduzione multimediale, ascoltatori o che mantengono lo stato interno dovrebbe implementare il `onReset` metodo per ripulire tali attività. Il metodo viene eseguita quando il `UIWebView` si sposta su una nuova pagina o rinfresca, che ricarica il JavaScript.

## Scrivendo un iOS Cordova Plugin

Una chiamata JavaScript spara una richiesta di plugin al lato nativo, e il corrispondente iOS Objective C plugin è mappato correttamente nella `config.xml` file, ma che cosa fa come il finale iOS Objective C plugin sguardo di classe? Qualunque cosa viene inviata al plugin con JavaScript `exec` funzione è passato nel plugin classe corrispondente `action` metodo. Un metodo di plugin ha questa firma:

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
    

Per ulteriori dettagli, vedere `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , e`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult tipi di messaggio

È possibile utilizzare `CDVPluginResult` per restituire una varietà di risultato tipi indietro per i callback di JavaScript, utilizzando i metodi della classe che seguono questo modello:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

È possibile creare `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , e `Multipart` tipi. Si può anche lasciare fuori gli argomenti da inviare uno status, o restituire un errore, o anche scegliere di non inviare alcun risultato plugin, nel qual caso né richiamata fuochi.

Si noti quanto segue per i complessi valori restituiti:

*   `messageAsArrayBuffer`si aspetta `NSData*` e la converte in un `ArrayBuffer` nel callback JavaScript. Allo stesso modo, qualsiasi `ArrayBuffer` il JavaScript invia a un plugin vengono convertito in`NSData*`.

*   `messageAsMultipart`si aspetta un `NSArray*` contenente uno qualsiasi degli altri supportati i tipi e manda l'intera matrice come il `arguments` per il callback di JavaScript. In questo modo, tutti gli argomenti sono serializzati o deserializzati come necessario, quindi è sicuro tornare `NSData*` più parti, ma non come `Array` /`Dictionary`.

## Eco iOS esempio Plugin

Per abbinare la caratteristica di *eco* dell'interfaccia JavaScript descritto nel plugin di applicazione, utilizzare il `plugin.xml` per iniettare una `feature` specifica per la piattaforma locale `config.xml` file:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

Poi aggiungiamo i seguenti `Echo.h` e `Echo.m` di file per il `Plugins` cartella all'interno della directory dell'applicazione Cordova-iOS:

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
    

Le importazioni necessarie nella parte superiore del file estende la classe da `CDVPlugin` . In questo caso, il plugin supporta solo un singolo `echo` azione. Ottiene la stringa eco chiamando il `objectAtIndex` Metodo ottenere il primo parametro della `arguments` la matrice, che corrisponde agli argomenti passate da JavaScript `exec()` funzione.

Controlla il parametro per assicurarsi che non è `nil` o una stringa vuota, restituendo un `PluginResult` con un `ERROR` lo stato, se è così. Se il parametro supera il controllo, restituisce un `PluginResult` con un `OK` stato, passando nell'originale `echo` stringa. Infine, essa invia il risultato al `self.commandDelegate` , che esegue il `exec` callback del metodo di successo o fallimento sul lato JavaScript. Se viene chiamato il callback di successo, passa il `echo` parametro.

## iOS integrazione

La `CDVPlugin` classe dispone di altri metodi che possono eseguire l'override del vostro plugin. Ad esempio, è possibile catturare il `pause` , `resume` , app terminare e `handleOpenURL` eventi. Vedere la classe [CDVPlugin.h][1] e [CDVPlugin.m][2] per l'orientamento.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## Filettatura

Plugin metodi ordinariamente eseguiti nello stesso thread come interfaccia principale. Se il tuo plugin richiede una grande quantità di elaborazione o richiede una chiamata di blocco, è necessario utilizzare un thread in background. Ad esempio:

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
    

## Debug iOS Plugins

Per eseguire il debug sul lato di Objective-C, è necessario il debugger integrato di Xcode. Per JavaScript, su iOS 5,0 è possibile utilizzare [Weinre, un progetto di Cordova Apache][3] o [iWebInspector, un'utilità di terze parti][4]. IOS 6, è possibile collegare Safari 6.0 all'app in esecuzione all'interno di iOS 6 simulatore.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## Trabocchetti comuni

*   Non dimenticare di aggiungere il mapping del vostro plugin a `config.xml` . Se si dimentica, viene registrato un errore nella console di Xcode.

*   Non dimenticate di aggiungere qualsiasi host che si connette a nella lista bianca, come descritto nella guida di dominio Whitelist. Se si dimentica, viene registrato un errore nella console di Xcode.