var Preact = require('preact'),
    h = require('preact').h,
    createClass = require('preact-compat').createClass;

var SortButton = createClass({
    onClick: function() {
        this.props.setSort(this.props.criteria);
    },
    render: function() {
        return (
            <li className="clickable" onClick={this.onClick}><a href="#">{this.props.criteria}</a></li>
        );
    }
});

module.exports = SortButton;
