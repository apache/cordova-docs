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

title: Guida di whitelist
---

# Guida di whitelist

## Panoramica

Risorsa whitelisting è un modello di sicurezza che controlla accesso alle risorse di rete esterni, come ad esempio `http://google.com` . Criteri di protezione predefiniti di Cordova Apache consentono l'accesso a qualsiasi risorsa su qualsiasi sito su Internet. Prima di spostare l'applicazione di produzione, si dovrebbe rivedere la sua whitelist e dichiarare l'accesso alla rete specifici domini e sottodomini.

## Specifica

Dominio whitelisting getta le basi per la specifica [W3C Widget accesso][1] . Nella specifica di Widget accesso il `<access>` elemento viene utilizzato per dichiarare l'accesso alle risorse di rete specifici. Apache Cordova si estende questo concetto per consentire whitelisting delle singole risorse di rete (URL). In futuro, Apache Cordova sarà astratta le implementazioni di whitelisting piattaforma. Tuttavia, per ora ogni piattaforma implementa un proprio dominio o risorsa whitelisting. Le differenze tra le implementazioni della piattaforma sono descritti più avanti in questo documento.

 [1]: http://www.w3.org/TR/widgets-access/

Il formato generico per le voci whitelist segue la specifica "[corrispondenza modello][2]" per Google Chrome confezionato Apps. Le risorse sono specificate da URL, ma un asterisco (*) personaggio può essere utilizzato come un "jolly" in luoghi diversi per indicare "qualsiasi valore può andare qui". Seguito sono riportati esempi specifici.

 [2]: http://developer.chrome.com/apps/match_patterns.html

## Sintassi

Accesso a tutte le risorse su [google.com][3]:

 [3]: http://google.com

    http://google.com/*
    

Accesso a tutte le risorse al sicuro [google.com][4] ( `https://` ):

 [4]: https://google.com

    https://Google.com/ *
    

Accesso per il sottodominio specifico [maps.google.com][5]:

 [5]: http://maps.google.com

    http://maps.google.com/*
    

Accesso a tutti i sottodomini su [google.com][3] (ad esempio, [mail.google.com][6] e [docs.google.com][7]):

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

Accesso a tutte le risorse su [www.google.com][8] "/ mobile" nel percorso:

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

Accesso a [google.com][3] su qualsiasi protocollo (ad esempio, HTTP, HTTPS, FTP, ecc.):

    *://google.com/*
    

Accesso a tutte le risorse su Internet (ad esempio, [google.com][3] e [developer.mozilla.org][9]):

 [9]: http://developer.mozilla.org

    *
    

## Android

### Dettagli

Le regole di whitelisting si trovano in `res/xml/config.xml` e dichiarata con l'elemento`<access origin="..." />`.

Android supporta pienamente la sintassi di whitelisting.

### Sintassi

Accesso a [google.com][3]:

    <access origin="http://google.com/*" />
    

## BlackBerry 10

### Dettagli

Le regole di whitelisting si trovano in `www/config.xml` e dichiarata con l'elemento`<access origin="..." />`.

BlackBerry 10 gestisce i caratteri jolly in modo diverso da altre piattaforme in due modi:

1) Contenuto accessibile da XMLHttpRequest deve essere dichiarato in modo esplicito. origine = "*" non saranno rispettati per questo caso di utilizzo. In alternativa, tutta la sicurezza web può essere disattivata utilizzando una preferenza.

2) sottodomini = "true" può essere usato al posto di "* .domain"

### Sintassi

Accesso a [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Accesso a [maps.google.com][5]:

    <access origin="http://maps.google.com" subdomains="false" />
    

Accesso a tutti i sottodomini su [Google.it][3]:

    <access origin="http://google.com" subdomains="true" />
    

Accesso a tutti i domini, tra cui `file://` protocollo:

    <access origin="*" subdomains="true" />
    

Disattivare tutti i web security:

    <preference name="websecurity" value="disable" />
    

## iOS

### Dettagli

Le regole di whitelisting si trovano in `AppName/config.xml` e dichiarata con l'elemento`<access origin="..." />`.

iOS supporta pienamente la sintassi di whitelisting.

### Cambiato in 3.1.0:

Prima della versione 3.1.0, Cordova-iOS incluso alcune estensioni non standard per il dominio whilelisting regime sostenuto da altre piattaforme di Cordova. A partire da 3.1.0, whitelist iOS ora conforme alla sintassi whitelist risorsa descritta nella parte superiore di questo documento. Se si aggiorna da pre-3.1.0, e si sono utilizzando queste estensioni, potrebbe essere necessario cambiare il `config.xml` file al fine di continuare come prima, lo stesso insieme di risorse di whitelisting.

In particolare, questi modelli devono essere aggiornati:

*   " `apache.org` " (nessun protocollo): questo sarebbe partita precedentemente `http` , `https` , `ftp` , e `ftps` protocolli. Modificare in " `*://apache.org/*` " per includere tutti i protocolli, o includere una riga per ogni protocollo è necessario supportare.

*   " `http://apache.*` " (jolly alla fine del dominio): questo sarebbe partita in precedenza tutti i top-level-domini, tra cui possibili due lettere tutti i TLD (ma come non utili domini. co.uk). Includere una riga per ogni TLD che in realtà è possibile controllare e bisogno di whitelist.

*   " `h*t*://ap*he.o*g` " (i caratteri jolly per lettere mancanti casuali): questi non sono più supportati; cambiamento di includere una riga per ogni dominio e protocollo che tu effettivamente necessario whitelist.

### Sintassi

Accesso a [google.com][3]:

    <access origin="http://google.com/*" />
    

## Windows Phone (7 & 8)

Le regole di whitelisting si trovano in `config.xml` e dichiarata con l'elemento`<access origin="..." />`.

### Sintassi

Accesso a [google.com][3]:

    <access origin="http://google.com" />
    

## Tizen

### Dettagli

Directory radice dell'applicazione `config.xml` file specifica le regole di whitelisting dominio, utilizzando il `<access origin="..." />` elemento. Per un riferimento completo, vedere la [documentazione di Tizen l'accesso esterno risorse di rete][10].

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### Sintassi

Accesso a [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Accesso al sicuro [google.com][4] ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

Accesso a tutti i sottodomini su [Google.it][3]:

    <access origin="http://google.com" subdomains="true" />
    

Accesso a tutti i domini, tra cui `file://` protocollo:

    <access origin="*" subdomains="true" />