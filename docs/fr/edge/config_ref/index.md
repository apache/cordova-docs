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

# Référence de configuration

De nombreux aspects du comportement d'une application peuvent être contrôlés par un fichier de configuration indépendant de la plateforme,`config.xml`, dont le format est basé sur la spécification [Applications Web Embarquées (Widgets)][1] du W3C.

 [1]: http://www.w3.org/TR/widgets/

Pour les projets créés avec l'interface en ligne de commande de Cordova (décrite dans le paragraphe "L'interface en Ligne de Commande"), ce fichier peut être trouvé dans le répertoire `www` à la racine du projet. L'utilisation de la ligne de commande pour compiler les projets recréé des versions de ce fichier dans les différents sous-répertoires du répertoire `platforms`. Pour les projets créés sans passer par cette interface, le fichier spécifique à chaque plateforme sert de fichier source.

Si l'emplacement du fichier `config.xml` peut changer selon la plateforme, son contenu varie peu en général Certaines fonctionnalités spécifiques à une plateforme sont également indiquées dans ce même fichier de configuration. En voici le détail:

*   Configuration iOS
*   Configuration Android
*   Configuration BlackBerry

## Eléments du fichier config.xml

Le projet [Apache Cordova][2] s'efforce de s'abstraire de la plate-forme native en utilisant des standards largement façonnés par la communauté web et adoptés par elle. Veuillez prendre quelques minutes pour vous familiariser avec la [spécification du fichier config.xml][1], pour comprendre le type de méta-données de l'application que le projet Apache Cordova permet d'abstraire, tout en fournissant des points d'entrée simples.

 [2]: http://cordova.io

Un exemple :

        < widget >< nom de préférence = "MySetting" value = "true" / >< nom de la fonction = valeur "MyPlugin" = "MyPluginClass" / >< accéder origine = "*" / >< src="index.html de contenu" / >< / widget >
    [NOTE : remettre l'original ici]
    

Vous trouverez ci-dessous les éléments supportés sur les différentes plateformes supportées par Apache Cordova.

### `<feature>`

Ces éléments correspondent aux API natives que l'application utilise. A son lancement, le framework Apache Cordova va relier les éléments `<feature>` au code natif pour permettre à votre application Cordova d'accéder aux interfaces natives de votre terminal, usuellement non-disponibles pour les applications web classiques.

### `<access>`

Ces éléments définissent le fonctionnement de votre liste blanche. Veuillez consulter le Guide des Liste blanches de Domaines pour plus d'informations.

### `<content>`

Cet élément définit la page de démarrage de votre application, relative au répertoire standard des composants du projet . Il est optionnel, sa valeur par défaut est `index.html`.