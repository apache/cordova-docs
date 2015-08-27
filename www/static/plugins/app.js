var React           = window.React = require('react'), // assign it to window for react chrome extension
    SearchBar       = require('./searchbar.jsx'),
    PluginList      = require('./pluginlist.jsx'),
    PlatformButton  = require('./platformbutton.jsx')
    App             = {},
    SortDropdown = require('./sortdropdown.jsx');

var INPUT_DELAY = 500; // in milliseconds

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
        var staticFilters = [];
        staticFilters['platforms'] = [];
        staticFilters['authors'] = [];
        staticFilters['licenses'] = [];
        var platforms = App.getURLParameter('platforms');
        if(platforms) {
            staticFilters['platforms'] = staticFilters['platforms'].concat(platforms.split(','));
        }
        var q = App.getURLParameter('q');
        var state = {
            plugins: [],
            placeHolderText: 'Loading...',
            searchResults: [],
            staticFilters: staticFilters,
            sortCriteria: "Quality",
            downloadsReceived: false
        }

        if (q) {
            state.filterText = q;
        } else {
            state.filterText = '';
        }

        return state;
    },
    handleUserInput: function(filterText) {
        /* We receive events for all inputs, so make sure text changed */
        if(this.state.filterText !== filterText) {
            /* Routing logic */
            var platformFilters = this.state.staticFilters["platforms"];
            delay(function(){
                App.updateURL(filterText, platformFilters);
            }, INPUT_DELAY);

            this.setState({
                filterText: filterText,
                searchResults: App.filterPlugins(this.state.plugins, filterText, this.state.staticFilters)
            });
        }
    },
    toggleCondition: function(keyword, condition) {
        this.setState(function(previousState, currentProps) {
            var conditionIndex = previousState.staticFilters[keyword].indexOf(condition);
            if(conditionIndex > -1) {
                previousState.staticFilters[keyword].splice(conditionIndex, 1);
            }
            else {
                previousState.staticFilters[keyword].push(condition);
            }

            delay(function(){
                App.updateURL(previousState.filterText, previousState.staticFilters['platforms']);
            }, INPUT_DELAY);

            return {
                staticFilters: previousState.staticFilters,
                plugins: previousState.plugins,
                searchResults: App.filterPlugins(previousState.plugins, this.state.filterText, this.state.staticFilters)
            };
        });
    },
    setSort: function(sort) {
        this.setState(function(previousState, currentProps) {
            App.sortPlugins(previousState.plugins, sort)
            return {
                plugins: previousState.plugins,
                searchResults: App.filterPlugins(previousState.plugins, this.state.filterText, this.state.staticFilters),
                sortCriteria: sort
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
        filterPlugins: function(plugins, filter, staticFilters) {
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

            var combine = function(filter1, filter2) {
                var result = [].concat(filter1)
                for(var i = 0; i < filter2.length; i++) {
                    if(result.indexOf(filter2[i]) === -1) {
                        result.push(filter2[i])
                    }
                }
                return result;
            }

            for (var i = 0; i < plugins.length; i++) {
                var plugin = plugins[i];
                var fullPluginText = plugin.name.concat(plugin.author, plugin.keywords, plugin.license, plugin.description);

                if(contains(combine(filters['platforms'], staticFilters['platforms']), plugin.keywords)
                    && contains(combine(filters['authors'], staticFilters['authors']), plugin.author)
                    && contains(combine(filters['licenses'], staticFilters['licenses']), plugin.license)
                    && contains(filters['searchWords'], fullPluginText)) {
                        results.push(plugin);
                }
            };
            return results;
        },
        sortPlugins: function(plugins, criteria) {
            // Search results should be deterministic, so we need a secondary
            // sort function for cases where the plugins are equal
            var compareName = function(p1, p2) {
                if(p1.name === p2.name) {
                    return 0;
                } else if(p1.name > p2.name) {
                    return 1;
                } else {
                    return -1;
                }
            }
            switch(criteria) {
                case 'Downloads':
                    plugins.sort(function(p1, p2) {
                        if(!p1.downloadCount) {
                            return 1;
                        } else if(!p2.downloadCount) {
                            return -1;
                        }
                        if(p2.downloadCount === p1.downloadCount) {
                            return compareName(p1, p2);
                        };
                        return p2.downloadCount - p1.downloadCount;
                    });
                    break;
                case 'Recently Updated':
                    plugins.sort(function(p1, p2) {
                        if(p2.modified === p1.modified) {
                            return compareName(p1, p2);
                        };
                        return p1.modified - p2.modified;
                    });
                    break;
                case 'Quality':
                default:
                    plugins.sort(function(p1, p2) {
                        if(p2.rating === p1.rating) {
                            return compareName(p1, p2);
                        };
                        return p2.rating - p1.rating;
                    });
                    break;
            }
            return plugins;
        },
        updateURL: function(filterText, platformFilters) {
            var query = "?";
            var stateObj = {};
            if(filterText) {
                var filterTextLowerCase = filterText;
                query = "?q=" + filterTextLowerCase;
                stateObj.filterText = filterTextLowerCase;
            }

            if(platformFilters.length > 0) {
                if(query === "?") {
                    query = "?platforms=";
                } else {
                    query = query + "&platforms=";
                }
                platformFilters.forEach(function(platform) {
                    query = query + platform + ",";
                });
                query = query.slice(0, query.length - 1);
                stateObj.platforms = platformFilters;
            }

            window.history.replaceState(stateObj, "", query);
            ga('send', 'pageview', '/index.html' + query);
        },
    },
    componentDidMount: function() {
        var plugins = [],
            officialPlugins = require('./official-plugins.json').plugins,
            blacklistedPlugins = require('./blacklisted-plugins.json').plugins,
            pluginCount = 0,
            self = this,
            queryHost = "http://npmsearch.com/query",
            queryFields = "fields=name,keywords,license,description,author,modified,homepage,version,rating",
            queryKeywords = "q=keywords:%22ecosystem:cordova%22",
            queryInitialSize = Constants.NpmSearchInitialSize;

        xhrRequest(queryHost + "?" + queryFields + "&" + queryKeywords + "&size=" + queryInitialSize + "&start=0", function(xhrResult) {
            plugins = xhrResult.results;
            pluginCount = xhrResult.total;
            if (pluginCount <= queryInitialSize) {
                processPlugins.bind(self, officialPlugins, plugins)();
            } else {
                xhrRequest(queryHost + "?" + queryFields + "&" + queryKeywords + "&size=" + (pluginCount - queryInitialSize) + "&start=" + queryInitialSize, function(xhrResult) {
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

                        that.setState({
                            plugins: plugins,
                            searchResults: App.filterPlugins(plugins, this.state.filterText, this.state.staticFilters),
                            downloadsReceived: true
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

            // Initial sort is always on quality
            plugins = App.sortPlugins(plugins, 'Quality');

            if (this.isMounted()) {
                var q = App.getURLParameter('q');
                if(q) {
                    this.setState({
                        plugins: plugins,
                        filterText: q,
                        placeHolderText: 'Search ' + pluginCount + ' plugins...',
                        searchResults: App.filterPlugins(plugins, q, this.state.staticFilters)
                    });
                }
                else {
                    this.setState({
                        plugins: plugins,
                        placeHolderText: 'Search ' + pluginCount + ' plugins...',
                        searchResults: App.filterPlugins(plugins, '', this.state.staticFilters)
                    });
                }
                getDownloadCount(plugins,this);
            }
        }
    },
    render: function() {
        var createPlatformButton = function(platform, keyword, state) {
            var active = state.staticFilters["platforms"].indexOf(keyword) > -1;
            return (
                <PlatformButton platform={platform} keyword={keyword} initiallyActive={active}/>
            );
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1>Cordova Plugins</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="plugins_search_container">
                            <SearchBar
                                initialValue={this.state.filterText}
                                placeHolderText={this.state.placeHolderText}
                                onUserInput={this.handleUserInput}
                            />
                            <div className="whatisplugin_box">
                                <img src="{{ site.baseurl }}/static/img/pluggy.png"/>
                                <h2>What is a Cordova plugin?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ante placerat, gravida ligula in, interdum mauris. Sed quis est vel erat vestibulum volutpat in vitae.  <a href="#">Learn more...</a></p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                            <div className="plugins_links">
                                    <ul className="nav nav-justified">
                                    <li><a href="#"><span className="glyphicon glyphicon-plus"></span><i>&nbsp;</i>Contribute Plugins</a></li>
                                    <li><a href="#"><span className="glyphicon glyphicon-question-sign"></span><i>&nbsp;</i>Plugin Help</a></li>
                                    <li><a href="#"><span className="glyphicon glyphicon-alert"></span><i>&nbsp;</i>Plugin Issue Tracker</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row filter-by-platforms">
                        <div className="col-sm-9">
                            <div className="filter-by-platform-label"><span>Must Support Platform(s):</span></div>
                            <ul className="nav nav-pills filter-by-platform-filters">
                                {createPlatformButton("Android", "cordova-android", this.state)}
                                {createPlatformButton("iOS", "cordova-ios", this.state)}
                                {createPlatformButton("Windows 10", "cordova-windows", this.state)}
                                {createPlatformButton("Blackberry", "cordova-blackberry10", this.state)}
                                {createPlatformButton("Ubuntu", "cordova-ubuntu", this.state)}
                                {createPlatformButton("Firefox OS", "cordova-firefoxos", this.state)}
                                {createPlatformButton("WebOS", "cordova-webos", this.state)}
                                {createPlatformButton("Fire OS", "cordova-amazon-fireos", this.state)}
                                {createPlatformButton("Browser", "cordova-browser", this.state)}
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <SortDropdown selected={this.state.sortCriteria} downloadsEnabled={this.state.downloadsReceived}/>
                        </div>
                    </div>
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
