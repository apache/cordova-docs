var React = require('react');

var PlatformButton = React.createClass({
    onClick: function() {
        var appInstance = React.render(<App />, document.getElementById('container'));
        appInstance.addCondition("platform:" + this.props.platform);
    },
    render: function() {
        return (
            <li className = "clickable" onClick={this.onClick}> {this.props.platform} </li>
        );
    }
});

module.exports = PlatformButton;
