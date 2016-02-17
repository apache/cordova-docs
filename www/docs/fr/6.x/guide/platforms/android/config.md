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

title: Configuration d'Android
---

# Configuration d'Android

Le fichier `config.xml` supervise les paramètres de base s'appliquant à l'application ainsi qu'à chaque instance de la classe CordovaWebView. Cette section décrit en détail les préférences uniquement liées à la compilation pour Android. Voir [le fichier config.xml File][1] pour plus d'informations sur les options de configuration globale.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning` (boolean, vaut par défaut `true`): Détermine si l'application doit continuer de s'exécuter en arrière-plan, même après le déclenchement d'un événement `[pause](../../../cordova/events/events.pause.html)`. Affectation de `false` ne tue pas l'appli après un `[pause](../../../cordova/events/events.pause.html)` événement, mais simplement s'arrête l'exécution du code dans le webview cordova, tandis que l'application est en arrière-plan.

        <preference name="KeepRunning" value="false"/>


*   `LoadUrlTimeoutValue`(numéro en millisecondes, par défaut à `20000` , à 20 secondes): lors du chargement d'une page, la quantité de temps à attendre avant de lancer une erreur de délai d'attente. Cet exemple définit un délai de 10 secondes au lieu de 20 :

        <preference name="LoadUrlTimeoutValue" value="10000"/>


*   `SplashScreen`(string, la valeur par défaut `splash` ): le nom du fichier moins son extension dans le `res/drawable` répertoire. Divers éléments d'actif doivent partager ce nom commun dans les différents sous-répertoires.

        <preference name="SplashScreen" value="mySplash"/>


*   `SplashScreenDelay`(numéro en millisecondes, par défaut, `3000` ): affiche de l'image de l'écran splash le laps de temps.

        <preference name="SplashScreenDelay" value="10000"/>


*   `InAppBrowserStorageEnabled` (boolean, vaut `true` par défaut) : contrôle si les pages ouvertes dans une fenêtre InAppBrowser accèderont ou non aux même espaces de stockage ([localStorage](../../../cordova/storage/localstorage/localstorage.html) et WebSQL) que celles ouvertes avec le navigateur par défaut.

        <preference name="InAppBrowserStorageEnabled" value="true"/>


*   `LoadingDialog`(string, la valeur par défaut `null` ): si ensemble, affiche un dialogue avec le titre spécifié et le message et d'une fileuse, lors du chargement de la première page d'une application. Le titre et le message sont séparés par une virgule dans cette chaîne de valeur, et cette virgule est supprimée avant que la boîte de dialogue s'affiche.

        <preference name="LoadingDialog" value="My Title,My Message"/>


*   `LoadingPageDialog`(string, la valeur par défaut `null` ): le même que `LoadingDialog` , mais pour le chargement de chaque page après la première page de l'application.

        <preference name="LoadingPageDialog" value="My Title,My Message"/>


*   `ErrorUrl`(URL, valeur par défaut est `null` ): si défini, affichera la page référencée sur une erreur dans l'application au lieu d'un dialogue avec le titre « Erreur d'Application ».

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `ShowTitle`(boolean, la valeur par défaut `false` ): montrer le titre en haut de l'écran.

        <preference name="ShowTitle" value="true"/>


*   `LogLevel`(string, la valeur par défaut `ERROR` ): définit le niveau de journalisation minimale par le biais de quel journal messages depuis votre application seront filtrées. Les valeurs valides sont `ERROR` , `WARN` , `INFO` , `DEBUG` , et`VERBOSE`.

        <preference name="LogLevel" value="VERBOSE"/>


*   `SetFullscreen`(boolean, la valeur par défaut `false` ): identique à la `Fullscreen` paramètre dans la configuration globale de ce fichier xml. Cet élément spécifiques Android est désapprouvé en faveur de la global `Fullscreen` élément et sera supprimée dans une future version.

*   `AndroidLaunchMode`(string, la valeur par défaut `singleTop` ): définit l'activité `android:launchMode` attribut. Cela change de ce qui arrive lorsque l'application est lancée depuis l'icône de l'application ou l'intention et est déjà en cours d'exécution. Les valeurs valides sont `standard` , `singleTop` , `singleTask` ,`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>


*   `DefaultVolumeStream`(string, la valeur par défaut `default` , ajouté dans cordova-android 3.7.0): définit quel volume le volume de matériel boutons lien vers. Par défaut c'est « appeler » pour les téléphones et les « médias » pour les tablettes. Indiquez ce « médias » d'avoir des boutons de volume de votre application à tout moment modifier le volume du média. Notez que lorsque vous utilisez le plugin de médias de Cordova, les boutons de volume vont changer dynamiquement pour contrôler le volume de médias lorsque tous les objets multimédia sont actives.

*   `OverrideUserAgent` (chaîne, ne pas la valeur par défaut): si la valeur, la valeur remplacera l'ancienne UserAgent de webview. Il est utile d'identifier la demande d'app/navigateur lorsque vous demandez des pages éloignées. À utiliser avec prudence, ce qui peut entraîne des problème de compitiable avec des serveurs web. Pour la plupart des cas, utilisez plutôt AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent` (chaîne, ne pas la valeur par défaut): si la valeur, la valeur s'ajoute à la fin du vieux UserAgent de webview. Lors de l'utilisation avec OverrideUserAgent, cette valeur sera ignorée.

        <preference name="AppendUserAgent" value="My Browser" />
