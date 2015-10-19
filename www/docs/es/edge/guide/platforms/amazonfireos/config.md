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

title: Amazon fuego OS configuración
---

# Amazon fuego OS configuración

El archivo `config.xml` controla la configuración básica de una app que se aplican a través de cada aplicación y una instancia de CordovaWebView. Este preferencias detalles sección que sólo se aplican a Amazon fuego OS construye. Consulte [el archivo config.xml][1] para obtener información sobre las opciones de configuración global.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning` (por defecto valor booleano, `true`): determina si la aplicación queda funcionando en segundo plano, incluso después de un `[pause](../../../cordova/events/events.pause.html)` de evento se desencadena. Si se establece como `false` no mata la aplicación después de un `[pause](../../../cordova/events/events.pause.html)` evento, sino simplemente detiene ejecución de código en la vista Web cordova mientras la aplicación está en el fondo.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`(URL, por defecto `null` ): Si establece, se visualizará la página que se hace referencia a un error en la aplicación en lugar de un diálogo con el título "Error de aplicación".
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`(string, el valor predeterminado de `null` ): Si conjunto, muestra un diálogo con el mensaje y título especificado y un hilandero, cuando cargue la primera página de una aplicación. El título y el mensaje están separados por una coma en esta cadena de valor, y eso coma se retira antes de que se muestre el cuadro de diálogo.
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`(string, el valor predeterminado de `null` ): lo mismo que `LoadingDialog` , pero para cargar cada página después de la primera página de la aplicación.
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue` (número, el valor predeterminado es `20000`): cuando se carga una página, la cantidad de tiempo de espera antes de tirar un error de tiempo de espera. Este ejemplo especifica 10 segundos en lugar de 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: el nombre del archivo sin su extensión en el directorio `res/drawable`. Varios activos deben compartir este nombre común en diferentes subdirectorios.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay` (número, el valor predeterminado de `5000`): la cantidad de tiempo que muestra la imagen en pantalla splash.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `ShowTitle`(por defecto es booleano, `false` ): Mostrar el título en la parte superior de la pantalla.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(string, el valor predeterminado de `ERROR` ): establece el nivel de registro mínimo a través de registro que se filtrarán los mensajes de la aplicación. Los valores válidos son `ERROR` , `WARN` , `INFO` , `DEBUG` , y`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>