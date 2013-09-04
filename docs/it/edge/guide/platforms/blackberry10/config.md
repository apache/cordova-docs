---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Configurazione di blackBerry 10

La `config.xml` file controlla varie impostazioni di Cordova. Questi si applicano in tutta l'applicazione. Il `config.xml` è file si trova in `<project folder>/<www>` directory.

## `< preferenza >`

Varie preferenze (come `<preference>` tag) predefinita su non rompere le applicazioni esistenti. Le preferenze disponibili sono:

*   `autoHideSplashScreen`: ( `true` o `false` ): impostare su `false` per controllare quando lo splashscreen è nascosto attraverso un API JavaScript. Questa preferenza impostazioni predefinite su true.

*   `backgroundColor`: Specifica il colore di sfondo della tua app. Il valore deve specificare un valore di colore in formato pixel ARGB utilizzando 8 cifre esadecimali.

*   `childBrowser`: Disattiva windows browser bambino. Per impostazione predefinita, quando si tenta di aprire una risorsa in una nuova finestra o scheda contenuto (usando Window o specificando `_blank` come destinazione di un ancoraggio), l'app WebWorks aprirà una finestra del browser secondario per visualizzare la risorsa. Questa funzionalità è abilitata per impostazione predefinita. Deve specificare il valore `disable` per impedire le azioni di cui sopra da occuring.

*   `hideKeyboardFormAccessoryBar`: ( `enable` o `disable` ) disattiva la barra accessoria tastiera form in un form HTML. La barra accessoria del modulo tastiera è una fila di pulsanti (precedente, successivo e Submit) che l'utente può utilizzare per navigare attraverso una forma. Per impostazione predefinita, quando un app WebWorks contiene un modulo HTML e un `<input>` elemento ottiene lo stato attivo, WebWorks Visualizza questa barra accessoria di forma. Questa funzionalità consente di impedire la visualizzazione barra accessoria il form specificando il valore come app`enable`.

*   `orientation`: ( `auto` , `portrait` , o `landscape` ) specifica l'orientamento persistente per schermi in app. Per impostazione predefinita, se non si specifica un orientamento dello schermo, l'orientamento è impostato su auto.

*   `popupBlocker`: Consente il blocco popup. Per impostazione predefinita, vengono visualizzati tutti i popup di applicazioni BlackBerry WebWorks in una finestra del browser di bambino. È possibile impedire popup visualizzati senza intervento dell'utente consentendo il blocco popup. Questo è fatto specificando il valore come`enable`.

*   `webSecurity`: Disattiva web security. Disabilitando la protezione web consente di accedere ai contenuti remoti da fonti sconosciute durante lo sviluppo. Prima di imballaggio app per la distribuzione, è necessario rimuovere questa impostazione. Questa caratteristica è inteso come solo una convenienza di sviluppo. In produzione, tutti gli URI dovrebbero essere noto e dovrebbe essere whitelisted utilizzando il `<access>` elemento. Per disabilitare, specificare il valore come`disable`.