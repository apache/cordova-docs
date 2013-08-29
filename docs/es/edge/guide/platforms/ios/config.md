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

El `config.xml` archivo de configuración controla varias configuraciones de Córdoba. Esta es la aplicación amplia y no establecer por ejemplo CDVViewController. El `config.xml` archivo se encuentra en su `<project folder>/<appname>` Directorio.

## `< preferencia >`

Varias preferencias (como `<preference>` etiquetas) por defecto en no romper aplicaciones existentes. Las preferencias disponibles son:

*   `DisallowOverscroll`(por defecto es booleano, `false` ): establece en `true` si no quieres la WebView de goma.

*   `TopActivityIndicator`(string, el valor predeterminado de `gray` ): este es el throbber superior girando en la barra de estado/batería, los valores válidos son `whiteLarge` , `white` , y`gray`.

*   `EnableLocation`(booleano, el valor predeterminado `false` ): establece en `true` , para inicializar el plugin de geolocalización en el arranque (para el arreglo de su ubicación puede ser más exacto) **DEPRECATED**: configure el `onload` atributo de la `Geolocation` plugin para `true` en su lugar.

*   `EnableViewportScale`(por defecto es booleano, `false` ): a `true` para evitar viewport escala a través de una etiqueta meta.

*   `AutoHideSplashScreen`(por defecto es booleano, `true` ): a `false` para controlar cuando se oculta el splashscreen a través de una API de JavaScript.

*   `FadeSplashScreen`(por defecto es booleano, `true` ): establece en `false` para evitar que la pantalla se desvanezca entrar y salir cuando Mostrar u ocultarlo.

*   `FadeSplashScreenDuration`(float, el valor predeterminado de 2): la duración de transición pantalla en segundos.

*   `ShowSplashScreenSpinner`(por defecto es booleano, `true` ): a `false` para ocultar la ruleta pantalla.

*   `MediaPlaybackRequiresUserAction`(por defecto es booleano, `false` ): establecido en true para no permitir autoplayed HTML5 video.

*   `AllowInlineMediaPlayback`(por defecto es booleano, `false` ): establece en true para permitir la reproducción de los medios de comunicación en línea HTML5, también, el elemento en el documento HTML video también debe incluir el atributo webkit-playsinline.

*   `BackupWebStorage`(string, el valor predeterminado de `cloud` ): los valores válidos son `none` , `cloud` y `local` . A `cloud` para permitir que los datos de almacenamiento web backup de iCloud, y establecer `local` para sólo permitir backups locales (sincronización de iTunes). A `none` para no permitir ninguna copias de seguridad de almacenamiento web.

*   `KeyboardDisplayRequiresUserAction`(por defecto es booleano, `true` ): establece en false para abrir el teclado cuando elementos de la forma se enfoque mediante la llamada teclado JavaScript.

*   `SuppressesIncrementalRendering`(por defecto es booleano, `false` ): establecido en true para esperar a que todo nuevo ver contenido ha sido recibida antes de que se emita.

*   `HideKeyboardFormAccessoryBar`(por defecto es booleano, `false` ): set para fiel a ocultar la barra de herramientas adicional que está en la parte superior del teclado. Esta barra de herramientas incluye los botones **Prev**, **Next**y **listo** .

*   `KeyboardShrinksView`(por defecto es booleano, `false` ): a `true` para achicar la WebView cuando aparezca el teclado. El WebView se contrae en lugar de la disminución de la visión y la página de desplazamiento. Esto se aplica a las apps que coloque sus elementos relativos a la parte inferior de la vista Web. Este es el comportamiento por defecto en Android y hace mucho sentido cuando la construcción de aplicaciones en comparación con las páginas Web.