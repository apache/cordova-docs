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

> Le `Media` objet fournit la possibilité d'enregistrer et de lire des fichiers audio sur un périphérique.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**Remarque :** L'implémentation actuelle n'est pas conforme à une spécification du W3C pour la capture de médias et est fournie pour plus de commodité seulement. Une mise en œuvre future adhèrera à la toute dernière spécification W3C et peut déprécier l'API actuelles.

## Paramètres

*   **src**: un URI contenant le contenu audio. *(DOMString)*

*   **mediaSuccess**: (en option) la fonction de rappel qui s'exécute après un `Media` objet a fini le jeu actuel, l'enregistrement ou action stop. *(Fonction)*

*   **mediaError**: (facultatif) la fonction de rappel qui s'exécute si une erreur survient. *(Fonction)*

*   **mediaStatus**: (facultatif) le rappel qui s'exécute pour indiquer les changements d'État. *(Fonction)*

## Constantes

Les constantes suivantes sont déclarées comme le seul paramètre à la `mediaStatus` Rappel :

*   `Media.MEDIA_NONE`= 0 ;
*   `Media.MEDIA_STARTING`= 1 ;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## Méthodes

*   `media.getCurrentPosition`: Retourne la position courante dans un fichier audio.

*   `media.getDuration`: Retourne la durée d'un fichier audio.

*   `media.play`: Commencer ou reprendre la lecture d'un fichier audio.

*   `media.pause`: Interrompre la lecture d'un fichier audio.

*   `media.release`: Libère les ressources audio du système d'exploitation sous-jacent.

*   `media.seekTo`: Déplace la position au sein du fichier audio.

*   `media.setVolume`: Réglage du volume pour la lecture audio.

*   `media.startRecord`: Commencez à enregistrer un fichier audio.

*   `media.stopRecord`: Arrêter d'enregistrer un fichier audio.

*   `media.stop`: Arrêter la lecture d'un fichier audio.

## Paramètres supplémentaires de ReadOnly

*   **position**: la position au sein de la lecture audio, en quelques secondes.
    
    *   Pas automatiquement mis à jour pendant la lecture ; appelez `getCurrentPosition` pour mettre à jour.

*   **durée**: la durée des médias, en quelques secondes.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7.5
*   Paciarelli
*   Windows 8

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        Ajouter des plugin de cordova $ org.apache.cordova.media $ cordova plugin ls ['org.apache.cordova.media'] $ cordova plugin rm org.apache.cordova.media
     

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   iOS (en`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.

### Windows Phone Quirks

*   Fichier seul média peut être lus à la fois.

*   Il y a des restrictions strictes sur la façon dont votre application interagit avec d'autres médias. Consultez la [documentation de Microsoft pour plus d'informations][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx