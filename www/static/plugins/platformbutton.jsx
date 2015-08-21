var React = require('react');

var PlatformButton = React.createClass({
    getInitialState: function() {
        return {
            isActive: this.props.initiallyActive
        };
    },
    onClick: function() {
        var appInstance = React.render(<App />, document.getElementById('container'));
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
                <li role="presentation" className="active" onClick={this.onClick}>
                    <button className="btn btn-primary">
                        <span className="glyphicon glyphicon-ok"></span><i>&nbsp;</i>{this.props.platform}
                    </button>
                </li>
            );
        } else {
            return (
                <li role="presentation" onClick={this.onClick}>
                    <button className="btn btn-default">
                        {this.props.platform}
                    </button>
                </li>
            );
        }
    }
});

module.exports = PlatformButton;
