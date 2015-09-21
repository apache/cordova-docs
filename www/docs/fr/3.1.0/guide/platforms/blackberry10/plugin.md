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

title: BlackBerry 10 Plugins
---

# BlackBerry 10 Plugins

Il s'agit d'une continuation du Plugin Development Guide de Cordova. Une fois que vous avez examiné ce contenu, maintenant nous allons voir les choses, que nous devons avoir le plugin Echo pour la plateforme BlackBerry 10. Rappel que le plugin Echo renvoie fondamentalement ce que string un utilisateur fournit à la `window.echo` fonction :

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Un plugin de BlackBerry 10 natif pour Cordova contient du code JavaScript et peut également contenir du code natif. Le plugin Echo illustre comment appeler des fonctions natives de JavaScript. Le natif et le code JavaScript communiquent entre eux à travers un cadre fourni par JNEXT. Chaque plugin doit également inclure un `plugin.xml` fichier.

## Création de la partie native de votre plugin

Pour créer la partie native de votre plugin, ouvrir l'IDE de NDK 10 BlackBerry et sélectionnez fichier > New > BlackBerry projet > Extension Native > BlackBerry WebWorks. Entrez votre nom de projet souhaité / emplacement, puis cliquez sur Terminer.

Le projet créé par l'IDE contient des exemples de code d'un plugin de mémoire. Vous pouvez remplacer ou modifier ces fichiers pour inclure vos propres fonctionnalités.

*   `*name*_js.hpp`: En-tête C++ pour le code JNEXT.

*   `*name*_js.cpp`: Code C++ de JNEXT.

L'interface native pour l'extension JNEXT est visible dans le fichier d'en-tête plugin dans le répertoire public de votre projet. Il contient également des constantes et des fonctions utilitaires qui peuvent être utilisées dans votre code natif. Votre plugin doit être dérivé de JSExt qui est définie dans le plugin.h. Autrement dit, vous devez implémenter la classe suivante :

    Class JSExt {public : virtual ~JSExt() {} ;
        virtual string InvokeMethod (const string & strCommand) = 0 ;
        virtual bool CanDelete (vide) = 0 ;
    privé : std::string m_id ;
    };
    

Par conséquent, votre extension devrait inclure le fichier d'en-tête plugin.h. Dans l'exemple de Echo, vous utilisez JSExt comme suit dans le fichier echo_js.hpp :

    #include ".../ public/plugin.h « #include <string> #ifndef ECHO_JS_H_ #define ECHO_JS_H_ classe Echo : public JSExt {public : Echo explicite (const std::string & id) ;
        Virtual ~ Echo() ;
        Virtual std::string InvokeMethod (const std::string & commande) ;
        virtual bool CanDelete() ;
    privé : std::string m_id ;
    };
    
    #endif / / ECHO_JS_H_
    

Le `m_id` est un attribut qui contient l'id JNEXT pour cet objet. L'id est passé à la classe en tant qu'argument au constructeur. Il est nécessaire de déclencher des événements côté JavaScript du code natif. La méthode CanDelete est utilisée par JNEXT pour déterminer si votre objet natif peut être supprimé. La fonction InvokeMethod est appelée en conséquence d'une demande de JavaScript pour appeler une méthode de cet objet particulier. Le seul argument de cette fonction est une chaîne passée de JavaScript que cette méthode devrait analyser afin de déterminer quelle méthode de l'objet natif doit être exécutée. Maintenant, nous implémentons ces fonctions dans echo_js.cpp. Pour l'exemple de l'écho, nous implémenter fonction InvokeMethod comme suit :

    String Echo::InvokeMethod (const string & command) {commande //parse et args de string int index = command.find_first_of("") ;
        String strCommand = command.substr (0, indice) ;
        String strValue = command.substr (index + 1, command.length()) ;
    
        / / Déterminer quelle fonction doit être exécutée si (strCommand == « echo ») {return strValue ;
        } else {return "Unsupported Method" ;
        }
    }
    

Votre plugin native doit également implémenter les fonctions de rappel suivant :

*   `extern char * onGetObjList (void) ;`

*   `extern JSExt * onCreateObject (const string & strClassName, const string & strObjId) ;`

Le `onGetObjList` fonction retourne une liste séparée par des virgules de classes prises en charge par JNEXT. JNEXT utilise cette fonction pour déterminer le jeu de classes JNEXT capable d'instancier. Dans notre plugin Echo, nous avons ce qui suit dans `echo_js.cpp` :

    char * onGetObjList() {public static char nom [] = "Echo" ;
        retourner le nom ;
    }
    

Le `onCreateObject` fonction prend deux paramètres. Le premier paramètre est le nom de la classe a demandé à être créé à partir du côté de JavaScript. Les noms valides sont celles qui sont retournées dans `onGetObjList` . Le second paramètre est l'id de l'objet unique pour la classe. Cette méthode retourne un pointeur vers l'objet plugin créé. Dans notre plugin Echo, nous avons ce qui suit dans `echo_js.cpp` :

    JSExt * onCreateObject (const string & className, const string & id) {si (className == « Echo ») {return new Echo(id) ;
        } return NULL ;
    }
    

## Création de la partie de JavaScript de votre plugin

La partie JavaScript de votre plugin doit contenir les fichiers suivants :

*   `client.js`: Ceci est considéré comme du côté client et contient l'API qu'une application de Cordova peut appeler. L'API de `client.js` appels effectue des appels à `index.js` . L'API de `client.js` relie également les fonctions de rappel pour les événements qui déclenchent les rappels.

*   `index.js`: Cordoue charge `index.js` et le rend accessible à travers le pont de cordova.exec. Le `client.js` fichier effectue des appels à l'API dans le `index.js` fichier, qui fait ensuite appel au JNEXT pour communiquer avec le côté natif.

Le côté client et serveur ( `client.js` et `index.js` ) interagit à travers le `Cordova.exec` fonction. Donc, en `client.js` vous appeler la `exec` fonctionner et fournir les arguments nécessaires. Dans le plugin Echo, nous avons ce qui suit la `client.js` fichier :

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

Maintenant, `index.js` interagit avec le côté natif à l'aide de JNEXT. Si vous attachez une fonction constructeur nommée Echo à JNEXT. Au sein du constructeur, vous effectuez les opérations clées suivantes à l'aide de la fonction init :

*   Spécifiez le module requis exporté par le côté natif. Le nom du module requis doit correspondre au nom d'un fichier de bibliothèque partagée (fichier .so).

`JNEXT.require("libecho")`

*   Créez un objet en utilisant un module acquis et enregistrer l'ID retourné par l'appel. Self.m_Id = JNEXT.createObject ("libecho.Echo") ; Lorsque votre application appelle la fonction echo `client.js` , qu'appel à son tour appelle la fonction echo `index.js` , où l'objet PluginResult renvoie une réponse (données) à `client.js` . Étant donné que l'argument args passé dans les fonctions a été converti par JSON.stringfy() et codé comme un URI, vous devez appeler ce qui suit :

`données = JSON.parse(decodeURIComponent(args.data)) ;`

Vous pouvez maintenant envoyer les données en retour. Nous allons tout mettre ensemble :

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## Architecture du plugin

Vous pouvez placer les artefacts du plugin, qui comprend le `plugin.xml` fichier, les fichiers source (JavaScript, C++) et les fichiers binaires ( `.so` ) au sein de toute structure de répertoire, aussi longtemps que vous spécifiez correctement les emplacements des fichiers dans le `plugin.xml` fichier. Une structure typique ressemble à ceci :

***your\_project\_directory*** (> plugin.xml)

*   **www** (> client.js)
*   **SRC** 
    *   **blackberry10** (> index.js, **native** > *.cpp, *.hpp)
    *   **dispositif** (>*fichier binaire* * .so)
    *   **simulateur** (>*fichier binaire* * .so)

(La liste montre la relation hiérarchique entre les répertoires de niveau supérieur. La parenthèse montre le contenu d'un répertoire donné. Tous les noms de répertoires apparaissent en gras. Les noms de fichier sont précédés par le `>` signe.)

## Contenu de la `plugin.xml` fichier

Le `plugin.xml` fichier contient l'espace de noms de l'extension et autres métadonnées. Définir l'espace de noms et spécifier les autres métadonnées pour le plugin Echo comme suit :

    < plugin xmlns="http://www.phonegap.com/ns/plugins/1.0" id="org.apache.cordova.blackberry.echo" version = "1.0.0" >< js-module src="www/client.js" >< fusionne cible = "navigator" / >< / js-module >< platform name = "blackberry10" >< fichier source src="src/blackberry10/index.js" / >< lib-fichier src="src/blackberry10/native/device/libecho.so" arch = "dispositif" / >< lib-fichier src="src/blackberry10/native/simulator/libecho.so" arch = "simulateur" / >< target="www/config.xml-config-file" parent = "/ widget" >< name="org.apache.cordova.blackberry.echo en vedette" value="org.apache.cordova.blackberry.echo" / >< /-config-file >< /plateforme >< / plugin >