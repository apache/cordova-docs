---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# iOS Platform Guide

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos iOS como el iPhone y iPad. Vea el siguiente para obtener más información específica de la plataforma:

*   iOS configuración
*   Actualizar iOS
*   iOS WebViews
*   iOS Plugins
*   iOS herramientas de línea de comandos

Las herramientas de línea de comandos anteriores se refieren a las versiones anteriores Cordova 3.0. Ver la interfaz de línea de comandos para obtener información sobre la interfaz actual.

## Requisitos y apoyo

Apple ® herramientas necesarias para crear aplicaciones de iOS ejecutar sólo en el sistema operativo OS X Macs basados en Intel. Xcode ® 4.5 (la versión mínima requerida) se ejecuta sólo en OS X versión 10.7 (Lion) o mayor e incluye el iOS 6 SDK (Software Development Kit). Presentar aplicaciones para el Apple App Store℠ requiere las últimas versiones de las herramientas de Apple.

Muchas de las características de Cordova usando el emulador de iOS instalado con el iOS SDK y Xcode puede probar, pero necesitas un dispositivo real para completamente todas las características de la aplicación dispositivo de prueba antes de presentar a la App Store. El dispositivo debe tener por lo menos iOS 5.x instalado, la versión de iOS mínimo apoyado desde 2.3 Cordova. Dispositivos de apoyo incluyen todos iPad ® modelos, iPhone ® 3GS y anteriores y iPod ® Touch de 3ª generación o posterior. Para instalar aplicaciones en un dispositivo, también debe ser un miembro de Apple [iOS Developer Program][1], que cuesta $99 por año. Esta guía le muestra cómo implementar aplicaciones para el emulador de iOS, para lo cual no debes registrarte con el programa de desarrolladores.

 [1]: https://developer.apple.com/programs/ios/

## Instalar el SDK

Hay dos maneras de descargar Xcode:

*   desde la [App Store][2], disponible mediante la búsqueda de "Xcode" en la aplicación de **La App Store**.

*   de [Descargas de desarrollador de Apple][3], que requiere el registro como desarrollador de Apple.

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

Una vez instalado Xcode, necesitan varias herramientas de línea de comandos debe estar habilitada para que Cordova ejecutar. En el menú de **Xcode**, seleccione **preferencias** y luego en la pestaña de **descargas**. Desde el panel **componentes**, pulse el botón **instalar** junto a la lista de **Herramientas de línea de comandos**.

## Abrir un proyecto en el SDK

Uso el `cordova` utilidad para configurar un nuevo proyecto, como se describe en la Córdoba del interfaz de comandos. Por ejemplo, en un directorio del código fuente:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"
    

Una vez creado, puede abrir desde dentro de Xcode. Haga doble clic para abrir el archivo `hello/platforms/ios/hello.xcodeproj`. La pantalla debería parecerse a esto:

![][4]

 [4]: img/guide/platforms/ios/helloworld_project.png

## Desplegar en emulador

Para previsualizar la aplicación en el emulador de iOS:

1.  Asegúrese de que el archivo *.xcodeproj* es seleccionado en el panel izquierdo.

2.  Seleccione la aplicación **hello** en el panel inmediatamente a la derecha.

3.  Seleccione el dispositivo deseado desde el menú de la barra de herramientas **Scheme**, como el iPhone Simulator 6.0 como destacado aquí:
    
    ![][5]

4.  Presione el botón **Run** que aparece en la misma barra de herramientas a la izquierda del **Scheme**. Construye, implementa y ejecuta la aplicación en el emulador. Una aplicación separada emulador se abre para mostrar la aplicación:
    
    ![][6]
    
    Sólo un emulador puede ejecutar al mismo tiempo, así que si quieres probar la aplicación en un emulador diferente, tienes que dejar la aplicación del emulador y llevar un objetivo diferente dentro de Xcode.

 [5]: img/guide/platforms/ios/select_xcode_scheme.png
 [6]: img/guide/platforms/ios/HelloWorldStandard.png

Xcode viene liado con emuladores para las últimas versiones de iPhone y iPad. Las versiones más antiguas pueden estar disponibles en el **Xcode → Preferences → Downloads → Components** panel.

## Desplegar en el dispositivo

Para obtener más información acerca de varios requisitos para implementar un dispositivo, consulte la sección *configuración de desarrollo y distribución de activos* de la [Guía de herramientas de flujo de trabajo para iOS][7] de Apple. Brevemente, tienes que hacer lo siguiente antes de implementar:

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Únete a la Apple iOS Developer Program.

2.  Crear un *Perfil de Provisioning* dentro del [iOS Provisioning Portal][8]. Puede utilizar su *Asistente de Provisioning de desarrollo* para crear e instalar el perfil y requiere certificado Xcode.

3.  Verificar que de la sección *Firma de código* *Identidad de firma de código* dentro de la configuración del proyecto se establece en su aprovisionamiento nombre de perfil.

 [8]: https://developer.apple.com/ios/manage/overview/index.action

Para desplegar el dispositivo:

1.  Utilice el cable USB para enchufar el dispositivo en tu Mac.

2.  Seleccione el nombre del proyecto en la lista desplegable de la ventana Xcode **Scheme**.

3.  Seleccione su dispositivo de la lista desplegable de **dispositivos**. Si está conectado vía USB, pero aún no aparece, pulse el botón **organizador** para resolver los errores.

4.  Presione el botón **Run** para construir, implementar y ejecutar la aplicación en tu dispositivo.

## Problemas comunes

**Descarte las advertencias**: cuando una aplicación es modificada o sustituida por otra API interfaz de programación (API), que está marcado como *obsoleto*. La API aún trabaja en el corto plazo, pero eventualmente se quita. Algunas de estas interfaces obsoletas se reflejan en Apache Cordova y Xcode emite advertencias sobre ellos cuando construir y desplegar una aplicación.

ADVERTENCIA de Xcode sobre el método `invokeString` refiere a funcionalidad que lanza una app desde una dirección URL personalizada. Mientras que el mecanismo para cargar desde una dirección URL personalizada ha cambiado, este código es todavía presente para proporcionar la funcionalidad al revés para aplicaciones creadas con versiones anteriores de Córdoba. La aplicación de muestra no utiliza esta funcionalidad, así que estas advertencias pueden ser ignoradas. Para evitar estas advertencias aparezcan, quitar el código que hace referencia a la invokeString deprecated API:

*   Editar el archivo *Classes/MainViewController.m*, rodean el siguiente bloque de código con `/ *` y `* /` comentarios como se muestra a continuación, escriba el **Comando-s** para guardar el archivo:
    
        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];
        
        return [super webViewDidFinishLoad:theWebView];
        }
        

*   Editar el archivo *Classes/AppViewDelegate.m*, comentar la siguiente línea insertando una doble barra como se muestra abajo, a continuación, escriba el **comando + s** para guardar el archivo:
    
        //self.viewController.invokeString = invokeString;
        

*   Pulsar **comando + b** para reconstruir el proyecto y eliminar las advertencias.

<!-- Does this fix only last until the next "cordova prepare"? -->

**Faltan encabezados**: errores de compilación relativos a cabeceras de faltantes el resultado de problemas con la ubicación de la construcción y puede ser fijados mediante Xcode preferencias:

1.  Seleccione **Xcode → preferencias → ubicaciones de**.

2.  En la sección de **Datos derivados**, pulse el botón **avanzado** y seleccione **único** como la **Ubicación de construir** como se muestra aquí:
    
    ![][9]

 [9]: img/guide/platforms/ios/xcode_build_location.png

Esta es la configuración predeterminada para una instalación nueva de Xcode, pero se puede ajustar diferentemente siguiendo una actualización desde una versión anterior de Xcode.

Para más información, consulte la documentación de Apple:

*   [IOS de empezar a desarrollar aplicaciones hoy][10] proporciona un rápido Resumen de pasos para el desarrollo de iOS Apps.

*   [Miembro del centro Página][11] proporciona enlaces a varios iOS recursos técnicos incluyendo recursos técnicos, el portal provisioning, guías de distribución y foros de la comunidad.

*   [Guía de herramientas de flujo de trabajo para iOS][7]

*   [Guía de usuario de Xcode 4][12]

*   [Videos de sesiones][13] de la Apple World Wide Developer Conference 2012 (WWDC2012)

*   El [comando select-xcode][14], que ayuda a especificar la versión correcta de Xcode si más de uno está instalado.

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X ®, Apple ®, Xcode, App Store℠, iPad ®, iPhone ®, iPod ® y Finder ® son marcas registradas de Apple Inc.)