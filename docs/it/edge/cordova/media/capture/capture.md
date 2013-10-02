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

# Cattura

> Fornisce l'accesso per il dispositivo audio, immagine e funzionalità di cattura video.

**Nota importante sulla privacy:** Raccolta e utilizzo delle immagini, video o audio da videocamera o un microfono del dispositivo solleva questioni di privacy importante. Politica sulla privacy dell'app dovrebbe discutere come app utilizza tali sensori e se i dati registrati sono condivisa con altre parti. Inoltre, se uso dell'app della fotocamera o microfono non è evidente nell'interfaccia utente, è necessario fornire un preavviso di just-in-time prima della tua app accede la videocamera o il microfono (se il sistema operativo del dispositivo non farlo già). Tale comunicazione deve fornire le informazioni stesse notate sopra, oltre ad ottenere l'autorizzazione (ad esempio, presentando scelte per **OK** e **No grazie**). Si noti che alcuni mercati app possono richiedere l'app può fornire preavviso just-in-time e ottenere l'autorizzazione dell'utente prima di accedere la videocamera o il microfono. Per ulteriori informazioni, vedere la guida sulla Privacy.

## Oggetti

*   Cattura
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   MediaFile
*   MediaFileData

## Metodi

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## Ambito di applicazione

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## Proprietà

*   **supportedAudioModes**: la registrazione di formati supportati dal dispositivo audio. (ConfigurationData[])

*   **supportedImageModes**: la registrazione formati immagine e i formati supportati dal dispositivo. (ConfigurationData[])

*   **supportedVideoModes**: I formati supportati dal dispositivo e risoluzioni video registrazione. (ConfigurationData[])

## Metodi

*   `capture.captureAudio`: Lanciare l'applicazione di registrazione audio del dispositivo per registrare clip audio.

*   `capture.captureImage`: Lanciare l'applicazione della fotocamera del dispositivo per scattare foto.

*   `capture.captureVideo`: Lanciare l'applicazione di registratore video del dispositivo per registrare video.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/XML/plugins.Xml) < nome funzione = "Cattura" >< nome param = "android-pacchetto" value="org.apache.cordova.Capture" / >< / caratteristica > (in app/AndroidManifest.xml) < android:name="android.permission.RECORD_AUDIO usi-autorizzazione" / >< android:name="android.permission.WRITE_EXTERNAL_STORAGE usi-autorizzazione" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "Cattura" >< param nome = "blackberry-pacchetto" value="org.apache.cordova.capture.MediaCapture" / >< / caratteristica > (in www/config.xml) < presentano id="blackberry.system" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.io.file" richiesto = "true" versione = "1.0.0.0" / >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "Cattura" >< param nome = valore "ios-pacchetto" = "CDVCapture" / >< / caratteristica >
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.