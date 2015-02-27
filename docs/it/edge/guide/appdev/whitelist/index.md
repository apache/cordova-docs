* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guida di whitelist

Dominio whitelisting è un modello di sicurezza che controlla l'accesso a domini esterni, oltre che l'applicazione non ha alcun controllo. Criteri di protezione predefiniti di Cordova consentono l'accesso a qualsiasi sito. Prima di spostare l'applicazione di produzione, si dovrebbe formulare una whitelist e consentire l'accesso alla rete specifici domini e sottodomini.

Cordova aderisce alla specifica [W3C Widget di accesso][1] , che si basa sulla `<access>` elemento all'interno dell'app `config.xml` file per abilitare l'accesso alla rete a domini specifici. Per i progetti che si basano sul flusso di lavoro CLI descritto in l'interfaccia della riga di comando, questo file si trova nella directory principale del progetto. Altrimenti per percorsi di sviluppo specifico della piattaforma, posizioni sono elencati nelle sezioni qui sotto. (Vedi le varie guide di piattaforma per ulteriori informazioni su ogni piattaforma).

 [1]: http://www.w3.org/TR/widgets-access/

Negli esempi seguenti viene whitelist sintassi:

*   Accesso a [google.com][2]:
    
        <access origin="http://google.com" />
        

*   Accesso al sicuro [google.com][3] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Accesso per il sottodominio [maps.google.com][4]:
    
        <access origin="http://maps.google.com" />
        

*   Accesso a tutti i sottodomini su [google.com][2], ad esempio [mail.google.com][5] e [docs.google.com][6]:
    
        <access origin="http://*.google.com" />
        

*   Accesso a *tutti i* domini, ad esempio, [google.com][2] e [developer.mozilla.org][7]:
    
        <access origin="*" />
        
    
    Questo è il valore predefinito per i progetti CLI appena creati.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

Essere consapevoli del fatto che alcuni siti Web possono reindirizzare automaticamente dalla loro home page per un url diverso, ad esempio utilizzando il protocollo https o a un dominio specifico paese. Ad esempio http://www.google.com reindirizzerà per utilizzare SSL/TLS a https://www.google.com e poi ulteriormente può reindirizzare a una geografia come https://www.google.co.uk. Tali scenari possono richiedere voci whitelist modificate o aggiuntive oltre il requisito iniziale. Si prega di considerare questo come si stanno costruendo la tua whitelist.

Si noti che la whitelist si applica solo ai principali webview Cordova e non si applica a un InAppBrowser webview o apertura link nel browser web di sistema.

## Amazon fuoco OS Whitelisting

Le regole specifiche della piattaforma whitelisting si trovano in `res/xml/config.xml`.

## Android Whitelisting

Le regole specifiche della piattaforma whitelisting si trovano in `res/xml/config.xml`.

**Nota**: su Android 2.3 e prima, dominio whitelist funziona solo per i collegamenti ipertestuali `href`, non fa riferimento a risorse quali immagini e script. Prendere provvedimenti per evitare gli script da essere iniettato nell'applicazione.

**Nota**: al fine di prevenire gli URL esterni come `mailto:` da essere aperto in webview Cordova a partire da Cordova 3.6.0, specificando `origin="*"` contenuto aggiungerà le regole per i protocolli http e https. Se si richiede l'accesso a ulteriori protocolli personalizzati, poi si dovrebbe anche aggiungere in modo esplicito alla whitelist. Vedi anche "Esterno applicazione Whitelist" sotto per ulteriori informazioni sull'avvio di applicazioni esterne di URL.

**Nota**: alcune richieste di rete non andare attraverso la Cordova Whitelist. Questo include < video > e < audio > resouces WebSocket connessioni (4.4 + Android) e possibilmente altre richieste non http. 4.4 + Android, è possibile includere un'intestazione [CSP][8] nei documenti HTML per limitare l'accesso a tali risorse. Su vecchie versioni di Android, potrebbe non essere possibile limitarli.

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### Applicazione esterna Whitelist

Cordova 3.6.0 introduce un secondo whitelist, per la limitazione che gli URL sono autorizzati a lanciare applicazioni esterne. Nelle versioni precedenti di Cordova, tutti gli URL non http, come `mailto:`, `geo:`, `sms:` e `intent`, implicitamente sono stati autorizzati a essere il bersaglio di un < > tag. A causa del potenziale per un'applicazione per informazioni sulle perdite, se una vulnerabilità XSS consente a un utente malintenzionato di costruire collegamenti arbitrari, questi URL devono essere whitelisted pure, a partire da Cordova 3.6.0.

Per consentire a un modello di URL lanciare un'applicazione esterna, utilizzare un tag <access> nel file `config. xml`, con il set di attributi di `launch-external`.

Esempi:

*   Per consentire i collegamenti inviare messaggi SMS:
    
        <access origin="sms:*" launch-external="yes" />
        

*   Per consentire i collegamenti aprire le mappe:
    
        <access origin="geo:*" launch-external="yes" />
        

*   Per consentire i collegamenti a example.com per aprire in un browser esterno:
    
        <access origin="http://example.com/*" launch-external="yes" />
        

*   Per consentire a tutti i siti Web non-whitelisted ad aprire in un browser esterno: (questo è lo stesso come il precedente comportamento per gli URL non whitelisted)
    
        <access origin="http://*" launch-external="yes" />
        <access origin="https://*" launch-external="yes" />
        

*   Per consentire l'accesso a tutti gli URL, ripristinando la politica di Cordova 3.5.0 (non consigliata):
    
        <access origin="*" launch-external="yes" />
        

Navigazione verso un URL all'interno dell'applicazione, la whitelist interal viene verificato prima, e se l'URL non ci whitelisted, viene testata la whitelist esterni. Questo significa che qualsiasi `http:` o `https:` URL che corrispondono entrambi whitelists sarà aperto all'interno dell'applicazione di Cordova, piuttosto che lanciare il browser esterno.

## iOS Whitelisting

Regole di whitelisting della piattaforma si trovano nel file `config.xml` nella directory applicazione denominata.

Origini specificato senza un protocollo, ad esempio `www.apache.org` anziché `http://www.apache.org`, impostazione predefinita a tutti il `http`, `https`, `ftp` e `ftps` schemi.

Caratteri jolly sulla piattaforma iOS sono più flessibile nella specifica [W3C Widget access][1]. Ad esempio, il seguente accede a tutti i sottodomini e domini di primo livello come `. com` e `.net`:

        <access origin="*.google.*" />
    

A differenza della piattaforma Android sopra indicata, navigando per domini non whitelisted via `href` collegamento ipertestuale su iOS impedisce la pagina di apertura a tutti.

## BlackBerry 10 Whitelisting

Le regole di whitelisting si trovano in `www/config.xml`.

Uso di blackBerry 10 di caratteri jolly si differenzia da altre piattaforme in due modi:

*   Qualsiasi contenuto accessibile da `XMLHttpRequest` deve essere dichiarato in modo esplicito. L'impostazione di `origin="*"` non funziona in questo caso. In alternativa, tutta la sicurezza web può essere disattivata utilizzando il `WebSecurity` preferenza descritto in configurazione del BlackBerry:
    
        <preference name="websecurity" value="disable" />
        

*   In alternativa all'impostazione `*.domain` , impostare un ulteriore `subdomains` attribuire a `true` . Deve essere impostato su `false` per impostazione predefinita. Ad esempio, il seguente consente l'accesso a `google.com` , `maps.google.com` , e `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    La seguente restringe accedi a `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Specificare l'accesso a tutti i domini, tra cui il locale `file://` protocollo:
    
    <access origin="*" subdomains="true" />

(Per ulteriori informazioni sul supporto, vedere documentazione di BlackBerry nell' [access element][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

Nel sistema operativo Firefox esiste il concetto di whitelisting un dominio specifico. Invece c'è una speciale autorizzazione denominata [SystemXHR][10]. È necessario aggiungere questa autorizzazione a `config. xml`:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

L'oggetto `XMLHttpRequest` deve essere istanziata con due parametri `mozAnon` e `mozSystem`:

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

Questa soluzione è trasparente, quindi non non c'è nessuna differenza per altre piattaforme.

## Cambiamenti iOS 3.1.0

Prima della versione 3.1.0, Cordova-iOS incluso alcune estensioni non standard per il dominio whilelisting regime sostenuto da altre piattaforme di Cordova. A partire da 3.1.0, whitelist iOS ora conforme alla sintassi whitelist risorsa descritta nella parte superiore di questo documento. Se si aggiorna da pre-3.1.0, e si sono utilizzando queste estensioni, potrebbe essere necessario modificare il file `config. xml` per continuare whitelisting lo stesso insieme di risorse come prima.

In particolare, questi modelli devono essere aggiornati:

*   " `apache.org` " (nessun protocollo): questo sarebbe partita precedentemente `http` , `https` , `ftp` , e `ftps` protocolli. Modificare in " `*://apache.org/*` " per includere tutti i protocolli, o includere una riga per ogni protocollo è necessario supportare.

*   " `http://apache.*` " (jolly alla fine del dominio): questo sarebbe partita in precedenza tutti i top-level-domini, tra cui possibili due lettere tutti i TLD (ma come non utili domini. co.uk). Includere una riga per ogni TLD che in realtà è possibile controllare e bisogno di whitelist.

*   " `h*t*://ap*he.o*g` " (i caratteri jolly per lettere mancanti casuali): questi non sono più supportati; cambiamento di includere una riga per ogni dominio e protocollo che tu effettivamente necessario whitelist.

## Windows Phone Whitelisting

Le regole di whitelisting per Windows Phone 8 si trovano nel file `config. xml` dell'applicazione.

## Tizen Whitelisting

Regole di whitelisting si trovano nel file `config. xml` dell'applicazione. La piattaforma si basa sullo stesso attributo di `subdomains` come la piattaforma BlackBerry. (Per ulteriori informazioni sul supporto, vedere documentazione di Tizen sull' [elemento di accesso][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm