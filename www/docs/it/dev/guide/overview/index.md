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

title: Panoramica
---

# Panoramica

Apache Cordova è un framework di sviluppo mobile open source. Esso consente di utilizzare tecnologie standard web come HTML5, CSS3 e JavaScript per lo sviluppo di piattaforme, evitando il linguaggio di sviluppo nativo di ogni mobile platforms. Le applicazioni vengono eseguite nel wrapper mirati per ogni piattaforma e si basano su standard-compliant associazioni API per accedere ai sensori ogni dispositivo, dati e lo stato della rete.

Apache Cordova laureato in ottobre 2012 come un progetto di alto livello all'interno della Apache Software Foundation (ASF). Attraverso l'ASF, sviluppo futuro di Cordova garantirà aperto gestione responsabile del progetto. Rimarrà sempre libero e open source sotto licenza Apache, versione 2.0. Visitare [cordova.apache.org][1] per ulteriori informazioni.

 [1]: http://cordova.apache.org

Usare Apache Cordova se siete:

*   impostare un sviluppatore mobile e si desidera estendere un'applicazione in più di una piattaforma, senza dover reimplementare con lingua e strumento di ogni piattaforma.

*   un sviluppatore web e si desidera distribuire una web app che è confezionata per la distribuzione in varie app store portali.

*   uno sviluppatore mobile interessato nella miscelazione di componenti dell'applicazione nativa con una *WebView* (finestra del browser speciali) che può accedere alle API di livello dispositivo, o se si desidera sviluppare un'interfaccia plugin tra nativi e componenti WebView.

## Componenti di base

Cordova Apache applicazioni si basano su una comune `config.xml` file che fornisce informazioni sull'app e specifica i parametri che interessano come funziona, come se esso risponde all'orientamento si sposta. Questo file conforme alla specifica di [Confezionato Web App][2]o *widget*, di W3C.

 [2]: http://www.w3.org/TR/widgets/

La stessa applicazione viene implementato come una pagina web, per impostazione predefinita un file locale denominato *index. html*, che fa riferimento a qualunque CSS, JavaScript, immagini, file multimediali o altre risorse sono necessarie per essere eseguito. L'app viene eseguita come una *WebView* all'interno del wrapper di applicazione nativa, che distribuiscono ai negozi di app.

WebView Cordova abilitato può fornire l'applicazione con l'intera interfaccia utente. Su alcune piattaforme, può anche essere un componente all'interno di un'applicazione ibrida più grande, che mescola WebView con componenti dell'applicazione nativa. (Per dettagli, vedere visualizzazioni Web Embedding.)

Un'interfaccia del *plugin* è disponibile per Cordova e componenti nativi comunicare con a vicenda. Ciò consente di richiamare codice nativo da JavaScript. Idealmente, l'API JavaScript per quel codice nativo sono coerenti attraverso più piattaforme. A partire dalla versione 3.0, plugins fornire associazioni al dispositivo standard API. Plugin di terze parti forniscono ulteriori associazioni a caratteristiche non necessariamente disponibile su tutte le piattaforme. Potete trovare questi plugin di terze parti nel [Registro dei plugin][3] e utilizzarli nell'applicazione. È inoltre possibile sviluppare il proprio plugins, come descritto nella guida lo sviluppo di Plugin. Plugin può essere necessario, ad esempio, per comunicare tra Cordova e componenti personalizzati nativi.

 [3]: http://plugins.cordova.io

**Nota**: a partire dalla versione 3.0, quando si crea un progetto di Cordova non ha alcun plugin presenti. Questo è il nuovo comportamento predefinito. Tutti i plugin che desideri, anche i plugin di nucleo, devono essere aggiunto in modo esplicito.

Cordova non fornisce alcuna interfaccia utente widget o MV * quadri. Cordova fornisce solo il runtime in cui quelli possono eseguire. Se si desidera utilizzare widget UI e/o un quadro MV *, devi selezionare quelli e includerli nell'applicazione voi stessi come materiale di terze parti.

## Percorsi di sviluppo

A partire dalla versione 3.0, è possibile utilizzare due flussi di lavoro fondamentali per creare un'app mobile. Mentre è spesso possibile utilizzare sia del flusso di lavoro per eseguire lo stesso compito, ognuno di essi offerta vantaggi:

*   **Flusso di lavoro cross-platform (CLI)**: uso questo flusso di lavoro app per funzionare su sistemi operativi diversi come molti mobili possibili, con poco necessario per lo sviluppo di specifiche della piattaforma. Questo flusso di lavoro centri intorno il `cordova` utilità, altrimenti noto come il Cordova *CLI*, introdotta con la 3.0 di Cordova. Il CLI è uno strumento ad alto livello che consente di costruire progetti per numerose piattaforme contemporaneamente, astraendo tanto lontano delle funzionalità di script di shell di basso livello. CLI copia una serie comune di risorse web in sottodirectory per ogni piattaforma mobile, rende le modifiche di configurazione necessarie per ciascuno, esegue gli script di compilazione per generare binari di applicazione. CLI fornisce anche un'interfaccia comune per applicare il plugin all'app. Per maggiori dettagli su CLI, vedere l'interfaccia della riga di comando. Se non avete una necessità per il workflow di piattaforma-centrato, è consigliato il flusso di lavoro multi-piattaforma.

*   **Piattaforma centrata sul flusso di lavoro**: utilizzare questo flusso di lavoro se si desidera concentrarsi sulla costruzione di un app per una singola piattaforma e devono essere in grado di modificarlo a un livello inferiore. È necessario utilizzare questo approccio, ad esempio, se si desidera che l'app per miscelare i componenti nativi personalizzati con componenti basati su web di Cordova, come discusso in visualizzazioni Web Embedding. Come regola generale, utilizzare questo flusso di lavoro, se è necessario modificare il progetto all'interno del SDK. Questo flusso di lavoro si basa su un insieme di script di shell di basso livello che sono su misura per ogni piattaforma supportata e un'utilità separata Plugman che consente di applicare il plugin. Mentre è possibile utilizzare questo flusso di lavoro per costruire applicazioni multipiattaforma, è generalmente più difficile perché la mancanza di uno strumento di livello superiore significa cicli compilazione separata e modificazioni del plugin per ogni piattaforma. Ancora, questo flusso di lavoro consente un maggiore accesso alle opzioni di sviluppo fornito da ogni SDK ed è essenziale per applicazioni ibride complesse. Vedere le varie guide di piattaforma per dettagli su utility di shell disponibili su ogni piattaforma.

Quando prima di partire, potrebbe essere più semplice utilizzare il flusso di lavoro multi-piattaforma per creare un'app, come descritto in l'interfaccia della riga di comando. Poi hai la possibilità di passare a una piattaforma centrata del flusso di lavoro se è necessario il SDK fornisce un controllo maggiore. Utility shell di basso livello sono disponibili presso [cordova.apache.org][1] in una distribuzione separata rispetto la CLI. Per i progetti inizialmente generati da CLI, questi strumenti di shell sono disponibili anche in progetto di varie `platforms/*/cordova` directory.

**Nota**: una volta che si passa dal flusso di lavoro basato su CLI a uno centrato il SDK della piattaforma-specifiche e strumenti di guscio, non si può andare indietro. CLI mantiene un insieme comune di codice sorgente di piattaforme, che su ogni compilazione si utilizza per scrivere codice sorgente specifiche della piattaforma. Per conservare le modifiche apportate alle attività specifiche della piattaforma, è necessario passare agli strumenti centrato piattaforma shell, che ignorano il codice sorgente della multipiattaforma, e invece si basa sul codice sorgente di specifiche della piattaforma.

## L'installazione di Cordova

L'installazione di Cordova sarà diverso a seconda del flusso di lavoro sopra che si sceglie:

*   Flusso di lavoro cross-piattaforma: vedere l'interfaccia della riga di comando.

*   Piattaforma centrata sul flusso di lavoro: vedere le guide di piattaforma.

Dopo l'installazione di Cordova, si consiglia di consultare le guide di piattaforma per le piattaforme mobili che si verranno sviluppando per. Si raccomanda inoltre di esaminare anche la guida Privacy, Security [Guide](../../index.html) e prossimi passi. Per la configurazione di Cordova, vedere il File config. Xml. Per accedere a una funzione nativa su un dispositivo da JavaScript, vedere il Plugin APIs. E consultare le altre guide incluse come necessario.