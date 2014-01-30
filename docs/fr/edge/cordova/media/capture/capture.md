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

# Capture

> Donne accès aux capacités de capture de sons, images et vidéos de l'appareil.

**Avertissement**: collecte et utilisation des images, vidéo ou audio de la caméra ou un microphone de l'appareil soulève des questions importantes de la vie privée. La politique de confidentialité de votre application devrait traiter de la manière dont l'application utilise ces capteurs et du partage des données enregistrées avec d'autres parties ou non. En outre, si l'utilisation de l'application de la caméra ou un microphone n'est pas apparente dans l'interface utilisateur, vous devez fournir un avis juste-à-temps, avant que l'application accède à la caméra ou un microphone (si le système d'exploitation de périphérique n'est pas faire déjà). Cette notice devrait contenir les informations susmentionnées, ainsi que permettre de recueillir l'autorisation de l'utilisateur (par exemple, en offrant les possibilités **OK** et **Non merci**). Notez que certains magasins d'applications peuvent exiger la présence de ce genre de notice avant d'autoriser la distribution de votre application. Pour plus d'informations, veuillez vous référer à la section "Guide du respect de la vie privée".

## Objets

*   Capture
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   MediaFile
*   MediaFileData

## Méthodes

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## Champ d'application

L'objet `capture` est défini sur l'objet `navigator.device`, il a par conséquent un champ d'application global.

    // L'objet global capture
    var capture = navigator.device.capture;
    

## Propriétés

*   **supportedAudioModes** : les formats d'enregistrement audio supportés par l'appareil. (ConfigurationData[])

*   **supportedImageModes** : les formats et tailles de capture d'image supportés par l'appareil. (ConfigurationData[])

*   **supportedVideoModes**: les formats et résolutions d'enregistrement vidéo supportés par l'appareil. (ConfigurationData[])

## Méthodes

*   `capture.captureAudio` : ouvre l'application d'enregistrement audio de l'appareil afin d'enregistrer des clips audio.

*   `capture.captureImage` : ouvre l'application appareil photo de l'appareil pour prendre des photos.

*   `capture.captureVideo` : ouvre l'application enregistreur vidéo de l'appareil pour enregistrer des vidéos.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.file',
          'org.apache.cordova.media-capture']
        $ cordova plugin rm org.apache.cordova.media-capture
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.file.FileUtils" />
        </feature>
        <feature name="Capture">
            <param name="android-package" value="org.apache.cordova.mediacapture.Capture" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.RECORD_VIDEO" />
        

*   BlackBerry WebWorks
    
        (dans www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.capture.MediaCapture" />
        </feature>
        
        (dans www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        

*   iOS (dans du répertoire application nommé`config.xml`)
    
        <feature name="Capture">
            <param name="ios-package" value="CDVCapture" />
        </feature>
        

*   Windows Phone (dans `Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.