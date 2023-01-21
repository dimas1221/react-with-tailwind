// extensi simple react snippet
import React, { Component } from 'react'

class Hello extends Component {
    state = { Counter :0 } 
    // FUNGSI INCREMENT
    increment() {
       this.setState({Counter:this.state.Counter+1})
    }
    decrement= () =>{
        this.setState({Counter:this.state.Counter-1})
     }
    render() { 
        return (
        <div>
            <h1>Hello guys</h1>
            <h3>Counter:{this.state.Counter}</h3>
            <button onClick={()=>this.increment()}>+</button><button onClick={this.decrement}>-</button>
        </div>);
    }
}
 
export default Hello; 