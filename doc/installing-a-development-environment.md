## Installing

The development environment setup requires installation of the following software:

1. Ruby - Needed by Jekyll. Jekyll is the static site generator that generates the website and docs.
1. Node.js - Needs to be installed in order to install all the required development and JavaScript dependencies.
1. Python - Neeeded by Jekyll dependencies like Pygments.

### Mac OS X

#### Ruby

Install Homebrew from [this site][homebrew], and then run:

    brew install ruby@2.0

#### Node.js

Go to [this site][nodejs], and click the "Install" button. Then run the downloaded file and follow the on-screen instructions. Make sure that the option to **install NPM** is enabled, if you see one.

#### Python

Mac OS X comes with Python 2.7 pre-installed. Else, follow these steps:

1. Download [this installer][python_installer_mac] from [this page][python_downloads].
2. Run the downloaded file.

### Windows

#### Ruby

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

#### Node.js

Go to [this site][nodejs], and click the "Install" button. Then run the downloaded file and follow the on-screen instructions. Make sure that the option to **install NPM** is enabled, if you see one.

#### Python

Follow these steps:

1. Download [this installer][python_installer_windows] from [this page][python_downloads].
2. Run the downloaded file.
   1. Use the default installation path
   1. Make sure the **'add executable to path'** option is checked.

### Linux

#### Ruby

Run the commands from [this site][ruby_linux] that apply to your Linux distribution.

#### Node.js

Follow the instructions on [this site][linux_node].

#### Python

The latest version of CentOS, Fedora, Redhat Enterprise (RHEL) and Ubuntu come with Python 2.7 pre-installed. Else, follow the steps from [this site][python_linux].

### Check Installations

#### Verify Ruby

Ruby 2.0 is required to build the docs. NOTE: *The docs will not build with Ruby 1.8, 1.9 or 2.4.* 

Verify your Ruby installation by running:

    ruby --version

#### Verify Node.js

Verify your Node.js installation by running:

    node --version
    npm --version

#### Verify Python

Python 2.7 is also required to build the docs. NOTE: *The docs will not build with Python 3.0 or greater.*

Verify your Python installation by running:

    python --version

The version must be 2.7.x.

### Local repo setup

Clone the [cordova-docs] GitHub repo to a local folder.

### Dependencies

#### Ruby

Once Ruby and Node.js are installed, navigate to local repo folder and install Ruby dependencies by running:

    gem install bundler
    bundle install --path ./ruby_modules

This will install the required Ruby Gems locally into a subfolder called `ruby_modules` in your repo folder. On some systems, the above commands need to be prefixed with `sudo`. Similarly on Windows, the `cmd` window in which those commands are to be run might need to have been "Run as Administrator."

#### JavaScript

Finally, install Node.js and JavaScript dependencies by running:

    npm install

### Troubleshooting

#### SSL certificate issue while executing `gem install bundler` on Windows

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
[cordova-docs]: https://github.com/apache/cordova-docs
[GlobalSignRootCerficateAuthority]: https://raw.githubusercontent.com/rubygems/rubygems/master/lib/rubygems/ssl_certs/index.rubygems.org/GlobalSignRootCA.pem