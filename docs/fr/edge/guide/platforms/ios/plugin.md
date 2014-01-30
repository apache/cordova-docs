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

Cette section fournit des détails pour savoir comment implémenter le code du plugin native sur la plateforme iOS. Avant de lire ceci, voir Application Plugins pour avoir un aperçu de la structure du plugin et son interface commune de JavaScript. Cette section continue de démontrer l'échantillon *écho* plugin qui communique de la webview Cordova à la plate-forme native et le dos.

Un plugin d'iOS est implémentée comme une classe d'Objective-C qui étend la `CDVPlugin` classe. Pour du JavaScript `exec` méthode `service` paramètre pour mapper une classe Objective-C, chaque classe plugin doit être enregistré comme une `<feature>` balise dans du répertoire de l'application nommé `config.xml` fichier.

## Classe plugin cartographie

La partie JavaScript d'un plugin utilise la `cordova.exec` méthode comme suit :

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Cela marshale une demande de la `UIWebView` vers le côté natif iOS, effectivement l'appel la `action` méthode sur la `service` classe, avec les arguments passés à la `args` tableau.

Spécifiez le plugin comme un `<feature>` tag dans le projet de votre application Cordova-iOS `config.xml` déposer, en utilisant le `plugin.xml` fichier à injecter cette balise automatiquement, comme décrit dans la demande de Plugins :

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

De la fonctionnalité `name` attribut doit correspondre à ce que vous spécifiez comme le JavaScript `exec` call `service` paramètre. Le `value` attribut doit correspondre au nom de classe d'Objective-C du plugin. La `<param>` de l'élément `name` doit toujours être `ios-package` . Si vous ne suivez pas ces instructions, le plugin peut compiler, mais Cordova est peut-être pas encore en mesure d'y accéder.

## Durée de vie et initialisation du Plugin

Une seule instance d'un objet plugin est créée pour la vie de chaque `UIWebView` . Plugins sont ordinairement instanciés lorsque tout d'abord référencée par un appel de JavaScript. Dans le cas contraire, ils peuvent être instanciées en définissant un `param` nommé `onload` à `true` dans le `config.xml` fichier :

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

Il y a *pas* désigné l'initialiseur de plugins. Plugins doivent plutôt utiliser la `pluginInitialize` méthode pour leur logique de démarrage.

Plugins avec longues requêtes, activité de fond telles que la lecture du média, auditeurs ou qui possèdent des état interne doit mettre en œuvre la `onReset` méthode pour nettoyer ces activités. La méthode s'exécute lorsque le `UIWebView` navigue vers une nouvelle page ou des actualisations, qui recharge le JavaScript.

## Écrire un iOS Cordova Plugin

Un appel JavaScript déclenche une demande de plugin pour le côté natif et l'iOS correspondant plugin Objective-C est mappé correctement en le `config.xml` fichier, mais à quoi ressemble l'iOS finales look de classe pour le plugin Objective-C ? Tout ce qui est dépêché sur le plugin avec du JavaScript `exec` fonction est passée dans la classe correspondante plugin `action` méthode. Une méthode de plugin a cette signature :

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
    

Pour plus de détails, voir `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , et`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult Message Types

Vous pouvez utiliser `CDVPluginResult` pour renvoyer des résultats très types retour aux rappels JavaScript, utilisant des méthodes de la classe qui suivent ce modèle :

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Vous pouvez créer des `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , et `Multipart` types. Vous pouvez aussi laisser de côté les arguments à envoyer un statut, ou renvoie une erreur, ou encore choisir de ne pas envoyer n'importe quel résultat de plugin, auquel cas aucun rappel se déclenche.

Noter ce qui suit pour les valeurs de retour complexes :

*   `messageAsArrayBuffer`attend `NSData*` et la convertit en une `ArrayBuffer` dans le rappel JavaScript. De même, tout `ArrayBuffer` l'envoie de JavaScript à un plugin est convertis en`NSData*`.

*   `messageAsMultipart`attend un `NSArray*` contenant l'un de l'autre pris en charge les types et envoie le tableau dans son intégralité comme le `arguments` à votre rappel JavaScript. De cette façon, tous les arguments sont sérialisées ou désérialisées comme nécessaire, donc il est prudent de retourner `NSData*` comme plusieurs parties, mais pas comme `Array` /`Dictionary`.

## Echo iOS Plugin exemple

Pour trouver *l'écho de l'interface JavaScript décrite dans les Plugins de l'Application* , utilisez le `plugin.xml` pour injecter un `feature` spécification à de la plate-forme locale `config.xml` fichier :

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

Puis nous tenons à ajouter ce qui suit `Echo.h` et `Echo.m` les fichiers vers le `Plugins` dossier dans le répertoire de l'application de Cordova-iOS :

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
    

Les importations nécessaires en haut du fichier étend la classe de `CDVPlugin` . Dans ce cas, le plugin prend uniquement en charge un seul `echo` action. Il obtient la chaîne de l'écho en appelant le `objectAtIndex` méthode obtenir le premier paramètre de la `arguments` tableau, qui correspond aux arguments passé par le JavaScript `exec()` fonction.

Il vérifie le paramètre pour s'assurer que ce n'est pas `nil` ou une chaîne vide, retournant un `PluginResult` avec un `ERROR` statut si oui. Si le paramètre passe le contrôle, elle retourne un `PluginResult` avec un `OK` État, en passant dans l'original `echo` chaîne. Enfin, il envoie le résultat vers `self.commandDelegate` , qui exécute le `exec` rappels de succès ou l'échec de la méthode du côté de JavaScript. Si le rappel de succès est appelé, elle passe dans le `echo` paramètre.

## Intégration d'iOS

Le `CDVPlugin` classe dispose d'autres méthodes que votre plugin peut substituer. Par exemple, vous pouvez capturer le `pause` , `resume` , app résilier et `handleOpenURL` événements. Consultez la classe [CDVPlugin.h][1] et [CDVPlugin.m][2] pour l'orientation.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## Filetage

Plugin méthodes exécutent habituellement dans le même thread que l'interface principale. Si votre plugin nécessite beaucoup de traitement ou nécessite un appel bloquant, vous devez utiliser un thread d'arrière-plan. Par exemple :

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
    

## Débogage iOS Plugins

Pour déboguer sur le côté de l'Objective-C, vous devez le débogueur intégré de Xcode. Pour JavaScript, sur iOS 5,0 vous pouvez utiliser [Weinre, un projet de Cordova Apache][3] ou [iWebInspector, un utilitaire tiers][4]. Pour iOS 6, vous pouvez joindre Safari 6.0 à votre application en cours d'exécution au sein de l'iOS simulateur 6.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## Pièges communs

*   N'oubliez pas d'ajouter le mappage de votre plugin pour `config.xml` . Si vous avez oublié, une erreur est consignée dans la console de Xcode.

*   N'oubliez pas d'ajouter des hôtes que vous connecter à dans la liste blanche, comme décrit dans Domain Whitelist Guide. Si vous avez oublié, une erreur est consignée dans la console de Xcode.