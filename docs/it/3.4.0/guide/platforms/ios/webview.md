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

# iOS visualizzazioni Web

In questa sezione viene illustrato come incorporare un componente WebView Cordova abilitato all'interno di una più ampia applicazione iOS. Per dettagli su come questi componenti possono comunicare con a vicenda, vedere applicazione plugin.

Supporto per iOS visualizzazioni Web iniziato con Cordova versione 1.4, utilizzando un `Cleaver` componente per il quale il modello di Xcode serve come un'implementazione di riferimento. Cordova 2.0 e versioni successive supportano solo l'implementazione basata su sottoprogetto di mannaia.

Queste istruzioni richiedono almeno 2.3 Cordova e Xcode 4.5, lungo con un `config.xml` file da un progetto di iOS appena creato. È possibile utilizzare la procedura in l'interfaccia della riga di comando per creare un nuovo progetto, quindi ottenere il `config.xml` all'interno di sottodirectory dell'applicazione denominata all'interno del file da`platforms/ios`.

Per seguire queste istruzioni, assicuratevi di che avere l'ultima distribuzione di Cordova. Scaricare da [cordova.apache.org][1] e decomprimere il pacchetto iOS.

 [1]: http://cordova.apache.org

## L'aggiunta di mannaia al progetto Xcode (sub-progetto CordovaLib)

1.  Se è in esecuzione, chiudere Xcode.

2.  Aprire un terminale e spostarsi nella directory del sorgente per iOS di Cordova.

3.  Copia il `config.xml` file descritto in precedenza nella directory del progetto.

4.  Aprire Xcode e utilizzare il Finder per copiare la `config.xml` file nella relativa finestra **Navigatore progetto** .

5.  Scegliere **crea gruppi per eventuali aggiunte cartelle** e premere **fine**.

6.  Utilizzare il Finder per copiare la `CordovaLib/CordovaLib.xcodeproj` file in di Xcode **Navigatore progetto**

7.  Selezionare `CordovaLib.xcodeproj` all'interno del **progetto Navigator**.

8.  Digitare la combinazione di tasti **opzione-comando-1** per visualizzare il **File Inspector**.

9.  Scegliere nel **File ispettore** per il menu a discesa **relativo al gruppo** per **posizione**.

10. Selezionare l' **icona del progetto** nel **Progetto navigatore**, selezionare la **destinazione**, quindi scegliere la scheda **Impostazioni di compilazione** .

11. Aggiungi `-force_load` e `-Obj-C` per il valore di **Altre bandiere di Linker** .

12. Fare clic sull' **icona progetto** in Navigatore progetto, selezionare la **destinazione**, quindi selezionare la scheda **Fasi costruire** .

13. Espandere i **file binari di collegamento con le librerie**.

14. Selezionare il **+** pulsante e aggiungere i seguenti **quadri**. Facoltativamente all'interno del **Navigatore progetto**, spostarli sotto il gruppo di **quadri** :
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

15. Espandere **Dipendenze di destinazione**, il bauletto con quell'etichetta se non c'è più di una casella.

16. Selezionare il **+** pulsante e aggiungere il `CordovaLib` costruire il prodotto.

17. Espandere i **File binari di collegamento con le librerie**, il bauletto con quell'etichetta se non c'è più di una casella.

18. Selezionare il **+** pulsante e aggiungere`libCordova.a`.

19. Impostare il **Xcode preferenze → posizioni → derivato dati → avanzate...** a **Unique**.

20. Selezionare l' **icona del progetto** nel Navigatore progetto, selezionare la **destinazione**, quindi scegliere la scheda **Impostazioni di compilazione** .

21. Ricerca di **percorsi di ricerca di intestazione**. Per tale impostazione, aggiungere questi tre valori inferiori, comprese le virgolette:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    A partire da Cordova 2.1.0, `CordovaLib` è stato aggiornato per utilizzare il **Conteggio di riferimento automatico (ARC)**. Non devi aggiornare a **ARC** utilizzare `CordovaLib` , ma se volete aggiornare il vostro progetto per utilizzare **ARC**, è necessario utilizzare la migrazione guidata di Xcode dalla **Modifica → refactoring → Converti in Objective-C ARC...** menu, **de-selezionare libCordova.a**, quindi eseguire la procedura guidata fino al completamento.

## Utilizzando CDVViewController

1.  Aggiungere la seguente intestazione:
    
        #import <Cordova/CDVViewController.h>
        

2.  Creare un'istanza di un nuovo `CDVViewController` e conservarlo da qualche parte, per esempio, a una proprietà di classe:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  Facoltativamente, impostare la `wwwFolderName` proprietà, il cui valore predefinito è `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  Facoltativamente, impostare la pagina iniziale `config.xml` di file `<content>` tag, un file locale:
    
        <content src="index.html" />
        
    
    ... o un sito remoto:
    
        <content src="http://apache.org" />
        

5.  Facoltativamente, impostare la `useSplashScreen` proprietà, il cui valore predefinito è `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  Impostare il **riquadro di visualizzazione**. Sempre impostare questa come l'ultima proprietà:
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Aggiungi mannaia alla visualizzazione:
    
        [myView addSubview:viewController.view];
        

## Aggiunta di HTML, CSS e JavaScript attivi

1.  Creare una nuova directory all'interno del progetto, `www` per esempio.

2.  Inserire HTML, CSS e JavaScript attivi in questa directory.

3.  Utilizzare il Finder per copiare la directory nella finestra **Navigatore progetto** di Xcode.

4.  Selezionare **Crea cartella riferimenti per eventuali cartelle aggiunte**.

5.  Impostare le opportune `wwwFolderName` e `startPage` proprietà della directory è stato inizialmente creato, oppure utilizzare le impostazioni predefinite (specificate nella sezione precedente) quando un'istanza del`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"