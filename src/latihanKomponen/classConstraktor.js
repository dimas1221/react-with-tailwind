import React, { Component } from 'react'

class Exam extends Component {
    constructor(props) {
        super(props);
        this.state = { Counter:0 }
        this.increment= this.increment.bind(this)
        this.decrement= this.decrement.bind(this)
    }
    increment() {
        this.setState({Counter:this.state.Counter+1})
     }
     decrement() {
         this.setState({Counter:this.state.Counter-1})
      }
    render() { 
        return (  <div>
            <h1>Hello guys</h1>
            <h3>Counter:{this.state.Counter}</h3>
            <button onClick={this.increment}>+</button><button onClick={this.decrement}>-</button>
            </div>);
    }
}
 
export default Exam;