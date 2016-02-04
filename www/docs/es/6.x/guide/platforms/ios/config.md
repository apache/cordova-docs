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

title: iOS configuración
---

# iOS configuración

El archivo `config.xml` controla la configuración básica de una app que se aplican a través de cada aplicación y una instancia de CordovaWebView. Esta sección detalla las preferencias que se aplican sólo a estructuras de iOS. Consulte [el archivo config.xml][1] para obtener información sobre las opciones de configuración global.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(por defecto es booleano, `false` ): A `true` para permitir una etiqueta meta viewport a deshabilitar o restringir el intervalo de usuario escalamiento, que está habilitada de forma predeterminada.

        <preference name="EnableViewportScale" value="true"/>


    Colocar una ventana como la siguiente en el código HTML para desactivar la escala y el ajuste contenido fexiblemente dentro de la representación WebView:

        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />


*   `MediaPlaybackAllowsAirPlay`(booleano, por defecto `true` ): A `false` para evitar que aire jugar siendo utilizado en este punto de vista. Disponible en defecto UIWebView y WKWebView.

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>


*   `MediaPlaybackRequiresUserAction`(booleano, por defecto `false` ): A `true` para evitar que HTML5 videos o audios de jugar automáticamente con el `autoplay` atributo o a través de JavaScript.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>


*   `AllowInlineMediaPlayback`(booleano, por defecto `false` ): para `true` para permitir la reproducción de multimedia de HTML5 aparecer *en línea* en el diseño de la pantalla, usando controles suministrados por el navegador en lugar de controles nativos. Para que ello, agregue el `webkit-playsinline` atributo para cualquier `<video>` elementos.

        <preference name="AllowInlineMediaPlayback" value="true"/>


*   `BackupWebStorage`(cadena, ya sea `none` , `local` , o el valor por defecto `cloud` ): para `cloud` para permitir que los datos de almacenamiento web para copia de seguridad mediante iCloud. A `local` a permiten solamente locales backups mediante iTunes sync. Para `none` prevenir backups de almacenamiento web.

        <preference name="BackupWebStorage" value="local"/>


*   `TopActivityIndicator`(cadena, por defecto es `gray` ): controla la apariencia del icono pequeño giro en la barra de estado que indica actividad de procesador significativo. Los valores válidos son `whiteLarge` , `white` , y`gray`.

        <preference name="TopActivityIndicator" value="white"/>


*   `KeyboardDisplayRequiresUserAction`(booleano, por defecto `true` ): para `false` para permitir que el teclado aparezca cuando se llama a `focus()` en las entradas del formulario.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>


*   `SuppressesIncrementalRendering`(booleano, por defecto `false` ): A `true` que esperar hasta que todo el contenido ha sido recibido antes de que presta a la pantalla.

        <preference name="SuppressesIncrementalRendering" value="true"/>


*   `GapBetweenPages`(flotador, por defecto es `` ): el tamaño de la brecha, en puntos, entre las páginas.

        <preference name="GapBetweenPages" value="0"/>


*   `PageLength`(flotador, por defecto es `` ): el tamaño de cada página, en puntos, en la dirección en que fluyen las páginas. Cuando PaginationMode es derecha a izquierda o de izquierda a derecha, esta propiedad representa el ancho de cada página. Cuando PaginationMode es topToBottom o bottomToTop, esta propiedad representa la altura de cada página. El valor predeterminado es 0, lo que significa que el diseño utiliza el tamaño de la ventanilla para determinar las dimensiones de la página.

        <preference name="PageLength" value="0"/>


*   `PaginationBreakingMode`(cadena, por defecto es `page` ): los valores válidos son `page` y `column` . La manera en que se produzca fractura de columna o página. Esta propiedad determina si ciertas propiedades CSS sobre columna y página romper son honrados o ignorados. Cuando esta propiedad está establecida `column` , el contenido respeta las propiedades CSS relacionadas con fractura de columna en lugar de la página-última hora.

        <preference name="PaginationBreakingMode" value="page"/>


*   `PaginationMode`(cadena, por defecto es `unpaginated` ): los valores válidos son `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , y `rightToLeft` . Esta propiedad determina si contenido en la vista web se divide en páginas que llenan la pantalla de una vista a la vez, o se muestra como un largo desplazamiento. Si establece en forma paginada, esta propiedad cambia un esquema paginado en el contenido, haciendo que la vista de web para utilizar los valores de PageLength y GapBetweenPages a cachés su contenido.

        <preference name="PaginationMode" value="unpaginated"/>


*   `UIWebViewDecelerationSpeed`(cadena, por defecto es `normal` ): los valores válidos son `normal` , `fast` . Esta propiedad controla la velocidad de desaceleración del impulso de desplazamiento. `normal`es la velocidad por defecto de aplicaciones nativas más, y `fast` es el valor por defecto de Safari Mobile.

        <preference name="UIWebViewDecelerationSpeed" value="fast" />


*   `ErrorUrl`(string, no establece de forma predeterminada): Si establece, se visualizará la página local que se hace referencia a un error en la aplicación.

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `OverrideUserAgent`(string, no establece de forma predeterminada): si se establece, el valor reemplazará el viejo UserAgent de webview. Es útil identificar la petición del navegador de la aplicación cuando solicita páginas remotas. Uso con precaución, esto puede causa compitiable problema con servidores web. Para la mayoría de los casos, utilice AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(string, no establece de forma predeterminada): Si establece, el valor agregará al final del viejo UserAgent de webview. Cuando se utiliza con OverrideUserAgent, este valor se omitirá.

        <preference name="AppendUserAgent" value="My Browser" />
