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

# Herramientas de línea de comandos de Windows 8

El `cordova` la utilidad de línea de comandos es una herramienta de alto nivel que le permite construir aplicaciones a través de varias plataformas a la vez. Una versión anterior del marco Cordova ofrece conjuntos de herramientas de línea de comandos específicos de cada plataforma. Para usarlos como una alternativa a la CLI, tienes que descargar esta versión de Córdoba desde [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar la plataforma de destino. Las herramientas aquí descritas están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Para obtener información sobre la interfaz de línea de comandos de bajo nivel que permite plugins, ver usando Plugman para gestionar Plugins. Consulte aplicación Plugins para tener una visión general.

## Windows 8

Las herramientas de línea de comandos de Windows 8 sólo admiten la creación de nuevos proyectos. Los comandos deben ejecutarse desde un símbolo del sistema cmd o powershell.

## Crear un proyecto

Ejecute el `create` comando con los siguientes parámetros:

*   Camino a su nuevo proyecto Cordova Windows 8

*   Nombre del paquete, siguiendo la Convención inversa-dominio estilo. Esto se convierte en el Namespace predeterminado.

*   Nombre del proyecto