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

title: Amazon Fire OS Configuration
---

# Amazon Fire OS Configuration

Le `config.xml` fichier contrôle des paramètres de base de l'application s'appliquent à chaque demande et chaque instance de CordovaWebView. Cette préférences de détails section s'appliquant uniquement aux OS feu Amazon s'appuie. Voir [le fichier config.xml File][1] pour plus d'informations sur les options de configuration globale.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(boolean, la valeur par défaut `true` ): détermine si l'application reste en cours d'exécution en arrière-plan même après une `[pause](../../../cordova/events/events.pause.html)` événement se déclenche. Affectation de `false` ne tue pas l'appli après un `[pause](../../../cordova/events/events.pause.html)` événement, mais simplement s'arrête l'exécution du code dans le webview cordova, tandis que l'application est en arrière-plan.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`(URL, valeur par défaut est `null` ): si défini, affichera la page référencée sur une erreur dans l'application au lieu d'un dialogue avec le titre « Erreur d'Application ».
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`(string, la valeur par défaut `null` ): si ensemble, affiche un dialogue avec le titre spécifié et le message et d'une fileuse, lors du chargement de la première page d'une application. Le titre et le message sont séparés par une virgule dans cette chaîne de valeur, et cette virgule est supprimée avant que la boîte de dialogue s'affiche.
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`(string, la valeur par défaut `null` ): le même que `LoadingDialog` , mais pour le chargement de chaque page après la première page de l'application.
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(nombre, valeur par défaut est `20000` ): lors du chargement d'une page, la quantité de temps à attendre avant de lancer une erreur de délai d'attente. Cet exemple spécifie les 10 secondes au lieu de 20 :
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Le nom du fichier moins son extension dans le `res/drawable` répertoire. Divers éléments d'actif doivent partager ce nom commun dans les différents sous-répertoires.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(numéro, par défaut, `5000` ): affiche de l'image de l'écran splash le laps de temps.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `ShowTitle`(boolean, la valeur par défaut `false` ): montrer le titre en haut de l'écran.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(string, la valeur par défaut `ERROR` ): définit le niveau de journalisation minimale par le biais de quel journal messages depuis votre application seront filtrées. Les valeurs valides sont `ERROR` , `WARN` , `INFO` , `DEBUG` , et`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>