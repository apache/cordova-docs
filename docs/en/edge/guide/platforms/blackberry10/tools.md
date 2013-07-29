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

# BlackBerry 10 Command-line Tools

The `cordova` command-line utility is a high-level tool that allows
you to build applications across several platforms at once. An older
version of the Cordova framework provides sets of command-line tools
specific to each platform. To use them as an alternative to the CLI,
you need to download this version of Cordova from
[cordova.apache.org](http://cordova.apache.org). The download contains
separate archives for each platform. Expand the platform you wish to
target. The tools described here are typically available in the
top-level `bin` directory, otherwise consult the __README__ file for
more detailed directions.

If you need help with any command listed below, type the command along
with the `-h` or `-help` arguments, which are supported by all
commands and which provide descriptions for each of the available
arguments.

## create

The 'create' command creates a new project:

    bin/create <path-to-project> <project-package> <project-name>

where

- '<path-to-project>' specifies the directory you want the project created in

- '<project-package>' specifies a reverse domain style identifier

- '<project-name>' specifies the apps display name

*Note*: the create command bootstraps dependency installation through the 'npm install' command. Depending on installation directory and system permissions, this may require admin privileges.
If a problem is encountered on OSX/Linux, run 'sudo npm install' before using the create command. On Windows, run 'npm install' in a command line utility opened with admin privileges.

## target

The `target` command allows you to manage the BlackBerry device(s) or
emulator that you will use to test your app. You can add or remove a
target, or set a target as the default target.

### Add a target

    <path-to-project>/cordova/target add <name> <ip-address> [-t | --type <device | simulator>] [-p | --password <password>] [--pin <device-pin>]

where

- `<name>` specifies a unique name for the target.

- `<ip-address>` specifies the ip address of the BlackBerry device or
  simulator.

- `-p | --password <password>` specifies the password for the device or
  emulator. This is required only if the device or emulator is
  password protected.

- `--pin <device-pin>` specifies the PIN of the BlackBerry device,
  which identifies that device as a valid host for the debug
  token. This argument is required only if you are creating a debug
  token.

### Remove a target

    <path-to-project>/cordova/target remove <name>

### Set a target as the default

    <path-to-project>/cordova/target default <name>

## build

The `build` command builds the project as a .bar file. You can build
your app in either release mode (which produces a signed .bar file) or
in debug mode (which produces an unsigned .bar file).

### Build your project in release mode

    <path-to-project>/cordova/build release [-k | --keystorepass <password>] [-b | --buildId <number>] [-p | --params <params-JSON-file>]

where

-   `-k | --keystorepass <password>`  specifies the password you defined when you configured your computer to sign applications.

-   `-b | --buildId <number>`  specifies the build version number of your application. Typically, this number should be incremented from the previous signed version. This argument is optional.

-   `-p | --params <params-JSON-file>`  specifies a JSON file containing additional parameters to pass to downstream tools. This argument is optional.

### Build your project in debug mode

    <path-to-project>/cordova/build debug [<target>] [-k | --keystorepass <password>] [-p | --params <params-JSON-file>]  [-ll | --loglevel <error|warn|verbose>]

where

- `<target>` specifies the name of a previously added target. If
  `<target>` is not specified, the default target is used, if one has
  been created. This argument is only required if you want the script
  to deploy your app to a BlackBerry device or emulator and you have
  not created a default target. Additionally, if `<target>` is a
  device, then that device must be connected to your computer by USB
  connection or be connected to the same Wi-Fi network as your
  computer.

- `-k | --keystorepass <password>` specifies the password you defined
  when you configured your computer to sign applications. This
  password is also used to create your debug token. This argument is
  only required if you want the script to create and install the debug
  token for you.

- `-p | --params <params-JSON-file>` specifies a JSON file containing
  additional parameters to pass to downstream tools.

- `-ll | --loglevel <level>` specifies the log level. The log level may
  be one of `error`, `warn`, or `verbose`.

If you have previously defined a default target (and previously
installed a debug token, if that target is a BlackBerry device), you
can run the script with no arguments, and the script will package your
app and deploy it to the default target. For example:

    <path-to-project>/cordova/build debug

## run

The `run` command deploys the app on the specified BlackBerry device
or an emulator. Before deploying your app, you must first create a
target for the device or emulator you want to deploy your app to using
the target script. The deploy script will deploy the most recent build of your app.

    <path-to-project>/cordova/run <target>

where

- `<target> `specifies the name of a previously added target. If
  `<target> `is a device, then that device must be connected to your
  computer by USB connection or be connected to the same Wi-Fi network
  as your computer.

## plugin

The `target` command allows you to add and remove plugins

### Fetch a locally hosted plugin

    <path-to-project>/cordova/plugin fetch <path-to-plugin>

### View a list of installed plugins

    <path-to-project>/cordova/plugin ls

### Add a plugin

    <path-to-project>/cordova/plugin add <name>

### Remove a plugin

    <path-to-project>/cordova/plugin rm <name>
