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

# Obtaining Cordova

There are two paths to obtaining Cordova: npm-install, and downloading
the source code.

Using npm-install is the preferred method, as it is an automated download
of the packages that have already been built.

Using the downloaded source code is substantially more effort than using
npm-install, and is not the preferred method for a normal user. However, it
enables you to make local changes to the source code and to have fine control
over the content you are using.

Both paths are described below.

A third path not described here is to use a downstream distribution of Cordova.
Please consult the documentation of the downstream distribution for following
that path.

## Prerequisites

* [Node.js](http://nodejs.org/)
* SDKs for each desired platform (see Platform Guides)

## Using npm-install

Since the Cordova CLI is implemented in Node.js, it is available in an npm
repository. The following command will download and install the latest version
of the Cordova CLI and all its dependencies using the npm utility in Node.js:

        $ npm install -g cordova

Using the Cordova CLI will enable you to easily download and install the
additional enablement for platforms (Android, iOS, etc) and plugins.

On Unix-based workstations, prefixing the "npm" command with "sudo" may be
required to install development utilities in restricted directories.

To see the list of all published versions of the Cordova CLI available for
download and install, run the command:

        $ npm view cordova versions

And to install a specific version of the Cordova CLI other than the latest,
append an '@' symbol and one of the versions listed by npm-view:

        $ npm install -g cordova@3.1.0-0.2.0

At this point you can install platform enablement as described in the
Platform Guides, and you can install plugins as described in
The Command-line Interface.

If you wish to uninstall the Cordova CLI, for example to reinstall a different
version, that can be done with npm-uninstall:

        $ npm uninstall -g cordova

Upon uninstall, no version needs to be specified because only one version can
be installed at a time.

## Using the Downloaded Source

This path assumes that you want to use the Cordova content only from an
official apache.org download site, and not the npm-based repositories
described above.

The source zips are available from
[cordova.apache.org](http://cordova.apache.org/#download) for the most recent
version and older archived versions. First, you should download the source zip
from that location.

<!-- expand this section later
...and download the OpenPGP key from that location.
Since you are downloading from a mirror site, it is recommended that first you
check the authenticity of the source zip by validating its signature.
(note to self: see [http://httpd.apache.org/dev/verification.html] as an example)
-->

Next, unzip the single cordova src zip. It should create several other zips:

        $ unzip cordova-3.1.0-src.zip
        Archive:  cordova-3.1.0-src.zip
           creating: cordova-3.1.0/
          inflating: cordova-3.1.0/changelog
         extracting: cordova-3.1.0/cordova-android.zip
         extracting: cordova-3.1.0/cordova-app-hello-world.zip
         extracting: cordova-3.1.0/cordova-blackberry.zip
         extracting: cordova-3.1.0/cordova-cli.zip
         extracting: cordova-3.1.0/cordova-docs.zip
         extracting: cordova-3.1.0/cordova-firefoxos.zip
         extracting: cordova-3.1.0/cordova-ios.zip
         extracting: cordova-3.1.0/cordova-js.zip
         extracting: cordova-3.1.0/cordova-mobile-spec.zip
         extracting: cordova-3.1.0/cordova-windows.zip
         extracting: cordova-3.1.0/cordova-wp8.zip
          inflating: cordova-3.1.0/LICENSE
          inflating: cordova-3.1.0/NOTICE
          inflating: cordova-3.1.0/README.md
         extracting: cordova-3.1.0/VERSION

Now unzip each of the embedded zips:

        $ cd cordova-3.1.0
        $ for FILE in *.zip
        > do
        > unzip $FILE
        > rm $FILE
        > done

Next your choice is to use the Web Project Dev workflow (CLI), or the Native
Platform dev workflow. Web Project Dev the recommended workflow, though it is 
substantially more complex to install. Both are described below.

### Web Project Dev Workflow (CLI)

Before the CLI is installed, we need to modify its dependencies to use the
cordova-plugman that comes in the source zip you downloaded previously, instead
of downloading a different plugman from an npm repository. Edit the file
cordova-cli/package.json. There are two changes to make in this file. First,
in the "dependencies" JSON object, delete the line for plugman
(the version number may be different than what appears here, and is shown
here only to provide context):

        "plugman": "0.12.x",

Second, after the "devDependencies" section and before the "author" section,
add a new section titled "bundledDependencies", so that it looks like this next
to the "devDependencies" and "author" sections (the version number may be
different than what appears here, and is shown here only to provide context):

        "devDependencies": {
          "jasmine-node": "1.8.x"
        },
        "bundledDependencies": [
          "plugman"
        ],
        "author": "Anis Kadri",

Save this file and exit your editor.

Next, install cordova-plugman and its prerequisites into the cordova-cli
directory.

        $ cd cordova-cli
        $ npm install ../cordova-plugman

The last part to installing the CLI is to put it in the global space on
your workstation along with its dependencies.

        $ cd ..
        $ npm install -g cordova-cli

Note that the npm-instal steps above will download third-party prerequisite
Node.js libraries for cordova-plugman and cordova-cli. These third-party
Node.js libraries are not included in the source zips available from
apache.org.  Internet access to the npm repositories is required to download
and install these third-party Node.js libraries.

Next, create your project. The example invocation below will create a directory
named "hello" in your home directory /Users/me, and in it will be a project
named "HelloWorld" with a package/id name "com.example.hello"

        $ cd /Users/me
        $ cordova create hello com.example.hello HelloWorld

Now to get the CLI to fetch the platforms from your local directory instead
of the network repository, you need to extend the project configuration
telling the CLI which local directory to fetch the platforms from. In your
project directory "hello", edit the config.json file in the .cordova
subdirectory. (This subdirectory may be hidden because its name begins with a
period.) After the "id" and "name" JSON objects which should already
exist in that file, add the "lib" JSON object so that each platform points to
the local directory where you unzipped the platform files above
(cordova-android, cordova-ios, etc).  The following example assumes the
project id and name that was used above in the "create" command, and that your
unzip location is /Users/me/Downloads/cordova-3.1.0 :

        {
          "id":"com.example.hello",
          "name":"HelloWorld",
          "lib": {
            "android": {
              "uri": "/Users/me/Downloads/cordova-3.1.0/cordova-android",
              "version": "3.1.0",
              "id": "cordova-android"
            },
            "ios": {
              "uri": "/Users/me/Downloads/cordova-3.1.0/cordova-ios",
              "version": "3.1.0",
              "id": "cordova-ios"
            }
          }
        }

Continue adding platforms to the "lib" JSON object in the config.json file
for each platform you desire. Note the comma between each of the platform
JSON objects. You must use specific keywords to reference the platforms, and
that list of available platform keywords may be obtained by running the command:

        $ cordova platform list

After you have saved the config.json file, now you can add a platform to
your project, and the local unzipped content will be used instead of being
fetched from the network repository:

        $ cordova platform add android

Continue adding the additional platforms you desire with the "cordova platform
add" command.

Lastly, desired plugins can be added to the project. When using the CLI to add a
plugin, you can specify the local directory where the unzipped plugin is
located:

        $ cordova plugin add ../Downloads/cordova-3.1.0/cordova-plugin-device

Continue adding the additional plugins you desire.

(need to include plugman and each of the plugins in the release snapshot)
(should tag the CLI, plugman, and the plugins with a cadence version)

### Native Platform Dev Workflow

Using the Native Platform workflow doesn't require any extra effort,
other than installing cordova-plugman:

        $ npm install -g cordova-plugman

From this point, the only difference from the Native Platform Dev Workflow 
documentation is that the folder names are slightly different: cordova-ios
instead of ios, cordova-android instead of android, etc.

