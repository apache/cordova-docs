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

Eine Plugin ist eine Objective-C-Klasse, die erweitert die `CDVPlugin` Klasse.

Jedes Plugin-Klasse muss registriert sein, als ein `<feature>` tag-in der `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html). Es ist über diesen Mechanismus, dass JavaScript `exec` Methode `service` Parameter ordnet eine Objective-C-Klasse.

## Plugin-Klasse Zuordnung

Der JavaScript-Teil eines Plugins verwendet immer die `cordova.exec` Methode wie folgt:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Dies marshallt Ersuchen der `UIWebView` auf die iOS native Seite, mehr oder weniger kochendes bis Berufung der `action` -Methode für die `service` -Klasse mit der übergebenen Argumente der `args` Array.

Geben Sie das Plugin als ein `<feature>` Tag in Ihre Cordova-iOS-Anwendung-Projekt `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html).

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

Das Feature `name` Attribut sollte übereinstimmen, was Sie in der JavaScript verwenden `exec` Anruf `service` Parameter, und das `value` -Attribut den Namen des Plugins Objective-C Klasse übereinstimmen sollte. `<param name>`sollte ich `"ios-package"` . Wenn Sie dieses Setup nicht folgen, wird das Plugin kann kompiliert, aber werden nicht von Cordova erreichbar.

## Plugin-Initialisierung und Lebensdauer

Wird eine Instanz eines Plugin-Objekts erstellt, für das Leben eines jeden `UIWebView` . Plugins werden nicht instanziiert bis sie zuerst durch einen Aufruf von JavaScript, verwiesen wird, es sei denn, `<param>` mit einem `onload` `name` Attribut auf festgelegt ist `"true"` in `config.xml` . Z.B.:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

Es gibt *keine* benannten Initialisierer für Plugins. Stattdessen sollten die Plugins verwenden die `pluginInitialize` -Methode für ihre Start-up-Logik.

Plugins mit langer Laufzeit-Anforderungen, elektronische Aktivität (z. B. spielen Medien), Zuhörer oder internen Zustand sollten implementieren die `onReset` Methode und stoppen oder Bereinigen Sie diese Tätigkeiten. Diese Methode wird ausgeführt, wenn die `UIWebView` navigiert zu einer neuen Seite oder Aktualisierungen, die das JavaScript lädt.

## Ein iOS Cordova Plugin schreiben

Wir haben JavaScript Feuer aus eine Plugin-Anforderung an die systemeigene Seite. Wir haben das iOS Objective-C-Plugin richtig zugeordnet, über die `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html). Also sieht die letzte iOS Objective-C-Plugin-Klasse wie?

Was an das Plugin per JavaScript gesendet ruft `exec` Funktion übergeben wird, in der entsprechenden Plugin-Klasse `action` Methode. Eine Plugin-Methode hat diese Signatur:

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

## iOS CDVPluginResult Message-Typen

Mit CDVPluginResult können Sie zurückgeben eine Vielzahl von Ergebnistypen zurück an Ihre JavaScript-Rückrufe mit Klassenmethoden, die aussehen wie:

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Sie können erstellen, `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , und `Multipart` Arten. Oder keine Argumente (nur senden einen Status) anfügen. Oder ein Fehler zurückgegeben. Sie können auch keines Plugin-Ergebnis gesendet werden, in diesem Fall wird der Rückruf nicht ausgelöst.

### Notizen

*   `messageAsArrayBuffer`erwartet `NSData*` und konvertiert in eine `ArrayBuffer` für Ihre JavaScript-Rückruf (und `ArrayBuffers` von JavaScript zu einem Plugin gesendet werden`NSData*`).
*   `messageAsMultipart` erwartet ein `NSArray *` Typen und sendet das gesamte Array als mit allen anderen unterstützt die `Argumente` um Ihre JavaScript-Rückruf. 
    *   Besonderheit: Dies ist nicht nur syntaktischer Zucker (auch wenn es süß ist). Auf diese Weise sind alle Argumente serialisiert oder deserialisiert wie nötig. Z.B. gefahrlos zurück `NSData*` als mehrteilige, aber nicht als `Array` /`Dictionary`.

## Echo-Plugin iOS Plugin

Wir würden fügen Sie Folgendes in des Projekts `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html):

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

Dann wir die folgenden Dateien fügen würden ( `Echo.h` und `Echo.m` ) in das Plugins-Verzeichnis unserer Cordova-iOS-Anwendung-Verzeichnis:

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
    

Werfen Sie einen Blick auf den Code. An der Spitze haben wir alle notwendigen Cordova Einfuhren. Unsere Klasse erstreckt sich von `CDVPlugin` (sehr wichtig).

Dieses Plugin unterstützt nur eine Aktion, die `echo` Aktion. Zuerst, wir holen die Echo-Zeichenfolge unter Verwendung der `objectAtIndex` -Methode für unsere `args` , es zu sagen, wir wollen den 10. Parameter im Array Argumente zu bringen. Wir machen ein bisschen Parameterüberprüfung: Stellen Sie sicher, es ist nicht `nil` , und stellen Sie sicher, es ist keine Zeichenfolge der Länge Null.

Wenn es ist, wir zurück ein `PluginResult` mit einem `ERROR` Status. Wenn alle diese Prüfungen bestehen, dann kehren wir zurück ein `PluginResult` mit einer `OK` Status, und übergeben Sie die `echo` Zeichenfolge wir in erster Linie als Parameter empfangen.

Endlich, wir senden das Ergebnis an `self.commandDelegate` , die führt die `exec` Methode Erfolg oder Misserfolg Rückrufe auf der Seite JavaScript. Wenn der Erfolg-Rückruf aufgerufen wird, übergibt es in die `echo` Parameter.

## Threading

Plugin-Methoden werden in demselben Thread wie die Benutzeroberfläche ausgeführt. Wenn Ihr Plugin ein hohes Maß an Verarbeitung erfordert oder einen blockierenden Aufruf erfordert, verwenden Sie einen Hintergrund-Thread. Zum Beispiel:

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
    

## Erweiterte Plugin-Funktionalität

Sehen Sie andere Methoden, denen Sie, in überschreiben können:

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

Beispielsweise können Sie Haken in die `pause` , `resume` , app beenden und `handleOpenURL` Ereignisse.

## Debuggen von Plugins

Zum Debuggen der Objective-C-Seite verwenden Sie Xcodes integrierten Debuggers. Für JavaScript auf iOS können 5,0 [Weinre, einem Apache-Cordova-Projekt][6] oder [iWebInspector, ein Drittanbieter - Dienstprogramm][7] Sie

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

Für iOS 6 würden Sie Safari 6.0 verwenden, einfach an Ihre Anwendung, die in das iOS 6 Simulator ausgeführt.

## Häufige Probleme

*   Vergessen Sie nicht, Ihr Plugin Zuordnung zu "config.xml" hinzugefügt werden. Wenn Sie vergessen haben, wird ein Fehler in der Xcode-Konsole protokolliert.

*   Vergessen Sie nicht, alle Hosts, die [Verbindung](../../../cordova/connection/connection.html) in die Whitelist hinzufügen, wie in Domain-Whitelist-Handbuch beschrieben. Wenn Sie vergessen haben, wird ein Fehler in der Xcode-Konsole protokolliert.