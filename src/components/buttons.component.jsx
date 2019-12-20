import React from 'react';
import '../App.css';


class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="calculator-keys">

                <button id="add" type="button" className="operator" value="+" onClick={this.props.value}>+</button>
                <button id="subtract" type="button" className="operator" value="-" onClick={this.props.value}>-</button>
                <button id="multiply" type="button" className="operator" value="x" onClick={this.props.value}>&times;</button>
                <button id="divide" type="button" className="operator" value="÷" onClick={this.props.value}>&divide;</button>

                <button id="seven" type="button" value="7" onClick={this.props.value}>7</button>
                <button id="eight" type="button" value="8" onClick={this.props.value}>8</button>
                <button id="nine" type="button" value="9" onClick={this.props.value}>9</button>


                <button id="four" type="button" value="4" onClick={this.props.value}>4</button>
                <button id="five" type="button" value="5" onClick={this.props.value}>5</button>
                <button id="six" type="button" value="6" onClick={this.props.value}>6</button>


                <button id="one" type="button" value="1" onClick={this.props.value}>1</button>
                <button id="two" type="button" value="2" onClick={this.props.value}>2</button>
                <button id="three" type="button" value="3" onClick={this.props.value}>3</button>


                <button id="zero" type="button" value="0" onClick={this.props.value}>0</button>
                <button id="decimal" type="button" className="decimal" value="." onClick={this.props.value}>.</button>
                <button id="clear" type="button" className="all-clear" value="all-clear" onClick={this.props.clear}>AC</button>

                <button type="button" className="equal-sign" value="=" id="equals" onClick={this.props.equal}>=</button>

            </div>
        )
    }
}

export default Buttons