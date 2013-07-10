BlackBerry 10 Platform Guide
==================================

This guide describes how to set up your SDK development environment to
deploy Cordova apps for Blackberry 10 devices.

## Requirements and Support

The development environment is available on Windows XP (32-bit),
Windows 7 (32-bit or 64-bit), or Mac OS X 10.6.4+.

Developers should use the `cordova` utility in conjunction with the
Blackberry 10 SDK.  See The Command-line Interface for information how
to install it, add projects, then build and deploy a project.

You can use the Cordova CLI to develop Blackberry 10 projects.  For
previous versions of Blackberry, you need to use a different set of
command-line tools, described in BlackBerry Platform Guide.

## Install the SDK

The BlackBerry 10 Native SDK is available from
[developer.blackberry.com](http://developer.blackberry.com/native/download/).

Along with the SDK, you also need to register for a code signing key
and debug token.  The signing key allows you to distribute apps
through BlackBerry World. The debug token allows you to test unsigned
apps on a BlackBerry 10 emulator or device. You do not need to create
and install the debug token yourself; if you supply the keystore
password, the build script creates and installs the debug token for
you. For more information:

* [Register for your code signing key.](https://www.blackberry.com/SignedKeys/codesigning.html)

* [Set up your computer for code signing.](http://developer.blackberry.com/html5/documentation/set_up_for_signing.html)

* [Learn more about debug tokens.](http://developer.blackberry.com/html5/documentation/running_your_bb10_app_2008471_11.html)

## Create a Project

Use the `cordova` utility to set up a new project, as described in The
Cordova The Command-line Interface. For example, in a source-code
directory:

        $ cordova create hello com.example.hello "Hello World"
        $ cd hello
        $ cordova platform add blackberry
        $ cordova build

## Deploy to Emulator

To test an app either on an emulator or a device, you need to add a
_target_ to your project. Each is identified with a unique name, and
associated with an IP address.  The following associates a target
named _simu_ with _0.0.0.0_. The `-t` option specifies the `simulator`
target _type_:

        $ platforms/blackberry/cordova/target add simu 0.0.0.0 -t simulator
        $ platforms/blackberry/cordova/target default simu

## Deploy to Device

To deploy to a device, make sure it is plugged into your computer,
then run a variation of the `target` command such as this:

        $ platforms/blackberry/cordova/target add dev 0.0.0.0 -t device -p unlockme --pin 123456

The `--pin` option refers to whatever password you set up when
requesting a signing key, as described above.  The `-p` option refers
to whatever local password locks the device itself.

Full `target` syntax follows:

        $ cordova/target add <name> <ip-address> [-t <device | simulator>] [-p | --password <password>] [--pin <device-pin>]

where:

* `<name>` specifies a unique name for the target.

* `<ip-address>` specifies the ip address of the BlackBerry device or
  simulator.

* `-t <device | simulator>` specifies the target type. If not
  provided, the default value is device.

* `-p|--password <password>` specifies the password for the device or
  simulator. This is required only if the device or simulator is
  password protected.

* `--pin <device-pin>` specifies the PIN of the BlackBerry device,
  which identifies that device as a valid host for the debug
  token. This argument is required only if you are creating a debug
  token.

To remove a target:

        $ cordova/target remove <name>

To set a target as the default:

        $ cordova/target default <name>

<!--

## Building your app

To build your app, run the build script. You can build the app in
either release mode or in debug mode.

* When you build the app in release mode, you are preparing it for
  distribution through BlackBerry World. The script packages your app
  resources and plugins together in a _.bar_ file, then signs the app.

* When you build the app in debug mode, you are preparing it to be
  tested. The script packages your app resources and plugins together
  in a _.bar_ file, but does not sign it. The script can also deploy
  the app onto a previously defined target. If you have not already
  created and installed a debug token, you can supply the keystore
  password, and the build script will create and install the debug
  token for you as well.

Debug mode also enables Web Inspector for the app, which allows you to
remotely inspect the source code. A prompt displays the URL that you
can use to connect to and inspect your app. For more information on
using Web Inspector, see [Debugging using Web
Inspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

### Build your app in release mode

To build your app in release mode, type the following command:

        $ cordova/build release -k|--keystorepass <password> [-b|--buildId <number>] [-p|--params <params-JSON-file>]

where

* `-k|--keystorepass <password>` specifies the password you defined
  when you configured your computer to sign applications.

* `-b|--buildId <number>` specifies the build version number of your
  application. Typically, this number should be incremented from the
  previous signed version. This argument is optional.

* `-p|--params <params-JSON-file>` specifies a JSON file containing
  additional parameters to pass to downstream tools. This argument is
  optional.

### Build your app in debug mode

To build your app in release mode, on the command line, type the
following command:

        $ cordova/build debug [<target>] [-k|--keystorepass <password>] [-p|--params <params-JSON-file>] [-ll|--loglevel <error|warn|verbose>]

where

* `<target>` specifies the name of a previously added target. If
  `<target>` is not specified, the default target is used, if one has
  been created. This argument is only required if you want the script
  to deploy your app to a BlackBerry device or simulator and you have
  not created a default target. Additionally, if `<target>` is a
  device, then that device must be connected to your computer by USB
  connection or be connected to the same Wi-Fi network as your
  computer.

* `-k|--keystorepass <password>` specifies the password you defined
  when you configured your computer to sign applications. This
  password is also used to create your debug token. This argument is
  only required if you want the script to create and install the debug
  token for you.

* `-p|--params <params-JSON-file>` specifies a JSON file containing
  additional parameters to pass to downstream tools.

* `-ll|--loglevel <level>` specifies the log level. The log level may
  be one of `error`, `warn`, or `verbose`.

Note that all of these parameters are optional. If you have previously
defined a default target (and installed a debug token, if that target
is a BlackBerry device), you can run the script with no arguments, and
the script will package your app and deploy it to the default
target. For example:

        $ cordova/build debug

## Deploying an app

You can test your app using either a BlackBerry device or a simulator.
Before deploying your app, you must first create a target for the
device or simulator you want to deploy your app to.

The run script will first build your app. If you intend to deploy an
app to a physical device for testing, you must first install a debug
token on that device. If you specify the `--keystorepass <password>`
argument when running the run script, the script will create and
install the debug token for you. You do not need a debug token to test
your app on a simulator, even if that app is unsigned.

To deploy your app to a device or simulator, on a command line type
the following command:

        $ cordova/run <target> [--no-build]

where:

* `<target>` specifies the name of a previously added target. If
  `<target>` is a device, then that device must be connected to your
  computer by USB connection or be connected to the same Wi-Fi network
  as your computer.

* `-no--build` will use the most recently built version of the
  application rather than re-building. This is useful to test an
  application in release mode.

-->
