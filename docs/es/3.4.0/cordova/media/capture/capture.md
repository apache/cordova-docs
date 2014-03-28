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

# Captura

> Proporciona acceso a audio, imagen y las capacidades de captura de vídeo del dispositivo.

**Nota de privacidad importante:** Recopilación y uso de imágenes, video o audio desde el micrófono o cámara del dispositivo plantea cuestiones de privacidad importante. Política de privacidad de su aplicación debe discutir cómo la aplicación utiliza dichos sensores y si los datos registrados se compartieron con cualquiera de las partes. Además, si el uso de la aplicación de la cámara o el micrófono no es aparente en la interfaz de usuario, debe proporcionar un aviso de just-in-time antes de su aplicación accediendo a la cámara o el micrófono (si el sistema operativo del dispositivo ya no hacerlo). Que el aviso debe proporcionar la misma información mencionada, además de obtener un permiso del usuario (por ejemplo, presentando opciones para **Aceptar** y **No gracias**). Tenga en cuenta que algunos mercados de aplicación pueden requerir su aplicación para proporcionar aviso just-in-time y obtener permiso del usuario antes de acceder a la cámara o el micrófono. Para obtener más información, por favor consulte a la guía de privacidad.

## Objetos

*   Captura
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   MediaFile
*   MediaFileData

## Métodos

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## Ámbito de aplicación

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## Propiedades

*   **supportedAudioModes**: la grabación de formatos soportados por el dispositivo de audio. (ConfigurationData[])

*   **supportedImageModes**: la grabación de imagen tamaños y formatos soportados por el dispositivo. (ConfigurationData[])

*   **supportedVideoModes**: las resoluciones de grabación de vídeo y formatos soportados por el dispositivo. (ConfigurationData[])

## Métodos

*   `capture.captureAudio`: Lanzar la aplicación de grabación de audio del dispositivo para grabar clips de audio.

*   `capture.captureImage`: Lanzar la aplicación de la cámara del dispositivo para tomar fotos.

*   `capture.captureVideo`: Iniciar aplicación de grabadora de vídeo del dispositivo para grabar videos.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/XML/plugins.xml) < nombre de la función = "Capturar" >< nombre param = "android-paquete" value="org.apache.cordova.Capture" / >< / característica > (en app/AndroidManifest.xml) < usos-permiso android:name="android.permission.RECORD_AUDIO" / >< usos-permiso android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml) < nombre de la función = "Capturar" >< nombre param = "blackberry-paquete" value="org.apache.cordova.capture.MediaCapture" / >< / característica > (en www/config.xml) < cuentan con id="blackberry.system" requiere = "true" versión = "1.0.0.0" / >< cuentan con id="blackberry.io.file" requiere = "true" version = "1.0.0.0" / >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "Capturar" >< nombre param = "ios-paquete" value = "CDVCapture" / >< / característica >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.