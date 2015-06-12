* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# iOS configuración

El archivo `config.xml` controla la configuración básica de una app que se aplican a través de cada aplicación y una instancia de CordovaWebView. Esta sección detalla las preferencias que se aplican sólo a estructuras de iOS. Consulte [el archivo config.xml][1] para obtener información sobre las opciones de configuración global.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(por defecto es booleano, `false` ): A `true` para permitir una etiqueta meta viewport a deshabilitar o restringir el intervalo de usuario escalamiento, que está habilitada de forma predeterminada.
    
        <preference name="EnableViewportScale" value="true"/>
        
    
    Colocar una ventana como la siguiente en el código HTML para desactivar la escala y el ajuste contenido fexiblemente dentro de la representación WebView:
    
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
        

*   `MediaPlaybackRequiresUserAction`(booleano, el valor predeterminado `false` ): A `true` para impedir jugar automáticamente con HTML5 videos o audios del `autoplay` atributo o a través de JavaScript.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback` (boolean, valor predeterminado `false`): establece en `true` para permitir la reproducción multimedia HTML5 aparecer *en línea* en el diseño de pantalla, utilizando el navegador proporciona controles más controles nativos. Para que ello, agregue el atributo `webkit-playsinline` a cualquier elemento `< video >`.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage` (string, `none`, `local` o la de por defecto `cloud`): establece en `cloud` para permitir que los datos de backup mediante iCloud almacenamiento web. Establece en `local` para permitir a sólo locales backups mediante sincronización de iTunes. Set para `none` evitar copias de almacenamiento web.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator` (string, el valor predeterminado de `gray`): controla la apariencia del icono en la barra de estado que indica actividad significativa procesador pequeño giro. Los valores válidos son `whiteLarge`, `white` y `gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `KeyboardDisplayRequiresUserAction` (por defecto valor booleano, `true`): establecida en `false` para permitir que el teclado que aparece cuando se llama `focus()` en entradas del formulario.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering` (boolean, valor predeterminado `false`): establece en `true` para esperar a que todo el contenido ha sido recibido antes que presta a la pantalla.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `GapBetweenPages`(flotador, por defecto `` ): el tamaño de la brecha, en puntos, entre páginas.
    
        <preference name="GapBetweenPages" value="0"/>
        

*   `PageLength`(flotador, por defecto `` ): el tamaño de cada página, en puntos, en el sentido que fluyen de las páginas. Cuando PaginationMode es de derecha a izquierda o de izquierda a derecha, esta propiedad representa el ancho de cada página. Cuando PaginationMode es topToBottom o bottomToTop, esta propiedad representa la altura de cada página. El valor predeterminado es 0, lo que significa que el diseño utiliza el tamaño de la vista para determinar las dimensiones de la página.
    
        <preference name="PageLength" value="0"/>
        

*   `PaginationBreakingMode`(string, el valor predeterminado de `page` ): los valores válidos son `page` y `column` .La manera en que se produzca la rotura de columna o página. Esta propiedad determina si ciertas propiedades CSS sobre columna y página-romper son honrados o ignorados. Cuando esta propiedad se establece en `column` , el contenido respeta las propiedades CSS relacionadas con romper en lugar de la página-fractura de columna.
    
        <preference name="PaginationBreakingMode" value="page"/>
        

*   `PaginationMode`(string, el valor predeterminado de `unpaginated` ): los valores válidos son `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , y `rightToLeft` . Esta propiedad determina si contenido en la vista web se divide en páginas que llenan la uno pantalla a la vez, o se muestra como un punto de vista mucho desplazamiento. Si el conjunto a una forma paginada, esta propiedad cambia un esquema paginado en el contenido, causando la vista web para utilizar los valores de PageLength y GapBetweenPages a cachés su contenido.
    
        <preference name="PaginationMode" value="unpaginated"/>
        

*   `UIWebViewDecelerationSpeed`(string, el valor predeterminado de `normal` ): los valores válidos son `normal` , `fast` . Esta propiedad controla la velocidad de desaceleración del impulso de desplazamiento. `normal`es la velocidad por defecto para las aplicaciones más nativas, y `fast` es el valor predeterminado para el Mobile Safari.
    
        <preference name="UIWebViewDecelerationSpeed" value="fast" />
        

*   `ErrorUrl`(string, no establece de forma predeterminada): Si establece, se visualizará la página local que se hace referencia a un error en la aplicación.
    
        < nombre de preferencia = value="myErrorPage.html"/ "ErrorUrl" >
        

*   `OverrideUserAgent` (string, no establece de forma predeterminada): si se establece, el valor reemplazará el viejo UserAgent de webview. Es útil identificar la petición del navegador de la aplicación cuando solicita páginas remotas. Uso con precaución, esto puede causa compitiable problema con servidores web. Para la mayoría de los casos, utilice AppendUserAgent.
    
        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />
        

*   `AppendUserAgent` (string, no establece de forma predeterminada): Si establece, el valor agregará al final del viejo UserAgent de webview. Cuando se utiliza con OverrideUserAgent, este valor se omitirá.
    
        <preference name="OverrideUserAgent" value="My Browser" />