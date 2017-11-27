#!/bin/sh
# This is a comment!
echo Hello World        # This is a comment, too!
echo $TRAVIS_BRANCH
echo $svn_username
echo $svn_pass

if [ $svn_pass ] && [ $TRAVIS_BRANCH = "master" ]
then
	echo helloooo
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
	npm test
	echo goodbyeeeee
fi
