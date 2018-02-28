## Installing

### Ruby

Ruby 2.0 is required to build the docs. NOTE: *The docs will not build with Ruby 1.8, 1.9 or 2.4.*

#### Mac OS X

Install Homebrew from [this site][homebrew], and then run:

    brew install ruby@2.0

#### Windows

Follow these steps:

1. Download [this installer][ruby_installer] from [this page][ruby_downloads].
2. Run the downloaded file.
    1. Use the default installation path (usually `C:\Ruby22`).
    1. Make sure the **'add executable to path'** option is checked.
3. Download [this Ruby DevKit self-extracting archive][ruby_devkit] from the [same website][ruby_downloads].
4. Run the downloaded file.
    1. Use the following extraction path: `C:\Ruby22DevKit`.
5. Open `cmd.exe`.
    1. Go to the extraction path:

            cd C:\Ruby22DevKit
    1. Run these commands (following any instructions they give):

            ruby dk.rb init
            ruby dk.rb install
    1. Close `cmd.exe`.

#### Linux

Run the commands from [this site][ruby_linux] that apply to your Linux distribution.

#### Verify Ruby

Verify your Ruby installation by running:

    ruby --version

### Python

Python 2.7 is also required to build the docs. NOTE: *The docs will not build with Python 3.0 or greater.*

#### Mac OS X

Mac OS X comes with Python 2.7 pre-installed. Else, follow these steps:

1. Download [this installer][python_installer_mac] from [this page][python_downloads].
2. Run the downloaded file.

#### Windows

Follow these steps:

1. Download [this installer][python_installer_windows] from [this page][python_downloads].
2. Run the downloaded file.
   1. Use the default installation path
   1. Make sure the **'add executable to path'** option is checked.

#### Linux

The latest version of CentOS, Fedora, Redhat Enterprise (RHEL) and Ubuntu come with Python 2.7 pre-installed. Else, follow the steps from [this site][python_linux].

#### Verify Python

Verify your Python installation by running:

    python --version

The version must be 2.7.x.

### Node.js

#### Mac OS X &amp; Windows

Go to [this site][nodejs], and click the "Install" button. Then run the downloaded file and follow the on-screen instructions. Make sure that the option to **install NPM** is enabled, if you see one.

#### Linux

Linux, follow the instructions on [this site][linux_node].

#### Verify Node.js

Verify your Node.js installation by running:

    node --version
    npm --version

### Local repo setup

Clone the [cordova-docs] github repo to the local folder

### Dependencies

#### Ruby

Once Ruby and Node.js are installed, navigate to local repo folder and install Ruby dependencies by running:

    gem install bundler
    bundle install --path ./ruby_modules

This will install the required Ruby Gems locally into a subfolder called `ruby_modules` in your repo folder. On some systems, the above commands need to be prefixed with `sudo`. Similarly on Windows, the `cmd` window in which those commands are to be run might need to have been "Run as Administrator."

#### JavaScript

Finally, install Node.js and JavaScript dependencies by running:

    npm install

### Make (optional)

The website can be built with Gulp or Make. The Gulp workflow is enabled by just installing all the JavaScript dependencies. The Make workflow usually allows for faster builds, but requires installation of the `make` tool.

#### Windows

Make can be installed on Windows from [this page][make_page] by downloading the [setup tool][make_setup] and running it.

#### Mac OS X

Make comes with the Xcode Command Line Tools. To install them, run:

    xcode-select --install

#### Linux

Make is installed by default on Linux.

#### Verify make

Verify your make installation by running:

    make --version


### Troubleshooting

#### SSL certificate issue while executing 'gem install bundler' command in Windows

Try copying the certificate from [GlobalSignRootCerficateAuthority] into `C:\Ruby22\lib\ruby\2.2.0\rubygems\ssl_certs` folder

#### Permission issues during Ruby install

You could try a different method to install Ruby. Checkout [rbenv](https://github.com/sstephenson/rbenv). Instructions:

1. Install rbenv

        brew install rbenv ruby-build

2. Add `eval "$(rbenv init -)"` to the end of your `.bash_profile`:

        echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

3. Install a version of `ruby` and set it to your local version:

        rbenv install 2.0.0-p647
        rbenv local 2.0.0-p647


[ruby_linux]: https://www.ruby-lang.org/en/documentation/installation/#package-management-systems
[homebrew]: http://brew.sh/
[linux_node]: https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories#installing-node-js-v0-12
[ruby_downloads]: http://rubyinstaller.org/downloads/
[ruby_installer]: http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.2.3.exe
[ruby_devkit]: http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe
[nodejs]: https://nodejs.org/
[python_downloads]: https://www.python.org/downloads/release/python-2711/
[python_installer_mac]: https://www.python.org/ftp/python/2.7.11/python-2.7.11-macosx10.6.pkg
[python_installer_windows]: https://www.python.org/ftp/python/2.7.11/python-2.7.11.amd64.msi
[python_linux]: http://docs.python-guide.org/en/latest/starting/install/linux/
[make_page]: http://gnuwin32.sourceforge.net/packages/make.htm
[make_setup]: http://gnuwin32.sourceforge.net/downlinks/make.php
[cordova-docs]: https://github.com/apache/cordova-docs
[GlobalSignRootCerficateAuthority]: https://raw.githubusercontent.com/rubygems/rubygems/master/lib/rubygems/ssl_certs/index.rubygems.org/GlobalSignRootCA.pem