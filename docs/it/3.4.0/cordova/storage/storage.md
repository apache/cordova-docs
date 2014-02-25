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

# Archiviazione

> Una panoramica delle opzioni di archiviazione per Cordova.

Archiviazione diverse API sono disponibili per applicazioni di Cordova. Vedi [html5rocks][1]. per una panoramica più completa ed esempi.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

Conosciuto anche come *web storage*, *archiviazione semplice*, o dalla sua interfaccia alternativa *archiviazione della sessione* , questa API fornisce archiviazione coppia chiave/valore sincrona ed è disponibile in implementazioni di WebView sottostante. Consultare [le specifiche W3C][2] per dettagli.

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 Quirk**: notazione del punto è *non* disponibile, quindi assicuratevi di utilizzare `setItem` o `getItem` piuttosto che accedere ai tasti direttamente dall'oggetto di archiviazione, come in`window.localStorage.someKey`.

## WebSQL

Questa API è disponibile in WebView sottostante. La [Specifica di Database SQL Web][3] offre più tabelle di database completo accessibili tramite query SQL.

 [3]: http://dev.w3.org/html5/webdatabase/

Le seguenti piattaforme di supporto WebSQL:

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

Questa API è disponibile in WebView sottostante. [DB indicizzati][4] offre più funzionalità che LocalStorage ma meno di WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Le piattaforme seguenti supportano IndexedDB:

*   Windows Phone 8
*   BlackBerry 10

## Opzioni basate su plugin

Oltre l'archiviazione che API sopra elencate, il [File API][5] ti permette di memorizzare dati sul file system locale. Altri [plugins Cordova][6] forniscono opzioni di archiviazione simili.

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/