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

Un plugin est une classe d'Objective-C qui étend la `CDVPlugin` classe.

Chaque classe de plugin doit être enregistré comme une `<feature>` tag dans le `config.xml` fichier. C'est grâce à ce mécanisme que JavaScript `exec` de la méthode `service` paramètre mappe vers une classe d'Objective-C.

## Classe plugin cartographie

La partie JavaScript d'un plugin utilise toujours la `cordova.exec` méthode comme suit :

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Cela marshale une demande de la `UIWebView` vers le côté natif iOS, plus ou moins bouillant vers le bas pour appeler le `action` méthode sur la `service` classe, avec les arguments passés à la `args` tableau.

Précisez le plugin comme un `<feature>` tag dans le projet de votre application Cordova-iOS `config.xml` fichier.

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

La fonction `name` attribut doit correspondre à ce que vous utilisez dans le JavaScript `exec` call `service` paramètre et le `value` attribut doit correspondre au nom de classe d'Objective-C du plugin. `<param name>`Je serais toujours `"ios-package"` . Si vous ne suivez pas cette configuration, le plugin peut compiler mais ne sera pas atteignable par Cordova.

## Durée de vie et initialisation du Plugin

Une seule instance d'un objet plugin est créée pour la vie de chaque `UIWebView` . Plugins ne sont pas instanciés jusqu'à ce qu'ils sont tout d'abord référencées par un appel de JavaScript, à moins que `<param>` avec un `onload` `name` attribut a la valeur `"true"` dans `config.xml` . Par exemple :

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

Il y a *pas* désigné l'initialiseur de plugins. Plugins doivent plutôt utiliser la `pluginInitialize` méthode pour leur logique de démarrage.

Plugins avec longues requêtes, fond activité (p. ex., les médias jouant), auditeurs ou état interne doit mettre en œuvre la `onReset` méthode et arrêter ou nettoyer ces activités. Cette méthode est exécutée lorsque la `UIWebView` navigue vers une nouvelle page ou des actualisations, qui recharge le JavaScript.

## Écrire un iOS Cordova Plugin

Nous avons une demande de plugin pour le côté natif JavaScript feu. Nous avons le plugin iOS Objective-C mappé correctement le `config.xml` fichier. Donc ce que l'iOS finales Plugin Objective-C classe ressemble ?

Ce qui obtient expédié vers le plugin via du JavaScript `exec` fonction passée dans la classe correspondante Plugin `action` méthode. Une méthode de plugin a cette signature :

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

## iOS CDVPluginResult types de messages

À l'aide de CDVPluginResult vous pouvez retourner une variété de types de résultats à vos rappels JavaScript, utilisant des méthodes de la classe qui ressemblent à :

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Vous pouvez créer des `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , et `Multipart` types. Ou bien, ne joindre aucun argument (il suffit d'envoyer un État). Ou, renvoie une erreur. Vous pouvez même choisir ne pas envoyer n'importe quel résultat de plugin du tout, auquel cas le rappel ne se déclenche pas.

### Notes

*   `messageAsArrayBuffer`attend `NSData*` et le convertit en un `ArrayBuffer` pour votre rappel JavaScript (et `ArrayBuffers` venues à un plugin JavaScript sont convertis en`NSData*`).
*   `messageAsMultipart` s'attend à une `NSArray *` contenant l'un de l'autre pris en charge les types et envoie l'intégralité du tableau comme le `arguments` pour votre rappel JavaScript. 
    *   Bizarrerie : ce n'est pas seulement syntaxique (bien qu'il soit sucré). De cette façon, tous les arguments sont sérialisées ou désérialisées si nécessaires. Par exemple, il est sûr de revenir `NSData*` comme plusieurs parties, mais pas comme `Array` /`Dictionary`.

## IOS écho Plugin Plugin

Nous aimerions ajouter ce qui suit pour le projet `config.xml` fichier :

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

Puis nous aimerions ajouter les fichiers suivants ( `Echo.h` et `Echo.m` ) vers le répertoire Plugins à l'intérieur de notre répertoire de l'application de Cordova-iOS :

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
    

Nous allons jeter un coup d'oeil sur le code. En haut, nous avons toutes les importations de Cordova nécessaires. Notre classe s'étend de `CDVPlugin` (très important).

Ce plugin supporte seulement une seule action, le `echo` action. Tout d'abord, nous attraper la chaîne echo à l'aide du `objectAtIndex` méthode sur notre `args` , il dit nous voulons obtenir le paramètre 0E dans le tableau d'arguments. Nous faisons un peu de paramètre de contrôle : Veillez à ce que ce n'est pas `nil` et assurez-vous qu'il n'est pas une chaîne de longueur nulle.

Si elle est, nous retourner un `PluginResult` avec une `ERROR` État. Si toutes ces vérifications passent, puis nous retournons une `PluginResult` avec un `OK` statut et passez le `echo` nous avons reçu en premier lieu comme un paramètre de chaîne.

Enfin, nous envoyer le résultat à `self.commandDelegate` , qui exécute le `exec` rappels de succès ou l'échec de la méthode du côté de JavaScript. Si le rappel de succès est appelé, elle passe dans le `echo` paramètre.

## Filetage

Méthodes plugin sont exécutées dans le même thread que l'interface utilisateur. Si votre plugin nécessite beaucoup de traitement ou nécessite un appel bloquant, vous devez utiliser un thread d'arrière-plan. Par exemple :

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
    

## Fonctionnalités avancées de Plugin

Voir d'autres méthodes que vous pouvez substituer dans :

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

Par exemple, vous pouvez accrocher dans le `[pause](../../../cordova/events/events.pause.html)` , `[resume](../../../cordova/events/events.resume.html)` , app résilier et `handleOpenURL` événements.

## Débogage des Plugins

Pour déboguer le côté de l'Objective-C, vous devez utiliser le débogueur intégré de Xcode. Pour JavaScript, sur iOS 5,0 vous pouvez utiliser [Weinre, un projet de Cordova Apache][6] ou [iWebInspector, un utilitaire tiers][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

Par iOS 6, vous devrez utiliser Safari 6.0 pour fixer simplement à votre application en cours d'exécution dans l'iOS simulateur 6.

## Pièges communs

*   N'oubliez pas d'ajouter le mappage de votre plugin à config.xml. Si vous avez oublié, une erreur est consignée dans la console de Xcode.

*   N'oubliez pas d'ajouter des hôtes que vous connecter à dans la liste blanche, comme décrit dans Domain Whitelist Guide. Si vous avez oublié, une erreur est consignée dans la console de Xcode.