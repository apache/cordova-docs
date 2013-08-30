---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Configuración de Android

El `config.xml` archivo controla varias configuraciones de Córdoba. Éstos se aplican a través de la aplicación y por ejemplo CordovaWebView.

## `<preference>`

Varias otras preferencias (como `<preference>` etiquetas) por defecto en no romper aplicaciones existentes. Las preferencias disponibles son:

*   `useBrowserHistory`(por defecto es booleano, `true` ): a `false` si desea utilizar el calce de la historia que se utilizó para solucionar el error hashtag presente en Android 3.x antes de la revisión de la historia. (Nota: este ajuste a ser desaprobado en abril de 2013)

*   `loadingDialog`: Muestra un diálogo nativa de carga cuando se carga la aplicación. El formato del valor es *título, mensaje*

*   `loadingPageDialog`: Mostrar un diálogo de carga nativa al cargar subpáginas. El formato del valor es *título, mensaje*

*   `errorUrl`: Establecer la página de error para su aplicación. Debe estar ubicado en tu proyecto Android`file://android_asset/www/`

*   `backgroundColor`: Ajusta el color de fondo para su aplicación. Admite un valor hexadecimal de cuatro bytes, con el primer byte que representa el valor de alfa y los siguientes tres bytes con valores RGB estándar. Por ejemplo, `0x00000000` es de color negro.

*   `loadUrlTimeoutValue`: Cuánto tiempo Cordova debe esperar antes de tirar un error de tiempo de espera de la aplicación.

*   `keepRunning`(por defecto es booleano, `true` ): determina si Cordova permanece en segundo plano.

*   `splashscreen`: El nombre del archivo sin su extensión en el `res/drawable` Directorio. Si usted tiene múltiples activos, todos ellos deben compartir este nombre común en sus respectivos directorios.

*   `disallowOverscroll`(boolean, por defecto `false` ): a `true` para desactivar el resplandor cuando un usuario se desplaza más allá del borde de la vista Web.

## `<plugin>`

Android apoya el uso `<feature>` como análogos a `<plugin>` elementos.