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

# CaptureError

> 封裝失敗的媒體捕獲操作所引起的錯誤代碼。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

## 常量

*   `CaptureError.CAPTURE_INTERNAL_ERR`： 攝像機或麥克風無法捕獲的圖像或聲音。

*   `CaptureError.CAPTURE_APPLICATION_BUSY`： 相機或音訊捕獲應用程式正在服另一個捕獲請求。

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`： API 的使用無效 （例如，價值 `limit` 小於 1)。

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`： 在使用者退出之前捕獲任何相機或音訊捕獲應用程式。

*   `CaptureError.CAPTURE_NOT_SUPPORTED`： 請求的捕獲操作不受支援。