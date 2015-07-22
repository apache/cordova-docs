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

title: Plugins Windows
---

# Plugins Windows

Cette section fournit des détails pour savoir comment mettre en place un plugin pour utilisation dans une application Windows Store. Avant de lire ceci, voir Application Plugins pour avoir un aperçu de la structure du plugin et son interface commune de JavaScript. Cette section continue de démontrer l'échantillon *écho* plugin qui communique de la webview Cordova à la plate-forme native et le dos.

Il est important de noter que Windows prend en charge le développement directement en Javascript, qui signifie développer les portions « indigènes » dans des cas particuliers uniquement requis dans.

## Créer un Plugin de Windows en JavaScript

Ces instructions consistent à créer un plugin JavaScript pur. Cette compréhension est essentielle pour comprendre comment ajouter les bits natif/managé.

Windows Cordova plugins sont essentiellement un wrapper mince autour WinJS existants fournis des fonctions, mais en supposant que vous souhaitez définir votre interface commune de JS pour plusieurs périphériques, vous aurez généralement 1 fichier JS qui fournit l'API.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## Inside Cordova exec sous Windows

La fonction cordova.exec est définie différemment sur chaque plate-forme, c'est parce que chaque plate-forme dispose de son propre mode de communication entre le code js d'application et le code encapsuleur natif. Mais dans le cas de Windows, il n'y a aucun emballage natif, donc l'appel exec est là pour assurer l'uniformité. Vous pourriez faire votre travail que le plugin de js directement dans EchoPlugin.echo, quelque chose comme :

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

Cela devrait/pourrait travailler très bien, cependant, cela signifie que vous aurez besoin des versions différentes de echoPlugin.js pour différentes plates-formes, et éventuellement, vous pourriez avoir des problèmes avec les incohérences dans vos implémentations. Comme une pratique exemplaire, nous avons décidé d'imiter une API native à l'intérieur de la cordova.exec sur Windows, alors nous pourrions exécuter le même code JS et sans devoir réécrire pour la plateforme et aussi profiter de n'importe quel paramètre de vérification, ou tout autre code commun fourni par les développeurs qui travaillent sur d'autres plateformes.

## Le proxy d'exec de Cordova

Sous Windows, cordova fournit un proxy qui vous permet d'enregistrer un objet qui gère tous les appels de cordova.exec à une API.

Par exemple si vous voulez fournir l'implémentation de l'API de l'accéléromètre, procédez comme suit :

cordova.commandProxy.add (« Accéléromètre », {début : function() {/ / votre code ici...} / /... et le reste de l'API ici}) ;

Donc dans notre cas, nous supposerons que le code dans echoplugin.js gère multi-plateforme pertinentes JavaScript et on peut simplement écrire un proxy pour Windows

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

La définition de plugin

Si nous voulons que les utilisateurs de notre plugin pour pouvoir installer facilement notre plugin, nous aurons besoin de la définir selon comment PlugMan définit les plugins. Plus sur cela dans le [Plugin Spec][1]

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Cela nous donne un travail Windows JavaScript plugin qui utilise un fichier commun (echoplugin.js) et utilise un proxy pour fournir la partie seule de Windows de l'application (echopluginProxy.js). Alors, comment ajoutons-nous natif/managé à cela ? Eh bien nous allons commencer les mêmes, la seule différence sera ce que nous faisons à l'intérieur dans les méthodes d'echopluginProxy.

# Comment WinJS accède à natif/managé

Dans Windows, WinJS apps créés sont capables d'interagir avec le code natif, ce Interop est disponible pour les composants d'exécution de Windows. Les détails sont nombreux, et ce guide ne couvre que les bases. Microsoft fournit beaucoup plus d'informations [ici][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

Lorsque vous créez votre composant d'exécution de Windows, n'importe quelle classe qui est définie comme 'public ref class sealed' est considéré comme une « classe activable » et est appelable à partir de JavaScript.

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

Maintenant, afin que nous puissions faire appel au code natif, nous utilisons l'espace de noms, classname et lowerCamelCase la méthode que nous demandons.

res var = EchoRuntimeComponent.EchoPluginRT.echo("boom") ; Ce déplacement à notre fichier de echopluginProxy.js, nous obtenons ceci :

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

Et voilà, nous avons un bout à l'autre C++ soutenu js callable plugin pour utilisation dans Apache Cordova Windows !

# Quelques notes techniques :

*   le rappel est typiquement async, appelant le rappel tout de suite ne devrait probablement pas par l'appelant. Dans la pratique, si l'appel n'est pas asynchrone, vous devez au moins utiliser un délai d'attente javascript pour forcer le rappel à appeler async.
*   Activable par classes peuvent faire toutes sortes de craintes, comme événement d'expédition, rappels asynchrones, en passant vos propres types d'objets, tableaux, collections, méthodes surchargées et bien plus encore. Je vous recommande de que faire vos devoirs.
*   Si vous vous en tenez à commune 8.0 de Windows Phone et Windows SDK API appels, vous serez en mesure d'utiliser le même composant runtime (bits natifs ou managés) dans un plugin Windows Phone 8.0 Apache Cordova. ~ Restez branchés pour ce poste.

# Définir votre plugin

Maintenant que nous avons un plugin de travail, nous avons besoin de revenir sur la définition de plugin à partir plus tôt afin que nous puissions le publier. Nous pouvons maintenant ajouter le composant d'exécution comme un cadre. Notez que le type de sortie d'un WindowsRuntimeComponent peut être .winmd ou .dll

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Ça y est, vous avez maintenant un plugin distribuable que vous pouvez partager avec le monde ! Une chose à noter, l'ajout de cadres au projet Windows Cordova a été ajouté seulement récemment donc vous aurez besoin pour s'assurer que votre cordova outillage courant. Cordova-cli et cordova-plugman les deux supportent l'ajout suppression des plugins soutenue par native.

> cordova plugin add com.risingj.echoplugin

ou

> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug