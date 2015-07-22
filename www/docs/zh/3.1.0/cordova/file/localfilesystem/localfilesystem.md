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

# 場合

此物件提供一個獲取根檔案系統方法。

## 方法

*   **requestFileSystem**: 請求的檔案系統。*（函數）*

*   **resolveLocalFileSystemURI**: 檢索 `DirectoryEntry` 或 `FileEntry` 使用當地的 URI。*（函數）*

## 常量

*   `LocalFileSystem.PERSISTENT`： 用於存儲，不應由使用者代理不應用程式或使用者的許可權的情況下刪除。

*   `LocalFileSystem.TEMPORARY`： 用於不能保證的持久性存儲。

## 詳細資訊

`LocalFileSystem`物件的方法定義在 `window` 物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 請求檔案系統快速示例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## 解決本地檔案系統的 URI 快速示例

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
        }
    
        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> 請求一個檔案系統，用來存儲應用程式資料。

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **視窗**： 對全球視窗物件的引用
*   **類型**： 本地檔案系統類型，請參見場合常數
*   **大小**： 指示應用程式期望需要多少存儲空間，以位元組為單位，
*   **successCallback**： 使用一個檔案系統物件調用
*   **errorCallback**： 如果發生錯誤的檢索檔案系統調用

## 請求檔案系統快速示例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);