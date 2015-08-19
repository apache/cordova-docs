var React = require('react'),
    SupportedPlatforms = require('./supportedplatforms.jsx'),
    classNames      = require('classnames');

var Plugin = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.props.plugin !== nextProps.plugin;
    },
    render: function() {
        if(!this.props.plugin) {
            // Empty card with loading wheel
            return (
                <li>
                    <div className="pluginCard">
                        <div style={{ textAlign: 'center', height: 10 + "rem"}}>
                            <span style={{ display: 'inline-block', height: 100 + "%", verticalAlign: 'middle'}} />
                            <img style={{verticalAlign: 'middle'}} src="img/loading.gif" />
                        </div>
                    </div>
                </li>
            )
        }

        var license = this.props.plugin.license;
        if (license && license.length > 1) {
            license = license[0];
        }
        var downloadField;
        var npmLink = 'https://www.npmjs.com/package/' + this.props.plugin.name;

        var classes = classNames({
            'pluginCard': true,
            'featuredPlugin': this.props.plugin.isOfficial
        });

        if(this.props.plugin.downloadCount) {
            var downloadCount = this.props.plugin.downloadCount.toLocaleString();
            downloadField = <p><small> {downloadCount} downloads last month</small></p>;
        }

        return (
            <li>
                <div className={classes}>
                    <div className="primaryContent">
                        <div className="header">
                            <h3><a href={npmLink} onClick={trackOutboundLink.bind(this, npmLink)} target="_blank">{this.props.plugin.name}</a></h3>
                            <small className="pluginVersion">v{this.props.plugin.version}</small>
                            <small> by </small>
                            <small className="pluginAuthor">{this.props.plugin.author}</small>
                        </div>
                        <div className="pluginDesc">{this.props.plugin.description}</div>
                    </div>
                    <div className="secondaryContent">
                        <SupportedPlatforms keywords={this.props.plugin.keywords}/>
                        <div className="extraInfo">
                            <p><small><strong>License:</strong> {license}</small></p>
                            {downloadField}
                            <p><small><em>Last updated {this.props.plugin.modified} days ago</em></small></p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
});

function trackOutboundLink(url) {
    ga('send', 'event', 'outbound', 'click', url);
}

module.exports = Plugin;
