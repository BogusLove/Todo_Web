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
                    <h6 class='text-light text-left font-weight-bold'></h6>
                    <h6 class='text-light text-center font-weight-bold'>2018 @boguscompany</h6>
                    <h6 class='text-light text-right font-weight-bold'></h6>
                </nav>      
            </div>
        );
    }
}

export default Header;
