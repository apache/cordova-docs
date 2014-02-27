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

# SQLResultSetRowList

Una de las propiedades de la `SQLResultSet` que contiene las filas devueltas desde una consulta SQL.

## Propiedades

*   **length**: el número de filas devueltas por la consulta SQL.

## Métodos

*   **item**: devuelve la fila en el índice especificado representado por un objeto JavaScript.

## Detalles

El `SQLResultSetRowList` contiene los datos devueltos de una instrucción SQL `select`. El objeto contiene una propiedad de `longitud` que indica cuántas filas devuelve la instrucción `select`. Para obtener una fila de datos, llame al método de `item` para especificar un índice. Devuelve un JavaScript `Object` cuyas propiedades son las columnas de la base de datos que la instrucción `select` fue ejecutada contra.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 o superior)
*   iOS
*   Tizen

## Ejecutar SQL ejemplo rápido

    function queryDB(tx) {tx.executeSql ('SELECT * de DEMO', [], querySuccess, errorCB);}
    
    function querySuccess (tx, resultados) {var len = results.rows.length;
            Console.log ("table DEMO:" len + "filas encontradas.");
            para (var i = 0; < len; i ++) {console.log ("fila =" + i + "ID =" + results.rows.item (i) .id + "datos =" + results.rows.item(i).data);
            errorCB(err) función}} {alert ("Error al procesar SQL:" + err.code);
        } var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
        DB.Transaction (queryDB, errorCB);
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< título > almacenamiento ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / espera para que las bibliotecas del dispositivo API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / Rellenar la base de datos / / function populateDB(tx) {tx.executeSql ('DROP TABLE IF EXISTS DEMO');
            tx.executeSql ('crear tabla si no existe DEMO (id único, data)');
            tx.executeSql (' introduzca en DEMO (identificación, datos) valores (1, "primera fila")');
            tx.executeSql ('introduzca en DEMO (identificación, datos) VALUES (2, "Segunda fila")');
        } / / Consulta la base de datos / / function queryDB(tx) {tx.executeSql ('SELECT * de DEMO', [], querySuccess, errorCB);
        } / / Consulta el callback de éxito / / function querySuccess (tx, resultados) {var len = results.rows.length;
            Console.log ("table DEMO:" len + "filas encontradas.");
            para (var i = 0; < len; i ++) {console.log ("fila =" + i + "ID =" + results.rows.item (i) .id + "datos =" + results.rows.item(i).data);
            }} / / Callback de error de transacción / / function errorCB(err) {console.log ("Error al procesar SQL:" + err.code);
        } / / Callback éxito de transacción / / function successCB() {var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
            DB.Transaction (queryDB, errorCB);
        } / / dispositivo APIs están disponibles / / function onDeviceReady() {var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
            DB.Transaction (populateDB, errorCB, successCB);
        } < /script >< / cabeza >< cuerpo >< h1 > ejemplo < / h1 >< p > base de datos < /p >< cuerpo / >< / html >