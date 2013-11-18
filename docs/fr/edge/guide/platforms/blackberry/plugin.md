---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Plugins de blackBerry

Cette section fournit des détails pour savoir comment implémenter le code du plugin native sur la plateforme BlackBerry. Avant de lire ceci, voir Application Plugins pour avoir un aperçu de la structure du plugin et son interface commune de JavaScript. Cette section continue de démontrer l'échantillon *écho* plugin qui communique de la webview Cordova à la plate-forme native et le dos.

En outre, Télécharger le [référentiel Cordova BlackBerry][1]. Le `Cordova-BlackBerry` projet permet de déployer sur les périphériques BlackBerry comme le Torch, Bold et Playbook. Le Playbook utilise un base que les autres appareils portables BlackBerry, pour lesquelles vous devez dupliquer vos efforts de développement de code différent. Ce guide se concentre sur les appareils de poche et non comprimés.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Modifier plugins.xml

Le `Echo` plugin renvoie quelque message un utilisateur envoie avec le `window.echo` fonction du côté de JavaScript :

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Le projet `www/plugins.xml` fichier contient toutes les références nécessaires aux plugins du projet Cordova. Ajouter une référence supplémentaire alors que quand `cordova.exec` est appelé, Cordova sait comment mapper la `Echo` l'argument de l'indigène `Echo` classe :

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Le fichier Echo.java

La `feature` de la spécification `value` attribut fait référence à un identificateur de domaine inverse-style. Cela correspond à un chemin d'accès dans du repo Cordova BlackBerry WebWorks `framework/ext/src` répertoire. Ajouter un `framework/ext/src/org/apache/cordova/echo` répertoire et ajouter un `Echo.java` fichier.

Le `Echo.java` a besoin de définir une classe qui étend la `Plugin` classe. Il doit également implémenter une `execute` méthode qui retourne un `PluginResult` classe. Tout appel à `cordova.exec` passe à l'action au sein de la classe pour exécuter, ainsi que les arguments. Dans ce cas, la `Echo` de la classe `echo` méthode est l'action, et `[str]` est un argument supplémentaire pour passer à la méthode.

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

Dans le code ci-dessus, la `execute` méthode apporte tout d'abord dans une action. Dans ce cas, il ya un seul valide `echo` action, donc il vérifie simplement pour cette valeur.

Le message entrant, passé en tant que `[str]` de JavaScript est disponible à le `Echo` de classe comme un `args` tableau. Dans ce cas, il n'y a qu'un seul argument, accessible à l'aide d'un index de base zéro array :

        String theMsg = args.getString(0);
    

Après divers vérification d'erreur sur la valeur du message, la méthode instancie un nouveau `PluginResult` avec un `OK` État et retourne le message. Cette valeur, à son tour, est passée comme un argument au rappel JavaScript succès. En cas d'erreur, les codes d'état différents sont renvoyés en rappel d'erreur de JavaScript.

## Mise à jour le fichier .jar dans le www du projet répertoire

La plus-value `Echo.java` doit être mis à jour dans votre projet. Pour construire le `.jar` fichier, naviguez jusqu'au répertoire racine du BlackBerry WebWorks repo et exécutez le `ant` commande :

        ant update -Dproject.path="~/path_to_my_project"
    

Cela génère un nouveau `.jar` du fichier dans le `build/ext` répertoire. Copie le `build/ext/cordova.jar` fichier dans le `project/www/ext` répertoire.

Si tout va bien, qui vous permet d'utiliser le `Echo` plugin dans BlackBerry.