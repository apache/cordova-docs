
var splitUrl =  window.location.href.split(/(docs\/..\/[\d\.edge]+)/);

if(splitUrl.length > 2) {
    var baseUrl = splitUrl[0];
    var versionString = splitUrl[1];
    var pageExtension = splitUrl.slice(2).join("");

    pageExtension = pageExtension.split("#")[0];
    pageExtension = pageExtension.replace(".md", "");
    pageExtension = pageExtension.replace(/_/g, "/");
    pageExtension = pageExtension.replace("config/ref", "config_ref");
    pageExtension = pageExtension.replace("plugin/ref", "plugin_ref");
    pageExtension = pageExtension.replace("display/name", "display_name");
    pageExtension = pageExtension.replace("platform/plugin/versioning/ref", "platform_plugin_versioning_ref");

    var newUrl = baseUrl + versionString + pageExtension;

    // Try the new URL to see if it exists
    $.ajax({
        url: newUrl,
        statusCode: {
            200: function() {
                // If it does, show it to the user
                $("#redirect-link").attr("href", newUrl);
                $("#not-found-redirect-alert").css("display", "block");
            }
        }
    });
}
