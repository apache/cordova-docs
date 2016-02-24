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

title: Cordova per Windows 10
---

# Cordova per Windows 10

Forse si potrebbe invece chiamare "Windows 10 per Cordova". Windows 10 ha avuto la sua piattaforma HTML e applicazioni JavaScript riprogettato per portare Cordova supporto sul web e per ottenere le restrizioni di sicurezza della piattaforma fuori del vostro modo.

## Guida introduttiva a Windows 10

Aggiunta di Windows 10 supporto all'app è facile come impostare la versione di piattaforma di destinazione Windows a 10.0:

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


Quando si compila con queste preferenze impostate entrambe, solo un singolo file appx (e. appxupload) sarà costruiti. Si richiede Windows 10 minimo.

### Informazioni sulla modalità di modalità locale e remota

Modalità remota è una nuova funzionalità della piattaforma HTML applicazioni per Windows in Windows 10. In Windows 8 e 8.1, applicazioni HTML lavorato in quello che viene chiamato "Local Mode" in Windows 10. In modalità locale, le applicazioni HTML hanno accesso completo alle funzionalità e superficie di API di Windows nativo. Al fine di impedire attacchi script injection, che potrebbero tradursi in perdite di informazioni personalmente identificabili a causa di codice dannoso, modalità locale non consente di script inline e richiede gli sviluppatori che eseguono la manipolazione del DOM per farlo all'interno di un contesto esplicito (`MSApp`).

Modalità remota elimina tali requisiti, che rende possibile utilizzare librerie non modificate come jQuery o AngularJS direttamente nel codice, senza alcuna modifica. A tale scopo, esso rimuove la possibilità di dichiarare certe capacità quando attestante la tua app in Windows Store. La rimozione di queste funzionalità di solito non impedisce di arrivare a determinate funzionalità, ma potrebbe richiedere di utilizzare una diversa combinazione di API o tattiche.

### Effetto della modalità remota sulle capacità

Quando si distribuisce l'applicazione in modalità remota per Windows Store non sono disponibili le seguenti funzionalità:

  * Autenticazione Enterprise (`enterpriseAuthentication`)
  * Certificati utente condivisi (`sharedUserCertificates`)
  * Raccolta di documenti (`documentsLibrary`)
  * Libreria musicale (`musicLibrary`)
  * Raccolta di immagini (`picturesLibrary`)
  * Video Library (`videosLibrary`)
  * Archivi rimovibili (`removableStorage`)
  * Client/server di Internet (`internetClientServer`) - si noti che `internetClient` è ancora consentito
  * Client/server di rete privata (`privateNetworkClientServer`)

Ciascuna delle restrizioni biblioteca può essere aggirato richiedendo che l'utente interagisce con il file system tramite una [Selezione File](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx). Ciò impedisce che codice dannoso inserito arbitrariamente l'accesso al file system.

Le restrizioni relative alla rete devono essere aggirate utilizzando un'API che non utilizza controlli di funzionalità o l'intermediazione di comunicazione tramite canali di comunicazione internet standard, ad esempio `XMLHttpRequest` o Web Sockets.

Le funzionalità di autenticazione Enterprise e ha condiviso i certificati utente sono specificamente destinate a scenari aziendali. Queste funzionalità sono supportate per abilitati per privati/enterprise App Store, così se si compilano applicazioni che stanno per essere distribuiti a un meccanismo di distribuzione interna, si può ancora sostenere questi. Tuttavia, non sono supportati per le applicazioni in modalità remota nell'archivio pubblico di Windows. Quando crei il targeting Windows 10, se una di queste funzionalità viene rilevata nel manifesto dell'applicazione, verrà visualizzato un avviso.

## Riferimento

### config. XML preferenze

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*Almeno uno è necessario.*

Queste preferenze per identificare la versione di Windows o Windows Phone si desidera il pacchetto dell'applicazione di destinazione.

**Valori validi**

  * `10.0`, `UAP`: Build per Windows 10 Universal App piattaforma
  * `8.1`: Build per Windows 8.1 o Windows Phone 8.1
  * `8.0`: build per Windows 8.0. Non valido per Windows Phone (usare la piattaforma di Cordova **wp8** )

**Scenari**

Se si rivolgono solo Windows 10, è sufficiente avere una singola `windows-target-version` impostazione nel file config. XML.

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


Questa preferenza identifica se si desidera che l'app di destinazione il **contesto locale** o **remoto** come suo URI di avvio. Durante la compilazione per Windows 10, il valore predefinito è il contesto remoto (`ms-appx-web://`).

Al fine di avere un'applicazione in modalità locale che non è influenzata da restrizioni di funzionalità modalità remota, è necessario impostare questa preferenza `ms-appx://` e non dichiarare eventuali elementi `< access >` con URI remoto.

**Valori validi**

  * `ms-appx://` (Impostazione predefinita per Windows 8.0, 8.1): la pagina iniziale viene eseguito nel contesto locale
  * `ms-appx-web://` (Impostazione predefinita per Windows 10): la pagina iniziale viene eseguito nel contesto remoto

#### {SDK}-MinVersion, {SDK}-MaxVersionTested

*Opzionale*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


Queste preferenze identificano quali ecosistemi (incluso ma non limitato a Windows universale, Windows Mobile o Xbox) e le loro versioni di min/max sono compatibili con. Ancora richiedono che le piattaforme hanno il supporto per la piattaforma di App universale (così 10 Windows come sistema operativo di base). Tuttavia, questi possono indicare che l'applicazione è a conoscenza di particolari funzionalità che possono solo essere disponibile su alcuni dispositivi (ad esempio gioco streaming su Xbox).

**Valori validi**

Ci sono tre parti a ogni valore: l' **SDK**, la **restrizione di versione**e il **valore della versione**. Queste preferenze vengono rilevate da cominciando con `Windows` o `Microsoft` e termina in `- MinVersion` o `- MaxVersionTested`:

  * L' **SDK** definisce quale piattaforma specializzata di destinazione desiderata. Il valore predefinito è `Windows.Universal`. I valori validi per questi sono definiti nello schema AppxManifest, gli elementi del `Pacchetto/Depednencies/TargetPlatform` .
  * Il **restrizione di versione** definisce le regole di compatibilità di applicazione. Ad esempio, se il `-MinVersion` è impostato su 10.1.0.0, versioni del sistema operativo che non supportano almeno 10.1.0.0 di SDK corrispondente non saranno in grado di caricarlo.
      * `-MinVersion` specifica la versione minima di SDK richiesto
      * `-MaxVersionTested` specifica la versione massima testata del SDK. Se viene rilasciata una nuova versione del SDK corrispondente, verrà eseguito in modalità di compatibilità per la versione specificata.
  * Il **valore di versione** è una tupla 4 interi sotto forma di *major.minor.build.qfe*.

Se delle preferenze di questi tipi sono specificate nel file config. XML, quindi Windows.Universal versione 10.0.0.0 saranno scelti per impostazione predefinita.
