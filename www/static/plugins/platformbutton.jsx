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
                    <a href="#">
                        <span className="glyphicon glyphicon-ok"></span><i>&nbsp;</i>{this.props.platform}
                    </a>
                </li>
            );
        } else {
            return (
                <li role="presentation" onClick={this.onClick}>
                    <a href="#">
                        {this.props.platform}
                    </a>
                </li>
            );
        }
    }
});

module.exports = PlatformButton;
