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

title: Installation
description: Installing Cordova CLI
toc_title: Installation
---

# Installation

The Cordova command-line tool (CLI) is distributed as an npm package. 

To install the `cordova` CLI tool, follow these steps:

1. Download and install [Node.js](https://nodejs.org/en/download/). On installation you should be able to invoke `node` and `npm` on your line.

2. (Optional) Download and install a [git client](http://git-scm.com/downloads), if you don't already have one. Following installation, you should be able to invoke the `git` command in your command promt (terminal). The Cordova cli and npm invokes the git command when download assets that were referenced with a git repo url.

3. Install the `cordova` module using `npm` utility of Node.js. The `cordova` module will automatically be downloaded by the `npm` utility.

   - on macOS and Linux:

      ```bash
      npm install -g cordova
      ```

      For macOS and Linux users, you might need to use the `sudo` prefix when running the `npm` command to install this utility in restricted directories like `/usr/local/share`. However, if you are using the optional nvm/nave tool or have write access to the installation directory, you may be able to omit the `sudo` prefix.

      It is also worth noting that it is generally recommended to avoid using `sudo` with `npm` to prevent potential issues with permissions and package installations.

      Instead, it's recommended to use a version manager like nvm (Node Version Manager) or nave to manage Node.js and npm installations, which typically avoids the need for `sudo` when installing packages.

   - on Windows:

      ```bash
      C:\>npm install -g cordova
      ```

   The `-g` flag above tells `npm` to install `cordova` globally. Otherwise it will be installed in the `node_modules` subdirectory of the current working directory.

   Following installation, you should be able to run `cordova` on the command line with no arguments and it should print help text.

## Requirements and Support

<table>
    <thead>
        <tr>
            <th>Cordova CLI Version</th>
            <th>Node.js Supported Version</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>13.x</td>
            <td>>=20.17.0</td>
        <tr>
            <td>12.x</td>
            <td>>=16.13.0</td>
        </tr>
        <tr>
            <td>11.x</td>
            <td>>=12.0.0</td>
        </tr>
        <tr>
            <td>10.x</td>
            <td>>=10.0.0</td>
        </tr>
        <tr>
            <td>9.x</td>
            <td>>=6.0.0</td>
        </tr>
    </tbody>
</table>
