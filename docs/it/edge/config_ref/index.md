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

# Riferimento di configurazione

Molti aspetti del comportamento di un'applicazione possono essere controllati con un file di configurazione indipendente dalla piattaforma, `config.xml` , che è formattato in base alle specifiche di W3C [Confezionato Web Apps (widget)][1] .

 [1]: http://www.w3.org/TR/widgets/

Per i progetti creati con Cordova CLI (descritto nella interfaccia Command-Line), questo file può essere trovato nel primo livello `www` directory. Utilizzando la CLI per compilare i progetti vengono rigenerate le versioni di questo file nelle sottodirectory all'interno di `platforms` . Per i progetti non-CLI, ciascun file di specifica della piattaforma serve come fonte.

Mentre la posizione del `config.xml` file può cambiare a seconda della piattaforma, i contenuti, generalmente non. Alcune caratteristiche specifiche della piattaforma sono inoltre specificati nello stesso file di configurazione. Dettagli sono elencati di seguito:

*   iOS Configuration
*   Android configurazione
*   Configurazione di blackBerry

## config. XML gli elementi

Il progetto [Apache Cordova][2] si sforza specifiche astratte via piattaforma nativa tramite astrazioni ispirazione web e web-based che sono pesantemente standard guidato e adottato dalla comunità web. Si prega di prendere qualche minuto per familiarizzare con la [specifica del file config. xml][1], per capire il tipo di metadati di applicazione del progetto Apache Cordova propone di astratto e fornire punti di ingresso semplice per.

 [2]: http://cordova.io

Un esempio:

        < widget >< nome di preferenza = valore "MySetting" = "true" / >< nome funzione = "MyPlugin" value = "MyPluginClass" / >< accesso origine = "*" / >< src="index.html di contenuto" / >< / widget >
    

Seguire un elenco di elementi supportati su piattaforme principali che sono supportati in Apache Cordova.

### `<feature>`

Questi elementi Mapping API native che l'applicazione acceda. In fase di esecuzione, il framework Apache Cordova mappe `<feature>` elementi in codice nativo per abilitare l'applicazione dispositivo API altrimenti non disponibili alle tipiche applicazioni basate su web di accedere a Cordova.

### `<access>`

Questi elementi definiscono come tua whitelist funziona. Vedere la guida di Whitelist dominio per ulteriori informazioni.

### `<content>`

Questo elemento definisce pagina iniziale dell'applicazione rispetto alla directory principale del progetto web standard beni. Questo elemento è opzionale, il valore predefinito è`index.html`.