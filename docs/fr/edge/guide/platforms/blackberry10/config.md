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

# Configuration de blackBerry 10

Le `config.xml` fichier contrôle les différents paramètres de Cordova. Elles s'appliquent dans toute l'application. Le `config.xml` fichier est se trouve dans `<project folder>/<www>` répertoire.

## `<preference>`

Diverses préférences (comme `<preference>` tags) par défaut sur la rupture ne pas les applications existantes. Les préférences disponibles sont :

*   `autoHideSplashScreen`: ( `true` ou `false` ): la valeur `false` pour contrôler quand il est caché le splashscreen via une API JavaScript. Cette préférence par défaut est true.

*   `backgroundColor`: Spécifie la couleur d'arrière-plan de votre application. La valeur doit spécifier une valeur de couleur dans le format de pixel ARGB en utilisant 8 chiffres hexadécimaux.

*   `childBrowser`: Désactive les fenêtres de navigateur d'enfants. Par défaut, lorsque le contenu tente d'ouvrir une ressource dans une nouvelle fenêtre ou onglet (à l'aide de Window.Open (), ou en spécifiant `_blank` comme cible d'une ancre), l'app WebWorks ouvrira une fenêtre de navigateur secondaire pour afficher les ressources. Cette fonctionnalité est activée par défaut. La valeur doit spécifier `disable` pour empêcher les actions ci-dessus se produise.

*   `hideKeyboardFormAccessoryBar`: ( `enable` ou `disable` ) désactive la barre accessoire de forme de clavier dans un formulaire HTML. Le bar accessoire de forme de clavier est une rangée de boutons (précédent, suivant et Submit) que l'utilisateur peut utiliser pour naviguer dans un formulaire. Par défaut, lorsqu'une application WebWorks contienne un formulaire HTML et un `<input>` élément obtient le focus, WebWorks affiche cette barre accessoire de forme. Cette fonctionnalité vous permet d'empêcher votre application d'afficher la barre accessoire forme en spécifiant la valeur comme`enable`.

*   `orientation`: ( `auto` , `portrait` , ou `landscape` ) spécifie l'orientation persistante pour écrans dans votre application. Par défaut, si vous ne spécifiez pas une orientation de l'écran, l'orientation est définie sur auto.

*   `popupBlocker`: Permet le blocage des fenêtres popup. Par défaut, toutes les fenêtres pop-up est affichées par apps BlackBerry WebWorks dans une fenêtre enfant. Vous pouvez empêcher les fenêtres pop-up de s'afficher sans intervention de l'utilisateur en permettant le blocage des fenêtres popup. Cela se fait en spécifiant la valeur comme`enable`.

*   `webSecurity`: Désactive sécurité web. Désactivation de la sécurité web vous permet d'accéder contenu distant provenant de sources inconnues au cours du développement. Avant l'emballage de votre application pour la distribution, vous devez supprimer ce réglage. Cette fonctionnalité est conçue comme une commodité de développement uniquement. En production, tous les URI doivent être connue et devrait être dans la liste blanche en utilisant le `<access>` élément. Pour désactiver, spécifiez la valeur que`disable`.