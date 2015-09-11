---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

# compassSuccess

onSuccess 콜백 함수를 통해 <a href="../compass.html">나침반</a> 머리글 정보를 제공 하는 `<a href="compassHeading.html">compassHeading</a>` 개체.

    function(heading) {
        // Do something
    }
    

## 매개 <a href="../../../plugin_ref/spec.html">변수</a>

*   **제목**: 제목 정보. *(<a href="compassHeading.html">compassHeading</a>)*

## 예를 들어

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };