--
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

# Configuring VMWare Fusion

This section shows how to configure VMWare Fusion on a Mac so that
you can use Cordova to generate Windows Phone applications.

The [Microsoft Developer
Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945426)
provides general instructions for how to run Windows under VMWare
Fusion.  After installing Windows, follow these steps:

1. Within VMWare Fusion, select the Windows 8 disk image you have
   prepared and choose __Settings__.

1. Choose the __Processors & Memory__ configuration options. Make sure
   to specify _two_ processor cores, and to __Enable hypervisor
   applications in this Virtual machine__:

   ![](img/guide/platforms/wp8/vmware_memory_opts.png)

   The Windows Phone Emulator alone uses half a megabyte of memory, so
   overall you should reserve at least 2GB for VMWare.

1. Choose the __Advanced__ settings. Enable the __Preferred
   virtualization engine: Intel VT-x with EPT__ option:

   ![](img/guide/platforms/wp8/vmware_advanced_opts.png)

1. Modify the _.vmx_ file to add or modify the following settings:

        hypervisor.cpuid.v0 = "FALSE"
        mce.enable = "TRUE"
        vhv.enable = "TRUE"

Once you complete these steps, you are then ready to install the
Windows Phone SDK.  See the Windows Phone Platform Guide for details.
