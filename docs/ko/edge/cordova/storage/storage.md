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

# 스토리지

> 코르 도우 바에 대 한 저장소 옵션에 대 한 개요입니다.

여러 저장소 Api 코르도바 애플리케이션에 사용할 수 있습니다. [Html5rocks][1]를 참조 하십시오. 더 완전 한 개요 및 예제.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

또한 다른 *세션 저장소* 인터페이스 또는 *웹 스토리지*, *간단한 스토리지*,으로 알려진,이 API 동기 키/값 쌍 스토리지를 제공 하 고 기본 WebView 구현에서 사용할 수 있습니다. 자세한 내용은 [W3C 사양을][2] 참조 하십시오.

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 특질**: 점 표기법은 *하지* 사용할 수, 사용 해야 `setItem` 또는 `getItem` 보다는로 키 저장소 개체에서 직접 액세스`window.localStorage.someKey`.

## WebSQL

이 API는 기본 WebView에서 사용할 수 있습니다. [웹 SQL 데이터베이스 사양][3] 더 완전 한 기능의 데이터베이스 테이블 액세스 SQL 쿼리를 통해 제공 합니다.

 [3]: http://dev.w3.org/html5/webdatabase/

다음 플랫폼 WebSQL을 지원합니다.

*   안 드 로이드
*   블랙베리 10
*   iOS
*   Tizen

## IndexedDB

이 API는 기본 WebView에서 사용할 수 있습니다. [색인 DB][4] LocalStorage 보다 더 많은 기능이 있지만 WebSQL 보다 적게 제공합니다.

 [4]: http://www.w3.org/TR/IndexedDB/

다음 플랫폼 IndexedDB를 지원합니다.

*   Windows Phone 8
*   블랙베리 10

## 플러그인 기반 옵션

위에 나열 된 Api 저장소 뿐만 아니라 [파일 API][5] 로컬 파일 시스템에 캐시 데이터를 수 있습니다. [코르 도우 바 플러그인][6] 의 다른 유사한 스토리지 옵션을 제공 합니다.

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/