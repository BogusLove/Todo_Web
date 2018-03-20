import React, { Component } from 'react';
import './Footer.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    };    

    render() {          
        return (
            <div className='footer'>        
                <nav class="navbar bg-dark fixed-bottom">
                    <h4 class='text-light text-left font-weight-bold'></h4>
                    <h4 class='text-light text-center font-weight-bold'>2018 @boguscompany</h4>
                    <h4 class='text-light text-right font-weight-bold'></h4>
                </nav>      
            </div>
        );
    }
}

export default Header;
