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

# Panoramica

Cordova è un framework di sviluppo mobile open source. Esso consente di utilizzare tecnologie standard web come HTML5, CSS3 e JavaScript per lo sviluppo di piattaforme, evitando il linguaggio di sviluppo nativo di ogni mobile platforms. Le applicazioni vengono eseguite nel wrapper mirati per ogni piattaforma e si basano su standard-compliant associazioni API per accedere ai sensori ogni dispositivo, dati e lo stato della rete.

Usare Cordova se siete:

*   impostare un sviluppatore mobile e si desidera estendere un'applicazione in più di una piattaforma, senza dover reimplementare con lingua e strumento di ogni piattaforma.

*   un sviluppatore web e si desidera distribuire una web app che è confezionata per la distribuzione in varie app store portali.

*   uno sviluppatore mobile interessato nella miscelazione di componenti dell'applicazione nativa con una *WebView* (finestra del browser) che può accedere alle API di livello dispositivo, o se si desidera sviluppare un'interfaccia plugin tra nativi e componenti WebView.

## Componenti di base

Cordova applicazioni si basano su una comune `config.xml` file che fornisce informazioni sull'app e specifica i parametri che interessano come funziona, come se esso risponde all'orientamento si sposta. Questo file conforme alla specifica di [Confezionato Web App][1]o *widget*, di W3C.

 [1]: http://www.w3.org/TR/widgets/

L'applicazione stessa è implementato come una pagina web, denominato *index. html* per impostazione predefinita, che fa riferimento a qualunque CSS, JavaScript, immagini, file multimediali, o altre risorse sono necessarie per essere eseguito. L'app viene eseguita come una *WebView* all'interno del wrapper di applicazione nativa, che distribuiscono ai negozi di app. Per l'applicazione web interagire con varie caratteristiche dispositivo fare le applicazioni in modo native, deve anche fare riferimento a un `cordova.js` file che fornisce API associazioni.

WebView Cordova abilitato può fornire l'applicazione con l'intera interfaccia utente. Può anche essere un componente all'interno di un'applicazione ibrida più grande, che mescola WebView con componenti di un'applicazione nativa. Cordova fornisce un'interfaccia di *plugin* per questi componenti comunicare con a vicenda.

## Percorsi di sviluppo

A partire dalla versione 3.0, è possibile utilizzare due flussi di lavoro fondamentali per creare un'applicazione mobile. Mentre si può ottenere lo stesso risultato utilizzando entrambi i flussi di lavoro, determinati compiti sono meglio adatti ad utilizzando il flusso di uno lavoro sopra l'altro. Per questo motivo, è necessario comprendere entrambi i flussi di lavoro in modo che è possibile utilizzare lo strumento migliore per la situazione migliore.

I due principali flussi di lavoro supportati sono il flusso di lavoro di *Web progetto Dev* e il flusso di lavoro *Nativo Dev Platform* .

### Web progetto Dev

Si può pensare il primo flusso di lavoro come il flusso di lavoro di *Web progetto Dev* . Si dovrebbe utilizzare questo flusso di lavoro quando si desidera creare un'applicazione di Cordova che gira su tanti sistemi operativi mobili come possibile con poco lavoro specifico della piattaforma di sviluppo possibili. Questo flusso di lavoro è entrato in esistenza con Cordova 3.0 e la creazione di Cordova *Command-Line Interface* (CLI). CLI estrae un sacco di funzionalità di basso livello script di shell che si prendono cura dei dettagli coinvolti con la costruzione di app, ad esempio copiare le risorse web nelle cartelle corrette per ogni piattaforma mobile, rendendo le modifiche di configurazione specifici di piattaforma o sull'esecuzione di specifici costruire script per generare binari di applicazione. Si può leggere di più circa il flusso di lavoro di *Web progetto Dev* in l'interfaccia della riga di comando. Si prega di notare che spesso quando si parla di "CLI", stanno parlando questo flusso di lavoro di *Web progetto Dev* .

### Piattaforma nativa Dev

Il secondo flusso di lavoro può essere pensato come un flusso di lavoro *Nativo Dev Platform* . Si dovrebbe usare quando si vuole mettere a fuoco sulla costruzione di un'applicazione per una singola piattaforma e sono interessato a cambiare i dettagli di basso livello di piattaforma. Mentre è ancora possibile utilizzare questo flusso di lavoro per costruire applicazioni multipiattaforma, la mancanza di strumenti di astrarre via le varie fasi di compilazione renderà più difficile. Ad esempio, si dovrà utilizzare Plugman per installare il plugin stesso una volta per ogni piattaforma che si desidera sostenere. Il vantaggio di utilizzare questo flusso di lavoro *Nativo Dev Platform* è che esso dà accesso agli script shell di basso livello per costruire e testare l'applicazione, quindi se vi sono hacking sul lato nativo delle cose, questo flusso di lavoro è il modo più efficace per testare le modifiche. Questo flusso di lavoro è inoltre opportuno, se si desidera utilizzare il CordovaWebView come una piccola parte in una più ampia applicazione nativa (vedere la guida di visualizzazioni Web Embedding). Potete leggere su questo flusso di lavoro nelle diverse guide strumento Shell, per esempio, guida di strumento Shell Android e iOS guida strumento Shell.

Quando in primo luogo partendo, potrebbe essere più semplice utilizzare il flusso di lavoro di *Web progetto Dev* per creare un'applicazione. (Per installare il CLI, vedere l'interfaccia della riga di comando). A seconda dell'insieme di piattaforme che si desidera fare riferimento, è possibile affidarsi CLI per azioni progressivamente maggiore del ciclo di sviluppo:

*   Nello scenario più semplice, è possibile utilizzare la CLI semplicemente per creare un nuovo progetto che viene popolato con configurazione di default per modificare.

*   Per molte piattaforme mobili, è possibile utilizzare anche il CLI per impostare i file di progetto supplementare necessari per compilare all'interno di ogni SDK. Per questo lavoro, è necessario installare il SDK su ogni piattaforma mirati. (Vedi le guide di piattaforma per istruzioni). Come indicato nella tabella di supporto della piattaforma, potrebbe essere necessario eseguire CLI su sistemi operativi diversi, a seconda della piattaforma di destinazione.

*   Per il supporto di piattaforme, CLI può compilare applicazioni eseguibile ed eseguirli in un emulatore di dispositivo basato su SDK. Completa di test, potete anche generare file di applicazione e installarli direttamente su un dispositivo.

In qualsiasi punto del ciclo di sviluppo, può passare all'uso di più del flusso di lavoro *Nativo Dev Platform* . Strumenti specifici della piattaforma SDK forniti possono fornire un insieme più ricco di opzioni. (Vedi le guide di piattaforma per ulteriori informazioni sullo strumento SDK su ogni piattaforma impostato).

Un ambiente SDK è più appropriato se si desidera implementare un'applicazione ibrida che mescola i componenti dell'applicazione web-based e nativo. Si può utilizzare l'utilità della riga di comando per generare inizialmente l'app, o in modo iterativo successivamente per alimentare il codice aggiornato a strumenti SDK. Si può anche costruire il file di configurazione dell'app te stesso. (Vedere il file config. XML File per dettagli).