var React = require('react');

var SortButton = React.createClass({
    onClick: function() {
        var appInstance = React.render(<App />, document.getElementById('container'));
        appInstance.setSort(this.props.criteria);
    },
    render: function() {
        return (
            <li className="clickable" onClick={this.onClick}><a href="#">{this.props.criteria}</a></li>
        );
    }
});

module.exports = SortButton;
