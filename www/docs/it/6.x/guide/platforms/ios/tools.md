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

title: iOS guida strumento Shell
---

# iOS guida strumento Shell

Questa guida illustra come utilizzare set di Cordova di piattaforma-centrato shell strumenti per sviluppare applicazioni iOS. Questo percorso di sviluppo, discusso nella panoramica, può offrire una maggiore gamma di opzioni di sviluppo per iOS rispetto le piattaforme CLI strumento descritto in l'interfaccia della riga di comando. Ad esempio, è necessario utilizzare strumenti di shell quando si distribuisce un'usanza Cordova WebView accanto alle componenti nativi. Prima di utilizzare qualsiasi percorso di sviluppo, è innanzitutto necessario configurare l'ambiente SDK come descritto nella guida piattaforma iOS. Questi strumenti si basano su strumenti della riga di comando di Xcode come `xcode-select` e`xcodebuild`.

Per attivare strumenti di shell per iOS, scaricare Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere ciascuna si desidera fare riferimento, `ios` in questo caso. Gli strumenti pertinenti sono in genere disponibili nel primo livello `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Questi strumenti consentono di creare, compilare ed eseguire applicazioni iOS. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin. Per dettagli su come sviluppare plugin, vedere applicazione plugin.

## Creare un progetto

Eseguire il `create` comando, specificando il percorso esistente per il progetto, l'identificatore del pacchetto stile retro-dominio e nome visualizzato dell'app.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Costruire un progetto

        $ /path/to/my_new_project/cordova/build
    

## Eseguire l'applicazione su un emulatore

        $ /path/to/my_new_project/cordova/run --emulator
    

## Eseguire l'applicazione su un dispositivo

        $ /path/to/my_new_project/cordova/run --device
    

## Firma l'App

È possibile ottenere ulteriori informazioni firma, distribuendo applicazioni iOS, creazione di un certificato e profilo su [iOS Developer Library][2] di provisioning.

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

Per firmare l'app a Cordova è necessario quanto segue:

*   Identità di firma del codice ( `--codeSignIdentity` ): [Usando XCode][3] è possibile creare un nuovo iOS firma identità e aggiungerlo al tuo portachiavi. Il tipo del codice firma identità - in genere di distribuzione o di sviluppo, deve essere specificata qui.

*   Profilo di provisioning ( `--provisioningProfile` ): [utilizzo del centro di membro di Apple][4] è possibile creare un profilo di provisioning. Scarica il profilo di provisioning sulla vostra macchina e lanciarlo in XCode per registrarlo. Qui viene copiato sul vostro Mac: profili ~/Library/MobileDevice/Provisioning\ /. Aprendolo in un editor di testo, è possibile trovare l'UUID che deve essere specificata qui.

*   Codice firma regole delle risorse ( `--codeSignResourceRules` ) (opzionale): consente di specificare le regole di risorsa firma personalizzata.

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6
 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

Questi parametri possono essere specificati utilizzando gli argomenti della riga di comando sopra per `compile` o `run` script:

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

In alternativa, è possibile specificare in un file di configurazione di compilazione (build.json) utilizzando l'argomento (`-buildConfig`). Ecco un esempio di un file di configurazione di generazione:

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

C'è anche il supporto di mescolare e abbinare gli argomenti della riga di comando e i parametri nel file di build.json. Valori da argomenti della riga di comando avranno la precedenza.

## Registrazione

        $ /path/to/my_new_project/cordova/log