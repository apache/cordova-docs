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

# iOS Configuration

Le `config.xml` fichier contrôle des paramètres de base de l'application s'appliquent à chaque demande et chaque instance de CordovaWebView. Cette section décrit en détail les préférences qui s'appliquent uniquement aux versions d'iOS. Voir le fichier config.xml File pour plus d'informations sur les options de configuration globale.

*   `EnableViewportScale`(boolean, la valeur par défaut `false` ): la valeur `true` pour permettre une balise meta viewport désactiver ou limiter la plage de mise à l'échelle de l'utilisateur, qui est activée par défaut.
    
        <preference name="EnableViewportScale" value="true"/>
        
    
    Placer une fenêtre semblable à la suivante dans le code HTML pour désactiver la mise à l'échelle et de bonne forme contenu avec souplesse dans le rendu WebView :
    
        < nom meta = « fenêtre » content =' largeur = dispositif-largeur, échelle initial = 1, utilisateur évolutive = non ' / >
        

*   `MediaPlaybackRequiresUserAction`(boolean, la valeur par défaut `false` ): la valeur `true` pour empêcher les HTML5 vidéos ou audios de jouer automatiquement avec le `autoplay` attribut ou via JavaScript.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(boolean, la valeur par défaut `false` ): la valeur `true` pour permettre la lecture multimédia HTML5 à comparaître *inline* dans la disposition de l'écran, à l'aide de contrôles fournis par navigateur plutôt que des contrôles natifs. Pour ce faire, ajoutez les `webkit-playsinline` attribuent à aucun `<video>` éléments.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(cordes, soit `none` , `local` , ou la valeur par défaut `cloud` ): la valeur `cloud` afin que les données de stockage web de sauvegarde via iCloud. La valeur `local` pour permettre uniquement les sauvegardes locales via iTunes sync. La valeur `none` empêcher les sauvegardes de stockage web.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(string, la valeur par défaut `gray` ): contrôle l'apparence de l'icône de la petite filature dans la barre d'État qui indique l'activité du processeur importante. Les valeurs valides sont `whiteLarge` , `white` , et`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `KeyboardDisplayRequiresUserAction`(boolean, la valeur par défaut `true` ): la valeur `false` pour permettre le clavier à comparaître lors de l'appel `focus()` sur les entrées de formulaire.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(boolean, la valeur par défaut `false` ): la valeur `true` d'attendre que tout le contenu a été reçu avant il restitue à l'écran.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `GapBetweenPages`(float, la valeur par défaut `` ): la taille de l'espace, en points, entre les pages.
    
        <preference name="GapBetweenPages" value="0"/>
        

*   `PageLength`(float, la valeur par défaut `` ): la taille de chaque page, en points, dans le sens qui découlent des pages. Quand PaginationMode est juste à gauche ou de gauche à droite, cette propriété représente la largeur de chaque page. Lorsque PaginationMode est topToBottom ou bottomToTop, cette propriété représente la taille de chaque page. La valeur par défaut est 0, ce qui signifie que la disposition utilise la taille de la fenêtre d'affichage pour déterminer les dimensions de la page.
    
        <preference name="PageLength" value="0"/>
        

*   `PaginationBreakingMode`(string, la valeur par défaut `page` ): les valeurs valides sont `page` et `column` .La manière dans laquelle se produit la rupture de colonne ou de page. Cette propriété détermine si certaines propriétés CSS sur colonne et page-rupture sont à l'honneur ou ignorées. Lorsque cette propriété est définie `column` , le contenu respecte les propriétés CSS associées à colonne-rupture au lieu de saut de page.
    
        <preference name="PaginationBreakingMode" value="page"/>
        

*   `PaginationMode`(string, la valeur par défaut `unpaginated` ): les valeurs valides sont `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , et `rightToLeft` . Cette propriété détermine si contenu dans l'affichage web est divisé en pages qui remplissent l'une écran vue à la fois, ou montré comme un point de vue long défilement. Si un formulaire paginé, cette propriété la valeur active/désactive une présentation paginée sur le contenu, provoquant l'affichage de web à utiliser les valeurs de LongueurPage et GapBetweenPages à la nouvelle disposition de son contenu.
    
        <preference name="PaginationMode" value="unpaginated"/>
        

*   `UIWebViewDecelerationSpeed`(string, la valeur par défaut `normal` ): les valeurs valides sont `normal` , `fast` . Cette propriété contrôle la vitesse de décélération de défilement dynamique. `normal`est la vitesse par défaut pour les applications plus natives, et `fast` est la valeur par défaut pour Safari Mobile.
    
        <preference name="UIWebViewDecelerationSpeed" value="fast" />