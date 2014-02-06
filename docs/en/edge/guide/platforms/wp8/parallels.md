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

# Configuring Parallels Desktop

This section shows how to configure Parallels Desktop on a Mac so that
you can use Cordova to generate Windows Phone applications.

The
[Microsoft Developer Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945424)
provides general instructions for how to run Windows under Parallels
Desktop. After installing Windows, follow these steps:

1. Within Parallels Desktop, select the Windows 8 disk image you have
   prepared, and choose __Settings__.

1. Choose the __General &rarr; CPUs__ options. Specify _two_ CPUs.
   Specify at least 2GB of memory, even if it falls outside the
   recommended range:

   ![](img/guide/platforms/wp8/parallel_cpu_opts.png)

1. To be able to run the device emulator image within the Windows 8
   virtual machine, choose the __Optimizations__ options and enable
   __Nested Virtualization__.

   ![](img/guide/platforms/wp8/parallel_optimize_opts.png)

Once you complete these steps, you are ready to install the Windows
Phone SDK.  See the Windows Phone Platform Guide for details.
