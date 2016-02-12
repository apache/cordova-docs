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

title: Windows Packaging
---

# Signing an App

You can learn more about signing and packaging of Windows Store Apps on [MSDN][1].

To be able to correctly package and sign Windows apps there are few things required:

- A signing certificate
- Identity details matching the provided signing certificate

In Windows project, identity details are kept in a file named package.appxmanifest. This file is automatically populated every time a Cordova app is built. Identity holds 3 important fields.

- Name
- Publisher
- Version

*Name* and *Version* can be set from **config.xml**. *Publisher* can be provided as a build parameter or can be set on **build.json** file.

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

A signing certificate can be provided from either CLI or through build.json file. The certificate related CLI flags are:

| Parameter             | Flag              | Description
|-----------------------|-------------------|-----------------------------------
| Certificate File      | `--packageCertificateKeyFile`      | Path to the package signing certificate to be associated with the app
| Thumb Print           | `--packageThumbprint`              | Used to validate the authenticity of package certificate key file. When creating a certificate key file, this value will be provided to the end user

Example:
```
cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`
```

Alternatively, these values could be specified using a build configuration file (build.json) using CLI (--buildConfig). A sample build configuration file:

    {
        "windows": {
            "debug": {
                "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
            },
            "release": {
                "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
                "packageThumbprint": "ABCABCABCABC123123123123",
                "publisherId": "CN=FakeCorp.com, L=Redmond, S=Washington, C=US"
            }
        }
    }

There is also support to mix and match command line arguments and parameters in build.json file. Values from the command line arguments will get precedence.

## Creating a certificate key
Signing is required for distributing and installing Windows Store apps. This process is normally handled by Visual Studio when you deploy a package for release. To do this without Visual Studio we need to create our own certificates. [This](https://msdn.microsoft.com/en-us/library/windows/desktop/jj835832(v=vs.85).aspx) article has instructions on how to do that.
 
Once you have the pfx file created and provided to build.json file, you might get the following error: "The key file may be password protected. To correct this, try to import the certificate manually into the current user's personal certificate  store.". In order to import it you have to use [certutil][2] from an admin prompt:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Where:

- user : Specifies "current user" personal store
- p : Password for pfx file
- importPfx : Name of pfx file

Once installed, next step is to add packageThumbprint and packageCertificateKeyFile to build.json. In order to find the packageThumbprint, search for the CommonName you've associated with the certificate:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

Once these final values are provided. Cordova should successfully package and sign the app.

[1]: https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx
[2]: https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx
