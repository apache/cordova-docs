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

> 在成功的媒体捕获操作时调用。

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## 说明

此函数执行成功捕获操作完成后。 在已捕获的媒体文件，这点，或者用户已退出媒体捕获应用程序，或已达到捕获限制。

每个 `MediaFile` 对象描述一个捕捉的媒体文件。

## 快速的示例

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };