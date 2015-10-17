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

title: iOS visualizzazioni Web
---

# iOS visualizzazioni Web

A partire da Cordoba 1.4, è possibile utilizzare Cordova come componente nelle applicazioni iOS. Questo componente è il nome in codice 'Mannaia'.

Nuove Cordova applicazioni create utilizzando il template Xcode fornito in Cordova 1.4 o maggiore utilizzo Cleaver. (Il modello è implementazione di riferimento di mannaia).

Cordova 2.0.0 e versioni successive supportano solo l'implementazione di mannaia del sotto-progetto basato.

## Prerequisiti

*   Cordova 2.3.0 o maggiore

*   Xcode 4.5 o superiore

*   `config.xml`file (da un progetto di iOS appena creato)

## Aggiunta di mannaia al progetto Xcode (sub-progetto CordovaLib)

1.  Scaricare ed estrarre la sorgente di Cordova in un percorso di directory permanente sul disco rigido, ad esempio`~/Documents/Cordova`.

2.  Se è in esecuzione, [chiudere](../../../cordova/inappbrowser/inappbrowser.html) Xcode.

3.  Utilizzando Terminal. app, spostarsi nella directory dove avete messo la sorgente scaricata sopra.

4.  Copia il `config.xml` file nella directory del progetto su disco (vedere i prerequisiti di cui sopra).

5.  Trascinare e rilasciare il `config.xml` file nel navigatore il progetto di Xcode.

6.  Scegliere il pulsante **crea gruppi per eventuali aggiunte cartelle** e premere **fine**.

7.  Trascinare e rilasciare il `CordovaLib.xcodeproj` file nel navigatore il progetto di Xcode (dalla directory permanente posizione sopra e dovrebbe essere nel `CordovaLib` sottodirectory).

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  Digitare la combinazione di tasti **opzione-comando-1** per visualizzare il **File Inspector**.

10. Scegliere nel **File ispettore** per il menu a discesa **relativo al gruppo** per **posizione**.

11. Selezionare l' **icona del progetto** nel Navigatore progetto, selezionare la **destinazione**, quindi scegliere la scheda **Impostazioni di compilazione** .

12. Aggiungi `-all_load` e `-Obj-C` per il valore di **Altre bandiere di Linker** .

13. Fare clic sull' **icona progetto** in Navigatore progetto, selezionare la **destinazione**, quindi selezionare la scheda **Fasi costruire** .

14. Espandere i **file binari di collegamento con le librerie**.

15. Selezionare il **+** pulsante e aggiungere i seguenti **quadri**. Facoltativamente nel Navigatore progetto, spostarli sotto il gruppo di **quadri** ):
    
        AddressBook.framework AddressBookUI.framework AudioToolbox.framework AVFoundation.framework CoreLocation.framework MediaPlayer.framework QuartzCore.framework SystemConfiguration MobileCoreServices.framework CoreMedia.framework
        

16. Espandere **Dipendenze di destinazione**, il bauletto etichettato come questo se si dispone di più caselle!

17. Selezionare il **+** pulsante e aggiungere il `CordovaLib` costruire il prodotto.

18. Espandere **I binari di collegamento con le librerie**, il bauletto etichettato come questo se si dispone di più caselle!

19. Selezionare il **+** pulsante e aggiungere`libCordova.a`.

20. Impostare la preferenza di Xcode **Xcode preferenze → posizioni → dati derivati → avanzate...** su **Unique**.

21. Selezionare l' **icona del progetto** nel Navigatore progetto, selezionare la **destinazione**, quindi scegliere la scheda **Impostazioni di compilazione** .

22. Ricerca di **percorsi di ricerca di intestazione**. Per tale impostazione, aggiungere questi tre valori inferiori (con le virgolette):
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    Con Cordova 2.1.0, `CordovaLib` è stato aggiornato per utilizzare il **Conteggio di riferimento automatico (ARC)**. Si non serve aggiornare a **ARC** utilizzare CordovaLib, ma se volete aggiornare il vostro progetto per utilizzare **ARC**, utilizzare la migrazione guidata di Xcode dal menu: **Modifica → refactoring → Converti in Objective-C ARC...**, **de-selezionare libCordova.a**, quindi eseguire la procedura guidata fino al completamento.

## Utilizzando CDVViewController nel codice

1.  Aggiungi questa intestazione:
    
        #import <Cordova/CDVViewController.h>
        

2.  Creare un'istanza di un nuovo `CDVViewController` e conservarlo da qualche parte (ad esempio, a una proprietà nella classe):
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*Opzionale*) Impostare la `wwwFolderName` Proprietà (valore predefinito è `www` ):
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*Opzionale*) Impostare la pagina iniziale nel tuo config. xml, il `<content>` tag.
    
        <content src="index.html" />
        
    
    OR
    
        <content src="http://apache.org" />
        

5.  (*Opzionale*) Impostare la `useSplashScreen` Proprietà (valore predefinito è `NO` ):
    
        viewController.useSplashScreen = YES;
        

6.  Impostare il **riquadro di visualizzazione** (sempre impostare questo ultimo della proprietà):
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Aggiungi mannaia alla visualizzazione:
    
        [myView addSubview:viewController.view];
        

## Aggiungendo il vostro patrimonio HTML, CSS e JavaScript

1.  Creare una nuova directory nel progetto su disco, `www` per esempio.

2.  Mettere il vostro patrimonio HTML, CSS e JavaScript in questa directory.

3.  Trascinare e rilasciare la directory nel navigatore il progetto di Xcode.

4.  Scegliere il pulsante di opzione **crea riferimenti di cartella per eventuali cartelle aggiunte** .

5.  Impostare l'appropriato `wwwFolderName` e `startPage` proprietà per la cartella creata inizialmente, oppure utilizzare le impostazioni predefinite (vedi sezione precedente) quando si crea un'istanza del`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"