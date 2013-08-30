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

# SQLResultSet

当 `SQLTransaction` 对象的 `executeSql` 方法时，执行指定的回调 `SQLResultSet` 参数。

## 属性

*   **insertId**： 行的行的 ID， `SQLResultSet` 对象的 SQL 语句插入到数据库中。

*   **rowsAffected**： 由零如果该语句不会影响任何行的 SQL 语句更改的行数。

*   **行**： `SQLResultSetRowList` 表示返回的行，如果未返回行，则为空。

## 详细信息

当 `SQLTransaction` 对象的 `executeSql` 方法时，执行指定的回调 `SQLResultSet` 参数，其中包含三个属性：

*   `insertId`返回组装成功的 SQL 插入语句的行号。如果 SQL 不会插入任何行， `insertId` 未设置。

*   `rowsAffected`始终是 `` 为一个 SQL `select` 语句。为 `insert` 或 `update` 它返回的数的语句修改的行。

*   决赛 `SQLResultSetList` 包含从一个 SQL select 语句返回的数据。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen

## 执行 SQL 快速示例

    函数 queryDB(tx) {tx.executeSql (' 选择 * 从演示 '、 []、 querySuccess、 errorCB);}函数 querySuccess （德克萨斯州，结果） {console.log ("返回行 ="+ results.rows.length） ；/ / 这将是真实的因为这是一条 select 语句，所以 rowsAffected 是 0，如果 (! results.rowsAffected) {console.log ('没有行受影响!') ；返回 false ；} / / 的 insert 语句，此属性将返回的最后插入的行 console.log 的 ID （"最后插入的行 ID ="+ results.insertId);}函数 errorCB(err) {警报 （"处理 SQL 时出错:"+ err.code);}var db = window.openDatabase ("数据库"、"1.0"，"科尔多瓦演示"，200000) ；db.transaction errorCB queryDB） ；
    

## 完整的示例

    <!DOCTYPE html >< html >< 头 >< 标题 > 存储示例 < / 标题 >< 脚本类型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 脚本 >< 脚本类型 ="文本/javascript"charset ="utf 8"> / / 等待设备 API 库加载 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 填充数据库 / / 函数 populateDB(tx) {tx.executeSql ('下拉表如果存在演示') ；tx.executeSql (' 创建表如果不存在演示 （id 唯一的数据） ') ；tx.executeSql (' 的值插入到演示 （id、 数据） （1，"第一行"） ') ；tx.executeSql （插入到演示 （id、 数据） 值 （2，"第二行")) ；} / / 查询数据库 / / 函数 queryDB(tx) {tx.executeSql (' 选择 * 从演示 '、 []、 querySuccess、 errorCB） ；} / / 查询成功回调 / / 函数 querySuccess （德克萨斯州，结果） {console.log ("返回行 ="+ results.rows.length） ；/ / 这将是真实的因为这是一条 select 语句，所以 rowsAffected 是 0，如果 (! results.rowsAffected) {console.log ('没有行受影响!') ；返回 false ；} / / 的 insert 语句，此属性将返回的最后插入的行 console.log 的 ID （"最后插入的行 ID ="+ results.insertId） ；} / / 交易错误回调 / / 函数 errorCB(err) {console.log ("处理 SQL 时出错:"+ err.code） ；} / / 交易成功回调 / / 函数 successCB() {var db = window.openDatabase ("数据库"、"1.0"，"科尔多瓦演示"，200000) ；db.transaction errorCB queryDB） ；} / / 设备的 Api 可 / / 函数 onDeviceReady() {var db = window.openDatabase ("数据库"、"1.0"，"科尔多瓦演示"，200000) ；db.transaction （populateDB、 errorCB、 successCB） ；} < / 脚本 >< / 头 >< 身体 >< h1 > 示例 < / h1 >< p > 数据库 </p >< / 身体 >< / html >