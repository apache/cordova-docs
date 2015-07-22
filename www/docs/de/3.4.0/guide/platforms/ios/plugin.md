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

Dieser Abschnitt enthält Informationen für das native Plugin-Code auf der iOS-Plattform zu implementieren. Finden Sie bevor Sie dies lesen einen Überblick über die Plugin-Struktur und ihre gemeinsame JavaScript-Schnittstelle Anwendung Plugins. In diesem Abschnitt weiterhin das Beispiel- *Echo* -Plugin, das zum einheitlichen Plattform und zurück von Cordova-Webview kommuniziert.

Ein iOS-Plugin ist implementiert als eine Objective-C-Klasse, die erweitert die `CDVPlugin` Klasse. Für JavaScript `exec` Methode `service` Parameter einer Objective-C Klasse, jeder Plugin-Klasse zuordnen muss registriert sein, als ein `<feature>` Tag im Verzeichnis Anwendung mit Namen `config.xml` Datei.

## Plugin-Klasse Zuordnung

Der JavaScript-Teil eines Plugins verwendet die `cordova.exec` -Methode, wie folgt:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Das marshallt ersuchen die `UIWebView` effektiv auf die native iOS-Seite aufrufen der `action` -Methode für die `service` -Klasse mit der übergebenen Argumente der `args` Array.

Geben Sie das Plugin als ein `<feature>` Tag in Ihre Cordova-iOS-Anwendung-Projekt `config.xml` Datei, mit der `plugin.xml` Datei automatisch, wie unter Anwendung Plugins dieses Markup zu injizieren:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

Der Funktion `name` -Attribut sollte übereinstimmen, was Sie als das JavaScript angeben `exec` Anruf `service` Parameter. Das `value` -Attribut den Namen des Plugins Objective-C Klasse übereinstimmen sollte. Die `<param>` des Elements `name` sollte immer sein `ios-package` . Wenn Sie diese Richtlinien nicht folgen, kann das Plugin kompiliert, aber Cordova möglicherweise noch nicht darauf zugreifen.

## Plugin-Initialisierung und Lebensdauer

Wird eine Instanz eines Plugin-Objekts erstellt, für das Leben eines jeden `UIWebView` . Plugins werden normalerweise instanziiert, wenn zunächst durch einen Aufruf von JavaScript verwiesen. Andernfalls sie instanziiert werden können, indem Sie festlegen einer `param` namens `onload` zu `true` in der `config.xml` Datei:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

Es gibt *keine* benannten Initialisierer für Plugins. Stattdessen sollten die Plugins verwenden die `pluginInitialize` -Methode für ihre Startlogik.

Plugins mit lang andauernden Anfragen, background Aktivität wie Medienwiedergabe, Listener oder das pflegen internen Zustand sollten implementieren die `onReset` Methode, um diese Tätigkeiten zu bereinigen. Die Methode ausgeführt wird, wenn die `UIWebView` navigiert zu einer neuen Seite oder Aktualisierungen, die das JavaScript lädt.

## Ein iOS Cordova Plugin schreiben

Ein JavaScript-Aufruf feuert eine Plugin-Anforderung an die systemeigene Seite und der entsprechenden iOS Objective-C Plugin zugeordnet ist, richtig in die `config.xml` -Datei, aber wie sieht das Finale iOS Objective-C Plugin Klasse aussehen? Was auch immer an das Plugin mit JavaScript gesendet wird `exec` Funktion wird in der entsprechenden Plugin-Klasse übergeben `action` Methode. Eine Plugin-Methode hat diese Signatur:

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
    

Weitere Informationen finden Sie unter `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , und`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult Message-Typen

Sie können `CDVPluginResult` eine Vielzahl von Ergebnis zurückgegeben Typen zurück an die JavaScript-Rückrufe mit Klassenmethoden, die diesem Muster folgen:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Sie können erstellen, `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , und `Multipart` Arten. Können Sie auch weglassen von Argumenten senden einen Status oder einen Fehler zurückgeben, oder sogar auswählen, keines Plugin-Ergebnis zu schicken, in diesem Fall weder Rückruf ausgelöst wird.

Beachten Sie Folgendes für komplexe Rückgabewerte:

*   `messageAsArrayBuffer`erwartet `NSData*` und konvertiert in eine `ArrayBuffer` in der JavaScript-Rückruf. Ebenso alle `ArrayBuffer` sendet der JavaScript zu einem Plugin werden in umgewandelt`NSData*`.

*   `messageAsMultipart`erwartet ein `NSArray*` mit allen anderen unterstützten Typen, und sendet das gesamte Array als die `arguments` an Ihre JavaScript-Rückruf. Auf diese Weise sind alle Argumente serialisiert oder deserialisiert wie erforderlich, so ist es sicher wieder `NSData*` als mehrteilige, aber nicht als `Array` /`Dictionary`.

## Echo iOS Plugin Beispiel

Um die JavaScript-Schnittstelle in Anwendung Plugins beschriebene *Echo* -Funktion, verwenden die `plugin.xml` zu injizieren eines `feature` Spezifikation der lokalen Plattform `config.xml` Datei:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

Dann fügen wir Folgendes würde `Echo.h` und `Echo.m` Dateien in den `Plugins` Ordner im Cordova-iOS-Anwendung-Verzeichnis:

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
    

Die notwendigen Importe am oberen Rand der Datei erweitert die Klasse von `CDVPlugin` . In diesem Fall unterstützt das Plugin nur eine einzige `echo` Aktion. Es erhält den Echo-String durch Aufrufen der `objectAtIndex` Abrufen den ersten Parameter der Methode der `arguments` vom JavaScript übergebene Array, das die Argumente entspricht `exec()` Funktion.

Es prüft den Parameter um sicherzustellen, dass es ist nicht `nil` oder eine leere Zeichenfolge zurückgeben, ein `PluginResult` mit einer `ERROR` Status Wenn ja. Wenn der Parameter die Prüfung erfolgreich ist, gibt es eine `PluginResult` mit einem `OK` Status, im Original übergeben `echo` Zeichenfolge. Es sendet das Ergebnis an `self.commandDelegate` , die führt die `exec` der Methode Erfolg oder Misserfolg Rückrufe auf der Seite JavaScript. Wenn der Erfolg-Rückruf aufgerufen wird, übergibt es in die `echo` Parameter.

## iOS Integration

Die `CDVPlugin` -Klasse enthält Methoden, die Ihr Plugin überschrieben werden kann. Beispielsweise können Sie erfassen die `pause` , `resume` , app beenden und `handleOpenURL` Ereignisse. Finden Sie die [CDVPlugin.h][1] und [CDVPlugin.m][2] Klasse Anleitung.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## Threading

Plugin-Methoden werden normalerweise im selben Thread wie die wichtigste Schnittstelle ausgeführt. Wenn Ihr Plugin ein hohes Maß an Verarbeitung erfordert oder einen blockierenden Aufruf erfordert, verwenden Sie einen Hintergrund-Thread. Zum Beispiel:

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
    

## Debuggen von iOS Plugins

Zum Debuggen auf der Objective-C-Seite benötigen Sie Xcodes integrierten Debuggers. Für JavaScript auf iOS können 5,0 [Weinre, einem Apache-Cordova-Projekt][3] oder [iWebInspector, ein Drittanbieter - Dienstprogramm][4]Sie. Für iOS 6 können Sie Ihre app-Betrieb innerhalb der iOS 6 Simulator Safari 6.0 zuordnen.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## Häufige Probleme

*   Vergessen Sie nicht, fügen Sie Ihr Plugin Zuordnung zu `config.xml` . Wenn Sie vergessen haben, wird ein Fehler in der Xcode-Konsole protokolliert.

*   Vergessen Sie nicht, alle Hosts, die Verbindung in die Whitelist hinzufügen, wie in Domain-Whitelist-Handbuch beschrieben. Wenn Sie vergessen haben, wird ein Fehler in der Xcode-Konsole protokolliert.