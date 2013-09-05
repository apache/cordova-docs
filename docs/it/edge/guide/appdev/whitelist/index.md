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

# Dominio Whitelist guida

## Panoramica

Dominio whitelisting è un modello di sicurezza che controlla l'accesso a domini esterni, come `http://google.com` . Criteri di protezione predefiniti di Cordova Apache consentono l'accesso a qualsiasi sito. Prima di spostare l'applicazione di produzione, si dovrebbe rivedere la sua whitelist e dichiarare l'accesso alla rete specifici domini e sottodomini.

## Specifica

Dominio whitelisting getta le basi per la specifica [W3C Widget accesso][1] . Nella specifica di Widget accesso il `<access>` elemento viene utilizzato per dichiarare l'accesso ai domini di rete specifica. In futuro, Apache Cordova sarà astratta le implementazioni di whitelisting piattaforma alla specifica W3C Widget accesso. Tuttavia, per ora, ogni piattaforma deve implementare un proprio dominio whitelisting.

 [1]: http://www.w3.org/TR/widgets-access/

## Sintassi

Accesso a [google.com][2]:

 [2]: http://google.com

    http://google.com
    

Accesso al sicuro [google.com][3] ( `https://` ):

 [3]: https://google.com

    https://google.com
    

Accesso per il sottodominio [maps.google.com][4]:

 [4]: http://maps.google.com

    http://maps.google.com
    

Accesso a tutti i sottodomini su [google.com][2] (ad esempio, [mail.google.com][5] e [docs.google.com][6]):

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

Accesso a tutti i domini (per esempio, [google.com][2] e [developer.mozilla.org][7]):

 [7]: http://developer.mozilla.org

    *
    

## Android

### Dettagli

Le regole di whitelisting si trovano in `res/xml/config.xml` e dichiarata con l'elemento`<access origin="..." />`.

Android supporta pienamente la sintassi di whitelisting.

### Sintassi

Accesso a [google.com][2]:

    <access origin="http://google.com" />
    

## BlackBerry

### Dettagli

Le regole di whitelisting si trovano in `www/config.xml` e dichiarata con l'elemento`<access uri="..." />`.

Per un riferimento completo, vedere la [documentazione di BlackBerry WebWorks accesso elemento][8].

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### Sintassi

Accesso a [google.com][2]:

    <access uri="http://google.com" subdomains="false" />
    

Accesso a [maps.google.com][4]:

    <access uri="http://maps.google.com" subdomains="false" />
    

Accesso a tutti i sottodomini su [Google.it][2]:

    <access uri="http://google.com" subdomains="true" />
    

Accesso a tutti i domini, tra cui `file://` protocollo:

    <access uri="*" subdomains="true" />
    

## iOS

### Dettagli

Le regole di whitelisting si trovano in `AppName/config.xml` e dichiarata con l'elemento`<access origin="..." />`.

iOS supporta pienamente la sintassi di whitelisting.

**Nota:** origini specificati senza un protocollo, ad esempio `www.apache.org` anziché `http://www.apache.org` , predefinito a tutti i `http` , `https` , `ftp` , e `ftps` regimi.

### Sintassi

Caratteri jolly su iOS ( `*` ) sono più flessibili rispetto alla specifica [W3C Widget accesso][1] .

Accesso a tutti i sottodomini e TLD ( `.com` , `.net` , ecc):

    *.google.*
    

## Windows Phone (7 & 8)

Le regole di whitelisting si trovano in `config.xml` e dichiarata con l'elemento`<access origin="..." />`.

Android supporta pienamente la sintassi di whitelisting.

### Sintassi

Accesso a [google.com][2]:

    <access origin="http://google.com" />
    

## Tizen

### Dettagli

Directory radice dell'applicazione `config.xml` file specifica le regole di whitelisting dominio, utilizzando il `<access origin="..." />` elemento. Per un riferimento completo, vedere \[documentazione Tizen l'accesso esterno risorse di rete\] \[10\].

### Sintassi

Accesso a [google.com][2]:

    <access origin="http://google.com" subdomains="false" />
    

Accesso al sicuro [google.com][3] ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

Accesso a tutti i sottodomini su [Google.it][2]:

    <access origin="http://google.com" subdomains="true" />
    

Accesso a tutti i domini, tra cui `file://` protocollo:

    <access origin="*" subdomains="true" />