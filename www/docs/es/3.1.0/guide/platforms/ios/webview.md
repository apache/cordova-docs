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

title: iOS WebViews
---

# iOS WebViews

Comenzando con 1.4 Cordova, puede utilizar Cordova como componente en las aplicaciones de iOS. Este componente es el nombre en código es 'Cuchilla'.

Nuevas aplicaciones basadas en Cordova creadas utilizando la plantilla de Xcode en Córdoba 1.4 ó mayor uso Cleaver. (La plantilla es la implementación de referencia de la cuchilla).

Cordova 2.0.0 y versiones posteriores sólo apoyan la implementación de la cuchilla de sub-proyecto basado.

## Requisitos previos

*   Cordova 2.3.0 o mayor

*   Xcode 4.5 o superior

*   `config.xml`archivo (de un proyecto recién creado iOS)

## Cleaver agregando a su proyecto Xcode (subproyecto CordovaLib)

1.  Descargue y extraiga la fuente Córdoba a una ubicación de directorio permanente en tu disco duro, por ejemplo a `~/Documents/Cordova`.

2.  Deja de Xcode si se está ejecutando.

3.  Usar Terminal.app, desplácese hasta el directorio donde pusiste la fuente descargada anteriormente.

4.  Copie el archivo `config.xml` en el directorio de tu proyecto en disco (consulte los requisitos anteriores).

5.  Arrastre y suelte el `config.xml` archivo en el navegador de proyecto de Xcode.

6.  Elegir el botón **Crear grupo para cualquier añadidas carpetas** y pulse **Finalizar**.

7.  Arrastrar y soltar el archivo `CordovaLib.xcodeproj` en el navegador de proyecto de Xcode (desde el directorio permanente ubicación anterior y deben ser en el subdirectorio `CordovaLib`).

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  Tipo de la combinación de teclas **Command-Option-1** para mostrar el **Inspector File**.

10. Elegir **relativo al grupo** en el **Inspector de archivo** del menú desplegable para **Ubicación**.

11. Seleccione el **icono de proyecto** en el navegador de proyectos, selecciona tu **destino**y seleccione la ficha **Configuración de construir** .

12. Agregar `-all_load` y `-Obj-C` para el valor de **Otras banderas del vinculador** .

13. Haga clic en el **icono de proyecto** en el navegador de proyectos, seleccione su **destino**, luego seleccione la ficha **Fases construir** .

14. Ampliar **los binarios de enlace con las bibliotecas**.

15. Seleccione el **+** botón y agregue los siguientes **Marcos**. Opcionalmente en el navegador de proyectos, moverlos en el grupo de **Marcos** ):
    
        AddressBook.framework AddressBookUI.framework AudioToolbox.framework AVFoundation.framework CoreLocation.framework MediaPlayer.framework QuartzCore.framework SystemConfiguration.framework MobileCoreServices.framework CoreMedia.framework
        

16. Ampliar **Las dependencias de destino**, el cuadro superior etiquetado como este si tienes múltiples cajas!

17. Seleccione el **+** botón y agregar el `CordovaLib` construir el producto.

18. Ampliar **Los binarios de enlace con las bibliotecas**, el cuadro superior etiquetado como este si tienes múltiples cajas!

19. Seleccione el **+** botón y agregar`libCordova.a`.

20. Establecer la preferencia de Xcode **Xcode preferencias → ubicaciones → los datos derivados → avanzado...** a **Unique**.

21. Seleccione el **icono de proyecto** en el navegador de proyectos, selecciona tu **destino**y seleccione la ficha **Configuración de construir** .

22. Búsqueda de **rutas de búsqueda encabezado**. Para esa configuración, agregar estos tres valores por debajo (con comillas):
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    Con Cordova 2.1.0, `CordovaLib` ha sido actualizado para utilizar el **Conteo automático de referencia (ARC)**. Usted no necesita actualizar a **ARC** a usar CordovaLib, pero si desea actualizar su proyecto para utilizar **ARC**, utilice el Asistente para migración de Xcode desde el menú: **Editar → Refactor → convertir en Objective-C arco...**, **anular la selección de libCordova.a**, luego ejecute el Asistente para completar.

## Uso de CDVViewController en tu código

1.  Añadir este encabezado:
    
        #import <Cordova/CDVViewController.h>
        

2.  Instanciar un nuevo `CDVViewController` y retener en algún lugar (por ejemplo, a una propiedad en su clase):
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*Opcional*) Fijar la `wwwFolderName` propiedad (por defecto `www` ):
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*Opcional*) Configurar la página de inicio en el archivo config.xml, el `<content>` etiqueta.
    
        <content src="index.html" />
        
    
    O
    
        <content src="http://apache.org" />
        

5.  (*Opcional*) Fijar la `useSplashScreen` propiedad (por defecto `NO` ):
    
        viewController.useSplashScreen = YES;
        

6.  Establecer el **marco de la vista** (siempre establecer esto como la última propiedad):
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Añadir cuchilla a su punto de vista:
    
        [myView addSubview:viewController.view];
        

## Añadiendo sus activos de HTML, CSS y JavaScript

1.  Crear un nuevo directorio en tu proyecto en disco, `www`, por ejemplo.

2.  Pon tus HTML, CSS y JavaScript activos en este directorio.

3.  Arrastrar y soltar el directorio en el navegador de proyecto de Xcode.

4.  Elegir el botón **crear referencias de carpeta para cualquier añadidas carpetas** .

5.  Establecer la adecuada `wwwFolderName` y `startPage` las propiedades de la carpeta que creó inicialmente, o utilizar los valores predeterminados (ver sección anterior) cuando crea una instancia del`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"