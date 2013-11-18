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

El archivo `config.xml` controla la configuración básica de una app que se aplican a través de cada aplicación y una instancia de CordovaWebView. Esta sección detalla las preferencias que se aplican sólo a estructuras Android. Vea el archivo config.xml archivo para obtener información sobre las opciones de configuración global.

*   `KeepRunning`(por defecto es booleano, `true` ): determina si la aplicación queda corriendo en el fondo incluso después un `pause` evento incendios. Nota: si se establece en false no matará la aplicación después de una pausa, sólo detendrá la ejecución de código en la vista Web cordova mientras la aplicación está en el fondo.
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(de forma predeterminada, el número `20000` , 20 segundos): cuando se carga una página, la cantidad de tiempo de espera antes de tirar un error de tiempo de espera. Este ejemplo especifica 10 segundos en lugar de 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: El nombre del archivo sin su extensión en el `res/drawable` Directorio. Varios activos deben compartir este nombre común en diferentes subdirectorios.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(número, por defecto `5000` ): la cantidad de tiempo que muestra la imagen en pantalla splash.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(por defecto es booleano, `true` ): controles si abrieron páginas dentro de un InAppBrowser pueden acceder el mismo localStorage y WebSQL almacenamiento de información como páginas abrió con el navegador por defecto.