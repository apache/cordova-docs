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

# localStorage

提供對 W3C [Web 存儲介面][1]的訪問

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## 方法

*   **鍵**： 返回在指定的位置的鍵的名稱。

*   **getItem**： 返回由指定的鍵標識的項。

*   **setItem**： 分配一個鍵控的項值。

*   **removeItem**: 刪除標識由指定鍵的項。

*   **清除**： 中移除所有鍵/值對。

## 詳細資訊

`window.localStorage`介面實現，W3C [Web 存儲介面][2]。 應用程式可以使用它來保存永久資料使用鍵-值對。 `window.sessionStorage`介面在每個方面，除了，所有資料都被都清除應用程式關閉每次的工作方式相同。 每個資料庫提供了單獨的命名空間。

 [2]: http://dev.w3.org/html5/webstorage/

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8

## 鍵快速示例

    var keyName = window.localStorage.key(0);
    

## 設置的專案的快速示例

    window.localStorage.setItem("key", "value");
    

## 獲取專案的快速示例

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## 刪除專案快速示例

        window.localStorage.removeItem("key");
    

## 清除快速示例

        window.localStorage.clear();
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 的怪癖

點標記法是*沒有*可用的 Windows Phone 7。 一定要使用 `setItem` 或 `getItem` ，而不是直接從存儲物件，如便捷鍵`window.localStorage.someKey`.