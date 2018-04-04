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
        }, 1000);
    };

    render() {   
        let auth = true;
        const date = this.state.date;
        return (            
            <div className='header'>               
                <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
                    <div className='collapse navbar-collapse float-right'>
                        <a className="navbar-brand" href="/"><h3 className='text-light font-weight-bold'>Home</h3></a>                    
                    </div>
                    <div className='collapse navbar-collapse float-left'>
                        <h3 className='text-light text-center'>{days[this.state.date.getDay()]} {date.toLocaleString('ru')}</h3>                   
                    </div>                    
                    {auth ? (
                        <div>                            
                            <Link className="btn btn-success btn-lg" to='/user_tasks/:id'  role="button">Own tasks</Link>                    
                            <Link className="btn btn-danger btn-lg" to="/group_tasks/:id" role="button">Group tasks</Link>                    
                            <a className="btn btn-warning btn-lg text-white" href="/account" role="button">Account</a>                    
                            <a className="btn btn-primary btn-lg" href="/logout" role="button">Log out</a>                    
                        </div>   
                    ) : (
                        <div>
                            <Link to='/signin' className="btn btn-primary btn-lg" role="button">Sign In</Link>                   
                        </div>  
                    )}                             
                </nav>
            </div>
        );
    }
}

export default Header;
