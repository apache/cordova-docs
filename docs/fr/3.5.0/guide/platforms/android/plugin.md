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

# Plugins Android

Cette section fournit des détails pour savoir comment implémenter le code du plugin native sur la plateforme Android. Avant de lire ceci, voir Application Plugins pour avoir un aperçu de la structure du plugin et son interface commune de JavaScript. Cette section continue de démontrer l'échantillon *écho* plugin qui communique de la webview Cordova à la plate-forme native et le dos. Pour un autre exemple, voir aussi les commentaires à [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Plugins Android sont basés sur Android-Cordova, qui consiste en une WebView Android avec crochets attachés à elle. Plugins sont représentés comme des mappages de classe dans le `config.xml` fichier. Un plugin est composé d'au moins une classe Java qui étend la `CordovaPlugin` classe, de la substitution de l'un de ses `execute` méthodes. Aussi pratique, le plugin devrait également réaliser au mieux `pause` et `resume` des événements, ainsi que tout message transitant entre les plugins. Plugins avec longues requêtes, activité de fond telles que la lecture du média, auditeurs ou état interne doit mettre en œuvre la `onReset()` méthode aussi bien. Il exécute quand le `WebView` navigue vers une nouvelle page ou des actualisations, qui recharge le JavaScript.

## Classe plugin cartographie

Interface JavaScript du plugin utilise la `cordova.exec` méthode comme suit :

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

Cela marshale une demande de la WebView vers le côté natif Android, effectivement l'appel la `action` méthode sur la `service` classe, avec des arguments supplémentaires passés dans le `args` tableau.

Si vous distribuez un plugin sous Java fichier ou un fichier *jar* de ses propres, le plugin doit être spécifié dans votre application Android-Cordova `res/xml/config.xml` fichier. Voir Application Plugins pour plus d'informations sur la façon d'utiliser le `plugin.xml` fichier à injecter ce `feature` élément :

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

Le nom de service correspond à celle utilisée dans le code JavaScript `exec` appeler. La valeur est identificateur d'espace de noms complet de la classe Java. Dans le cas contraire, le plugin peut compiler mais toujours être indisponible à Cordova.

## Durée de vie et initialisation du Plugin

Une seule instance d'un objet plugin est créée pour la vie de chaque `WebView` . Plugins ne sont pas instanciés jusqu'à ce qu'ils sont tout d'abord référencées par un appel de JavaScript, à moins que `<param>` avec un `onload` `name` attribut a la valeur `"true"` dans `config.xml` . Par exemple :

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Plugins devraient utiliser la `initialize` méthode pour leur logique de démarrage.

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Écriture d'un Plugin Java Android

Une demande de plugin pour le côté natif déclenche un appel JavaScript et le plugin Java correspondant est mappé correctement en le `config.xml` fichier, mais en quoi le dernier Android Plugin Java classe ressemble ? Tout ce qui est dépêché sur le plugin avec du JavaScript `exec` fonction est passée dans la classe plugin `execute` méthode. La plupart `execute` implémentations ressemblent à ceci :

        @Override public boolean exécuter (cordes, args JSONArray, CallbackContext callbackContext) lève JSONException {si (« beep".equals(action)) {this.beep(args.getLong(0)) ;
                callbackContext.success() ;
                retourner la valeur true ;
            } return false ;  / / Retour des résultats faussement une erreur « MethodNotFound ».
        }
    

Le JavaScript `exec` de fonction `action` paramètre correspond à une méthode de classe privée d'expédier avec les paramètres facultatifs.

Quand interception d'exceptions et de retourner des erreurs, il est important pour plus de clarté que des erreurs retournées aux noms d'exception du Java JavaScript match autant que possibles.

## Filetage

Le plugin JavaScript est *pas* exécuté dans le thread principal de le `WebView` interface ; au lieu de cela, il s'exécute le `WebCore` fil, comme le fait la `execute` méthode. Si vous avez besoin d'interagir avec l'interface utilisateur, vous devez utiliser la variation suivante :

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
    

Utiliser ce qui suit si vous n'avez pas besoin d'exécuter sur l'interface principale de thread, mais ne voulez pas bloquer la `WebCore` visser soit :

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
    

## Echo Android Plugin exemple

Pour trouver *l'écho de l'interface JavaScript décrite dans les Plugins de l'Application* , utilisez le `plugin.xml` pour injecter un `feature` spécification à de la plate-forme locale `config.xml` fichier :

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

Puis ajoutez le code suivant à la `src/org/apache/cordova/plugin/Echo.java` fichier :

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
    

Les importations nécessaires en haut du fichier étend la classe de `CordovaPlugin` , dont `execute()` méthode, elle se substitue pour recevoir les messages de `exec()` . La `execute()` méthode teste tout d'abord la valeur de `action` , qui dans ce cas il est un seul valide `echo` valeur. Tout autre retour d'action `false` et se traduit par une `INVALID_ACTION` erreur, qui se traduit par un rappel de l'erreur invoqué sur le côté de JavaScript.

Ensuite, la méthode récupère la chaîne echo à l'aide du `args` de l'objet `getString` méthode, en spécifiant le premier paramètre passé à la méthode. Après que la valeur est passée à un privé `echo` méthode, il est paramètre-vérifié pour s'assurer que ce n'est pas `null` ou une chaîne vide, auquel cas `callbackContext.error()` appelle rappel d'erreur de JavaScript. Si les divers contrôles passent, la `callbackContext.success()` passe l'original `message` chaîne à rappel réussi de JavaScript comme paramètre.

## Intégration Android

Android propose un `Intent` système qui permet aux processus de communiquer entre eux. Plugins ont accès à un `CordovaInterface` objet, qui peut accéder à l'Android `Activity` qui exécute l'application. C'est la `Context` requise pour lancer un nouveau Android `Intent` . Le `CordovaInterface` permet aux plugins démarrer une `Activity` pour un résultat et configurer le plugin de rappel pour quand le `Intent` retourne à l'application.

À partir de 2.0 de Cordova, Plugins peuvent accéder n'est plus directement le `Context` et l'héritage `ctx` membre est obsolète. Tous les `ctx` méthodes existent sur le `Context` , afin que les deux `getContext()` et `getActivity()` peut retourner l'objet requis.

## Débogage des Plugins Android

Eclipse permet de déboguer des plugins comme source de Java inclus dans le projet. Seulement la dernière version de l'Android Developer Tools vous permet d'attacher le code source à dépendances *JAR* , alors cette fonction n'est pas encore entièrement supportée.