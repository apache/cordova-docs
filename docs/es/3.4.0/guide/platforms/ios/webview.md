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

# iOS WebViews

Esta sección le muestra cómo incrustar un componente WebView Cordova habilitado dentro de una aplicación iOS más grande. Para más detalles sobre cómo estos componentes pueden comunicarse entre sí, vea aplicación Plugins.

Soporte para iOS WebViews comenzó con Cordova versión 1.4, usando un `Cleaver` para que la plantilla de Xcode sirve como una implementación de referencia de componente. Cordova 2.0 y versiones posteriores sólo admiten la implementación basada en el subproyecto Cleaver.

Estas instrucciones requieren menos Cordova 2.3 y 4.5 de Xcode, junto con un `config.xml` el archivo de un proyecto de iOS recién creado. Puede utilizar el procedimiento en la interfaz de línea de comandos para crear un nuevo proyecto, y luego obtener el `config.xml` archivo de dentro del subdirectorio dentro de la aplicación llamado`platforms/ios`.

Para seguir estas instrucciones, asegúrate de que tienes la última distribución de Córdoba. Descargar desde [cordova.apache.org][1] y descomprimir el paquete de iOS.

 [1]: http://cordova.apache.org

## Cleaver agregando al proyecto Xcode (subproyecto CordovaLib)

1.  Deja de Xcode si se está ejecutando.

2.  Abra una terminal y desplácese hasta el directorio fuente para iOS Cordova.

3.  Copia el `config.xml` archivo descrito anteriormente en el directorio del proyecto.

4.  Abra Xcode y utilizar el buscador para copiar el `config.xml` archivo en la ventana de su **Navegador de proyectos** .

5.  Elija **crear grupos para cualquier añadidos carpetas** y pulse **Finalizar**.

6.  Utilice el buscador para copiar el `CordovaLib/CordovaLib.xcodeproj` archivo de Xcode **Navegador de proyectos**

7.  Seleccione `CordovaLib.xcodeproj` en el **navegador de proyectos**.

8.  Tipo de la combinación de teclas **Command-Option-1** para mostrar el **Inspector File**.

9.  Elegir **relativo al grupo** en el **Inspector de archivo** del menú desplegable para **Ubicación**.

10. Seleccione el **icono de proyecto** en el **Navegador de proyectos**, seleccione el **destino**y seleccione la ficha **Configuración de construir** .

11. Agregar `-force_load` y `-Obj-C` para el valor de **Otras banderas del vinculador** .

12. Haga clic en el **icono de proyecto** en el navegador de proyectos, seleccione el **destino**y seleccione la ficha **Fases construir** .

13. Ampliar **los binarios de enlace con las bibliotecas**.

14. Seleccione el **+** botón y agregue los siguientes **Marcos**. Opcionalmente en el **Navegador de proyectos**, moverlos en el grupo de **Marcos** :
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

15. Ampliar **Las dependencias de destino**, el cuadro superior con esa etiqueta si hay más de una caja.

16. Seleccione el **+** botón y agregar el `CordovaLib` construir el producto.

17. Ampliar **Los binarios de enlace con las bibliotecas**, el cuadro superior con esa etiqueta si hay más de una caja.

18. Seleccione el **+** botón y agregar`libCordova.a`.

19. Fijar la **Xcode preferencias → ubicaciones → derivada datos → avanzado...** a **único**.

20. Seleccione el **icono de proyecto** en el navegador de proyectos, selecciona tu **destino**y seleccione la ficha **Configuración de construir** .

21. Búsqueda de **rutas de búsqueda encabezado**. Para esa configuración, agregar estos tres valores abajo, incluyendo las comillas:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    A partir de Cordova 2.1.0, `CordovaLib` ha sido actualizado para utilizar el **Conteo automático de referencia (ARC)**. No necesitas actualizar a **ARC** para utilizar `CordovaLib` , pero si desea actualizar su proyecto para utilizar **ARC**, debe usar el Asistente para migración de Xcode de la **Editar → Refactor → convertir en Objective-C arco...** menú, **anular la selección de libCordova.a**, luego ejecute el Asistente para completar.

## Usando CDVViewController

1.  Agregue el siguiente encabezado:
    
        #import <Cordova/CDVViewController.h>
        

2.  Instanciar un nuevo `CDVViewController` y consérvelo en algún sitio, por ejemplo, a una propiedad de clase:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  Opcionalmente, establezca el `wwwFolderName` propiedad, cuyo valor predeterminado es `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  Opcionalmente, configurar la página de inicio el `config.xml` del archivo `<content>` de la etiqueta, ya sea un archivo local:
    
        <content src="index.html" />
        
    
    .. .o un sitio remoto:
    
        <content src="http://apache.org" />
        

5.  Opcionalmente, establezca el `useSplashScreen` propiedad, cuyo valor predeterminado es `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  Establecer el **marco de la vista**. Siempre definir esto como la última propiedad:
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Agregar la cuchilla a la vista:
    
        [myView addSubview:viewController.view];
        

## Adición de HTML, CSS y JavaScript activos

1.  Crear un nuevo directorio dentro del proyecto, `www` por ejemplo.

2.  Coloque el HTML, CSS y JavaScript activos en este directorio.

3.  Utilice el buscador para copiar el directorio en la ventana del **Navegador de proyecto** de Xcode.

4.  Seleccione **crear carpeta referencias para cualquier añadidas carpetas**.

5.  Establecer la adecuada `wwwFolderName` y `startPage` las propiedades para el directorio creado inicialmente, o utilizar los valores predeterminados (especificados en la sección anterior) al crear instancias de la`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"