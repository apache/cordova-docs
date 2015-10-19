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

title: Guida alla sicurezza
---

# Guida alla sicurezza

La seguente guida include alcune procedure ottimali di protezione che è necessario considerare quando si sviluppa un'applicazione di Cordova. Si prega di essere consapevole che la sicurezza è un argomento molto complicato e quindi questa guida non è esaustiva. Se credi che puoi contribuire a questa guida, non esitate a un problema del file nel tracciatore di bug di Cordova sotto ["Documentazione"][1]. Questa guida è progettata per essere applicabile allo sviluppo generale di Cordova (tutte le piattaforme), ma saranno notati particolari considerazioni specifiche della piattaforma.

 [1]: https://issues.apache.org/jira/browse/CB/component/12316407

## Questa guida illustra i seguenti argomenti:

*   Whitelist
*   Iframes e il meccanismo di Callback Id
*   Certificato appuntare
*   Certificati autofirmati
*   [Archiviazione](../../../cordova/storage/storage.html) crittografata
*   Consigli generali
*   Articoli consigliati e altre risorse

## Whitelist

*   Leggere e comprendere la guida di Whitelist

*   Dominio whitelisting non funziona su Android API 10 e qui di seguito e WP8 per iframes e XMLHttpRequest. Questo significa che un utente malintenzionato può caricare qualsiasi dominio in un iframe e qualsiasi script in quella pagina all'interno di iframe può accedere direttamente gli oggetti JavaScript di Cordova e i corrispondenti oggetti nativi di Java. Si dovrebbe prendere in considerazione durante la creazione di applicazioni per queste piattaforme. In pratica questo significa assicurandosi di destinazione un'API Android superiore a 10, e se possibile non utilizzare un iframe per caricare contenuto esterno - usare il plugin inAppBrowser o altri plugin di terze parti.

## Iframes e il meccanismo di Callback Id

Se il contenuto viene servita in un iframe da un dominio whitelisted, quel dominio avrà accesso al ponte nativo di Cordova. Questo significa che se si whitelist una rete di pubblicità di terze parti e servire gli annunci tramite un iframe, è possibile che un malintenzionato annuncio sarà in grado di spezzare l'iframe ed eseguire azioni dannose. Per questo motivo, non si devono generalmente usare IFRAME se non è possibile controllare il server che ospita il contenuto di iframe. Si noti inoltre che ci sono plugin di terze parti disponibili per sostenere le reti pubblicitarie. Si noti che questa affermazione non è vera per iOS, che intercetta tutto compreso iframe connessioni.

## Certificato appuntare

Cordova non supporta il pinning certificato vero. Il principale ostacolo a questo è una mancanza di API native di Android per intercettare le connessioni SSL per eseguire la verifica del certificato del server. (Anche se è possibile certificato appuntare su Android in Java utilizzando JSSE, webview su Android è scritto in C++ e connessioni server vengono gestite per voi di webview, così esso non è possibile utilizzare Java e JSSE ci.) Dato che Apache Cordova vuole offrire API coerente su più piattaforme, non avendo una capacità in una piattaforma importante rompe che la coerenza.

Ci sono modi per approssimare il pinning certificato, ad esempio controllando la che chiave pubblica del server (impronta digitale) è il valore previsto quando l'applicazione viene avviata o altre varie volte durante la vita dell'applicazione. Ci sono plugin di terze parti disponibili per Cordova che può farlo. Tuttavia, questo non è lo stesso come vero certificato appuntare che verifica automaticamente il valore previsto su ogni connessione al server.

## Certificati autofirmati

Non è consigliabile utilizzare i certificati autofirmati sul vostro server. Se il desiderio SSL, quindi è consigliabile che il server dispone di un certificato che è stato firmato da una nota CA (autorità di certificazione). L'incapacità di vero certificato appuntare lo rende importante.

Il motivo è che accettano i certificati autofirmati bypassa la convalida di catena del certificato, che permette qualsiasi certificato server essere considerato valido dal dispositivo. Questo apre la comunicazione ad attacchi man-in-the-middle. Diventa molto facile per un hacker non solo intercettare e leggere tutte le comunicazioni tra il dispositivo e il server, ma anche di modificare la comunicazione. Il dispositivo non saprà mai che questo sta accadendo perché esso non verifica che il certificato del server è firmato da una CA attendibile. Il dispositivo non ha alcuna prova che il server è che essa prevede. A causa della facilità di fare un attacco man-in-the-middle, accettare certificati autofirmati è solo marginalmente meglio che correre solo http anziché https su una rete non fidata. Sì, il traffico sarebbe essere crittografato, ma potrebbe essere crittografata con la chiave da un uomo-in-the-middle, così l'uomo-in-the-middle può accedere tutto, quindi crittografia è inutile tranne agli osservatori passivi. Gli utenti fidati SSL per essere sicuro, e questo sarebbe essere deliberatamente rendendolo insicuro, quindi l'utilizzo SSL diventa fuorviante. Se questo sarà utilizzato su una rete di fiducia (cioè, siete interamente all'interno di un'impresa controllata), poi i certificati autofirmati non sono raccomandati. Le due raccomandazioni in una rete di fiducia sono da usare solo http, perché la rete stessa è attendibile, o per ottenere un certificato firmato da una CA (non auto-firmata). La rete è attendibile o non è.

I principi qui descritti non sono specifici di Apache Cordova, si applicano a tutte le comunicazioni client-server.

Durante l'esecuzione di Cordova su Android, utilizzando `android:debuggable="true"` nell'applicazione manifesto permetteranno Errori SSL come certificato errori di convalida catena su certificati autofirmati. Quindi è possibile utilizzare i certificati autofirmati in questa configurazione, ma questa non è una configurazione che deve essere utilizzata quando l'applicazione è in produzione. È pensato per essere usato solo durante lo sviluppo di applicazioni.

## Archiviazione crittografata

(TBD)

## Consigli generali

### Non utilizzare Android Gingerbread!

*   Impostare il livello di min-bersaglio-sdk supera a 10. 10 API è pan di zenzero e Gingerbread non è più supportato da Google o dispositivo produttore e non è pertanto consigliato dal team di Cordova. 
*   Pan di zenzero ha dimostrato di essere insicuro e uno dei più mirati mobile OSs [http://www.mobilemag.com/2012/11/06/andriod-2-3-gingerbread-security/][2]. 
*   La Whitelist su Android non funziona con Gingerbread o inferiore. Questo significa che un utente malintenzionato può caricare codice maligno in un iframe che poi avrebbe accesso a tutti i Cordova APIs e potrebbe utilizzare tale accesso per rubare dati personali, inviare messaggi SMS ai numeri a tariffa maggiorata e compiere altri atti dannosi. 

 [2]: http://bgr.com/2012/11/06/android-security-gingerbread-malware/

### Utilizzare InAppBrowser per collegamenti esterni

*   Utilizzare il InAppBrowser quando si apre il link a qualsiasi sito Web esterno. Questo è molto più sicuro di whitelisting un nome di dominio e compreso il contenuto direttamente nell'applicazione, perché il InAppBrowser utilizzerà la funzionalità di protezione del browser nativo e non darà il sito accedere all'ambiente di Cordova. Anche se il sito Web di terze parti di fiducia e di includerlo direttamente nell'applicazione, quel sito di terze parti potrebbe link a contenuti web dannosi. 

### Convalidare l'input dell'utente tutti i

*   Sempre convalidare qualsiasi input che accetta l'applicazione. Questo include nomi utente, password, date, mezzi caricati, ecc. Perché un utente malintenzionato potrebbe manipolare le risorse HTML e JS (sia con l'applicazione di decompilazione o utilizzando gli strumenti di debug come chrome://inspect), questa anche eseguire la convalida sul server, soprattutto prima di consegnare i dati fuori a qualsiasi servizio di back-end. 
*   Altre fonti in cui i dati devono essere convalidati: documenti, contatti, notifiche push

### Non memorizzare nella cache i dati sensibili

*   Se i nomi utente, password, informazioni di geolocalizzazione e altri dati sensibili viene memorizzato nella cache, quindi esso potrebbe potenzialmente essere recuperato in seguito da un'applicazione o un utente non autorizzato.

### Non usare Eval (), se non sai cosa stai facendo

*   La funzione JavaScript Eval () ha una lunga storia di abusi. Usandolo in modo errato può aprire il codice per gli attacchi di iniezione, Difficoltà e più lenta esecuzione di codice di debug. 

### Non presupporre che il codice sorgente è sicuro

*   Poiché un'applicazione di Cordova è costruita con HTML e JavaScript attivi che ottieni confezionati in un contenitore nativo, non si dovrebbe considerare il codice sia sicuro. È possibile decodificare un'applicazione di Cordova. 

## Articoli consigliati e altre risorse

*   [Foglietto di sicurezza HTML5, dettagliando come proteggere la vostra applicazione HTML5][3]
*   [Articolo di PhoneGap sulla sicurezza del dispositivo, ad esempio utilizzando dati crittografati][4]
*   [White paper sulle falle di sicurezza ben noto in Webview basato su applicazioni ibride][5]

 [3]: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
 [4]: https://github.com/phonegap/phonegap/wiki/Platform-Security
 [5]: http://www.cis.syr.edu/~wedu/Research/paper/webview_acsac2011.pdf