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

# Actualizar iOS

Esta guía le muestra cómo modificar los proyectos iOS para actualizar desde versiones anteriores de Córdoba. La mayoría de estas instrucciones se aplica a proyectos creados con un mayor conjunto de herramientas de línea de comandos que preceden a la `cordova` utilidad de CLI. Vea la interfaz de línea de comandos para información de cómo actualizar la versión de la CLI.

**Nota**: se requiere Xcode 5. En la actualidad, para presentar a la App Store de Apple, utilice la última versión de iOS SDK, el cual es iOS 7 enviada y esto se incluye sólo con Xcode 5.

## Proyectos de modernización 3.3.0 a 3.4.0

Para proyectos no-CLI, ejecute:

        bin/update path/to/project
    

Para los proyectos de CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update ios`

## Proyectos de actualización 3.2.0 a 3.3.0

Para proyectos no-CLI, ejecute:

        bin/update path/to/project
    

Para los proyectos de CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update ios`

## Proyectos de modernización 3.1.0 a 3.2.0

Para proyectos no-CLI, ejecute:

        bin/update path/to/project
    

Para los proyectos de CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update ios`

## Proyectos de modernización 3.0.0 a 3.1.0

Para proyectos no-CLI, ejecute:

        bin/update path/to/project
    

Para los proyectos de CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update ios`

iOS 7 temas:

1.  Eliminar `width=device-width, height=device-height` de la `index.html` del archivo `viewport` `meta` etiqueta. (Véase [el fallo correspondiente][1].)

2.  Actualiza tus plugins de núcleo los medios de comunicación, medios de comunicación-captura y splashscreen por iOS 7 apoyo.

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 temas:

1.  Actualiza la configuración de proyecto si Xcode 5 incita a hacerlo (en el navegador de temas).

2.  Actualizar su **compilador para C / C + + / Objective-C** establecer, bajo la ficha **Configuración de construir** , sección **Construir opciones** . Elige **por defecto del compilador (Apple LLVM 5.0)**.

## Actualícese a la CLI (3.0.0) de 2.9.0 magnetohidrodinámica

1.  Crear un nuevo proyecto de Apache Cordova 3.0.0 usando el cordova CLI, tal como se describe en la interfaz de línea de comandos.

2.  Agregue sus plataformas al proyecto cordova, por ejemplo:`cordova
platform add ios`.

3.  Copiar el contenido del proyecto `www` Directorio del `www` Directorio en la raíz del proyecto cordova que acaba de crear.

4.  Copiar o sobrescribir ningún activo nativo de su proyecto original ( `Resources` , etc.), lo que seguro para agregar los archivos nuevos a la `.xcodeproj` proyecto. El proyecto de iOS se construye dentro de la `platforms\ios` Directorio.

5.  Copia tus `config.xml` en el `www` Directorio y eliminar cualquier plugin definiciones. Modificar la configuración aquí en lugar del directorio de la plataforma.

6.  Utilice la herramienta CLI cordova instalar algún plugin que necesita. Tenga en cuenta que la CLI maneja todo núcleo APIs como plugins, así pueden necesitar ser agregado. Sólo 3.0.0 plugins son compatibles con la CLI.

7.  Construir y probar.

## Proyectos de modernización 2.9.0 magnetohidrodinámica a 3.0.0

1.  Descargue y extraiga la fuente Cordova 3.0.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-3.0.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia del `www/cordova.js` (tenga en cuenta que ya no tiene un sufijo de versión, la versión en el archivo en el encabezado) archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova.js` archivo.

7.  Borrar tu `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

**Nota**: a partir de Cordova 3.0.0, plugins no están preinstaladas, y tienes que usar el `plugman` utilidad de línea de comandos para instalarlos tú mismo. Consulte Utilización de Plugman para gestionar Plugins.

## Proyectos de modernización 2.8.0 a 2.9.0 magnetohidrodinámica

1.  Descargue y extraiga la fuente Cordova 2.9.0 magnetohidrodinámica a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.9.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia del `www/cordova.js` (tenga en cuenta que ya no tiene un sufijo de versión, la versión en el archivo en el encabezado) archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova.js` archivo.

7.  Borrar tu `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

## Proyectos de modernización 2.7.0 a 2.8.0

1.  Descargue y extraiga la fuente Cordova 2.8.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.8.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia del `www/cordova.js` (tenga en cuenta que ya no tiene un sufijo de versión, la versión en el archivo en el encabezado) archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-2.7.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova.js` archivo.

7.  Actualizar `<plugin>` clave en la `config.xml` de archivos a `<feature>` etiquetas. Tenga en cuenta que existe `<plugin>` etiquetas todavía funcionan, pero son desaprobadas. Usted puede copiar esta información en el `config.xml` archivo para un nuevo proyecto. Por ejemplo:
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  Eliminar la `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

9.  Agregar estos dos marcos para su proyecto:
    
        ImageIO openAL
        

10. Actualizar el destino de su proyecto **Construir ajustes**. Bajo **Vinculación → otros Linker Flags**, editar **"- Obj - C"** para ser **"-ObjC"**.

11. Actualizar el destino de su proyecto **Construir ajustes**. Bajo **Vinculación → otros Linker Flags**, cambio **"-all_load"** para ser `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` . Sólo necesitas hacer esto si tienes el problema definido en [este tema.][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## Proyectos de modernización 2.6.0 a 2.7.0

1.  Descargue y extraiga la fuente Cordova 2.7.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.7.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova-2.7.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-2.6.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.7.0.js` archivo.

7.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `AppDelegate.m` archivo según el uno en el nuevo proyecto (véase [este diff][3]).

8.  En su `config.xml` de archivo, [elimine esta línea][4].

9.  Borrar tu `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## Proyectos de modernización 2.5.0 a 2.6.0

1.  Descargue y extraiga la fuente Cordova 2.6.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.6.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia del proyecto `www/cordova-2.6.0.js` de archivos a tu `www` Directorio y eliminar su `www/cordova-2.5.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (junto con otros archivos que hacen referencia a la secuencia de comandos) para referirse a la nueva `cordova-2.6.0.js` archivo.

7.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `AppDelegate.m` archivo según el uno en el nuevo proyecto (véase [este diff][5]).

8.  En su `config.xml` de archivo, [añadir esta nueva línea][6].

9.  En su `config.xml` de archivo, [añadir esta nueva línea][7].

10. En su `config.xml` de archivos, [UIWebViewBounce se ha cambiado a DisallowOverscroll, y los valores predeterminados son diferentes][8].

11. En su `config.xml` archivo, el `EnableLocation` preferencia ha quedado obsoleto.

12. Borrar tu `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## Proyectos de modernización 2.4.0 a 2.5.0

1.  Descargue y extraiga la fuente Cordova 2.5.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.5.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova-2.5.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-2.4.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.5.0.js` archivo.

7.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `AppDelegate.m` archivo según el uno en el nuevo proyecto (véase [este diff][9]).

8.  En su `config.xml` de archivo, [añadir estas nuevas líneas][10].

9.  En su `config.xml` de archivo, [editar el elemento raíz, cambiarlo de cordova al widget][11].

10. En su `config.xml` de archivo, [quitar la preferencia OpenAllWhitelistURLsInWebView][12].

11. Borrar tu `cordova` Directorio y copiar el `cordova` directorio desde el nuevo proyecto en el directorio raíz de su proyecto. En 2.5.0, esto ha actualizado secuencias de comandos.

12. Borrar tu `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## Proyectos de modernización 2.3.0 a 2.4.0

1.  Descargue y extraiga la fuente Cordova 2.4.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.4.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova-2.4.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-2.3.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.4.0.js` archivo.

7.  Actualizar (o reemplazar, si nunca has cambiado los archivos) su `MainViewController.m` archivo según el uno en el nuevo proyecto (véase [este diff][13]).

8.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `AppDelegate.m` archivo según el uno en el nuevo proyecto (véase [este diff][14]).

9.  En su `config.xml` de archivo, [añadir esta nueva línea][15].

10. Borrar tu `cordova` Directorio y copiar el `cordova` directorio desde el nuevo proyecto en el directorio raíz de su proyecto. En 2.4.0, esto ha solucionado secuencias de comandos.

11. Borrar tu `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

12. Agregar a AssetsLibrary.framework como un recurso a su proyecto. (Consulte [la documentación de Apple][16] para obtener instrucciones sobre cómo hacerlo.).

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## Proyectos de modernización 2.2.0 a 2.3.0

1.  Descargue y extraiga la fuente Cordova 2.3.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.3.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova-2.3.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-2.2.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.3.0.js` archivo.

7.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `MainViewController.m` según el uno en el nuevo proyecto.

8.  Borrar tu `cordova` Directorio y copiar el `cordova` directorio desde el nuevo proyecto en el directorio raíz de su proyecto. En 2.3.0, esto tiene nuevos scripts.

9.  Borrar tu `CordovaLib` Directorio y copiar el `CordovaLib` directorio desde el nuevo proyecto en el directorio raíz de su proyecto.

10. Convertir tu `Cordova.plist` de archivos a `config.xml` , ejecutando el script `bin/cordova\_plist\_to\_config\_xml` en el archivo de proyecto.

11. Añadir el plugin InAppBrowser para su `config.xml` , añadiendo esta etiqueta bajo `<cordova><plugins>` :
    
        <plugin name="InAppBrowser" value="CDVInAppBrowser" />
        

12. Nota que los plugins Objective-C son ya *no* clasificarlas. A la lista blanca sus conexiones con la lista blanca de la aplicación, es necesario establecer la `User-Agent` cabecera de la conexión con el mismo agente de usuario como la principal Cordova WebView. Esto puedes acceder a la `userAgent` propiedad del modelo-vista-controlador principal. El modelo-vista-controlador principal ( `CDVViewController` ) también tiene un `URLisAllowed` método para comprobar si una URL pasa la lista blanca.

13. Cambios de dispositivo API:
    
    *   Para iOS, device.platform se utiliza para `iPhone` , `iPad` o `iPod Touch` ; ahora devuelve (correctamente)`iOS`.
    *   Para iOS, device.name (ahora en desuso para todas las plataformas) se utiliza para devolver el nombre del dispositivo del usuario (por ejemplo ' iPhone 5′ de Shazron); Ahora devuelve utilizado para devolver lo que device.platform: `iPhone` , `iPad` o`iPod Touch`.
    *   Para todas las plataformas, hay una nueva propiedad llamada device.model; Esto devuelve el modelo de dispositivo específico, por ejemplo `iPad2,5` (para otras plataformas, devuelve lo que device.name utilizada para devolver).

## Proyectos de modernización 2.1.0 a 2.2.0

1.  Descargue y extraiga la fuente Cordova 2.2.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.2.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova-2.2.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-2.1.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.2.0.js` archivo.

7.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `MainViewController.m` según el uno en el nuevo proyecto:
    
    *   Actualizado → viewWillAppear

8.  Copia del `cordova` del proyecto nuevo directorio en el directorio raíz de su proyecto. En 2.2.0, esto tiene un guión 'emular' actualizado.

9.  A continuación, actualizar su `CordovaLib` el proyecto de referencia. A partir de Cordova 2.1.0, no estamos utilizando la variable CORDOVALIB Xcode ya al hacer referencia a donde `CordovaLib` reside, la referencia es ahora una referencia absoluta.
    
    1.  Lanzamiento Terminal.app
    2.  Ir a la ubicación donde instaló Cordova (véase paso 1), en el `bin` subdirectorio
    3.  Ejecute el script siguiente donde el primer parámetro es la ruta de su proyecto `.xcodeproj` archivo:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**Nota**: en 2.2.0, el `bin/create` copia de la escritura de la `CordovaLib` proyecto secundario en su proyecto. Para tener el mismo tipo de configuración, sólo tienes que copiar en el derecho `CordovaLib` en el directorio del proyecto y actualizar el `CordovaLib` sub-Project ubicación (en relación con el proyecto) en el Inspector de archivo Xcode.

## Proyectos de modernización 2.0.0 a 2.1.0

Con Cordova 2.1.0, `CordovaLib` ha sido actualizado para utilizar el **Conteo automático de referencia (ARC)**. Usted no necesita actualizar a **ARC** a usar CordovaLib, pero si desea actualizar su proyecto para utilizar **ARC**, utilice el Asistente para migración de Xcode desde el menú: **Editar → Refactor → convertir en Objective-C arco...**, anular la selección de libCordova.a, luego ejecute el Asistente para completar.

1.  Descargue y extraiga la fuente Cordova 2.1.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Documents/Cordova-2.1.0`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova-2.1.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-2.0.0.js` archivo.

6.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.1.0.js` archivo.

7.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `AppDelegate.m` según el uno en el nuevo proyecto:
    
    *   Editado → aplicación: didFinishLaunchingWithOptions:
    *   Añadido → aplicación: supportedInterfaceOrientationsForWindow:

8.  Actualizar (o reemplazar, si nunca has cambiado el archivo) su `MainViewController.m` según el uno en el nuevo proyecto:
    
    *   Añadido → viewWillAppear

9.  Copia del `cordova` del proyecto nuevo directorio en el directorio raíz de su proyecto. En 2.1.0, esto tiene los scripts actualizados para apoyar caminos con espacios.

10. Retire el `VERSION` Referencia de su proyecto de archivo (*no* el uno en`CordovaLib`).

11. A continuación, actualizar su `CordovaLib` el proyecto de referencia. A partir de Cordova 2.1.0, no estamos utilizando la variable CORDOVALIB Xcode ya al hacer referencia a donde `CordovaLib` reside, la referencia es ahora una referencia absoluta.
    
    1.  Lanzamiento Terminal.app
    2.  Ir a la ubicación donde instaló Cordova (véase paso 1), en el `bin` subdirectorio
    3.  Ejecute el script siguiente donde el primer parámetro es la ruta de su proyecto `.xcodeproj` archivo:
        
        `update_cordova_subproject ruta/a/tu/proyecto/xcodeproj`

## Proyectos de modernización 1.9.0 a 2.0.0

1.  Instale Cordova 2.0.0.

2.  Crear un nuevo proyecto, como se describe en iOS herramientas de línea de comandos. Necesitas los activos de este nuevo proyecto.

3.  Copia el `www/cordova-2.0.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-1.9.0.js` archivo.

4.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.0.0.js` archivo.

5.  Copia del `cordova` del proyecto nuevo directorio en el directorio raíz del proyecto (si quieres las herramientas de línea de comandos de proyecto).

6.  Añadir una nueva entrada en `Plugins` en el `Cordova.plist` archivo, en el grupo de **Archivos auxiliares** . La clave es `Device` y el valor es`CDVDevice`.

7.  Quitar`Cordova.framework`.

8.  Quitar `verify.sh` del grupo de **Archivos auxiliares** .

9.  Seleccione el icono del proyecto en el navegador de proyectos, seleccione el proyecto **objetivo**, luego seleccione la ficha **Configuración de construir** .

10. Buscar **Preprocessor Macros**, luego retire todo **CORDOVA_FRAMEWORK = 1** valores.

11. Localice el `CordovaLib` directorio que se instaló en tu disco duro en de su carpeta de inicio `Documents` subdirectorio.

12. Localizar el `CordovaLib.xcodeproj` de los archivos en el `CordovaLib` Directorio, a continuación, arrastrar y soltar el archivo en su proyecto. Debe aparecer como un subproyecto.

13. Construya su proyecto, deberías conseguir algunos errores relativos a `#import` directivas.

14. Para el `#import` errores, cambiar de cualquier base de cotización de las importaciones en este estilo:
    
        #import "CDV.h"
        
    
    a este estilo basado en soportes:
    
        #import < Cordova/CDV.h >
        
    
    y eliminar cualquier `#ifdef` contenedores de cualquier Cordova las importaciones, ya no son necesarios (ahora se unifican las importaciones)

15. Construya su proyecto de nuevo, y no debe tener ninguna `#import` errores.

16. Seleccione el **icono de proyecto** en el navegador de proyectos, seleccione su proyecto **objetivo**, luego seleccione la ficha **Fases construir** .

17. Ampliar la fase **Objetivo dependencias** , luego el botón select el **+** .

18. Seleccione el `CordovaLib` blanco, a continuación, seleccione el botón **Agregar** .

19. Ampliar la primera fase **Binario de enlace con las bibliotecas** (ya debería contener un montón de Marcos), a continuación, seleccione el **+** botón.

20. Seleccione el `libCordova.a` biblioteca estática, luego seleccione el botón **Agregar** .

21. Eliminar la fase **Run Script** .

22. Seleccione el **icono de proyecto** en el navegador de proyectos, seleccione el proyecto **objetivo**, luego seleccione la ficha **Configuración de construir** .

23. Buscar **Otras banderas Linker**y agregue los valores **-force_load** y **- Obj-C**.

24. Ampliar la `CordovaLib` subproyectos.

25. Localice el `VERSION` archivo, arrastrarlo a su proyecto principal (queremos crear un enlace a él, no una copia).

26. Seleccione el botón **Crear grupo para cualquier añadidas carpetas** y seleccione el botón **terminar** .

27. Seleccione el `VERSION` archivo que sólo se haya arrastrado en un paso anterior.

28. Tipo de la combinación de teclas **Command-Option-1** para mostrar el **Inspector de archivo** (o menuitem **ve utilidades → → Mostrar archivo Inspector**).

29. Elegir **comparado con CORDOVALIB** en el **Archivo Inspector** para el menú desplegable para **Ubicación**.

30. Establecer la preferencia de Xcode **Xcode preferencias → ubicaciones → los datos derivados → avanzado...** a **Unique**, así que pueden encontrarse las cabeceras unificadas.

31. Seleccione el **icono de proyecto** en el navegador de proyectos, selecciona tu **destino**y seleccione la ficha **Configuración de construir** .

32. Búsqueda de **rutas de búsqueda encabezado**. Para ese ajuste, anexar estos tres valores, incluyendo las comillas:
    
        "$(TARGET_BUILD_DIR) / usr/local/lib/incluyen" "$(OBJROOT) / UninstalledProducts/include" "$(BUILT_PRODUCTS_DIR)"
        

33. Búsqueda de **otras banderas del vinculador**. Para ese ajuste, anexar este valor:
    
        -weak_framework CoreFoundation
        

34. Construya su proyecto, debe compilar y vincular con **ningún problema**.

35. Seleccione su proyecto en el **esquema de** menú desplegable y seleccione **iPhone 5.1 simulador**.

36. Seleccione el botón **Ejecutar** .

**Nota**: Si su proyecto no está funcionando como se esperaba en el simulador, por favor, tome nota de los errores en el registro de la consola en Xcode en busca de pistas.

## 1.8.x proyectos de mejora a 1.9.0

1.  Instale Cordova 1.9.0.

2.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

3.  Copia el `www/cordova-1.9.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-1.8.x.js` archivo.

4.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-1.9.0.js` archivo.

**Nota**: 1.9.0 es compatible con el nuevo `BackupWebStorage` booleana `Cordova.plist` ajuste. Está habilitada de forma predeterminada, así lo han decidido `false` para desactivarlo, especialmente en iOS 6. Ver [notas de la versión: Safari y sección UIKit][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 1.7.0 actualización proyectos para 1.8.x

1.  Instale Cordova 1.8.0.

2.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

3.  Copia el `www/cordova-1.8.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-1.7.x.js` archivo.

4.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-1.8.0.js` archivo.

Si piensas sobre el uso de la API de captura, necesitará los nuevo **iPad pantalla retina -** activos:

1.  Copia el `Resources/Capture.bundle` tema del nuevo proyecto en el directorio de tu proyecto, escribiendo sobre su existente `Resources/Capture.bundle` artículo.

2.  En su proyecto, seleccione el `Capture.bundle` del artículo en el navegador de tu proyecto en Xcode, escriba la clave de **borrar** , luego seleccione **Eliminar referencia** en el cuadro de diálogo resultante.

3.  Arrastre el nuevo `Capture.bundle` del paso 1 arriba en tu navegador de proyecto en Xcode, seleccione el botón **Crear grupo para cualquier añadidas carpetas** .

## 1.6. x proyectos de mejora a 1.7.0

1.  Instale Cordova 1.7.0.

2.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

3.  Copia el `www/cordova-1.7.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-1.6.0.js` archivo.

4.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-1.7.0.js` archivo.

## Proyectos de actualización 1.5.0 a 1.6. x

1.  Instale Cordova 1.6.1.

2.  Hacer un backup de `AppDelegate.m` , `AppDelegate.h` , `MainViewController.m` , `MainViewController.h` , y `Cordova.plist` en su proyecto.

3.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

4.  Copie estos archivos desde el nuevo proyecto en su directorio de proyecto 1.5.0-based en el disco, reemplazando los viejos archivos (copia de seguridad de sus archivos primero desde el paso 2 anterior):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  Añadir todos los nuevos `MainViewController` y `AppDelegate` los archivos a su proyecto Xcode.

6.  Copia el `www/cordova-1.6.1.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/cordova-1.5.0.js` archivo.

7.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-1.6.1.js` archivo.

8.  Añadir nuevo `Cordova.plist` archivo a su proyecto. Esto es necesario porque los nombres de servicio núcleo plugin deben cambiar para que coincida con la de Android y BlackBerry, para un unificado (archivo de Cordova JavaScript`cordova-js`).

9.  Integrar cualquier configuración, **Plugins** y **ExternalHosts** de las entradas que tenía en su **respaldo de Cordova.plist** en la nueva`Cordova.plist`.

10. Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `AppDelegate.h` y `AppDelegate.m` en el nuevo `AppDelegate` archivos. Cualquier `UIWebViewDelegate` o `CDVCommandDelegate` el código `AppDelegate.m` debe ir a `MainViewController.m` ahora (vea las secciones de salida comentó en ese archivo).

11. Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `MainViewController.h` y `MainViewController.m` en los archivos del MainViewController nuevo.

12. Haga clic en el icono del proyecto en el navegador de proyectos, seleccione el **proyecto**y seleccione la ficha **Configuración de construir** .

13. Entrar en **compilador para C / C + + / Objective-C** en el campo de búsqueda.

14. Seleccione el valor de **Apple LLVM Compiler 3.1** .

## Inicio Proyectos de mejora a 1.5.0

1.  Instale Cordova 1.5.0.

2.  Crear un proyecto nuevo y ejecutarlo una vez. Usted necesitará algunos de los activos de este nuevo proyecto.

3.  Copia el `www/cordova-1.5.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/phonegap-1.4.x.js` archivo.

4.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la Nueva Córdoba `cordova-1.5.0.js` archivo.

5.  Encontrar `PhoneGap.framework` en tu navegador de proyectos, selecciónelo.

6.  Escriba la clave de **borrar** y eliminar la `PhoneGap.framework` referencia en el navegador de proyectos.

7.  Tipo de la combinación de teclas **Comando + Opción-A** , que debe bajar una hoja para añadir archivos a tu proyecto (la hoja **Agregar archivos...** ). Asegúrese de que selecciona el botón de radio **creado grupos para cualquier añadidos carpetas** .

8.  Tipo de la combinación de teclas **Shift-comando-G** , que debería bajar otra hoja para que vayas a una carpeta (el **ir a la carpeta:** hoja).

9.  Introduzca `/Users/Shared/Cordova/Frameworks/Cordova.framework` en el **vaya a la carpeta:** de la hoja y luego presione el botón **ir** .

10. Pulse el botón **añadir** en la hoja de **Agregar archivos...** .

11. Seleccione `Cordova.framework` en el navegador de proyectos.

12. Tipo de la combinación de teclas **Command-Option-1** para mostrar el **Inspector File**.

13. Seleccione **Ruta absoluta** en el **Inspector de archivo** de la lista desplegable de **localización**.

14. Tipo de la combinación de teclas **Comando + Opción-A** , que debe bajar una hoja para añadir archivos a tu proyecto (la hoja **Agregar archivos...** ). Asegúrese de que selecciona el botón de radio **creado grupos para cualquier añadidos carpetas** .

15. Tipo de la combinación de teclas **Shift-comando-G** , que debería bajar otra hoja para que vayas a una carpeta (el **ir a la carpeta:** hoja).

16. Introduzca `~/Documents/CordovaLib/Classes/deprecated` en el **vaya a la carpeta:** de la hoja y luego presione el botón **ir** .

17. Pulse el botón **añadir** en la hoja de **Agregar archivos...** .

18. En su `AppDelegate.h` , `AppDelegate.m` , y `MainViewController.h` archivos, reemplace el conjunto `#ifdef PHONEGAP_FRAMEWORK` bloque con:
    
        #import "CDVDeprecated.h"
        

19. Haga clic en el **icono de proyecto** en el navegador de proyectos, seleccione su **destino**y seleccione la ficha **Configuración de construir** .

20. Buscar **rutas de búsqueda de marco**.

21. Reemplace el valor existente con`/Users/Shared/Cordova/Frameworks`.

22. Búsqueda de **preprocesador Macros**.

23. El primer valor (combinado), reemplazar el valor con **CORDOVA_FRAMEWORK = YES**.

24. Seleccione la ficha **Fases de construcción** .

25. Ampliar **Ejecutar Script**.

26. Reemplace cualquier ocurrencias de **PhoneGap** con **Cordova**.

27. Encuentra tu `PhoneGap.plist` los archivos en el navegador de proyectos y haga clic en el nombre del archivo una vez para entrar en modo de edición de nombre.

28. Cambiar el nombre de `PhoneGap.plist` a`Cordova.plist`.

29. Haga clic en `Cordova.plist` y elija **abrir como → código fuente**.

30. Pulse **Comando + opción +-F**, elija **reemplazar** desde el menú desplegable en la parte superior izquierda de la ventana de código fuente.

31. Entrar en `com.phonegap` para la cadena de búsqueda, y `org.apache.cordova` para la cadena de reemplazo, luego presione el botón **Reemplazar todos** .

32. Introduzca **PG** para la cadena de búsqueda y **CDV** para la cadena de reemplazo, luego presione el botón **Reemplazar todos** .

33. Pulse **Comando + B** para construir. Todavía tienes deprecations que usted puede deshacerse de en el futuro (ver `CDVDeprecated.h` . Por ejemplo, reemplazar las clases en el código que utilizan PG * a la CDV).

## Proyectos de modernización 1.4.0 a 1.4.1

1.  Instale Cordova 1.4.1.

2.  Realizar una copia de seguridad`MainViewController.m`.

3.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

4.  Copia el `MainViewController.m` archivo del nuevo proyecto en su directorio de proyecto 1.4.0-based en el disco, reemplazando el archivo viejo (copia de seguridad archivos primero del paso 2 anterior).

5.  Añadir el `MainViewController.m` archivo a su proyecto Xcode.

6.  Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `MainViewController.m` en el archivo de nuevo.

7.  Actualización de la `phonegap-1.4.0.js` archivo es opcional, no ha cambiado nada en JavaScript entre 1.4.0 y 1.4.1.

## Proyectos de modernización 1.3.0 a 1.4.0

1.  Instale Cordova 1.4.0.

2.  Hacer un backup de `AppDelegate.m` y `AppDelegate.h` en su proyecto.

3.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

4.  Copie estos archivos desde el nuevo proyecto en su directorio de proyecto 1.3.0-based en el disco, reemplazando los viejos archivos (copia de seguridad de sus archivos primero desde el paso 2 anterior):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Añadir todos los `MainViewController` los archivos a su proyecto Xcode.

6.  Copia el `www/phonegap-1.4.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/phonegap-1.3.0.js` archivo.

7.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `phonegap-1.4.0.js` archivo.

8.  Añadir una nueva entrada en `Plugins` en el `PhoneGap.plist` archivo. La clave es `com.phonegap.battery` y el valor es`PGBattery`.

9.  Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `AppDelegate.h` y `AppDelegate.m` en los archivos del AppDelegate nuevo.

## Proyectos de actualización 1.2.0 a 1.3.0

1.  Instale Cordova 1.3.0.

2.  Hacer un backup de `AppDelegate.m` y `AppDelegate.h` en su proyecto.

3.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

4.  Copie estos archivos desde el nuevo proyecto en su directorio de proyecto 1.2.0-based en el disco, reemplazando los viejos archivos (copia de seguridad de sus archivos primero desde el paso 2 anterior):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Añadir todos los `MainViewController` los archivos a su proyecto Xcode.

6.  Copia el `www/phonegap-1.3.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/phonegap-1.2.0.js` archivo.

7.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `phonegap-1.3.0.js` archivo.

8.  Añadir una nueva entrada en `Plugins` en el `PhoneGap.plist` archivo. La clave es `com.phonegap.battery` y el valor es`PGBattery`.

9.  Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `AppDelegate.h` y `AppDelegate.m` en los archivos del AppDelegate nuevo.

## Proyectos de modernización 1.1.0 a 1.2.0

1.  Instale Cordova 1.2.0.

2.  Hacer un backup de `AppDelegate.m` y `AppDelegate.h` en su proyecto.

3.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

4.  Copie estos archivos desde el nuevo proyecto en su directorio de proyecto 1.1.0-based en el disco, reemplazando los viejos archivos (copia de seguridad de sus archivos primero desde el paso 2 anterior):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Añadir todos los `MainViewController` los archivos a su proyecto Xcode.

6.  Copia el `www/phonegap-1.2.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/phonegap-1.1.0.js` archivo.

7.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `phonegap-1.2.0.js` archivo.

8.  Añadir una nueva entrada en `Plugins` en el `PhoneGap.plist` archivo. La clave es `com.phonegap.battery` y el valor es`PGBattery`.

9.  Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `AppDelegate.h` y `AppDelegate.m` en los archivos del AppDelegate nuevo.

## Proyectos de modernización 1.0.0 a 1.1.0

1.  Instale Cordova 1.1.0.

2.  Hacer un backup de `AppDelegate.m` y `AppDelegate.h` en su proyecto.

3.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

4.  Copie estos archivos desde el nuevo proyecto en su directorio de proyecto 1.0.0-based en el disco, reemplazando los viejos archivos (copia de seguridad de sus archivos primero desde el paso 2 anterior):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Añadir todos los `MainViewController` los archivos a su proyecto Xcode.

6.  Copia el `www/phonegap-1.1.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/phonegap-1.0.0.js` archivo.

7.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `phonegap-1.1.0.js` archivo.

8.  Añadir una nueva entrada en `Plugins` en el `PhoneGap.plist` archivo. La clave es `com.phonegap.battery` y el valor es`PGBattery`.

9.  Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `AppDelegate.h` y `AppDelegate.m` en los archivos del AppDelegate nuevo.

## Proyectos de modernización 0.9.6 a 1.0.0

1.  Instale Cordova 1.0.0.

2.  Hacer un backup de `AppDelegate.m` y `AppDelegate.h` en su proyecto.

3.  Crear un nuevo proyecto. Usted necesitará algunos de los activos de este nuevo proyecto.

4.  Copie estos archivos desde el nuevo proyecto en su directorio de proyecto 0.9.6-based en el disco, reemplazando los viejos archivos (copia de seguridad de sus archivos primero desde el paso 2 anterior):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Añadir todos los `MainViewController` los archivos a su proyecto Xcode.

6.  Copia el `www/phonegap-1.0.0.js` archivo del nuevo proyecto en tu `www` Directorio y eliminar su `www/phonegap-0.9.6.js` archivo.

7.  Actualizar la referencia de script Cordova en su `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `phonegap-1.0.0.js` archivo.

8.  Añadir una nueva entrada en `Plugins` en el `PhoneGap.plist` archivo. La clave es `com.phonegap.battery` y el valor es`PGBattery`.

9.  Integrar cualquier código de proyectos específicos que tienes en tu respaldo de `AppDelegate.h` y `AppDelegate.m` en los archivos del AppDelegate nuevo.