import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Task from '../Task/Task';

class App extends Component {
  render() {   
    return (
        <BrowserRouter>
          <div class='App'>
            <Header/>
            <Footer/>
            <Route path='/user_tasks' render={() => { <Body owner='user' /> }}/>
            <Route path='/group_tasks' component={Body}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/details' component={Task}/>
          </div>          
        </BrowserRouter>        
    );
  }
}

export default App;
