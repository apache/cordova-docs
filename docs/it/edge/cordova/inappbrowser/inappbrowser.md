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

# InAppBrowser

> Il `InAppBrowser` è un web browser che visualizza in app quando si chiama`window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

## Descrizione

L'oggetto restituito da una chiamata a`window.open`.

## Metodi

*   addEventListener
*   removeEventListener
*   chiudere
*   Visualizza
*   executeScript
*   insertCSS

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android (in`app/res/xml/config.xml`)
    
        < nome funzione = "InAppBrowser" >< nome param = "android-pacchetto" value="org.apache.cordova.InAppBrowser" / >< / caratteristica >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "InAppBrowser" >< param nome = valore "ios-pacchetto" = "CDVInAppBrowser" / >< / caratteristica >
        

*   Windows Phone 7 e 8 (in`config.xml`)
    
        < nome funzione = "InAppBrowser" / >
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.

# addEventListener

> Aggiunge un listener per un evento dal`InAppBrowser`.

    ref.addEventListener (eventname, callback);
    

*   **Rif**: fare riferimento alla `InAppBrowser` finestra *(InAppBrowser)*

*   **EventName**: l'evento per l'ascolto *(String)*
    
    *   **loadstart**: evento viene generato quando il `InAppBrowser` comincia a caricare un URL.
    *   **loadstop**: evento viene generato quando il `InAppBrowser` termina il caricamento di un URL.
    *   **LoadError**: evento viene generato quando il `InAppBrowser` rileva un errore durante il caricamento di un URL.
    *   **uscita**: evento viene generato quando il `InAppBrowser` finestra è chiusa.

*   **richiamata**: la funzione che viene eseguito quando viene generato l'evento. La funzione viene passata un `InAppBrowserEvent` oggetto come parametro.

## Piattaforme supportate

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 e 8

## Esempio rapido

    rif var = Window. Open ('http://apache.org', blank', ' location = yes');
    ref.addEventListener ('loadstart', funzione () {alert(event.url);});
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > InAppBrowser.addEventListener esempio < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per librerie API di dispositivo caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / dispositivo API sono disponibili / / function onDeviceReady() {var ref = Window. Open ('http://apache.org', blank', ' posizione = si);
             ref.addEventListener ('loadstart', function(event) {alert (' iniziare: ' + event.url);});
             ref.addEventListener ('loadstop', function(event) {alert (' ferma: ' + event.url);});
             ref.addEventListener ('loaderror', function(event) {alert (' errore: "+ event.message);});
             ref.addEventListener ('Esci', function(event) {alert(event.type);});
        } < / script >< / testa >< corpo >< / corpo >< / html >
    

# removeEventListener

> Rimuove un listener per un evento dal`InAppBrowser`.

    ref.removeEventListener (eventname, callback);
    

*   **Rif**: fare riferimento alla `InAppBrowser` finestra. *(InAppBrowser)*

*   **EventName**: interrompere l'attesa per l'evento. *(String)*
    
    *   **loadstart**: evento viene generato quando il `InAppBrowser` comincia a caricare un URL.
    *   **loadstop**: evento viene generato quando il `InAppBrowser` termina il caricamento di un URL.
    *   **LoadError**: evento viene generato quando il `InAppBrowser` rileva un errore di caricamento di un URL.
    *   **uscita**: evento viene generato quando il `InAppBrowser` finestra è chiusa.

*   **richiamata**: la funzione da eseguire quando viene generato l'evento. La funzione viene passata un `InAppBrowserEvent` oggetto.

## Piattaforme supportate

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 e 8

## Esempio rapido

    rif var = Window. Open ('http://apache.org', blank', ' location = yes');
    myCallback var = funzione () {alert(event.url)}; ref.addEventListener ('loadstart', myCallback);
    ref.removeEventListener ('loadstart', myCallback);
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > InAppBrowser.removeEventListener esempio < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per librerie API di dispositivo caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / InAppBrowser globale di riferimento var iabRef = null;
    
        funzione iabLoadStart(event) {alert (Event + '-' + event.url);
        } function iabLoadStop(event) {alert (Event + '-' + event.url);
        } function iabLoadError(event) {alert (Event + '-' + event.message);
        } function iabClose(event) {alert(event.type);
             iabRef.removeEventListener ('loadstart', iabLoadStart);
             iabRef.removeEventListener ('loadstop', iabLoadStop);
             iabRef.removeEventListener ('loaderror', iabLoadError);
             iabRef.removeEventListener ('uscita', iabClose);
        } / / dispositivo API sono disponibili / / function onDeviceReady() {iabRef = Window. Open ('http://apache.org', blank', ' location = yes');
             iabRef.addEventListener ('loadstart', iabLoadStart);
             iabRef.addEventListener ('loadstop', iabLoadStop);
             iabRef.removeEventListener ('loaderror', iabLoadError);
             iabRef.addEventListener ('uscita', iabClose);
        } < / script >< / testa >< corpo >< / corpo >< / html >
    

# chiudere

> Chiude la `InAppBrowser` finestra.

    Ref.Close();
    

*   **Rif**: fare riferimento alla `InAppBrowser` finestra *(InAppBrowser)*

## Piattaforme supportate

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 e 8

## Esempio rapido

    rif var = Window. Open ('http://apache.org', blank', ' location = yes');
    Ref.Close();
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > InAppBrowser.close esempio < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per librerie API di dispositivo caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / dispositivo API sono disponibili / / function onDeviceReady() {var ref = Window. Open ('http://apache.org', blank', ' posizione = si);
             / / chiudere InAppBrowser dopo 5 secondi setTimeout(function() {ref.close();
             }, 5000);
        } < / script >< / testa >< corpo >< / corpo >< / html >
    

# Visualizza

> Visualizza una finestra di InAppBrowser che è stato aperto nascosta. Questa chiamata non ha effetto se la InAppBrowser era già visibile.

    Ref.Show();
    

*   **ref:** riferimento per il InAppBrowser finestra (`InAppBrowser`)

## Piattaforme supportate

*   Android
*   BlackBerry
*   iOS

## Esempio rapido

    rif var = Window. Open ('http://apache.org', blank', ' nascosto = si);
    Ref.Show();
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > InAppBrowser.show esempio < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per Cordova caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / Cordova è pronto / / function onDeviceReady() {var ref = Window. Open ('http://apache.org', blank', ' nascosto = si);
             ref.addEventListener ('loadstop', function(event) {alert ('sfondo finestra caricato'); 
             });
             / / chiudere InAppBrowser dopo 5 secondi setTimeout(function() {ref.close();
             }, 5000);
        } < / script >< / testa >< corpo >< / corpo >< / html >
    

# executeScript

> Inserisce il codice JavaScript nella `InAppBrowser` finestra

    ref.executeScript (particolari, callback);
    

*   **Rif**: fare riferimento alla `InAppBrowser` finestra. *(InAppBrowser)*

*   **injectDetails**: dettagli dello script da eseguire, specificando un `file` o `code` chiave. *(Oggetto)*
    
    *   **file**: URL dello script da iniettare.
    *   **codice**: testo dello script da iniettare.

*   **richiamata**: la funzione che viene eseguito dopo che il codice JavaScript viene iniettato.
    
    *   Se lo script iniettato è di tipo `code` , il callback viene eseguita con un singolo parametro, che è il valore restituito del copione, avvolto in un `Array` . Per gli script multi-linea, questo è il valore restituito dell'ultima istruzione, o l'ultima espressione valutata.

## Piattaforme supportate

*   Android
*   BlackBerry
*   iOS

## Esempio rapido

    rif var = Window. Open ('http://apache.org', blank', ' location = yes');
    ref.addEventListener ('loadstop', funzione () {ref.executeSript ({file: "myscript.js"});});
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > InAppBrowser.executeScript esempio < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per librerie API di dispositivo caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / InAppBrowser globale di riferimento var iabRef = null;
    
        / / Iniettare il nostro JavaScript personalizzato nella finestra di InAppBrowser / / function replaceHeaderImage() {iabRef.executeScript ({codice: "var img=document.querySelector ('img #header'); img.src= 'http://cordova.apache.org/images/cordova_bot.png';"}, funzione () {alert ("immagine elemento con successo dirottato");
            funzione di}} iabClose(event) {iabRef.removeEventListener ('loadstop', replaceHeaderImage);
             iabRef.removeEventListener ('uscita', iabClose);
        } / / dispositivo API sono disponibili / / function onDeviceReady() {iabRef = Window. Open ('http://apache.org', blank', ' location = yes');
             iabRef.addEventListener ('loadstop', replaceHeaderImage);
             iabRef.addEventListener ('uscita', iabClose);
        } < / script >< / testa >< corpo >< / corpo >< / html >
    

# insertCSS

> Inietta CSS nella `InAppBrowser` finestra.

    ref.insertCSS (particolari, callback);
    

*   **Rif**: fare riferimento alla `InAppBrowser` finestra *(InAppBrowser)*

*   **injectDetails**: dettagli dello script da eseguire, specificando un `file` o `code` chiave. *(Oggetto)*
    
    *   **file**: URL del foglio di stile per iniettare.
    *   **codice**: testo del foglio di stile per iniettare.

*   **richiamata**: la funzione che viene eseguito dopo che il CSS viene iniettato.

## Piattaforme supportate

*   Android
*   BlackBerry
*   iOS

## Esempio rapido

    rif var = Window. Open ('http://apache.org', blank', ' location = yes');
    ref.addEventListener ('loadstop', funzione () {ref.insertCSS ({file: "mystyles"});});
    

## Esempio completo

    <!DOCTYPE html >< html >< testa >< titolo > InAppBrowser.insertCSS esempio < / title >< tipo di script = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< tipo di script = "text/javascript" charset = "utf-8" > / / aspettare per librerie API di dispositivo caricare / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / InAppBrowser globale di riferimento var iabRef = null;
    
        / / Iniettare il nostro CSS personalizzato nella finestra di InAppBrowser / / function changeBackgroundColor() {iabRef.insertCSS ({codice: "corpo {background: #ffff00"}, funzione () {alert ("stili alterato");
            funzione di}} iabClose(event) {iabRef.removeEventListener ('loadstop', changeBackgroundColor);
             iabRef.removeEventListener ('uscita', iabClose);
        } / / dispositivo API sono disponibili / / function onDeviceReady() {iabRef = Window. Open ('http://apache.org', blank', ' location = yes');
             iabRef.addEventListener ('loadstop', changeBackgroundColor);
             iabRef.addEventListener ('uscita', iabClose);
        } < / script >< / testa >< corpo >< / corpo >< / html >
    

# InAppBrowserEvent

L'oggetto che viene passato alla funzione di richiamata da un `addEventListener` chiamare su un `InAppBrowser` oggetto.

## Proprietà

*   **tipo**: il eventname, o `loadstart` , `loadstop` , `loaderror` , o `exit` . *(String)*

*   **URL**: l'URL che è stato caricato. *(String)*

*   **codice**: il codice di errore, solo nel caso di `loaderror` . *(Numero)*

*   **messaggio**: il messaggio di errore, solo nel caso di `loaderror` . *(String)*