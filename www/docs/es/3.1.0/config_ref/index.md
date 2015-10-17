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

title: El archivo config.xml
---

# El archivo config.xml

Muchos aspectos del comportamiento de una aplicación pueden controlarse con un archivo de configuración global, `config.xml`, que se coloca en el directorio activo alto nivel web junto con la página de inicio de la aplicación. Este archivo XML independiente de la plataforma es el formato basado en la especificación del W3C [Empaquetado aplicaciones Web (Widgets)][1] y ampliado para especificar características API Cordova, plugins y configuración específica de la plataforma.

 [1]: http://www.w3.org/TR/widgets/

Para proyectos creados con el CLI de Cordova (descrito en la interfaz de línea de comandos), este archivo se encuentra en el directorio de nivel superior `www`. Mediante la CLI para construir un proyecto regenera las versiones de este archivo en diferentes subdirectorios dentro de `platforms`. Si utilizas la CLI para crear un proyecto, pero luego cambio su flujo de trabajo a un SDK, el archivo específico de plataforma sirve como una fuente.

Esta sección detalla las opciones de configuración global y multiplataforma. Consulte las siguientes secciones para las opciones específicas de la plataforma:

*   Configuración de iOS
*   [Configuración de Android](../guide/platforms/android/config.html)
*   [Configuración de blackBerry](../guide/platforms/blackberry10/config.html)

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
            <preference name="Fullscreen" value="true" />
            <preference name="WebViewBounce" value="true" />
        </widget>
    

<!-- QUERY: is WebViewBounce superseded by DisallowOverscroll? -->

Aparecen los siguientes elementos de configuración en el nivel superior `config.xml` de archivos y se admiten todas las plataformas soportadas Cordova:

*   Atributo `id` del elemento `<widget>` proporciona identificador de reversa-dominio de la aplicación y la `versión de` su número de versión completa expresada en notación de mayor/menor/parche.

*   El elemento `<name>` especifica nombre formal de la aplicación, como aparece en la pantalla principal del dispositivo y dentro de la tienda app interfaces.

*   Los elementos `<description>` y `<author>` especifican metadatos e información de contacto que puede aparecer en anuncios de la tienda app.

*   El elemento opcional `<content>` define página de inicio de su aplicación en el directorio web de alto nivel de activos. El valor predeterminado es `index.html`, que habitualmente aparece en el directorio de nivel superior `www` de un proyecto.

*   elementos `<access>` definen el conjunto de dominios externos que puede comunicarse con la aplicación. El valor predeterminado que se muestra arriba le permite acceder a cualquier servidor. Consulte a la guía de lista blanca de dominio para obtener más detalles.

*   La etiqueta `<preference>` establece varias opciones como pares de `nombre` / `valor de` atributos. De cada preferencia `name` es sensible a las mayúsculas. Muchas preferencias son exclusivos para plataformas específicas, como se indica en la parte superior de esta página. Las siguientes secciones detallan las preferencias que se aplican a más de una plataforma.

## Preferencias globales

Las siguientes preferencias globales se aplican a todas las plataformas:

*   `Fullscreen` permite ocultar la barra de estado en la parte superior de la pantalla. El valor predeterminado es `false`. Ejemplo:
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation` permite bloquear orientación y evitar que roten en respuesta a cambios en la orientación de la interfaz. Los valores posibles son `default`, `landscape` o `portrait`. Ejemplo:
    
        <preference name="Orientation" value="landscape" />
        
    
    **NOTA:** El valor `default` significa *tanto* orientaciones de retrato y paisaje están habilitadas. Si desea utilizar la configuración predeterminada de cada plataforma (generalmente retrato solamente), metas esta etiqueta el archivo `config.xml`. Además, BlackBerry utiliza `auto` en lugar de `default` en el archivo `config.xml`. Si especifica `default` en el `archivo config.xml` de global, se traduce en `auto` en la compilación de BlackBerry.

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
    
    **NOTA:** Para BlackBerry, los valores válidos son `enable` o `disable`.

## La `<feature>` elemento

Si utilizas la CLI para construir aplicaciones, utiliza el `plugin` comando para activar el dispositivo de APIs. Esto no modifica el nivel superior `config.xml` archivo, así que el `<feature>` elemento no se aplica a su flujo de trabajo. Si usted está trabajando directamente en un SDK y utilizando la plataforma específica `config.xml` archivo como fuente, utiliza el `<feature>` etiqueta para permitir a nivel de dispositivo APIs y plugins externos. Normalmente aparecen en este formulario:

        <feature name="Plugin" value="PluginID" />
    

A menudo aparecen con valores personalizados en específica de la plataforma `config.xml` archivos. Por ejemplo, aquí es cómo especificar el dispositivo de API para proyectos Android:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Aquí es cómo aparece el elemento para proyectos de iOS:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Consulte la referencia de la API para obtener más información sobre cómo especificar cada característica. Consulte a la guía de desarrollo de Plugin para obtener más información sobre plugins.