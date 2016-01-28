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

title: Shell Android strumento guida
---

# Shell Android strumento guida

Questa guida illustra come utilizzare set di Cordova di piattaforma-centrato shell strumenti per sviluppare applicazioni Android. Questo percorso di sviluppo, discusso nella panoramica, può offrire una maggiore gamma di opzioni di sviluppo che le piattaforme CLI strumento descritto in l'interfaccia della riga di comando. Ad esempio, è necessario utilizzare strumenti di shell quando si distribuisce un'usanza Cordova WebView accanto alle componenti nativi. Prima di utilizzare qualsiasi percorso di sviluppo, è innanzitutto necessario configurare l'ambiente Android SDK come descritto nella guida alla piattaforma Android.

Per attivare strumenti di shell per Android, scaricare Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere ciascuna si desidera fare riferimento, `android` in questo caso. Gli strumenti pertinenti sono in genere disponibili nel primo livello `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Questi strumenti consentono di creare, compilare ed eseguire applicazioni Android. Per informazioni sull'interfaccia della riga di comando aggiuntiva che attiva il plugin funzionalità su tutte le piattaforme, vedere utilizzando Plugman per gestire i plugin. Per dettagli su come sviluppare plugin, vedere applicazione plugin.

## Creare un progetto

Eseguire il `create` comando, specificando il percorso esistente per il progetto, l'identificatore del pacchetto stile retro-dominio e nome visualizzato dell'app. Ecco la sintassi per Mac/Linux e Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Costruire

Questo pulisce poi costruisce un progetto.

Debug, su Windows o Mac/Linux:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Rilascio, su Windows o Mac/Linux:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Eseguire l'applicazione

Il `run` comando accetta i seguenti parametri *facoltativi* :

*   Destinazione specifica. Ciò include `--emulator` , `--device` , o`--target=<targetID>`.

*   Costruire specifiche. Ciò include `--debug` , `--release` , o`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Assicurarsi di creare almeno un Android Virtual Device, altrimenti viene richiesto di farlo con il `android` comando. Se più di una AVD è disponibile come un bersaglio, viene richiesto di selezionare uno. Per impostazione predefinita il `run` comando rileva un dispositivo collegato o un emulatore attualmente in esecuzione, se non viene trovato nessun dispositivo.

## Firma l'App

È possibile rivedere Android app firma requisiti qui: http://developer.android.com/tools/publishing/app-signing.html

Per firmare un'applicazione, è necessario i seguenti parametri:

*   Keystore ( `--keystore` ): percorso di un file binario che può contenere un insieme di chiavi.

*   Password del keystore ( `--storePassword` ): Password per l'archivio chiavi

*   Alias ( `--alias` ): l'id che specifica la chiave privata utilizzata per il canto.

*   Password ( `--password` ): Password per la chiave privata specificata.

*   Tipo del keystore ( `--keystoreType` ): pkcs12, jks (Default: rilevamento automatico basato sull'estensione del file)

Questi parametri possono essere specificati utilizzando gli argomenti della riga di comando sopra a `build` o `run` script.

In alternativa, è possibile specificare loro in un file (build.json) di configurazione compilazione utilizzando ( `--buildConfig` ) argomento. Ecco un esempio di un file di configurazione di compilazione:

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

Per la firma di rilascio, le password possono essere esclusi e il sistema di compilazione emetterà un avviso chiedendo la password.

C'è anche il supporto di mescolare e abbinare gli argomenti della riga di comando e i parametri nel file di build.json. Valori da argomenti della riga di comando avranno la precedenza. Questo può essere utile per specificare le password sulla riga di comando.

## Registrazione

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Pulizia

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Compilazione con Gradle

A partire dal cordova-android@4.0.0, compilazione di progetto utilizzando [Gradle][2]. Per istruzioni sull'edificio con ANT, fare riferimento alle versioni precedenti della documentazione.

 [2]: http://www.gradle.org/

### Proprietà Gradle

Queste [Proprietà][3] possono essere impostate per personalizzare la compilazione:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (impostazione predefinita: false)
    
    Se questo è impostato, quindi verranno generati i file APK multipli: uno per ogni piattaforma nativa supportata da progetti libreria (x86, ARM, ecc). Questo può essere importante se il progetto utilizza grandi librerie native, che possono aumentare drasticamente le dimensioni dell'APK generato.
    
    Se non è impostata, quindi verrà generato un APK singola che può essere utilizzato su tutti i dispositivi.

*   **cdvVersionCode**
    
    Esegue l'override di versionCode impostata`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (impostazione predefinita: rilascio-signing.properties)
    
    Percorso di un file. Properties che contiene informazioni di firma per rilascio costruisce. Il file dovrebbe essere simile:
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword`e `keyPassword` sono facoltativi e verrà chiesto se omesso.

*   **cdvDebugSigningPropertiesFile** (impostazione predefinita: debug-signing.properties)
    
    Come cdvReleaseSigningPropertiesFile, ma per il debug si basa. Utile quando è necessario condividere una chiave di firma con altri sviluppatori.

*   **cdvMinSdkVersion**
    
    Sostituisce il valore di `minSdkVersion` nella `AndroidManifest.xml` . Utile quando si creano più APKs basato sulla versione SDK.

*   **cdvBuildToolsVersion**
    
    Eseguire l'override rilevato automaticamente `android.buildToolsVersion` valore.

*   **cdvCompileSdkVersion**
    
    Eseguire l'override rilevato automaticamente `android.compileSdkVersion` valore.

### Estensione build.gradle

Se avete bisogno di personalizzare `build.gradle` , piuttosto che modificare direttamente, è necessario creare un file di pari livello denominato `build-extras.gradle` . Questo file verrà incluso dai principali `build.gradle` quando è presente. Ecco un esempio:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

Si noti che il plugin può anche includere `build-extras.gradle` file tramite:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### Esempio di compilazione

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true