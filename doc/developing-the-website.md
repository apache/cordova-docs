## Developing

To work on the website and see changes live as you save, run:

    node_modules/.bin/gulp serve

That command will build the site and start a local server. To work on only the website without the docs, add the `--nodocs` flag, as follows:

    node_modules/.bin/gulp serve --nodocs

Alternatively, to dynamically rebuild the site and refresh the browser _when changes happen_ (again, optionally with the `--nodocs` flag), run:

    node_modules/.bin/gulp watch

### Next steps
When you are done with developing, you can [build and deploy](building-and-deploying-the-website.md) using the automated steps.

You can also [build](building-the-website.md) and [deploy](deploying-the-website.md) manually. In case Travis build breaks, you may want to build and deploy manually. 

### Not covered by automated build and deploy
* Travis doesn't auto pull in translation changes. Read more [here](translate.md).
* Travis doesn't update latest (7.x) from dev version of docs. You will need to do this manually using `gulp snapshot`. Read more [here](https://github.com/apache/cordova-docs/blob/master/gulpfile.js#L212).
* Travis doesn't create a new version of the docs (future 8.x). Read more [here](https://github.com/apache/cordova-docs/tree/master/doc/README/en#generating-a-version-release).

Of course, you could do all three of the above as commits. After you commit them, then Travis will do the deploy.