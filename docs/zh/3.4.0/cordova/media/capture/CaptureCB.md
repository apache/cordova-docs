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

# CaptureCB

> 在成功的媒體捕獲操作時調用。

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## 說明

此函數執行成功捕獲操作完成後。 在已捕獲的媒體檔案，這點，或者使用者已退出媒體捕獲應用程式，或已達到捕獲限制。

每個 `MediaFile` 物件描述一個捕捉的媒體檔案。

## 快速的示例

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };