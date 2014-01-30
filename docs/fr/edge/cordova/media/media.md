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

# Media

> L'objet `Media` offre la possibilité d'enregistrer et de lire des fichiers audio sur l'appareil.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**Remarque**: l'implémentation actuelle n'est pas conforme à une spécification du W3C pour la capture de médias et est fournie pour plus de commodité seulement. Une prochaine implémentation adhèrera à la toute dernière spécification du W3C, ce qui aura probablement pour effet de déprécier l'API actuelle.

## Paramètres

*   **src** : l'URI du contenu audio. *(DOMString)*

*   **mediaSuccess** : (facultative) la fonction callback exécutée après que la lecture en cours, l'action d'enregistrement ou l'arrêt de lecture de l'objet `Media` soit terminée. *(Function)*

*   **mediaError** : (facultative) la fonction callback exécutée si une erreur survient. *(Function)*

*   **mediaStatus** : (facultative) la fonction callback exécutée lors de chaque changement d'état. *(Function)*

## Constantes

Les constantes suivantes correspondent au seul paramètre transmis à la fonction callback `mediaStatus` :

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## Méthodes

*   `media.getCurrentPosition` : retourne la position de lecture dans un fichier audio.

*   `media.getDuration`: retourne la durée d'un fichier audio.

*   `media.play` : permet de commencer ou reprendre la lecture d'un fichier audio.

*   `media.pause` : interrompt la lecture d'un fichier audio.

*   `media.release` : libère les ressources audio correspondantes du système d'exploitation.

*   `media.seekTo` : déplace la position de lecture au sein du fichier audio.

*   `media.setVolume` : permet de régler le volume du clip audio.

*   `media.startRecord` : commence l'enregistrement d'un fichier audio.

*   `media.stopRecord` : arrête l'enregistrement d'un fichier audio.

*   `media.stop` : arrête la lecture d'un fichier audio.

## Paramètres supplémentaires en lecture seule

*   **position** : la position de lecture sein du clip audio, en secondes.
    
    *   La valeur n'est pas automatiquement rafraichie pendant la lecture ; un appel à `getCurrentPosition` permet sa mise à jour.

*   **duration** : la durée du média, en secondes.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.media 
        $ cordova plugin ls
        [ 'org.apache.cordova.media' ]
        $ cordova plugin rm org.apache.cordova.media 
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.media.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (dans www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   iOS (dans du répertoire application nommé`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   Windows Phone (dans `Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    Référence : [Manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.

## Windows Phone Quirks

*   Un seul fichier média peut être lu à la fois.

*   Il y a des restrictions strictes concernant la façon dont votre application interagit avec d'autres médias. Consultez la [documentation de Microsoft pour plus d'informations][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx