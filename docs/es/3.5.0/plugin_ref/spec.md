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

# Especificación de plugin

El `plugin.xml` archivo es un documento XML en el `plugins` espacio de nombres: `http://apache.org/cordova/ns/plugins/1.0` . Contiene un alto nivel `plugin` elemento que define el plugin y niños que definen la estructura del plugin.

Un elemento de plugin de muestra:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *plugin* Elemento

El `plugin` es elemento superior del manifiesto del plugin. Cuenta con los siguientes atributos:

*   `xmlns`(obligatorio): el espacio de nombres del plugin, `http://apache.org/cordova/ns/plugins/1.0` . Si el documento contiene XML de otros espacios de nombres, como las etiquetas que se añade a la `AndroidManifest.xml` archivo, esos espacios de nombres deben incluirse también en el elemento de nivel superior.

*   `id`(requerido): un revés-dominio estilo identificador para el plugin, tales como`com.alunny.foo`

*   `version`(requerido): un número de versión para el plugin, que coincide con la siguiente expresión regular estilo mayor-menor-patch:
    
        ^\d+[.]\d+[.]\d+$
        

## Elementos *motores* y *motor*

Los elementos secundarios de la `<engines>` elemento especificar las versiones de los marcos basados en Apache Cordova que este plugin soporta. Un ejemplo:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

Similar a la `<plugin>` del elemento `version` atributo, la cadena de versión especificada debe coincidir con una cadena de mayor-menor-patch conforme a la expresión regular:

        ^\d+[.]\d+[.]\d+$
    

Elementos del motor también pueden especificar confuso acerca de los partidos para evitar la repetición y para reducir el mantenimiento cuando se actualiza la plataforma subyacente. Herramientas deben soportar un peso mínimo de `>` , `>=` , `<` y `<=` , por ejemplo:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

El `<engine>` etiquetas también cuenta con soporte por defecto para todas las plataformas principales Cordova existe en. Especificar el `cordova` etiqueta motor significa que todas las versiones de Cordova en cualquier plataforma deben satisfacer el atributo de versión de motor. También puede enumerar sus versiones y plataformas específicas con el fin de reemplazar el catch-all `cordova` motor:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

Aquí está una lista de la cesación de pagos que motores del '<engine>' soporta la etiqueta: * 'cordova' * 'cordova-plugman' * 'cordova-Amazonas-fireos' * 'cordova-android' * 'cordova-ios' * 'cordova-blackberry10' * 'cordova-wp7' * 'cordova-wp8' * 'cordova-windows8'  
* ' android-sdk' / / devuelve la api de Android más alto nivel instalado * 'apple-xcode' / / devuelve la versión de xcode * 'ios de apple' / / devuelve la versión de iOS más alta instalada * 'apple-osx' / / devuelve la versión OSX * 'blackberry-ndk' / / devuelve la versión SDK nativo blackberry

Especificar Marcos personalizados basados en Apache Cordova deben aparecer bajo la etiqueta de motor así:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Un marco personalizado basado en Apache Cordova exige que un elemento motor incluye los siguientes atributos: `name` , `version` , `scriptSrc` , y`platform`.

*   `name`(requerido): un nombre legible para su marco personalizado.

*   `version`(obligatorio): la versión de que su marco debe tener para poder instalar.

*   `scriptSrc` (obligatorio): el archivo de script que dice plugman qué versión del marco personalizado. Idealmente, este archivo debe estar dentro del directorio de nivel superior de su directorio.

*   `platform`(requerido): Qué plataformas que soporta su marco. Usted puede utilizar el comodín `*` decir para todas las plataformas soportadas, especificar múltiples con un caracter como `android|ios|blackberry10` o sólo una única plataforma como`android`.

plugman se anula con un código distinto de cero para cualquier plugin cuyo objetivo proyecto no cumple con las limitaciones del motor.

Si no `<engine>` etiquetas se especifican, plugman intenta instalar en el directorio del proyecto especificado cordova ciegamente.

## *nombre* Elemento

Un nombre legible para el plugin, cuyo contenido de texto contiene el nombre del plugin. Por ejemplo:

    < nombre > Foo < / nombre >
    

Este elemento no es (todavía) localización de la manija.

## *Descripción* Elemento

Una descripción legible para el plugin. El contenido del texto del elemento contiene la descripción del plugin. Un ejemplo:

    <description>Foo plugin description</description>
    

Este elemento no es (todavía) localización de la manija.

## *autor* Elemento

Nombre autor del plugin. El contenido del texto del elemento contiene el nombre del autor del plugin. Un ejemplo:

    <author>Foo plugin description</author>
    

## *palabras clave* Elemento

Palabras clave plugin. El contenido del texto del elemento contiene palabras clave separadas por comas para describir el plugin. Un ejemplo:

    <keywords>foo,bar</keywords>
    

## *licencia* Elemento

Licencia de plugin. El contenido del texto del elemento contiene la licencia del plugin. Un ejemplo:

    <license>Apache 2.0 License</license>
    

## *activo* Elemento

Uno o más elementos listado los archivos o directorios que se copiarán en una aplicación Cordova `www` Directorio. Ejemplos:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

Todos `<asset>` etiquetas requieren ambos `src` y `target` atributos. Sólo web plugins contiene principalmente `<asset>` elementos. Cualquier `<asset>` elementos que están anidados dentro de `<platform>` elementos especifican activos específicos a una plataforma web, como se describe a continuación. Los atributos incluyen:

*   `src`(requerido): donde se encuentra el archivo o directorio en el paquete del plugin, relativo a la `plugin.xml` documento. Si no existe un archivo especificado en el `src` Ubicación, plugman se detiene y revierte el proceso de instalación, emite una notificación sobre el conflicto y sale con un código distinto de cero.

*   `target`(obligatorio):
    
    Donde el archivo o directorio debe estar ubicado en la aplicación de Cordova, relativo a la `www` Directorio. Activos pueden ser dirigidos a subdirectorios, por ejemplo:
    
    <asset src="www/new-foo.js" target="js/experimental/foo.js" />
    
    crea el `js/experimental` directorio dentro de la `www` Directorio, a menos que ya presentes, luego copias el `new-foo.js` archivo y cambia el nombre `foo.js` . Si ya existe un archivo en la ubicación de destino, plugman se detiene y revierte el proceso de instalación, emite una notificación sobre el conflicto y sale con un código distinto de cero.

## *JS-módulo* Elemento

La mayoría de plugins incluyen uno o más archivos JavaScript. Cada `<js-module>` tag corresponde a un archivo JavaScript y evita que los usuarios del plugin tener que añadir un `<script>` etiqueta para cada archivo. Mientras que `<asset>` etiquetas simplemente copien un archivo desde el subdirectorio plugin en `www` , `<js-module>` etiquetas son mucho más sofisticados. Se parecen a esto:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Al instalar un plugin con el ejemplo anterior, `socket.js` se copia a `www/plugins/my.plugin.id/socket.js` y se agrega como una entrada a `www/cordova_plugins.js` . En el tiempo de carga, el código `cordova.js` XHR se utiliza para leer cada archivo e inyectar un `<script>` tag en HTML. Agrega una asignación para aplastar o combinar según sea apropiado, como se describe a continuación.

*No* envuelva el archivo con `cordova.define` , como se añade automáticamente. El módulo está envuelto en un cierre, con `module` , `exports` , y `require` en su alcance, como es normal para los módulos de AMD.

Detalles para el `<js-module>` etiqueta:

*   El `src` hace referencia a un archivo en el directorio del plugin relativo a la `plugin.xml` archivo.

*   El `name` proporciona la última parte del nombre del módulo. Generalmente puede ser lo que quieras, y lo único que importa si desea utilizar `cordova.require` para importar otras partes de sus plugins en tu código JavaScript. El nombre del módulo para un `<js-module>` es tu plugin `id` seguido por el valor de `name` . Para el ejemplo anterior, con un `id` de `chrome.socket` , es el nombre del módulo`chrome.socket.Socket`.

*   Se permiten tres etiquetas en `<js-module>` :
    
    *   `<clobbers target="some.value"/>`indica que el `module.exports` se inserta en el `window` objeto como `window.some.value` . Puedes tener tantos `<clobbers>` como te gusta. Cualquier objeto no está disponible en `window` es creado.
    
    *   `<merges target="some.value"/>`indica que el módulo se fusionara con cualquier valor existente en `window.some.value` . Si ya existe una tecla cualquiera, versión del módulo reemplaza el original. Puedes tener tantos `<merges>` como te gusta. Cualquier objeto no está disponible en `window` es creado.
    
    *   `<runs/>`significa que el código debe especificarse con `cordova.require` , pero no instalado en el `window` objeto. Esto es útil cuando se inicializó el módulo, adjuntar controladores de eventos o de otra manera. Sólo puedes tener hasta uno `<runs/>` etiqueta. Tenga en cuenta que incluso un `<runs/>` con `<clobbers/>` o `<merges/>` es redundante, puesto que también `cordova.require` su módulo.
    
    *   Vacío `<js-module>` todavía las cargas y se puede acceder en otros módulos vía`cordova.require`.

Si `src` no se resuelve en un archivo existente, plugman se detiene y revierte la instalación, emite una notificación del problema y sale con un código distinto de cero.

Anidación `<js-module>` elementos dentro de `<platform>` declara enlaces específicos a una plataforma JavaScript módulo.

## *dependencia* Elemento

El `<dependency>` etiqueta le permite especificar otros plugins de los que depende el plugin actual. Mientras que las versiones futuras accederán a ellos desde los repositorios de plugin, en el corto plazo plugins se hace directamente referencia como URL por `<dependency>` etiquetas. Ellos están formateados como sigue:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: proporciona el ID del plugin. Debe ser único en el mundo y expresa en reversa-dominio estilo. Mientras que ninguna de estas restricciones se aplica actualmente, pueden ser en el futuro.

*   `url`: Una dirección URL para el plugin. Esto debe hacer referencia a un repositorio git, que plugman los intentos de clonar.

*   `commit`: Es cualquier referencia git entendida por `git checkout` : nombre de una rama o etiqueta (por ejemplo, `master` , `0.3.1` ), o un commit hash (por ej.,`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Especifica que la dependencia específica plugin existe como un subdirectorio del repositorio git. Esto es útil porque permite el repositorio que contiene varios plugins relacionados, cada uno especifica individualmente.

En el futuro, se introducirán las limitaciones de la versión y existirá un repositorio plugin para buscar por nombre en lugar de URLs explícitas de apoyo.

### Dependencia relativa caminos

Si establece la `url` de un `<dependency>` la etiqueta para `"."` y proporcionar una `subdir` , se instala el plugin dependiente del mismo local o remoto CVS como el plugin de padres que especifica la `<dependency>` etiqueta.

Tenga en cuenta que el `subdir` siempre especifica una ruta relativa a la *raíz* del repositorio git, no el plugin de padres. Esto es cierto incluso si ha instalado el plugin con una ruta local directamente a él. Plugman encuentra la raíz del repositorio git y luego encuentra el otro plugin de allí.

## *plataforma* Elemento

El `<platform>` etiqueta identifica las plataformas que han asociado código nativo o requerir modificaciones en sus archivos de configuración. Herramientas utilizando esta especificación pueden identificar las plataformas soportadas e instalar el código en los proyectos de Córdoba.

Plugins sin `<platform>` etiquetas se asumen para ser sólo de JavaScript y por lo tanto, instalable en cualquier y todas las plataformas.

Una etiqueta de plataforma de muestra:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

La necesaria `name` atributo identifica una plataforma como apoyo, asociando los niños del elemento con esa plataforma.

Nombres de la plataforma deben estar en minúsculas. Nombres de plataforma, como arbitrariamente elegidos, se enumeran:

*   Amazon-fireos
*   Android
*   blackberry10
*   Ios
*   WP7
*   WP8

## *archivo de código fuente* Elemento

El `<source-file>` elemento identifica código ejecutable que debe instalarse en un proyecto. Ejemplos:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

Soporta los siguientes atributos:

*   `src`(requerido): Ubicación del archivo relativo a `plugin.xml` . Si el `src` no puede encontrar el archivo, plugman se detiene y revierte la instalación, emite una notificación sobre el problema y sale con un código distinto de cero.

*   `target-dir`: Un directorio en el cual deben copiar los archivos, relativo a la raíz del proyecto Cordova. En la práctica, esto es muy importante para las plataformas basadas en Java, donde un archivo en el `com.alunny.foo` paquete debe estar ubicado dentro de la `com/alunny/foo` Directorio. Para plataformas donde el directorio de origen no es importante, este atributo debe ser omitido.
    
    Como con los activos, si el `target` de un `source-file` que sobrescribir un archivo existente, plugman se detiene y revierte la instalación, emite una notificación sobre el problema y sale con un código distinto de cero.

*   `framework`(sólo iOS): Si a `true` , también agrega el archivo especificado como un marco para el proyecto.

*   `compiler-flags`(sólo iOS): Si establece, asigna las banderas del compilador especificado para el archivo de origen en particular.

## *archivo de configuración* Elemento

Identifica un archivo de configuración basado en XML para ser modificado, donde en ese documento la modificación debe ocurrir, y qué debería ser modificado.

Dos tipos de archivos que han sido probados para la modificación de este elemento son `xml` y `plist` archivos.

El `config-file` elemento sólo permite añadir nuevos niños a un árbol de documentos XML. Los niños son literales XML que se insertará en el documento de destino.

Ejemplo de XML:

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

Ejemplo de `plist` :

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

Soporta los siguientes atributos:

*   `target`:
    
    El archivo a modificar y la ruta de acceso relativa a la raíz del proyecto Cordova.
    
    El objetivo puede incluir comodines ( `*` ) elementos. En este caso, plugman recurrentemente busca a través de la estructura de directorios del proyecto y utiliza al primer partido.
    
    En iOS, la ubicación de los archivos de configuración relativa a la raíz del directorio de proyecto se desconoce, así que especifica un objetivo de `config.xml` , resuelve`cordova-ios-project/MyAppName/config.xml`.
    
    Si el archivo especificado no existe, la herramienta omite el cambio en la configuración y continúa la instalación.

*   `parent`: Un selector XPath hacen referencia a los padres de los elementos que se agregará al archivo config. Si utilizas selectores absolutos, puede utilizar un carácter comodín ( `*` ) para especificar el elemento raíz, por ejemplo,`/*/plugins`.
    
    Para `plist` archivos, el `parent` determina bajo qué clave primaria debe insertarse el XML especificado.
    
    Si el selector no resuelve a un niño del documento especificado, la herramienta se detiene y revierte el proceso de instalación, emite una advertencia y sale con un código distinto de cero.

## *plugins-plist* Elemento

Es *anticuado* ya que sólo se aplica a cordova-ios 2.2.0 y por debajo. Uso el `<config-file>` tag para las nuevas versiones de Córdoba.

Ejemplo:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Especifica una clave y un valor para añadir a la correcta `AppInfo.plist` archivo en un proyecto de Cordova iOS. Por ejemplo:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## Elementos de *archivo de recursos* y *archivo de encabezado*

Como archivos de código fuente, pero específicamente para plataformas como iOS que distinguen entre archivos de código fuente, encabezados y recursos. iOS ejemplos:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Ejemplo de Android:

    < archivo de recursos src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" / >
    

## *lib-archivo* Elemento

Como fuente de recursos y archivos de encabezado, pero específicamente para plataformas como BlackBerry 10 que usan las bibliotecas generado por el usuario. Ejemplos:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Atributos soportados:

*   `src`(obligatorio): la ubicación del archivo relativo a `plugin.xml` . Si `src` no se encuentra, plugman se detiene y revierte la instalación, problemas de una advertencia sobre el problema y sale con un código distinto de cero.

*   `arch`: La arquitectura para la cual el `.so` archivo se ha construido, ya sea `device` o`simulator`.

## *marco* Elemento

Identifica un marco (generalmente parte de la plataforma/OS) de la cual depende el plugin.

Ejemplos:

    < marco src="libsqlite3.dylib" / >< marco src="social.framework" débil = "true" / >< marco src="relative/path/to/my.framework" personalizado = "true" / >
    

El `src` atributo identifica el marco, que plugman intenta agregar al proyecto de Cordova, de la manera correcta para una determinada plataforma.

Opcional `weak` atributo es un valor booleano que indica si el marco debe ser vinculado débilmente. El valor predeterminado es`false`.

Opcional `custom` atributo es un valor booleano que indica si el marco es que se incluye como parte de los archivos del plugin (por lo tanto no es un marco de sistema). El valor predeterminado es`false`.

## *info* Elemento

Información adicional proporcionada a los usuarios. Esto es útil cuando usted requiere pasos adicionales que no se pueden automatizar fácilmente o están fuera de alcance de plugman. Ejemplos:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to your `local.properties`
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## Variables

En ciertos casos, puede necesitar un plugin realizar cambios de configuración depende de la aplicación de destino. Por ejemplo, para registrarse en C2DM en Android, una aplicación cuyo identificador de paquete es `com.alunny.message` requeriría un permiso tales como:

    <uses-permission
    android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

En estos casos donde se inserta el contenido de la `plugin.xml` archivo no es conocido antes de tiempo, variables pueden ser indicadas por un signo de dólar seguido por una serie de letras mayúsculas, dígitos o subrayados. Para el ejemplo anterior, el `plugin.xml` archivo incluiría esta etiqueta:

    <uses-permission
    android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman reemplaza a referencias a variables con el valor especificado, o la cadena vacía si no se encuentra. El valor de la variable referencia puede ser detectado (en este caso, de la `AndroidManifest.xml` archivo) o especificado por el usuario de la herramienta; el proceso exacto depende de la herramienta especial.

plugman puede solicitar a los usuarios especificar variables requiere de un plugin. Por ejemplo, las llaves de la API para C2M y Google Maps pueden especificarse como un argumento de línea de comandos:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Para hacer obligatorio, la variable de la `<platform>` etiqueta debe contener un `<preference>` etiqueta. Por ejemplo:

    <preference name="API_KEY" />
    

plugman comprueba que estas preferencias requeridas son pasadas en. Si no, debe advertir al usuario cómo pasar la variable y la salida con un código distinto de cero.

Ciertos nombres de variable deben ser reservados, que figuran a continuación.

## $PACKAGE_NAME

El dominio reverso estilo identificador único para el paquete, correspondiente a la `CFBundleIdentifier` en iOS o el `package` atributo del nivel superior `manifest` elemento en un `AndroidManifest.xml` archivo.