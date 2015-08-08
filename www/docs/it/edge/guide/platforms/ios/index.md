---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# iOS guida piattaforma

Questa guida illustra come impostare il vostro ambiente di sviluppo SDK per distribuire Cordova apps per i dispositivi iOS come iPhone e iPad. Vedere la seguente per informazioni più dettagliate specifiche della piattaforma:

*   Configurazione iOS
*   L'aggiornamento iOS
*   iOS visualizzazioni Web
*   iOS Plugins
*   iOS Command-line Tools

Gli strumenti della riga di comando qui sopra si riferiscono a versioni precedenti alla 3.0 di Cordova. Per informazioni sull'interfaccia corrente, vedere l'interfaccia della riga di comando.

## Requisiti e supporto

Apple ® gli strumenti necessari per costruire applicazioni iOS eseguite solo sul sistema operativo OS X sui Mac basati su Intel. Xcode ® 6.0 (la versione minima richiesta) funziona solo su OS X versione 10.9 (Mavericks) o maggiore e comprende 8 iOS SDK (Software Development Kit). A presentare le apps per il App Store℠ Apple richiede le ultime versioni degli strumenti Apple.

È possibile testare molte delle funzionalità di Cordova utilizzando l'emulatore di iOS installato con l'iOS SDK e Xcode, ma è necessario un dispositivo reale pienamente tutte le caratteristiche del dispositivo dell'app testare prima di presentare all'App Store. Il dispositivo deve avere almeno iOS 6. x installato, la versione di iOS minima supportata a partire da 3.0 a Cordova. Dispositivi di sostegno comprendono tutti gli iPad ® modelli, iPhone ® 3GS e sopra e iPod ® Touch di terza generazione o successiva. Per installare applicazioni su un dispositivo, è necessario essere anche un membro di Apple [iOS Developer Program][1], che costa $99 all'anno. Questa guida viene illustrato come distribuire applicazioni all'emulatore di iOS, per cui non è necessario registrarsi con il programma per gli sviluppatori.

 [1]: https://developer.apple.com/programs/ios/

[Ios-sim][2] e [ios-deploy][3] strumenti - permette di lanciare applicazioni iOS nel simulatore di iOS e iOS Device dalla riga di comando.

 [2]: https://www.npmjs.org/package/ios-sim
 [3]: https://www.npmjs.org/package/ios-deploy

## Installare il SDK

Ci sono due modi per scaricare Xcode:

*   da [App Store][4], disponibile attraverso la ricerca di "Xcode" nell'applicazione **App Store** .

*   da [Apple Developer Downloads][5], che richiede la registrazione come un Apple Developer.

 [4]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [5]: https://developer.apple.com/downloads/index.action

Una volta installato Xcode, necessario essere abilitato per Cordova eseguire diversi strumenti da riga di comando. Nel menu di **Xcode** , selezionare **preferenze**, quindi la scheda **Downloads** . Dal pannello **componenti** , premere il pulsante **Installa** accanto la quotazione di **Strumenti da riga di comando** .

## Installare distribuire strumenti

Eseguire da terminale di comman-linea:

        $ npm install -g ios-sim
        $ npm install -g ios-deploy


## Creare un nuovo progetto

Utilizzare l'utilità di `cordova` per impostare un nuovo progetto, come descritto in The Cordova le Command-Line Interface. Ad esempio, in una directory del codice sorgente:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


## Distribuire l'applicazione

Per distribuire l'applicazione su un dispositivo iOS connesso:

        $ cordova run ios --device


Per distribuire l'applicazione su un emulatore di default iOS:

        $ cordova emulate ios


È possibile utilizzare **cordova run ios --list** per vedere tutte le destinazioni disponibili e **cordova run ios --target=target_name** per eseguire l'applicazione su un dispositivo specifico o l'emulatore (per esempio, `cordova run ios --target="iPhone-6"`).

È possibile utilizzare anche **cordova run --help** vedere compilazione supplementari ed eseguire le opzioni.

## Aprire un progetto in SDK

Una volta che la piattaforma ios è aggiunto al progetto, puoi aprirlo all'interno di Xcode. Fare doppio clic per aprire il file `hello/platforms/ios/hello.xcodeproj` . Lo schermo dovrebbe apparire così:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## Distribuire all'emulatore

Per visualizzare in anteprima l'applicazione nell'emulatore di iOS:

1.  Assicurarsi che il file *.xcodeproj* è selezionato nel pannello di sinistra.

2.  Selezionare l'applicazione **hello** nel pannello immediatamente a destra.

3.  Selezionare il dispositivo previsto dal menu **schema** di barra degli strumenti, come l'iPhone Simulator 6.0 come evidenziato qui:

    ![][7]

4.  Premere il pulsante **Esegui** che appare nella stessa barra degli strumenti alla sinistra dello **schema**. Che costruisce, si distribuisce e si esegue l'applicazione nell'emulatore. Si apre un'applicazione separata di emulatore per visualizzare l'app:

    ![][8]

    Solo un emulatore possa essere eseguite contemporaneamente, quindi se volete provare l'app in un emulatore diverso, è necessario uscire dall'emulatore applicazione ed eseguire una diversa destinazione all'interno di Xcode.

 [7]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode viene fornito in bundle con gli emulatori per le ultime versioni di iPhone e iPad. Vecchie versioni possono essere disponibili dalla **Xcode → Preferenze → download → componenti** pannello.

## Distribuire al dispositivo

Per dettagli sui vari requisiti per distribuire un dispositivo, consultare la sezione *configurazione di sviluppo e distribuzione di beni* di Apple [Guida di strumenti di Workflow per iOS][9]. In breve, è necessario effettuare le seguenti operazioni prima di distribuire:

 [9]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Unire l'Apple iOS Developer Program.

2.  Creare un *Provisioning Profile* entro l' [iOS Provisioning Portal][10]. È possibile utilizzare suo *Sviluppo Provisioning Assistant* per creare e installare il profilo e certificato Xcode richiede.

3.  Verificare che della sezione *Firma codice* *Identità firma codice* all'interno di impostazioni del progetto è impostata al nome del tuo profilo provisioning.

 [10]: https://developer.apple.com/ios/manage/overview/index.action

Per distribuire il dispositivo:

1.  Utilizzare il cavo USB per collegare il dispositivo al Mac.

2.  Selezionare il nome del progetto nell'elenco a discesa di **regime** della finestra Xcode.

3.  Selezionare il dispositivo dall'elenco a discesa **dispositivo** . Se è stato collegato tramite USB, ma ancora non compare, premere il pulsante di **Organizzatore** per risolvere eventuali errori.

4.  Premere il pulsante **Esegui** per creare, distribuire ed eseguire l'applicazione sul dispositivo.

## Problemi comuni

**Avvisi negativi**: quando un'applicazione con interfaccia di programmazione (API) è cambiato o sostituito da un altro API, è contrassegnato come *obsoleto*. L'API ancora funziona nel breve termine, ma alla fine viene rimosso. Alcune di queste interfacce deprecate si riflettono in Apache Cordova e Xcode emette avvisi su di loro quando si creare e distribuita un'applicazione.

Avviso di Xcode sul metodo `invokeString` riguarda funzionalità che lancia un'applicazione da un URL personalizzato. Mentre il meccanismo per caricare da un URL personalizzato è cambiato, questo codice è ancora presente per fornire all'indietro la funzionalità per le applicazioni create con versioni precedenti di Cordova. L'applicazione di esempio non utilizza questa funzionalità, quindi è possibile ignorare questi avvisi. Per evitare questi avvisi dall'apparire, rimuovere il codice che fa riferimento il deprecato invokeString API:

*   Modificare il file *Classes/MainViewController.m* , circondano il seguente blocco di codice con `/*` e `*/` commenti come illustrato di seguito, quindi digitare il **comando-s** per salvare il file:

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }


*   Modificare il file *Classes/AppViewDelegate.m* , commentare la riga seguente inserendo una doppia barra, come illustrato di seguito, quindi digitare il **comando-s** per salvare il file:

        //self.viewController.invokeString = invokeString;


*   Premere **comando-b** per rigenerare il progetto ed eliminare gli avvisi.

<!-- Does this fix only last until the next "cordova prepare"? -->

**Intestazioni mancanti**: errori di compilazione relativi alle intestazioni mancante derivano da problemi con il percorso di generazione e può essere fissati tramite le preferenze di Xcode:

1.  Selezionare le **posizioni di Xcode → preferenze →**.

2.  Nella sezione **Dati derivati** , premere il pulsante **avanzate** e selezionare **Unique** come **Costruire posizione** come indicato qui:

    ![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

Questa è l'impostazione predefinita per una nuova installazione di Xcode, ma può essere impostata diversamente dopo un aggiornamento da una versione precedente di Xcode.

Per ulteriori informazioni, consultare la documentazione di Apple:

*   [IOS di iniziare a sviluppare applicazioni oggi][12] fornisce una rapida panoramica dei passi per lo sviluppo di applicazioni di iOS.

*   [Membri centro home page][13] fornisce collegamenti a diversi iOS risorse tecniche, comprese le risorse tecniche, il portale di provisioning, distribuzione guide e forum community.

*   [Strumenti del flusso di lavoro guida per iOS][9]

*   [Guida utente di Xcode][14]

*   [Sessione video][15] dal mondo Apple Developer ampia conferenza 2012 (WWDC2012)

*   È installato [xcode-selezionare comando][16], che consente di specificare la corretta versione di Xcode, se più di uno.

 [12]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [13]: https://developer.apple.com/membercenter/index.action
 [14]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [15]: https://developer.apple.com/videos/wwdc/2012/
 [16]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X ®, Apple ®, Xcode ®, App Store℠, iPad ®, iPhone ®, iPod ® e Finder ® sono marchi di Apple Inc.)
