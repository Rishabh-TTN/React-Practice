import React, { Component } from 'react';
import './App.css';
import Child1 from '../src/Child/Child1';
import Child2 from '../src/Child/Child2';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: " test "
  //   }
  // }
  // func1 = (params) => {
  //   this.setState({ data: params })
  // }
  // render() {
  //   return (
  //     <div>
  //       <p> parent </p>
  //       <Child1 handler={this.func1()} />
  //       <Child2 data={this.state.data} />
  //     </div>
  //   );
  // }

  render() {
    return(
      <div> stateful component { hello() } </div>
    )
  }
}

const hello =()=>{
  return(
    <div> stateless component </div>
  )
}
export default App;
