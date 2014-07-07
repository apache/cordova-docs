* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Vedere il file avviso distribuito con questo lavoro per ulteriori informazioni riguardanti la proprietà del copyright. L'ASF licenze questo file a voi con la licenza Apache, versione 2.0 (la "licenza"); non si può usare questo file se non in conformità con la licenza. È possibile ottenere una copia della licenza a

           http://www.apache.org/licenses/License-2.0 se non richiesto dalla legge o concordato per iscritto, il software distribuito sotto la licenza è distribuito su un "AS IS" base, senza garanzie o condizioni di alcun tipo, esplicita o implicita.  Vedere la licenza per la lingua specifica che disciplina le autorizzazioni e limitazioni
    

## con la licenza.

# Configurazione di VMWare Fusion

In questa sezione viene illustrato come configurare VMWare Fusion su Mac in modo che è possibile utilizzare Cordova per generare applicazioni Windows Phone.

[Microsoft Developer Network][1] fornisce le istruzioni per come eseguire Windows sotto VMWare Fusion. Dopo l'installazione di Windows, attenersi alla seguente procedura:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  All'interno di VMWare Fusion, selezionare l'immagine disco di Windows 8 si sono preparati e scegli **Impostazioni**.

2.  Scegliere le opzioni di configurazione di **processori e memoria** . Assicurarsi di specificare *due* core del processore e per **consentire alle applicazioni di hypervisor in questa macchina virtuale**:
    
    ![][2]
    
    L'emulatore di Windows Phone solo utilizza mezzo megabyte di memoria, così in generale che è necessario riservare almeno 2GB per VMWare.

3.  Scegliere le impostazioni **avanzate** . Abilitare la **motore di virtualizzazione preferito: Intel VT-x con EPT** opzione:
    
    ![][3]

4.  Modificare il file *con estensione vmx* per aggiungere o modificare le seguenti impostazioni:
    
        hypervisor.cpuid.V0 = "FALSE" mce.enable = "TRUE" vhv.enable = "TRUE"
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

Dopo aver completato questi passaggi, allora siete pronti ad installare il SDK di Windows Phone. Vedere la guida di piattaforma Windows Phone per i dettagli.