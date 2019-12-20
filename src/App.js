import React from 'react';
import './App.css';

import Display from './components/display.component';
import Buttons from './components/buttons.component';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: [0],
      result: 0,
      operator: '+'
    }
  }

  handleAC = () => {
    this.setState({current: [0], result: 0, operator: '+'})
  }

  switchOperators = (operator) => {
    switch(operator){
        case '÷':
          return '/'
        case 'x':
          return '*'
    }
  }

  doMath = (num1, operator, num2) => {
    let result
    operator = operator.replace(/[÷x]/, this.switchOperators)
    if(!isNaN(num2)) {
      result = eval(num1+operator+num2)
      this.setState({result})
    }
  }


  handleClick = (e) => {
    let current = [...this.state.current]
    const result = this.state.result
    let operator = this.state.operator
    const num = parseFloat(current.join(''))

    switch(true){
      case /[÷x+-]/.test(e.target.value):
        this.doMath(result, operator, num)
        operator = e.target.value
        current = operator
        break
      case /\d/.test(e.target.value):
        if(/[0÷x+-]/.test(current)){
          current = []
        }
        current.push(e.target.value)
        break
        case /./.test(e.target.value):
        if(/[÷x+-]/.test(current)){
          current = []
        }
        if(!current.includes('.')) {
        current.push(e.target.value)
        }
        break
    }
    
    this.setState({current, operator})
    }  

  handleEqual = () => {
    let current = [...this.state.current]
    const result = this.state.result
    let operator = this.state.operator
    const num = parseFloat(current.join(''))

    this.doMath(result, operator, num)
    this.setState({current: []})
  }


  render() {
  return (
      <div id='calculator'>
        <Display 
          current={this.state.current}
          result={this.state.result}/>
        <Buttons 
        value={this.handleClick}
        clear={this.handleAC}
        plus={this.handlePlus}
        equal={this.handleEqual}
        />
      </div>
    );
  }
}
export default App;
