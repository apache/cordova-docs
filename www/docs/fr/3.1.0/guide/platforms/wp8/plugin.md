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

title: Windows Phone Plugins
---

# Windows Phone Plugins

Écriture d'un plugin pour Cordoue sur Windows Phone nécessite une compréhension de base de l'architecture de Cordova. Cordova-WP7 se compose d'un navigateur Web qui héberge l'application JavaScript code et gère les appels d'API natives. Il y a un BaseCommand ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) classe en c# vous pouvez prolonger, et il est livré avec la majorité de la « plomberie » construite pour vous déjà.

1.  Sélectionnez votre projet et faites un clic droit pour sélectionner **Ajouter → nouveau Item...**
    
    *   Préférence l'ajouter dans le répertoire « Plugins », mais c'est à vous

2.  Sélectionnez « Classe » et nommez-le`Echo.cs`
    
    *   Le nom de cette classe doit *exactement* correspondre à ce que vous appelez dans`cordova.exec(win, fail, "Echo", ...)`

3.  Inclure l'implémentation de classes de base
    
        à l'aide de WPCordovaClassLib.Cordova ;
        à l'aide de WPCordovaClassLib.Cordova.Commands ;
        à l'aide de WPCordovaClassLib.Cordova.JSON ;
        

4.  Étendez votre classe de BaseCommand
    
        public class Echo : BaseCommand {/ /...}
        

5.  Ajoutez une méthode qui peut être appelée à partir de JavaScript
    
        public class Echo : BaseCommand {public void écho (options de chaîne) {/ / toutes les méthodes de plugin callable JS doivent disposer de cette signature !
                / / public, vide, 1 argument qui est une chaîne de retour}}
        

## Espaces de noms

L'espace de noms par défaut pour les commandes non qualifiés est :

    namespace Cordova.Extension.Commands {/ /...}
    

Si vous souhaitez utiliser votre propre espace de noms, vous devez faire un appel qualifié complet à `cordova.exec` . Par exemple, si vous souhaitez définir votre classe c# comme suit :

    namespace com.mydomain.cordovaExtensions {public class Echo : BaseCommand {/ /...}}
    

Puis, en JavaScript, vous devez appeler `exec` comme ceci :

    Cordova.exec (win, échec, « com.mydomain.cordovaExtensions.Echo »,...) ;
    

## Interpréter vos arguments en C

Les données reçues par votre méthode de plugin sont une valeur de chaîne, mais en réalité en regardant notre code JavaScript, nous voyons que notre intention était de passer un tableau de chaînes. Regard en arrière à notre appel de JavaScript à `cordova.exec` , nous voyons que nous avons passé `[str]` :

    Cordova.exec (win, échouer, « Echo », « echo », ["chaîne d'entrée"]) ;
    

Si nous inspectons la chaîne d'options passée à notre `Echo.echo` méthode, nous voyons que la valeur est en fait :

    "[\"input string\ "]"
    

Tous les JavaScript `exec` arguments sont JSON codée avant d'être passés en c#.

Si nous voulons considérer ceci comme la chaîne que nous attendions, nous avons besoin de le décoder. Nous pouvons utiliser simple désérialisation JSON.

    String optVal = JsonHelper.Deserialize < string [] > (options) [0] ;
    / / optVal a maintenant la valeur de « chaîne d'entrée »
    

## Résultats de passage entre c# et JavaScript

La classe de base BaseCommand fournit des méthodes pour transmettre les données à vos gestionnaires de rappel JavaScript. Pour simplement signaler que la commande a réussi, quand aucune info résultat supplémentaire n'est nécessaire, vous pouvez simplement appeler :

    DispatchCommandResult() ; / / appels revient avec un résultat vide plugin, considéré comme un rappel de la réussite
    

Pour passer des données rétrospectives, vous devez appeler une autre version de `DispatchCommandResult` :

    DispatchCommandResult (new PluginResult (PluginResult.Status.OK, "tout se déroule comme prévu, il s'agit d'un résultat qui est passé au gestionnaire de succès.")) ;
    

Pour passer des données de l'objet structuré vers JavaScript, il devrait être encodé comme une chaîne JSON :

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Si vous avez besoin signaler qu'une erreur s'est produite, vous pouvez appeler `DispatchCommandResult` avec un `PluginResult` objet :

    DispatchCommandResult (new PluginResult (PluginResult.Status.ERROR, « Echo signalé une erreur »)) ;
    

## Gestion des erreurs de sérialisation dans la méthode c# de votre plugin

Lors de l'interprétation de vos arguments, c'est une bonne idée d'utiliser un bloc try/catch dans le cas où nous avons entrée incorrecte. Il s'agit d'un modèle utilisé partout dans le code c# Cordova :

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
        // ... continuer sur notre travail}
    

## Plugin XML

Ce sont des exemples spécifiques de windows téléphone d'utiliser le fichier plugin.xml, reportez-vous à la spécification de Plugin pour plus de détails

### `<source-file>`

Sur windows phone le `<source-file>` élément est actuellement utilisé pour définir toutes les ressources de plugin (ie. .cs, .xaml,. xaml.cs, .dll, actifs d'image etc.).

### `<config-file>`

Le `<config-file>` élément définit quels éléments se mettre dans un fichier de config. Par exemple pour ajouter un plugin pour le fichier config.xml de plates-formes, vous feriez quelque chose comme ceci :

    < target="config.xml fichier de configuration « parent =" / * ">< nom de la fonction ="PluginName">< param nom = valeur"wp-package"="PluginName"/ >< / fiction >< / config-file >
    

Si nous avons voulu ajouter la possibilité de contacts à la WMAppManifest.xml, il ressemblerait à ceci :

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## Fonctionnalités avancées de Plugin

Voir d'autres méthodes que vous pouvez substituer dans :

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

Par exemple, vous pouvez y brancher dans la « [pause](../../../cordova/events/events.pause.html) » et les événements d'application « reprendre ».

### Débogage des Plugins

Pour déboguer le côté c#, vous pouvez utiliser le débogueur de Visual Studio, vient de mettre un point d'arrêt à une des méthodes exposées par votre classe.

JavaScript est un peu plus difficile pour le débogage sur Windows Phone. Vous devez utiliser `console.log` à la sortie de l'état de votre plugin, ou informez-vous des erreurs.

## Pièges communs

*   Soyez prudent pour statuer sur les arguments que vous passez au natif dans votre implémentation de JavaScript. La plupart des plates-formes de périphérique vous attendez les arguments passés à cordova.exec soit un tableau, mais si vous avez différents types d'objets dans ce tableau, il devienne difficile, voire impossible de désérialiser.
    
        Cordova.exec (win, fail, « ServiceName », « MethodName », [« il s'agit d'une chaîne », 54, {literal: « trouble »}]) ;
        
    
    *   Cela signifie que votre code c# reçoit un difficile à décoder la valeur de chaîne, telles que :
        
            « [\"this est un string\ », 54, {literal: « trouble »}] »
            
    
    *   Envisagez de le convertir tous les paramètres en chaînes avant d'appeler exec :
        
            Cordova.exec (win, fail, « ServiceName », « MethodName », [« il s'agit d'une chaîne », « 54 », "{literal: « trouble »}"]) ;
            
            String [] optValues = JsonHelper.Deserialize < string [] > (options) ;
            

*   C'est habituellement une bonne idée de faire le paramètre vérifier dans votre code JavaScript, avant d'appeler `exec` . Cela vous permet de réutiliser le code JavaScript plus parmi diverses implémentations natives de votre plugin.