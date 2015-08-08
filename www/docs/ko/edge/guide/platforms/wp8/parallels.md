---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# 패 러 랠 데스크톱 구성

이 섹션에서는 코르 도우 바를 사용 하 여 Windows Phone 응용 프로그램을 생성 하는 Mac에 패 러 랠 데스크톱을 구성 하는 방법을 보여 줍니다.

[마이크로소프트 개발자 네트워크][1] 패 러 랠 데스크톱에서 Windows를 실행 하는 방법에 대 한 일반적인 지침을 제공 합니다. Windows를 설치한 후 다음이 단계를 따르십시오.

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  패 러 랠 데스크톱에서 준비 했습니다 윈도우 8 디스크 이미지를 선택 하 고 **설정** 을 선택.

2.  **일반 → Cpu** 옵션을 선택 합니다. *2 개의* Cpu를 지정 합니다. 권장된 범위를 벗어나는 경우에 적어도 2GB의 메모리를 지정 합니다.

    ![][2]

3.  윈도우 8 가상 컴퓨터 내에서 장치 에뮬레이터 이미지를 실행할 수, **최적화** 옵션을 선택 하 고 **중첩 된 가상화** 를 사용 하도록 설정.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

이러한 단계를 완료 되 면 Windows Phone SDK를 설치할 준비가 되었습니다. 자세한 내용은 Windows Phone 8 플랫폼 설명서를 참조 하십시오.
