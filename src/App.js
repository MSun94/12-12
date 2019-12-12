import React from 'react';
import './App.css';
import InputBox from './inputbox';

class App extends React.Component {
  state={
    inputNum : 0
  }
  handleOnChange(e){
    this.setState({
      inputNum: e.target.value
    })
    this.forceUpdate()
  }
  
  render(){
  return (
    <div className="App">
      <p>my app</p>
      <input type="number" onChange={this.handleOnChange.bind(this)}/>
      {/*To check if inputNum has the value we need*/}
      {this.state.inputNum>0 ? <InputBox total={this.state.inputNum}/>:"please input something above 0"}
    </div>
  );
}
}

export default App;
