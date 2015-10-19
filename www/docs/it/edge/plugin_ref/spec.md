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

title: Plugin Specification
---

# Plugin Specification

La `plugin.xml` file è un documento XML nella `plugins` dello spazio dei nomi: `http://apache.org/cordova/ns/plugins/1.0` . Esso contiene un primo livello `plugin` elemento che definisce il plugin e bambini che definiscono la struttura del plugin.

Un elemento di plugin di esempio:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *plugin* Elemento

Il `plugin` elemento è l'elemento di primo livello del manifesto plugin. Esso presenta i seguenti attributi:

*   `xmlns`(obbligatorio): lo spazio dei nomi di plugin, `http://apache.org/cordova/ns/plugins/1.0` . Se il documento contiene XML da altri spazi dei nomi, ad esempio tag aggiunta alla `AndroidManifest.xml` file, tali spazi dei nomi devono essere compresi nell'elemento di primo livello.

*   `id`(obbligatorio): un dominio inverso di stile come identificatore per il plugin,`com.alunny.foo`

*   `version`(obbligatorio): un numero di versione per il plugin, che corrisponde all'espressione regolare seguente di stile maggiore-minore-patch:
    
        ^\d+[.]\d+[.]\d+$
        

## Elementi *motori* e *motore*

Gli elementi figlio del `<engines>` elemento specificare le versioni di framework basato su Apache Cordova che supporta questo plugin. Un esempio:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

Simile al `<plugin>` dell'elemento `version` attributo, la stringa di versione specificato deve corrispondere una stringa maggiore-minore-patch conforme all'espressione regolare:

        ^\d+[.]\d+[.]\d+$
    

Elementi del motore possono inoltre specificare fuzzy partite per evitare la ripetizione e ridurre la manutenzione quando viene aggiornata la piattaforma sottostante. Strumenti dovrebbero sostenere un minimo di `>` , `>=` , `<` e `<=` , per esempio:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

Il `<engine>` tag ha anche il supporto predefinito per tutte le principali piattaforme Cordova esiste. Specificando il `cordova` tag motore significa che tutte le versioni di Cordova su qualsiasi piattaforma devono soddisfare l'attributo di versione del motore. Si possono elencare anche specifiche piattaforme e le versioni al fine di eseguire l'override del catch-all `cordova` motore:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

Ecco un elenco di default motori che il `<engine>` tag supporta:

*   `cordova`
*   `cordova-plugman`
*   `cordova-amazon-fireos`
*   `cordova-android`
*   `cordova-ios`
*   `cordova-blackberry10`
*   `cordova-wp8`
*   `cordova-windows8`
*   `android-sdk` // returns the highest Android api level installed
*   `apple-xcode` // returns the xcode version 
*   `apple-ios` // returns the highest iOS version installed
*   `apple-osx` // returns the OSX version
*   `blackberry-ndk` // returns the native blackberry SDK version

Specifica quadri personalizzati basati su Apache Cordova dovrebbero essere elencati sotto l'etichetta del motore in questo modo:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Un quadro personalizzato basato su Apache Cordova richiede che un elemento motore include i seguenti attributi: `name` , `version` , `scriptSrc` , e`platform`.

*   `name`(obbligatorio): un nome leggibile per il tuo quadro personalizzato.

*   `version`(richiesto): la versione che il quadro deve avere per poter installare.

*   `scriptSrc`(obbligatorio): il file di script che dice plugman è quale versione di framework personalizzati. Idealmente, questo file deve essere all'interno della directory di livello superiore della directory dei plugin.

*   `platform`(obbligatorio): quali piattaforme che supporta il framework. È possibile utilizzare il carattere jolly `*` per dire supportati per tutte le piattaforme, specificare più con un carattere di pipe come `android|ios|blackberry10` o solo una singola piattaforma come`android`.

plugman viene interrotta con un codice diverso da zero per qualsiasi plugin il cui progetto di destinazione non soddisfa i vincoli del motore.

Se non `<engine>` i tag sono specificati, plugman tenta di installare nella directory del progetto specificato cordova ciecamente.

## *nome* Elemento

Un nome leggibile per il plugin, il cui contenuto di testo contiene il nome del plugin. Ad esempio:

    <name>Foo</name>
    

Questo elemento non (ancora) gestire la localizzazione.

## *Descrizione* Elemento

Una descrizione leggibile per il plugin. Il contenuto di testo dell'elemento contiene la descrizione del plugin. Un esempio:

    <description>Foo plugin description</description>
    

Questo elemento non (ancora) gestire la localizzazione.

## *autore* Elemento

Nome autore del plugin. Il contenuto di testo dell'elemento contiene il nome dell'autore plugin. Un esempio:

    <author>Foo plugin description</author>
    

## *Parole chiavi* Elemento

Parole chiave del plugin. Il contenuto di testo dell'elemento contiene Parole chiavi separate da virgole per descrivere il plugin. Un esempio:

    <keywords>foo,bar</keywords>
    

## *licenza* Elemento

Licenza di plugin. Il contenuto di testo dell'elemento contiene la licenza di plugin. Un esempio:

    <license>Apache 2.0 License</license>
    

## *Asset* Elemento

Uno o più elementi che elenca i file o le directory da copiare in un'app di Cordova `www` directory. Esempi:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

Tutti i `<asset>` tag richiedono entrambi `src` e `target` gli attributi. Solo Web plugin contiene principalmente `<asset>` elementi. Qualsiasi `<asset>` elementi annidati all'interno di `<platform>` elementi specificano risorse specifiche della piattaforma web, come descritto di seguito. Attributi includono:

*   `src`(obbligatorio): dove si trova il file o la directory nel pacchetto di plugin, relativo alla `plugin.xml` documento. Se un file non esiste a specificato `src` posizione, plugman si ferma e inverte il processo di installazione, invia una notifica sul conflitto e termina con un codice diverso da zero.

*   `target` (required):
    
    Dove il file o la directory deve trovarsi nell'app di Cordova, relativo al `www` directory. Beni possono essere mirati alle sottodirectory, ad esempio:
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    Crea il `js/experimental` directory all'interno il `www` directory, a meno che non già presente, quindi copie il `new-foo.js` il file e rinominarlo `foo.js` . Se un file esiste già nella posizione di destinazione, plugman si ferma e inverte il processo di installazione, invia una notifica sul conflitto ed esce con un codice diverso da zero.

## *JS-modulo* Elemento

La maggior parte dei plugin includono uno o più file JavaScript. Ogni `<js-module>` tag corrisponde a un file JavaScript e impedisce agli utenti del plugin di dover aggiungere un `<script>` tag per ogni file. Mentre `<asset>` tag semplicemente copiare un file dalla sottodirectory plugin in `www` , `<js-module>` tag sono molto più sofisticati. Hanno questo aspetto:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Quando si installa un plugin con l'esempio precedente, `socket.js` viene copiato in `www/plugins/my.plugin.id/socket.js` e aggiunto come voce per `www/cordova_plugins.js` . Al momento del caricamento, codice delle `cordova.js` utilizza XHR per leggere ogni file e iniettare un `<script>` tag in HTML. Aggiunge un mapping per clobber o unire più appropriata, come descritto di seguito.

*Non* avvolgere i file con `cordova.define` , come viene aggiunto automaticamente. Il modulo è avvolta da una chiusura, con `module` , `exports` , e `require` in ambito, come è normale per i moduli AMD.

I dettagli per il `<js-module>` tag:

*   Il `src` fa riferimento a un file nella directory dei plugin relativi alla `plugin.xml` file.

*   Il `name` fornisce l'ultima parte del nome del modulo. Generalmente può essere quello che vuoi, e conta solo se si desidera utilizzare `cordova.require` per importare altre parti del vostro plugin nel codice JavaScript. Il nome del modulo per un `<js-module>` è il vostro plugin `id` seguito dal valore di `name` . Per l'esempio precedente, con un `id` di `chrome.socket` , il nome del modulo è`chrome.socket.Socket`.

*   Tre tag sono consentiti all'interno di `<js-module>` :
    
    *   `<clobbers target="some.value"/>`indica che il `module.exports` viene inserito il `window` oggetto come `window.some.value` . Si può avere come molti `<clobbers>` come ti piace. Qualsiasi oggetto non disponibile su `window` viene creato.
    
    *   `<merges target="some.value"/>`indica che il modulo dovrebbe essere unito con qualsiasi valore esistente presso `window.some.value` . Se esiste già un tasto qualsiasi, versione del modulo sostituisce l'originale. Si può avere come molti `<merges>` come ti piace. Qualsiasi oggetto non disponibile su `window` viene creato.
    
    *   `<runs/>`significa che il codice deve essere specificato con `cordova.require` , ma non installato il `window` oggetto. Questo è utile durante l'inizializzazione del modulo, associare gestori eventi o altrimenti. Si può avere solo fino a uno `<runs/>` tag. Si noti che, tra cui un `<runs/>` con `<clobbers/>` o `<merges/>` è ridondante, dato che anche `cordova.require` il tuo modulo.
    
    *   Un vuoto `<js-module>` ancora carica e può essere letta in altri moduli`cordova.require`.

Se `src` non si risolve in un file esistente, plugman si ferma e inverte l'installazione, invia una notifica del problema ed esce con un codice diverso da zero.

Nidificazione di `<js-module>` elementi all'interno di `<platform>` dichiara le specifiche della piattaforma JavaScript modulo associazioni.

## *dipendenza* Elemento

Il `<dependency>` tag consente di specificare altri plugin da cui dipende l'attuale plugin. Mentre le versioni future li avrà accesso dai repository dei plugin, a breve termine plugin direttamente fanno riferimento come URL di `<dependency>` tag. Sono formattati come segue:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: fornisce l'ID del plugin. Dovrebbe essere univoco globale ed espresse in stile retro-dominio. Mentre nessuna di queste restrizioni è attualmente applicata, possono essere in futuro.

*   `url`: Un URL per il plugin. Questo dovrebbe fare riferimento a un repository git, quali plugman tenta di clonare.

*   `commit`: Si tratta di qualsiasi riferimento di git compreso da `git checkout` : un nome del ramo o tag (ad es., `master` , `0.3.1` ), o un commit hash (ad es.,`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Specifica che il plugin mirate dipendenza esiste come una sottodirectory del repository git. Questo è utile perché permette al repository di contenere diversi plugin correlati, ciascuno individualmente specificati.

In futuro, saranno introdotto vincoli versione e un repository dei plugin esisterà per supportare il recupero di nome anziché gli URL espliciti.

### Percorsi di dipendenza relativa

Se si imposta la `url` di un `<dependency>` tag per `"."` e fornire una `subdir` , è installato il plugin dipendente dallo stesso locale o remoto git repository come il plugin di padre che specifica il `<dependency>` tag.

Si noti che la `subdir` sempre specifica un percorso relativo alla *radice* del repository git, non il padre di plugin. Questo è vero anche se è stato installato il plugin con un percorso locale direttamente ad esso. Plugman trova la radice del repository git e poi trova l'altro plugin da lì.

## *piattaforma* Elemento

Il `<platform>` etichetta identifica le piattaforme che hanno associato il codice nativo o richiedono modifiche ai loro file di configurazione. Strumenti utilizzando questa specifica possono identificare piattaforme supportate e installare il codice nei progetti di Cordova.

Plugin senza `<platform>` tag sono presupposte per essere solo JavaScript e quindi installabile su tutte le piattaforme.

Un tag di piattaforma del campione:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

La richiesta `name` attributo identifica una piattaforma, come sostenuto, associando i bambini dell'elemento con quella piattaforma.

Nomi di piattaforma dovrebbero essere minuscoli. Nomi di piattaforma, come arbitrariamente scelti, sono elencati:

*   Amazon-fireos
*   Android
*   BlackBerry 10
*   iOS
*   wp8
*   windows8

## *file di origine* Elemento

Il `<source-file>` elemento identifica il codice eseguibile sorgente che deve essere installato in un progetto. Esempi:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

Esso supporta i seguenti attributi:

*   `src`(obbligatorio): percorso del file relativo a `plugin.xml` . Se il `src` Impossibile trovare il file, plugman si ferma e inverte l'installazione, invia una notifica sul problema e si chiude con un codice diverso da zero.

*   `target-dir`: Una directory in cui devono essere copiati i file, relativo alla radice del progetto Cordova. In pratica, questo è più importante per piattaforme basate su Java, dove un file nella `com.alunny.foo` pacchetto deve essere situato il `com/alunny/foo` directory. Per le piattaforme dove la directory di origine non è importante, questo attributo deve essere omesso.
    
    Come con i beni, se il `target` di un `source-file` sarebbe sovrascrivere un file esistente, plugman si ferma e inverte l'installazione, invia una notifica sul problema e si chiude con un codice diverso da zero.

*   `framework`(solo iOS): se impostato su `true` , inoltre aggiunge il file specificato come un quadro di riferimento al progetto.

*   `compiler-flags`(solo iOS): se impostato, assegna i flag del compilatore specificato per il file di origine specifico.

## *config-file* Elemento

Identifica un file di configurazione basata su XML per essere modificata, dove in quel documento la modifica dovrebbe avvenire, e ciò che deve essere modificata.

Due tipi di file che sono stati testati per la modifica con questo elemento sono `xml` e `plist` file.

Il `config-file` elemento consente solo di aggiungere nuovi bambini a un albero del documento XML. I bambini sono valori letterali XML per essere inserito nel documento di destinazione.

Esempio di XML:

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

Esempio per `plist` :

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

Esso supporta i seguenti attributi:

*   `target`:
    
    Il file deve essere modificato e il percorso relativo alla radice del progetto Cordova.
    
    La destinazione può includere caratteri jolly ( `*` ) elementi. In questo caso, in modo ricorsivo plugman cerca attraverso la struttura di directory del progetto e utilizza la prima partita.
    
    Su iOS, il percorso dei file di configurazione relativo alla radice della directory del progetto non è noto, quindi specificando una destinazione `config.xml` si risolve in`cordova-ios-project/MyAppName/config.xml`.
    
    Se il file specificato non esiste, lo strumento ignora il cambiamento di configurazione e continua l'installazione.

*   `parent`: Un selettore XPath che fa riferimento il padre degli elementi da aggiungere al file di configurazione. Se si utilizzano selettori assolute, è possibile utilizzare un carattere jolly ( `*` ) per specificare l'elemento radice, ad esempio,`/*/plugins`.
    
    Per `plist` file, il `parent` determina quale chiave padre XML specificato deve essere inserito.
    
    Se il selettore non si risolve in un bambino del documento specificato, il tool si ferma ed inverte il processo di installazione, genera un avviso ed esce con un codice diverso da zero.

*   `after`: Un elenco prioritario dei fratelli accettati dopo di che aggiungere il frammento XML. Utile per specificare le modifiche nei file che richiedono ordine rigido di elementi XML come <http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement>

La piattaforma Windows supporta due attributi aggiuntivi (entrambi optional) quando colpisce il meta-nome `package.appxmanifest`:

Il `device-target` attributo indica che il deve essere incluso solo quando la costruzione per il tipo di periferica di destinazione specificata. Valori supportati sono `win`, `phone`o `all`.

L'attributo `versions` indica che manifesti di app per versioni specifiche di Windows dovrebbero essere modificati solo per le versioni che corrispondono alla stringa di versione specificato. Valore può essere qualsiasi stringa di gamma versione semantico nodo valido.

Esempi di utilizzo di questi attributi specifici di Windows:

    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="<8.1.0">
        <Capability Name="picturesLibrary" />
        <DeviceCapability Name="webcam" />
    </config-file>
    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
        <DeviceCapability Name="webcam" />
    </config-file>
    

L'esempio sopra imposterà pre-8.1 piattaforme (Windows 8, in particolare) richiedono la funzionalità del dispositivo di `webcam` e la capacità generale di `picturesLibrary` , e applicare la funzionalità del dispositivo `webcam` solo per progetti Windows 8.1 che costruiamo per Windows Phone. Windows desktop 8.1 sistemi sono non modificati.

## *plugin-plist* Elemento

Questo è *superata* in quanto si applica solo a cordova-ios 2.2.0 e sotto. Utilizzare il tag `< config-file >` versioni più recenti di Cordova.

Esempio:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Specifica una chiave e un valore da aggiungere al file `AppInfo.plist` corretto in un progetto di Cordova iOS. Per esempio:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## Elementi del *file di risorse* e *file di intestazione*

Come file di origine, ma in particolare per piattaforme come iOS che distinguere tra i file di origine, intestazioni e risorse. Esempi di iOS:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Esempio di Android:

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
    

## *lib-file* Elemento

Come sorgente, risorse e file di intestazione, ma specificamente per piattaforme come BlackBerry 10 che utilizzare librerie generati dagli utenti. Esempi:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Attributi supportati:

*   `src`(obbligatorio): il percorso del file relativo a `plugin.xml` . Se `src` non viene trovato, plugman si ferma e inverte l'installazione, problemi un avvertimento circa il problema ed esce con un codice diverso da zero.

*   `arch`: L'architettura per la quale il `.so` file è stato costruito, o `device` o`simulator`.

Per la piattaforma Windows, elemento `< lib-file >` permette l'inserimento di un `< SDKReference >` nel file di progetto di Windows generati.

Attributi supportati:

*   `src`(obbligatorio): il nome di SDK per includere (che verrà utilizzato come valore del `Include` attributo di generato `<SDKReference>` elemento).

*   `arch`: Indica che il `<SDKReference>` deve essere incluso solo quando si costruisce per l'architettura specificata. Valori supportati sono `x86` , `x64` o`ARM`.

*   `device-target`: Indica che il `<SDKReference>` deve essere incluso solo durante la compilazione per il tipo di periferica di destinazione specificato. Valori supportati sono `win` (o `windows` ), `phone` o`all`.

*   `versions`: Indica che il `<SDKReference>` deve essere incluso solo durante la compilazione per le versioni che corrispondono alla stringa di versione specificata. Valore può essere qualsiasi stringa di intervallo semantico versione nodo valido.

Esempi:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *quadro* Elemento

Identifica un quadro (solitamente parte della piattaforma/OS) su cui il plugin dipende.

L'attributo facoltativo `custom` è un valore booleano che indica se il quadro è quello che è incluso come parte del vostro file di plugin (quindi non è un quadro di sistema).

### *framework* per iOS

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    

L'attributo facoltativo `weak` è un valore booleano che indica se il quadro dovrebbe essere debolmente collegato. Il valore predefinito è `false`.

### *framework* per Android

Su Android (al cordova-android@4.0.0), *framework* tag vengono utilizzati per includere le dipendenze Maven, o per includere progetti libreria in dotazione.

Esempi:

    <!-- Depend on latest version of GCM from play services -->
    <framework src="com.google.android.gms:play-services-gcm:+" />
    <!-- Depend on v21 of appcompat-v7 support library -->
    <framework src="com.android.support:appcompat-v7:21+" />
    <!-- Depend on library project included in plugin -->
    <framework src="relative/path/FeedbackLib" custom="true" />
    

*framework* è utilizzabile anche per avere i file personalizzati .gradle sub-inclusi nel file .gradle del progetto principale:

    <framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
    

Per pre-android@4.0.0 (progetti basati su ANT):

Il `type` di attributo facoltativo è una stringa che indica il tipo di framework per aggiungere. È supportato attualmente solo `projectReference` e solo per Windows. Utilizzando `custom='true'` e `type='projectReference'` verrà aggiunto un riferimento al progetto che verrà aggiunto alla compilazione + link passi del progetto cordova. Questo essenzialmente è l'unico modo attualmente che un framework 'personalizzato' possono essere eseguite più architetture come sono costruiti in modo esplicito come una dipendenza di riferimento applicazione di cordova.

Il opzionale `parent` imposta il percorso relativo alla directory contenente il sotto-progetto a cui aggiungere il riferimento. Il valore predefinito è `.`, cioè il progetto di applicazione. Permette di aggiungere riferimenti tra sub progetti come in questo esempio:

    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

### *framework* per Windows

La piattaforma Windows supporta tre attributi aggiuntivi (facoltativi) per perfezionare quando il quadro dovrebbe essere incluso:

    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

L'attributo di `arch` indica che il quadro deve essere incluso solo quando si costruisce per l'architettura specificata. Valori supportati sono `x86`, `x64` o `ARM`.

L'attributo `device-target` indica che il quadro deve essere incluso solo durante la compilazione per il tipo di periferica di destinazione specificato. Valori supportati sono `win` (o `windows`), `phone` o `all`.

L'attributo di `versions` indica che il quadro deve essere incluso solo durante la compilazione per le versioni che corrispondono alla stringa di versione specificata. Valore può essere qualsiasi stringa di intervallo semantico versione nodo valido.

Esempi di utilizzo di questi attributi specifici di Windows:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *info* Elemento

Ulteriori informazioni fornite agli utenti. Ciò è utile quando si richiedono passaggi aggiuntivi che non possono essere facilmente automatizzati o ambito di plugman. Esempi:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## *hook* Elemento

Rappresenta lo script personalizzato che verrà chiamato da Cordova quando certa azione si verifica (ad esempio, viene richiamato dopo plugin viene aggiunto o piattaforma preparare logica). Questo è utile quando è necessario estendere le funzionalità predefinite di Cordova. Per ulteriori informazioni, vedere la [Guida di ganci](../guide/appdev/hooks/index.html).

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    

## Variabili

In alcuni casi, potrebbe essere necessario apportare modifiche alla configurazione dipende l'applicazione di destinazione un plugin. Ad esempio, per iscriversi C2DM su Android, un'app di cui id di pacchetto è `com.alunny.message` richiederebbe un'autorizzazione quali:

    <uses-permission android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

In tali casi dove il contenuto inserito da `plugin` . xml file non è noto in anticipo, le variabili possono essere indicate da un segno di dollaro seguito da una serie di lettere maiuscole, cifre o caratteri di sottolineatura. Per l'esempio precedente, il file di `plugin.xml` includerebbe questo tag:

    <uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

Plugman sostituisce i riferimenti alle variabili con il valore specificato, o una stringa vuota se non viene trovato. Il valore del riferimento variabile può essere rilevato (in questo caso, dal file `AndroidManifest. XML` ) o specificato dall'utente dello strumento; il processo esatto dipende dal particolare strumento.

Plugman possibile richiedere agli utenti di specificare le variabili necessarie di un plugin. Ad esempio, i tasti per C2M e Google Maps API possono essere specificati come un argomento della riga di comando:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Per rendere obbligatoria la variabile, il tag `< platform >` deve contenere un tag `< preference >` . Per esempio:

    <preference name="API_KEY" />
    

Plugman controlla che queste preferenze richieste vengono passate. Se così non fosse, si dovrebbe mettere in guardia l'utente come passare la variabile in e uscire con un codice diverso da zero.

Alcuni nomi di variabile dovrebbero essere riservati, come elencato di seguito.

## $PACKAGE_NAME

L'identificatore univoco di stile retro-dominio per il pacchetto, corrispondente a `CFBundleIdentifier` su iOS o l'attributo del `package` dell'elemento di primo livello `manifest` in un file `AndroidManifest. XML` .