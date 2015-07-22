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

# window.open

Apre un URL in una nuova `InAppBrowser` istanza, l'istanza corrente del browser o il browser di sistema.

    var ref = window.open(url, target, options);
    

*   **Rif**: fare riferimento alla `InAppBrowser` finestra. *(InAppBrowser)*

*   **URL**: l'URL da caricare *(String)*. Chiamare `encodeURI()` su questo, se l'URL contiene caratteri Unicode.

*   **destinazione**: la destinazione in cui caricare l'URL, un parametro facoltativo che il valore predefinito è `_self` . *(String)*
    
    *   `_self`: Si apre in Cordova WebView se l'URL è nella lista bianca, altrimenti si apre nella`InAppBrowser`.
    *   `_blank`: Apre il`InAppBrowser`.
    *   `_system`: Si apre nel browser web del sistema.

*   **opzioni**: opzioni per il `InAppBrowser` . Opzionale, inadempiente a: `location=yes` . *(String)*
    
    Il `options` stringa non deve contenere alcun spazio vuoto, e coppie nome/valore ogni funzionalità devono essere separate da una virgola. Caratteristica nomi sono tra maiuscole e minuscole. Tutte le piattaforme supportano il valore riportato di seguito:
    
    *   **posizione**: impostata su `yes` o `no` per trasformare il `InAppBrowser` di barra di posizione on o off.
    ## Android solo
    
    *   **closebuttoncaption** - impostare una stringa che sarà la didascalia per il pulsante "Done". 
    *   **nascosti** - impostato su 'sì' per creare il browser e caricare la pagina, ma non mostrarlo. L'evento di carico sarà il fuoco quando il caricamento è completato. Omettere o impostato su 'no' (predefinito) per avere il browser aperto e caricare normalmente. 
    *   **clearcache** - impostato su 'sì' per avere la cache del browser cookie cancellata prima dell'apertura della nuova finestra
    *   **clearsessioncache** - impostare su 'sì' per avere la cache cookie di sessione cancellata prima dell'apertura della nuova finestra
    ## iOS solo
    
    *   **closebuttoncaption** - impostare una stringa che sarà la didascalia per il pulsante "Done". Nota che devi localizzare questo valore a te stesso.
    *   **nascosti** - impostato su 'sì' per creare il browser e caricare la pagina, ma non mostrarlo. L'evento di carico sarà il fuoco quando il caricamento è completato. Omettere o impostato su 'no' (predefinito) per avere il browser aperto e caricare normalmente. 
    *   **toolbar** - impostato su 'sì' o 'no' per attivare o disattivare la barra degli strumenti per il InAppBrowser (default 'sì')
    *   **enableViewportScale**: impostare su `yes` o `no` per impedire la viewport ridimensionamento tramite un tag meta (default`no`).
    *   **mediaPlaybackRequiresUserAction**: impostare su `yes` o `no` per impedire HTML5 audio o video da AutoPlay (default`no`).
    *   **allowInlineMediaPlayback**: impostare su `yes` o `no` per consentire la riproduzione multimediale inline HTML5, visualizzando all'interno della finestra del browser, piuttosto che un'interfaccia specifica del dispositivo di riproduzione. L'HTML `video` elemento deve includere anche il `webkit-playsinline` (default di attributo`no`)
    *   **keyboardDisplayRequiresUserAction**: impostare su `yes` o `no` per aprire la tastiera quando elementi form ricevano lo stato attivo tramite di JavaScript `focus()` chiamata (default`yes`).
    *   **suppressesIncrementalRendering**: impostare su `yes` o `no` aspettare fino a quando tutti i nuovi contenuti di vista viene ricevuto prima il rendering (default`no`).
    *   **presentationstyle**: impostare su `pagesheet` , `formsheet` o `fullscreen` per impostare lo [stile di presentazione][1] (default`fullscreen`).
    *   **transitionstyle**: impostare su `fliphorizontal` , `crossdissolve` o `coververtical` per impostare lo [stile di transizione][2] (default`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## Piattaforme supportate

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 e 8

## Esempio rapido

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>