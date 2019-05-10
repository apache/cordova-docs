#!/usr/bin/env bash

set -e

svn_url=https://svn.apache.org/repos/asf/cordova/site

svn_q() { svn --quiet "$@"; }

svn_with_auth() {
    [ $svn_username ] && [ $svn_pass ] || {
        echo 'ERROR: No SVN credentials given in $svn_username and $svn_pass'
        exit 1
    }
    svn_q --non-interactive --no-auth-cache \
          --username="$svn_username" --password="$svn_pass" "$@"
}

echo "Deploying website and docs to $svn_url"
cd ..
svn_q checkout "$svn_url" cordova-website
cp -R cordova-docs/build-prod/. cordova-website/public/
cd cordova-website
svn_q add --force .
svn_with_auth commit -m "Updated docs"
