## Deploying

### Automatic Deployment

See [building-and-deploying-the-website.md](building-and-deploying-the-website.md) for a description of the automated build and deploy process via Travis.

### Manual Deployment

> This section requires basic knowledge of SVN. If you do not know how to use SVN, refer to [this tutorial][svn].

To build the full website, run:

    node_modules/.bin/gulp build --prod

A folder called `build-prod` will be created, and will contain the built website. Then, in a directory *one level above* the `cordova-docs` repository, check out the SVN repository that contains the currently deployed website by running the following command (committer access required):

    cd ..
    svn checkout https://svn.apache.org/repos/asf/cordova/site cordova-website

Then, move into the `cordova-website` repository and synchronise it with the SVN server:

    cd cordova-website
    svn update

Copy the `cordova-docs/build-prod/` directory to the `public` directory in SVN like so:

    cd ..
    cp -R cordova-docs/build-prod/. cordova-website/public/

Some files will be new (`?` in SVN, and need to be `svn add`ed) and some files will be changed (`M` in SVN; no action required). To see just the `?` changes, run:

    cd cordova-website
    svn status | grep "?"

Once you are satisfied that you have added the required changes, commit with a message:

    svn commit -m "Updated docs"

**NOTE**: The commit might take a while (up to 1 hour), depending on the number of files changed.


[svn]: http://svnbook.red-bean.com/en/1.7/svn.intro.quickstart.html
