(function () {
    var DOCS_VERSION_PATTERN = /(docs\/..\/[\d\.edge]+)/;

    function transformOldURL(oldURL) {
        var splitURL = oldURL.split(DOCS_VERSION_PATTERN);

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

    function getEdgeURL(url) {
        return url.replace(/docs\/(..)\/([\d\.edge]+)/, 'docs/$1/edge');
    }

    function getRootURL(url) {
        var splitURL      = url.split(DOCS_VERSION_PATTERN);
        var baseURL       = splitURL[0];
        var versionString = splitURL[1];

        return baseURL + versionString;
    }

    function isDocsURL(url) {
        return DOCS_VERSION_PATTERN.test(url);
    }

    function tryURL(url, responseMap) {
        $.ajax({url: url, statusCode: responseMap});
    }

    function showNewRedirect(url) {
        $("#new-redirect-link").attr("href", url);
        $("#not-found-redirect-alert").css("display", "block");
    }

    function showEdgeRedirect(url) {
        $("#edge-redirect-link").attr("href", url);
        $("#no-version-redirect-alert").css("display", "block");
    }

    function main() {

        var url = window.location.href;

        if (!isDocsURL(url)) {
            return;
        }

        // get related URLs
        var rootURL = getRootURL(url);
        var edgeURL = getEdgeURL(rootURL);
        var newURL  = transformOldURL(url);

        // try the root URL
        $.ajax({
            url: rootURL,
            statusCode: {

                // if the root exists, before offering the new
                // URL, also check if it exists
                200: function () {
                    $.ajax({
                        url: newURL,
                        statusCode: {
                            200: function () {
                                showNewRedirect(newURL)
                            }
                        }
                    });
                },

                // if it doesn't exist, assume that the version is invalid
                404: function () {
                    showEdgeRedirect(edgeURL)
                }
            }
        });
    }

    main();
}());
