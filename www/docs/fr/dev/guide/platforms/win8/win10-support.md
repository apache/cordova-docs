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

title: Cordova pour Windows 10
---

# Cordova pour Windows 10

Peut-être que vous pourriez plutôt l'appeler « Windows 10 pour Cordova. » Windows 10 a eu sa plate-forme HTML et JavaScript Apps repensé pour apporter le soutien de Cordoue sur le web et pour obtenir des restrictions de sécurité de plate-forme hors de votre chemin.

## Getting Started with Windows 10

Ajouter Windows 10 soutien à votre application est aussi facile que l'affectation de votre version de plate-forme cible Windows à 10.0 :

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


Lorsque vous générez avec ces préférences définis tous les deux, seulement un seul .aspx (et .appxupload) seront construits. Ils requièrent Windows 10 au minimum.

### Comprendre le Mode distant vs Local Mode

Mode à distance est une nouvelle fonctionnalité de la plateforme d'Applications Windows HTML dans Windows 10. Windows 8 et 8.1, Applications HTML a travaillé dans ce qu'on appelle « Mode Local » dans Windows 10. En Mode Local, les Applications HTML ont un accès complet à la surface d'API Windows native et les capacités. Afin d'empêcher les attaques par injection de script qui pourraient causer une fuite des informations personnellement identifiables en raison de code malveillant, le Mode Local n'autorise pas de script inline et impose aux développeurs qui effectuent la manipulation du DOM pour ce faire dans un contexte explicit (`MSApp.execUnsafeLocalFunction`).

Mode à distance élimine ces exigences, qui rend possible d'utiliser les bibliothèques non modifiés comme jQuery ou AngularJS directement dans votre code, sans aucune modification. Pour ce faire, il supprime votre capacité de déclarer certaines capacités lorsqu'ils certifient votre application dans le magasin de Windows. La suppression de ces capacités habituellement n'empêche pas arriver à certaines fonctionnalités, mais il pourrait avoir besoin d'utiliser une combinaison différente de l'API ou tactiques.

### Effet de Mode à distance sur les capacités

Les fonctionnalités suivantes ne sont pas disponibles lorsque vous déployez votre application en Mode distant vers le magasin de Windows :

  * Authentification de l'entreprise (`enterpriseAuthentication`)
  * Certificats d'utilisateur partagée (`sharedUserCertificates`)
  * Bibliothèque de documents (`documentsLibrary`)
  * Bibliothèque musicale (`musicLibrary`)
  * Bibliothèque d'images (`picturesLibrary`)
  * Bibliothèque de vidéos (`videosLibrary`)
  * [Stockage](../../../cordova/storage/storage.html) amovible (`removableStorage`)
  * Client/serveur Internet (`internetClientServer`) - Notez `internetClient` est toujours permise
  * Client/serveur de réseau privé (`privateNetworkClientServer`)

Chacune des restrictions bibliothèque peut être contourné en demandant que l'utilisateur interagit avec le système de fichier via un [Sélecteur de fichier](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx). Cela empêche le code malveillant injecté d'arbitrairement accèdent au système de fichier.

Les restrictions liées au réseau doivent être contournées en utilisant une API qui n'utilise pas de capacité de contrôles ou de courtage communication via des canaux de communication internet standard, tels que `XMLHttpRequest` ou Web Sockets.

Les fonctionnalités d'entreprise d'authentification et certificats d'utilisateur partagé visent spécifiquement les scénarios d'entreprise. Ces fonctionnalités sont prises en charge pour privé/entreprise-activé App Stores, donc si vous générez des applications qui vont être déployées à un mécanisme de déploiement interne, vous pouvez toujours soutenir ces. Toutefois, ils ne sont pas supportés pour les applications de Mode à distance dans la Banque publique de Windows. Lorsque vous générez ciblant Windows 10, si une des ces fonctionnalités est détectée dans votre manifeste d'application, un avertissement s'affiche.

## Référence

### config.xml préférences

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*Au moins un est requis.*

Ces préférences identifient la version de Windows ou Windows Phone, vous souhaitez que votre package app pour cible.

**Valeurs valides**

  * `10.0`, `UAP`: construit pour la plate-forme App universelle de Windows 10
  * `8.1`: les versions pour Windows 8.1 ou Windows Phone 8.1
  * `8.0`: construire pour Windows 8.0. Non valide pour Windows Phone (utilisez la plate-forme de Cordova **wp8** plutôt)

**Scénarios**

Si vous ciblez Windows 10 seulement, il vous suffit d'avoir un réglage unique `windos-target-version` dans votre fichier config.xml.

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


Cette préférence détermine si vous souhaitez que votre application pour cibler le **contexte local** ou **distant contexte** comme sa mise en service URI. Lors de la construction pour Windows 10, la valeur par défaut est le contexte distant (`ms-appx-web://`).

Afin d'avoir une application en mode local qui n'est pas affectée par des restrictions de capacité Mode distant, vous devez définir cette préférence `ms-appx://` et ne déclare pas tous les éléments `<access>` avec URI distant.

**Valeurs valides**

  * `ms-appx://` (Par défaut pour Windows 8.0, 8.1): la page de démarrage s'exécute dans le contexte local
  * `ms-appx-web://` (Par défaut pour Windows 10): la page de démarrage s'exécute dans le contexte de distance

#### {SDK}-MinVersion, {SDK}-MaxVersionTested

*En option*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


Ces préférences identifient quels écosystèmes (y compris mais non limité à la Xbox, Windows Mobile ou Windows universel) et leurs versions min/max, elles sont compatibles avec. Ils exigent encore que les plates-formes ont un support pour la plate-forme universelle de l'App (donc Windows 10 car l'OS de base). Toutefois, ceux-ci peuvent indiquer que l'application est au courant d'une fonctionnalité particulière qui ne peut être disponible sur certains périphériques (tels que le jeu en streaming sur Xbox).

**Valeurs valides**

Il y a trois parties à chaque valeur : la **valeur de la version**du **SDK**et la **restriction de version**. Ces préférences sont détectés en commençant par `Windows` ou `Microsoft` et se terminant en `- MinVersion` ou `- MaxVersionTested`:

  * Le **SDK** définit ce que vous souhaitez cibler la plate-forme spécialisée. La valeur par défaut est `Windows.Universal`. Les valeurs valides pour ces derniers sont définis dans le schéma de AppxManifest, dans les éléments de `Package/Depednencies/TargetPlatform` .
  * Le **restriction de version** définit les règles de compatibilité des applications. Par exemple, si la `-MinVersion` a la valeur 10.1.0.0, puis des versions d'OS qui ne supportent pas au moins 10.1.0.0 du SDK correspondant ne sera pas en mesure de le charger.
      * `-MinVersion` spécifie la version minimale du SDK requis
      * `-MaxVersionTested` spécifie la plus élevée testée version du SDK. Si une nouvelle version du SDK correspondant est libérée, il s'exécutera en mode de compatibilité pour la version spécifiée.
  * La **valeur de version** est un tuple 4-entier sous la forme de *major.minor.build.qfe*.

Si aucune préférence de ces types n'est spécifiés dans votre fichier config.xml, puis Windows.Universal version 10.0.0.0 sera choisi par défaut.
