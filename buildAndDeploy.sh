#!/bin/sh
if [ $svn_pass ] && [ $BRANCH = "master" ]
then
    echo "### build, deploy, test: (branch = $BRANCH)"
    npm run-script build;
    cd ..;
    svn checkout --non-interactive --no-auth-cache --username=$svn_username --password=$svn_pass https://svn.apache.org/repos/asf/cordova/site cordova-website;
    cp -R cordova-docs/build-prod/. cordova-website/public/;
    cd cordova-website || return;
    svn status | grep "?";
    svn add --force .;
    svn --non-interactive --no-auth-cache --username=$svn_username --password=$svn_pass commit -m "Updated docs";
    cd ../cordova-docs || return;
    npm test;
else
    echo "### Build: (branch = $BRANCH)"
    npm run build;
fi
