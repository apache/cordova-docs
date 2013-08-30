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

提供对 W3C [Web 存储接口][1]的访问

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## 方法

*   **键**： 返回在指定的位置的键的名称。

*   **getItem**： 返回由指定的键标识的项。

*   **setItem**： 分配一个键控的项值。

*   **removeItem**: 删除标识由指定键的项。

*   **清除**： 中移除所有键/值对。

## 详细信息

`window.localStorage`接口实现，W3C [Web 存储接口][2]。 应用程序可以使用它来保存永久数据使用键-值对。 `window.sessionStorage`接口在每个方面，除了，所有数据都被都清除应用程序关闭每次的工作方式相同。 每个数据库提供了单独的命名空间。

 [2]: http://dev.w3.org/html5/webstorage/

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 6.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8

## 键快速示例

    var keyName = window.localStorage.key(0);
    

## 设置的项目的快速示例

    window.localStorage.setItem("key", "value");
    

## 获取项目的快速示例

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## 删除项目快速示例

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

点表示法是*没有*可用的 Windows Phone 7。 一定要使用 `setItem` 或 `getItem` ，而不是直接从存储对象，如访问键`window.localStorage.someKey`.