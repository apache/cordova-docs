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

# Appareil photo

> L'objet `camera` donne accès à l'application de caméra par défaut de l'appareil.

**Remarque importante sur la vie privée :** La collecte et l'utilisation des images de la caméra d'un appareil de mesure soulève des questions importantes concernant la vie privée. La politique de confidentialité de votre application doit examiner comment l'application utilise l'appareil photo et si les images enregistrées sont partagées avec d'autres parties. En outre, si l'utilisation de l'application de la caméra n'est pas apparente dans l'interface utilisateur, vous devez fournir un avis juste-à-temps avant que votre application n'accède à la caméra (si le système d'exploitation de périphérique ne le fait pas déjà). Cet avis doit fournir les mêmes renseignements mentionnés précédemment, ainsi que d'obtenir l'autorisation de l'utilisateur (par exemple, en présentant des choix **OK** et **Non merci**). Pour plus d'informations, consultez le Guide de la vie privée.

## Méthodes

*   camera.getPicture
*   Camera.Cleanup

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente des APIs au niveau du périphérique en tant que *plugins*. Utilisez le `plugin` de l'interface en ligne de commande, décrite dans l'Interface de ligne de commande, pour ajouter ou supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifient les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   iOS (en`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

*   Paciarelli (dans`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    Référence : [Manifeste d'Application pour Applications Web Paciarelli][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.