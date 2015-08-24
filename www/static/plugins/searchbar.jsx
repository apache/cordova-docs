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

        // Convert input events to stream
        var text = Bacon.fromEvent(inputElem, 'input')
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
            </div>
        );
    }
});

module.exports = SearchBar;
