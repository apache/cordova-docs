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

Ce guide montre comment développer un plugin Echo sur BlackBerry. Le Guide de développement de Plugin donne un vaste aperçu avec laquelle vous devez déjà être familier, et ce guide reprend où elle laisse au large. En outre, Télécharger le [référentiel de Cordova BlackBerry][1].

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

Le `Cordova-BlackBerry` projet permet de déployer sur les périphériques BlackBerry comme le Torch, Bold et Playbook. Le Playbook utilise un base que les autres appareils portables BlackBerry, pour lesquels vous devez dupliquer vos efforts de développement de code différent. Ce guide se concentre sur les appareils de poche au lieu des comprimés. (Dans l'avenir, ce guide devrait couvrir les deux plates-formes.)

Le plugin Echo renvoie essentiellement quelque message un utilisateur fournit à la `window.echo` fonction :

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## Modifier plugins.xml

De votre projet `www/plugins.xml` répertoire contient toutes les références nécessaires pour les plugins de votre projet de Cordova. Ajouter une référence supplémentaire alors que quand `cordova.exec` est appelé, Cordova sait comment mapper le `Echo` argument de `cordova.exec` à la `Echo` classe que nous voulons écrire en mode natif :

    <feature name="Echo">
        <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
    </feature>
    

## Ajout de Echo.java

Si vous remarquez la structure de l'attribut value, vous verrez une trajectoire donnée qui mène vers le plugin Echo. Dans le répertoire racine de la repo de Cordova BlackBerry WebWorks, recherchez un répertoire appelé `framework` . Ce répertoire contient tout le code source qui s'exécute en mode natif sur le BlackBerry. Naviguez jusqu'à `framework/ext/src/org/apache/cordova` . À ce stade, vous verrez tous les répertoires de plugin, à l'intérieur de laquelle est le code source. Ajouter alors l'écho de répertoire à `framework/ext/src/org/apache/cordova/echo` et créez un fichier appelé `Echo.java` à`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## Écriture Echo.java

L'idée de base derrière l'écriture d'un plugin consiste à créer une classe qui étend la classe de Plugin et de disposer d'une méthode appelée `execute` pour renvoyer un `PluginResult` classe. Tout appel à `cordova.exec` passe à l'action à exécuter au sein de la classe, ainsi que les arguments. Dans ce cas, « echo » est l'action que nous voulons exécuter au sein de la classe « Echo » et [str] sont les arguments que nous passons dans.

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
    

Donc, si nous regardons le code ci-dessus, nous pouvons voir que dans la méthode execute, nous recherchons tout d'abord ce que des actions sont à venir dans. Le plugin Echo n'a qu'une seule action, `echo` , de sorte que nous vérifierons uniquement pour cela. Si notre plugin avait plus d'actions, c'est simplement une question d'ajout des tests conditionnels plus pour vérifier ces actions.

Nous allons ensuite saisir le message en provenance d'arguments qui est fourni par le paramètre args. Nous pouvons saisir le premier argument en faisant simplement`String theMsg = args.getString(0);`.

Nous ferons une vérification d'erreur et si le message semble correct, on instanciera un nouveau PluginResult un État ok : `PluginResult.Status.OK` et renvoyez le message : `theMsg` . Après cela, nous retourner le résultat pour être repassé à JavaScript pour être tiré dans le rappel de succès. Si quelque chose tombe en panne, nous pouvons renvoyer diverses exceptions statut comme `PluginResult.Status.ERROR` , `PluginResult.Status.JSON_EXCEPTION` , ou `PluginResult.Status.INVALID_ACTION` . Lorsqu'il est passé de retour, ces types de résultats de feu le rappel d'échec en JavaScript.

## Mise à jour le fichier .jar dans le répertoire www de votre projet

La plus-value `Echo.java` doit être mis à jour dans votre projet. Pour construire le `.jar` fichier, naviguez jusqu'au répertoire racine du BlackBerry WebWorks repo et exécutez le `ant` commande :

    ant update -Dproject.path="~/path_to_my_project"
    

Cela génère un nouveau `.jar` du fichier dans le `build/ext` répertoire. Copie le `build/ext/cordova.jar` fichier dans votre `project/www/ext` répertoire.

Si tout va bien, qui vous permet d'utiliser le plugin Echo dans BlackBerry.