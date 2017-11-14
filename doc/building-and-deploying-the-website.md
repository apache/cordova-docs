## Building and Deploying (Automated)

### Testing

After you are finished developing and making your changes, make sure to test them. Run:

	npm test

`npm test` runs both [eslint] and [mocha] tests. If your tests pass, commit and push your work to Github.

### Travis 

[Travis] automatically builds and publishes the website on every change. In [travis.yml](../.travis.yml), Travis  installs required dependencies and runs the build script. Travis will build the full website for you by running `gulp build --prod` under the hood. Travis also uses [SVN] to update, copy, add, and commit the new changes over to the website. Committing to svn can only occur once the commit has been merged to master. You can read more about is happening under the hood with SVN [here](deploying-the-website.md). Travis also runs `npm test` and will notify you if any of your `eslint` or `mocha` tests are failing. When Travis is done building and deploying, send a pull request and ask for a review.

**NOTE**: Committing to Travis might take a while (up to 1 hour), depending on the number of files changed.

[Travis]: https://travis-ci.org/
[eslint]: https://eslint.org/
[mocha]: https://mochajs.org/
[SVN]: http://svnbook.red-bean.com/en/1.7/svn.intro.quickstart.html