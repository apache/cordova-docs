--licence : une licence à l'Apache Software Foundation (ASF) au titre d'un ou plusieurs contrats de licence pour le cotisant. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone Plugins

Cette section fournit des détails pour l'implémentation de code du plugin native sur la plate-forme Windows Phone. Avant de lire ceci, voir Application Plugins pour avoir un aperçu de la structure du plugin et son interface commune de JavaScript. Cette section continue de démontrer l'échantillon *écho* plugin qui communique de la webview Cordova à la plate-forme native et le dos.

Écriture d'un plugin pour Cordoue sur Windows Phone requiert une compréhension de base de l'architecture de Cordova. Cordova-WP7 se compose d'un `WebBrowser` qui héberge le code JavaScript de l'application et gère les appels d'API natives. Vous pouvez étendre un C# `BaseCommand` classe ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ), qui est livré avec la plupart des fonctionnalités dont vous avez besoin :

1.  Sélectionnez votre projet et faites un clic droit pour sélectionner **Ajouter → nouveau Item...** Si vous le souhaitez, vous pouvez l'ajouter à la `Plugins` dossier.

2.  Sélectionnez la **classe** et nommez-la `Echo.cs` . Cette classe nom doit *exactement* correspondre à ce que vous appelez spécifier que le service dans le `cordova.exec()` donne la parole à la partie JavaScript.

3.  Inclure l'implémentation de classes de base :
    
        à l'aide de WPCordovaClassLib.Cordova ;
        à l'aide de WPCordovaClassLib.Cordova.Commands ;
        à l'aide de WPCordovaClassLib.Cordova.JSON ;
        

4.  Étendez votre classe de `BaseCommand` :
    
        public class Echo : BaseCommand {/ /...}
        

5.  Ajouter une `echo` méthode qui peut être appelée à partir de JavaScript :
    
        public class Echo : BaseCommand {public void écho (options de chaîne) {/ / toutes les méthodes de plugin callable JS doivent disposer de cette signature !
                / / public, vide, 1 argument qui est une chaîne de retour}}
        

Consultez la classe [BaseCommand.cs][1] pour les méthodes disponibles pour le plugin à substituer. Par exemple, le plugin peut capturer des événements de « pause », « reprendre ».

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## Espaces de noms

L'espace de noms par défaut pour les commandes non qualifiés est :

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

Si vous souhaitez spécifier votre propre espace de noms, vous devez faire un appel qualifié complet à `cordova.exec` . Par exemple, si vous souhaitez définir votre classe c# comme suit :

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

Le code JavaScript aurait besoin d'appeler `exec` comme ceci :

        Cordova.exec (win, échec, « com.mydomain.cordovaExtensions.Echo »,...) ;
    

## Interprétation des Arguments en C

Dans l'exemple abordé dans les Plugins de la demande, les données de que votre plugin reçoit sont une chaîne, mais ce qui si vous souhaitez passer un tableau de chaînes ? Supposons que le JavaScript `cordova.exec` appel est spécifiée comme suit :

        Cordova.exec (win, échouer, « Echo », « echo », ["chaîne d'entrée"]) ;
    

La valeur de `options` chaîne passée à la `Echo.echo` méthode est JSON :

        "[\"input string\ "]"
    

Tous les JavaScript `exec` arguments sont codées en JSON avant d'être passés en c# et si besoin à décoder :

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Résultats de passage entre c# et JavaScript

Le `BaseCommand` classe fournit des méthodes pour transférer des données vers des gestionnaires de rappel JavaScript. Si vous voulez simplement signaler le succès sans résultat d'accompagnement, vous pouvez simplement appeler :

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

Pour passer des données rétrospectives, vous devez appeler `DispatchCommandResult` différemment :

        DispatchCommandResult (new PluginResult (PluginResult.Status.OK, "tout se déroule comme prévu, il s'agit d'un résultat qui est passé au gestionnaire de succès.")) ;
    

Utilisez une chaîne JSON codée pour passer des données de l'objet structuré vers JavaScript :

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Pour signaler une erreur, appelez `DispatchCommandResult` avec un `PluginResult` objet dont le statut est `ERROR` :

        DispatchCommandResult (new PluginResult (PluginResult.Status.ERROR, « Echo signalé une erreur »)) ;
    

## Gestion des erreurs de sérialisation

Lors de l'interprétation de vos arguments, `try` / `catch` blocs aident à éliminer d'entrée incorrecte. Cette tendance apparaît dans le code c# Cordova :

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
            // ... continue on to do our work
        }
    

## Plugin XML

Ce qui suit montre comment utiliser le `plugin.xml` fichier pour spécifier les fichiers source d'un plugin sur la plate-forme Windows Phone. Voir Application Plugins pour une vue d'ensemble et la spécification de Plugin pour plus d'informations sur les options disponibles.

*   Le `<source-file>` élément définit toutes les ressources de plugin, comme *.cs*, *.xaml*, *. xaml.cs*et les fichiers *.dll* et actifs de l'image.

*   Le `<config-file>` élément définit les éléments d'injecter dans un fichier de configuration. Cet exemple ajoute un plugin à la plate-forme `config.xml` fichier :
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    Cet exemple ajoute la possibilité de contacts à la `WMAppManifest.xml` fichier :
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## Débogage des Plugins

Débogueur de Visual Studio permet de déboguer le composant c# d'un plugin. Vous pouvez définir un point d'arrêt à une des méthodes exposées par votre classe.

JavaScript est plus difficile pour le débogage sur Windows Phone. Vous devez utiliser `console.log` pour état de plugin de sortie, ou pour informer vous-même des erreurs.

## Pièges communs

*   Veillez à ne pas passer des arguments de JavaScript vers le côté natif qui sont difficiles à désérialiser en JSON. La plupart des plates-formes de périphérique s'attendre l'argument passé à `cordova.exec()` soit un tableau, comme les suivants :
    
        Cordova.exec (win, fail, « ServiceName », « MethodName », [« il s'agit d'une chaîne », 54, {literal: « trouble »}]) ;
        
    
    Ceci peut résulter en une valeur de chaîne trop complexe pour c# à décoder :
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    Au lieu de cela, envisagez la conversion de *tous les* paramètres en chaînes avant d'appeler `exec()` et le décodage chacune séparément :
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   Il est généralement préférable de vérifier les paramètres JavaScript avant d'appeler `exec()` . Ce faisant vous permet réutiliser plus de code et tirez les fonctionnalités inutiles entre le plugin de diverses implémentations natives.