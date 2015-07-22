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

# Los medios de comunicación

> El objeto de `Media` proporciona la capacidad de grabar y reproducir archivos de audio en un dispositivo.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**NOTA:** La implementación actual no se adhiere a una especificación del W3C para la captura de los medios de comunicación y se proporciona únicamente para su comodidad. Una futura implementación se adherirá a la más reciente especificación W3C y puede desaprueban las API actuales.

## Parámetros

*   **fuente**: un URI que contiene el contenido de audio. *(DOMString)*

*   **mediaSuccess**: (opcional) la devolución de llamada que se ejecuta después de un `Media` objeto ha completado el juego actual, registro o acción. *(Función)*

*   **mediaError**: (opcional) la devolución de llamada que se ejecuta si se produce un error. *(Función)*

*   **mediaStatus**: (opcional) la devolución de llamada que se ejecuta para indicar cambios en el estado. *(Función)*

## Constantes

Las siguientes constantes son reportadas como el único parámetro para la devolución de llamada `mediaStatus`:

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## Métodos

*   `media.getCurrentPosition`: Devuelve la posición actual dentro de un archivo de audio.

*   `media.getDuration`: Devuelve la duración de un archivo de audio.

*   `media.play`: Iniciar o reanudar la reproducción de un archivo de audio.

*   `media.pause`: Pausar la reproducción de un archivo de audio.

*   `media.release`: Libera recursos de audio del sistema operativo subyacente.

*   `media.seekTo`: Mueve la posición dentro del archivo de audio.

*   `media.setVolume`: Ajusta el volumen para la reproducción de audio.

*   `media.startRecord`: Iniciar la grabación de un archivo de audio.

*   `media.stopRecord`: Deja de grabar un archivo de audio.

*   `media.stop`: Para reproducir un archivo de audio.

## Parámetros adicionales ReadOnly

*   **posición**: la posición dentro de la reproducción de audio, en segundos.
    
    *   No actualizada automáticamente durante la reproducción; Llame a `getCurrentPosition` para actualizar.

*   **duración**: la duración de los medios de comunicación, en segundos.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin añadir org.apache.cordova.media $ cordova plugin ls ['org.apache.cordova.media'] $ cordova plugin rm org.apache.cordova.media
     

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

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
        

*   (en iOS`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.

### Windows Phone rarezas

*   Archivo sólo multimedia puede reproducir en un momento.

*   Hay restricciones estrictas sobre cómo interactúa la aplicación con otros medios. Consulte la [documentación de Microsoft para obtener más detalles][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx