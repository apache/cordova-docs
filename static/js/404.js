(function () {

    // regexes as strings
    // NOTE:
    //      these patterns should NOT contain capturing groups (parentheses)
    //      because they might be combined with other regexes
    var DOCS_VERSION_PATTERN      = "(?:[\\d\\.]+x?|dev|latest)";
    var DOCS_LANGUAGE_PATTERN     = "\\w\\w(?:-\\w\\w)?";
    var DOCS_VERSION_PATH_PATTERN = "docs\\/" + DOCS_LANGUAGE_PATTERN + "\\/" + DOCS_VERSION_PATTERN;

    function splitDocsURL(url) {
        var splitPattern = new RegExp("(" + DOCS_VERSION_PATH_PATTERN + ")");
        return url.split(splitPattern);
    }

    function transformOldURL(oldURL) {
        var splitURL = splitDocsURL(oldURL);

        var baseURL       = splitURL[0];
        var versionString = splitURL[1];
        var pageExtension = splitURL.slice(2).join("");

        // get rid of the fragment and replace underscores with slashes
        // also remove the ".md" extension
        pageExtension = pageExtension.split("#")[0];
        pageExtension = pageExtension.replace(".md", "");
        pageExtension = pageExtension.replace(/_/g, "/");

        // undo special cases of paths that really do contain underscores
        // NOTE:
        //      this list is complete; in the pre-migration docs, no other
        //      directories or files contained underscores
        pageExtension = pageExtension.replace("config/ref", "config_ref");
        pageExtension = pageExtension.replace("plugin/ref", "plugin_ref");
        pageExtension = pageExtension.replace("display/name", "display_name");
        pageExtension = pageExtension.replace("platform/plugin/versioning/ref", "platform_plugin_versioning_ref");

        return baseURL + versionString + pageExtension;
    }

    function getDevURL(url) {
        var replaceWhat = new RegExp("docs\\/(" + DOCS_LANGUAGE_PATTERN + ")\\/" + DOCS_VERSION_PATTERN);
        var replaceWith = "docs/$1/dev";
        return url.replace(replaceWhat, replaceWith);
    }

    function getRootURL(url) {
        var splitURL      = splitDocsURL(url);
        var baseURL       = splitURL[0];
        var versionString = splitURL[1];

        return baseURL + versionString + "/";
    }

    function isDocsURL(url) {
        var testPattern = new RegExp(DOCS_VERSION_PATH_PATTERN);
        return testPattern.test(url);
    }

    function showNewRedirect(url) {
        $("#new-redirect-link").attr("href", url);
        $("#not-found-redirect-alert").css("display", "block");
    }

    function showDevRedirect(url) {
        $("#dev-redirect-link").attr("href", url);
        $("#no-version-redirect-alert").css("display", "block");
    }

    function showRootRedirect(url) {
        $("#root-redirect-link").attr("href", url);
        $("#no-page-redirect-alert").css("display", "block");
    }

    function main() {

        var url = window.location.href;

        if (!isDocsURL(url)) {
            return;
        }

        // get related URLs
        var rootURL = getRootURL(url);
        var devURL = getDevURL(url);
        var newURL  = transformOldURL(url);

        // try the root URL
        $.ajax({
            url: rootURL,
            statusCode: {

                // if the root exists, check if the new URL exists
                200: function () {
                    $.ajax({
                        url: newURL,
                        statusCode: {

                            // redirect to the new URL if it exists
                            200: function () {
                                showNewRedirect(newURL)
                            },

                            // if the new URL doesn't exist, redirect to root
                            404: function() {
                                showRootRedirect(rootURL)
                            }
                        }
                    });
                },

                // if root doesn't exist, assume that the version
                // is invalid and redirect to dev
                404: function () {
                    showDevRedirect(devURL)
                }
            }
        });
    }

    main();
}());
