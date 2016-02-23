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

title: Piattaforme e gestione plugin versione
---

# Piattaforme e gestione plugin versione

Partire dalla versione 4.3.0, Cordova fornisce la possibilità di salvare e ripristinare piattaforme e plugin.

Questa funzionalità consente agli sviluppatori di salvare e ripristinare uno stato noto loro app senza dover controllare in tutto il codice sorgente di piattaforma e plugin.

Il comando 'save' negozi dettagli sulla piattaforma dell'app e versioni plugin config. XML. Il passo 'restore' avviene automaticamente quando un **'cordova prepare'** viene emesso, facendo uso di informazioni precedentemente salvate nel file config. XML.

Uno scenario dove salvare/ripristinare funzionalità tornare utile è in grandi squadre che lavorano su un'app, con ogni membro del team di messa a fuoco su una piattaforma o plugin. Questa caratteristica lo rende più facile per condividere il progetto e ridurre la quantità di codice ridondante che è controllato nel repository.

## Piattaforma di controllo delle versioni

### Piattaforme di risparmio

Per salvare una piattaforma, si utilizza il comando seguente:

    $ cordova platform add <platform[@<version>] | directory | git_url> --save


Dopo aver eseguito il comando precedente, il file config. XML risultante è simile:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>


Alcuni esempi:

  * **'cordova platform add android..--Risparmia'** => recupera la versione bloccata della piattaforma android, si aggiunge al progetto e quindi aggiorna il file config. XML.
  * **'cordova platform add android@3.7.0..--Risparmia'** => recupera la piattaforma android, versione 3.7.0 da npm, si aggiunge al progetto e quindi aggiornamenti config. XML.
  * **'cordova piattaforma aggiungere android @https://github.com/apache/cordova-android.git..--Risparmia'** => cloni il repository git di cordova-android specificato, aggiunge la piattaforma android per il progetto, quindi aggiorna il file config. XML e scegliere la versione git-url specificato.
  * **'cordova platform add c: / percorso/per/android/piattaforma - Risparmia'** => recupera la piattaforma android dalla directory specificata, si aggiunge al progetto, quindi gli aggiornamenti config. XML e punto alla directory.

### Massa di piattaforme di risparmio su un progetto esistente

La '--save ' bandiera sopra descritto è utile solo quando si ricorda di usarlo durante l'aggiunta di piattaforma. Se avete un progetto preesistente e si desidera salvare tutte le piattaforme attualmente aggiunta nel progetto, è possibile utilizzare:

    $ cordova platform save


### Aggiornamento / rimozione di piattaforme

È anche possibile update/delete da config. XML durante i comandi 'cordova platform update' e 'cordova piattaforma rimuovere':

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save


Alcuni esempi:

  * **'cordova aggiornamento della piattaforma android - Salva'** => oltre ad aggiornare la piattaforma android per la versione bloccata, voce del file config. XML di aggiornamento
  * **'cordova piattaforma aggiorna android@3.8.0..--Risparmia'** => oltre ad aggiornare la piattaforma android alla versione 3.8.0, voce del file config. XML di aggiornamento
  * **'cordova piattaforma aggiorna /path/to/android/platform..--Risparmia'** => oltre ad aggiornare la piattaforma android alla versione nella cartella, la voce del file config. XML di aggiornamento
  * **'cordova piattaforma rimuovere android..--Risparmia'** => rimuove la piattaforma android dal progetto e relativa voce viene eliminata dal file config. XML.

### Ripristino di piattaforme

Quando viene eseguito il comando **'cordova preparare'** , piattaforme vengono ripristinati automaticamente dal file config. XML.

Se si aggiunge una piattaforma senza specificare una versione/cartella/git_url, la versione da installare è preso dal file config. XML, **se trovato**.

Esempio:

Si supponga che il file config. XML contiene la seguente voce:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>


Se si esegue il comando **'cordova platform add android'** (nessuna versione/cartella/git_url specificato), verrà installata la piattaforma 'android@3.7.0' (come Estratto dal file config. Xml).

* * *

## Controllo delle versioni plugin

*(I comandi di plugin sono uno specchio dei comandi plugin)*

### Plugin di risparmio

Per salvare un plugin, si utilizza il comando seguente:

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save


Dopo aver eseguito il comando precedente, il file config. XML risultante è simile:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>


Alcuni esempi:

  * **'cordova plugin Aggiungi cordova-plugin-console - Risparmia'** => recupera la versione bloccata del plugin console, si aggiunge al progetto e quindi aggiorna il file config. XML.
  * **'cordova plugin Aggiungi cordova-plugin-console@0.2.13 - Risparmia'** => Recupera il plugin android, versione 0.2.13 da npm, si aggiunge al progetto e quindi aggiornamenti config. XML.
  * **'cordova plugin Aggiungi https://github.com/apache/cordova-plugin-console.git - Risparmia'** => cloni il repository git di plugin console specificato, aggiunge il plugin console al progetto, quindi aggiorna il file config. XML e scegliere la versione git-url specificato.
  * **'cordova plugin aggiungere c: / percorso/per/console/plugin-- Salva'** => Recupera il plugin console dalla directory specificata, si aggiunge al progetto, quindi gli aggiornamenti config. XML e punto alla directory.

### Massa plugin di risparmio su un progetto esistente

La '..--salvare ' bandiera sopra descritto è utile solo quando si ricorda di usarlo durante l'aggiunta di plugin. Se avete un progetto preesistente e si desidera salvare tutti attualmente aggiunto plugin nel progetto, è possibile utilizzare:

    $ cordova plugin save


### Aggiornamento / rimozione plugin

È anche possibile update/delete da config. XML durante i comandi 'cordova plugin update' e 'cordova plugin rimuovere':

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save


Alcuni esempi:

  * **'cordova plugin Aggiorna cordova-plugin-console - Risparmia'** => oltre ad aggiornare il plugin di console per la versione bloccata, voce del file config. XML di aggiornamento
  * **'cordova plugin Aggiorna cordova-plugin-console@0.2.13..--Risparmia'** => oltre ad aggiornare il plugin android alla versione 3.8.0, voce del file config. XML di aggiornamento
  * **'cordova plugin Aggiorna /path/to/console/plugin..--Risparmia'** => oltre ad aggiornare il plugin di console alla versione nella cartella, la voce del file config. XML di aggiornamento
  * **'cordova plugin Rimuovere cordova-plugin-console - Risparmia'** => rimuove il plugin console dal progetto e relativa voce viene eliminata dal file config. XML.

### Ripristino di plugin

Plugin vengono ripristinati automaticamente dal file config. XML quando viene eseguito il comando **'cordova preparare'** .

Se si aggiunge un plugin senza specificare una versione/cartella/git_url, la versione da installare è preso dal file config. XML, **se trovato**.

Esempio:

Si supponga che il file config. XML contiene la seguente voce:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>


Se si esegue il comando **'cordova plugin Aggiungi cordova-plugin-console'** (nessuna versione/cartella/git_url specificato), verrà installato il plugin 'cordova-plugin-console@0.2.11' (come Estratto dal file config. Xml).
