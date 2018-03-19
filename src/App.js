import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: null,
      err: null
    };
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  componentDidMount(){
    request
    .get('http://localhost:8080/tasks')
    .then(response => {          
      this.setState({tasks: JSON.stringify(response.body)}
    )})
    .catch(err => {
      this.setState({err: JSON.stringify(err)});
    });
  }
  render() {    
    console.log(this.state.tasks);
    
    return (
      <div className="App">  
        {this.state.err ? this.state.err : this.state.tasks ? this.state.tasks.map(item => {return item.task}) : 'Nothing'}
      </div>
    );
  }
}

export default App;
