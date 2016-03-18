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

title: Prossimi passi
---

# Prossimi passi

Per gli sviluppatori che hanno una comprensione di come usare la CLI di Cordova e fare uso di plugin, ci sono alcune cose che si possono prendere in considerazione ricercando accanto a costruire meglio, più performante Cordova applicazioni. Il seguente documento offre consulenza su vari argomenti inerenti alle migliori pratiche, test, aggiornamenti e altri argomenti, ma non vuol essere prescrittiva. Considerare questo tuo punto di lancio per la tua crescita come uno sviluppatore di Cordova. Inoltre, se vedete qualcosa che può essere migliorato, si prega di [contribuire][1]!

 [1]: http://cordova.apache.org/#contribute

Questa guida contiene i seguenti argomenti:

*   Consigliate
*   Gestione degli aggiornamenti
*   Test di applicazioni di Cordova
*   Debug delle applicazioni di Cordova
*   Interfaccia utente
*   Considerazioni speciali
*   Tenere il passo
*   Come ottenere aiuto

# Sviluppo di app migliore pratiche Cordova

## 1) SPA è tuo amico

Innanzitutto - applicazioni Cordova dovrebbero adottare il design SPA (pagina singola applicazione). Vagamente definito, un centro benessere è un'applicazione lato client che viene eseguita da una richiesta di una pagina web. L'utente carica una serie iniziale di risorse (HTML, CSS e JavaScript) e ulteriori aggiornamenti (mostrando una nuova vista, caricamento dei dati) è fatto tramite AJAX. Terme sono comunemente usati per applicazioni più complesse sul lato client. GMail è un grande esempio di questo. Dopo il caricamento di GMail, posta visualizzazioni, editing e organizzazione sono tutti fatti aggiornando il DOM invece effettivamente lasciare la pagina corrente per caricare uno completamente nuovo.

Utilizzando una SPA può aiutare a organizzare la tua applicazione in maniera più efficiente, ma ha anche vantaggi specifici per applicazioni di Cordova. Un'applicazione di Cordova deve attendere l'evento di [deviceready](../../cordova/events/events.deviceready.html) al fuoco prima di qualsiasi plugin può essere utilizzato. Se non si utilizza una SPA e l'utente fa clic per passare da una pagina a altra, si dovrà aspettare per [deviceready](../../cordova/events/events.deviceready.html) al fuoco ancora prima di fare uso di un plugin. Questo è facile dimenticare come l'applicazione diventa più grande.

Anche se non si desidera utilizzare Cordova, creando un'applicazione mobile senza utilizzare un'architettura a singola pagina avrà implicazioni gravi prestazioni. Questo è perché navigare tra le pagine richiedono script, beni, ecc., per essere ricaricato. Anche se questi beni vengono memorizzati nella cache, ci saranno ancora problemi di prestazioni.

Esempi di librerie SPA che è possibile utilizzare nelle vostre applicazioni di Cordova sono:

*   [AngularJS][2]
*   [EmberJS][3]
*   [Spina dorsale][4]
*   [Kendo UI][5]
*   [Monaca][6]
*   [ReactJS][7]
*   [Sencha Touch][8]
*   [jQuery Mobile][9]

 [2]: http://angularjs.org
 [3]: http://emberjs.com
 [4]: http://backbonejs.org
 [5]: http://www.telerik.com/kendo-ui
 [6]: http://monaca.mobi/en/
 [7]: http://facebook.github.io/react/
 [8]: http://www.sencha.com/products/touch/
 [9]: http://jquerymobile.com

E molti, molti, altri.

## 2) considerazioni sulle prestazioni

Uno dei più grandi errori che può fare un nuovo sviluppatore di Cordova è ritenere che le prestazioni che si ottengono su una macchina desktop sono lo stesso che riceveranno su un dispositivo mobile. Mentre i nostri dispositivi mobili hanno ottenuto più potente ogni anno, hanno ancora la potenza e le prestazioni di un desktop. I dispositivi mobili sono in genere molto meno RAM e una GPU che è ben lungi dal proprio desktop (o anche portatile) fratelli. Un elenco completo dei suggerimenti qui sarebbe troppo, ma qui ci sono alcune cose da tenere a mente (con un elenco di risorse più lungo alla fine per ulteriori ricerche).

**Clicca versus Touch** - l'errore più grande e più semplice che si può fare è utilizzare gli eventi click. Mentre queste "funzionano" bene mobile, la maggior parte dei dispositivi impongono un ritardo 300ms su di loro al fine di distinguere tra un tocco e un tocco di "tenere" evento. Utilizzando `touchstart` , o `touchend` , si tradurrà in un drastico miglioramento - 300ms non suono piace molto, ma può tradursi in UI aggiornamenti a scatti e il comportamento. Si deve anche considerare il fatto che "toccare" gli eventi non sono supportati nei non-webkit browser, vedere [CanIUse][10]. Per fronteggiare queste limitazioni, è possibile checkout varie librerie come HandJS e Fastouch.

 [10]: http://caniuse.com/#search=touch

**Le transizioni CSS contro manipolazione del DOM** - utilizzando le transizioni CSS di accelerazione hardware sarà notevolmente migliore rispetto all'utilizzo di JavaScript per creare animazioni. Visualizza l'elenco delle risorse alla fine di questa sezione per gli esempi.

**Reti succhiare** - Ok, le reti non sempre succhiare, ma la latenza delle reti mobili, reti di telefonia mobile anche buone, è molto peggio di quanto si pensi probabilmente. Un'applicazione desktop che slurps giù 500 righe di dati JSON, ogni 30 secondi, saranno entrambi più lento su un dispositivo mobile come un maiale di batteria. Tenete a mente che Cordova apps hanno diversi modi per rendere persistenti i dati nell'app (LocalStorage e il file system, ad esempio). Memorizzare nella cache i dati localmente ed essere consapevoli della quantità di dati che stanno mandando avanti e indietro. Questa è una considerazione importante soprattutto quando l'applicazione è collegata attraverso una rete cellulare.

**Prestazioni aggiuntive articoli e risorse**

*   ["Hai mezza assed esso"][11]
*   ["Top Performance dieci suggerimenti per PhoneGap e ibrido Apps"][12]
*   ["App veloci e siti con JavaScript"][13]

 [11]: http://sintaxi.com/you-half-assed-it
 [12]: http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/
 [13]: https://channel9.msdn.com/Events/Build/2013/4-313

## 3) riconoscere e gestire stato Offline

Vedere la precedente punta sulle reti. Non solo può essere una rete lenta, è interamente possibile che l'applicazione sia completamente offline. L'applicazione deve gestire questo in maniera intelligente. Se l'applicazione non lo fa, la gente penserà che l'applicazione viene interrotta. Dato quanto è facile da gestire (supporti di Cordova ascolto per entrambi un evento offline e online), non non c'è assolutamente alcun motivo per l'applicazione non risponde bene quando eseguire offline. Assicurarsi di testare (vedere la sezione relativa ai test) applicazione e assicurarsi di testare come l'applicazione gestisce quando si avvia in uno stato e poi passare ad un altro.

Notare che gli eventi online e offline, così come l'API di connessione di rete non è perfetto. Potrebbe essere necessario affidarsi utilizzando una richiesta XHR per vedere se il dispositivo è veramente offline o online. Alla fine della giornata, essere sicuri di aggiungere qualche forma di supporto per problemi di rete - in realtà, l'Apple store (e probabilmente altri negozi) rifiuterà apps che non gestiscono correttamente gli Stati in linea/non in linea. Per più discussione su questo argomento, vedere ["È questa cosa?"][14]

 [14]: http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29

# Gestione degli aggiornamenti

## Aggiornamento di progetti di Cordova

Se il progetto esistente è stato creato utilizzando Cordova 3. x, è possibile aggiornare il progetto inviando il seguente:

    Cordova piattaforma aggiornamento nome-piattaforma ios, android, ecc.


Se progetto esistente è stato creato con una versione precedente alla Cordova 3. x, probabilmente sarebbe meglio creare un nuovo progetto di Cordova 3. x e quindi copiare il codice e le attività del progetto esistente al nuovo progetto. Passaggi tipici:

*   Creare un nuovo progetto di 3. x di Cordova (Cordoba creare...)
*   Copiare la cartella www dal tuo vecchio progetto per il nuovo progetto
*   Copiare le impostazioni di configurazione dal vecchio progetto per il nuovo progetto
*   Aggiungi plugin utilizzati nel vecchio progetto per il nuovo progetto
*   Compilare il progetto
*   Prova, prova, prova!

Indipendentemente dalla versione precedente del progetto, è assolutamente fondamentale che si leggere su ciò che è stato modificato nella versione aggiornata, come l'aggiornamento può rompere il codice. Il posto migliore per trovare queste informazioni sarà nelle note di rilascio pubblicate sia nei repository e sul blog di Cordova. Volete testare app accuratamente al fine di verificare che esso funziona correttamente dopo aver eseguito l'aggiornamento.

Nota: alcuni plugin potrebbero non essere compatibili con la nuova versione di Cordova. Se un plugin non è compatibile, si può essere in grado di trovare un plugin di sostituzione che fa quello che ti serve, o potrebbe essere necessario ritardare l'aggiornamento del progetto. In alternativa, modificare il plugin modo che lavorano sotto la nuova versione e contribuire torna alla Comunità.

## Aggiornamenti plugin

A partire da Cordova 3.4, non non c'è alcun meccanismo per l'aggiornamento del plugin modificato utilizzando un unico comando. Invece, rimuovere il plugin e aggiungere di nuovo al tuo progetto, e la nuova versione sarà installata:

    Cordova plugin rm com.some.plugin cordova plugin aggiungere com.some.plugin


Essere sicuri di controllare la documentazione del plugin aggiornato, come potrebbe essere necessario regolare il vostro codice di lavorare con la nuova versione. Inoltre, doppia controllare che la nuova versione del plugin funziona con la versione del progetto di Cordova.

Sempre testare le applicazioni per garantire che l'installazione del nuovo plugin non è rotto qualcosa che non si prevede.

Se il progetto ha un sacco di plugin che avete bisogno di essere aggiornato, potrebbe risparmiare tempo per creare uno script di shell o batch che rimuove e aggiunge i plugin con un solo comando.

# Test di applicazioni di Cordova

Testing delle applicazioni è super importante. Il team di Cordova utilizza Jasmine ma qualsiasi soluzione di test web unità amichevole farà.

## Test su un simulatore vs su un dispositivo reale

Non è raro utilizzare browser desktop e simulatori/emulatori durante lo sviluppo di un'applicazione di Cordova. Tuttavia, è incredibilmente importante provare l'app su dispositivi fisici come molti come si può eventualmente:

*   Simulatori sono proprio questo: simulatori. Ad esempio, l'app può funzionare nel simulatore di iOS senza problemi, ma potrebbe non funzionare su un dispositivo reale (soprattutto in certe circostanze, ad esempio uno stato di memoria bassa). O, l'app potrebbe effettivamente non sul simulatore mentre funziona bene su un dispositivo reale.
*   Gli emulatori sono proprio questo: gli emulatori. Non rappresentano quanto bene l'app verrà eseguito su un dispositivo fisico. Ad esempio, alcuni emulatori possono rendere l'app con un display incomprensibile, mentre un vero dispositivo non ha alcun problema. (Se si verifica questo problema, disattivare l'host GPU nell'emulatore).
*   Simulatori sono generalmente più veloci di dispositivo fisico. Emulatori, d'altra parte, sono generalmente più lenti. Non giudicare le prestazioni dell'app di come si svolge in un simulatore o un emulatore. Giudicare le prestazioni dell'app di come funziona su una gamma di dispositivi reali.
*   È impossibile ottenere una buona sensazione per come app risponde al tuo tocco utilizzando un simulatore o un emulatore. Invece, che esegue l'applicazione su un dispositivo reale può segnalare problemi con le dimensioni degli elementi dell'interfaccia utente, reattività, ecc.
*   Anche se sarebbe bello essere in grado di testare solo su un dispositivo per la piattaforma, è meglio testare su molti dispositivi sportivi molte diverse versioni del sistema operativo. Ad esempio, ciò che funziona sul tuo smartphone Android particolare potrebbe non riuscire in un altro dispositivo Android. Ciò che funziona su un dispositivo iOS 7 potrebbe non funzionare su un dispositivo iOS 6.

Naturalmente, è impossibile provare su ogni possibile dispositivo sul mercato. Per questo motivo, è saggio reclutare molti tester che hanno diversi dispositivi. Anche se essi non cattura ogni problema, le probabilità sono buone che scoprono capricci e problemi che non troveresti mai da solo.

Suggerimento: È possibile su dispositivi Android Nexus per flash facilmente diverse versioni di Android sul dispositivo. Questo semplice processo vi permetterà di testare facilmente l'applicazione su diversi livelli di Android con un unico dispositivo, senza far decadere la garanzia o che si richiedono a "jailbreak" o "radice" nel dispositivo. Le immagini di Google Android fabbrica e le istruzioni si trovano presso: https://developers.google.com/android/nexus/images#instructions

# Debug delle applicazioni di Cordova

Debug Cordova richiede alcune operazioni di configurazione. A differenza di un'applicazione desktop, non puoi semplicemente aprire dev tools sul tuo dispositivo mobile e avviare il debug, per fortuna ci sono alcuni grandi alternative.

## iOS debug

### Xcode

Con Xcode è possibile eseguire il debug lato iOS nativo dell'applicazione di Cordova. Assicurarsi che la zona di Debug è mostrando (vista-> zona di Debug). Una volta che l'app è in esecuzione sul dispositivo (o simulatore), è possibile visualizzare l'output del registro della zona di debug. Questo è dove si stamperà eventuali errori o avvisi. È inoltre possibile impostare punti di interruzione all'interno del file di origine. Questo vi permetterà di scorrere il codice una riga alla volta e Mostra lo stato delle variabili a quel tempo. Lo stato delle variabili è mostrato nella zona debug quando viene raggiunto un punto di interruzione. Una volta che l'app è in esecuzione sul dispositivo, si può portare ispettore web di Safari (come descritto di seguito) per eseguire il debug lato webview e js dell'applicazione. Per ulteriori dettagli, vedere la guida di Xcode: [Xcode debug guida][15]

 [15]: https://developer.apple.com/library/mac/documentation/ToolsLanguages/Conceptual/Xcode_Overview/DebugYourApp/DebugYourApp.html#//apple_ref/doc/uid/TP40010215-CH18-SW1

### Safari Remote Debugging con Web Inspector

Con ispettore web di Safari è possibile eseguire il debug di codice webview e js nell'applicazione di Cordova. Questo funziona solo su OSX e solo con iOS 6 (e superiori). Usa Safari per connettersi al dispositivo (o il simulatore) e collegherà strumenti di sviluppo del browser per l'applicazione di Cordova. Si ottiene che cosa vi aspettate da dev tools - DOM ispezione/manipolazione, un debugger JavaScript, ispezione di rete, console e altro. Come Xcode, con ispettore web di Safari è possibile impostare punti di interruzione nel codice JavaScript e visualizzare lo stato delle variabili a quel tempo. È possibile visualizzare eventuali errori, avvisi o messaggi che vengono stampati nella console. L'app è in esecuzione, è possibile eseguire comandi JavaScript direttamente dalla console. Per ulteriori dettagli su come impostarlo e cosa si può fare, vedere questo ottimo blog post: <http://moduscreate.com/enable-remote-web-inspector-in-ios-6/> e questa guida: [Guida di Safari Web Inspector][16]

 [16]: https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html

## Debug remoto cromo

Praticamente lo stesso della versione di Safari, questo funziona solo con Android, ma può essere utilizzato da qualsiasi sistema operativo desktop. Si richiede un minimo di Android 4.4 (KitKat), minimo livello di API di 19 e 30 + Chrome (sul desktop). Una volta collegato, si ottiene la stessa esperienza di Chrome Dev Tools per le applicazioni mobili come si fa con le applicazioni desktop. Ancora meglio, il Chrome Dev Tools hanno un'opzione di specchio che mostra l'app in esecuzione sul dispositivo mobile. Questo è più appena di un vista - potete scorrere e fare clic su da dev tools e aggiorna il dispositivo mobile. Maggiori dettagli su Chrome debug remoto possono essere trovati qui: <https://developers.google.com/chrome/mobile/docs/debugging>

È possibile utilizzare Chrome Dev Tools per controllare applicazioni iOS, attraverso un proxy di WebKit: <https://github.com/google/ios-webkit-debug-proxy/>

## Ripple

Ripple è un emulatore basato su desktop per progetti di Cordova. Essenzialmente esso consente di eseguire un'applicazione di Cordova nell'applicazione desktop e falsi varie caratteristiche di Cordova. Ad esempio, consente di simulare l'accelerometro per verificare gli eventi agitare. Finge la fotocamera API consentendo di selezionare una foto dal disco rigido. Ti permette di ondulazione che concentra più sul codice personalizzato, piuttosto che preoccuparsi di plugin di Cordova. Potete trovare maggiori informazioni su Ripple qui: <http://ripple.incubator.apache.org/>

## Weinre

Weinre crea un server locale che può ospitare un debug remoto client per le applicazioni di Cordova. Dopo aver installato e avviato esso, potete copiare una riga di codice nella vostra applicazione di Cordova e poi riavviarlo. È possibile aprire un pannello di strumento dev sul tuo desktop per utilizzare l'applicazione. Weinre non è abbastanza come fantasia come Chrome e Safari Remote debugging, ma ha il vantaggio di lavorare con una gamma molto maggiore di piattaforme e sistemi operativi. Ulteriori informazioni possono essere trovate qui: <http://people.apache.org/~pmuellr/weinre/docs/latest/>

## Altre opzioni

*   BlackBerry 10 supporta il debug anche: [documentazione][17]
*   È possibile eseguire il debug utilizzando Firefox App Manager pure, vedere [questo post sul blog][18] e questo [articolo MDN][19].
*   Per ulteriori esempi e spiegazione dei suggerimenti sopra di debug, vedere: <http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/>

 [17]: https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html
 [18]: https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/
 [19]: https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging

# Interfaccia utente

Creazione di un'applicazione di Cordova che sembra piacevole su mobile può essere una sfida, soprattutto per gli sviluppatori. Molte persone hanno scelto di utilizzare un framework di interfaccia utente per rendere questo più facile. Ecco un breve elenco di opzioni che si possono prendere in considerazione.

*   [jQuery Mobile][9] - jQuery Mobile aumenta automaticamente il layout per l'ottimizzazione mobile. Gestisce anche la creazione di una SPA per voi automaticamente.
*   [ionico][20] -questo potente framework di interfaccia utente in realtà ha la propria CLI per gestire la creazione del progetto.
*   [Ratchet][21] - di chi ha creato il Bootstrap.
*   [Kendo UI][5] - Open source UI e ambito di applicazione da Telerik.
*   [Topcoat][22]
*   [ReactJS][7]

 [20]: http://ionicframework.com/
 [21]: http://goratchet.com/
 [22]: http://topcoat.io

Quando si costruisce l'interfaccia utente, è importante pensare a tutte le piattaforme che vi si rivolgono e le differenze tra le aspettative dell'utente. Ad esempio, un'applicazione Android che ha un'interfaccia utente stile iOS probabilmente non andrà bene con gli utenti. Questo a volte è anche applicato i vari negozi di applicazione. Per questo motivo, è importante rispettare le convenzioni di ciascuna piattaforma e pertanto hanno familiarità con i vari Human Interface Guidelines:

*   [iOS][23]
*   [Android][24]
*   [Windows Phone][25]

 [23]: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html
 [24]: https://developer.android.com/designWP8
 [25]: http://dev.windowsphone.com/en-us/design/library

## UI ulteriori articoli e risorse

Sebbene motori browser diventano più denuncia standard, viviamo ancora in un mondo con prefisso (-webkit e - ms.) il seguente articolo è prezioso quando lo sviluppo di UI in per attraversare apps browser: <http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx>

# Considerazioni speciali

Sebbene Cordova facilita lo sviluppo multipiattaforma, non solo è possibile fornire 100% isolamento dalla piattaforma nativa sottostante. Quindi essere consapevoli delle restrizioni.

## Piattaforma stranezze

Durante la lettura della documentazione, cercare sezioni che delineano i requisiti su più piattaforme o comportamenti diversi. Se presenti, questi sarebbero in una sezione intitolata "Quirks Android", "iOS Quirks", ecc. Leggere queste stranezze ed essere consapevoli di loro come si lavora con Cordova.

## Caricamento di contenuto remoto

Il richiamo di funzioni Cordova JavaScript da una pagina HTML caricata da remoto (una pagina HTML non memorizzata localmente sul dispositivo) è una configurazione non supportata. Questo è perché Cordova non è stato progettato per questo, e la comunità Apache Cordova non fa nessun test di questa configurazione. Mentre si può lavorare in alcune circostanze, non è raccomandato né sostenuto. Ci sono sfide con lo stesso criterio di origine, mantenendo il JavaScript e porzioni nativi di Cordova sincronizzato presso la stessa versione (poiché essi sono accoppiati tramite API private che possono cambiare), l'affidabilità del contenuto remoto chiamando funzioni native locali e potenziale rifiuto di app store.

Visualizzati da remoto-caricato contenuti HTML in un webview dovrebbero essere fatto utilizzando InAppBrowser di Cordova. Il InAppBrowser è progettato in modo che JavaScript in esecuzione ci non ha accesso al Cordova JavaScript APIs per i motivi sopra elencati. Fare riferimento alla guida alla sicurezza.

# Tenere il passo

Ecco alcuni modi per tenersi aggiornati con Cordova.

*   Iscriviti al [blog di Cordova][26].
*   Iscriversi alla [lista di sviluppatore][27]. Nota - non si tratta di un gruppo di sostegno! Si tratta piuttosto di un luogo dove si è discusso lo sviluppo di Cordova.

 [26]: http://cordova.apache.org/#news
 [27]: http://cordova.apache.org/#mailing-list

# Come ottenere aiuto

I seguenti link sono i posti migliori per ottenere aiuto per Cordova:

*   StackOverflow: <http://stackoverflow.com/questions/tagged/cordova> utilizzando il tag di Cordova, è possibile visualizzare e sfogliare tutte le domande di Cordova. Si noti che StackOverflow converte automaticamente il tag "Phonegap" a "Cordova", così in questo modo sarete in grado di accedere anche questioni storiche
*   PhoneGap gruppo Google: [https://groups.Google.com/forum/#!Forum/Leaflet-JS! forum/phonegap][28] questo gruppo di Google è stato il vecchio forum di supporto quando Cordova si chiamava ancora PhoneGap. Mentre ci sono ancora un sacco di utenti di Cordova che frequentano questo gruppo, la comunità di Cordova ha espresso un interesse in concentrandosi meno su questo gruppo e utilizzando invece StackOverflow per supporto
*   Meetup: <http://phonegap.meetup.com> - prendere in considerazione trovare un gruppo meetup di Cordova/PhoneGap locale

 [28]: https://groups.google.com/forum/#!forum/phonegap
