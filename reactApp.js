// Create an App function, create a Calculator class, and our ReactDOM.render()
class Calculator extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            answer: 0,
        };
    }
    //Method Area
    xInput = (event) => {
        this.setState({
            x: event.target.value,
        });
    };
    yInput = (event) => {
        this.setState({
            y: event.target.value,
        });
    };
    handleAdd = (event) => {
        this.setState((state, props) => ({
            answer: Number(state.x) + Number(state.y),
        }));
    };
    handleMultiply = (event) => {
        this.setState((state, props) => ({
            answer: Number(state.x) * Number(state.y),
        }));
    };
    handleSubtract = (event) => {
        this.setState((state, props) => ({
            answer: Number(state.x) - Number(state.y)
        }))
    }
    handleDivide = (event) => {
        this.setState((state, props) => ({
            answer: Number(state.x) / Number(state.y)
        }))
    }
    //Render Area
    render() {
        return (
            <div id="Calculator">
                <label>X input</label>
                <input type="number" onChange={this.xInput} />
                <br />
                <label>Y input</label>
                <input type="number" onChange={this.yInput} />
                <br />
                <button onClick={this.handleAdd}>Add +</button>
                <button onClick={this.handleSubtract}>Subtract -</button>
                <button onClick={this.handleMultiply}>Multiply *</button>
                <button onClick={this.handleDivide}>Divide /</button>
                <h3>{this.state.answer}</h3>
            </div>
        );
    }
}
function App(props) {
    return (
        <div id="App">
            <h1>My React Calculator</h1>
            <Calculator />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));