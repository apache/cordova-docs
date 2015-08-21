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
                    <div className="pluginCard" onClick={this.increaseSearchResults} style={{cursor: 'pointer'}}>
                        <div style={{ display: 'table', width:100 + '%', minHeight: 5 + 'rem'}}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle'}}>
                                <div style={{textAlign: 'center'}}>Show More</div>
                            </div>
                        </div>
                    </div>;
            }

            if (plugins.length === 0) {
                return (
                    <div className="container plugins-results-container">
                            No plugins found. Learn how to <a href="http://cordova.apache.org/docs/en/edge/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide">create one</a>
                    </div>
                );
            } else {
                for (var i = 0; i < InitialPageLength + this.state.searchPage * PageExtensionLength; i++) {
                    if (plugins[i]) {
                        visiblePlugins.push(<Plugin plugin={plugins[i]} key={i}/>);
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
