---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
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

*   Configurazione iOS
*   Configurazione Android
*   Configurazione di blackBerry 10

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

*   Il `<name>` elemento specifica il nome dell'app formale, come appare sulla schermata iniziale del dispositivo e all'interno di app store interfacce.

*   Il `<description>` e `<author>` elementi specificano metadati e informazioni di contatto che possono essere visualizzati all'interno di elenchi di app store.

*   L'optional `<content>` elemento definisce la pagina iniziale dell'app nella directory di risorse web di primo livello. Il valore predefinito è `index.html` , che abitualmente viene visualizzata in un progetto di primo livello `www` directory.

*   `<access>`gli elementi definiscono l'insieme di domini esterni che è consentito comunicare con l'app. Il valore predefinito indicato sopra permette di accedere a qualsiasi server. Vedere la guida di dominio Whitelist per dettagli.

*   Il `<preference>` etichetta imposta varie opzioni come coppie di `name` / `value` gli attributi. Ogni preferenza `name` è case-insensitive. Molte preferenze sono univoci per specifiche piattaforme, come elencato nella parte superiore di questa pagina. Le seguenti sezioni dettaglio preferenze valide per più di una piattaforma.

## Preferenze globali

Si applicano le seguenti preferenze globali per tutte le piattaforme:

*   `Fullscreen`consente di nascondere la barra di stato nella parte superiore dello schermo. Il valore predefinito è `false` . Esempio:
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`consente di bloccare l'orientamento e impedire che l'interfaccia rotante in risposta ai cambiamenti nell'orientamento. I valori possibili sono `default` , `landscape` , o `portrait` . Esempio:
    
        <preference name="Orientation" value="landscape" />
        
    
    **Nota**: il `default` valore significa *sia* gli orientamenti orizzontale e verticale sono abilitati. Se si desidera utilizzare le impostazioni di default su ogni piattaforma (solitamente ritratto solo), lasciare questo tag della `config.xml` file.

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
        
    
    Si applica a iOS e BlackBerry.

## La *funzione di* elemento

Se si utilizza la CLI per costruire applicazioni, si utilizza il `plugin` comando per abilitare il dispositivo API. Questo non modifica il livello superiore `config.xml` file, quindi il `<feature>` elemento non si applica al vostro flusso di lavoro. Se si lavora direttamente in un SDK e utilizzando le specifiche della piattaforma `config.xml` file come origine, si utilizza il `<feature>` tag per abilitare il dispositivo-livello API e plugin esterni. Essi appaiono spesso con valori personalizzati nelle specifiche della piattaforma `config.xml` file. Ad esempio, ecco come specificare il dispositivo API per progetti Android:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Ecco come l'elemento appare per progetti di iOS:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Vedere il riferimento API per ulteriori informazioni su come specificare ogni funzionalità. Consultare la guida di sviluppo di Plugin per ulteriori informazioni sul plugin.