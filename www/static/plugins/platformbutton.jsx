var Preact = require('preact');
var h = require('preact').h;
var createClass = require('preact-compat').createClass;

var PlatformButton = createClass({
    getInitialState: function() {
        return {
            isActive: this.props.initiallyActive
        };
    },
    onClick: function() {
        this.props.toggleCondition('platforms', this.props.keyword);
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
