* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. NOTICE 파일 저작권 소유권에 관한 자세한 내용은이 작업 배포를 참조 하십시오. ASF 라이센스 아파치 라이센스 버전 2.0 ("라이센스");이 파일 당신이 라이선스 준수를 제외 하 고이 파일을 사용할 수 없습니다. 라이센스의 복사본을 얻을 수 있습니다.

           http://www.apache.org/licenses/LICENSE-2.0 적용 가능한 법률에 의해 요구 또는 서 면으로 동의 하지 않는 한 소프트웨어 라이선스 하에 배포에 배포 되는 "있는 그대로" 기준, 보증 또는 조건 어떤 종류의 없이, 명시적 또는 묵시적.  라이센스 권한 및 제한 적용 되는 특정 언어에 대 한 참조
    

## 라이센스.

# Vm 웨어 퓨전을 구성

이 섹션에는 코르도바를 사용 하 여 Windows Phone 응용 프로그램을 생성 하는 Mac에서 vm 웨어 퓨전을 구성 하는 방법을 보여 줍니다.

[마이크로소프트 개발자 네트워크][1] 는 vm 웨어 퓨전에서 Windows를 실행 하는 방법에 대 한 일반적인 지침을 제공 합니다. Windows를 설치한 후 다음이 단계를 따르십시오.

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  Vm 웨어 퓨전, 선택 윈도우 8 디스크 이미지를 준비 하 고 **설정** 을 선택.

2.  **프로세서 및 메모리** 구성 옵션을 선택 합니다. *두 개의* 프로세서 코어를 지정 해야 및 **이 가상 머신에서 하이퍼바이저**응용 프로그램:
    
    ![][2]
    
    Windows Phone 에뮬레이터 혼자 전체 vm 웨어에 대 한 최소 2 GB를 보유 해야 절반 메가 바이트의 메모리를 사용 합니다.

3.  **고급** 설정을 선택 합니다. 활성화는 **기본 가상화 엔진: EPT와 인텔 VT x** 옵션:
    
    ![][3]

4.  수정 *.vmx* 파일을 추가 또는 다음 설정을 수정 합니다.
    
        hypervisor.cpuid.v0 = "FALSE" mce.enable = "TRUE" vhv.enable = "TRUE"
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

이러한 단계를 완료 하면 일단 준비가 다음 Windows Phone SDK를 설치 합니다. 자세한 내용은 Windows Phone 플랫폼 설명서를 참조 하십시오.