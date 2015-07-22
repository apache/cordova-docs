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

# compassSuccess

提供了通過的羅經航向資訊的 onSuccess 回呼函數 `compassHeading` 物件。

    function(heading) {
        // Do something
    }
    

## 參數

*   **標題**： 標題資訊。*() compassHeading*

## 示例

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };