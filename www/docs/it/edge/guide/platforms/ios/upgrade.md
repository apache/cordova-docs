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

title: L'aggiornamento iOS
---

# L'aggiornamento iOS

Questa guida Mostra come modificare progetti iOS per l'aggiornamento da versioni precedenti di Cordova. La maggior parte di queste istruzioni si applicano ai progetti creati con un vecchio set di strumenti da riga di comando che precedono la `cordova` utilità CLI. [L'interfaccia della riga di comando](../../cli/index.html) per informazioni, vedere come aggiornare la versione di CLI.

**Nota**: Xcode 6 è richiesto. Attualmente, per presentare all'Apple App Store, è necessario utilizzare l'ultima versione del iOS SDK, che è iOS 8 e questo è incluso solo con Xcode 6.

## All'aggiornamento 3.6.0 proietta al 4.0.0

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto
    

Per i progetti di CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update android` nei progetti esistenti.

## 3.3.0 all'aggiornamento di progetti a 3.4.0

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto
    

Per i progetti di CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update ios`

## 3.2.0 all'aggiornamento di progetti a 3.3.0

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto
    

Per i progetti di CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update ios`

## All'aggiornamento 3.1.0 proietta alla 3.2.0

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto
    

Per i progetti di CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update ios`

## Progetti di aggiornamento 3.0.0 alla 3.1.0

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto
    

Per i progetti di CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update ios`

iOS 7 edizioni:

1.  Rimuovere `width=device-width, height=device-height` da `meta`-tag del file `index. html` `viewport`. (Vedere [il bug rilevante][1].)

2.  Aggiornare il tuo plugin core media, media-cattura e splashscreen per iOS 7 supporto.

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 temi:

1.  Aggiornare le impostazioni del progetto se Xcode 5 vi chiederà di farlo (nel navigatore questioni).

2.  Aggiornamento tuo **Compiler for C/C++/Objective-C** impostando, nella scheda **Build Settings**, **Build Options** sezione. Scegliere di **Default compiler (Apple LLVM 5.0)**.

## Aggiornamento per il CLI (3.0.0) da 2.9.0

1.  Creare un nuovo progetto di Apache Cordova 3.0.0 utilizzando la CLI, cordova, come descritto in l'interfaccia della riga di comando.

2.  Aggiungere le piattaforme il progetto di cordova, per esempio: `cordova platform add ios`.

3.  Copiare il contenuto del progetto `www` nella directory del `www` cartella alla radice del progetto cordova appena creato.

4.  Copiare o sovrascrivere qualsiasi nativi beni dal progetto originale (`Resources`, ecc.), avendo cura di aggiungere nuovi file al progetto `.xcodeproj`. Il progetto di iOS si costruisce all'interno della directory `platforms\ios`.

5.  Copiare il `file config. xml` nella directory di `www` e rimuovere eventuali definizioni di plugin. Modificare le impostazioni qui invece di directory della piattaforma.

6.  Utilizzare lo strumento CLI di cordova per installare il plug-in che è necessario. Si noti che il CLI gestisce tutti i core API come plugin, così che può essere necessario aggiungere. Solo 3.0.0 plugin sono compatibili con il CLI.

7.  Costruire e testare.

## 2.9.0 all'aggiornamento di progetti alla 3.0.0

1.  Scaricare ed estrarre la sorgente di Cordova 3.0.0 a una posizione permanente directory sul disco rigido, per esempio a `~/Documents/Cordova-3.0.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copia il `www/cordova.js` (si noti che non è più un suffisso di versione, la versione è nel file stesso nell'intestazione) file dal nuovo progetto nella `www` directory e cancellare il `www/cordova.js` file.

6.  Aggiornare il riferimento allo script di Cordova nella `www/index.html` file (e qualsiasi altro file che contengono il riferimento allo script) per puntare al nuovo `cordova.js` file.

7.  Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

**Nota**: a partire da Cordova 3.0.0, plugin non sono pre-installati, ed è necessario utilizzare l'utilità della riga di comando `plugman` per installarli manualmente. Vedere Utilizzo di Plugman per gestire i plugin.

## 2.8.0 all'aggiornamento di progetti a 2.9.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.9.0 in un percorso di directory permanente sul disco rigido, per esempio a `~/Documents/Cordova-2.9.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copia il `www/cordova.js` (si noti che non è più un suffisso di versione, la versione è nel file stesso nell'intestazione) file dal nuovo progetto nella `www` directory e cancellare il `www/cordova.js` file.

6.  Aggiornare il riferimento allo script di Cordova nella `www/index.html` file (e qualsiasi altro file che contengono il riferimento allo script) per puntare al nuovo `cordova.js` file.

7.  Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

## All'aggiornamento 2.7.0 progetti per 2.8.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.8.0 a una posizione permanente directory sul disco rigido, per esempio a `~/Documents/Cordova-2.8.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copiare il `www/cordova.js` (si noti che non è più un suffisso di versione, la versione è nel file stesso nell'intestazione) dal nuovo progetto del file nella directory `www` ed eliminare il file `www/cordova-2.7.0.js`.

6.  Aggiornare il riferimento allo script di Cordova nella `www/index.html` file (e qualsiasi altro file che contengono il riferimento allo script) per puntare al nuovo `cordova.js` file.

7.  Aggiornare qualsiasi tag `<plugin>` nel file `config.xml` il tag `<feature>`. Si noti che tag `<plugin>` esistenti ancora lavorare, ma sono deprecati. È possibile copiare queste informazioni nel file `config. xml` per un nuovo progetto. Per esempio:
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

9.  Aggiungere questi due quadri al progetto:
    
        OpenAL
        ImageIO
        

10. Aggiornare la destinazione del progetto **Build Settings**. Sotto **link → altre bandiere Linker**, edit **"- Obj - C"** per essere **"-ObjC"**.

11. Aggiornare la destinazione del progetto **Build Settings**. Sotto **link → altre bandiere Linker**, cambiare **"-tutti _ caricare"** essere `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a`. Devi solo fare questo se avete il problema definito [questo problema.][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## 2.6.0 all'aggiornamento di progetti a 2.7.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.7.0 in un percorso di directory permanente sul disco rigido, per esempio a `~/Documents/Cordova-2.7.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. avete bisogno di beni da questo nuovo progetto.

5.  Copia il `www/cordova-2.7.0.js` file del nuovo progetto nella `www` directory e cancellare il `www/cordova-2.6.0.js` file.

6.  Aggiornare il riferimento allo script di Cordova nella `www/index.html` file (e qualsiasi altro file che contengono il riferimento allo script) per puntare al nuovo `cordova-2.7.0.js` file.

7.  Aggiornare (o sostituire, se non hai mai cambiato il file) il file `AppDelegate.m` secondo quello dal nuovo progetto (vedere [questo diff][3]).

8.  Nel file `config. xml`, [rimuovere questa riga][4].

9.  Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## 2.5.0 aggiornamento progetti a 2.6.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.6.0 in un percorso di directory permanente sul disco rigido, per esempio a `~/Documents/Cordova-2.6.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copiare il file del progetto `www/cordova-2.6.0.js` nella directory `www` ed eliminare il file `www/cordova-2.5.0.js`.

6.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (insieme agli altri file che fanno riferimento a script) per riferirsi al nuovo file `cordova-2.6.0.js`.

7.  Aggiornare (o sostituire, se non hai mai cambiato il file) il file `AppDelegate.m` secondo quello dal nuovo progetto (vedere [questo diff][5]).

8.  Nel file `config. xml`, [aggiungere questa nuova linea][6].

9.  Nel file `config. xml`, [aggiungere questa nuova linea][7].

10. Nel file `config. xml`, [UIWebViewBounce è stato cambiato in DisallowOverscroll, e i valori predefiniti sono diversi][8].

11. Nel file `config. xml`, la preferenza di `EnableLocation` è stata deprecata.

12. Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## Progetti di aggiornamento 2.4.0 per 2.5.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.5.0 a una posizione permanente directory sul disco rigido, per esempio a `~/Documents/Cordova-2.5.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copiare il file `www/cordova-2.5.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-2.4.0.js`.

6.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-2.5.0.js`.

7.  Aggiornare (o sostituire, se non hai mai cambiato il file) il file `AppDelegate.m` secondo quello dal nuovo progetto (vedere [questo diff][9]).

8.  Nel file `config. xml`, [aggiungere queste righe nuove][10].

9.  Nel file `config. xml`, [modificare l'elemento radice, cambiarlo da cordova a widget][11].

10. Nel file `config. xml`, [rimuovere la preferenza OpenAllWhitelistURLsInWebView][12].

11. Eliminare la directory di `cordova` e copiare la directory di `cordova` dal nuovo progetto nella directory radice del progetto. In 2.5.0, questo ha aggiornato gli script.

12. Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## 2.3.0 aggiornamento progetti alla 2.4.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.4.0 in un percorso di directory permanente sul disco rigido, per esempio a `~/Documents/Cordova-2.4.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copiare il file `www/cordova-2.4.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-2.3.0.js`.

6.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-2.4.0.js`.

7.  Aggiornare (o sostituire, se non hai mai cambiato i file) il file `MainViewController.m` secondo quello dal nuovo progetto (vedere [questo diff][13]).

8.  Aggiornare (o sostituire, se non hai mai cambiato il file) il file `AppDelegate.m` secondo quello dal nuovo progetto (vedere [questo diff][14]).

9.  Nel file `config. xml`, [aggiungere questa nuova linea][15].

10. Eliminare la directory di `cordova` e copiare la directory di `cordova` dal nuovo progetto nella directory radice del progetto. In 2.4.0, questo ha fissato gli script.

11. Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

12. Aggiungi AssetsLibrary.framework come una risorsa al progetto. (Vedere la [documentazione di Apple][16] per le istruzioni su come farlo.).

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## Progetti di ammodernamento 2.2.0 a 2.3.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.3.0 in un percorso di directory permanente sul disco rigido, per esempio a `~/Documents/Cordova-2.3.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copiare il file `www/cordova-2.3.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-2.2.0.js`.

6.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-2.3.0.js`.

7.  Aggiornare (o sostituire, se non hai mai cambiato il file) la `MainViewController.m` secondo quello del nuovo progetto.

8.  Eliminare la directory di `cordova` e copiare la directory di `cordova` dal nuovo progetto nella directory radice del progetto. In 2.3.0, questo ha nuovi script.

9.  Eliminare il `CordovaLib` directory e copia il `CordovaLib` dalla nuovo progetto directory nella directory radice del progetto.

10. Convertire il file `Cordova.plist` in `config. xml`, eseguendo lo script `bin/cordova\_plist\_to\_config\_xml` su file di progetto.

11. Aggiungere il plugin InAppBrowser per il file `config. xml`, aggiungendo questo tag sotto `< cordova >< plugins >`:
    
        <plugin name="InAppBrowser" value="CDVInAppBrowser" />
        

12. Nota che i plugin di Objective-C sono *non* whitelisted piu '. Alla whitelist le connessioni con la whitelist app, è necessario impostare l'intestazione dell `User-Agent` della connessione per lo stesso user-agent come principale Cordova WebView. È possibile ottenere ciò accedendo alla proprietà `userAgent` spegne la vista-controllore principale. Il controller principale-vista (`CDVViewController`) ha anche un metodo `URLisAllowed` per verificare se un URL passa la whitelist.

13. Modifiche del dispositivo API:
    
    *   Per iOS, il device utilizzato per restituire `iPhone`, `iPad` o `iPod Touch`; ora restituisce (correttamente) `iOS`.
    *   Per iOS, device.name (ormai obsoleto per tutte le piattaforme) utilizzato per restituire il nome del dispositivo dell'utente (ad esempio ' iPhone 5 ′ su Shazron '); ora restituisce quale device utilizzato per restituire: `iPhone`, `iPad` o `iPod Touch`.
    *   Per tutte le piattaforme, c'è una nuova proprietà denominata device.model; Questo metodo restituisce il modello di dispositivo specifico, ad esempio `iPad2, 5` (per altre piattaforme, questo restituisce ciò che device.name per restituire).

## All'aggiornamento 2.1.0 proietta alla 2.2.0

1.  Scaricare ed estrarre la sorgente di Cordova 2.2.0 per un percorso di directory permanente sul disco rigido, per esempio a `~/Documents/Cordova-2.2.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copiare il file `www/cordova-2.2.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-2.1.0.js`.

6.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-2.2.0.js`.

7.  Aggiornare (o sostituire, se non hai mai cambiato il file) la `MainViewController.m` secondo quello dal nuovo progetto:
    
    *   Aggiornato → viewWillAppear

8.  Copiare la directory di `cordova` dal nuovo progetto nella directory radice del progetto. In 2.2.0, questo ha un aggiornato script 'emulare'.

9.  Successivamente, aggiornare il riferimento al sotto-progetto `CordovaLib`. A partire da Cordova 2.1.0, non stiamo utilizzando la variabile CORDOVALIB Xcode piu ' quando fa riferimento a dove risiede il `CordovaLib`, il riferimento è un riferimento di file assoluto ora.
    
    1.  Lanciare Terminal. app
    2.  Vai al percorso dove avete installato Cordova (vedi punto 1), nella sottodirectory `bin`
    3.  Eseguire lo script sotto dove il primo parametro è il percorso per il file del progetto `.xcodeproj`:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**Nota**: In 2.2.0, `bin/creare` script copia del progetto sub-`CordovaLib` nel vostro progetto. Per avere lo stesso tipo di installazione, basta copiare nella destra `CordovaLib` nella directory del progetto e aggiornare la posizione del sotto-progetto `CordovaLib` (relativo al progetto) in Ispettore File Xcode.

## All'aggiornamento 2.0.0 proietta alla 2.1.0

Con Cordova 2.1.0, `CordovaLib` è stato aggiornato per utilizzare il **Automatic Reference Counting (ARC)**. Si non serve aggiornare a **ARC** utilizzare CordovaLib, ma se volete aggiornare il vostro progetto per utilizzare **ARC**, utilizzare la migrazione guidata di Xcode dal menu: **Modifica → Refactor → Convert to Objective-C ARC...**, de-selezionare libCordova.a, quindi eseguire la procedura guidata fino al completamento.

1.  Scaricare ed estrarre la sorgente di Cordova 2.1.0 a una posizione permanente directory sul disco rigido, per esempio a `~/Documents/Cordova-2.1.0`.

2.  Se è in esecuzione, chiudere Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

5.  Copiare il file `www/cordova-2.1.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-2.0.0.js`.

6.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-2.1.0.js`.

7.  Aggiornare (o sostituire, se non hai mai cambiato il file) la `AppDelegate.m` secondo quello dal nuovo progetto:
    
    *   Edited → application:didFinishLaunchingWithOptions:
    *   Added → application:supportedInterfaceOrientationsForWindow:

8.  Aggiornare (o sostituire, se non hai mai cambiato il file) la `MainViewController.m` secondo quello dal nuovo progetto:
    
    *   Added → viewWillAppear

9.  Copiare la directory di `cordova` dal nuovo progetto nella directory radice del progetto. In 2.1.0, questo ha gli script aggiornati per supportare i percorsi con spazi.

10. Rimuovere il riferimento al file `VERSION` dal progetto (*non* quello in `CordovaLib`).

11. Successivamente, aggiornare il riferimento al sotto-progetto `CordovaLib`. A partire da Cordova 2.1.0, non stiamo utilizzando la variabile CORDOVALIB Xcode piu ' quando fa riferimento a dove risiede il `CordovaLib`, il riferimento è un riferimento di file assoluto ora.
    
    1.  Lanciare Terminal. app
    2.  Vai al percorso dove avete installato Cordova (vedi punto 1), nella sottodirectory `bin`
    3.  Eseguire lo script sotto dove il primo parametro è il percorso per il file del progetto `.xcodeproj`:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

## All'aggiornamento 1.9.0 progetti a 2.0.0

1.  Installare Cordova 2.0.0.

2.  Creare un nuovo progetto, come descritto nella guida strumento Shell di iOS. Avete bisogno di beni da questo nuovo progetto.

3.  Copiare il file `www/cordova-2.0.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-1.9.0.js`.

4.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-2.0.0.js`.

5.  Copiare la directory di `cordova` dal nuovo progetto nella directory radice del progetto (se si desidera che gli strumenti della riga di comando di progetto).

6.  Aggiungere una nuova voce sotto `Plugins` nel file `Cordova.plist`, sotto il gruppo di **Supporting Files**. La chiave è il `device` e il valore è `CDVDevice`.

7.  Rimuovere `Cordova.framework`.

8.  Rimuovere `verify.sh` dal gruppo di **Supporting Files**.

9.  Selezionare l'icona del progetto nel Navigatore progetto, selezionare il **Target** del progetto, quindi selezionare la scheda **Building Settings**.

10. Ricerca per **Preprocessor Macros**, quindi rimuovere tutti i **CORDOVA_FRAMEWORK=1** valori.

11. Individuare la directory `CordovaLib` che è stata installata nel disco rigido sotto sottodirectory `documenti` su cartella home.

12. Individuare il file `CordovaLib.xcodeproj` nella directory `CordovaLib`, quindi trascinare e rilasciare i file nel progetto. Dovrebbe apparire come un sotto-progetto.

13. Compilare il progetto, si dovrebbero ottenere alcuni errori relativi alle direttive `#import`.

14. Per gli errori di `#import`, modificare eventuali importazioni basata sulla citazione in questo stile:
    
        #import "CDV.h"
        
    
    a questo stile basato su staffe:
    
        #import <Cordova/CDV.h>
        
    
    e rimuovere eventuali `#ifdef` wrapper intorno a qualsiasi importazione di Cordova, non sono piu ' necessari (le importazioni sono ora unificate)

15. Compilare nuovamente il progetto, e non dovrebbe avere alcun errori `#import`.

16. Selezionare l' **project icon** nel Navigatore progetto, selezionare il **Target** del progetto, quindi selezionare la scheda **Build Phases**.

17. Espandere la fase **Target Dependencies**, quindi selezionare il **+** pulsante.

18. Selezionare il target di `CordovaLib`, quindi scegliere il pulsante **Add**.

19. Espandere la prima fase di **Link Binary with Libraries** (già dovrebbe contenere un mucchio di quadri), quindi selezionare il **+** pulsante.

20. Selezionare la libreria statica `libCordova.a`, quindi scegliere il pulsante **Aggiungi**.

21. Eliminare la fase di **Run Script**.

22. Selezionare l' **project icon** nel Navigatore progetto, selezionare il **Target** del progetto, quindi selezionare la scheda **Build Settings**.

23. Ricerca per **Other Linker Flags** e aggiungere i valori **-force_load** e **-Obj-C**.

24. Espandere il sub-progetto `CordovaLib`.

25. Individuare il file di `VERSION`, trascinarlo nel progetto principale (vogliamo creare un link ad esso, non una copia).

26. Selezionare il pulsante di opzione **Create groups for any added folders**, quindi scegliere il pulsante **Finish**.

27. Selezionare il file `VERSION` appena trascinata in un passaggio precedente.

28. Digitare la combinazione di tasti **Option-Command-1** per visualizzare il **File Inspector** (o menuitem **View → Utilities → Show file Inspector**).

29. Scegliere **relativa a CORDOVALIB** nel **File Inspector** per il menu a discesa per **Location**.

30. Impostare la preferenza di Xcode **Xcode Preferences → Locations → Derived Data → Advanced...** a **Unique**, così che si possono trovare le intestazioni unificate.

31. Selezionare l' **project icon** nel Navigatore progetto, selezionare il **Target** del progetto, quindi selezionare la scheda **Build Settings**.

32. Ricerca di **Header Search Paths**. Per tale impostazione, aggiungere questi tre valori, incluse le virgolette:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. Ricerca per **Other Linker Flags**. Per tale impostazione, aggiungere questo valore:
    
        -weak_framework CoreFoundation
        

34. Compilare il progetto, deve compilare e collegare **senza** problemi.

35. Selezionare progetto **Schema** di elenco a discesa e quindi selezionare **iPhone 5.1 Simulator**.

36. Selezionare il pulsante **Run**.

**Nota**: se il progetto non funziona come previsto nel simulatore, si prega di prendere nota di eventuali errori nel registro di console in Xcode per indizi.

## Aggiornamento di progetti 1.8.x a 1.9.0

1.  Installare Cordova 1.9.0.

2.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

3.  Copiare il file `www/cordova-1.9.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-1.8.x.js`.

4.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-1.9.0.js`.

**Nota**: 1.9.0 supporta la nuova impostazione booleana `BackupWebStorage` `Cordova.plist`. Si è attivata per impostazione predefinita, quindi impostarlo su `false` per disattivarlo, soprattutto su iOS 6. Vedere [Release Notes: Safari and UIKit Section][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 1.7.0 all'aggiornamento di progetti a 1.8.x

1.  Installare Cordova 1.8.0.

2.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

3.  Copiare il file `www/cordova-1.8.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-1.7.x.js`.

4.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-1.8.0.js`.

Se si intende usare l'API di cattura, è necessario i nuovo **iPad retina-display** beni:

1.  Copiare la voce `Resources/Capture.bundle` dal nuovo progetto nella directory del progetto, sovrascrivere il vostro elemento esistente `Resources/Capture.bundle`.

2.  Nel progetto, selezionare la voce `Capture.bundle` nel vostro navigatore di progetto in Xcode, digitare il tasto **Delete**, quindi selezionare **Remove Reference** dalla finestra di dialogo.

3.  Trascinare il nuovo `Capture.bundle` dal punto 1 sopra nel vostro navigatore di progetto in Xcode, quindi selezionare il pulsante di opzione **Create groups for any added folders**.

## L'aggiornamento 1.6. x progetti a 1.7.0

1.  Installare Cordova 1.7.0.

2.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

3.  Copiare il file `www/cordova-1.7.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-1.6.0.js`.

4.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-1.7.0.js`.

## Progetti di aggiornamento 1.5.0 a 1.6. x

1.  Installare Cordova 1.6.1.

2.  Fare un backup di `AppDelegate.m`, `AppDelegate.h`, `MainViewController.m`, `MainViewController.h` e `Cordova.plist` nel vostro progetto.

3.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

4.  Copiare questi file dal nuovo progetto nella directory 1.5.0-based del progetto su disco, sostituendo qualsiasi vecchi file (backup i file prima dal passo 2 sopra):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  Aggiungere tutti i nuovi file di `MainViewController` e `AppDelegate` nel vostro progetto in Xcode.

6.  Copiare il file `www/cordova-1.6.1.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/cordova-1.5.0.js`.

7.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `cordova-1.6.1.js`.

8.  Aggiungere il nuovo file `Cordova.plist` nel vostro progetto. Ciò è necessario perché i nomi di servizio core plugin devono cambiare per abbinare quelli da Android e BlackBerry, per un file unificato di Cordova JavaScript (`cordova-js`).

9.  Integrare eventuali impostazioni, **Plugins** ed **ExternalHosts** le voci che hai avuto nel tuo **backup Cordova.plist** nella nuova `Cordova.plist`.

10. Integrare qualsiasi codice specifico del progetto che avete nel vostro backup, `AppDelegate.h` e `AppDelegate.m` in nuovi file di `AppDelegate`. Qualsiasi codice `UIWebViewDelegate` o `CDVCommandDelegate` in `AppDelegate.m` deve andare in `MainViewController.m` ora (vedi sezioni fuori-ha commentato quel file).

11. Integrare qualsiasi codice specifico del progetto che avete nel vostro backup, `MainViewController.h` e `MainViewController.m` in nuovi file di MainViewController.

12. Fare clic sull'icona progetto in Navigatore progetto, selezionare il **Project**, quindi selezionare la scheda **Build Settings**.

13. Inserisci **Compiler for C/C++/Objective-C** nel campo di ricerca.

14. Selezionare il valore di **Apple LLVM Compiler 3.1**.

## Aggiornamento di progetti 1.4.x a 1.5.0

1.  Installare Cordova 1.5.0.

2.  Creare un nuovo progetto ed eseguito una volta. Alcuni dei beni da questo nuovo progetto sarà necessario.

3.  Copiare il file `www/cordova-1.5.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/phonegap-1.4.x.js`.

4.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) per puntare al nuovo file `cordova-1.5.0.js` di Cordova.

5.  Trovare `PhoneGap.framework` nel vostro navigatore di progetto, selezionarla.

6.  Digitare il tasto **Delete** ed eliminare il riferimento `PhoneGap.framework` nel Navigatore progetto.

7.  Digitare la combinazione di tasti **Option-Comand-A**, che dovrebbe cadere giù un foglio per aggiungere file al progetto (il foglio **Aggiungi file...**). Assicurarsi che sia selezionato il pulsante **Created groups for any added folders**.

8.  Digitare la combinazione di tasti **Shift-Command-G**, che dovrebbe cadere giù un altro foglio per voi di andare in una cartella (il **andare nella cartella:** foglio).

9.  Inserisci `/Users/Shared/Cordova/Frameworks/Cordova.framework` nel **andare nella cartella:** foglio e quindi premere il pulsante **Goi**.

10. Premere il pulsante **Add** nella finestra **Add Files...**.

11. Selezionare `Cordova.framework` nel Navigatore progetto.

12. Digitare la combinazione di tasti **Option-Command-1** per visualizzare il **File Inspector**.

13. Scegliere il **Absolute Path** nel **File Inspector** per il menu a discesa per **Location**.

14. Digitare la combinazione di tasti **Option-Comand-A**, che dovrebbe cadere giù un foglio per aggiungere file al progetto (il foglio **Aggiungi file...**). Assicurarsi che sia selezionato il pulsante **Created groups for any added folders**.

15. Digitare la combinazione di tasti **Shift-Command-G**, che dovrebbe cadere giù un altro foglio per voi di andare in una cartella (il **andare nella cartella:** foglio).

16. Inserisci `~/Documents/CordovaLib/Classes/deprecated` nel **andare nella cartella:** foglio e quindi premere il pulsante **Go**.

17. Premere il pulsante **Add** nella finestra **Add Files...**.

18. In `AppDelegate.h`, `AppDelegate.m` e `MainViewController.h` file, sostituire il blocco intero `#ifdef PHONEGAP_FRAMEWORK` con:
    
        #import "CDVDeprecated.h"
        

19. Selezionare l' **project icon** nel Navigatore progetto, selezionare il **Target** del progetto, quindi selezionare la scheda **Build Settings**.

20. Ricerca di **Framework Search Paths**.

21. Sostituire il valore esistente con `/Users/Shared/Cordova/Frameworks`.

22. Ricerca per **Preprocessor Macros**.

23. Per il primo valore (combinato), sostituire il valore con **CORDOVA_FRAMEWORK=YES**.

24. Selezionare la scheda **Build Phases**.

25. Espandere **Run Script**.

26. Sostituire eventuali occorrenze di **PhoneGap** con **Cordova**.

27. Trovare il file `PhoneGap.plist` nel Navigatore progetto e fare clic sul nome del file una volta per entrare in modalità di modifica nome.

28. Rinominare `PhoneGap.plist` in `Cordova.plist`.

29. Tasto destro del mouse su `Cordova.plist` e scegliere **Open As → Source Code**.

30. Premi **Option-Command-F**, scegliere di **Replace** il menu a discesa in alto a sinistra della finestra di origine.

31. Immettere `com.phonegap` per trovare stringa e `org.apache.cordova` per la stringa di sostituzione, quindi premere il pulsante **Replace All**.

32. Immettere **PG** per trovare stringa e **CDV** per la stringa di sostituzione, quindi premere il pulsante **Replace All**.

33. Premere **Command-B** per costruire. Avete ancora deprecati che si possono sbarazzarsi di in futuro (vedere `CDVDeprecated.h`. Ad esempio, sostituire le classi nel codice che utilizzano PG* a CDV*).

## Progetti di aggiornamento 1.4.0 per 1.4.1

1.  Installare Cordova 1.4.1.

2.  Fare un backup dei `MainViewController.m`.

3.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

4.  Copiare il file `MainViewController.m` dal nuovo progetto nella directory 1.4.0-based del progetto su disco, sostituendo il vecchio file (backup i file prima dal passo 2 sopra).

5.  Aggiungere il file `MainViewController.m` nel vostro progetto in Xcode.

6.  Integrare il codice specifico del progetto che hai nel tuo backup `MainViewController.m` nel nuovo file.

7.  Aggiornamento del file di `phonegap-1.4.0.js` è facoltativo, non è cambiato nulla in JavaScript tra 1.4.0 e 1.4.1.

## 1.3.0 all'aggiornamento di progetti a 1.4.0

1.  Installare Cordova 1.4.0.

2.  Fare un backup di `AppDelegate.m` e `AppDelegate.h` nel vostro progetto.

3.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

4.  Copiare questi file dal nuovo progetto nella directory 1.3.0-based del progetto su disco, sostituendo qualsiasi vecchi file (backup i file prima dal passo 2 sopra):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Aggiungere tutti i `MainViewController` i file nel progetto Xcode.

6.  Copiare il file `www/phonegap-1.4.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/phonegap-1.3.0.js`.

7.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `phonegap-1.4.0.js`.

8.  Aggiungere una nuova voce sotto `Plugins` nella `PhoneGap.plist` file. La chiave è `com.phonegap.battery` e il valore è`PGBattery`.

9.  Integrare il codice specifico del progetto che hai nel tuo backup `AppDelegate.h` e `AppDelegate.m` in nuovi file di AppDelegate.

## Progetti di aggiornamento 1.2.0 alla 1.3.0

1.  Installare Cordova 1.3.0.

2.  Fare un backup di `AppDelegate.m` e `AppDelegate.h` nel vostro progetto.

3.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

4.  Copiare questi file dal nuovo progetto nella directory 1.2.0-based del progetto su disco, sostituendo qualsiasi vecchi file (backup i file prima dal passo 2 sopra):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Aggiungere tutti i `MainViewController` i file nel progetto Xcode.

6.  Copiare il file `www/phonegap-1.3.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/phonegap-1.2.0.js`.

7.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `phonegap-1.3.0.js`.

8.  Aggiungere una nuova voce sotto `Plugins` nella `PhoneGap.plist` file. La chiave è `com.phonegap.battery` e il valore è`PGBattery`.

9.  Integrare il codice specifico del progetto che hai nel tuo backup `AppDelegate.h` e `AppDelegate.m` in nuovi file di AppDelegate.

## L'aggiornamento 1.1.0 progetti per 1.2.0

1.  Installare Cordova 1.2.0.

2.  Fare un backup di `AppDelegate.m` e `AppDelegate.h` nel vostro progetto.

3.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

4.  Copiare questi file dal nuovo progetto nella directory 1.1.0-based del progetto su disco, sostituendo qualsiasi vecchi file (backup i file prima dal passo 2 sopra):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Aggiungere tutti i `MainViewController` i file nel progetto Xcode.

6.  Copiare il file `www/phonegap-1.2.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/phonegap-1.1.0.js`.

7.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `phonegap-1.2.0.js`.

8.  Aggiungere una nuova voce sotto `Plugins` nella `PhoneGap.plist` file. La chiave è `com.phonegap.battery` e il valore è`PGBattery`.

9.  Integrare il codice specifico del progetto che hai nel tuo backup `AppDelegate.h` e `AppDelegate.m` in nuovi file di AppDelegate.

## All'aggiornamento 1.0.0 proietta alla 1.1.0

1.  Installare Cordova 1.1.0.

2.  Fare un backup di `AppDelegate.m` e `AppDelegate.h` nel vostro progetto.

3.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

4.  Copiare questi file dal nuovo progetto nella directory 1.0.0-based del progetto su disco, sostituendo qualsiasi vecchi file (backup i file prima dal passo 2 sopra):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Aggiungere tutti i `MainViewController` i file nel progetto Xcode.

6.  Copiare il file `www/phonegap-1.1.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/phonegap-1.0.0.js`.

7.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `phonegap-1.1.0.js`.

8.  Aggiungere una nuova voce sotto `Plugins` nella `PhoneGap.plist` file. La chiave è `com.phonegap.battery` e il valore è`PGBattery`.

9.  Integrare il codice specifico del progetto che hai nel tuo backup `AppDelegate.h` e `AppDelegate.m` in nuovi file di AppDelegate.

## All'aggiornamento 0.9.6 progetti per 1.0.0

1.  Installare Cordova 1.0.0.

2.  Fare un backup di `AppDelegate.m` e `AppDelegate.h` nel vostro progetto.

3.  Creare un nuovo progetto. Alcuni dei beni da questo nuovo progetto sarà necessario.

4.  Copiare questi file dal nuovo progetto nella directory 0.9.6-based del progetto su disco, sostituendo qualsiasi vecchi file (backup i file prima dal passo 2 sopra):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Aggiungere tutti i `MainViewController` i file nel progetto Xcode.

6.  Copiare il file `www/phonegap-1.0.0.js` dal nuovo progetto nella directory `www` ed eliminare il file `www/phonegap-0.9.6.js`.

7.  Aggiornare il riferimento allo script di Cordova nel file `www/index.html` (e qualsiasi altro file che contengono il riferimento allo script) che punti al nuovo file `phonegap-1.0.0.js`.

8.  Aggiungere una nuova voce sotto `Plugins` nella `PhoneGap.plist` file. La chiave è `com.phonegap.battery` e il valore è`PGBattery`.

9.  Integrare il codice specifico del progetto che hai nel tuo backup `AppDelegate.h` e `AppDelegate.m` in nuovi file di AppDelegate.