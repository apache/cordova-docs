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

La `config.xml` file controlla le impostazioni di base di un'app che si applicano a ogni applicazione e istanza di CordovaWebView. Le preferenze di dettagli questa sezione che si applicano solo a BlackBerry 10 costruisce. Vedere il file config. XML File per informazioni sulle opzioni di configurazione globale.

*   `ChildBrowser`( `disable` o default `enable` ): disattiva windows browser bambino. Per impostazione predefinita, apps lanciare una finestra del browser secondario per visualizzare risorse accessibili tramite `window.open()` o specificando un `_blank` obiettivo di ancoraggio. Specificare `disable` per eseguire l'override di questo comportamento predefinito.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` o default `disable` ): consente il blocco dei popup, che impedisce che le chiamate a `window.open()` . Per impostazione predefinita, popup visualizzano in una finestra del browser di bambino. L'impostazione della preferenza `enable` impedisce la visualizzazione a tutti.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` o default `enable` ): impostare su `disable` per ignorare le impostazioni di protezione web, consentendo l'accesso ai contenuti remoti da fonti sconosciute. Questa preferenza è inteso come una comodità di sviluppo solo, quindi rimuoverla prima app per la distribuzione di imballaggio. Per l'app rilasciata, tutti gli URI devono essere conosciuto e whitelisted utilizzando il `<access>` elemento, descritto nella guida alla Whitelist di dominio.
    
        <preference name="WebSecurity" value="disable"/>