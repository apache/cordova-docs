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

title: Guía de herramientas de Shell Android
---

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

## Firmar la aplicación

Usted puede revisar Android app firmando los requisitos aquí: http://developer.android.com/tools/publishing/app-signing.html

Para firmar una aplicación, usted necesita los siguientes parámetros:

*   Almacén de claves ( `--keystore` ): ruta de acceso a un archivo binario que puede contener un conjunto de claves.

*   Contraseña del almacén de claves ( `--storePassword` ): contraseña para el almacén de claves

*   Alias ( `--alias` ): el identificador especifica la clave privada utilizada para cantar.

*   Contraseña ( `--password` ): contraseña de la clave privada especificada.

*   Tipo del almacén de claves ( `--keystoreType` ): pkcs12, jks (por defecto: auto-detect basado en la extensión del archivo)

Estos parámetros pueden especificarse usando los argumentos de línea de comandos arriba a `build` o `run` secuencias de comandos.

Alternativamente, usted puede especificar en un archivo (build.json) de configuración construir ( `--buildConfig` ) argumento. Este es un ejemplo de un archivo de configuración de build:

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

Para la firma de la liberación, las contraseñas pueden ser excluidas y el sistema emitirá un mensaje solicitando la contraseña.

También hay soporte para mezclar y combinar los argumentos de línea de comandos y parámetros en el archivo build.json. Valores de los argumentos de línea de comandos tendrá prioridad. Esto puede ser útil para especificar contraseñas en la línea de comandos.

## Registro

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Limpieza

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Construcción con Gradle

A partir de cordova-android@4.0.0, proyecto construir usando [Gradle][2]. Para instrucciones sobre la construcción con ANT, consulte las versiones más antiguas de la documentación.

 [2]: http://www.gradle.org/

### Propiedades de Gradle

Estas [propiedades][3] se pueden establecer para personalizar el build:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (por defecto: false)
    
    Si se establece, a continuación, se generará varios archivos APK: uno por cada plataforma nativa admite proyectos de biblioteca (x 86, ARM, etc.). Esto puede ser importante si su proyecto utiliza grandes bibliotecas nativas, que pueden aumentar drásticamente el tamaño del APK generado.
    
    Si no, entonces se generará una sola APK que se pueden utilizar en todos los dispositivos.

*   **cdvVersionCode**
    
    Reemplaza el versionCode en`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (por defecto: liberación-signing.properties)
    
    Construye la ruta a un archivo .properties que contiene información de firma para el lanzamiento. El archivo debe parecerse:
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword`y `keyPassword` son opcionales y se solicitará si se omite.

*   **cdvDebugSigningPropertiesFile** (por defecto: debug-signing.properties)
    
    Se construye igual que cdvReleaseSigningPropertiesFile, pero para depuración. Útil cuando se necesita compartir una clave con otros desarrolladores.

*   **cdvMinSdkVersion**
    
    Reemplaza el valor de `minSdkVersion` en `AndroidManifest.xml` . Útil cuando se crean múltiples fuente basado en versión de SDK.

*   **cdvBuildToolsVersion**
    
    Reemplazar automáticamente detectado `android.buildToolsVersion` valor.

*   **cdvCompileSdkVersion**
    
    Reemplazar automáticamente detectado `android.compileSdkVersion` valor.

### Extendiendo build.gradle

Si necesita personalizar `build.gradle` , algo que editar directamente, debe crear un archivo hermano llamado `build-extras.gradle` . Este archivo se incluirán por el principal `build.gradle` al presente. Aquí está un ejemplo:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

Tenga en cuenta que también puede incluir plugins `build-extras.gradle` archivos a través de:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### Ejemplo de construcción

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true