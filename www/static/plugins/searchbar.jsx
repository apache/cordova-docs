var Bacon = require('baconjs').Bacon;

var SearchBar = React.createClass({
    propTypes: {
        initialValue: React.PropTypes.string.isRequired,
        placeHolderText: React.PropTypes.string.isRequired,
        onUserInput: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return { textValue: this.props.initialValue }
    },

    handleChange: function(event) {
        this.setState({ textValue: event.target.value });
    },

    componentDidMount: function() {
        var self = this,
            delay = 200, // in ms
            inputElem = React.findDOMNode(this.refs.filterTextInput);

        // Convert keydown events to stream
        var text = Bacon.fromEvent(inputElem, 'keydown')
            .debounce(delay)
            .map(function(event) {
                return event.target.value;
            })
            .skipDuplicates();

        var textObservable = text.flatMapLatest(function(query) {
            return Bacon.once(query);
        });

        textObservable.onValue(function(val) {
            self.props.onUserInput(val);
        });
    },

    render: function() {
        return (
                <div className="plugins_search_container">
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            autoComplete="off"
                            placeholder="Find a Plugin..."
                            value={this.state.textValue}
                            onChange={this.handleChange}
                            ref="filterTextInput"
                            />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                        </span>
                    </div>
                </div>
        );
    }
});

module.exports = SearchBar;
