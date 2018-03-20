import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';

class App extends Component {
  render() {   
    return (
      <div className='mainPage'>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
