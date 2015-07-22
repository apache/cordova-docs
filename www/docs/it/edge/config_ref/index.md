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

title: Il File config. Xml
---

# Il File config. Xml

Molti aspetti del comportamento di un'app possono essere controllati con un file di configurazione globale, `config.xml` . Questo file XML indipendente dalla piattaforma è organizzato basato sulla specifica [Confezionato Web Apps (widget)][1] del W3C ed esteso per specificare le caratteristiche di nucleo API di Cordova, plugins e impostazioni specifiche della piattaforma.

 [1]: http://www.w3.org/TR/widgets/

Per i progetti creati con Cordova CLI (descritto in The Command-Line Interface), questo file si trova nella directory principale:

        app/config.xml
    

Si noti che prima versione 3.3.1-0.2.0, il file esisteva a `app/www/config.xml` , e che averlo qui è ancora supportato.

Quando si utilizza la CLI per costruire un progetto, versioni di questo file vengono copiati passivamente in vari `platforms/` sottodirectory, ad esempio:

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

In questa sezione in dettaglio le opzioni di configurazione globale e multi-piattaforma. Vedere le sezioni seguenti per le opzioni specifiche della piattaforma:

*   [Configurazione iOS](../guide/platforms/ios/config.html)
*   [Configurazione Android](../guide/platforms/android/config.html)
*   [Configurazione di blackBerry 10](../guide/platforms/blackberry10/config.html)

Oltre le varie opzioni di configurazione descritte di seguito, è possibile configurare anche set di base di un'applicazione delle immagini per ogni piattaforma di destinazione. Per ulteriori informazioni, vedere icone e schermate iniziali.

## Elementi di configurazione del nucleo

In questo esempio viene illustrato il valore predefinito `config.xml` generato dal CLI `create` comando, descritto in l'interfaccia della riga di comando:

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

Gli elementi di configurazione seguenti appaiono nel primo livello `config.xml` del file e sono supportati su tutte le piattaforme supportate di Cordova:

*   Il `<widget>` dell'elemento `id` attributo fornisce l'identificatore di dominio inverso dell'app e la `version` il numero di versione completo espresso nella notazione di maggiore/minore/patch.
    
    Il tag widget può anche avere attributi che specificano le versioni alternative, vale a dire versionCode per Android e CFBundleVersion per iOS. Vedere la sezione delle ulteriori versioni per dettagli.

*   Il `<name>` elemento specifica il nome dell'app formale, come appare sulla schermata iniziale del dispositivo e all'interno di app store interfacce.

*   Il `<description>` e `<author>` elementi specificano metadati e informazioni di contatto che possono essere visualizzati all'interno di elenchi di app store.

*   L'optional `<content>` elemento definisce la pagina iniziale dell'app nella directory di risorse web di primo livello. Il valore predefinito è `index.html` , che abitualmente viene visualizzata in un progetto di primo livello `www` directory.

*   `<access>`gli elementi definiscono l'insieme di domini esterni che è consentito comunicare con l'app. Il valore predefinito indicato sopra permette di accedere a qualsiasi server. Vedere la guida di dominio Whitelist per dettagli.

*   Il `<preference>` etichetta imposta varie opzioni come coppie di `name` / `value` gli attributi. Ogni preferenza `name` è case-insensitive. Molte preferenze sono univoci per specifiche piattaforme, come elencato nella parte superiore di questa pagina. Le seguenti sezioni dettaglio preferenze valide per più di una piattaforma.

### Controllo delle versioni aggiuntiva

Entrambi, Android e iOS supporta una seconda stringa di versione (o numero) oltre a quello visibile in app store, [versionCode][2] per Android e [CFBundleVersion][3] per iOS. Di seguito è riportato un esempio che imposta in modo esplicito versionCode e CFBundleVersion

 [2]: http://developer.android.com/tools/publishing/versioning.html
 [3]: http://stackoverflow.com/questions/4933093/cfbundleversion-in-the-info-plist-upload-error

        <widget id="io.cordova.hellocordova"
          version="0.0.1"
          android-versionCode="7"
          ios-CFBundleVersion="3.3.3">
    

Se non viene specificata la versione alternativa, verranno utilizzati i seguenti valori predefiniti:

        // assuming version = MAJOR.MINOR.PATCH-whatever
        versionCode = PATCH + MINOR * 100 + MAJOR * 10000
        CFBundleVersion = "MAJOR.MINOR.PATCH"
    

## Preferenze globali

Si applicano le seguenti preferenze globali per tutte le piattaforme:

*   `Fullscreen` consente di nascondere la barra di stato nella parte superiore dello schermo. Il valore predefinito è `false` . Esempio:
    
        <preference name="Fullscreen" value="true" />
        

## Preferenze di multi-piattaforma

Per più di una piattaforma, ma non a tutte le, si applicano le seguenti preferenze:

*   `DisallowOverscroll`(boolean, impostazioni predefinite a `false` ): impostare su `true` se non volete l'interfaccia per visualizzare tutte le risposte, quando gli utenti scorrere dopo l'inizio o la fine del contenuto.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    Vale per Android e iOS. IOS, causa di gesti overscroll contenuto rimbalzare indietro nella sua posizione originale. Su Android, producono un effetto incandescente più sottile lungo il bordo superiore o inferiore del contenuto.

*   `BackgroundColor`: Impostare il colore di sfondo dell'app. Supporta un valore esadecimale di quattro byte, con il primo byte che rappresenta il canale alfa e valori RGB standard per i seguenti tre byte. Questo esempio specifica blu:
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    Vale per Android e BlackBerry. Esegue l'override CSS altrimenti disponibile in *tutte le* piattaforme, ad esempio:`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(boolean, impostazioni predefinite a `false` ): impostare su `true` per nascondere la barra degli strumenti aggiuntiva che appare sopra la tastiera, aiutando gli utenti a navigare da un input di una forma a altra.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    Si applica a BlackBerry.

*   `orientation` (stringhe, valori predefiniti per `default`): consente di bloccare l'orientamento ed evitare l'interfaccia ruoti in risposta ai cambiamenti nell'orientamento. I possibili valori sono `default`, `landscape` o `portrait`. Esempio:
    
        <preference name="Orientation" value="landscape" />
        
    
    Inoltre, è possibile specificare qualsiasi valore di orientamento specifico della piattaforma, se si inserisce l'elemento `<preference>` all'interno di un elemento `<platform>`:
    
        <platform name="android">
            <preference name="Orientation" value="sensorLandscape" />
        </platform>
        
    
    Vale per Android, iOS, WP8, Amazon fuoco OS e OS di Firefox.
    
    **Nota**: il valore `default` significa Cordova rimuoverà l'entrata di preferenza di orientamento da file di manifesto/configurazione della piattaforma che permette alla piattaforma di fallback per il comportamento predefinito.
    
    Per iOS, per specificare entrambi ritratto & modalità orizzontale si utilizzerà `all`piattaforma valore specifico:
    
        <platform name="ios">
            <preference name="Orientation" value="all" />
        </platform>
        
## La *funzione di* elemento

Se si utilizza la CLI per costruire applicazioni, si utilizza il comando `plugin` per abilitare dispositivo API. Questo non modifica il file di primo livello `config. XML` , quindi l'elemento `< feature >` non si applica al vostro flusso di lavoro. Se si lavora direttamente in un SDK e utilizzando il file di specifica della piattaforma `config. XML` come origine, si utilizza il tag `< feature >` abilitare dispositivo-livello API e plugin esterni. Essi appaiono spesso con i valori personalizzati nel file specifici della piattaforma `config. XML` . Ad esempio, ecco come specificare il Device API per progetti Android:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Ecco come appare l'elemento per i progetti di iOS:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Vedere il riferimento API per dettagli su come specificare ogni funzionalità. Vedere la Guida allo sviluppo di Plugin per ulteriori informazioni sui plugin.

## La *platform* elemento

Quando si utilizza la CLI per costruire applicazioni, a volte è necessario specificare preferenze o altri elementi specifici di una particolare piattaforma. Utilizzare l'elemento `< piattaforma >` per specificare la configurazione che dovrebbe apparire solo in un file di singolo specifico della piattaforma `config. XML` . Ad esempio, ecco come specificare che solo android dovrebbe utilizzare la preferenza a schermo intero:

        <platform name="android">
            <preference name="Fullscreen" value="true" />
        </platform>
    

## Il *hook* elemento

Rappresenta lo script personalizzato che verrà chiamato da Cordova quando certa azione si verifica (ad esempio, viene richiamato dopo plugin viene aggiunto o piattaforma preparare logica). Questo è utile quando è necessario estendere le funzionalità predefinite di Cordova. Per ulteriori informazioni, vedere la [Guida di ganci](../guide/appdev/hooks/index.html).

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />