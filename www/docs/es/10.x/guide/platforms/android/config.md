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

title: Configuración de Android
---

# Configuración de Android

El archivo `config.xml` controla la configuración básica de una app que se aplican a través de cada aplicación y una instancia de CordovaWebView. Esta sección detalla las preferencias que se aplican sólo a estructuras Android. Consulte [el archivo config.xml][1] para obtener información sobre las opciones de configuración global.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning` (por defecto valor booleano, `true`): determina si la aplicación queda funcionando en segundo plano, incluso después de un `[pause](../../../cordova/events/events.pause.html)` de evento se desencadena. Si se establece como `false` no mata la aplicación después de un `[pause](../../../cordova/events/events.pause.html)` evento, sino simplemente detiene ejecución de código en la vista Web cordova mientras la aplicación está en el fondo.

        <preference name="KeepRunning" value="false"/>


*   `LoadUrlTimeoutValue`(número en milisegundos, por defecto `20000` , 20 segundos): cuando se carga una página, la cantidad de tiempo de espera antes de tirar un error de tiempo de espera. Este ejemplo especifica 10 segundos en lugar de 20:

        <preference name="LoadUrlTimeoutValue" value="10000"/>


*   `SplashScreen`(string, el valor predeterminado de `splash` ): el nombre del archivo sin su extensión en el `res/drawable` Directorio. Varios activos deben compartir este nombre común en diferentes subdirectorios.

        <preference name="SplashScreen" value="mySplash"/>


*   `SplashScreenDelay`(número en milisegundos, por defecto `3000` ): la cantidad de tiempo que muestra la imagen en pantalla splash.

        <preference name="SplashScreenDelay" value="10000"/>


*   `InAppBrowserStorageEnabled`(por defecto es booleano, `true` ): controles si abrieron páginas dentro de un InAppBrowser pueden acceder el mismo [localStorage](../../../cordova/storage/localstorage/localstorage.html) y WebSQL almacenamiento de información como páginas abrió con el navegador por defecto.

        <preference name="InAppBrowserStorageEnabled" value="true"/>


*   `LoadingDialog`(string, el valor predeterminado de `null` ): Si conjunto, muestra un diálogo con el mensaje y título especificado y un hilandero, cuando cargue la primera página de una aplicación. El título y el mensaje están separados por una coma en esta cadena de valor, y eso coma se retira antes de que se muestre el cuadro de diálogo.

        <preference name="LoadingDialog" value="My Title,My Message"/>


*   `LoadingPageDialog`(string, el valor predeterminado de `null` ): lo mismo que `LoadingDialog` , pero para cargar cada página después de la primera página de la aplicación.

        <preference name="LoadingPageDialog" value="My Title,My Message"/>


*   `ErrorUrl`(URL, por defecto `null` ): Si establece, se visualizará la página que se hace referencia a un error en la aplicación en lugar de un diálogo con el título "Error de aplicación".

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `ShowTitle`(por defecto es booleano, `false` ): Mostrar el título en la parte superior de la pantalla.

        <preference name="ShowTitle" value="true"/>


*   `LogLevel`(string, el valor predeterminado de `ERROR` ): establece el nivel de registro mínimo a través de registro que se filtrarán los mensajes de la aplicación. Los valores válidos son `ERROR` , `WARN` , `INFO` , `DEBUG` , y`VERBOSE`.

        <preference name="LogLevel" value="VERBOSE"/>


*   `SetFullscreen`(por defecto es booleano, `false` ): igual que el `Fullscreen` parámetro en la configuración global de este archivo xml. Este elemento específico de Android está obsoleta a favor de la global `Fullscreen` elemento y se quitará en una versión futura.

*   `AndroidLaunchMode`(string, el valor predeterminado de `singleTop` ): establece la actividad `android:launchMode` atributo. Esto cambia lo que pasa cuando la aplicación se inicia desde el icono de la aplicación o intención y está ya en ejecución. Los valores válidos son `standard` , `singleTop` , `singleTask` ,`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>


*   `DefaultVolumeStream`(string, el valor predeterminado de `default` , agregado en Córdoba-android 3.7.0): establece que volumen el volumen de hardware vinculan los botones. Por defecto es "llamar" por "medios" para tablets y teléfonos. Ajuste este parámetro a "medios" para los botones de volumen de su aplicación siempre cambiar el volumen de los medios de comunicación. Tenga en cuenta que al usar el plugin de los medios de comunicación de Cordova, los botones de volumen cambiará dinámicamente para controlar el volumen de los medios de comunicación cuando los objetos a los medios de comunicación están activos.

*   `OverrideUserAgent` (string, no establece de forma predeterminada): si se establece, el valor reemplazará el viejo UserAgent de webview. Es útil identificar la petición del navegador de la aplicación cuando solicita páginas remotas. Uso con precaución, esto puede causa compitiable problema con servidores web. Para la mayoría de los casos, utilice AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent` (string, no establece de forma predeterminada): Si establece, el valor agregará al final del viejo UserAgent de webview. Cuando se utiliza con OverrideUserAgent, este valor se omitirá.

        <preference name="AppendUserAgent" value="My Browser" />
