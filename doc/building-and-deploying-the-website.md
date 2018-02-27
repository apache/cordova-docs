## Building and Deploying (Automated)

[Travis] automatically builds and publishes commits to `master` of this repository, so either merged Pull Requests or direct commits. 

In [`.travis.yml`](../.travis.yml), Travis installs the required dependencies and then runs `buildAndDeploy.sh`. This script runs the build script (`npm run-script build`, which runs `gulp build --prod`) and then then uses [SVN] to update, copy, add, and commit the new changes over to the website SVN repository. 

You can read more about the individual steps [here](deploying-the-website.md).

Travis also runs `npm test` and will notify you if any of your `eslint` or `mocha` tests are failing.

**NOTE**: Committing to Travis might take a while (up to 1 hour), depending on the number of files changed.

[Travis]: https://travis-ci.org/
[SVN]: http://svnbook.red-bean.com/en/1.7/svn.intro.quickstart.html
