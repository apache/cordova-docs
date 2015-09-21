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

Dominio whitelisting è un modello di sicurezza che controlla l'accesso a domini esterni, oltre che l'applicazione non ha alcun controllo. Cordova fornisce una politica di sicurezza configurabili per definire quali siti esterni possono accedere. Per impostazione predefinita, nuove applicazioni sono configurate per consentire l'accesso a qualsiasi sito. Prima di spostare l'applicazione di produzione, si dovrebbe formulare una whitelist e consentire l'accesso alla rete specifici domini e sottodomini.

Per Android e iOS (a partire dal loro 4,0 comunicati), criteri di sicurezza di Cordova sono estensibile tramite un'interfaccia del plugin. L'app deve usare [cordova-plugin-whitelist][1], poiché fornisce la migliore protezione e configurabilità rispetto alle precedenti versioni di Cordova. Mentre è possibile implementare il tuo plugin whitelist, non è raccomandato a meno che l'app ha esigenze di politiche di sicurezza molto specifici. Vedere il [cordova-plugin-whitelist][1] per dettagli su utilizzo e configurazione.

 [1]: https://github.com/apache/cordova-plugin-whitelist

Per altre piattaforme, Cordova aderisce alla specifica [W3C Widget di accesso][2] , che si basa sull'elemento `< accesso >` all'interno del file `config. xml` dell'applicazione per consentire l'accesso di rete a domini specifici. Per i progetti che si basano sul flusso di lavoro CLI descritto in l'interfaccia della riga di comando, questo file si trova nella directory principale del progetto. Altrimenti per percorsi di sviluppo specifico della piattaforma, posizioni sono elencati nelle sezioni qui sotto. (Vedi le varie guide di piattaforma per ulteriori informazioni su ogni piattaforma).

 [2]: http://www.w3.org/TR/widgets-access/

Negli esempi seguenti viene `< access >` whitelist sintassi:

*   Accesso a [google.com][3]:
    
        <access origin="http://google.com" />
        

*   Accesso al sicuro [google.com][4] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Accesso per il sottodominio [maps.google.com][5]:
    
        <access origin="http://maps.google.com" />
        

*   Accesso a tutti i sottodomini su [google.com][3], ad esempio [mail.google.com][6] e [docs.google.com][7]:
    
        <access origin="http://*.google.com" />
        

*   Accesso a *tutti i* domini, ad esempio, [google.com][3] e [developer.mozilla.org][8]:
    
        <access origin="*" />
        
    
    Questo è il valore predefinito per i progetti CLI appena creati.

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

Essere consapevoli del fatto che alcuni siti Web possono reindirizzare automaticamente dalla loro home page per un url diverso, ad esempio utilizzando il protocollo https o a un dominio specifico paese. Ad esempio http://www.google.com reindirizzerà per utilizzare SSL/TLS a https://www.google.com e poi ulteriormente può reindirizzare a una geografia come https://www.google.co.uk. Tali scenari possono richiedere voci whitelist modificate o aggiuntive oltre il requisito iniziale. Si prega di considerare questo come si stanno costruendo la tua whitelist.

Si noti che la whitelist si applica solo ai principali webview Cordova e non si applica a un InAppBrowser webview o apertura link nel browser web di sistema.

## Amazon fuoco OS Whitelisting

Le regole specifiche della piattaforma whitelisting si trovano in `res/xml/config.xml`.

## Android Whitelisting

Come sopra, vedere [cordova-plugin-whitelist][1] per dettagli. Per cordova-android prima 4.0.0, vedere versioni precedenti di questa documentazione.

## iOS Whitelisting

Come sopra, vedere [cordova-plugin-whitelist][1] per dettagli. Per cordova-ios prima 4.0.0, vedere versioni precedenti di questa documentazione.

## BlackBerry 10 Whitelisting

Le regole di whitelisting si trovano in `www/config.xml`.

Uso di blackBerry 10 di caratteri jolly si differenzia da altre piattaforme in due modi:

*   Qualsiasi contenuto accessibile da `XMLHttpRequest` deve essere dichiarato in modo esplicito. L'impostazione `origin="*"` non funziona in questo caso. In alternativa, protezione web tutti possa essere disattivata utilizzando la preferenza di `WebSecurity` descritta in configurazione del BlackBerry:
    
        <preference name="websecurity" value="disable" />
        

*   Come alternativa all'impostazione `*.domain`, un attributo aggiuntivo `subdomains` impostato su `true`. Deve essere impostata su `false` per impostazione predefinita. Ad esempio, la seguente consente l'accesso a `google.com`, `maps.google.com`e `docs.google.com`:
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Il seguente si restringe l'accesso al `google.com`:
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Specificare l'accesso a tutti i domini, compreso il protocollo locale `file://` :
    
        <access origin="*" subdomains="true" />
        

(Per ulteriori informazioni sul supporto, vedere documentazione di BlackBerry nell' [elemento di accesso][9].)

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

## Windows Phone Whitelisting

Le regole di whitelisting per Windows Phone 8 si trovano nel file `config. xml` dell'applicazione.

## Tizen Whitelisting

Regole di whitelisting si trovano nel file `config. xml` dell'applicazione. La piattaforma si basa sullo stesso attributo di `subdomains` come la piattaforma BlackBerry. (Per ulteriori informazioni sul supporto, vedere documentazione di Tizen sull' [elemento di accesso][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm