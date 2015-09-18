var React = require('react');

var PlatformButton = React.createClass({
    getInitialState: function() {
        return {
            isActive: this.props.initiallyActive
        };
    },
    onClick: function() {
        var appInstance = React.render(<App />, document.getElementById('pluginsAppContainer'));
        appInstance.toggleCondition('platforms', this.props.keyword);
        this.setState(function(prevState, currentProps) {
            return {
                isActive: !prevState.isActive
            };
        });
    },
    render: function() {
        if(this.state.isActive) {
            return (
                <button className="btn btn-primary" onClick={this.onClick}>
                    <span className="glyphicon glyphicon-ok"></span><i>&nbsp;</i>{this.props.platform}
                </button>
            );
        } else {
            return (
                <button className="btn btn-default" onClick={this.onClick}>
                    {this.props.platform}
                </button>
            );
        }
    }
});

module.exports = PlatformButton;
