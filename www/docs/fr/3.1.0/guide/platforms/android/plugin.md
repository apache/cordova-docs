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

title: Plugins Android
---

# Plugins Android

Écriture d'un plugin nécessite une compréhension de l'architecture de Cordova-Android. Cordova-Android se compose d'une WebView Android avec crochets attachés à elle. Ces plugins sont représentés comme des mappages de classe dans le `config.xml` fichier.

Un plugin est composé d'au moins une classe Java qui étend la `CordovaPlugin` classe. Un plugin doit substituer un de le `execute` méthodes de `CordovaPlugin` . Meilleure pratique, le plugin devrait gérer `[pause](../../../cordova/events/events.pause.html)` et `[resume](../../../cordova/events/events.resume.html)` des événements et tout message transitant entre les plugins. Plugins avec longues requêtes, activité de fond telles que la lecture du média, auditeurs ou état interne doit mettre en œuvre la `onReset()` méthode aussi bien. Il exécute quand le `WebView` navigue vers une nouvelle page ou des actualisations, qui recharge le JavaScript.

## Classe plugin cartographie

La partie JavaScript d'un plugin utilise toujours la `cordova.exec` méthode comme suit :

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Cela marshale une demande de la WebView vers le côté natif Android, plus ou moins bouillante vers le bas pour appeler le `action` méthode sur la `service` classe, avec les arguments passés à la `args` tableau.

Si vous distribuez votre plugin sous fichier Java ou un bocal propre, le plugin doit être ajouté à la `config.xml` fichier dans votre application Android-Cordova `res/xml/` répertoire.

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

Le nom du service doit correspondre à celui utilisé dans le code JavaScript `exec` appel et la valeur est le nom complet de classes Java, y compris l'espace de noms. Dans le cas contraire le plugin peut compiler mais toujours être inaccessible de Cordova.

## Écriture d'un Plugin Java Android

JavaScript déclenche une demande de plugin pour le côté natif. Le plugin Java Android est mappé correctement le `config.xml` fichier. Jusqu'à ce que la classe Android Plugin Java ressemble ?

Ce qui obtient expédié vers le plugin via du JavaScript `exec` fonction passée dans la classe Plugin `execute` méthode. La plupart `execute` implémentations ressemblent à ceci :

    @Override public boolean exécuter (cordes, args JSONArray, CallbackContext callbackContext) lève JSONException {si (« beep".equals(action)) {this.beep(args.getLong(0)) ;
            callbackContext.success() ;
            return true ;
        } return false ;  / / Retour de résultats faussement une erreur « MethodNotFound ».
    }
    

On compare la valeur de la `action` paramètre et l'envoi de la demande hors méthode (privé) dans la classe, éventuellement en passant certains paramètres à la méthode.

Quand interception d'exceptions et de retourner des erreurs, il est important pour plus de clarté que des erreurs retournées aux noms d'exception du Java JavaScript match autant que possibles.

### Filetage

JavaScript dans le mode Web fait *pas* exécutés sur le thread d'interface utilisateur. Il s'exécute sur le thread de WebCore. La `execute` méthode s'exécute également sur le thread de WebCore.

Si vous avez besoin d'interagir avec l'interface utilisateur, vous devez utiliser ce qui suit :

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            final long duration = args.getLong(0);
            cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    ...
                    callbackContext.success(); // Thread-safe.
                }
            });
            return true;
        }
        return false;
    }
    

Si vous n'avez pas besoin d'exécuter sur le thread d'interface utilisateur, mais ne voulez pas bloquer le thread WebCore :

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            final long duration = args.getLong(0);
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    ...
                    callbackContext.success(); // Thread-safe.
                }
            });
            return true;
        }
        return false;
    }
    

### Echo Android Plugin exemple

Ajoutez la ligne suivante à notre `config.xml` fichier :

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

Puis ajouter le fichier suivant à `src/org/apache/cordova/plugin/Echo.java` à l'intérieur de notre application de Cordova-Android :

    package org.apache.cordova.plugin;
    
    import org.apache.cordova.CordovaPlugin;
    import org.apache.cordova.CallbackContext;
    
    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;
    
    /**
     * This class echoes a string called from JavaScript.
     */
    public class Echo extends CordovaPlugin {
    
        @Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            if (action.equals("echo")) {
                String message = args.getString(0);
                this.echo(message, callbackContext);
                return true;
            }
            return false;
        }
    
        private void echo(String message, CallbackContext callbackContext) {
            if (message != null && message.length() > 0) {
                callbackContext.success(message);
            } else {
                callbackContext.error("Expected one non-empty string argument.");
            }
        }
    }
    

Nous allons jeter un coup d'oeil sur le code. Le nécessaire `imports` arrivent en tête. Notre classe s'étend de `CordovaPlugin` . Nous substituer la méthode execute() afin de recevoir des messages de exec(). Notre méthode Compare tout d'abord contre `action` : ce plugin ne prend en charge une seule action, le `echo` action. Tout autre retour d'action `false` , qui se traduit par une erreur de type `INVALID_ACTION` , qui se traduit par une invocation de rappel d'erreur du côté de JavaScript. Ensuite, nous attraper la chaîne echo à l'aide du `getString` méthode sur notre `args` , il dit que nous voulons obtenir le paramètre 0E dans le tableau de paramètres. Nous faisons un peu de paramètre de contrôle : Veillez à ce que ce n'est pas `null` et assurez-vous qu'il n'est pas une chaîne de longueur nulle. Si c'est le cas, nous appelons `callbackContext.error()` (qui, maintenant, vous devriez savoir appelle le rappel de l'erreur). Si toutes ces vérifications passent, nous appelons `callbackContext.success()` , puis transmettez la `message` nous avons reçu en tant que paramètre de chaîne. Enfin, cela se traduit en un appel de rappel de réussite du côté de JavaScript. Il passe également le `message` paramètre comme paramètre dans la fonction de rappel JavaScript succès.

## Débogage des Plugins

Eclipse peut être utilisé pour déboguer un projet Android et les plugins peuvent être débogués si la source de Java est incluse dans le projet. Seule la dernière version de l'Android Developer Tools est connue pour permettre l'attachement de code source avec dépendances JAR, donc ce n'est pas entièrement supporté en ce moment.

## Pièges communs

*   Plugins ont accès à un `CordovaInterface` objet. Cet objet a accès à l'Android `Activity` qui exécute l'application. C'est la `Context` requise pour lancer un nouveau Android `Intent` . Le `CordovaInterface` permet aux plugins démarrer une `Activity` pour un résultat et configurer le plugin de rappel pour quand le `Intent` revient à l'application. C'est important, depuis le `Intent` s système est comment Android communique entre les processus.

*   Plugins n'ont pas un accès direct à la `Context` qu'ils ont dans le passé. L'héritage `ctx` membre est désapprouvé et sera supprimé six mois après la version 2.0 est sortie. Tous `ctx` il existe des méthodes sur le `Context` , afin que les deux `getContext()` et `getActivity()` sont capables de retourner l'objet approprié est requis.

## Utilisation de la Source

Une des meilleures façons de vous préparer à écrire votre propre plugin est à [regarder par-dessus les plugins existants][1].

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

Vous devriez également lire à travers les commentaires à [CordovaPlugin.java][2].

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java