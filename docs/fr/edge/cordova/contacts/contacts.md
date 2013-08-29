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

# Contacts

> L'objet `contacts` fournit l'accès à la base de données de contacts de l'appareil.

**Remarque importante sur la vie privée :** La collecte et l'utilisation des données de contact soulève des questions importantes concernant la vie privée. La politique de confidentialité de votre application doit examiner comment l'application utilise les données de contact et si elles sont partagées avec d'autres parties. Les information de contact sont considérés comme sensibles parce qu'elles révèlent les gens avec lesquels une personne communique. Par conséquent, en plus de la politique de confidentialité de votre application, vous devez envisager fortement de fournir une alerte au dernier moment avant que votre application n'accède ou en utilise les données de contact (si le système d'exploitation de l'appareil ne l'a pas déjà fait). Cet avis doit fournir les mêmes renseignements mentionnés précédemment, ainsi qu'obtenir l'autorisation de l'utilisateur (par exemple, en présentant des choix **OK** et **Non merci**). Notez que certains marchés d'applications peuvent exiger de votre application qu'elle fournisse une alerte au dernier moment et obtienne l'autorisation de l'utilisateur avant d'accéder à des données de contact. Une expérience utilisateur claire et facile à comprendre autour de l'utilisation des données de contact permettra d'éviter la confusion des utilisateurs et une utilisation jugée abusive des données de contact. Pour plus d'informations, consultez le Guide de la vie privée.

## Méthodes

*   contacts.Create
*   contacts.Find

## Arguments

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Objets

*   Contact
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les APIs au niveau de l'appareil comme des *plugins*. Utilisez le plugin `plugin` CLI, décrit dans l'Interface de ligne de commande, pour ajouter ou supprimer cette fonctionnalité pour un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
        $ cordova plugin rm org.apache.cordova.core.contacts
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifient les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/XML/config.Xml) < nom de la fonction = "Contacts" >< param name = "android-package" value="org.apache.cordova.ContactManager" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.GET_ACCOUNTS" / >< permissions des utilisations android:name="android.permission.READ_CONTACTS" / >< permissions des utilisations android:name="android.permission.WRITE_CONTACTS" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Contact" >< param name = "blackberry-package" value="org.apache.cordova.pim.Contact" / >< / fiction > (dans www/config.xml) < disposent d'id="blackberry.find" requis = "true" version = "1.0.0.0" / >< id="blackberry.identity en vedette" requis = "true" version = "1.0.0.0" / >< disposent d'id="blackberry.pim.Address" requis = "true" version = "1.0.0.0" / >< disposent d'id="blackberry.pim.Contact" requis = "true" version = "1.0.0.0" / >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Contacts » >< param name = « ios-paquet » value = « CDVContacts » / >< / fiction >
        

*   Windows Phone
    
        (dans Properties/WPAppManifest.xml) < capacités >< capacité nom = « ID_CAP_CONTACTS » / >< / capacités >
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.