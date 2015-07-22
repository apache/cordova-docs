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

# Guide de la vie privée

La confidentialité sur mobile est une question essentielle que chaque développeur d'application doit considérer. Vos utilisateurs s'attendent à ce que leurs renseignements personnels soient recueillis et traités de manière appropriée par votre application. En outre, il y a un nombre croissant de juridictions qui ont maintenant des exigences légales concernant les pratiques de confidentialité mobile.

Ce guide sur la vie privée dans les applications mobiles devrait être considéré comme un *manuel* qui adresse les problèmes les plus importants. Il décrit certaines bonnes pratiques globalement reconnues et fournit des références à d'autres guides et références plus détaillés.

*   **Politique de confidentialité**: votre application devrait inclure une politique de confidentialité qui traite de sujets tels que les informations que votre application recueille auprès ou au sujet de vos utilisateurs, comment cette information est utilisée, avec qui elle est partagée, et comment les utilisateurs peuvent faire des choix relatifs à la vie privée au sein de l'application. Pour faciliter la compréhension, vous devez utiliser un langage simple et éviter le jargon technique. Vous devriez rendre disponible votre politique de confidentialité aux utilisateurs pour qu'ils puissent la consulter avant le téléchargement, comme dans la description de l'app dans la Galerie d'apps. En outre, vous devez rendre disponible votre politique de confidentialité directement dans l'application elle-même. La taille réduite des périphériques mobiles crée des difficultés pour afficher les politiques de confidentialité aux utilisateurs. Envisager l'élaboration d'une *version abrégée* de la politique qui inclut l'information la plus importante et ensuite fournir un lien vers la politique « complète » pour ceux qui s'y intéressent de façon plus détaillée. Plusieurs groupes tentent d'élaborer des normes de base concernant les icônes pour la communication des pratiques de confidentialité, que vous voudrez peut-être consulter une fois que ces normes seront prêtes.

*   **Collecte d'informations sensibles** : la collecte d'informations personnelles sensibles dans l'application soulève des préoccupations importantes concernant la vie privée. Exemples de renseignements personnels sensibles comprennent des renseignements financiers, des informations de santé et des informations au sujet des enfants. Il comprend également des informations recueillies auprès de certains capteurs et bases de données qui se trouvent généralement sur les appareils mobiles et tablettes, telles que des informations de géolocalisation, contacts/annuaire téléphonique, microphone/appareil photo et photos ou vidéos stockées. Voir les pages suivantes de la documentation pour plus d'informations : [appareil photo][1], [capture][2], [contacts][3]et [géolocalisation][4]. En règle générale, vous devez obtenir l'autorisation express de l'utilisateur avant de recueillir des informations sensibles et, si possible, fournir un mécanisme de contrôle qui vous permette de facilement modifier les autorisations. Les systèmes d'exploitation des applications peuvent aider dans certains cas par la présentation de boîtes de dialogue qui demandent au moment opportun la permission de l'utilisateur avant la collecte d'information. Dans ces cas, n'oubliez pas de profiter de toute occasion pour personnaliser le texte de la boîte de dialogue afin de préciser comment l'application utilise et, le cas échéant, partage ces informations.

*   **Éviter la surprise de l'utilisateur** : si votre application recueille ou utilise les informations d'une manière qui peut être surprenante pour les utilisateurs à la lumière de l'objectif principal de votre application (par exemple, un lecteur de musique qui accède à des photos stockées), vous devez prendre les mêmes mesures que pour la collecte des informations personnelles sensibles. En d'autres termes, vous devez fortement envisager l'utilisation de boîtes de dialogue pour informer au moment opportun l'utilisateur de la collecte ou l'utilisation de ces informations et, le cas échéant, fournir un contrôle de confidentialité correspondant.

*   **Collecte de données de tiers ou de partage**: Si vous app collecte des informations qui sont fournies à une autre société--comme une plateforme de réseau social ou d'un réseau publicitaire (par exemple, si votre application affiche des publicités)--vous devez informer vos utilisateurs de cette collecte et de ce partage. Au minimum, votre politique de confidentialité devrait décrire la collecte de l'information et de partage et, le cas échéant, offrir à vos utilisateurs la capacité de contrôle ou de désengagement de cette collecte ou ce partage.

*   **Sécurité et limitation de la collecte** : vos utilisateurs confient à votre application leurs informations et ils attendent que vous preniez des précautions de sécurité appropriées pour les protéger. Un des meilleurs moyens de ne pas compromettre la sécurité des renseignements personnels est ne pas collecter les informations en premier lieu, à moins que votre application ait une raison spécifique et légitime pour cette collecte. Pour les informations qui n'ont pas besoin d'être recueillies, assurez-vous de fournir des contrôles de sécurité appropriés pour protéger ces informations, si elles sont stockées sur l'appareil ou sur vos serveurs back-end. Vous devez également développer une stratégie de rétention de données appropriée qui est mis en œuvre au sein de l'app et sur vos serveurs back-end.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

Voici quelques guides de confidentialité mobile utile pour les développeurs :

*   Procureur général de la Californie, [Privacy on the Go: Recommandations for the Mobile Ecosystem][5]

*   Center for Democracy & Technology, Future of Privacy Forum, [Best Practices for Mobile App Developers][6]

*   CTIA-The Wireless Association, [Practices and Guidelines for Location Based Services][7]

*   Federal Trade Commission, [Mobile Privacy Disclosures: Building Trust Through Transparency][8]

*   Future of Privacy Forum, site web de l'[Application Privacy][9]

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org