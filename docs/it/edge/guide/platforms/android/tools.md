* * *

licenza: licenza uno o più contratti di licenza di collaboratore per l'Apache Software Foundation (ASF). See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

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

## Registrazione

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Pulizia

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Manuale uso di Ant

Se si desidera chiamare Ant direttamente dalla riga di comando, come `ant debug install` , è necessario specificare ulteriori parametri per il comando di formica:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

Ciò è perché le directory utilizzate dagli script Ant di Cordova sono diverse rispetto a quello predefinito. Questo viene fatto per evitare conflitti quando formica viene eseguito dalla riga di comando rispetto all'interno di Eclipse/ADT.

Questi parametri aggiuntivi vengono aggiunti automaticamente per te quando si utilizza il `cordova/build` e `cordova/run` script descritti sopra. Per questo motivo si consiglia di utilizzare il `cordova/build` e `cordova/run` script invece Ant chiamando direttamente dalla riga di comando.

## Edificio con Gradle (sperimentale!)

Cordova per Android ora supporta la costruzione con [Gradle][2]. Facoltativo in Cordova 3. x, ma verrà abilitata di default in futuro, probabilmente con 4.0 di Cordova. Il sistema di generazione è attivato da una variabile di ambiente, che può essere impostata per la shell, o specificata sulla riga di comando a fianco il `cordova build` comando.

 [2]: http://www.gradle.org/

Si prega di notare che le regole di compilazione Gradle sono ancora in sviluppo e saranno probabilmente soggetto a grandi cambiamenti prima Gradle diventa il sistema di compilazione predefinito. Gli sviluppatori sono incoraggiati a provare e sperimentare con esso, ma se si basa il proprio sistema di generazione di produzione sopra di esso, probabilmente vivrete diverse modifiche sopra i prossimi rilasci, prima che stabilizza.

### Variabili di ambiente rilevante

*   **ANDROID _ COSTRUIRE**
    
    Questa variabile determina quale sistema di compilazione viene utilizzato per generare il progetto. In può assumere uno dei valori `ant` o`gradle`.
    
    Se non impostata, attualmente il valore predefinito è `ant` , ma questo dovrebbe cambiare.

### Altre variabili di ambiente (non è normalmente necessario impostare questi)

*   **ANDROID _ CASA**
    
    Questo dovrebbe essere impostato la directory contenente il SDK di Android. Cordova sembra per questo nei percorsi di installazione predefinita, anche guardando la variabile PATH, quindi normalmente non necessita di cornice.

*   **JAVA _ CASA**
    
    Su alcune macchine, questo dovrà essere impostato in modo che Gradle può trovare il compilatore Java.

### Proprietà Gradle

Queste [Proprietà][3] possono essere impostate per personalizzare la compilazione:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**
    
    Se questa proprietà è impostata, allora verranno generati il file APK multipli: uno per ogni piattaforma nativa supportato da progetti libreria (x86, ARM, ecc). Questo può essere importante se il progetto utilizza grandi librerie native, che possono aumentare drasticamente le dimensioni dell'APK generato.
    
    Se non impostato, allora verrà generato un singolo APK che può essere utilizzato su tutti i dispositivi.

*   **cdvVersionCode**
    
    Esegue l'override del versionCode nella`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile**
    
    Costruisce il percorso di un file di Properties contenente le informazioni di firma per rilascio. Il file dovrebbe essere simile:
    
        storeFile=relative/path/to/keystore.p12 storePassword = SECRET1 storeType = pkcs12 keyAlias = DebugSigningKey keyPassword = SECRET2
        
    
    `storePassword`e `keyPassword` sono facoltativi e sarà richiesto se omesso.

*   **cdvDebugSigningPropertiesFile**
    
    Come cdvReleaseSigningPropertiesFile, ma per debug Build. Utile quando hai bisogno di condividere una chiave di firma con altri sviluppatori.

*   **cdvMinSdkVersion**
    
    Esegue l'override del valore di `minSdkVersion` nella `AndroidManifest.xml` . Utile quando si creano più APKs basato sulla versione SDK.

*   **cdvBuildToolsVersion**
    
    Ignorare il rilevamento automatico `android.buildToolsVersion` valore.

*   **cdvCompileSdkVersion**
    
    Ignorare il rilevamento automatico `android.compileSdkVersion` valore.

### Estensione build.gradle

Se avete bisogno di personalizzare `build.gradle` , piuttosto che modificare direttamente, si dovrebbe creare un file di pari livello denominato `build-extras.gradle` . Questo file verrà inclusa di principale `build.gradle` quando presente. Ecco un esempio:

    # Esempio compilazione-extras.gradle # questo file è incluso all'inizio del ext.cdvDebugSigningPropertiesFile 'build.gradle' = '.../../ android-debug-keys.properties' # quando insieme, questa funzione consente al codice di eseguire alla fine del ext.postBuildExtras 'build.gradle' = {android.buildTypes.debug.applicationIdSuffix = 'debug'}
    

### Esempio di compilazione

    esportazione ANDROID_BUILD = gradle esportazione ORG_GRADLE_PROJECT_cdvMinSdkVersion = 14 cordova build android - - gradleArg =-PcdvBuildMultipleApks = true