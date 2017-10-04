## Troubleshooting

### Error: EMF, too many open files

Increase the maximum number of open files on the system:

    ulimit -n 10480

### Error: spawn ENOENT

Run:

    gulp clean

### Permission issues during Ruby install

You could try a different method to install Ruby. Checkout [rbenv](https://github.com/sstephenson/rbenv). Instructions:

1. Install rbenv

        brew install rbenv ruby-build

2. Add `eval "$(rbenv init -)"` to the end of your `.bash_profile`:

        echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

3. Install a version of `ruby` and set it to your local version:

        rbenv install 2.0.0-p647
        rbenv local 2.0.0-p647

### Other Problems

Please ask for help on the Slack channel. Join at [slack.cordova.io](http://slack.cordova.io)