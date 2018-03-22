import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import days from '../../days';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    };

    componentDidMount() {
        setInterval(() => {
            this.state.date = new Date();
            this.setState({state: new Date()});
        }, 1000)
    };

    render() {   
        let auth = true;
        const date = this.state.date;
        return (            
            <div className='header'>               
                <nav class='navbar navbar-expand-lg navbar-light bg-dark'>
                    <div class='collapse navbar-collapse float-right'>
                        <a class="navbar-brand" href="/"><h3 class='text-light font-weight-bold'>Home</h3></a>                    
                    </div>
                    <div class='collapse navbar-collapse float-left'>
                        <h3 class='text-light text-center'>{days[this.state.date.getDay()]} {date.toLocaleString('ru')}</h3>                   
                    </div>                    
                    {auth ? (
                        <div>                            
                            <Link to='/user_tasks' class="btn btn-success btn-lg" role="button">Own tasks</Link>                    
                            <Link class="btn btn-danger btn-lg" to="/group_tasks" role="button">Group tasks</Link>                    
                            <a class="btn btn-warning btn-lg text-white" href="/account" role="button">Account</a>                    
                            <a class="btn btn-primary btn-lg" href="/logout" role="button">Log out</a>                    
                        </div>   
                    ) : (
                        <div>
                            <Link to='/signin' class="btn btn-primary btn-lg" role="button">Sign In</Link>                   
                        </div>  
                    )}                             
                </nav>
            </div>
        );
    }
}

export default Header;
