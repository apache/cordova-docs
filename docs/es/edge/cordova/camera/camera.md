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

# Cámara

> El objeto de la `cámara` proporciona acceso a la aplicación de cámara del dispositivo por defecto.

**Nota de privacidad importante:** Recopilación y uso de imágenes desde cámara de un dispositivo plantea cuestiones de privacidad importante. Política de privacidad de su aplicación debe discutir cómo la aplicación utiliza la cámara y si se comparten las imágenes grabadas con cualquiera de las partes. Además, si el uso de la aplicación de la cámara no es aparente en la interfaz de usuario, debe proporcionar un aviso de just-in-time antes de su aplicación accediendo a la cámara (si el sistema operativo del dispositivo ya no hacerlo). Que el aviso debe proporcionar la misma información mencionada, además de obtener un permiso del usuario (por ejemplo, presentando opciones para **Aceptar** y **No gracias**). Para obtener más información, por favor consulte a la guía de privacidad.

## Métodos

*   camera.getPicture
*   Camera.Cleanup

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
        $ cordova plugin rm org.apache.cordova.core.camera
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml) < nombre de la función = "Cámara" >< nombre param = "android-paquete" value="org.apache.cordova.CameraLauncher" / >< / característica > (en app/AndroidManifest) < usos-permiso android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml) < nombre de la función = "Cámara" >< nombre param = "blackberry-paquete" value="org.apache.cordova.camera.Camera" / >< / característica > (en www/config.xml) < cuentan con id="blackberry.media.camera" / >< del borde: permisos >< rim: permiso > use_camera < / borde: permiso >< / borde: permisos >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "Cámara" >< nombre param = "ios-paquete" value = "CDVCamera" / >< / característica >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacidades >< nombre de capacidad = "ID_CAP_ISV_CAMERA" / >< nombre de capacidad = "ID_HW_FRONTCAMERA" / >< / capacidades >
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

*   Tizen (en`config.xml`)
    
        < nombre de la función = "http://tizen.org/api/application" requerida = "true" / >< nombre de la función = "http://tizen.org/api/application.launch" requerida = "true" / >
        
    
    Referencia: [manifiesto de aplicación para aplicación Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.