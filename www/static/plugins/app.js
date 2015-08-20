var React           = window.React = require('react'), // assign it to window for react chrome extension
    SearchBar       = require('./searchbar.jsx'),
    PluginList      = require('./pluginlist.jsx'),
    App             = {};

var timer = null;
var Constants = {
    DownloadCountBatch: 100,
    NpmSearchInitialSize: 500
}

window.addEventListener('popstate', function(e) {
    if(e.state) {
        var appInstance = React.render(<App />, document.getElementById('container'));
        appInstance.loadFilterText(e.state.filterText);
    }
});

var App = React.createClass({
    getInitialState: function() {
        var q = App.getURLParameter('q');
        if (q) {
            return {
                plugins: [],
                filterText: q,
                placeHolderText: 'Loading...',
                searchResults: []
            }
        } else {
            return {
                plugins: [],
                filterText: '',
                placeHolderText: 'Loading...',
                searchResults: []
            };
        }
    },
    handleUserInput: function(filterText) {
        /* Routing logic */
        var filterTextLowerCase = filterText.toLowerCase();
        delay(function(){
            window.history.pushState({"filterText":filterTextLowerCase}, "", "?q=" + filterTextLowerCase);
            ga('send', 'pageview', '/index.html?q=' + filterTextLowerCase);
        }, 2000 );

        this.setState({
            filterText: filterText,
            searchResults: App.filterPlugins(this.state.plugins, filterText)
        });
    },
    addCondition: function(condition) {
        this.setState(function(previousState, currentProps) {
            if(previousState.filterText.indexOf(condition) > -1) {
                return {
                    filterText: previousState.filterText,
                    plugins: previousState.plugins
                };
            }
            else {
                return {
                    filterText: previousState.filterText.trim() + ' ' + condition + ' ',
                    plugins: previousState.plugins
                };
            }
        });
    },
    loadFilterText : function(filterText) {
        this.setState(function(previousState, currentProps) {
            return {
                filterText: filterText,
                plugins: previousState.plugins
            };
        });
    },
    statics: {
        getURLParameter : function(name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)
                ||[,""])[1].replace(/\+/g, '%20'))||null;
        },
        shallowCopy: function(src) {
            var dst = {};
            for(var i in src) {
                if(src.hasOwnProperty(i)) {
                    dst[i] = src[i];
                }
            }
            return dst;
        },
        tagOfficialPlugins: function() {

        },
        filterPlugins: function(plugins, filter) {
            var contains = function(values, pluginInfo) {
                var allValuesPresent = true;
                if(values.length == 0) {
                    return allValuesPresent;
                }
                if(!pluginInfo) {
                    return false;
                }
                values.forEach(function(value) {
                    var valuePresent = false;
                    for(var index=0; index < pluginInfo.length; index++) {
                        if(pluginInfo[index] && pluginInfo[index].toLowerCase().indexOf(value) > -1) {
                            valuePresent = true;
                        }
                    }
                    if(!valuePresent) {
                        allValuesPresent = false;
                    }
                });
                return allValuesPresent;
            }
            var populateFilters = function(filterText) {
                var searchStrings = filterText.split(" ");
                var filters = [];
                filters['platforms'] = [];
                filters['authors'] = [];
                filters['licenses'] = [];
                filters['searchWords'] = [];

                searchStrings.forEach(function(searchString) {
                    var keywords = searchString.split(":");
                    if(keywords.length == 1) {
                        var param = keywords[0].trim();
                        if(param) {
                            filters['searchWords'].push(param);
                        }
                    }
                    else if(keywords[1].trim()) {
                        var param = keywords[1].trim();
                        switch(keywords[0]) {
                            case 'platform':
                                filters['platforms'].push(param);
                                break;
                            case 'author':
                                filters['authors'].push(param);
                                break;
                            case 'license':
                                filters['licenses'].push(param);
                                break;
                            default:
                                filters['searchWords'].push(searchString);
                        }
                    }
                    else {
                        filters['searchWords'].push(searchString);
                    }
                });
                return filters;
            }
            var results = [];
            var filters = populateFilters(filter);
            for (var i = 0; i < plugins.length; i++) {
                var plugin = plugins[i];
                var fullPluginText = plugin.name.concat(plugin.author, plugin.keywords, plugin.license, plugin.description);
                if(contains(filters['platforms'], plugin.keywords)
                    && contains(filters['authors'], plugin.author)
                    && contains(filters['licenses'], plugin.license)
                    && contains(filters['searchWords'], fullPluginText)) {
                        results.push(plugin);
                }
            };
            return results;
        }
    },
    componentDidMount: function() {
        var plugins = [],
            officialPlugins = require('./official-plugins.json').plugins,
            blacklistedPlugins = require('./blacklisted-plugins.json').plugins,
            pluginCount = 0,
            self = this,
            queryHost = "http://npmsearch.com/query",
            queryFields = "fields=name,keywords,license,description,author,modified,homepage,version",
            queryKeywords = "q=keywords:%22ecosystem:cordova%22",
            queryInitialSize = Constants.NpmSearchInitialSize;

        xhrRequest(queryHost + "?" + queryFields + "&" + queryKeywords + "&size=" + queryInitialSize + "&start=0&sort=rating:desc", function(xhrResult) {
            plugins = xhrResult.results;
            pluginCount = xhrResult.total;
            if (pluginCount <= queryInitialSize) {
                processPlugins.bind(self, officialPlugins, plugins)();
            } else {
                xhrRequest(queryHost + "?" + queryFields + "&" + queryKeywords + "&size=" + (pluginCount - queryInitialSize) + "&start=" + queryInitialSize + "&sort=rating:desc", function(xhrResult) {
                        plugins = [].concat(plugins, xhrResult.results);
                        processPlugins.bind(self, officialPlugins, plugins)();
                }, function() { console.log('xhr err'); });
            }
        }, function() { console.log('xhr err'); });

        var getDownloadCount = function(plugins, that) {
            var packageNames = "";
            for(var index=0; index < plugins.length; index++) {
                packageNames += plugins[index].name + ",";
                if(index % Constants.DownloadCountBatch === 0 || index === plugins.length -1) {
                    xhrRequest("https://api.npmjs.org/downloads/point/last-month/" + packageNames, function(xhrResult) {
                        for(var j = 0; j < plugins.length; j++) {
                            if(xhrResult[plugins[j].name]) {
                                plugins[j] = App.shallowCopy(plugins[j]);
                                plugins[j].downloadCount = xhrResult[plugins[j].name].downloads;
                            }
                        }

                        // If we were unable to do server side sorting because
                        // we requested in multiple batches, do it in the client
                        if(plugins.length > Constants.NpmSearchInitialSize) {
                            plugins.sort(function(p1, p2) {
                                return p2.downloadCount - p1.downloadCount;
                            });
                        }

                        that.setState({
                            plugins: plugins,
                            searchResults: App.filterPlugins(plugins, this.state.filterText)
                        });
                    }.bind(self), function() { console.log('xhr err'); });
                    packageNames = "";
                }
            }
        }

        function processPlugins(officialPlugins, plugins) {
            var pluginCount = plugins.length,
                dateNow = new Date(),
                oneDay = 1000*60*60*24;

            officialPlugins.forEach(function(plugin) {
                for (var i = 0; i < plugins.length; i++) {
                    // Check if plugin name is in official list
                    if (plugins[i].name[0] === plugin) {
                        plugins[i].isOfficial = true;
                        return;
                    }
                };
            });

            for(var i = plugins.length -1; i >= 0 ; i--)
            {
                for(var j = 0; j < blacklistedPlugins.length; j++)
                {
                    if(plugins[i].name[0] === blacklistedPlugins[j])
                    {
                        plugins.splice(i, 1);
                        break;
                    }
                }
            }

            for (var i = 0; i < plugins.length; i++) {
                // Calculate last time plugin is modified (in days)
                plugins[i].modified = Math.ceil((dateNow - new Date(plugins[i].modified)) / oneDay);
            };

            if (this.isMounted()) {
                var q = App.getURLParameter('q');
                if(q) {
                    this.setState({
                        plugins: plugins,
                        filterText: q,
                        placeHolderText: 'Search ' + pluginCount + ' plugins...',
                        searchResults: App.filterPlugins(plugins, q)
                    });
                }
                else {
                    this.setState({
                        plugins: plugins,
                        placeHolderText: 'Search ' + pluginCount + ' plugins...',
                        searchResults: plugins
                    });
                }
                getDownloadCount(plugins,this);
            }
        }
    },
    render: function() {
        return (
            <div>
                <div id="headblock">
                    <div id="topcontent">
                        <div id="pluggy"></div>
                        <div id="discovermessage"><h1>Search Cordova Plugins</h1></div>
                    </div>
                    <SearchBar
                        initialValue={this.state.filterText}
                        placeHolderText={this.state.placeHolderText}
                        onUserInput={this.handleUserInput}
                    />
                </div>
                <PluginList plugins={this.state.searchResults} />
            </div>
        );
    }
});

App.start = function() {
    React.render(<App />, document.getElementById('container'));
};

function delay(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
}

function xhrRequest(url, success, fail) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE ) {
            if(xhr.status == 200){
                success(JSON.parse(xhr.responseText));
                return;
            } else {
                fail();
                return;
            }
        }
    }.bind(this)
    xhr.open("GET", url, true);
    xhr.send();
}

module.exports = window.App = App;
