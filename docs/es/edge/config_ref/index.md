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

# Referencia de la configuración

Muchos aspectos del comportamiento de una aplicación pueden ser controlados con un archivo de configuración agnóstico (independiente de la plataforma), `config.xml`, que tiene un formato basado en la especificación de [Empaquetado de Web Apps (Widgets) ][1] del consorcio W3C.

 [1]: http://www.w3.org/TR/widgets/

Para proyectos creados con el CLI de Cordova (descrito en la interfaz de línea de comandos), este archivo se encuentra en el directorio de nivel superior `www`. Al usar el CLI para construir proyectos se regeneran versiones de este archivo en varios subdirectorios dentro de las `plataformas`. En los proyectos creados sin usar el CLI, cada archivo específico de la plataforma sirve como fuente.

Si bien la ubicación del archivo `config.xml` puede cambiar dependiendo de la plataforma, su contenido generalmente no cambia. Algunas de las características específicas de cada plataforma también se detallan en el mismo archivo de configuración. Los detalles son los siguientes:

*   Configuración de iOS
*   Configuración de Android
*   Configuración de blackBerry

## config.xml elementos

El proyecto [Apache Cordova][2] esfuerza abstracto plataforma nativa lejos detalles via abstracciones web inspirada y basada en web que son fuertemente impulsada y aprobada por la comunidad de la web las normas. Por favor tome unos minutos para familiarizarse con la [Especificación de archivo config.xml][1], entender el tipo de metadatos de aplicación del proyecto Apache Cordova pretende abstracta y proporcionar puntos de entrada simple para.

 [2]: http://cordova.io

Un ejemplo:

        <widget>
            <preference name="MySetting" value="true" />
            <feature name="MyPlugin" value="MyPluginClass" />
            <access origin="*" />
            <content src="index.html" />
        </widget>
    

Seguir una lista de elementos soportados en plataformas principales que son apoyadas en Apache Cordova.

### `<feature>`

Estos elementos se asignan a API nativas que acceda la aplicación. En tiempo de ejecución, el marco Apache Cordova Mapas `<feature>` elementos a código nativo para permitir su aplicación Cordova dispositivo para acceder a las API de otro modo no está disponible para las aplicaciones típicas basadas en la Web.

### `<access>`

Estos elementos definen cómo funciona su lista blanca. Por favor consulte a la guía de la lista blanca de dominio para obtener más información.

### `<content>`

Este elemento define la página de inicio de su aplicación en relación con la carpeta del proyecto estándar web bienes raíces. Este elemento es opcional, el valor predeterminado es `index.html`.