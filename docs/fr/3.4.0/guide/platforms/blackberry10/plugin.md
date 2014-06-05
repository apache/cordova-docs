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

# BlackBerry 10 Plugins

Cette section fournit des détails pour savoir comment implémenter le code du plugin native sur la plate-forme BlackBerry 10. Avant de lire ceci, voir Application Plugins pour avoir un aperçu de la structure du plugin et son interface commune de JavaScript. Cette section continue de démontrer l'échantillon *écho* plugin qui communique de la webview Cordova à la plate-forme native et le dos.

Le plugin Echo renvoie fondamentalement quelque chaîne la `window.echo` fonction envoie de JavaScript :

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Un plugin de Cordova pour BlackBerry 10 contient JavaScript et code natif, qui communiquent entre eux à travers un cadre fourni par JNEXT. Chaque plugin doit également inclure un `plugin.xml` fichier.

## Création de la classe Native

Pour créer la partie native de votre plugin, ouvrir l'IDE de NDK 10 BlackBerry et sélectionnez **fichier → nouveau → BlackBerry projet → Extension Native → BlackBerry 10**. Entrez le nom du projet souhaité et l'emplacement, puis appuyez sur **Terminer**.

Le projet créé par l'IDE contient des exemples de code d'un plugin de mémoire. Vous pouvez remplacer ou modifier ces fichiers pour implémenter vos propres fonctionnalités :

*   `*name*_js.hpp`: En-tête C++ pour le code JNEXT.

*   `*name*_js.cpp`: Code C++ de JNEXT.

L'interface native pour l'extension JNEXT est visible dans le fichier d'en-tête plugin situé dans le répertoire du projet public. Il dispose également des constantes et des fonctions utilitaires disponibles dans le code natif. Le plugin doit être dérivé de `JSExt` , qui est défini dans `plugin.h` . Autrement dit, vous devez implémenter la classe suivante :

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

L'extension devrait inclure la `plugin.h` fichier d'en-tête. Dans le `Echo` exemple, vous utilisez `JSExt` comme suit dans le `echo_js.hpp` fichier :

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

Le `m_id` attribut contient le `JNEXT` id pour l'objet, qui est passée à la classe en tant qu'argument au constructeur. Il est nécessaire pour le côté natif pour déclencher des événements du côté du JavaScript. La `CanDelete` méthode détermine si l'objet natif peut être supprimé. Le `InvokeMethod` fonction est appelée en conséquence d'une demande de JavaScript pour appeler une méthode de cet objet particulier. Le seul argument de cette fonction est une chaîne passée de JavaScript qui cette méthode analyse afin de déterminer laquelle des méthodes de l'objet natif doit s'exécuter. Ces méthodes sont implémentées dans `echo_js.cpp` . Voici le `InvokeMethod` pendant la `Echo` exemple :

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

Le plugin natif doit également implémenter les fonctions de rappel suivant :

*   `extern char * onGetObjList (void) ;`

*   `extern JSExt * onCreateObject (const string & strClassName, const string & strObjId) ;`

Le `onGetObjList` fonction retourne une liste séparée par des virgules des classes prises en charge par JNEXT. JNEXT utilise cette fonction pour déterminer le jeu de classes JNEXT capable d'instancier. Le `Echo` plugin implémente ce qui suit dans `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

Le `onCreateObject` fonction prend deux paramètres. Le premier est le nom de la classe demandée à être créé à partir du côté de JavaScript, par des noms valides que ceux retournés dans `onGetObjList` . Le deuxième paramètre est id de la classe de l'objet unique. Cette méthode retourne un pointeur vers l'objet plugin créé. Le `Echo` plugin implémente ce qui suit dans `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Création JavaScript de Plugin

Le plugin doit contenir les fichiers JavaScript suivants :

*   `client.js`: Ceci est considéré comme du côté client et contient l'API disponible pour une application de Cordova. L'API de `client.js` appels effectue des appels à `index.js` . L'API de `client.js` relie également les fonctions de rappel pour les événements qui déclenchent les rappels.

*   `index.js`: Cordoue charge `index.js` et le rend accessible à travers le pont de cordova.exec. Le `client.js` fichier effectue des appels à l'API dans le `index.js` fichier, qui fait ensuite appel au JNEXT pour communiquer avec le côté natif.

Le côté client et serveur ( `client.js` et `index.js` ) interagit à travers le `Cordova.exec` fonction. Le `client.js` doit appeler le `exec` fonctionner et fournir les arguments nécessaires. Le `Echo` plugin implémente ce qui suit dans la `client.js` fichier :

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

Le `index.js` composant utilise JNEXT pour interagir avec le côté natif. Y attacher une fonction constructeur nommée `Echo` à JNEXT vous permet d'effectuer les opérations suivantes de clés à l'aide de la `init` fonction :

*   Spécifiez le module requis exporté par le côté natif. Le nom du module requis doit correspondre au nom d'un fichier de bibliothèque partagée ( `.so` file) :
    
        JNEXT.require("libecho")
        

*   Créer un objet en utilisant un module acquis et enregistrer l'ID retourné par l'appel :
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    Lorsque l'application appelle le `echo` fonctionne en `client.js` , qui appellent à leur tour des appels le `echo` fonctionne dans `index.js` , où le `PluginResult` objet renvoie les données en réponse à `client.js` . Puisque le `args` argument passé dans les fonctions a été converti par `JSON.stringfy()` et codé comme un `URIcomponent` , vous devez appeler ce qui suit :
    
        data = JSON.parse(decodeURIComponent(args.data));
        

Vous pouvez maintenant envoyer les données, comme suit :

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## Architecture de plugin

Vous pouvez placer des artefacts de plugin, y compris le `plugin.xml` fichier, les fichiers de source JavaScript et C++ et le `.so` des fichiers binaires au sein de toute structure de répertoire, aussi longtemps que vous spécifiez correctement les emplacements des fichiers dans le `plugin.xml` fichier. Voici une structure typique :

***project_directory*** (> plugin.xml)

*   **www** (>client.js)
*   **SRC** 
    *   **blackberry10** (> index.js, **native** > *.cpp, *.hpp)
    *   **dispositif** (>*fichier binaire* * .so)
    *   **simulateur** (>*fichier binaire* * .so)

La liste montre la relation hiérarchique entre les dossiers de niveau supérieur. La parenthèse montre le contenu d'un répertoire donné. Tous les noms de répertoires apparaissent en gras. Les noms de fichier sont précédés par le `>` sign.

## Le fichier *plugin.xml*

Le `plugin.xml` fichier contient l'espace de noms de l'extension et autres métadonnées. Mettre en place le `Echo` plugin comme suit :

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>