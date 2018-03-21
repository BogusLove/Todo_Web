import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

class App extends Component {
  render() {   
    return (
        <BrowserRouter>
          <div class='App'>
            <Header/>
            <Footer/>
            <Route path='/user_tasks' component={Body}/>
            <Route path='/group_tasks' component={Body}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </div>          
        </BrowserRouter>        
    );
  }
}

export default App;
