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

title: Especificación de plugin
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
    

Aquí está una lista de la por defecto los motores que la `<engine>` soporta la etiqueta:

*   `cordova`
*   `cordova-plugman`
*   `cordova-amazon-fireos`
*   `cordova-android`
*   `cordova-ios`
*   `cordova-blackberry10`
*   `cordova-wp8`
*   `cordova-windows8`
*   `android-sdk` // returns the highest Android api level installed
*   `apple-xcode` // returns the xcode version 
*   `apple-ios` // returns the highest iOS version installed
*   `apple-osx` // returns the OSX version
*   `blackberry-ndk` // returns the native blackberry SDK version

Especificar Marcos personalizados basados en Apache Cordova deben aparecer bajo la etiqueta de motor así:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Un marco personalizado basado en Apache Cordova exige que un elemento motor incluye los siguientes atributos: `name` , `version` , `scriptSrc` , y`platform`.

*   `name`(requerido): un nombre legible para su marco personalizado.

*   `version`(obligatorio): la versión de que el marco debe tener para instalar.

*   `scriptSrc`(requerido): el archivo de comandos que dice plugman qué versión del marco personalizado. Idealmente, este archivo debe estar dentro del directorio de nivel superior de su directorio.

*   `platform`(requerido): las plataformas que soporta su marco. Usted puede utilizar el comodín `*` decir compatibles para todas las plataformas, especificar múltiples con un caracter como `android|ios|blackberry10` o simplemente una sola plataforma como`android`.

plugman se anula con un código distinto de cero para cualquier plugin cuyo objetivo proyecto no cumple con las limitaciones del motor.

Si no `<engine>` etiquetas se especifican, plugman intenta instalar en el directorio del proyecto especificado cordova ciegamente.

## *nombre* Elemento

Un nombre legible para el plugin, cuyo contenido de texto contiene el nombre del plugin. Por ejemplo:

    <name>Foo</name>
    

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

*   `src`(requerido): donde se encuentra el archivo o directorio en el paquete del plugin, relativa a la `plugin.xml` documento. Si un archivo existe en la especificada `src` ubicación, plugman se detiene y revierte el proceso de instalación, emite una notificación sobre el conflicto y sale con un código distinto de cero.

*   `target` (required):
    
    Donde el fichero o el directorio debe estar ubicado en la aplicación de Cordova, relativa a la `www` directorio. Activos pueden ser dirigidas a subdirectorios, por ejemplo:
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    crea la `js/experimental` directorio dentro de la `www` directorio, a menos que ya presente, entonces copias el `new-foo.js` archivo y cambia el nombre de lo `foo.js` . Si ya existe un archivo en la ubicación de destino, plugman se detiene y revierte el proceso de instalación, emite una notificación sobre el conflicto y sale con un código distinto de cero.

## *JS-módulo* Elemento

La mayoría de plugins incluyen uno o más archivos JavaScript. Cada `<js-module>` tag corresponde a un archivo JavaScript y evita que los usuarios del plugin tener que añadir un `<script>` etiqueta para cada archivo. Mientras que `<asset>` etiquetas simplemente copien un archivo desde el subdirectorio plugin en `www` , `<js-module>` etiquetas son mucho más sofisticados. Se parecen a esto:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Al instalar un plugin con el ejemplo anterior, `socket.js` se copia a `www/plugins/my.plugin.id/socket.js` y se agrega como una entrada a `www/cordova_plugins.js` . En el tiempo de carga, el código `cordova.js` XHR se utiliza para leer cada archivo e inyectar un `<script>` tag en HTML. Agrega una asignación para aplastar o combinar según sea apropiado, como se describe a continuación.

*No* envuelva el archivo con `cordova.define` , como se añade automáticamente. El módulo está envuelto en un cierre, con `module` , `exports` , y `require` en su alcance, como es normal para los módulos de AMD.

Detalles para el `<js-module>` etiqueta:

*   El `src` hace referencia a un archivo en el directorio relativo a la `plugin.xml` archivo.

*   El `name` proporciona la última parte del nombre del módulo. Generalmente puede ser lo que quieras, y sólo importa si desea utilizar `cordova.require` para importar otras partes de tus plugins en tu código JavaScript. El nombre del módulo para un `<js-module>` es su plugin `id` seguido por el valor de `name` . Para el ejemplo anterior, con un `id` de `chrome.socket` , el nombre del módulo es`chrome.socket.Socket`.

*   Se permiten tres etiquetas en `<js-module>` :
    
    *   `<clobbers target="some.value"/>`indica que el `module.exports` se inserta en la `window` de objetos como `window.some.value` . Usted puede tener tantos `<clobbers>` como usted tiene gusto. Cualquier objeto no está disponible en `window` es creado.
    
    *   `<merges target="some.value"/>`indica que el módulo debe fusionarse con cualquier valor existente en `window.some.value` . Si ya existe alguna clave, versión del módulo reemplaza el original. Usted puede tener tantos `<merges>` como usted tiene gusto. Cualquier objeto no está disponible en `window` es creado.
    
    *   `<runs/>`significa que el código debe especificarse con `cordova.require` , pero no instalado en el `window` objeto. Esto es útil al inicializar el módulo, adjuntar controladores de eventos o de lo contrario. Sólo puede tener hasta una `<runs/>` etiqueta. Tenga en cuenta que incluye un `<runs/>` con `<clobbers/>` o `<merges/>` es redundante, puesto que también `cordova.require` su módulo.
    
    *   Un vacío `<js-module>` todavía las cargas y se puede acceder en otros módulos a través de`cordova.require`.

Si `src` no se resuelve en un archivo existente, plugman se detiene y revierte la instalación, emite una notificación del problema y sale con un código distinto de cero.

Anidación `<js-module>` elementos dentro de `<platform>` declara enlaces específicos a una plataforma JavaScript módulo.

## *dependencia* Elemento

El `<dependency>` etiqueta le permite especificar otros plugins de los que depende el plugin actual. Mientras que las versiones futuras accederán a ellos desde los repositorios de plugin, en el corto plazo plugins se hace directamente referencia como URL por `<dependency>` etiquetas. Ellos están formateados como sigue:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: proporciona el ID del plugin. Debe ser único en el mundo y expresa en estilo de dominio reverso. Mientras que en la actualidad ninguna de estas restricciones se aplica, puede ser en el futuro.

*   `url`: Una dirección URL para el plugin. Esto debe hacer referencia un repositorio git, que plugman los intentos de clonar.

*   `commit`: Se trata de cualquier referencia de git entendido por `git checkout` : nombre de una rama o etiqueta (por ejemplo, `master` , `0.3.1` ), o una confirmación hash (por ejemplo,`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Especifica que la dependencia de destino plugin existe como un subdirectorio del repositorio git. Esto es útil porque permite que el repositorio que contiene varios plugins relacionados, cada uno especificado individualmente.

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

*   Amazonas-fireos
*   Android
*   blackberry10
*   iOS
*   wp8
*   windows8

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

*   `src`(requerido): Ubicación del archivo relativa a `plugin.xml` . Si el `src` no se encuentra archivo, plugman se detiene y revierte la instalación, emite una notificación sobre el problema y sale con un código distinto de cero.

*   `target-dir`: Un directorio en el que deben copiarse los archivos, relativo a la raíz del proyecto Córdoba. En la práctica, esto es muy importante para las plataformas basadas en Java, donde un archivo en el `com.alunny.foo` paquete estará situado en la `com/alunny/foo` directorio. Para plataformas donde el directorio de origen no es importante, debe omitirse este atributo.
    
    Como con los activos, si la `target` de un `source-file` sobrescribir un archivo existente, plugman se detiene y revierte la instalación, emite una notificación sobre el problema y sale con un código distinto de cero.

*   `framework`(sólo en iOS): Si a `true` , también agrega el archivo especificado como un marco para el proyecto.

*   `compiler-flags`(sólo en iOS): si sistema, asigna los parámetros de compilador especificado para el archivo de origen en particular.

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
    
    El archivo a modificar y la ruta de acceso relativa a la raíz del proyecto Córdoba.
    
    El destino puede incluir comodines ( `*` ) elementos. En este caso, plugman recursivamente busca a través de la estructura de directorios del proyecto y utiliza al primer partido.
    
    En iOS, la ubicación de los archivos de configuración en relación con la raíz del directorio del proyecto no se conoce, así que especifica un objetivo de `config.xml` decide`cordova-ios-project/MyAppName/config.xml`.
    
    Si el archivo especificado no existe, la herramienta pasa por alto el cambio en la configuración y continúa la instalación.

*   `parent`: Un selector XPath hacen referencia a los padres de los elementos a añadir al archivo config. Si utilizas selectores absolutos, puede utilizar un comodín ( `*` ) para especificar el elemento raíz, por ejemplo,`/*/plugins`.
    
    Para `plist` archivos, el `parent` determina bajo qué clave primaria debe insertarse el XML especificado.
    
    Si el selector no resuelve a un niño de documento especificado, la herramienta se detiene y revierte el proceso de instalación, emite una advertencia y sale con un código distinto de cero.

*   `after`: Una lista priorizada de hermanos aceptados después de lo cual al añadir el fragmento de XML. Útil para especificar los cambios en los archivos que requieren estricta ordenación de elementos XML como <http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement>

La plataforma de Windows soporta dos atributos adicionales (ambos opcional) cuando afectan la meta-nombre `package.appxmanifest`:

El atributo de `device-target` indica que el sólo debe incluir al construir para el tipo de dispositivo de destino especificado. Los valores admitidos son `win`, `phone`o `all`.

El atributo de `versions` indica que sólo se modificara manifiestos de aplicación para las versiones específicas de Windows para las versiones que coinciden con la cadena de versión especificada. Valor puede ser cualquier cadena de nodo válida versión semántica gama.

Ejemplos del uso de estos atributos específicos de Windows:

    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="<8.1.0">
        <Capability Name="picturesLibrary" />
        <DeviceCapability Name="webcam" />
    </config-file>
    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
        <DeviceCapability Name="webcam" />
    </config-file>
    

El ejemplo anterior establecerá pre-8.1 plataformas (Windows 8, específicamente) que requieren la capacidad de dispositivo `webcam` y la capacidad general de `picturesLibrary` y la capacidad de dispositivo `webcam` se aplican sólo a Windows 8.1 proyectos que construcción para Windows Phone. Windows desktop 8.1 sistemas son sin modificar.

## *plugins-plist* Elemento

Es *anticuado* ya que sólo se aplica a cordova-ios 2.2.0 y por debajo. Utilice la etiqueta `< archivo config - >` para las nuevas versiones de Córdoba.

Ejemplo:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Especifica una clave y el valor para anexar el archivo correcto `AppInfo.plist` en un proyecto de Cordova iOS. Por ejemplo:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## Elementos de *archivo de recursos* y *archivo de encabezado*

Como archivos de código fuente, pero específicamente para plataformas como iOS que distinguen entre archivos de código fuente, encabezados y recursos. iOS ejemplos:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Ejemplo de Android:

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
    

## *lib-archivo* Elemento

Como fuente de recursos y archivos de encabezado, pero específicamente para plataformas como BlackBerry 10 que usan las bibliotecas generado por el usuario. Ejemplos:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Atributos soportados:

*   `src`(obligatorio): la ubicación del archivo relativa a `plugin.xml` . Si `src` no se encuentra, plugman se detiene y revierte la instalación, problemas de una advertencia sobre el problema y sale con un código distinto de cero.

*   `arch`: La arquitectura para que la `.so` archivo se ha construido, ya sea `device` o`simulator`.

Para la plataforma Windows, el elemento `< lib-file >` permite la inclusión de un `< SDKReference >` en los archivos de proyecto de Windows generados.

Atributos soportados:

*   `src`(requerido): el nombre del SDK para incluir (que se utilizará como valor de la `Include` atributo de la generado `<SDKReference>` elemento).

*   `arch`: Indica que el `<SDKReference>` sólo debe incluir al edificio de la arquitectura especificada. Los valores admitidos son `x86` , `x64` o`ARM`.

*   `device-target`: Indica que el `<SDKReference>` sólo debe incluir al edificio para el tipo de dispositivo de destino especificado. Los valores admitidos son `win` (o `windows` ), `phone` o`all`.

*   `versions`: Indica que el `<SDKReference>` sólo debe incluir al construir las versiones que coinciden con la cadena de versión especificado. Valor puede ser cualquier cadena de rango de nodo válido versión semántica.

Ejemplos:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *marco* Elemento

Identifica un marco (generalmente parte de la plataforma/OS) de la cual depende el plugin.

El atributo opcional `custom` es un valor booleano que indica si el marco es que se incluye como parte de los archivos de plugin (por lo tanto no es un marco de sistema).

### *marco* para iOS

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    

El atributo opcional `weak` es un valor booleano que indica si el marco debe vincularse débil. El valor predeterminado es `false`.

### *marco* para Android

En Android (a partir de cordova-android@4.0.0), *marco* etiquetas se utilizan para incluir las dependencias de Maven, o incluir proyectos de biblioteca incorporada.

Ejemplos:

    <!-- Depend on latest version of GCM from play services -->
    <framework src="com.google.android.gms:play-services-gcm:+" />
    <!-- Depend on v21 of appcompat-v7 support library -->
    <framework src="com.android.support:appcompat-v7:21+" />
    <!-- Depend on library project included in plugin -->
    <framework src="relative/path/FeedbackLib" custom="true" />
    

*marco* puede utilizarse también para tener archivos personalizados .gradle sub-incluidos en el principal archivo del proyecto .gradle:

    <framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
    

Para pre-android@4.0.0 (ANT-proyectos):

El atributo opcional `type` es una cadena que indica el tipo de marco para agregar. Actualmente, sólo `projectReference` es compatible y sólo para Windows. Usando `custom='true'` y `tipo = 'projectReference'` se agregue una referencia al proyecto que se agregarán a la compilación + enlace pasos del proyecto cordova. Esencialmente es la única forma actualmente que un marco 'custom' puede hacer objetivo a múltiples arquitecturas como se construyen explícitamente como una dependencia por la aplicación de Córdoba hace referencia a.

El opcional `parent` establece la ruta de acceso relativa al directorio que contiene el sub proyecto para agregar la referencia. El valor predeterminado es `.`, es decir, el proyecto de aplicación. Permite añadir referencias entre proyectos de la sub como en este ejemplo:

    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

### *marco* para Windows

La plataforma de Windows admite tres atributos adicionales (opcionales) para refinar cuando debe incluirse el marco:

    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

El `arch` atributo indica que el marco sólo se incluyera al edificio para la arquitectura especificada. Los valores admitidos son `x86` , `x64` o`ARM`.

El atributo de `device-target` indica que el sólo debe incluir al construir para el tipo de dispositivo de destino especificado. Los valores admitidos son `win` (o `windows` ), `phone` o`all`.

El atributo de `versions` indica que el marco sólo debe ser incluido al construir versiones que coinciden con la cadena de versión especificada. Valor puede ser cualquier cadena de rango de nodo válido versión semántica.

Ejemplos de uso de estos atributos específicos de Windows:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *info* Elemento

Información adicional a los usuarios. Esto es útil cuando se requieren pasos adicionales que no se pueden automatizar fácilmente o están más allá del alcance de plugman. Ejemplos:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## El elemento *hook* 

Representa la secuencia de comandos personalizada que será llamado por Córdoba cuando se produce cierta acción (por ejemplo, después se agrega el plugin o plataforma preparar lógica se invoca). Esto es útil cuando se necesita extender la funcionalidad de Cordova por defecto. Para más información vea la guía de los ganchos.

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    

## Variables

En ciertos casos, puede necesitar un plugin hacer cambios de configuración depende de la aplicación de destino. Por ejemplo, para registrarse en C2DM en Android, una aplicación cuya id de paquete es `com.alunny.message` requeriría un permiso como:

    <uses-permission android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

En estos casos donde no se conoce el contenido insertado en el archivo `plugin.xml` antes de tiempo, variables pueden indicarse por un signo de dólar seguido por una serie de letras, dígitos o subrayados. Para el ejemplo anterior, el archivo `plugin.xml` incluir esta etiqueta:

    <uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman substituye referencias a variables con el valor especificado o la cadena vacía si no se encuentra. El valor de la referencia de variable puede ser detectado (en este caso, desde el archivo `AndroidManifest.xml` ) o especificado por el usuario de la herramienta; el proceso exacto depende de la herramienta especial.

plugman puede solicitar a los usuarios especificar variables requiere de un plugin. Por ejemplo, las llaves de la API para C2M y Google Maps pueden especificarse como un argumento de línea de comandos:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Para realizar la variable obligatoria, la etiqueta `< platform >` debe contener una etiqueta `< preference >` . Por ejemplo:

    <preference name="API_KEY" />
    

plugman comprueba que estas preferencias requiere pasan en. Si no, debe advertir al usuario de cómo pasar la variable y la salida con un código distinto de cero.

Ciertos nombres de variable deben ser reservados, que se enumeran a continuación.

## $PACKAGE_NAME

El identificador único de estilo de dominio reverso para el paquete, correspondiente a la `CFBundleIdentifier` de iOS o el atributo de `paquete` del elemento de nivel superior `se manifiestan` en el archivo `AndroidManifest.xml` .