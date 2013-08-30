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

# Géolocalisation

> Le `geolocation` objet fournit l'accès aux données de localisation basée sur le capteur du dispositif GPS ou déduit de signaux de réseaux.

`Geolocation`fournit des informations sur l'emplacement de l'appareil, tels que la latitude et la longitude. Des sources communes d'information incluent système de positionnement Global (GPS) et l'emplacement déduit de signaux de réseaux tels qu'adresse IP, RFID, WiFi et Bluetooth MAC adresses et GSM/CDMA cell ID. Il n'y a aucune garantie que l'API retourne la position réelle de l'appareil.

Cette API est basée sur la [Spécification de W3C Geolocation API][1]et s'exécute uniquement sur les périphériques qui ne fournissent déjà une implémentation.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Remarque importante de la vie privée :** Collecte et utilisation des données de géolocalisation soulève des questions importantes de la vie privée. Politique de confidentialité de votre application devrait discuter de comment l'application utilise les données de géolocalisation, si elle est partagée avec d'autres parties et le niveau de précision des données (par exemple, grossière et fine, ZIP code niveau, etc.). Données de géolocalisation sont généralement considéré comme sensibles car elle peut révéler l'endroit où se trouve une personne et, si stocké, l'histoire de ses voyages. Par conséquent, en plus de la politique de confidentialité de votre application, vous devez envisager fortement fournissant un avis de juste-à-temps avant votre application pour accéder aux données de géolocalisation (si le système d'exploitation de périphérique n'est pas faire déjà). Cet avis doit fournir les mêmes renseignements susmentionnées, ainsi que d'obtenir l'autorisation de l'utilisateur (par exemple, en présentant des choix **OK** et **Non merci**). Pour plus d'informations, consultez le Guide de la vie privée.

## Méthodes

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Arguments

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Objets (lecture seule)

*   Position
*   PositionError
*   Coordonnées

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git
        $ cordova plugin rm org.apache.cordova.core.geolocation
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/XML/config.Xml) < nom de la fonction = "Géolocalisation" >< param name = "android-package" value="org.apache.cordova.GeoBroker" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.ACCESS_COARSE_LOCATION" / >< permissions des utilisations android:name="android.permission.ACCESS_FINE_LOCATION" / >< permissions des utilisations android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Géolocalisation" >< param name = "blackberry-package" value="org.apache.cordova.geolocation.Geolocation" / >< / fiction > (dans www/config.xml) < jante : autorisations >< jante : permis > read_geolocation < / jante : permis >< / jante : autorisations >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Géolocalisation » >< param name = « ios-paquet » value = « CDVLocation » / >< / fiction >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacités >< capacité nom = « ID_CAP_LOCATION » / >< / capacités >
        
    
    Référence : [manifeste d'Application pour Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.