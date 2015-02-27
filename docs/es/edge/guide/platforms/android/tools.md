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
    

## Uso manual de hormiga

Si usted desea llamar hormiga directamente desde la línea de comandos como `ant debug install` , es necesario especificar parámetros adicionales para el comando de la hormiga:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

Esto es porque los directorios utilizados por scripts de Ant de Cordova son diferentes a la predeterminada. Esto se hace para evitar conflictos cuando Ant se ejecuta desde la línea de comandos versus dentro de Eclipse/ADT.

Estos parámetros adicionales se agregan automáticamente para usted cuando se utiliza el `cordova/build` y `cordova/run` secuencias de comandos describen anteriormente. Por esta razón se recomienda usar el `cordova/build` y `cordova/run` secuencias de comandos en lugar de hormiga llamada directamente desde la línea de comandos.

## Edificio con Gradle (Experimental).

Cordova para Android ahora soporta edificio con [Gradle][2]. Esto es opcional en Córdoba 3.x, pero se activará por defecto en el futuro, probablemente con Cordova 4.0. El sistema de compilación se activa mediante una variable de entorno, que puede ser fijada para la cáscara, o especificada en la línea de comandos junto con el `cordova build` comando.

 [2]: http://www.gradle.org/

Por favor, tenga en cuenta que las normas de construcción Gradle están todavía en desarrollo y probablemente será sometida a grandes cambios antes de Gradle se convierte en el sistema de compilación predeterminado. Animan a los desarrolladores para probar y experimentar con él, pero si basa su propio sistema de compilación de producción encima, usted probablemente experimentará varios cambios de última hora sobre los próximos lanzamientos pocos, antes de que se estabilice.

### Variables de entorno pertinentes

*   **ANDROID _ CONSTRUIR**
    
    Esta variable controla que construir el sistema es utilizado para construir el proyecto. En puede tomar cualquiera de los valores `ant` o`gradle`.
    
    Si no se establece, actualmente valor predeterminado es `ant` , pero se espera que cambie.

### Otras Variables de entorno (normalmente no necesita establecer estos)

*   **ANDROID _ INICIO**
    
    Esto debe establecerse en el directorio que contiene el SDK de Android. Cordova esto busca en los lugares de instalación por defecto, así como analizando la variable PATH, así que normalmente no requiere configuración.

*   **JAVA _ INICIO**
    
    En algunas máquinas, esto tendrá que ser ajustado así que Gradle puede encontrar el compilador de Java.

### Gradle propiedades

Estas [Propiedades][3] pueden establecerse para personalizar la construcción:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**
    
    Si está establecido, entonces se generará varios archivos APK: uno por nativo plataforma soportada por proyectos de bibliotecas (x 86, brazo, etc.). Esto puede ser importante si el proyecto utiliza grandes bibliotecas nativas, que pueden aumentar drásticamente el tamaño de los APK generado.
    
    Si no se establece, se generará una sola APK que puede utilizarse en todos los dispositivos.

*   **cdvVersionCode**
    
    Reemplaza el versionCode en`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile**
    
    Ruta a un archivo .properties que contiene información de la firma para liberación construye. El archivo debe verse como:
    
        storeFile=relative/path/to/keystore.p12 storePassword = SECRET1 storeType = pkcs12 keyAlias = DebugSigningKey keyPassword = SECRET2
        
    
    `storePassword`y `keyPassword` son opcionales y se pedirá si se omite.

*   **cdvDebugSigningPropertiesFile**
    
    Igual que cdvReleaseSigningPropertiesFile, pero para depuración construye. Útil cuando tienes que compartir una firma clave con otros desarrolladores.

*   **cdvMinSdkVersion**
    
    Reemplaza el valor de `minSdkVersion` en `AndroidManifest.xml` . Útil cuando se crean múltiples desde servidores basan en la versión de SDK.

*   **cdvBuildToolsVersion**
    
    Reemplazar el automáticamente detectado `android.buildToolsVersion` valor.

*   **cdvCompileSdkVersion**
    
    Reemplazar el automáticamente detectado `android.compileSdkVersion` valor.

### Build.gradle extensible

Si necesitas personalizar `build.gradle` , prefiero que editar directamente, debe crear un archivo hermano llamado `build-extras.gradle` . Este archivo se incluirán por la cañería `build.gradle` cuando están presentes. Aquí está un ejemplo:

    # Ejemplo construir-extras.gradle # este archivo se incluye el principio de 'build.gradle' ext.cdvDebugSigningPropertiesFile = '.../../ android-depurar-keys.properties' # al conjunto, esta función permite al final de 'build.gradle' ext.postBuildExtras de código = {android.buildTypes.debug.applicationIdSuffix = '.debug'}
    

### Ejemplo Build

    Export ANDROID_BUILD = gradle export ORG_GRADLE_PROJECT_cdvMinSdkVersion = 14 cordova construir android----gradleArg =-PcdvBuildMultipleApks = true