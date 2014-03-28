---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Amazon Fire OS Configuration

Le `config.xml` fichier contrôle des paramètres de base de l'application s'appliquent à chaque demande et chaque instance de CordovaWebView. Cette préférences de détails section s'appliquant uniquement aux OS feu Amazon s'appuie. Voir le fichier config.xml File pour plus d'informations sur les options de configuration globale.

*   `KeepRunning`(boolean, la valeur par défaut `true` ): détermine si l'application reste en cours d'exécution en arrière-plan même après une `pause` événement se déclenche.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`: Spécifie une page d'erreur qui s'affiche en réponse à des erreurs HTTP standards dans la gamme de 400-500. Placez le fichier spécifié dans le répertoire contenant la page d'accueil et d'autres ressources web.
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`: Afficher une boîte de dialogue native lors du chargement de l'application. Le format de la valeur est *titre, Message*
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`: Afficher une boîte de dialogue native lors du chargement des pages secondaires au sein d'une application. Le format de la valeur est *titre, Message*
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(nombre, valeur par défaut est `20000` ): lors du chargement d'une page, la quantité de temps à attendre avant de lancer une erreur de délai d'attente. Cet exemple spécifie les 10 secondes au lieu de 20 :
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Le nom du fichier moins son extension dans le `res/drawable` répertoire. Divers éléments d'actif doivent partager ce nom commun dans les différents sous-répertoires.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(numéro, par défaut, `5000` ): affiche de l'image de l'écran splash le laps de temps.
    
        <preference name="SplashScreenDelay" value="10000"/>