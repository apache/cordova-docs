var React = require('react'),
    SupportedPlatforms = require('./supportedplatforms.jsx'),
    classNames      = require('classnames');

var Plugin = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.plugin !== nextProps.plugin;
    },
    copyText: function() {
        var range = document.createRange();
        range.selectNode(document.getElementById("command-" + this.props.plugin.name));

        var select = window.getSelection();
        select.addRange(range);
        try {
            document.execCommand("copy");
        } catch(error) {

        }
        select.removeAllRanges();
    },
    render: function() {
        if(!this.props.plugin) {
            // Empty card with loading wheel
            return (
                // <li>
                //     <div className="pluginCard">
                //         <div style={{ textAlign: 'center', height: 10 + "rem"}}>
                //             <span style={{ display: 'inline-block', height: 100 + "%", verticalAlign: 'middle'}} />
                //             <img style={{verticalAlign: 'middle'}} src="img/loading.gif" />
                //         </div>
                //     </div>
                // </li>
                <div className="container plugin-results-result">
                    <div className="row">
                        <div className="col-sm-9">
                            <h2>Loading...</h2>
                        </div>
                    </div>
                </div>
            )
        }

        var license = this.props.plugin.license;
        if (license && license.length > 1) {
            license = license[0];
        }
        var downloadField;
        var copyIcon;
        var npmLink = 'https://www.npmjs.com/package/' + this.props.plugin.name;

        var classes = classNames({
            'pluginCard': true,
            'featuredPlugin': this.props.plugin.isOfficial
        });

        if(this.props.plugin.downloadCount) {
            var downloadCount = this.props.plugin.downloadCount.toLocaleString();
            downloadField = <p className="downloads"><strong>{downloadCount}</strong> downloads last month</p>;
        }

        if(document.queryCommandSupported("copy")) {
            copyIcon = (<a href="#" data-toggle="tooltip" data-placement="left" title="Copy npm install command to clipboard" onClick={this.copyText}><img src="{{ site.baseurl}}/static/img/copy-clipboard-icon.svg" className="plugins-copy-to-clipboard"/></a>);
        }

        return (
            <div className="container plugin-results-result">
                {copyIcon}
                <div className="row">
                    <div className="col-sm-8">
                        <h2><a href={npmLink} onClick={trackOutboundLink.bind(this, npmLink)} target="_blank">{this.props.plugin.name}</a></h2>
                        <p className="version_and_author">v{this.props.plugin.version} by <strong>{this.props.plugin.author}</strong></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <p>{this.props.plugin.description}</p>
                        <SupportedPlatforms keywords={this.props.plugin.keywords}/>
                    </div>
                    <div className="col-sm-3 col-sm-offset-1">
                        <hr className="visible-xs results-divider-line"/>
                        <p className="license">{license}</p>
                        {downloadField}
                        <p className="last-updated">Last updated <strong>{this.props.plugin.modified} days ago</strong></p>
                    </div>
                    <div className="plugin-npm-command" id={"command-" + this.props.plugin.name}>{"npm install " + this.props.plugin.name}</div>
                </div>
            </div>
        )
    }
});

function trackOutboundLink(url) {
    ga('send', 'event', 'outbound', 'click', url);
}

module.exports = Plugin;
