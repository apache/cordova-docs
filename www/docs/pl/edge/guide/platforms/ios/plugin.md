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

title: iOS wtyczek
---

# iOS wtyczek

Ta sekcja zawiera szczegóły dotyczące sposobu realizacji kodu macierzystego plugin na platformie iOS. Przed przeczytaniem, zobacz zastosowanie pluginów omówienie struktury wtyczki i jego wspólny interfejs JavaScript. W tej sekcji w dalszym ciągu wykazują wtyczce *echo* próbki, który komunikuje się z widoku sieci Web Cordova do macierzystego platformy i z powrotem.

Plugin iOS jest zaimplementowany jako cel-C klasy, która rozszerza `CDVPlugin` klasy. Dla JavaScript `exec` metody `service` Parametr mapowania do klasy Objective-C, każda klasa wtyczki muszą być zarejestrowane jako `<feature>` tag w katalogu aplikacji o nazwie `config.xml` pliku.

## Mapowanie plugin Klasa

Część JavaScript plugin używa `cordova.exec` Metoda w następujący sposób:

        exec (< successFunction >, < failFunction >, < usługi >, < działania >, < argumenty >);
    

To marszałków na wniosek `UIWebView` w stronę rodzimych iOS, skutecznie wywołanie `action` Metoda `service` klasy, argumenty przekazywane w `args` tablicy.

Określić jako plugin `<feature>` tag w Cordova-iOS aplikacji projektu `config.xml` pliku, za pomocą `plugin.xml` plik, aby wprowadzić ten znaczników automatycznie, zgodnie z opisem w aplikacji pluginy:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

Funkcja `name` atrybutu powinna odpowiadać, co można określić jako JavaScript `exec` call `service` parametr. `value`Atrybut powinien odpowiadać nazwie wtyczki Objective-C Klasa. `<param>`Elementu `name` należy zawsze `ios-package` . Jeśli nie zastosujesz te wytyczne, skompilować plugin, ale Cordova nadal może nie być do niej dostęp.

## Plugin inicjowania i życia

Jedno wystąpienie obiekt plugin jest tworzony dla życia każdego `UIWebView` . Wtyczki są zwykle utworzone, gdy po raz pierwszy przez połączenie z JavaScript. W przeciwnym razie mogą być utworzone przez ustawienie `param` o nazwie `onload` do `true` w `config.xml` pliku:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

Ma *nie* wyznaczone inicjujących dla wtyczek. Zamiast tego należy użyć wtyczki `pluginInitialize` Metoda ich uruchamiania logiki.

Wtyczki z długim żądania, tło działalności, takich jak odtwarzanie, słuchaczy lub że utrzymać stan wewnętrzny należy implementować `onReset` Metoda, aby oczyścić tych działań. Metoda działa gdy `UIWebView` przechodzi do nowej strony lub odświeża, który ładuje JavaScript.

## Pisanie iOS Cordova Plugin

Połączenie JavaScript odpala plugin wniosek na stronie macierzystego i iOS odpowiedni plugin Objective-C jest mapowane odpowiednio w `config.xml` pliku, ale co ostateczne iOS Objective-C plugin klasy wygląd jak? Co jest wysyłane do wtyczki z JavaScript `exec` funkcja jest przekazywana do odpowiedniej klasy plugin `action` Metoda. Metoda plugin ma tego podpisu:

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
    

Aby uzyskać więcej informacji, zobacz `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , i`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS typy wiadomości CDVPluginResult

Można użyć `CDVPluginResult` aby zwracać różne wyniki typy powrót do wywołań JavaScript, za pomocą metod klasy, które należy wykonać ten wzór:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Można utworzyć `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , i `Multipart` typów. Można również zostawić żadnych argumentów, aby wysłać stan, lub zwraca błąd, lub nawet wybrać nie wysyłać żadnych wyników plugin, w którym to przypadku pożarów ani wywołania zwrotnego.

Uwaga następujące złożone wartości zwracanej:

*   `messageAsArrayBuffer`oczekuje, że `NSData*` i konwertuje do `ArrayBuffer` w zwrotnego JavaScript. Podobnie, wszelkie `ArrayBuffer` wysyła JavaScript do wtyczki są konwertowane na`NSData*`.

*   `messageAsMultipart`oczekuje, że `NSArray*` zawierające dowolny z innych obsługiwanych typów i wysyła całej tablicy jako `arguments` do swojego zwrotnego JavaScript. W ten sposób wszystkie argumenty są szeregowane lub rozszeregować w razie potrzeby, więc jest to bezpieczne, aby powrócić `NSData*` jako wieloczęściowe, ale nie jako `Array` /`Dictionary`.

## Echo iOS przykład Plugin

Do interfejsu JavaScript *echa* funkcji opisanych w aplikacji wtyczek, użyj `plugin.xml` Aby wprowadzić `feature` specyfikacji do lokalnej platformie `config.xml` pliku:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

Następnie dodać następujące `Echo.h` i `Echo.m` pliki do `Plugins` folder w katalogu aplikacji Cordova-iOS:

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
    

Potrzeby przywozu w górnej części pliku rozszerza klasę z `CDVPlugin` . W tym przypadku plugin obsługuje tylko jeden `echo` działania. Uzyska ciągu echo przez wywołanie `objectAtIndex` Metoda dostać pierwszy parametr `arguments` tablicy, która odpowiada argumenty przekazywane w przez JavaScript `exec()` funkcja.

Sprawdza parametru, aby upewnić się, że to nie jest `nil` lub ciąg pusty, powrót `PluginResult` z `ERROR` stanu, jeśli tak. Jeśli parametr przechodzi kontrolę, to zwraca `PluginResult` z `OK` stanu, przechodząc w oryginale `echo` ciąg. Wreszcie, to wysyła wynik `self.commandDelegate` , który wykonuje `exec` Metoda na sukces lub Niepowodzenie wywołania zwrotne na stronie JavaScript. Jeśli wywołanie zwrotne sukces nazywa się, przechodzi w `echo` parametru.

## iOS integracji

`CDVPlugin`Klasa oferuje inne metody, które wtyczki można zastąpić. Na przykład, można przechwytywać `[pause](../../../cordova/events/events.pause.html)` , `[resume](../../../cordova/events/events.resume.html)` , zakończenie aplikacji i `handleOpenURL` wydarzeń. Zobacz [CDVPlugin.h][1] i [CDVPlugin.m][2] klasy orientacji.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## Wątki

Plugin metody zwykle wykonać w tym samym wątku jako głównego interfejsu. Jeśli twój plugin wymaga dużo przetwarzania lub wymaga blokowanie połączenia, należy użyć wątek tła. Na przykład:

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
    

## Debugowanie iOS wtyczek

Do debugowania po stronie Objective-C, trzeba Xcode jest wbudowany debuger. Dla JavaScript na iOS 5.0 lub nowszego można [Weinre, Apache Cordova Project][3] lub [iWebInspector, trzeci-strona umowy narzędzie][4]. Dla iOS 8 Safari 8.0 można dołączyć do aplikacji uruchomiony w iOS 8 symulator.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## Typowe pułapki

*   Nie zapomnij, aby dodać mapowanie wtyczki do `config.xml` . Jeśli zapomnisz, błąd jest rejestrowany w Xcode konsoli.

*   Nie zapomnij dodać hostów, które można połączyć w białej, opisanych w przewodniku białej listy domen. Jeśli zapomnisz, błąd jest rejestrowany w Xcode konsoli.