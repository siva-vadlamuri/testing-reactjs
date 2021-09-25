


import React from 'react';

class App extends React.Component{
  state = {
    count : 0,
  }
  render(){
    return(

      <>
      <p>count : {this.state.count}</p>
      <button className="increment" onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
      </>
    )
  }
}
export default App;