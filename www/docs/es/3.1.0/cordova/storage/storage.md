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

title: Almacenamiento de información
---

# Almacenamiento de información

> Proporciona acceso a las opciones de almacenamiento del dispositivo.

Esta API ofrece opciones de almacenamiento basadas en dos diferentes especificaciones de W3C:

*   La [Especificación del API almacenamiento Web][1] le permite acceder a datos a través de pares clave/valor simple. Consulte la sección sobre [localStorage](localstorage/localstorage.html) para obtener detalles completos sobre esta interfaz.

*   La [Especificación de base de datos de SQL Web][2] ofrece más tablas de base de datos completa accede a través de consultas SQL. Un Resumen de esta interfaz aparece inmediatamente debajo.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova proporciona acceso a ambas interfaces para la minoría de los dispositivos que ya no los apoyan. De lo contrario se aplican las implementaciones integradas.

## Métodos

*   [openDatabase](storage.opendatabase.html)

## Argumentos

*   nombre\_base\_de_datos
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## Objetos

*   [Base de datos](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   [SQLError](sqlerror/sqlerror.html)

## Acceso a la función

A partir de la versión 3.0, acceso a las API de almacenamiento está construido en Córdoba y no requiere usar la CLI para agregar plugins como se describe en la interfaz de línea de comandos.

Si usted está usando el mayor conjunto de herramientas de Córdoba que preceden a la CLI, los siguientes valores de configuración específicos de la plataforma están siendo necesarios:

*   Android (en`app/res/xml/config.xml`)
    
        < nombre de la función = "Almacenamiento" >< nombre param = "android-paquete" value="org.apache.cordova.Storage" / >< / característica >
        

*   BlackBerry WebWorks (en`www/config.xml`)
    
        < cuentan con id="blackberry.widgetcache" requerida = "true" version = "1.0.0.0" / >
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.