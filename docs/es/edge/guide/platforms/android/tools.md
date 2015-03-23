* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guía de herramientas de Shell Android

Esta guía le muestra cómo utilizar el conjunto de Cordova de cáscara centrada en plataforma de herramientas para desarrollar aplicaciones Android. Este camino hacia el desarrollo, discutido en la descripción, puede ofrecer una mayor gama de opciones de desarrollo que la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos. Por ejemplo, tienes que utilizar herramientas de shell cuando se despliega una costumbre Cordova WebView junto con componentes nativos. Antes de usar cualquier camino hacia el desarrollo, primero debe configurar el entorno de SDK de Android como se describe en la guía de la plataforma Android.

Para habilitar herramientas de shell para Android, descargar Cordova de [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar cada uno de destino, `android` en este caso. Las herramientas pertinentes están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Estas herramientas le permiten crear, construir y ejecutar aplicaciones Android. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins. Ver aplicación Plugins para obtener más información sobre cómo desarrollar plugins.

## Crear un proyecto

Ejecute el comando `create`, especificando la ruta existente para el proyecto, el identificador de paquete de reversa-dominio-estilo y nombre para mostrar de la aplicación. Aquí está la sintaxis para Mac/Linux y Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## construir

Esto limpia entonces construye un proyecto.

Depuración, en Mac/Linux o Windows:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Lanzamiento, el Mac/Linux o Windows:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Ejecute la aplicación

El comando `run` acepta los siguientes parámetros *opcionales*:

*   Especificación de destino. Esto incluye `--emulador`, `, device`, o `--target = <targetID>`.

*   Especificación de construir. Esto incluye `--debug`, `--release`, o `--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Asegúrese de que crear al menos un Virtual dispositivo Android, caso contrario se le pedirá a hacerlo con el comando `android`. Si más de una AVD está disponible como un objetivo, usted se pedirá para seleccionar uno. Por defecto el comando `run` detecta un dispositivo conectado, o ejecutando un emulador si no se encuentra ningún dispositivo.

## Tala

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Limpieza

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Construcción con Gradle

A partir de cordova-android@4.0.0, proyecto construir usando [Gradle][2]. Para obtener instrucciones sobre el edificio con ANT, consulte las versiones más antiguas de la documentación.

 [2]: http://www.gradle.org/

### Propiedades de Gradle

Estas [propiedades][3] pueden establecerse para personalizar la construcción:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (por defecto: false)
    
    Si está establecido, entonces se generará varios archivos APK: uno por plataforma nativa soportada por proyectos de bibliotecas (x 86, ARM, etc.). Esto puede ser importante si el proyecto utiliza grandes bibliotecas nativas, que pueden aumentar drásticamente el tamaño de los APK generados.
    
    Si no se establece, se generará una sola APK que puede utilizarse en todos los dispositivos.

*   **cdvVersionCode**
    
    Reemplaza el versionCode situado en `AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (por defecto: release-signing.properties)
    
    Ruta a un archivo .properties que contiene información de la firma para la construcción de liberación. El archivo debe verse como:
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword` y `keyPassword` son opcionales y se pedirá si se omite.

*   **cdvDebugSigningPropertiesFile** (por defecto: debug-signing.properties)
    
    Igual que cdvReleaseSigningPropertiesFile, pero para depuración construye. Útil cuando tienes que compartir una firma clave con otros desarrolladores.

*   **cdvMinSdkVersion**
    
    Reemplaza el valor de `minSdkVersion` en `AndroidManifest.xml`. Útil cuando se crean múltiples desde servidores basan en la versión de SDK.

*   **cdvBuildToolsVersion**
    
    Reemplazar el valor automáticamente detectado `android.buildToolsVersion`.

*   **cdvCompileSdkVersion**
    
    Reemplazar el valor automáticamente detectado `android.compileSdkVersion`.

### Extendiendo build.gradle

Si necesita personalizar `build.gradle`, en lugar de editar directamente, debe crear un archivo hermano llamado `build-extras.gradle`. Este archivo se incluirá por el principal `build.gradle` cuando están presentes. Aquí está un ejemplo:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

Tenga en cuenta que plugins también puede incluir archivos `build-extras.gradle` a través de:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### Ejemplo de construcción

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true