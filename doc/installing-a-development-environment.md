## Installing

The development environment requires:

1. Ruby 3.4.x and Bundler - needed by Jekyll, which generates the website and docs.
2. Node.js and npm - needed for the build tools and JavaScript dependencies. The workflows use Node.js 24.x; see `package.json` for the minimum supported version.

### macOS

Install [Homebrew][homebrew], then install Ruby 3.4:

    brew install ruby@3.4

Add its executables to your shell's `PATH` before any other Ruby installation:

    export PATH="$(brew --prefix ruby@3.4)/bin:$PATH"

Add that line to your shell startup file to keep the setting in new terminals.
Install Node.js 24.x from [nodejs.org][nodejs].

### Windows

Download a **Ruby+Devkit 3.4.x** installer from [RubyInstaller][ruby_downloads].
Enable the option to add Ruby executables to `PATH` and complete the MSYS2 development toolchain installation when prompted. This toolchain is needed to compile native gem extensions.

Install Node.js 24.x from [nodejs.org][nodejs], including npm.
Open a new terminal after installing Ruby and Node.js.

### Linux

Install Ruby 3.4.x using a version manager or the appropriate method from the [Ruby installation guide][ruby_linux]. Include the development tools needed to compile native gem extensions.

Install Node.js 24.x using the instructions on [nodejs.org][nodejs].

### Check Installations

Verify that the active Ruby version is 3.4.x:

    ruby --version

Verify Node.js and npm:

    node --version
    npm --version

### Local Repository Setup

Clone the [cordova-docs] repository and navigate to its directory.

### Dependencies

Install Bundler and the Ruby dependencies:

    gem install bundler
    bundle config set --local path ./ruby_modules
    bundle install

This installs the gems into `ruby_modules` in the repository. The local Bundler configuration is stored in `.bundle/config`; both directories are ignored by Git.

Install the locked JavaScript dependencies:

    npm ci

### Verify The Setup

Run the checks and development build:

    npm test
    npm run build

To build the full site as the deployment workflows do, run:

    npm run build:prod

### Troubleshooting

If `ruby --version` reports another version, check the order of Ruby installations in `PATH` and open a new terminal after updating your shell configuration.

If gem installation fails with a compiler error, check that your platform's development toolchain is installed. Use a Ruby installation writable by your user to avoid needing administrator privileges for gem installation.

[ruby_linux]: https://www.ruby-lang.org/en/documentation/installation/
[homebrew]: https://brew.sh/
[ruby_downloads]: https://rubyinstaller.org/downloads/
[nodejs]: https://nodejs.org/
[cordova-docs]: https://github.com/apache/cordova-docs
