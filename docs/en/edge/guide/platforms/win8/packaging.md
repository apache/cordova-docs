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

# Packaging of Windows Store Apps

You can learn more about signing and packaging of Windows Store Apps on [MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx).

To be able to correctly package and sign Windows apps there are few things required:

- A signing certificate
- Identity details matching the provided signing certificate

In Windows project, identity details are kept in a file named package.appxmanifest. This file is automatically populated every time a Cordova app is built. Identity holds 3 important fields.

- Name
- Publisher
- Version

*Name* and *Version* can be set from **config.xml**. *Publisher* can be provided as a build parameter or can be set on **build.json** file.

![](img/guide/platforms/win8/packaging.png)

A signing certificate can be provided from either CLI or through build.json file. The certificate related CLI flags are:

- `--packageCertificateKeyFile` : Once a package signing certificate is created, this parameter can be used to associate the certificate with the app. This flag takes a file path as an argument. Eg. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
- `--packageThumbprint` : Package thumbprint is used to validate the authenticity of package certificate key file. When creating a certificate key file, this value will be provided to the end user. Eg. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

Alternatively, these values could be specified using a build configuration file (build.json) using CLI (--buildConfig). A sample build configuration file:

	{
	    "windows": {
	        "debug": {
	            "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
	        },
	        "release": {
	            "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
	            "packageThumbprint": "ABCABCABCABC123123123123",
	            "publisherId": "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US"
	        }
	    }
	}

There is also support to mix and match command line arguments and parameters in build.json file. Values from the command line arguments will get precedence.
