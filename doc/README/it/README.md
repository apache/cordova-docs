# Documentazione di Apache Cordova API

La documentazione API JavaScript per [Apache Cordova](http://cordova.io/).

La documentazione è disponibile presso [docs.cordova.io](http://docs.cordova.io/).

## Formato della documentazione

Tutta la documentazione di [Apache Cordova](http://cordova.io/) è scritto con [markdown](http://daringfireball.net/projects/markdown/syntax), un linguaggio di markup leggero che può essere impaginare in HTML. Markdown consente di documentare il nucleo di Cordova API e API specifiche della piattaforma in modo semplice e flessibile.

## Struttura dei file

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## Contribuire alla documentazione

### Segnalare o risolvere un problema

Utilizziamo [Apache JIRA](https://issues.apache.org/jira/browse/CB)

A proposito, è rock! Grazie per averci aiutato a migliorare la documentazione!

### Uso di Git

Sei nuovo a Git o contribuendo su GitHub?

Abbiamo [scritto un paio di Git tutorial](http://wiki.apache.org/cordova/ContributorWorkflow) per aiutarvi a iniziare a contribuire alla documentazione.

### L'invio di richieste di Pull

Tirare le richieste sono benvenute!

Apprezziamo l'uso dei rami di argomento.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### L'aggiunta di una lingua

Vuoi che la documentazione di Apache Cordova in un'altra lingua? Lo facciamo anche noi! Con il supporto della piattaforma di gestione [Crowdin](http://crowdin.net/project/cordova), traduzione e localizzazione, traduttori collegarti alla lavorazione con utensili di facile da usare e fornire tanto o poichè poca assistenza di traduzione come vorrebbero. Se si conosce un'altra lingua si prega di sostenere Cordova e contribuire. http://crowdin.net/project/cordova. Per alcune procedure consigliate per l'utilizzo lo strumento Crowdin si prega di consultare il nostro wiki http://wiki.apache.org/cordova/CordovaTranslations.

Gli amministratori di lingua di Cordova, non dimenticare questi passaggi:

**1. config**

Per ogni lingua e versione, c'è un `config` che definisce il nome della lingua e come unire i file.

**2. personalizzazione del template HTML**

Ogni lingua può sovrascrivere il template predefinito nella `Lingua/docs/modello`.

### Direttive editoriali

Vedere il file `STYLEGUIDE.md` per le linee guida sull'utilizzo e la lingua.

## La generazione della documentazione con node. js

In questo momento la documentazione potrebbe essere eseguito utilizzando node. js su Windows o su Linux box.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English Dev docs
    $ ./bin/genjs ru dev    # compile Russian Dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### Configurazione di node. js

  1. Vai a node. js [pagina downloads](http://nodejs.org/download/)
  2. Scaricare e installare il pacchetto per il sistema di funzionamento.
  3. Check-out questo repository utilizzando Git

        git clone https://github.com/apache/cordova-docs


  4. Installare le dipendenze. Nella radice della cartella clonata cordova-docs eseguita

        npm install


  5. Ora siete in grado di generare documentazione locale.

### Anteprima rapida

Quando si apportano le modifiche minori, è solitamente sicuro semplicemente rendere il modificato da Markdown a HTML. Molti editor di codice sono plugin per eseguire il rendering HTML Markdown e ci sono una manciata di [buoni](http://dillinger.io/) editor online.

Attualmente, un node. js script e [joDoc-js](https://github.com/kant2002/jodoc-js) vengono utilizzati per generare la documentazione HTML.

## Generazione di una rilascio di versione

C'è un compito di Rake per incrementare il numero di versione, la directory della versione di generare e aggiornare la documentazione di bordo.

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0
