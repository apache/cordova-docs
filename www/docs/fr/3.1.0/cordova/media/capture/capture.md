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
---

# Capture

> Donne accès à de l'appareil audio, image et capacités de capture vidéo.

**Remarque importante de la vie privée :** Collecte et utilisation des images, vidéo ou audio de la caméra ou un microphone de l'appareil soulève des questions importantes de la vie privée. Politique de confidentialité de votre application doit examiner comment l'application utilise des capteurs et si les données enregistrées sont partagées avec d'autres parties. En outre, si l'utilisation de l'application de la caméra ou un microphone n'est pas apparente dans l'interface utilisateur, vous devez fournir un avis juste-à-temps avant votre application d'accéder à la caméra ou un microphone (si le système d'exploitation de périphérique n'est pas faire déjà). Cet avis doit fournir les mêmes renseignements susmentionnées, ainsi que d'obtenir l'autorisation de l'utilisateur (par exemple, en présentant des choix **OK** et **Non merci**). Notez que certains marchés app peuvent exiger votre app à aviser le juste-à-temps et obtenir l'autorisation de l'utilisateur avant d'accéder à la caméra ou un microphone. Pour plus d'informations, consultez le <a href="../../../guide/appdev/privacy/index.html">Guide de la vie privée</a>.

## Objets

*   Capture
*   <a href="captureAudioOptions.html">CaptureAudioOptions</a>
*   <a href="captureImageOptions.html">CaptureImageOptions</a>
*   <a href="captureVideoOptions.html">CaptureVideoOptions</a>
*   CaptureCallback
*   <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a>
*   <a href="ConfigurationData.html">ConfigurationData</a>
*   <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>
*   <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>Data

## Méthodes

*   <a href="captureAudio.html">capture.captureAudio</a>
*   <a href="captureImage.html">capture.captureImage</a>
*   <a href="captureVideo.html">capture.captureVideo</a>
*   <a href="<a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>.getFormatData.html"><a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>.getFormatData</a>

## Champ d'application

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## Propriétés

*   **supportedAudioModes**: l'enregistrement des formats pris en charge par le périphérique audio. (<a href="ConfigurationData.html">ConfigurationData</a>[])

*   **supportedImageModes**: l'enregistrement image et formats pris en charge par le périphérique. (<a href="ConfigurationData.html">ConfigurationData</a>[])

*   **supportedVideoModes**: l'enregistrement vidéo résolutions et formats pris en charge par le périphérique. (<a href="ConfigurationData.html">ConfigurationData</a>[])

## Méthodes

*   `<a href="captureAudio.html">capture.captureAudio</a>`: Lancer l'application d'enregistrement audio de l'appareil pour enregistrer des clips audio.

*   `<a href="captureImage.html">capture.captureImage</a>`: Lancer l'application appareil photo de l'appareil pour prendre des photos.

*   `<a href="captureVideo.html">capture.captureVideo</a>`: Lancer l'application enregistreur vidéo de l'appareil pour enregistrer des vidéos.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/XML/plugins.Xml) < nom de la fonction = "Capturer" >< param name = "android-package" value="org.apache.cordova.Capture" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.RECORD_AUDIO" / >< permissions des utilisations android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Capturer" >< param name = "blackberry-package" value="org.apache.cordova.capture.<a href="../media.html">Media</a>Capture" / >< / fiction > (dans www/config.xml) < id="blackberry.system en vedette" requis = "true" version = "1.0.0.0" / >< id="blackberry.io.file en vedette" requis = "true" version = "1.0.0.0" / >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Capturer » >< param name = « ios-paquet » value = « CDVCapture » / >< / fiction >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.