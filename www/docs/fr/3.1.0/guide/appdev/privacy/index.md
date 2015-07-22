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

title: Guide de la vie privée
---

# Guide de la vie privée

Confidentialité mobile est une question essentielle que chaque développeur d'application doit relever. Vos utilisateurs s'attendent que leurs renseignements personnels seront recueillis et traités correctement par votre application. En outre, il y a un nombre croissant de juridictions qui ont maintenant des exigences légales concernant les pratiques de confidentialité mobile.

Ce guide sur la vie privée de l'application mobile devrait considérer un *apprêt* questions peu le plus significatif. Il décrit certaines meilleures pratiques généralement acceptées et fournit des références à d'autres guides plus détaillées et les références.

*   **Politique de confidentialité**: vous app devrait inclure une politique de confidentialité qui traite de sujets tels que quelles informations votre app recueille auprès ou au sujet de vos utilisateurs, comment cette information est utilisée, avec lesquels il est partagé, et comment les utilisateurs peuvent faire des choix relatifs à la vie privée au sein de l'app. Pour faciliter la compréhension, vous devez utiliser un langage simple et éviter le jargon technique. Vous devriez faire votre politique de confidentialité disponible pour les utilisateurs d'examiner avant le téléchargement, comme dans la description de l'app dans la Galerie d'apps. En outre, vous devez vous votre politique de confidentialité, disponible dans l'application elle-même. La taille réduite des périphériques mobiles crée des difficultés pour afficher les politiques de confidentialité aux utilisateurs. Envisager l'élaboration d'une *version abrégée* de la politique qui inclut l'information la plus importante et ensuite fournir un lien vers la politique de « forme longue » pour ceux qui s'intéressent de façon plus détaillée. Plusieurs groupes tentent d'élaborer des normes de base d'icônes pour la communication des pratiques de confidentialité, qui vous voudrez peut-être une fois que ces normes.

*   **Collecte d'informations sensibles**: collection de l'application des informations personnelles sensibles soulève des préoccupations importantes de la vie privée. Exemples de renseignements personnels sensibles des renseignements financiers, santé information et information auprès ou au sujet des enfants. Il comprend également des informations recueillies auprès de certains capteurs et bases de données que se trouves généralement sur les appareils mobiles et tablettes, telles que des informations de géolocalisation, contacts/annuaire téléphonique, microphone/appareil photo et des photos ou des vidéos stockées. Voir les pages suivantes de la documentation pour plus d'informations : [caméra][1], [capturer][2], [contacts][3]et [géolocalisation][4]. En règle générale, vous devez obtenir l'autorisation expresse de l'utilisateur avant de recueillir des informations sensibles et, si possible, fournir un mécanisme de contrôle qui vous permet de facilement modifier les autorisations. Systèmes d'exploitation app peut aider dans certains cas par la présentation des boîtes de dialogue de juste-à-temps demandent la permission de l'utilisateur avant le prélèvement. Dans ces cas, n'oubliez pas de profiter de toute occasion pour personnaliser le texte de boîte de dialogue afin de préciser comment le soft utilise et, le cas échéant, partage ces informations.

*   **Éviter la surprise de l'utilisateur**: Si votre app recueille ou utilise les informations d'une manière qui peut être surprenante pour les utilisateurs à la lumière de l'objectif principal de votre application (par exemple, un lecteur de musique qui accède à des photos stockées), vous devez prendre des mesures analogues comme pour la collecte des informations personnelles sensibles. C'est-à-dire, vous devez envisager fortement l'utilisation de boîtes de dialogue juste-à-temps pour informer l'utilisateur de la collection ou l'utilisation de ces informations et, le cas échéant, fournir un contrôle de confidentialité correspondant.

*   **Collecte de données de tiers ou de partage**: Si vous app rassemble l'information qui est fournie à une autre société--comme une plateforme de réseau social ou d'un réseau ad (par exemple, si votre application affiche publicitaire)--vous devez en informer vos utilisateurs de cette collection et le partage. Au minimum, votre politique de confidentialité devrait décrire la collecte de l'information et de partage et, le cas échéant, offrir à vos utilisateurs la capacité de contrôle ou opt-out de cette collecte ou le partage.

*   **Sécurité et limitation de la collecte**: vos utilisateurs confient votre app avec leurs informations et qu'ils attendent que vous prendrez des précautions de sécurité appropriées pour le protéger. Un des meilleurs moyens de ne pas compromettre la sécurité des renseignements personnels est ne pas à collecter les informations en premier lieu, à moins que votre application a une raison d'affaires spécifiques et légitimes pour la collection. Pour plus d'informations qui a besoin d'être recueillis, vous assurer de fournir des contrôles de sécurité appropriés pour protéger cette information, si elle est stockée sur l'appareil ou sur vos serveurs back-end. Vous devez également développer une stratégie de rétention de données appropriées qui est mis en œuvre au sein de l'app et sur vos serveurs back-end.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

Voici quelques guides de confidentialité mobile utile accrue pour les développeurs :

*   Procureur général de la Californie, [la vie privée sur le pouce : recommandations pour l'écosystème Mobile][5]

*   Center for Democracy & Technology, Future of Privacy Forum, [meilleures pratiques pour les développeurs d'applications mobiles][6]

*   CTIA-la liaison sans fil, [Services basés sur les meilleures pratiques et conseils pour Location][7]

*   Federal Trade Commission, [communications mobiles de la vie privée : instaurer la confiance par le biais de transparence][8]

*   Future of Privacy Forum, site Web [demande de confidentialité][9]

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org