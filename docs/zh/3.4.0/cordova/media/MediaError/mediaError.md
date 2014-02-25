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

# MediaError

A `MediaError` 物件返回到 `mediaError` 時出現錯誤的回呼函數。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

*   **消息**： 錯誤訊息描述該錯誤的詳細資訊。

## 常量

*   `MediaError.MEDIA_ERR_ABORTED`
*   `MediaError.MEDIA_ERR_NETWORK`
*   `MediaError.MEDIA_ERR_DECODE`
*   `MediaError.MEDIA_ERR_NONE_SUPPORTED`

## 說明

`MediaError`物件傳遞給 `mediaError` 回呼函數時出現錯誤。