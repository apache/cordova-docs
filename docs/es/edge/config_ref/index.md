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

# El archivo config.xml

Muchos aspectos del comportamiento de una aplicación pueden controlarse con un archivo de configuración global, `config.xml` . Este archivo XML independiente de la plataforma se arregla basado en la especificación del W3C [Empaquetado aplicaciones Web (Widgets)][1] y extendido a especificar funciones API Cordova centrales, plugins y configuración específica de la plataforma.

 [1]: http://www.w3.org/TR/widgets/

Para los proyectos creados con la CLI Cordova (descrito en la interfaz de línea de comandos), este archivo puede encontrarse en el directorio de nivel superior:

        app/config.xml
    

Tenga en cuenta que antes de versión 3.3.1-0.2.0, el archivo existía en `app/www/config.xml` , y que tenerlo aquí es apoyado todavía.

Cuando se usa la CLI para construir un proyecto, las versiones de este archivo pasivo se copian en varios `platforms/` subdirectorios, por ejemplo:

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

Esta sección detalla las opciones de configuración global y multiplataforma. Consulte las siguientes secciones para las opciones específicas de la plataforma:

*   Configuración de iOS
*   Configuración de Android
*   Configuración de blackBerry 10

Además de las diversas opciones de configuración detalladas a continuación, también puede configurar el conjunto básico de una aplicación de imágenes para cada plataforma de destino. Ver los iconos y salpicadura pantallas para obtener más información.

## Elementos de configuración del núcleo

Este ejemplo muestra el valor predeterminado `config.xml` generados por la CLI `create` comando, que se describe en la interfaz de línea de comandos:

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

Aparecen los siguientes elementos de configuración en el nivel superior `config.xml` de archivos y se admiten todas las plataformas soportadas Cordova:

*   Atributo `id` del elemento `<widget>` proporciona identificador de reversa-dominio de la aplicación y la `versión de` su número de versión completa expresada en notación de mayor/menor/parche.

*   El elemento `<name>` especifica nombre formal de la aplicación, como aparece en la pantalla principal del dispositivo y dentro de la tienda app interfaces.

*   Los elementos `<description>` y `<author>` especifican metadatos e información de contacto que puede aparecer en anuncios de la tienda app.

*   Opcional `<content>` elemento define la página de inicio de la aplicación en el directorio web de alto nivel de activos. El valor predeterminado es `index.html`, que habitualmente aparece en el directorio de nivel superior `www` de un proyecto.

*   elementos `<access>` definen el conjunto de dominios externos que puede comunicarse con la aplicación. El valor predeterminado que se muestra arriba le permite acceder a cualquier servidor. Consulte a la guía de lista blanca de dominio para obtener más detalles.

*   La etiqueta `<preference>` establece varias opciones como pares de `nombre` / `valor de` atributos. De cada preferencia `name` es sensible a las mayúsculas. Muchas preferencias son exclusivos para plataformas específicas, como se indica en la parte superior de esta página. Las siguientes secciones detallan las preferencias que se aplican a más de una plataforma.

## Preferencias globales

Las siguientes preferencias globales se aplican a todas las plataformas:

*   `Fullscreen` permite ocultar la barra de estado en la parte superior de la pantalla. El valor predeterminado es `false`. Ejemplo:
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation` permite bloquear orientación y evitar que roten en respuesta a cambios en la orientación de la interfaz. Los valores posibles son `default`, `landscape` o `portrait`. Ejemplo:
    
        <preference name="Orientation" value="landscape" />
        
    
    **Nota**: el `default` valor significa *tanto* orientaciones de retrato y paisaje están habilitadas. Si desea utilizar la configuración predeterminada de cada plataforma (generalmente retrato solamente), metas esta etiqueta el archivo `config.xml`.

## Preferencias de múltiples plataformas

A más de una plataforma, pero no a todos ellos se aplican las siguientes preferencias:

*   `DisallowOverscroll` (boolean, valor predeterminado `false`): Si no quieres la interfaz para mostrar cualquier regeneración cuando los usuarios se pasa al principio o al final del contenido se establece en `true`.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    Se aplica a iOS y Android. En iOS, overscroll gestos causa contenido a repuntar a su posición original. En Android, que producen un efecto brillante más sutil a lo largo del borde superior o inferior del contenido.

*   `BackgroundColor`: definir color de fondo de la aplicación. Admite un valor hexadecimal de cuatro bytes, con el primer byte que representan el canal alfa y valores RGB estándar para los siguientes tres bytes. Este ejemplo especifica azul:
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    Se aplica a Android y BlackBerry. Anula CSS disponibles en *todas* las plataformas, por ejemplo: `body{background-color: blue;}`.

*   `HideKeyboardFormAccessoryBar` (boolean, valor predeterminado `false`): establece en `true` para ocultar la barra de herramientas adicional que aparece encima del teclado, ayudando a los usuarios navegar desde la entrada de una forma a otra.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    Se aplica a iOS y BlackBerry.

## La *función de* elemento

Si utilizas la CLI para construir aplicaciones, utiliza el `plugin` comando para activar el dispositivo de APIs. Esto no modifica el nivel superior `config.xml` archivo, así que el `<feature>` elemento no se aplica a su flujo de trabajo. Si usted trabaja directamente en un SDK y el uso específico del plataforma `config.xml` archivo como fuente, utiliza el `<feature>` etiqueta para permitir a nivel de dispositivo APIs y plugins externos. A menudo aparecen con valores personalizados en específica de la plataforma `config.xml` archivos. Por ejemplo, aquí es cómo especificar el dispositivo de API para proyectos Android:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Aquí es cómo aparece el elemento para proyectos de iOS:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Consulte la referencia de la API para obtener más información sobre cómo especificar cada característica. Consulte a la guía de desarrollo de Plugin para obtener más información sobre plugins.