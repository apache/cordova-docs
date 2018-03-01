# Working on `www/docs`

## Pull in documentation from other repos

* Many files of the documentation come from other repos (mainly plugin READMEs) and are simply pulled together by a build script.
* `tools/bin/fetch_docs.js` (execute via `node ./tools/bin/fetch_docs.js`) has more details and `www/_data/fetched-files.yml` contains an informative list of src/dest pairs.
* This can also be executed via `gulpfile.js` task `fetch`, by running `gulp fetch` which pulls in the files to `dev/en/{file dest}`.
* Most auto-generated files have a comment tag at the top of the file to indicate that they come from elsewhere.

## Update latest (x.y) from `dev`

Normal build doesn't update latest (7.x) from dev version of docs. You will need to do this manually using `gulp snapshot`. Read more [here](https://github.com/apache/cordova-docs/blob/master/gulpfile.js#L212).

## Create new version of the docs

To increment the documentation version (e.g. `X.X.X`, either use the gulp task:

    gulp newversion --version X.X.X

or manually run the `incrementversion.js` script:

    node ./tools/bin/incrementversion.js www/docs X.X.X

To only run for a specific language (__this should only happen when translation is intentionally left out for a given version__), specify the language to the Gulp task as follows:

    gulp newversion --version X.X.X --language YY

or manually, to the script, as follows:

    node ./tools/bin/incrementversion.js www/docs X.X.X YY
