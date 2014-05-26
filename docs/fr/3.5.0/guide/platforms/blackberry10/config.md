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

Le `config.xml` fichier contrôle des paramètres de base de l'application s'appliquent à chaque demande et chaque instance de CordovaWebView. Cette préférences de détails d'article s'appliquant uniquement aux BlackBerry 10 construit. Voir le fichier config.xml File pour plus d'informations sur les options de configuration globale.

*   `ChildBrowser`( `disable` ou la valeur par défaut `enable` ): désactive les fenêtres de navigateur d'enfants. Par défaut, les apps pour lancent une fenêtre de navigateur secondaire pour afficher les ressources accédés via `window.open()` ou en spécifiant une `_blank` cible de l'ancre. Spécifiez `disable` pour substituer ce comportement par défaut.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` ou la valeur par défaut `disable` ): permet le bloqueur de popups, qui empêche les appels à `window.open()` . Par défaut, les fenêtres pop-up affiche dans une fenêtre enfant. Affectant la préférence `enable` l'empêche de s'afficher du tout.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` ou la valeur par défaut `enable` ): la valeur `disable` pour substituer les paramètres de sécurité web, permettant d'accéder à un contenu distant provenant de sources inconnues. Cette préférence est conçue comme une commodité de développement uniquement, alors Retirez-le avant l'empaquetage de votre application pour la distribution. L'application publiée, tous les URI doivent être connu et à l'aide de la liste blanche les `<access>` élément, décrit dans le Guide de liste blanche du domaine.
    
        <preference name="WebSecurity" value="disable"/>