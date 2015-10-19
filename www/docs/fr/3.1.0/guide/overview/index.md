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

title: Présentation
---

# Présentation

Cordova est un framework de développement mobile open-source. Il vous permet d'utiliser des technologies web standard tels que HTML5, CSS3 et JavaScript pour le développement multi-plateforme, en évitant de langue native development chaque mobile platforms. Les applications s'exécutent dans les wrappers ciblées pour chaque plate-forme et s'appuient sur les liaisons conforme aux normes d'API pour accéder aux capteurs de chaque appareil, les données et état du réseau.

Utilisez Cordova, si vous êtes :

*   un développeur mobile et que vous voulez pour étendre une application sur plusieurs plates-formes, sans avoir à re-mettre en œuvre avec l'outil et la langue de chaque plateforme définie.

*   un développeur web et que vous voulez pour déployer une application web qui est emballée pour distribution dans divers $ $ etAPP stockent des portails.

*   un développeur de mobile intéressé par la combinaison de composants de l'application native avec une *WebView* (fenêtre de navigateur) qui peut accéder aux API de niveau périphérique, ou si vous voulez développer une interface plugin entre les autochtones et les composants WebView.

## Composants de base

Cordova applications s'appuient sur un commun `config.xml` fichier qui fournit des informations sur l'application et spécifie les paramètres qui affectent comment ça marche, comme si elle répond à l'orientation se déplace. Ce fichier respecte [Emballés Web App][1]ou *widget*, spécification de la W3C.

 [1]: http://www.w3.org/TR/widgets/

L'application elle-même est implémenté comme une page web, nommé *index.html* par défaut, qui fait référence à quelque CSS, JavaScript, images, fichiers multimédias, ou d'autres ressources sont nécessaires pour son exécution. L'application s'exécute sous une *WebView* dans le wrapper de l'application native, qui vous distribuez à l'app store. Pour l'application web d'interagir avec diverses fonctions de l'appareil font les apps de façon natives, il doit également référencer un `cordova.js` fichier, qui fournit une API. <!-- XREF
(See the API Reference for an overview, and the Application
Development Guide for examples of how to use them.)
XREF -->

Le WebView Cordova-activé peut prévoir l'application grâce à son interface utilisateur entière. Il peut aussi être un composant dans une application hybride plus grande, qui mêle le mode Web avec des composants de l'application native. Cordova fournit une interface *plugin* pour ces composants de communiquer entre eux.

## Voies de développement

La meilleure façon de mettre en place une application doit exécuter le `cordova` de l'utilitaire, aussi connu sous le nom *Command-line interface* (CLI). (Pour installer le CLI, voir The Command-Line Interface). Selon l'ensemble des plateformes que vous souhaitez cibler, vous pouvez compter sur la CLI pour des actions plus en plus importantes du cycle de développement :

*   Dans le scénario de base, vous pouvez utiliser l'interface CLI simplement pour créer un nouveau projet qui est rempli avec la configuration par défaut pour modifier.

*   Pour de nombreuses plateformes mobiles, vous pouvez également utiliser la CLI de mettre en place les fichiers de projet supplémentaire requis pour compiler dans chaque kit de développement logiciel. Pour ce faire, vous devez installer SDK chaque ciblée de la plate-forme. (Voir les [Guides de la plate-forme](../platforms/index.html) pour obtenir des instructions.) Comme indiqué dans le tableau de la plateforme de Support ci-dessous, vous devrez peut-être exécuter la CLI sur différents systèmes d'exploitation selon la plateforme ciblée.

*   Pour les plateformes, la CLI peut compiler les applications et de les exécuter dans un émulateur de périphérique SDK. <!--XRÉF XRÉF (Voir Application Development Guide pour les détails.)--> pour le test complet, vous pouvez également générer des fichiers d'application et les installer directement sur un périphérique.

À tout moment dans le cycle de développement, vous pouvez également compter sur les outils spécifiques à la plate-forme SDK, qui peuvent offrir un ensemble plus large d'options. (Voir les [Guides de la plate-forme](../platforms/index.html) pour plus d'informations sur l'outil du SDK de la plate-forme chaque jeu). Un environnement SDK est plus approprié si vous voulez implémenter une application hybride qui mêle des composants d'applications web et natives. <!--XRÉF XRÉF (Voir Hybride Guide d'Application pour plus d'informations.)--> vous pouvez utiliser l'utilitaire de ligne de commande pour générer initialement l'app, ou de manière itérative par la suite pour nourrir code mis à jour pour les outils du kit de développement logiciel. Vous pouvez également créer fichier de configuration de l'application vous-même. 

<!-- XREF
(See The config.xml [File](../../cordova/file/fileobj/fileobj.html) for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## Plateforme de Support

Vous trouverez ci-dessous l'ensemble des outils de développement et dispositif API disponibles pour chaque plate-forme mobile. (Les en-têtes de colonne affichent les talons de sténographie de la CLI.)

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>Android</tt>
      </th>
      
      <th>
        <tt>BlackBerry</tt> (6)
      </th>
      
      <th>
        <tt>blackberry10</tt>
      </th>
      
      <th>
        <tt>iOS</tt>
      </th>
      
      <th>
        <tt>WP7</tt> (Windows<br />Phone 7)
      </th>
      
      <th>
        <tt>wp8</tt> (Windows<br />Téléphone 8)
      </th>
      
      <th>
        <tt>WIN8</tt><br />(Windows 8)
      </th>
      
      <th>
        <tt>firefoxos</tt>
      </th>
      
      <th>
        <tt>paciarelli</tt>
      </th></tr> </thead> 
      
      <tr>
        <th>
          <a href="../cli/index.html">Cordova<br />CLI</a>
        </th>
        
        <td data-col="android"    class="y">
          Mac, Windows, Linux
        </td>
        
        <td data-col="blackberry" class="n">
          Mac, Windows
        </td>
        
        <td data-col="blackberry10" class="y">
          Mac, Windows
        </td>
        
        <td data-col="ios"        class="y">
          Mac
        </td>
        
        <td data-col="winphone7"  class="y">
          Windows
        </td>
        
        <td data-col="winphone8"  class="y">
          Windows
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../hybrid/webviews/index.html">Embedded<br />WebView</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../platforms/android/webview.html">(voir détails)</a>
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../platforms/ios/webview.html">(voir détails)</a>
        </td>
        
        <td data-col="winphone7"  class="n">
        </td>
        
        <td data-col="winphone8"  class="n">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../hybrid/plugins/index.html">Plug-in<br />Interface</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../guide/platforms/android/plugin.html">(voir détails)</a>
        </td>
        
        <td data-col="blackberry" class="y">
          <a href="../guide/platforms/blackberry/plugin.html">(voir détails)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="../guide/platforms/blackberry10/plugin.html">(voir détails)</a>
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../guide/platforms/ios/plugin.html">(voir détails)</a>
        </td>
        
        <td data-col="winphone7"  class="y">
          <a href="../guide/platforms/wp8/plugin.html">(voir détails)</a>
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
        </th>
        
        <th colspan="20">
          API de la plate-forme
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/accelerometer/accelerometer.html">Accéléromètre</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/camera/camera.html"><a href="../../cordova/device/device.html">Appareil</a> photo</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/media/capture/capture.html">Capture</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/compass/compass.html">Boussole</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
          (3 G +)
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/connection/connection.html">Connexion</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/contacts/contacts.html">Contacts</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/device/device.html">Dispositif</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/events/events.html">Événements</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/file/file.html">Fichier</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          aucun transfert de fichiers
        </td>
        
        <td data-col="winphone8"  class="p">
          aucun transfert de fichiers
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/geolocation/geolocation.html">Géolocalisation</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/globalization/globalization.html">Mondialisation</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/inappbrowser/inappbrowser.html">InAppBrowser</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/media/media.html">Media</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/notification/notification.html">Notification</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/splashscreen/splashscreen.html">SplashScreen</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/storage/storage.html">Stockage</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> seulement
        </td>
        
        <td data-col="winphone8"  class="p">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> seulement
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr></table> 
      
      <!-- END HTML -->