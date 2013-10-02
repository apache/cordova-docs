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

# Media

> Il `Media` oggetto fornisce la possibilità di registrare e riprodurre i file audio su un dispositivo.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**Nota:** L'implementazione corrente non aderisce a una specifica del W3C per l'acquisizione di supporti e viene fornito solo per comodità. Una futura realizzazione aderirà alla specifica W3C più recente e può deprecare le API corrente.

## Parametri

*   **src**: un URI contenente il contenuto audio. *(DOMString)*

*   **mediaSuccess**: (facoltativo) il callback che viene eseguito dopo un `Media` oggetto ha completato il gioco corrente, record o interrompere l'azione. *(Funzione)*

*   **errore mediaError**: (facoltativo) il callback che viene eseguito se si verifica un errore. *(Funzione)*

*   **mediaStatus**: (facoltativo) il callback che viene eseguito per indicare i cambiamenti di stato. *(Funzione)*

## Costanti

Costanti sono segnalate come unico parametro per il `mediaStatus` callback:

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## Metodi

*   `media.getCurrentPosition`: Restituisce la posizione corrente all'interno di un file audio.

*   `media.getDuration`: Restituisce la durata di un file audio.

*   `media.play`: Iniziare o riprendere la riproduzione di un file audio.

*   `media.pause`: Pausa la riproduzione di un file audio.

*   `media.release`: Libera risorse audio del sistema operativo sottostante.

*   `media.seekTo`: Sposta la posizione all'interno del file audio.

*   `media.setVolume`: Impostare il volume per la riproduzione audio.

*   `media.startRecord`: Iniziare a registrare un file audio.

*   `media.stopRecord`: Interrompere la registrazione di un file audio.

*   `media.stop`: Interrompere la riproduzione di un file audio.

## Parametri supplementari ReadOnly

*   **posizione**: la posizione all'interno della riproduzione audio, in pochi secondi.
    
    *   Non aggiornate automaticamente durante il gioco; chiamare `getCurrentPosition` per l'aggiornamento.

*   **durata**: la durata dei media, in secondi.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin aggiungere org.apache.cordova.media $ cordova plugin ls ['org.apache.cordova.media'] $ cordova plugin rm org.apache.cordova.media
     

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   iOS (in`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.

### Stranezze di Windows Phone

*   File sola multimediale può essere riprodotti in un momento.

*   Ci sono severe restrizioni su come l'applicazione interagisce con altri media. Vedere la [documentazione di Microsoft per maggiori dettagli][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx