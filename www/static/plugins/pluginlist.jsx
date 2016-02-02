var React = require('react'),
    Plugin = require('./plugin.jsx');

var InitialPageLength = 10;
var PageExtensionLength = 20;

/*
    States site loaded
 */
var PluginList = React.createClass({
    getInitialState: function() {
        return { bootstrapped: false }
    },
    componentWillReceiveProps: function() {
        // Recieving a set of plugins
        this.setState({
            bootstrapped: true,
            searchPage: 0
        });
    },
    increaseSearchResults: function() {
        this.setState({ searchPage: this.state.searchPage + 1 });
    },
    render: function() {
        if (!this.state.bootstrapped) {
            var emptyPluginList = [];

            for (var i = 0; i < InitialPageLength; i++) {
                emptyPluginList.push(<Plugin key={i}/>)
            };

            return (
                <div className="container plugins-results-container">
                    {emptyPluginList}
                </div>
            )
        } else {
            var plugins = this.props.plugins;
            var showMore = null, visiblePlugins = [];
            if (plugins.length - this.state.searchPage * PageExtensionLength > InitialPageLength) {
                showMore =
                    <div className="plugin-results-show-more btn-block btn-primary" onClick={this.increaseSearchResults}>
                        Show More
                    </div>;
            }

            if (plugins.length === 0) {
                return (
                    <div className="container plugins-results-container">
                            No plugins found. Learn how to <a href="{{ site.baseurl }}/docs/en/{{ site.default_linked_docs_version }}/guide/hybrid/plugins/index.html">create one</a>
                    </div>
                );
            } else {
                for (var i = 0; i < InitialPageLength + this.state.searchPage * PageExtensionLength; i++) {
                    if (plugins[i]) {
                        visiblePlugins.push(<Plugin plugin={plugins[i]} key={i} flashEnabled={this.props.flashEnabled}/>);
                    } else {
                        break;
                    }
                };
                return (
                    <div className="container plugins-results-container">
                        {visiblePlugins}
                        {showMore}
                    </div>
                );
            }
        }
    }
});

module.exports = PluginList;
