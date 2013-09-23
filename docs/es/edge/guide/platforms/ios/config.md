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

# iOS configuración

El archivo `config.xml` controla la configuración básica de una app que se aplican a través de cada aplicación y una instancia de CordovaWebView. Esta sección detalla las preferencias que se aplican sólo a estructuras de iOS. Vea el archivo config.xml archivo para obtener información sobre las opciones de configuración global.

*   `EnableViewportScale` (boolean, valor predeterminado `false`): establece en `true` para usar una etiqueta meta viewport para deshabilitar o restringir el intervalo de usuario escalar.
    
        <preference name="EnableViewportScale" value="true"/>
        

*   `MediaPlaybackRequiresUserAction` (boolean, valor predeterminado `false`): establece en `true` para impedir que HTML5 vídeos jugar automáticamente con el atributo `autoplay`. No se aplica cuando se llama a `play()` en un objeto de vídeo.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback` (boolean, valor predeterminado `false`): establece en `true` para permitir la reproducción multimedia HTML5 aparecer *en línea* en el diseño de pantalla, utilizando el navegador proporciona controles más controles nativos. Para que ello, agregue el atributo `webkit-playsinline` a cualquier elemento `< video >`.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage` (string, `none`, `local` o la de por defecto `cloud`): establece en `cloud` para permitir que los datos de backup mediante iCloud almacenamiento web. Establece en `local` para permitir a sólo locales backups mediante sincronización de iTunes. Set para `none` evitar copias de almacenamiento web.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator` (string, el valor predeterminado de `gray`): controla la apariencia del icono en la barra de estado que indica actividad significativa procesador pequeño giro. Los valores válidos son `whiteLarge`, `white` y `gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `FadeSplashScreen` (por defecto valor booleano, `true`): establecida en `false` para evitar que la pantalla de bienvenida descoloramiento entrar y salir cuando cambia su estado de presentación.
    
        <preference name="FadeSplashScreen" value="false"/>
        

*   `FadeSplashScreenDuration` (float, el valor predeterminado de `2`): especifica el número de segundos para que la pantalla de bienvenida se desvanecen efecto de ejecutar.
    
        <preference name="FadeSplashScreenDuration" value="4"/>
        

*   `ShowSplashScreenSpinner` (por defecto valor booleano, `true`): establecida en `false` para ocultar el hilandero de la pantalla.
    
        <preference name="ShowSplashScreenSpinner" value="false"/>
        

*   `KeyboardDisplayRequiresUserAction` (por defecto valor booleano, `true`): establecida en `false` para permitir que el teclado que aparece cuando se llama `focus()` en entradas del formulario.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering` (boolean, valor predeterminado `false`): establece en `true` para esperar a que todo el contenido ha sido recibido antes que presta a la pantalla.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `KeyboardShrinksView` (boolean, valor predeterminado `false`): establece en `true` para achicar la webview cuando aparezca el teclado, anulando el beavior por defecto que se contrae el viewport verticalmente. Esto coincide con el comportamiento por defecto para las aplicaciones Android.
    
        <preference name="KeyboardShrinksView" value="true"/>